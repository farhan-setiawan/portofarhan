export default function Stack() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-semibold mb-10">
        NETWORK & VIRTUALIZATION STACK
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Networking
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Cloudflare DNS</li>
            <li>MikroTik CHR</li>
            <li>WireGuard</li>
            <li>OpenVPN</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Virtualization & Services
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Proxmox VE</li>
            <li>Ubuntu Server</li>
            <li>Docker</li>
            <li>Nginx</li>
            <li>Zabbix</li>
            <li>FreePBX</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
