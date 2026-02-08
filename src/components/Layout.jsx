import {stackData} from "./Stack"
export default function Layout({ children, activeItem }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 p-8 md:p-12">
        {children}
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:block w-full border-l relative">
        <div className="sticky top-0 h-screen flex items-center justify-center p-12 overflow-auto">
            {activeItem ? (
            <div className="max-w-xl transition-all duration-300 ">
                {/* <img
                src={stackData[activeItem].logo}
                className="mb-6 rounded h-20 object-contain w-full "
                /> */}
                {stackData[activeItem].logo && (
                  <img
                    src={stackData[activeItem].logo}
                    alt={`${stackData[activeItem].title} logo`}
                    className="mb-6 h-20 w-auto object-contain"
                  />
        )       }
                {/* <img
                src={stackData[activeItem].image}
                className="mb-6 rounded shadow"
                /> */}
                {/* MAIN IMAGE */}
                {stackData[activeItem].image && (
                  <img
                    src={stackData[activeItem].image}
                    alt={stackData[activeItem].title}
                    className="mb-6 rounded shadow"
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
            <div className="max-w-xl transition-all duration-300">  
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
