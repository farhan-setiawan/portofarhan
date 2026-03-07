export const stackData2 = {
  diagram: {
      logo: null,
      title: "Connection Diagram",
      image: "/images/diagram.png",
      description: (
        <>
          <p className="mb-4">
            Arsitektur ini dirancang untuk memastikan perangkat keamanan dan utilitas seperti
            CCTV, NVR, Energy Meter, IP Phone, dan Door Bell dapat bekerja dengan maksimal.
          </p>

          <p className="mb-4">
            Seluruh perangkat terhubung ke router <strong>MikroTik RB750Gr3</strong>,
            untuk perangkat wireless akan terhubung melalui <strong>Access Point</strong>,
            dan untuk perangkat wireline menggunakan kabel UTP.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Network Segmentation Strategy:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>VLAN 10 - Core Server</li>
            <li>VLAN 20 - CCTV & NVR</li>
            <li>VLAN 30 - IoT & Smart Device</li>
            <li>Inter-VLAN filtering via MikroTik firewall</li>
          </ul>
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
            NVR yang digunakan adalah merk Dahua, 
            CCTV yang digunakan dari beberapa brand berbeda seperti Dahua, Hikvision, TP-Link, dan Yoosee.
            Seluruh CCTV dapat terhubung ke NVR meskipun berbeda brand dengan menggunakan protocol Onvif.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Fitur yang dimanfaatkan:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>NVR Record & Playback 24/7</li>
            <li>Remote monitoring via Dahua DMSS Android</li>
            <li>Secure channel strict via VPN WireGuard Android</li>
            <li>Onvif profile S untuk integrasi brand berbeda</li>
            <li>No port-forwarding to NVR</li>
          </ul>
          <p className="mb-4">
            Cek beberapa video review dan 
            <a
              href="https://youtu.be/TnrT97uuThA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
            >
            {" "}tutorial {" "}
            </a>
            CCTV di YouTube: 
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
            Menggunakan server FreePBX untuk manage extension dan call. 
            IP Phone menggunakan Snom 300, Doorphone menggunakan fanvil A10, dan Softphone menggunakan Linphone app Android.
            Serta integrasi antara VoIP, Doorphone, dan CCTV.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Flow Architecture:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Doorbell pressed (short circuit trigger)</li>
            <li>Fanvil A10 send SIP call to FreePBX</li>
            <li>Ring-group call activated including Linphone softphone</li>
            <li>Webhook sent to Home Assistant</li>
            <li>Home Assistant trigger PTZ Camera</li>
            <li>CCTV focus on entrance</li>
            <li>Softphone on-hook, video call trigger</li>
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
            Digunakan sebagai monitoring energy meter 
            untuk mengoptimalkan penggunaan listrik.
            Juga otomasi ketika terjadi suatu event seperti webhook pada Doorphone
          </p>
          <h4 className="font-semibold mt-4 mb-2">System overview:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>15+ device connected from 2 different site</li>
            <li>4 automation workflows</li>
            <li>0 public exposure port</li>
            <li>Secure access via VPN only</li>
          </ul>
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
