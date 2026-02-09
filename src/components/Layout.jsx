import {stackData} from "./Stack"
export default function Layout({ children, activeItem }) {
  return (
    <div className="flex flex-col md:grid grid-cols-6 w-screen h-screen bg-white">

      {/* LEFT SIDE */}
      <div className="w-full md:max-w-1/4 p-8 col-span-2">
        {children}
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:block border-l col-span-4">
        <div className="sticky top-0 h-screen flex items-center justify-center p-12 overflow-hidden">
            {activeItem ? (
            <div className="max-w-full max-h-full flex flex-col item-center">
                {stackData[activeItem].logo && (
                  <img
                    src={stackData[activeItem].logo}
                    alt={`${stackData[activeItem].title} logo`}
                    className="mb-4 max-h-[100px] object-contain"
                  />
                  )       
                }
                {/* MAIN IMAGE */}
                {stackData[activeItem].image && (
                  <img
                    src={stackData[activeItem].image}
                    alt={stackData[activeItem].title}
                    className="mb-6 rounded shadow max-w-full max-h-[50vh] object-contain"
                    loading="lazy"
                  />
                )}
                <h3 className="text-2xl font-semibold mb-2">
                {stackData[activeItem].title}
                </h3>
                <p className="text-gray-600">
                {stackData[activeItem].description}
                </p>
            </div>
            ) : (
            <div className="flex item-center justify-center">  
            <h1 className="text-6xl text-gray-200 rotate-90 tracking-widest">
                PRODUCTION
            </h1>
            </div>
            )}
        </div>
     </div>

    </div>
  )
}
