"use client"

import { useState } from "react"
import type { ProjectTab } from "@/lib/projects"
import { BlockRenderer } from "@/components/BlockRenderer"

export function ProjectTabs({ tabs }: { tabs: ProjectTab[] }) {
  const firstActive = tabs.find(t => !t.comingSoon)
  const [activeId, setActiveId] = useState(firstActive?.id ?? "")
  const active = tabs.find(t => t.id === activeId)
  const [activeSubId, setActiveSubId] = useState(active?.subProjects?.[0]?.id ?? "")

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-12 pb-5 border-b border-light-gray">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => !tab.comingSoon && setActiveId(tab.id)}
            disabled={tab.comingSoon}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              tab.comingSoon
                ? "text-navy/25 bg-surface/50 cursor-default"
                : activeId === tab.id
                ? "bg-navy text-cream shadow-sm"
                : "text-navy/55 hover:text-navy hover:bg-surface"
            }`}
          >
            {tab.label}
            {tab.comingSoon && (
              <span className="ml-1.5 text-[10px] opacity-60 font-normal">soon</span>
            )}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      {active && (
        <div key={active.id}>
          {/* Tab meta */}
          {(active.role || active.year) && (
            <div className="grid sm:grid-cols-2 gap-8 mb-14 pb-14 border-b border-light-gray">
              {active.role && (
                <div>
                  <p className="text-navy/40 text-xs uppercase tracking-widest mb-2">Role</p>
                  <p className="text-navy font-medium text-lg">{active.role}</p>
                </div>
              )}
              {active.year && (
                <div>
                  <p className="text-navy/40 text-xs uppercase tracking-widest mb-2">Year</p>
                  <p className="text-navy font-medium text-lg">{active.year}</p>
                </div>
              )}
            </div>
          )}

          {/* Description + bullets */}
          {(active.description || (active.bullets && active.bullets.length > 0)) && (
            <div className="mb-16 max-w-3xl">
              {active.description && (
                <p className="text-navy/70 leading-relaxed text-xl mb-8">
                  {active.description}
                </p>
              )}
              {active.bullets && active.bullets.length > 0 && (
                <ul className="space-y-4">
                  {active.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-navy/70 leading-relaxed text-base">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Sections */}
          {active.sections && active.sections.length > 0 && (
            <div className="space-y-16 mb-16">
              {active.sections.map((section, i) => (
                <div key={i}>
                  {section.title && (
                    <h2 className="font-serif text-2xl text-navy mb-6 pb-3 border-b border-light-gray/60">
                      {section.title}
                    </h2>
                  )}
                  <div className="space-y-8">
                    {section.blocks.map((block, j) => (
                      <BlockRenderer key={j} block={block} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sub-projects — sidebar + content */}
          {active.subProjects && active.subProjects.length > 0 && (() => {
            const activeSub = active.subProjects!.find(sp => sp.id === activeSubId) ?? active.subProjects![0]
            return (
              <div className="flex gap-10 mb-16">
                {/* Sidebar */}
                <div className="w-44 flex-shrink-0">
                  <ul className="sticky top-24">
                    {active.subProjects!.map((sp) => (
                      <li key={sp.id}>
                        <button
                          onClick={() => setActiveSubId(sp.id)}
                          className={`text-left w-full py-2.5 pl-3 text-sm transition-all duration-150 border-l-2 ${
                            activeSub.id === sp.id
                              ? "border-accent text-navy font-medium"
                              : "border-transparent text-navy/35 hover:text-navy/60 hover:border-light-gray"
                          }`}
                        >
                          {sp.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub-project content */}
                <div className="flex-1 min-w-0 space-y-12">
                  {activeSub.sections.map((section, i) => (
                    <div key={i}>
                      {section.title && (
                        <h2 className="font-serif text-2xl text-navy mb-6 pb-3 border-b border-light-gray/60">
                          {section.title}
                        </h2>
                      )}
                      <div className="space-y-8">
                        {section.blocks.map((block, j) => (
                          <BlockRenderer key={j} block={block} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      )}
    </div>
  )
}
