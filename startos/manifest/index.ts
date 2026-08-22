import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'openwhispr',
  title: 'OpenWhispr STT Server',
  license: 'MIT',
  packageRepo: 'https://github.com/bitcoinRph/openwhispr-startos',
  upstreamRepo: 'https://github.com/OpenWhispr/openwhispr',
  marketingUrl: 'https://openwhispr.com/',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    openwhispr: {
      source: { dockerBuild: { workdir: './server' } },
      arch: ['x86_64', 'aarch64'],
    },
    gateway: {
      // Built from the pinned `diction` submodule (tag v9.0) rather than the
      // upstream ghcr.io/omachala/diction-gateway:v9.0 image, which ships amd64
      // only. The gateway is a static CGO-free Go binary, so building from
      // source yields both x86_64 and aarch64 — required for StartOS to enable
      // Install on ARM hardware (Start9 Server, Raspberry Pi).
      source: { dockerBuild: { workdir: './diction/gateway' } },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    // No install alert: on StartOS the install alert pops a confirm dialog
    // before the sideload upload begins. The first-start guidance (run "Get API
    // Credentials"; the model downloads on first start) lives in instructions.md
    // and the README instead, so tapping Install proceeds straight to upload.
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
