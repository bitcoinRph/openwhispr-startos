import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const current = VersionInfo.of({
  version: '0.1.9:0',
  releaseNotes: {
    en_US:
      'Review OpenWhispr v1.10.2 compatibility, update whisper.cpp to v1.9.4 so transcripts are no longer wrapped mid-word, and move the Diction gateway to v13.0, opening its new text-route guard only when AI cleanup is configured so dictation and cleanup keep working.',
    es_ES:
      'Revisa la compatibilidad con OpenWhispr v1.10.2, actualiza whisper.cpp a v1.9.4 para que las transcripciones ya no se corten a mitad de palabra y lleva la pasarela Diction a v13.0, abriendo su nueva protección de rutas de texto solo cuando la limpieza con IA está configurada, de modo que el dictado y la limpieza sigan funcionando.',
    de_DE:
      'Prüft die OpenWhispr-v1.10.2-Kompatibilität, aktualisiert whisper.cpp auf v1.9.4, sodass Transkripte nicht mehr mitten im Wort umbrochen werden, und hebt das Diction-Gateway auf v13.0 an, wobei dessen neue Textrouten-Sperre nur bei konfigurierter KI-Bereinigung geöffnet wird, damit Diktat und Bereinigung weiter funktionieren.',
    pl_PL:
      'Sprawdza zgodność z OpenWhispr v1.10.2, aktualizuje whisper.cpp do v1.9.4, dzięki czemu transkrypcje nie są już dzielone w środku słowa, i podnosi bramę Diction do v13.0, otwierając jej nową blokadę tras tekstowych tylko przy skonfigurowanym czyszczeniu AI, aby dyktowanie i czyszczenie nadal działały.',
    fr_FR:
      'Vérifie la compatibilité OpenWhispr v1.10.2, met à jour whisper.cpp vers v1.9.4 pour que les transcriptions ne soient plus coupées en plein mot, et passe la passerelle Diction en v13.0, en ouvrant sa nouvelle protection des routes de texte uniquement lorsque le nettoyage IA est configuré afin que la dictée et le nettoyage continuent de fonctionner.',
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
