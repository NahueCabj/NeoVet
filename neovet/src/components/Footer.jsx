import siteContent from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-brand-violet text-brand-white py-8 text-center">
      {/* Copyright */}
      <p className="mb-2">{siteContent.footer.copyright}</p>

      {/* Redes */}
      <div className="flex justify-center gap-4 mb-4">
        <a
          href={`https://instagram.com/${siteContent.footer.social.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
        <a
          href={`https://facebook.com/${siteContent.footer.social.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Facebook
        </a>
      </div>

      {/* Créditos */}
      <p className="text-sm text-brand-white/70">
        Desarrollado por <span className="font-semibold">Nahuel Acosta</span>
      </p>
    </footer>
  );
}
