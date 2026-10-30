import type { ReviewStatus } from './types'

export const reviewLabels: Record<ReviewStatus, string> = {
  verificada: 'Historia verificada',
  corregida: 'Historia corregida',
  contextual: 'Contexto documentado',
}

export const reviewDescriptions: Record<ReviewStatus, string> = {
  verificada: 'Los hechos centrales se contrastaron con las fuentes citadas. Una síntesis no es una revisión exhaustiva.',
  corregida: 'La versión inicial se corrigió a partir de la evidencia leída. Las precisiones se explican en las notas editoriales.',
  contextual: 'La historia sitúa el tema con material de contexto; no todos sus detalles cuentan con evidencia específica.',
}
