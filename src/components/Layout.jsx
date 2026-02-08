export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-2/3 px-8 lg:px-20 py-16">
          {children}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex w-1/3 relative justify-center">
          <div className="absolute left-0 top-0 h-full border-l border-gray-300"></div>

          <div className="flex items-center justify-center h-screen sticky top-0">
            <div className="text-6xl font-light text-gray-200 tracking-widest rotate-90">
              PRODUCTION
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
