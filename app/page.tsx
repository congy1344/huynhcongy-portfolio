import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import { portfolio, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineering Student</p>
          <h1>Building web products from interface to infrastructure.</h1>
          <p className="hero-support">I build and test full-stack applications with Java, TypeScript, React, REST APIs, and PostgreSQL.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">View My Work</a>
            <a className="button secondary" href={portfolio.person.resume}>Download Resume</a>
          </div>
        </div>
        <aside className="hero-profile" aria-label="Huynh Cong Y profile summary">
          <div className="hero-art">
            <Image src="/avatar.jpg" alt="Portrait of Huỳnh Công Ý" fill priority sizes="(max-width: 900px) 560px, 35vw" />
          </div>
          <div className="hero-caption">
            <p><strong>{portfolio.person.name}</strong><span>Open to internships</span></p>
            <div className="profile-links">
              <a href={portfolio.person.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={`mailto:${portfolio.person.email}`}>Email</a>
            </div>
          </div>
        </aside>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <h2>Selected work</h2>
          <p>Three projects that show how I connect product requirements, implementation, testing, and delivery.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-lead">
          <h2>Profile</h2>
        </div>
        <div className="about-copy">
          <p>{portfolio.person.profile}</p>
        </div>
        <div className="credentials">
          <article>
            <h3>Education</h3>
            <p>{portfolio.education.school}</p>
            <p>{portfolio.education.program}</p>
            <p>{portfolio.education.period}</p>
            <p>GPA: {portfolio.education.gpa}</p>
          </article>
          <article>
            <h3>Certification</h3>
            <p>{portfolio.certification.name}</p>
            <p>{portfolio.certification.issuer}</p>
            <p>{portfolio.certification.period}</p>
          </article>
        </div>
      </section>

      <section className="skills section-shell" id="skills">
        <div className="section-heading">
          <h2>Engineering toolkit</h2>
          <p>Organized by how each tool contributes to building and validating a web product.</p>
        </div>
        <div className="skills-grid">
          {portfolio.skills.map((group) => (
            <article key={group.area}>
              <h3>{group.area}</h3>
              <p>{group.items.join(" / ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Interested in working together?</h2>
          <p>I&apos;m currently looking for internship opportunities in software engineering and web development.</p>
        </div>
        <div className="contact-details">
          <a href={`mailto:${portfolio.person.email}`}>{portfolio.person.email}</a>
          <a href={`tel:${portfolio.person.phone.replaceAll(" ", "")}`}>{portfolio.person.phone}</a>
          <span>{portfolio.person.location}</span>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${portfolio.person.email}`}>Email Me</a>
          <a className="button secondary" href={portfolio.person.github} target="_blank" rel="noreferrer">View GitHub</a>
          <a className="text-link" href={portfolio.person.resume}>Download Resume</a>
        </div>
      </section>
    </main>
  );
}
