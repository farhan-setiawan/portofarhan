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
    }
  }

  return (
    <div className="min-h-screen flex bg-white">

      {/* LEFT SIDE */}
      <div className="w-1/2 p-12">
        {children}
      </div>

      {/* RIGHT SIDE */}
        <div className="hidden md:flex w-1/2 border-l items-center justify-center p-12">
        {activeItem ? (
            <div className="max-w-xl">
            <img
                src={stackData[activeItem].image}
                className="mb-6 rounded shadow"
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
