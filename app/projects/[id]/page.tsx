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

  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);

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

      {/* Hero image — full width */}
      <div className="relative w-full pt-[57px]" style={{ aspectRatio: "16/7" }}>
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
            <p className="text-navy font-medium text-lg">{project.role}</p>
          </div>
          <div>
            <p className="text-navy/40 text-xs uppercase tracking-widest mb-2">Year</p>
            <p className="text-navy font-medium text-lg">{project.year}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-16">
          <p className="text-navy/70 leading-relaxed text-xl max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* More Work */}
        <div className="border-t border-light-gray pt-14">
          <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-8">More Work</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((p) => (
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
                <p className="text-navy/50 text-sm mt-0.5">{p.company}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
