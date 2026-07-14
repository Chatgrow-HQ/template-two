export default function PageHero({ label, title, copy, image, imageAlt }) {
  return (
    <section className="ns-page-hero">
      <div className="ns-container ns-page-hero__grid">
        <div><span className="ns-label">{label}</span><h1>{title}</h1><p>{copy}</p></div>
        <img src={image} alt={imageAlt} />
      </div>
    </section>
  );
}
