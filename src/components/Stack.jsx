import { useState, useEffect } from "react"

const stackData = {
  cloudflare: {
    title: "Cloudflare DNS",
    image: "/images/cloudflare.png",
    description:
      "DNS configuration on Cloudflare with proxy and SSL settings.",
  },
  mikrotik: {
    title: "MikroTik CHR",
    image: "/images/mikrotik.png",
    description:
      "MikroTik CHR running on Proxmox with firewall & NAT.",
  },
  wireguard: {
    title: "WireGuard",
    image: "/images/WireGuard.png",
    description:
      "WireGuard VPN configuration for secure tunnels.",
  },
  ovpn: {
    title: "OVPN",
    image: "/images/OVPN.png",
    description:
      "Open VPN configuration for secure tunnels.",
  }
}

export default function Stack() {
  const [activeItem, setActiveItem] = useState(null)

  // Close activeItem when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest(".stack-item")) {
        setActiveItem(null)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">
        NETWORK & VIRTUALIZATION STACK
      </h2>

      {/* Network Topology */}
      <div className="mb-8 text-center">
        <img
          src="/images/topologi.png"
          className="mx-auto w-40 rounded shadow"
          alt="Network Topology"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {/* LEFT COLUMN */}
        <div className="space-y-4">
          {Object.entries(stackData).map(([key, item]) => (
            <div
              key={key}
              className="stack-item"
              onClick={(e) => {
                e.stopPropagation()
                setActiveItem(activeItem === key ? null : key)
              }}
            >
              <button
                className={`block text-left text-lg font-medium ${
                  activeItem === key ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {item.title}
              </button>

              {/* MOBILE ACCORDION */}
              {activeItem === key && (
                <div className="md:hidden mt-4 space-y-2">
                  <img
                    src={item.image}
                    className="rounded shadow"
                    alt={item.title}
                  />
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="hidden md:block md:col-span-2 border-l pl-8">
          {activeItem ? (
            <>
              <img
                src={stackData[activeItem].image}
                className="rounded mb-4 w-full"
                alt={stackData[activeItem].title}
              />
              <h4 className="font-semibold text-xl mb-2">
                {stackData[activeItem].title}
              </h4>
              <p className="text-gray-600">
                {stackData[activeItem].description}
              </p>
            </>
          ) : (
            <p className="text-gray-400">
              Click a stack item to see details
            </p>
          )}
        </div>

      </div>
    </section>
  )
}
