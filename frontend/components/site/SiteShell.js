import Link from "next/link";

const navigation = [
  ["Home", "/"],
  ["About", "/about-us"],
  ["Visa Services", "/visa"],
  ["Countries", "/countries"],
  ["Insights", "/blog"],
  ["Contact", "/contact"],
];

export function SiteBrand() {
  return <Link href="/" className="ns-brand" aria-label="Northstar Immigration home"><span className="ns-brand__mark">N</span><span>Northstar<small>IMMIGRATION</small></span></Link>;
}

export default function SiteShell({ children }) {
  return (
    <div className="ns-site">
      <header className="ns-header">
        <div className="ns-container ns-header__inner">
          <SiteBrand />
          <nav className="ns-nav" aria-label="Primary navigation">{navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
          <Link href="/contact" className="ns-button ns-header__cta">Book a consultation</Link>
          <details className="ns-mobile-menu"><summary aria-label="Open navigation"><span></span><span></span><span></span></summary><nav>{navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav></details>
        </div>
      </header>
      <main>{children}</main>
      <footer className="ns-footer">
        <div className="ns-container ns-footer__grid">
          <div><SiteBrand /><p>Practical immigration guidance for people building a new chapter abroad.</p></div>
          <div><h3>Company</h3><Link href="/about-us">About us</Link><Link href="/blog">Insights</Link><Link href="/contact">Contact</Link></div>
          <div><h3>Pathways</h3><Link href="/visa">Work permits</Link><Link href="/visa">Study permits</Link><Link href="/visa">Family sponsorship</Link></div>
          <div><h3>Start here</h3><p>12 Example Avenue<br/>Lagos, Nigeria</p><a href="mailto:hello@example.com">hello@example.com</a><a href="tel:+2348000000000">+234 800 000 0000</a></div>
        </div>
        <div className="ns-footer__bottom"><div className="ns-container">© {new Date().getFullYear()} Northstar Immigration. Template content for demonstration.</div></div>
      </footer>
    </div>
  );
}
