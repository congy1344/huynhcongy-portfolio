import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="not-found section-shell">
      <p className="eyebrow">404</p>
      <h1>This page isn&apos;t here.</h1>
      <p>The project may have moved, or the address may be incorrect.</p>
      <Link className="button primary" href="/">Return home</Link>
    </main>
  );
}
