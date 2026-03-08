import {combinedStackData} from "./StackRegistry"
export default function Layout({ children, activeItem }) {
  return (
    <div className="flex flex-col md:grid grid-cols-6 w-screen h-screen bg-white">

      {/* LEFT SIDE */}
      <div className="col-span-2 p-8 h-screen overflow-y-auto w-full pb-16">
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
            <div className="transition-opacity duration-300 ease-in-out opacity-100 animate-fadeIn">  
            <h1 className="text-6xl text-gray-200 mb-12 mt-24">
                PERSONAL ENGINEERING LAB
            </h1>
            <div className="text-lg text-justify">
              <p className="mb-2">
              Hello, my name is Farhan.
              </p>

              <p className="mb-2">
              Besides the projects and responsibilities I handle in my professional 
              career as a <strong>Telecommunication Engineer</strong> in the oil & gas industry, 
              I also build and operate my own <strong>personal engineering projects</strong> at home.
              </p>

              <p className="mb-2">
              These projects are not only meant for learning. 
              They are designed to <strong>explore new technologies</strong>, 
              expand practical knowledge, and implement real-world solutions 
              that I can use in everyday life.
              </p>

              <p className="mb-2">
              Through these self-projects, I experiment with various technologies 
              such as <strong>networking, virtualization, home automation, VoIP systems, 
              and infrastructure services</strong>. Every system is built from scratch 
              and involves the complete engineering cycle — from <strong>planning 
              and budgeting, to installation, configuration, troubleshooting, operation, 
              and long-term maintenance</strong>.
              </p>

              <p className="mb-2">
              Some of these systems help support my professional work, 
              such as running network simulations using <strong>EVE-NG</strong> that can be 
              accessed remotely from anywhere. Others are designed to simplify 
              daily life, such as managing personal files with <strong>Nextcloud</strong>, 
              filtering internet traffic in real time using <strong>AdGuard Home</strong>, 
              and automating devices inside my home through <strong>Home Assistant</strong>.
              </p>

              <p className="mb-2">
              I also run a small side project that connects gamers with trusted 
              account caretakers when they are too busy to play themselves — turning 
              a simple idea into a small operational platform using <strong>Odoo</strong>.
              </p>

              <p className="mb-2">
              This website documents those self-built systems and how they work.
              </p>

              <p className="mb-2">
              Click the items on the left to explore the architecture, 
              technologies, and engineering decisions behind each project.
              </p>

              <p className="mb-2">
              If you're interested in my work and want to know me better, 
              feel free to visit my social links as well.
              </p>

              <p className="mb-2">
              See you around.
              </p>

            </div>
            </div>
            )}
        </div>
     </div>

    </div>
  )
}
