import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.1:0',
  releaseNotes: {
    en_US:
      'Multi-arch (x86_64 + aarch64), portable CPU build, smaller image, and a simplified install flow.',
    es_ES:
      'Multiarquitectura (x86_64 + aarch64), compilación de CPU portátil, imagen más pequeña e instalación simplificada.',
    de_DE:
      'Multi-Arch (x86_64 + aarch64), portabler CPU-Build, kleineres Image und vereinfachter Installationsablauf.',
    pl_PL:
      'Wieloarchitektura (x86_64 + aarch64), przenośny build CPU, mniejszy obraz i uproszczona instalacja.',
    fr_FR:
      'Multi-arch (x86_64 + aarch64), build CPU portable, image plus petite et installation simplifiée.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
