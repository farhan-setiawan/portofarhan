export const stackData = {
  topology: {
      logo: null,
      title: "Home Server Topology",
      image: "/images/topologi.png",
      description: (
        <>
          <p className="mb-4">
            This architecture is designed to allow self-hosted services 
            to be publicly accessible while maintaining <strong>security and 
            proper internal network</strong> segmentation.
          </p>

          <p className="mb-4">
            Public traffic is first routed through <strong>Cloudflare</strong>,
            then forwarded to the public IP address on a <strong>MikroTik CHR 
            (Cloud Hosted Router)</strong> instance,
            From there, the traffic is securely delivered to the home network through 
            a VPN tunnel (WireGuard / OpenVPN) that connects to the router located at home.
          </p>
          <p className="mb-4">
            This design ensures that the home network remains protected 
            while still allowing controlled external access to internal services.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Design Objective:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Use a single public IP address to host multiple services</li>
            <li>Maintain clear separation of internal network segments</li>
            <li>Ensure no direct exposure of the home IP address to the public internet</li>
            <li>Keep full control over routing and firewall policies</li>
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
            Cloudflare is used as the authoritative DNS server and an 
            additional security layer to hide the server’s real public IP address.
            All subdomains are routed through a reverse proxy infrastructure 
            running behind the MikroTik CHR router.
            This setup allows external traffic to be filtered and controlled 
            before reaching the internal services hosted on the home server.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Features Used:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Proxy (orange cloud) for IP masking and traffic routing</li>
            <li>Managed Challenge to mitigate automated bot traffic</li>
            <li>SSL termination to handle HTTPS encryption at the edge</li>
            <li>DNS management for deploying and managing multiple services under different subdomains</li>
          </ul>
          <p className="mb-4">
            Impact:
            This architecture <strong>reduces the overall attack surface</strong> 
            and enables multiple services to run securely behind a single public IP address.
          </p>
        </>
      ),
    },
    mikrotik: {
      logo: "/images/mikrotik logo.png",
      title: "MikroTik Cloud Hosted Router",
      image: "/images/mikrotik.png",
      description:(
        <>
          <p className="mb-4">
            The MikroTik Cloud Hosted Router (CHR) acts as the edge router in the cloud, 
            receiving traffic from Cloudflare and managing how it is forwarded to 
            internal services.
            The router handles several key networking functions, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Destination NAT and port forwarding to route external request to specific internal services</li>
            <li>Firewall filter rules to enforce network security policies</li>
            <li>VPN tunnel termination for secure connectivity using WireGuard and OpenVPN</li>
            <li>Intersite-routing between the cloud router and the home network</li>
          </ul>
          <p className="mb-4">
            Architecture Role:
            This architecture allows multiple internal services to be 
            publicly accessible using a single public IP address, 
            while maintaining full control over routing policies, 
            traffic filtering, and network security.
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
            WireGuard is used as the primary VPN tunnel between the MikroTik CHR 
            router in the cloud and the home router, providing a secure channel 
            for internal network traffic between both sites.
            Compared to traditional VPN solutions, WireGuard offers better 
            performance, lower overhead, and a simpler cryptographic design, 
            making it well suited for this infrastructure.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Optimization:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>MTU tuning to prevent packet fragmentation across the tunnel</li>
            <li>Persistent keepalive configuration to maintain a stable connection</li>
            <li>Firewall filtering rules to restrict access between network segments</li>
            <li>Routing optimization reduce unnecessary hops and latency</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Result:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Average tunnel latency: 6–12 ms</li>
            <li>Stable connection with no obsevable packet loss</li>
            <li>Approximately ±70% higher throughput compared to previous VPN configurations</li>
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
            OpenVPN is deployed as a secondary VPN tunnel alongside WireGuard 
            to support scenarios that require Layer 2 bridging (TAP mode).
            Unlike WireGuard, which operates at Layer 3 using routed networking, 
            OpenVPN can operate in Layer 2 mode, allowing devices in different 
            locations to appear as if they are connected within the same network 
            segment through bridging. This capability is useful for systems or 
            appliances that rely on broadcast traffic or identical network environments.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Infrastructure Implementation:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Layer 2 tunnel (TAP mode) for ethernet-level connectivity</li>
            <li>Inter-site bridging that allows both locations to share the same subnet</li>
            <li>Support for devices or aplliances requiring the same broadcast domain</li>
            <li>NAT traversal to enable connectivity for certain CCTV and IoT devices</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Configuration Highlights:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>TLS certificate-based authentication for secure client verification</li>
            <li>Custom port configuration to avoid common VPN scanning ports</li>
            <li>AES-256-GCM encryption cipher for secure data transmission</li>
            <li>Firewall rule restriction per interface to control traffic flow</li>
            <li>Static route injection for proper network reachibility between segments</li>
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
            Proxmox Virtual Environment (Proxmox VE) is used as the primary hypervisor 
            to run virtual machines and containers in an isolated environment.
            Each critical service — such as Nextcloud, FreePBX, and Odoo — 
            operates on a separate virtual machine to reduce the blast radius in case 
            of service failure or system issues. This approach improves reliability 
            and makes troubleshooting and maintenance easier.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Virtualization strategy:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Service isolation per virtual machine to prevent cross-service impact</li>
            <li>Dedicated resource allocation per workload to maintain stable performance</li>
            <li>Snapshot and backup capability to support system recovery and safe updates</li>
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
            Ubuntu Server is used as the base operating system for many of the 
            production services due to its lightweight footprint, stability, 
            and long-term support.
            Its minimal resource usage makes it well suited for running multiple 
            infrastructure services efficiently on virtual machines.
          </p>
          <h4 className="font-semibold mt-4 mb-2">System Configuration:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Static IP configuration for consistent network addressing</li>
            <li>SSH hardening, including disabling root login and using a custom SSH port</li>
            <li>UFW firewall rules to control inbound and outbound traffic</li>
            <li>Automatic security updates to ensure the system remain patched</li>
            <li>User privilege separation to reduce security risks</li>
          </ul>
          <p className="mb-4">
            Impact:
            This configuration provides a stable and secure Linux environment 
            with minimal system overhead, making it ideal for hosting long-running 
            infrastructure services.
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
            NGINX is used as a reverse proxy server that receives incoming 
            HTTP and HTTPS requests and forwards them to the appropriate backend 
            services based on domain names or path-based routing. This setup allows 
            multiple internal services to be accessed through a single entry point 
            while keeping the underlying infrastructure organized and secure.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Key Functions:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Virtual host routing to direct traffic based on domain names</li>
            <li>SSL termination to handle HTTPS encryption at the proxy layer</li>
            <li>Proxy pass configuration to forward requests to internal VMs or containers</li>
            <li>Load balancing to distribute traffic across multiple backend services when required</li>
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
            FreePBX is deployed as a SIP-based VoIP PBX system to support 
            internal voice communication within the network. The system provides 
            flexible call routing and integrates with several on-premise devices 
            to enable communication across different parts of the infrastructure.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Configuration:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>SIP extensions for internal users and devices</li>
            <li>Custom Dialplan supporting features such as group call, intercomm, and conference call</li>
            <li>NAT traversal configuration to allow communication across network boundaries</li>
            <li>Integration with CCTV systems and doorphone devices for voice communication and remote access</li>
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
            AdGuard Home is deployed as a DNS-level filtering server for the 
            entire internal network. By controlling DNS resolution centrally, 
            it helps improve privacy, security, and network cleanliness by blocking 
            unwanted domains before connections are established.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Configuration:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Custom DNS upstream servers for optimized and reliable name resolution</li>
            <li>Blocklist management to filter advertising, tracking, and malicious domains</li>
            <li>DNS query logging for monitoring and troubleshooting network activity</li>
            <li>Parental control policies and IoT device isolation to manage access for specific devices</li>
          </ul>
          <p className="mb-4">
            Impact:
            This setup significantly reduces advertisements, tracking attempts, 
            and exposure to malicious domains across the entire network.
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
            Docker is used to run lightweight services in isolated environments 
            without the overhead of full virtual machines. This approach allows 
            applications to be deployed quickly while maintaining clear separation 
            between services.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Container Strategy:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Service-based containerization, where each service runs in its own container</li>
            <li>Volume mapping to provide persistent storage for application data</li>
            <li>Docker Compose for managing and deploying multi-service stacks</li>
            <li>Network isolation between containers to control internal service communication</li>
          </ul>
          <p className="mb-4">
            Benefit:
            This approach provides several operational advantages, such as faster deployment
            and service startup, simplified rollback during updates or failures, and more 
            efficient resource utilization compared to full virtual machines.
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
            Nextcloud is deployed as a private cloud storage platform, replacing 
            reliance on public cloud services for file storage and synchronization.
            The service runs on an isolated virtual machine, protected by a reverse 
            proxy with SSL termination, and uses a dedicated storage backend to ensure 
            reliable data management.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Core Functions:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Multi-device file synchronization across desktops and mobile devices</li>
            <li>WebDAV access for direct file management and integration with external applications</li>
            <li>Role-based access control to manage user permissions and data sharing</li>
          </ul>
          <p className="mb-4">
            <h5 className="font-semibold">Impact: </h5> This setup provides full data sovereignty and eliminates
            dependency on third-party cloud providers, while maintaining the convenience of a modern cloud storage system.
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
            Odoo is deployed as an ERP test environment to explore and simulate 
            various enterprise business workflows. The platform is used to study how 
            integrated business systems operate within a single application ecosystem.
            Several core modules are implemented to simulate real-world business operations:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>CRM workflow for managing customer relationships and sales pipelines</li>
            <li>Inventory management for tracking products and stock movement</li>
            <li>Accounting modules for financial records and transaction management</li>
            <li>E-commerce integration for connecting online storefronts with backend operations</li>
          </ul>
          <p className="mb-4">
            Purpose: This environment is used to understand the architecture of 
            enterprise applications built using a modular monolithic design, 
            where multiple business modules operate within a unified system.
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
            EVE-NG (Emulated Virtual Environment – Next Generation) is used as a network 
            simulation platform to design and test network topologies before deploying 
            them in a real environment. This lab environment allows complex networking 
            scenarios to be validated safely without impacting the production 
            infrastructure.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Simulation Use Cases:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Multi-router BGP scenario to study routing behavior and failover mechanism</li>
            <li>VLAN segmentation testing to validate network isolation strategies</li>
            <li>VPN failover scenario to ensure connectivity redudancy between sites</li>
            <li>Firewall policy validation before applying rules to the production network</li>
          </ul>
          <p className="mb-4">
            <h5 className="font-semibold">Impact: </h5> Using EVE-NG significantly 
            reduces trial-and-error in the production network by allowing network 
            designs and configurations to be validated in a controlled simulation 
            environment.
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
            Pulse is used to monitor the entire virtualization and container 
            infrastructure in real time, providing visibility into system health, 
            resource utilization, and service availability. This monitoring layer helps 
            ensure that all services remain stable and allows quick detection of 
            potential performance issues.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Current Infrastructure Status:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Server uptime: 124+ days without restart</li>
            <li>Active virtual machines: 7 VMs</li>
            <li>Active containers: 2 Docker Containers</li>
            <li>Total running services: 9+ services</li>
            <li>Average CPU usage: 18–25%</li>
            <li>Average RAM usage: 52-70% of 24GB</li>
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
            Node.js is used as a runtime environment to support several development 
            and automation tasks within the infrastructure. It plays an important role 
            in handling build processes, CI/CD workflows, and internal automation scripts.
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Build process using Vite for frontend applications</li>
            <li>Self-hosted CI/CD runner execution for automated deployment pipelines</li>
            <li>Automation script execution for infrastucture-related tasks</li>
          </ul>
          <p className="mb-4">
            NodeJS environment: The Node.js environment is managed using proper 
            dependency management and environment variable isolation to ensure stable 
            and predictable application behavior across deployments.
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
            The frontend of this project is built using React, with Vite as the build 
            tool to provide fast hot module replacement (HMR) during development and 
            optimized production builds. Tailwind CSS is used for styling, following a 
            utility-first approach that enables scalable, consistent, and maintainable 
            UI design.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Engineering consideration:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Component modularization to keep the codebase maintainable and organized</li>
            <li>Reusable UI structures to reduce duplication and improve development efficiency</li>
            <li>Dynamic state management for interactive user interfaces</li>
            <li>Responsive design architecture to ensure usability across desktop and mobile devices</li>
          </ul>
          <p className="mb-4">
            The Node.js environment supporting this frontend is managed with proper 
            dependency management and environment variable isolation to maintain 
            stable builds and predictable deployments.
          </p>
          <p className="mb-4">
            The complete source code can be found on github 
            <a
              href="https://github.com/farhan-setiawan/portofarhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
            {" "}farhan-setiawan {" "}
            </a>
            to explore the implementation details and deployment pipeline.
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
