export default function Portfolio() {
  return (
    <section className="mb-16 -mt-10">
      <h2 className="text-3xl font-semibold mb-2 ">
        MY SELF-PROJECT:
        <br />
        PRODUCTION HOME SERVER
      </h2>
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
