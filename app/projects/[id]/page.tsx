import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-cream">
      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-light-gray/40">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 8H3M7 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Work
          </Link>
          <span className="font-serif text-navy text-lg">AV</span>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative w-full pt-[56px]" style={{ aspectRatio: "16/7" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-6 mb-12">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-3">
              {project.title}
            </h1>
            <p className="text-navy/50 text-lg">{project.company}</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Meta */}
        <div className="grid sm:grid-cols-2 gap-8 mb-14 pb-14 border-b border-light-gray">
          <div>
            <p className="text-navy/40 text-xs uppercase tracking-widest mb-2">Role</p>
            <p className="text-navy font-medium text-lg">{project.details.role}</p>
          </div>
          <div>
            <p className="text-navy/40 text-xs uppercase tracking-widest mb-2">Year</p>
            <p className="text-navy font-medium text-lg">{project.details.year}</p>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-14">
          <h2 className="font-serif text-2xl text-navy mb-5">Overview</h2>
          <p className="text-navy/70 leading-relaxed text-lg max-w-3xl">
            {project.details.overview}
          </p>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="font-serif text-2xl text-navy mb-6">Challenges</h2>
            <ul className="space-y-4">
              {project.details.challenges.map((item, i) => (
                <li key={i} className="flex gap-3 text-navy/70 leading-relaxed">
                  <span className="text-accent mt-1.5 flex-shrink-0">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy mb-6">Solutions</h2>
            <ul className="space-y-4">
              {project.details.solutions.map((item, i) => (
                <li key={i} className="flex gap-3 text-navy/70 leading-relaxed">
                  <span className="text-accent mt-1.5 flex-shrink-0">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Impact */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="font-serif text-2xl text-cream mb-4">Impact</h2>
          <p className="text-cream/70 leading-relaxed text-lg">{project.details.impact}</p>
        </div>

        {/* Other projects */}
        <div>
          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4">More Work</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link key={p.id} href={`/projects/${p.id}`} className="group">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-surface mb-3">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="font-serif text-navy group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-navy/50 text-sm">{p.company}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
