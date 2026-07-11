# Stage 1: build whisper.cpp's whisper-server from pinned source
FROM debian:bookworm-slim AS whisper-build

RUN apt-get update && \
    apt-get install -y --no-install-recommends git build-essential cmake ca-certificates && \
    rm -rf /var/lib/apt/lists/*

ARG WHISPER_CPP_TAG=v1.9.1
RUN git clone --depth 1 --branch ${WHISPER_CPP_TAG} https://github.com/ggml-org/whisper.cpp /src

# GGML_NATIVE=OFF builds a portable CPU baseline instead of detecting the build
# host's features. Two reasons this is required, not just nice-to-have:
#   1. aarch64: ggml's native detection emits a self-contradictory -march
#      (…+dotprod…+nodotprod…) that the assembler rejects under emulated builds.
#   2. x86_64: a -march=native binary built on a modern CI runner can use AVX-512
#      and SIGILL on the user's older StartOS CPU (e.g. low-power N100/Celeron).
# ggml still runtime-dispatches available SIMD, so this stays correct everywhere.
RUN cmake -S /src -B /src/build \
      -DCMAKE_BUILD_TYPE=Release \
      -DBUILD_SHARED_LIBS=OFF \
      -DWHISPER_BUILD_TESTS=OFF \
      -DGGML_NATIVE=OFF && \
    cmake --build /src/build --target whisper-server -j"$(nproc)"

# Stage 2: runtime
FROM node:22-slim

# ca-certificates is needed for the HTTPS Whisper-model download on first start.
# libgomp1 is required by the whisper-server binary produced by the CMake
# Release build. Without it, whisper-server exits at runtime with:
#   error while loading shared libraries: libgomp.so.1
RUN apt-get update && \
    apt-get install -y --no-install-recommends ca-certificates libgomp1 && \
    rm -rf /var/lib/apt/lists/*

# Static ffmpeg (audio → 16 kHz mono WAV) instead of Debian's `ffmpeg` package,
# which pulls in the full libav* / codec-library dependency tree. The static
# build is one self-contained binary, shrinking the image (and the .s9pk). The
# image is multi-arch, so buildx copies the arch-matching binary automatically.
COPY --from=mwader/static-ffmpeg:7.1.1 /ffmpeg /usr/local/bin/ffmpeg

COPY --from=whisper-build /src/build/bin/whisper-server /usr/local/bin/whisper-server
COPY shim/server.js /app/server.js
COPY web/ /app/web/

ENV PORT=8081 \
    OW_MODEL=small \
    MODELS_DIR=/data/models

EXPOSE 8081

CMD ["node", "/app/server.js"]
