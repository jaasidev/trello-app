export function generarIdUnico() {
  return (
    Date.now().toString(36).slice(-4) + Math.random().toString(36).slice(2, 6)
  )
}
