import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const current = VersionInfo.of({
  version: '0.1.6:0',
  releaseNotes: {
    en_US:
      'Refresh the OpenWhispr v1.8.3 compatibility release with QA-gated StartOS registry readiness notes while preserving safe daemon relaunch after package updates.',
    es_ES:
      'Actualiza la versión de compatibilidad OpenWhispr v1.8.3 con notas de preparación para el registro StartOS validadas por QA y conserva el relanzamiento seguro de daemons tras las actualizaciones.',
    de_DE:
      'Aktualisiert die OpenWhispr-v1.8.3-Kompatibilitätsversion mit QA-geprüften Hinweisen zur StartOS-Registry-Bereitschaft und behält den sicheren Daemon-Neustart nach Paketaktualisierungen bei.',
    pl_PL:
      'Odświeża wydanie zgodności OpenWhispr v1.8.3 o zweryfikowane przez QA informacje gotowości rejestru StartOS i zachowuje bezpieczne ponowne uruchamianie daemonów po aktualizacjach.',
    fr_FR:
      'Actualise la version de compatibilité OpenWhispr v1.8.3 avec des notes de préparation au registre StartOS validées par QA tout en conservant la relance sûre des daemons après mise à jour.',
  },
  migrations: {
    up: async ({ effects }) => {
      const status = await effects.getStatus({})
      if (status?.desired.main !== 'stopped') {
        await sdk.restart(effects)
      }
    },
    down: IMPOSSIBLE,
  },
})
