import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.2:0',
  releaseNotes: {
    en_US:
      'Include the OpenMP runtime required by whisper-server so the speech engine starts reliably.',
    es_ES:
      'Incluye el runtime OpenMP requerido por whisper-server para que el motor de voz arranque de forma fiable.',
    de_DE:
      'Enthält die von whisper-server benötigte OpenMP-Laufzeit, damit die Spracherkennung zuverlässig startet.',
    pl_PL:
      'Dodaje środowisko uruchomieniowe OpenMP wymagane przez whisper-server, aby silnik mowy uruchamiał się niezawodnie.',
    fr_FR:
      'Inclut le runtime OpenMP requis par whisper-server afin que le moteur vocal démarre de manière fiable.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
