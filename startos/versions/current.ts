import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const current = VersionInfo.of({
  version: '0.1.7:0',
  releaseNotes: {
    en_US:
      'Review OpenWhispr v1.9.0 compatibility for the StartOS local STT service, preserving the existing Diction gateway, local Whisper model storage, and QA-gated custom registry release path.',
    es_ES:
      'Revisa la compatibilidad de OpenWhispr v1.9.0 para el servicio local STT de StartOS y conserva la pasarela Diction, el almacenamiento local de modelos Whisper y la ruta de publicación al registro personalizado validada por QA.',
    de_DE:
      'Prüft die OpenWhispr-v1.9.0-Kompatibilität für den lokalen StartOS-STT-Dienst und behält das bestehende Diction-Gateway, die lokale Whisper-Modellspeicherung und den QA-geprüften Veröffentlichungsweg zur benutzerdefinierten Registry bei.',
    pl_PL:
      'Sprawdza zgodność OpenWhispr v1.9.0 z lokalną usługą STT dla StartOS, zachowując bramę Diction, lokalne przechowywanie modeli Whisper oraz ścieżkę publikacji do niestandardowego rejestru zabezpieczoną przez QA.',
    fr_FR:
      'Vérifie la compatibilité OpenWhispr v1.9.0 pour le service STT local StartOS tout en conservant la passerelle Diction, le stockage local des modèles Whisper et le chemin de publication vers le registre personnalisé validé par QA.',
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
