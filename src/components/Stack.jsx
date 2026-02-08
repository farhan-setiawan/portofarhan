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
    }
  }

  return (
    <section className="mt-16 space-y-4">
      <h2 className="text-2xl font-bold mb-6">
        NETWORK & VIRTUALIZATION STACK
      </h2>

      {Object.entries(stackData).map(([key, item]) => (
        <div key={key}>

          {/* Button */}
          <button
            onClick={() =>
              setActiveItem(activeItem === key ? null : key)
            }
            className="w-full text-left px-4 py-3 rounded bg-gray-100"
          >
            {item.title}
          </button>

          {/* ACCORDION CONTENT (MOBILE ONLY) */}
          {activeItem === key && (
            <div className="md:hidden mt-3 p-4 bg-white border rounded shadow-sm">
              <img
                src={item.image}
                className="mb-4 rounded"
              />
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          )}

        </div>
      ))}
    </section>
  )
}
