import {combinedStackData} from "./StackRegistry"
export default function Layout({ children, activeItem }) {
  return (
    <div className="flex flex-col md:grid grid-cols-6 w-screen h-screen bg-white">

      {/* LEFT SIDE */}
      <div className="col-span-2 p-8 h-screen overflow-y-auto w-full">
        {children}
      </div>
      {/* RIGHT SIDE */}
      <div className="hidden md:block border-l col-span-4 ">
        <div className="sticky top-0 h-screen flex items-center justify-center p-12 relative overflow-y-auto">
            {activeItem ? (
            <div 
              key={`${activeItem}-${Date.now()}`}
              className="max-w-full max-h-full flex flex-col item-center">
                {combinedStackData[activeItem]?.logo && (
                  <img
                    src={combinedStackData[activeItem].logo}
                    alt={`${combinedStackData[activeItem].title} logo`}
                    className="mb-4 max-h-[100px] object-contain transition-opacity duration-300 ease-in-out opacity-100 animate-fadeIn"
                  />
                  )       
                }
                {/* MAIN IMAGE */}
                <div className="mb-6 flex justify-center">
                  <div className="inline-block rounded-xl shadow-lg overflow-hidden">
                    <img
                      src={combinedStackData[activeItem].image}
                      alt={combinedStackData[activeItem].title}
                      className="block max-h-[45vh] w-auto transition-opacity duration-300 ease-in-out opacity-100 animate-fadeIn"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2 transition-opacity duration-300 ease-in-out opacity-100 animate-fadeIn">
                {combinedStackData[activeItem].title}
                </h3>
                <div className="mb-4 text-gray-600 transition-opacity duration-300 ease-in-out opacity-100 animate-fadeIn text-justify ">
                {combinedStackData[activeItem].description}
                </div>
            </div>
            ) : (
            <div className="flex item-center justify-center transition-opacity duration-300 ease-in-out opacity-100 animate-fadeIn">  
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
