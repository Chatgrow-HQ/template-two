import Link from "next/link";

const navigation = [["Services", "#services"], ["About", "#about"], ["Process", "#process"]];

export function SiteBrand() {
  return <Link href="#home" className="imm-brand" aria-label="Skyways home"><img className="imm-brand__logo" src="/skyways-logo.png" alt="Skyways Travels and Tours" /></Link>;
}

export default function SiteShell({ children }) {
  return (
    <div className="imm-site">
      <header className="imm-header">
        <div className="imm-container imm-header__inner">
          <SiteBrand />
          <nav className="imm-nav" aria-label="Primary navigation">{navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
          <a href="#assessment" className="imm-button imm-header__cta">Start Assessment</a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="imm-footer">
        <div className="imm-container imm-footer__inner">
          <div><SiteBrand /><p>Clear, human guidance for people considering a new chapter in Canada.</p></div>
          <div><strong>Explore</strong>{navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
          <div><strong>Important</strong><p>Website information is general and does not constitute legal or immigration advice. Assessment results do not guarantee approval.</p></div>
        </div>
        <div className="imm-container imm-footer__bottom">© {new Date().getFullYear()} Sky Immigration. All rights reserved.</div>
      </footer>
    </div>
  );
}
