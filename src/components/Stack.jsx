export default function Stack({ activeItem, setActiveItem }) {
  const items = {
    cloudflare: "Cloudflare DNS",
    mikrotik: "MikroTik CHR",
    wireguard: "WireGuard",
    ovpn: "OVPN",
  }

  return (
    <section className="mt-16 space-y-4">
      <h2 className="text-2xl font-bold mb-6">
        NETWORK & VIRTUALIZATION STACK
      </h2>

      {Object.entries(items).map(([key, label]) => (
        <button
          key={key}
          onClick={() =>
            setActiveItem(activeItem === key ? null : key)
          }
          className={`block text-left px-4 py-2 rounded ${
            activeItem === key
              ? "bg-gray-200"
              : "bg-gray-100"
          }`}
        >
          {label}
        </button>
      ))}
    </section>
  )
}
