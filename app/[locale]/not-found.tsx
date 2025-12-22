export default function NotFound() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center flex-col gap-3">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-base opacity-70">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="bg-black rounded-lg px-5 py-3 mx-auto text-white"> Back To Home</a>
    </div>
  )
}
