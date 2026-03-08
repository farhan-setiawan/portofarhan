export const stackData2 = {
  diagram: {
      logo: null,
      title: "Connection Diagram",
      image: "/images/diagram.png",
      description: (
        <>
          <p className="mb-4">
            This network architecture is designed to ensure that security and 
            utility devices — such as CCTV cameras, NVR systems, energy meters, 
            IP phones, and doorbell devices — operate reliably and efficiently 
            within the home infrastructure.
          </p>

          <p className="mb-4">
            All devices connected to a <strong>MikroTik RB750Gr3</strong> router, which act as the central network gateway.
            Wireless devices connect through <strong>Access Points</strong>,
            while wired devices are connected using UTP Ethernet cable.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Network Segmentation Strategy:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>VLAN 10 - Core Server</li>
            <li>VLAN 20 - CCTV & NVR</li>
            <li>VLAN 30 - IoT & Smart Device</li>
          </ul>
          <p className="mb-4">
            Traffic between these segments is controlled through inter-VLAN 
            filtering using MikroTik firewall rules, ensuring that devices can only 
            access the network resources they are permitted to use.
          </p>
        </>
      ),
    },
  surveillance: {
      logo: "/images/surveillance logo.png",
      title: "CCTV & NVR",
      image: "/images/surveillance.png",
      description:(
        <>
          <p className="mb-4">
            The surveillance system is built around a Dahua Network Video Recorder (NVR), 
            while the cameras themselves come from multiple manufacturers including Dahua, 
            Hikvision, TP-Link, and Yoosee. Despite the different brands, all cameras 
            are integrated into the same recording system using the ONVIF protocol, 
            allowing centralized monitoring and management through the NVR.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>24/7 recording and playback through the NVR system</li>
            <li>Remote monitoring via Dahua DMSS mobile application on Android</li>
            <li>Strict secure remote access through a WireGuard VPN</li>
            <li>Onvif profile S support to integrate camera from multiple vendors</li>
            <li>No direct port-forwarding to the NVR</li>
          </ul>
          <p className="mb-4">
            You can also explore several CCTV 
            <a
              href="https://youtu.be/TnrT97uuThA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
            {" "}tutorial {" "}
            </a>
            and review videos related to this setup on my YouTube Channel: 
            <a
              href="https://www.youtube.com/@FarhanLur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
            {" "}farhanlur {" "}
            </a>
          </p>
        </>
      ),
    },
    voip: {
      logo: "/images/voip logo.png",
      title: "VoIP & Doorphone",
      image: "/images/voip.png",
      description:(
        <>
          <p className="mb-4">
            A FreePBX server is used to manage SIP extensions and call routing 
            across the internal communication system. The setup includes several VoIP endpoints:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Snom 300 IP Phone for desk-based communication</li>
            <li>Fanvil A10 Doorphone for the building entrance</li>
            <li>Linphone (Android) used as a mobile softphone client</li>
          </ul>
          <p className="mb-4">
            These devices are integrated to create a smart communication workflow 
            that connects VoIP telephony, door access, and the CCTV monitoring system.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Flow Architecture:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Doorbell button pressed (hardware trigger)</li>
            <li>Fanvil A10 send SIP call to FreePBX server</li>
            <li>Ring-group call activated including Linphone softphone</li>
            <li>A Webhook is sent to Home Assistant</li>
            <li>Home Assistant triggers the PTZ Camera</li>
            <li>The CCTV camera automatically focus on the entrance area</li>
            <li>When softphone answer the call, video communication is initiated</li>
          </ul>
        </>
      ),
    },
    homeautomation: {
      logo: "/images/automation logo.png",
      title: "Home Assistant Automation",
      image: "/images/automation.png",
      description:(
        <>
          <p className="mb-4">
            Home Assistant is used as a central automation and monitoring platform 
            within the home infrastructure. One of its primary roles is monitoring 
            the energy meter to help optimize electricity usage. The system also 
            handles event-driven automations, such as processing webhook events 
            triggered by the doorphone system.
          </p>
          <h4 className="font-semibold mt-4 mb-2">System overview:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>15+ connected devices across two different sites</li>
            <li>4 active automation workflows managing various system events</li>
            <li>No publicly exposed ports to the internet</li>
            <li>Secure access exclusively through VPN</li>
          </ul>
          <p className="mb-4">
            This setup ensures that all smart devices and automation processes remain 
            secure, centralized, and remotely manageable.
          </p>
        </>
      ),
    },
}
export default function Stack2({ activeItem, setActiveItem }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-900">
        SMART HOME & AUTOMATION
      </h2>
      <p className="mb-5 italic text-gray-400">
        "see detailed diagram..."
      </p>
      <div className="space-y-4 md:max-h-[220px] md:overflow-y-auto">
        {Object.entries(stackData2).map(([key2, item]) => {
          const isActive = activeItem === key2

          return (
            <div key={key2}>

              {/* BUTTON */}
              <button
                onClick={() =>
                  setActiveItem(isActive ? null : key2)
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
