export const stackData = {
  topology: {
      logo: null,
      title: "Home Server Topology",
      image: "/images/topologi.png",
      description: (
        <>
          <p className="mb-4">
            Arsitektur ini dirancang untuk memungkinkan self-hosted services
            dapat diakses secara publik dengan tetap menjaga keamanan dan
            segmentasi jaringan internal.
          </p>

          <p className="mb-4">
            Public traffic diarahkan melalui <strong>Cloudflare</strong>,
            diteruskan ke public IP pada <strong>MikroTik CHR</strong>,
            lalu melalui tunnel VPN (WireGuard / OpenVPN) menuju router
            di rumah.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Tujuan Desain:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Single public IP untuk multiple services</li>
            <li>Isolasi internal network</li>
            <li>Zero exposure direct-to-home IP</li>
            <li>Full control over routing & firewall policy</li>
          </ul>
        </>
      ),
    },
  cloudflare: {
      logo: "/images/cloudflare logo.png",
      title: "Cloudflare DNS",
      image: "/images/cloudflare.png",
      description:(
        <>
          <p className="mb-4">
            Cloudflare digunakan sebagai DNS authoritative server 
            sekaligus security layer untuk menyembunyikan public IP asli dari server. 
            Seluruh subdomain diarahkan melalui reverse proxy yang berada di belakang CHR.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Fitur yang dimanfaatkan:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Proxy (orange cloud) untuk IP masking</li>
            <li>Managed Challenge untuk bot mitigation</li>
            <li>SSL termination</li>
            <li>DNS management untuk multi-service deployment</li>
          </ul>
          <p className="mb-4">
            Impact:
            Menurunkan attack surface dan memungkinkan banyak layanan 
            berjalan di satu public IP dengan aman.
          </p>
        </>
      ),
    },
    mikrotik: {
      logo: "/images/mikrotik logo.png",
      title: "MikroTik CHR",
      image: "/images/mikrotik.png",
      description:(
        <>
          <p className="mb-4">
            CHR bertindak sebagai edge router di cloud yang menerima 
            trafik dari Cloudflare dan mengelolanya melalui:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Destination NAT & Port Forwarding</li>
            <li>Firewall filter rules</li>
            <li>VPN tunnel termination (WireGuard & OpenVPN)</li>
            <li>Routing antar site</li>
          </ul>
          <p className="mb-4">
            Arsitektur ini memungkinkan multiple internal services 
            dapat diakses publik menggunakan satu public IP dengan 
            kontrol penuh atas policy routing dan keamanan.
          </p>
        </>
      ),
    },
    wireguard: {
      logo: "/images/WireGuard logo.png",
      title: "WireGuard",
      image: "/images/WireGuard.png",
      description:(
        <>
          <p className="mb-4">
            Digunakan sebagai primary tunnel antara cloud CHR 
            dan home router untuk mengamankan trafik internal.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Optimasi yang dilakukan:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>MTU tuning untuk menghindari packet fragmentation</li>
            <li>Persistent keepalive untuk menjaga koneksi stabil</li>
            <li>Firewall filter untuk membatasi akses antar segment</li>
            <li>Routing optimization untuk mengurangi hop latency</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Hasil yang dicapai:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Average tunnel latency: 6–12 ms</li>
            <li>Stabil tanpa packet loss</li>
            <li>Throughput meningkat ±70% dibanding model VPN lain</li>
          </ul>
        </>
      ),
    },
    ovpn: {
      logo: "/images/OVPN logo.png",
      title: "OVPN",
      image: "/images/OVPN.png",
      description:(
        <>
          <p className="mb-4">
            OpenVPN digunakan sebagai secondary VPN tunnel selain WireGuard 
            untuk skenario yang membutuhkan Layer 2 bridging (TAP mode). 
            Berbeda dengan WireGuard yang bekerja di Layer 3 (routed mode), 
            OpenVPN memungkinkan perangkat di dua lokasi berbeda berada dalam 
            network segment yang sama melalui bridging.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Implementasi infrastruktur:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Layer 2 tunnel (TAP mode)</li>
            <li>Bridging antar site dengan subnet yang sama</li>
            <li>Mendukung perangkat/appliance yang mensyaratkan broadcast domain identik</li>
            <li>NAT traversal untuk perangkat CCTV & IoT</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Konfigurasi meliputi:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>TLS certificate-based authentication</li>
            <li>Custom port configuration</li>
            <li>Cipher selection (AES-256-GCM)</li>
            <li>Firewall rule restriction per interface</li>
            <li>Static route injection</li>
          </ul>
        </>
      ),
    },
    proxmox: {
      logo: "/images/proxmox logo.png",
      title: "Proxmox VE",
      image: "/images/proxmox.png",
      description:(
        <>
          <p className="mb-4">
            Proxmox digunakan sebagai hypervisor utama untuk menjalankan VM 
            dan container secara terisolasi. Setiap layanan kritikal seperti 
            Nextcloud, FreePBX, dan Odoo berjalan pada VM terpisah untuk 
            meminimalisir blast radius jika terjadi kegagalan.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Virtualization strategy:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Service isolation per VM</li>
            <li>Resource allocation per workload</li>
            <li>Snapshot & backup capability</li>
          </ul>
        </>
      ),
    },
    ubuntu: {
      logo: "/images/ubuntu logo.png",
      title: "Ubuntu Server",
      image: "/images/ubuntu.png",
      description:(
        <>
          <p className="mb-4">
            Ubuntu Server digunakan sebagai base OS untuk menjalankan berbagai layanan production.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Konfigurasi meliputi:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Static IP configuration</li>
            <li>SSH hardening (disable root login, custom port)</li>
            <li>UFW firewall rules</li>
            <li>Automatic security updates</li>
            <li>User privilege separation</li>
          </ul>
          <p className="mb-4">
            Impact:
            Stable Linux environment yang aman dan minimal overhead.
          </p>
        </>
      ),
    },
    nginx: {
      logo: "/images/nginx logo.png",
      title: "NGINX",
      image: "/images/nginx.png",
      description:(
        <>
          <p className="mb-4">
            NGINX bertindak sebagai reverse proxy yang menerima HTTP/HTTPS 
            request dan meneruskannya ke backend service berdasarkan domain 
            atau path routing.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Fungsi yang digunakan:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Virtual host routing</li>
            <li>SSL termination</li>
            <li>Proxy pass ke internal VM/container</li>
            <li>Load balancing (jika diperlukan)</li>
          </ul>
        </>
      ),
    },
    freepbx: {
      logo: "/images/freepbx logo.png",
      title: "FreePBX",
      image: "/images/freepbx.png",
      description:(
        <>
          <p className="mb-4">
            FreePBX digunakan sebagai VoIP PBX berbasis SIP untuk komunikasi internal.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Konfigurasi mencakup:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>SIP extensions</li>
            <li>Custom Dialplan (Group Call, Intercomm, Conference Call)</li>
            <li>NAT traversal configuration</li>
            <li>Integration dengan CCTV & doorphone</li>
          </ul>
        </>
      ),
    },
    
    adguard: {
      logo: "/images/adguard logo.png",
      title: "AdGuard Home",
      image: "/images/adguard.png",
      description:(
        <>
          <p className="mb-4">
            AdGuard Home digunakan sebagai DNS-level filtering server untuk seluruh jaringan internal.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Konfigurasi:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Custom DNS upstream</li>
            <li>Blocklist management</li>
            <li>DNS query logging</li>
            <li>Parental control & IoT isolation</li>
          </ul>
          <p className="mb-4">
            Impact:
            Menurunkan ads, tracking, dan malicious domain exposure pada seluruh network.
          </p>
        </>
      ),
    },
    docker: {
      logo: "/images/docker logo.png",
      title: "Docker Container",
      image: "/images/docker.png",
      description:(
        <>
          <p className="mb-4">
            Docker digunakan untuk menjalankan layanan lightweight secara terisolasi tanpa overhead VM.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Container Strategy:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Service-based containerization</li>
            <li>Volume mapping untuk persistent data</li>
            <li>Docker Compose untuk multi-service deployment</li>
            <li>Network isolation antar container</li>
          </ul>
          <p className="mb-4">
            Benefit:
            Deployment cepat, rollback mudah, dan efisiensi resource lebih tinggi dibanding VM.
          </p>
        </>
      ),
    },
    nextcloud: {
      logo: "/images/nextcloud logo.png",
      title: "NextCloud",
      image: "/images/nextcloud.png",
      description:(
        <>
          <p className="mb-4">
            Nextcloud di-deploy sebagai private cloud storage untuk menggantikan 
            layanan cloud publik. Berjalan pada VM terisolasi dengan reverse proxy SSL 
            dan storage backend dedicated.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Fungsi utama:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>File sync multi-device</li>
            <li>WebDAV access</li>
            <li>Role-based access control</li>
          </ul>
          <p className="mb-4">
            <h5 className="font-semibold">Impact: </h5> Full data sovereignty & zero third-party dependency.
          </p>
        </>
      ),
    },
    odoo: {
      logo: "/images/odoo logo.png",
      title: "Odoo",
      image: "/images/odoo.png",
      description:(
        <>
          <p className="mb-4">
            Odoo di-deploy sebagai ERP test environment untuk simulasi:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>CRM workflow</li>
            <li>Inventory management</li>
            <li>Accounting module</li>
            <li>E-commerce integration</li>
          </ul>
          <p className="mb-4">
            Digunakan untuk memahami arsitektur aplikasi enterprise berbasis modular monolith.
          </p>
        </>
      ),
    },
    eveng: {
      logo: "/images/eveng logo.png",
      title: "EVE-NG",
      image: "/images/eveng.png",
      description:(
        <>
          <p className="mb-4">
            EVE-NG digunakan untuk mensimulasikan topologi sebelum implementasi fisik.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Simulation use case:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Multi-router BGP scenario</li>
            <li>VLAN segmentation test</li>
            <li>VPN failover scenario</li>
            <li>Firewall policy validation</li>
          </ul>
          <p className="mb-4">
            <h5 className="font-semibold">Impact: </h5> Mengurangi trial-error pada production network.
          </p>
        </>
      ),
    },
    pulse: {
      logo: "/images/pulse logo.png",
      title: "Pulse",
      image: "/images/pulse.png",
      description:(
        <>
          <p className="mb-4">
            Pulse digunakan untuk memonitor seluruh infrastruktur 
            virtualisasi dan container secara real-time.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Infrastruktur saat ini:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Uptime server: 124+ hari tanpa restart</li>
            <li>Jumlah VM aktif: 7 Virtual Machines</li>
            <li>Jumlah container aktif: 2 Docker Containers</li>
            <li>Total services running: 9+ services</li>
            <li>Average CPU usage: 18–25%</li>
            <li>Average RAM usage: 52-70% dari 24GB</li>
            <li>Storage utilization: 68%</li>
          </ul>
        </>
      ),
    },
    nodejs: {
      logo: "/images/nodejs logo.png",
      title: "NodeJS",
      image: "/images/nodejs.png",
      description:(
        <>
          <p className="mb-4">
            NodeJS digunakan sebagai runtime untuk:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Build process (Vite)</li>
            <li>CI/CD self-hosted runner</li>
            <li>Automation script execution</li>
          </ul>
          <p className="mb-4">
            NodeJS environment dikelola dengan dependency management dan environment variable isolation.
          </p>
        </>
      ),
    },
    react: {
      logo: "/images/react logo.png",
      title: "React + Vite + Tailwind",
      image: "/images/react.png",
      description:(
        <>
          <p className="mb-4">
            Frontend dibangun menggunakan React dengan Vite sebagai build tool 
            untuk fast HMR dan optimized production build. Tailwind digunakan 
            untuk utility-first styling yang scalable dan konsisten.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Engineering consideration:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Component modularization</li>
            <li>Reusable UI structure</li>
            <li>Dynamic state management</li>
            <li>Responsive design architecture</li>
          </ul>
          <p className="mb-4">
            NodeJS environment dikelola dengan dependency management dan environment variable isolation.
          </p>
          <p className="mb-4">
            Kunjungi github 
            <a
              href="https://github.com/farhan-setiawan/portofarhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
            {" "}farhan-setiawan {" "}
            </a>
            untuk melihat code dan proses alur CI/CD pipeline
          </p>
        </>
      ),
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
      <div className="space-y-4 md:max-h-[220px] md:overflow-y-auto">
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
                  font-medium
                  text-sm
                  sm:text-base
                  lg:text-lg
                  transition-all
                  duration-200
                  
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
                  overflow-y-auto
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "max-h-[500px] mt-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="p-4 bg-white border rounded-lg shadow-sm ">
                  <div className="flex justify-center">
                  <img
                    src={item.logo}
                    className="rounded max-h-24 w-auto object-contain "
                  />
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mt-4 mb-4 rounded"
                  />
                  <div className="text-gray-600 text-justify">
                    {item.description}
                  </div>
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </section>
  )
}
