import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const current = VersionInfo.of({
  version: '0.1.8:0',
  releaseNotes: {
    en_US:
      'Review OpenWhispr v1.9.2 compatibility for the StartOS local STT service and update whisper.cpp to v1.9.2, preserving the Diction gateway, local Whisper model storage, and QA-gated custom registry release path.',
    es_ES:
      'Revisa la compatibilidad de OpenWhispr v1.9.2 para el servicio STT local de StartOS y actualiza whisper.cpp a v1.9.2, conservando la pasarela Diction, el almacenamiento local de modelos Whisper y la ruta de publicación al registro personalizado validada por QA.',
    de_DE:
      'Prüft die OpenWhispr-v1.9.2-Kompatibilität für den lokalen StartOS-STT-Dienst und aktualisiert whisper.cpp auf v1.9.2, während Diction-Gateway, lokale Whisper-Modellspeicherung und QA-geprüfter Veröffentlichungsweg zur benutzerdefinierten Registry erhalten bleiben.',
    pl_PL:
      'Sprawdza zgodność OpenWhispr v1.9.2 z lokalną usługą STT dla StartOS i aktualizuje whisper.cpp do v1.9.2, zachowując bramę Diction, lokalne przechowywanie modeli Whisper oraz ścieżkę publikacji do niestandardowego rejestru zabezpieczoną przez QA.',
    fr_FR:
      'Vérifie la compatibilité OpenWhispr v1.9.2 pour le service STT local StartOS et met à jour whisper.cpp vers v1.9.2, tout en conservant la passerelle Diction, le stockage local des modèles Whisper et le chemin de publication vers le registre personnalisé validé par QA.',
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
