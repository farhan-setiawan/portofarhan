export const stackData = {
  topology: {
      logo: null,
      title: "Home Server Topology",
      image: "/images/network topology.png",
      description:
        "My Home Server Topology.",
    },
  cloudflare: {
      logo: "/images/cloudflare logo.png",
      title: "Cloudflare DNS",
      image: "/images/cloudflare.png",
      description:
        "DNS configuration on Cloudflare with proxy and SSL settings.",
    },
    mikrotik: {
      logo: "/images/mikrotik logo.png",
      title: "MikroTik CHR",
      image: "/images/mikrotik.png",
      description:
        "CHR running on Cloud with NAT, port-forwarding, firewall rules and public IP adress.",
    },
    wireguard: {
      logo: "/images/WireGuard logo.png",
      title: "WireGuard",
      image: "/images/WireGuard.png",
      description:
        "Light weight secure VPN tunnel between sites and network devices.",
    },
    ovpn: {
      logo: "/images/OVPN logo.png",
      title: "OVPN",
      image: "/images/OVPN.png",
      description:
        "Reliable secure open VPN tunnel between sites.",
    },
    proxmox: {
      logo: "/images/proxmox logo.png",
      title: "Proxmox VE",
      image: "/images/proxmox.png",
      description:
        "Powerful open-source hypervisor for virtual environment.",
    },
    ubuntu: {
      logo: "/images/ubuntu logo.png",
      title: "Ubuntu Server",
      image: "/images/ubuntu.png",
      description:
        "Light weight open-source operating-system.",
    },
    nginx: {
      logo: "/images/nginx logo.png",
      title: "NGINX",
      image: "/images/nginx.png",
      description:
        "Flexible reverse proxy and load balancer.",
    },
    freepbx: {
      logo: "/images/freepbx logo.png",
      title: "FreePBX",
      image: "/images/freepbx.png",
      description:
        "Open-source VoIP server.",
    },
    docker: {
      logo: "/images/docker logo.png",
      title: "Docker Container",
      image: "/images/docker.png",
      description:
        "Containerized open-source aplication.",
    },
    adguard: {
      logo: "/images/adguard logo.png",
      title: "AdGuard Home",
      image: "/images/adguard.png",
      description:
        "DNS filter for local network, protect you from scam website.",
    },
    nextcloud: {
      logo: "/images/nextcloud logo.png",
      title: "NextCloud",
      image: "/images/nextcloud.png",
      description:
        "Your private cloud storage.",
    },
    odoo: {
      logo: "/images/odoo logo.png",
      title: "Odoo",
      image: "/images/odoo.png",
      description:
        "Integrated all-in-one platform, ERP, CRM, e-commerce, etc.",
    },
    eveng: {
      logo: "/images/eveng logo.png",
      title: "EVE-NG",
      image: "/images/eveng.png",
      description:
        "Multi-vendor networking virtualization.",
    },
    zabbix: {
      logo: "/images/zabbix logo.png",
      title: "Zabbix",
      image: "/images/zabbix.png",
      description:
        "Powerful open-source network monitoring software.",
    },
    nodejs: {
      logo: "/images/nodejs logo.png",
      title: "NodeJS",
      image: "/images/nodejs.png",
      description:
        "Runtime environment JavaScript open-source.",
    },
    react: {
      logo: "/images/react logo.png",
      title: "React Vite",
      image: "/images/react.png",
      description:
        "Library JavaScript open-source front-end.",
    },
}
export default function Stack({ activeItem, setActiveItem }) {

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-900">
        NETWORK & VIRTUALIZATION STACK
      </h2>
      <p className="mb-5 italic text-gray-400">
        "see network topology..."
      </p>
      <div className="space-y-4 min-w-1/4">
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
                    src={item.logo}
                    className="mb-4 rounded"
                  />
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
