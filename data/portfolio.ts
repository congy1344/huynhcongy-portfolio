export type ProjectSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  summary: string;
  decision: string;
  evidence: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  technologies: string[];
  links: { label: string; href: string }[];
  sections: ProjectSection[];
};

export const portfolio = {
  person: {
    name: "Huỳnh Công Ý",
    role: "Software Engineering Student | Full-stack Web Development",
    profile: "Final-year Software Engineering student with hands-on experience building full-stack web applications across frontend, backend, databases, testing, and deployment. Experienced with Java, TypeScript, React, Spring Boot, REST APIs, PostgreSQL, and modern development tools. Interested in building reliable, maintainable software and continuously improving through practical engineering projects.",
    location: "Ho Chi Minh City, Vietnam",
    email: "huynhcongy2004@gmail.com",
    phone: "0766 923 478",
    github: "https://github.com/congy1344",
    resume: "/resume.pdf",
  },
  education: {
    school: "Industrial University of Ho Chi Minh City",
    program: "Software Engineering",
    period: "2022 - Expected December 2026",
    gpa: "3.18 / 4.00",
  },
  certification: {
    name: "Gemini Certified Student - University",
    issuer: "Google for Education",
    period: "December 2025 - December 2028",
  },
  skills: [
    { area: "Languages", items: ["Java", "TypeScript", "JavaScript", "SQL"] },
    { area: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3", "React Router", "Vite", "Responsive Web Design"] },
    { area: "Backend", items: ["Spring Boot", "Fastify", "REST APIs", "Spring Data JPA", "Prisma"] },
    { area: "Data & infrastructure", items: ["PostgreSQL", "Redis", "Docker"] },
    { area: "Testing", items: ["JUnit 5", "Mockito", "MockMvc", "Vitest", "React Testing Library", "Node.js Test Runner", "Integration Testing", "API Testing"] },
    { area: "Development tools", items: ["Git", "GitHub", "GitHub Actions", "Postman", "Swagger / OpenAPI", "Maven"] },
    { area: "UI/UX", items: ["Figma", "User Flows", "Wireframing", "Prototyping", "Responsive Design", "Accessibility"] },
    { area: "Additional", items: ["jQuery", "WordPress", "Generative AI fundamentals", "AI-assisted development", "Technical research", "Debugging", "Test ideation"] },
  ],
};

export const projects: Project[] = [
  {
    slug: "greytest",
    title: "GreyTest",
    subtitle: "AI-assisted QA Platform",
    type: "Capstone Project - In Progress",
    summary: "A testing-focused platform that analyzes Java and Spring Boot projects and supports structured QA workflows.",
    decision: "Treat application behavior and testability as one system, with validation across API, service, persistence, job, and UI boundaries.",
    evidence: "Controller, authorization, service, persistence, integration, UI interaction, and workflow tests.",
    image: "/projects/greytest-ui.png",
    imageAlt: "GreyTest application interface screenshot",
    imageWidth: 1919,
    imageHeight: 953,
    technologies: ["React", "TypeScript", "Java 17", "Spring Boot", "PostgreSQL", "Flyway", "Docker", "Vitest", "JUnit 5", "MockMvc"],
    links: [
      { label: "Frontend repository", href: "https://github.com/congy1344/KLTN_26_27_GreyTest_FE" },
      { label: "Backend repository", href: "https://github.com/congy1344/KLTN_26_27_GreyTest_BE" },
    ],
    sections: [
      { title: "Overview", body: ["GreyTest is an in-progress capstone project for analyzing Java and Spring Boot codebases and supporting software testing workflows.", "Its scope connects source analysis, business rules, test plans, test cases, code coverage, review workflows, and AI-assisted generation."] },
      { title: "Problem / context", body: ["Testing support is useful only when it reflects real application behavior. The platform therefore needs to understand code structure while preserving the context needed for planning, review, and validation."] },
      { title: "System architecture", body: ["A React and TypeScript client communicates with Spring Boot REST APIs. PostgreSQL stores application data, Flyway manages schema evolution, and JavaParser supports source analysis workflows.", "Swagger and OpenAPI make the API surface inspectable, while Docker provides repeatable local infrastructure."] },
      { title: "QA / testing strategy", body: ["The testing strategy covers behavior at multiple boundaries instead of relying on a single layer."], bullets: ["Controller input and API validation", "Authorization behavior", "Service and business-rule logic", "Background job behavior", "PostgreSQL persistence and integration", "UI component interaction", "Business-rule and test-plan workflows"] },
      { title: "Key engineering decisions", body: ["Testing is treated as a design constraint, not a final project phase. Separating controller, service, persistence, and UI responsibilities makes failures easier to isolate and behavior easier to verify."] },
      { title: "Implementation", body: ["The frontend uses Material UI and TanStack React Query for server-state workflows. The backend uses Spring Data JPA, PostgreSQL, Flyway, JavaParser, and documented REST endpoints."] },
      { title: "Result / evidence", body: ["The current evidence is the code and automated tests in the frontend and backend repositories. The capstone remains in progress and is not presented as a commercial product."] },
      { title: "What I learned", body: ["Designing a QA platform requires understanding both how an application behaves and how that behavior can be observed, isolated, and tested across boundaries."] },
    ],
  },
  {
    slug: "short-link",
    title: "Short Link",
    subtitle: "Full-stack URL Shortening & Analytics Platform",
    type: "Personal Project",
    summary: "A deployed URL shortening platform designed around a fast, reliable, read-heavy redirect path.",
    decision: "Keep redirects independent from secondary analytics work using Redis caching, explicit invalidation, and best-effort telemetry.",
    evidence: "Automated tests, health and readiness endpoints, CI, Docker builds, and a deployed application.",
    image: "/projects/short-link-ui.png",
    imageAlt: "Short Link web application interface screenshot",
    imageWidth: 1919,
    imageHeight: 993,
    technologies: ["Next.js", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "Redis", "Docker", "GitHub Actions"],
    links: [
      { label: "Live web app", href: "https://short-link-1-46io.onrender.com/" },
      { label: "API", href: "https://short-link-wy7x.onrender.com/" },
      { label: "GitHub repository", href: "https://github.com/congy1344/short-link" },
    ],
    sections: [
      { title: "Overview", body: ["Short Link is a full-stack platform for creating, managing, redirecting, and analyzing short URLs.", "It supports generated codes, custom aliases, status management, expiration, search, filtering, and an analytics dashboard."] },
      { title: "Problem / context", body: ["A redirect service has one critical responsibility: resolve a short code and redirect reliably. Analytics and management features matter, but they should not make that common path fragile."] },
      { title: "Architecture", body: ["Next.js provides the dashboard, Fastify serves the API, PostgreSQL and Prisma provide persistence, and Redis supports caching and rate limiting.", "The redirect path checks Redis before PostgreSQL. Cached entries use a 10-minute TTL, and configuration changes explicitly invalidate stale values."] },
      { title: "Key decisions", body: ["Analytics recording is best effort. If telemetry fails, the redirect can still succeed.", "Visitor IP addresses are HMAC-hashed before storage, so the system can reason about unique visitors without keeping raw addresses."] },
      { title: "Implementation", body: ["Analytics capture total clicks, unique visitors, trends over time, referrers, browsers, and devices. Redis-backed rate limiting protects the API while health and readiness checks expose operational state."] },
      { title: "Testing / validation", body: ["The CI pipeline installs dependencies, generates Prisma code, type-checks, runs automated tests, creates a production build, and verifies the Docker Compose build."] },
      { title: "Result / evidence", body: ["The web application and API are deployed. The repository includes automated checks, container configuration, and operational endpoints that make the implementation inspectable."] },
      { title: "What I learned", body: ["Reliability improves when critical behavior is separated from secondary work and cache consistency is designed alongside cache speed."] },
    ],
  },
  {
    slug: "gather-and-graze",
    title: "Gather & Graze",
    subtitle: "Bilingual Recipe Discovery & Weekly Meal Planning",
    type: "Product Design & Frontend Project",
    summary: "A responsive English and Vietnamese recipe experience connecting discovery, saved recipes, and weekly planning.",
    decision: "Model planning as a complete interaction cycle, including add, replace, remove, and undo states, with bilingual search built into discovery.",
    evidence: "Tests cover bilingual data, accent-insensitive search, filters, sorting, and planner behavior, supported by a Figma case study.",
    image: "/projects/gather-graze-ui.png",
    imageAlt: "Gather and Graze recipe planner interface screenshot",
    imageWidth: 1906,
    imageHeight: 991,
    technologies: ["React", "JavaScript", "React Router", "Vite", "CSS", "GitHub Actions", "Vercel", "Figma"],
    links: [
      { label: "Live demo", href: "https://gather-graze-planner.vercel.app/" },
      { label: "GitHub repository", href: "https://github.com/congy1344/gather_and_graze" },
      { label: "Figma case study", href: "https://www.figma.com/design/NhWaQKD8IfvyINzvnLuqY2" },
    ],
    sections: [
      { title: "Overview", body: ["Gather & Graze is a bilingual recipe discovery and weekly meal-planning experience built in React.", "The core flow moves from discovery and filtering to recipe details, favorites, and a persistent weekly plan."] },
      { title: "Problem / context", body: ["Discovery and planning are often treated as separate features. This project connects them so a recipe can move naturally from search results into a usable weekly plan."] },
      { title: "User flow", body: ["Users discover recipes, search or filter, inspect details, save favorites, and add meals to a weekly planner.", "Planner actions include replace, remove, and undo states so changes remain understandable and recoverable."] },
      { title: "Key decisions", body: ["Vietnamese search is accent-insensitive and searches names, ingredients, tags, and categories. Browser persistence keeps favorites and plans available between visits.", "Research statements in the design case study are framed as product reasoning and working assumptions, not unsupported user-study claims."] },
      { title: "Implementation", body: ["React Router handles navigation, while responsive CSS supports desktop and mobile layouts. The interface includes keyboard focus, skip navigation, modal focus management, route focus management, and reduced-motion support."] },
      { title: "Testing / validation", body: ["Automated tests cover bilingual recipe data, accent-insensitive search, filtering, sorting, and planner state transitions."] },
      { title: "Result / evidence", body: ["The repository contains the implementation and tests. The linked Figma case study documents product context, user flow, wireframes, design decisions, final UI, and a clickable prototype."] },
      { title: "What I learned", body: ["Product quality depends on the transitions between states. Search, planning, undo behavior, focus management, and persistence all shape whether a flow feels dependable."] },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
