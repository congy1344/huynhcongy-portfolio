import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} Case Study | Huỳnh Công Ý`,
    description: project.summary,
    openGraph: { title: `${project.title} Case Study`, description: project.summary },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <main id="main" className="case-study">
      <header className="case-hero section-shell">
        <Link className="text-link back-link" href="/#work"><span aria-hidden="true">←</span> Selected work</Link>
        <p className="project-type">{project.type}</p>
        <h1>{project.title}</h1>
        <p className="case-subtitle">{project.subtitle}</p>
        <p className="case-summary">{project.summary}</p>
        <div className="case-links">
          {project.links.map((link, index) => (
            <a className={index === 0 ? "button primary" : "button secondary"} key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
        </div>
      </header>

      <div className="case-image section-shell">
        <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} priority />
      </div>

      <div className="case-layout section-shell">
        <aside className="case-aside">
          <h2>Technology</h2>
          <p>{project.technologies.join(" / ")}</p>
        </aside>
        <div className="case-sections">
          {project.sections.map((section, index) => (
            <section key={section.title}>
              <p className="case-number">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              </div>
            </section>
          ))}
        </div>
      </div>

      <nav className="next-project section-shell" aria-label="Project navigation">
        <p>Continue exploring</p>
        {projects.filter(({ slug }) => slug !== project.slug).map((item) => (
          <Link key={item.slug} href={`/projects/${item.slug}`}>{item.title}<span aria-hidden="true">→</span></Link>
        ))}
      </nav>
    </main>
  );
}
