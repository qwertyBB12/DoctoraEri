export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-crema">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-perla border-t-borgonia rounded-full animate-spin mx-auto mb-4" />
        <p className="text-taupe text-sm">Cargando...</p>
      </div>
    </div>
  )
}
