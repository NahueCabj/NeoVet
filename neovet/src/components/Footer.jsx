import siteContent from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-brand-violet text-brand-white py-8 text-center">
      <p className="mb-2">{siteContent.footer.copyright}</p>
      <div className="flex justify-center gap-4">
        <a href={`https://instagram.com/${siteContent.footer.social.instagram}`} target="_blank">Instagram</a>
        <a href={`https://facebook.com/${siteContent.footer.social.facebook}`} target="_blank">Facebook</a>
      </div>
    </footer>
  );
}
