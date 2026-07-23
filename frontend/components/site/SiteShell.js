import Link from "next/link";
import SectionAnimator from "./SectionAnimator";

const navigation = [
  ["Services", "#services"],
  ["About", "#about"],
  ["Consultations", "#consultations"],
  ["Contact", "#contact"],
];

export function SiteBrand() {
  return (
    <Link href="#home" className="imm-brand" aria-label="KAS Immigration Services home">
      <img className="imm-brand__logo" src="/kas-logo.jpg" alt="" />
      <span>KAS Immigration Services<small>Full Service Immigration Consultancy Firm</small></span>
    </Link>
  );
}

export default function SiteShell({ children }) {
  return (
    <div className="imm-site">
      <SectionAnimator />
      <header className="imm-header">
        <div className="imm-container imm-header__inner">
          <SiteBrand />
          <nav className="imm-nav" aria-label="Primary navigation">
            {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <a href="#assessment" className="imm-button imm-header__cta">Request Assessment</a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="imm-footer">
        <div className="imm-container imm-footer__inner">
          <div><SiteBrand /><p>Your trusted partner for living, working, studying, visiting, and thriving in Canada.</p></div>
          <div><strong>Explore</strong>{navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
          <div><strong>Start your journey</strong><a href="#assessment">Request Assessment</a><a href="mailto:info@kasimmigrationservices.com">Email our team</a><a href="tel:+12895210142">Call +1 289-521-0142</a></div>
        </div>
        <div className="imm-container imm-footer__bottom">© {new Date().getFullYear()} KAS Immigration Services. All rights reserved.</div>
      </footer>
    </div>
  );
}
