import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const current = VersionInfo.of({
  version: '0.1.5:0',
  releaseNotes: {
    en_US:
      'Rename the StartOS app to OpenWhispr and relaunch the Diction/Whisper daemons after package updates when the service is expected to run.',
    es_ES:
      'Renombra la app de StartOS a OpenWhispr y reinicia los daemons de Diction/Whisper tras las actualizaciones del paquete cuando se espera que el servicio se ejecute.',
    de_DE:
      'Benennt die StartOS-App in OpenWhispr um und startet die Diction/Whisper-Daemons nach Paketaktualisierungen neu, wenn der Dienst laufen soll.',
    pl_PL:
      'Zmienia nazwę aplikacji StartOS na OpenWhispr i ponownie uruchamia demony Diction/Whisper po aktualizacji pakietu, gdy usługa ma działać.',
    fr_FR:
      'Renomme l’application StartOS en OpenWhispr et relance les daemons Diction/Whisper après les mises à jour du paquet lorsque le service est censé fonctionner.',
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
