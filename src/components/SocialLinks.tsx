const SocialLinks = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="https://t.me/itparkzomin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="rounded-lg bg-primary/10 p-2.5 text-primary transition-colors hover:bg-primary/20"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 1 0 24 12.056A12.014 12.014 0 0 0 11.944 0Zm5.654 8.22l-1.636 7.706c-.122.572-.448.712-.908.444l-2.51-1.85l-1.21 1.164a.629.629 0 0 1-.504.246l.18-2.55 4.64-4.19c.2-.18-.044-.28-.312-.1l-5.734 3.61l-2.47-.77c-.536-.168-.548-.536.112-.794l9.648-3.72c.448-.162.838.108.694.794Z" />
        </svg>
      </a>
      <a
        href="https://instagram.com/itparkzomin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="rounded-lg bg-primary/10 p-2.5 text-primary transition-colors hover:bg-primary/20"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
        </svg>
      </a>
      <a
        href="https://youtube.com/@itparkzomin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="rounded-lg bg-primary/10 p-2.5 text-primary transition-colors hover:bg-primary/20"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
