import { useState } from "react"

export default function Portfolio() {

const [showLab, setShowLab] = useState(false)

  return (
    <section className="mb-16 -mt-20">
      <h2 className="text-3xl font-semibold mb-2 ">
        MY SELF-PROJECT:
        <br />
        ENGINEERING LAB
      </h2>
      <div className="md:hidden mt-8 mb-4">
        <button
            onClick={() => setShowLab(!showLab)}
            className={`w-full px-6 py-3 rounded-lg border text-left transition
                ${showLab ? "bg-gray-900 text-white" : "bg-gray-100 hover:bg-gray-200"}
            `}
        >
        About This Engineering Lab {showLab ? "▲" : "▼"}
        </button>

        <div
            className={`
                overflow-y-auto
                transition-all
                duration-500
                ${showLab ? "max-h-[900px] opacity-100 mt-4" : "max-h-0 opacity-0"}
            `}
        >
        <div className="p-4 bg-white border rounded-lg shadow-sm text-gray-600 text-justify">
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

            <button
            onClick={() => setShowLab(false)}
            className="w-full mt-4 text-sm bg-gray-300 text-gray-600 hover:text-gray-800 transition"
            >
            Hide overview ↑
            </button>

        </div>
        </div>

        </div>
      <p className="mb-8 italic text-gray-400">
        "click link below to see some of my works!"
      </p>
      <div className="space-y-6 text-xl text-gray-700">

        <p>
            <a
                href="https://farhansetiawan.my.id"
                target="_self"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition">
                farhansetiawan.my.id 
            </a>
                {" — "} React + Vite + Tailwind + {" "}
            <a
                href="https://github.com/farhan-setiawan/portofarhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition">
                CI/CD GitHub
            </a>
        </p>

        <p>
            <a
                href="https://jokijoy.biz.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition">
                    jokijoy.biz.id — Odoo Business Page
            </a>
        </p>

        <p>
            <a
                href="https://cloud.jokijoy.biz.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition">
                    cloud.jokijoy.biz.id — Nextcloud
            </a>
        </p>

        <p>
            <a
                href="https://dns.jokijoy.biz.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition">
                    dns.jokijoy.biz.id — AdGuard Home
            </a>
        </p>

        <p>
            <a
                href="https://eve.jokijoy.biz.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition">
                    eve.jokijoy.biz.id — EVE-NG Lab
            </a>
        </p>

      </div>
    </section>
  )
}
