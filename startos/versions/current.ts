import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.3:0',
  releaseNotes: {
    en_US:
      'Add a default local-LLM transcript cleanup prompt so Diction enhancement returns cleaned text instead of generic chat responses.',
    es_ES:
      'Añade una instrucción predeterminada para limpieza de transcripciones con LLM local, para que Diction devuelva texto corregido en lugar de respuestas genéricas.',
    de_DE:
      'Fügt eine Standardanweisung für die lokale LLM-Transkriptbereinigung hinzu, damit Diction bereinigten Text statt allgemeiner Chat-Antworten zurückgibt.',
    pl_PL:
      'Dodaje domyślną instrukcję czyszczenia transkrypcji przez lokalny LLM, aby Diction zwracał poprawiony tekst zamiast ogólnych odpowiedzi czatu.',
    fr_FR:
      'Ajoute une consigne par défaut de nettoyage de transcription par LLM local afin que Diction renvoie un texte corrigé plutôt que des réponses de chat génériques.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
