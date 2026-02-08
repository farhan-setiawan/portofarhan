export default function Layout({ children, activeItem }) {
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
    <div className="flex flex-col md:flex-row min-h-screen bg-white">

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 p-8 md:p-12">
        {children}
      </div>

      {/* RIGHT SIDE (DESKTOP ONLY) */}
      <div className="hidden md:flex w-1/2 border-l items-center justify-center p-12">
        {activeItem ? (
          <div className="max-w-xl">
            <img
              src={stackData[activeItem].image}
              alt={stackData[activeItem].title}
              className="mb-6 rounded shadow w-full"
            />
            <h3 className="text-2xl font-semibold mb-2">
              {stackData[activeItem].title}
            </h3>
            <p className="text-gray-600">
              {stackData[activeItem].description}
            </p>
          </div>
        ) : (
          <h1 className="text-6xl text-gray-200 rotate-90 tracking-widest">
            PRODUCTION
          </h1>
        )}
      </div>

    </div>
  )
}
