import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";

export default function NotFound() {
  return <SiteShell><section className="ns-empty-state"><div className="ns-container"><span className="ns-label">404 · Page not found</span><h1>This route does not exist.</h1><p>The page may have moved or the address may be incomplete.</p><Link href="/" className="ns-button ns-button--blue">Return home</Link></div></section></SiteShell>;
}
