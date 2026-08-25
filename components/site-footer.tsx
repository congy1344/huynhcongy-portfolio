import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <p>{portfolio.person.name}</p>
        <p>Software Engineering student in Ho Chi Minh City.</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
