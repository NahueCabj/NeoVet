import siteContent from "../data/siteContent";

export default function Hero() {
  return (
    <section
      id="home"
      className=" relative w-full min-h-screen flex items-center justify-center bg-black"
      style={{
        backgroundImage: `url(${siteContent.hero.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

     {/* Contenido */}
<div className="hero__content">
  <div className="banner">
    <div className="banner__divider"></div>
    <div className="banner__text pt-32">
      <h1>{siteContent.hero.title}</h1>
    </div>
  </div>

  <p className="hero__subtitle">
    {siteContent.hero.subtitle}
  </p>

  <a
    href={siteContent.hero.ctaHref}
    className="hero__cta"
    target="_blank"
    rel="noopener noreferrer"
  >
    {siteContent.hero.ctaText}
  </a>
</div>

    </section>
  );
}
