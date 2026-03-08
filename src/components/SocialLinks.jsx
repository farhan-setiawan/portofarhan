export default function SocialLinks() {
  return (
    <div className="fixed bottom-0 left-0 w-full md:w-[33.333%] bg-white/80 backdrop-blur-md border-t p-4 flex justify-center gap-6 z-50">

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/farhan-ervyatama-setiawan/"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 hover:scale-110 transition"
      >
        <img
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          className="w-6 h-6"
        />
      </a>

      {/* YOUTUBE */}
      <a
        href="https://www.youtube.com/@FarhanLur"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 hover:scale-110 transition"
      >
        <img
          src="/icons/youtube.svg"
          alt="YouTube"
          className="w-6 h-6"
        />
      </a>

      {/* GITHUB */}
      <a
        href="https://github.com/farhan-setiawan"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-70 hover:opacity-100 hover:scale-110 transition"
      >
        <img
          src="/icons/github.svg"
          alt="GitHub"
          className="w-6 h-6"
        />
      </a>

    </div>
  )
}