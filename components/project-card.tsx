import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const liveDemo = project.links.find(({ label }) => label.toLowerCase().includes("live"));

  return (
    <article className="project-card">
      <Link className="project-visual" href={`/projects/${project.slug}`} aria-label={`Read the ${project.title} case study`} style={{ aspectRatio: `${project.imageWidth} / ${project.imageHeight}` }}>
        <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 62vw" priority={index === 0} />
      </Link>
      <div className="project-copy">
        <p className="project-index">0{index + 1}</p>
        <div>
          <p className="project-type">{project.type}</p>
          <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <div className="project-story">
          <p><strong>Purpose</strong>{project.summary}</p>
          <p><strong>Decision</strong>{project.decision}</p>
          <p><strong>Evidence</strong>{project.evidence}</p>
          <div className="project-actions">
            <Link className="text-link" href={`/projects/${project.slug}`}>Read case study <span aria-hidden="true">→</span></Link>
            {liveDemo && <a className="text-link" href={liveDemo.href} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>}
          </div>
        </div>
      </div>
    </article>
  );
}
