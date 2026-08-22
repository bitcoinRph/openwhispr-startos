import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.4:0',
  releaseNotes: {
    en_US:
      'Track OpenWhispr upstream v1.8.3 compatibility and point package metadata at the canonical upstream repository.',
    es_ES:
      'Registra la compatibilidad con OpenWhispr v1.8.3 y apunta los metadatos del paquete al repositorio upstream canónico.',
    de_DE:
      'Dokumentiert die Kompatibilität mit OpenWhispr v1.8.3 und verweist die Paketmetadaten auf das kanonische Upstream-Repository.',
    pl_PL:
      'Odnotowuje zgodność z OpenWhispr v1.8.3 i kieruje metadane pakietu do kanonicznego repozytorium upstream.',
    fr_FR:
      'Suit la compatibilité OpenWhispr v1.8.3 et pointe les métadonnées du paquet vers le dépôt amont canonique.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
