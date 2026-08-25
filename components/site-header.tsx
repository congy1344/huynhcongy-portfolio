import Link from "next/link";
import { portfolio } from "@/data/portfolio";

const nav = [
  ["Work", "/#work"],
  ["About", "/#about"],
  ["Skills", "/#skills"],
  ["Resume", portfolio.person.resume],
  ["Contact", "/#contact"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Huỳnh Công Ý, home">Huỳnh Công Ý</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
