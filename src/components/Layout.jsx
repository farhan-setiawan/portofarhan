import {stackData} from "./Stack"
export default function Layout({ children, activeItem }) {
  // const stackData = {
  //   cloudflare: {
  //     title: "Cloudflare DNS",
  //     image: "/images/cloudflare.png",
  //     description:
  //       "DNS configuration on Cloudflare with proxy and SSL settings.",
  //   },
  //   mikrotik: {
  //     title: "MikroTik CHR",
  //     image: "/images/mikrotik.png",
  //     description:
  //       "CHR running on Proxmox with NAT and firewall rules.",
  //   },
  //   wireguard: {
  //     title: "WireGuard",
  //     image: "/images/WireGuard.png",
  //     description:
  //       "Secure VPN tunnel between sites.",
  //   },
  //   ovpn: {
  //     title: "OVPN",
  //     image: "/images/OVPN.png",
  //     description:
  //       "Open VPN tunnel between sites.",
  //   },
  // }

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
                <img
                src={stackData[activeItem].logo}
                className="mb-6 rounded h-20 object-contain w-full "
                />
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
