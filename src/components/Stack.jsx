export default function Stack({ activeItem, setActiveItem }) {
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
        "CHR running on Proxmox with NAT and firewall rules.",
    },
    wireguard: {
      title: "WireGuard",
      image: "/images/WireGuard.png",
      description:
        "Secure VPN tunnel between sites.",
    },
    ovpn: {
      title: "OVPN",
      image: "/images/OVPN.png",
      description:
        "Open VPN tunnel between sites.",
    },
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">
        NETWORK & VIRTUALIZATION STACK
      </h2>

      <div className="space-y-4">
        {Object.entries(stackData).map(([key, item]) => {
          const isActive = activeItem === key

          return (
            <div key={key}>

              {/* BUTTON */}
              <button
                onClick={() =>
                  setActiveItem(isActive ? null : key)
                }
                className={`
                  w-full
                  px-6 py-3
                  rounded-lg
                  border
                  box-border
                  text-left
                  transition-all
                  duration-200
                  font-medium
                  ${
                    isActive
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
                  }
                `}
              >
                {item.title}
              </button>

              {/* MOBILE ACCORDION */}
              <div
                className={`
                  md:hidden
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "max-h-[500px] mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-4 rounded"
                  />
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </section>
  )
}
