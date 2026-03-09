"use client";

import { useState } from "react";

const SAMPLE_STORIES = {
  design: [
    "As a designer, I need to understand how users currently discover features so I can identify navigation pain points.",
    "As a designer, I want to validate whether the new layout reduces cognitive load for first-time users.",
    "As a designer, I need to confirm that the visual hierarchy communicates priority correctly without labels.",
  ],
  pm: [
    "As a PM, I need to understand what motivates users to complete the onboarding flow so we can improve activation rates.",
    "As a PM, I want to validate that users understand the value proposition before they hit the paywall.",
    "As a PM, I need to know which features users consider essential vs. nice-to-have for the MVP.",
  ],
  dev: [
    "As a developer, I need to understand how users expect error states to behave so we can set correct recovery expectations.",
    "As a developer, I want to confirm the loading state communicates progress clearly enough to prevent duplicate submissions.",
    "As a developer, I need to know what data users expect to see inline vs. in a separate detail view.",
  ],
};

type Role = "design" | "pm" | "dev";

const ROLE_LABELS: Record<Role, { label: string; emoji: string; color: string }> = {
  design: { label: "Design", emoji: "🎨", color: "bg-purple-50 border-purple-200 text-purple-700" },
  pm: { label: "Product", emoji: "📋", color: "bg-blue-50 border-blue-200 text-blue-700" },
  dev: { label: "Engineering", emoji: "⚙️", color: "bg-green-50 border-green-200 text-green-700" },
};

function generateScript(
  context: string,
  selectedStories: string[],
  roles: Role[]
): string {
  const roleList = roles.map((r) => ROLE_LABELS[r].label).join(", ");
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = [
    `USABILITY TESTING SCRIPT`,
    `Generated: ${date}`,
    `Team perspectives: ${roleList || "General"}`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `CONTEXT`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    context || "[Add your project or feature context here]",
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `INTRODUCTION (read aloud)`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `"Thank you for joining us today. We're going to be looking at [product/feature] and we want to understand how people interact with it. There are no right or wrong answers — we're testing the design, not you. Please think aloud as you go so we can follow your reasoning. Do you have any questions before we start?"`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `WARM-UP`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `1. Can you tell me a bit about your role and how you typically use [product/tool] in your day-to-day work?`,
    `2. Walk me through the last time you had to [relevant task]. What did that look like?`,
    ``,
  ];

  if (selectedStories.length > 0) {
    sections.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    sections.push(`SCENARIOS & TASKS`);
    sections.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

    selectedStories.forEach((story, i) => {
      sections.push(`Scenario ${i + 1}:`);
      sections.push(`"${story}"`);
      sections.push(``);
      sections.push(`  → Prompt: "Please show me how you would approach this."`);
      sections.push(`  → Observe: Where do they look first? Where do they hesitate?`);
      sections.push(`  → Follow-up: "What did you expect to happen there?"`);
      sections.push(`  → Follow-up: "What would make this easier for you?"`);
      sections.push(``);
    });
  }

  sections.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  sections.push(`DEBRIEF`);
  sections.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  sections.push(`1. Overall, how would you describe your experience with what you saw today?`);
  sections.push(`2. Was there anything that surprised you?`);
  sections.push(`3. If you could change one thing, what would it be?`);
  sections.push(`4. Is there anything you expected to see that wasn't there?`);
  sections.push(``);
  sections.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  sections.push(`OBSERVER NOTES`);
  sections.push(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  sections.push(`Key moments to capture:`);
  sections.push(`[ ] First point of confusion`);
  sections.push(`[ ] Unexpected navigation paths`);
  sections.push(`[ ] Moments of delight or surprise`);
  sections.push(`[ ] Assumptions the participant made`);
  sections.push(`[ ] Direct quotes worth capturing`);

  return sections.join("\n");
}

export function StoryboardGenerator() {
  const [selectedRoles, setSelectedRoles] = useState<Role[]>(["design", "pm", "dev"]);
  const [context, setContext] = useState("");
  const [selectedStories, setSelectedStories] = useState<string[]>([]);
  const [script, setScript] = useState("");
  const [copied, setCopied] = useState(false);

  const toggleRole = (role: Role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const loadSampleStory = (story: string) => {
    setSelectedStories((prev) =>
      prev.includes(story) ? prev.filter((s) => s !== story) : [...prev, story]
    );
  };

  const generate = () => {
    setScript(generateScript(context, selectedStories, selectedRoles));
  };

  const copy = () => {
    navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-light-gray/50 overflow-hidden">
      {/* Header */}
      <div className="p-7 pb-5 border-b border-light-gray/50">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📋</span>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full tracking-wide">
                Discovery Tool
              </span>
            </div>
            <h3 className="font-serif text-xl text-navy">Usability Test Script Generator</h3>
            <p className="text-navy/50 text-sm">Generate scripts from user stories across Design, PM, and Engineering perspectives</p>
          </div>
        </div>
      </div>

      <div className="p-7 space-y-7">
        {/* Step 1: Team perspectives */}
        <div>
          <p className="text-navy/40 text-xs uppercase tracking-widest mb-3 font-medium">
            Step 1 — Team Perspectives
          </p>
          <div className="flex gap-2 flex-wrap">
            {(Object.keys(ROLE_LABELS) as Role[]).map((role) => {
              const { label, emoji, color } = ROLE_LABELS[role];
              const active = selectedRoles.includes(role);
              return (
                <button
                  key={role}
                  onClick={() => toggleRole(role)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                    active ? color : "border-light-gray text-navy/40 hover:border-navy/20"
                  }`}
                >
                  {emoji} {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: User stories */}
        {selectedRoles.length > 0 && (
          <div>
            <p className="text-navy/40 text-xs uppercase tracking-widest mb-3 font-medium">
              Step 2 — Load Sample User Stories
            </p>
            <div className="space-y-2">
              {selectedRoles.flatMap((role) =>
                SAMPLE_STORIES[role].map((story) => {
                  const { emoji } = ROLE_LABELS[role];
                  const selected = selectedStories.includes(story);
                  return (
                    <button
                      key={story}
                      onClick={() => loadSampleStory(story)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all flex gap-3 items-start ${
                        selected
                          ? "border-accent/40 bg-accent/5 text-navy"
                          : "border-light-gray/60 text-navy/60 hover:border-accent/20 hover:bg-surface"
                      }`}
                    >
                      <span className="flex-shrink-0 mt-0.5">
                        {selected ? "✓" : emoji}
                      </span>
                      <span>{story}</span>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Step 3: Context */}
        <div>
          <p className="text-navy/40 text-xs uppercase tracking-widest mb-3 font-medium">
            Step 3 — Project Context (optional)
          </p>
          <textarea
            className="w-full border border-light-gray rounded-xl p-4 text-navy text-sm outline-none focus:border-accent resize-none leading-relaxed"
            rows={3}
            placeholder="e.g. We're testing a new reservation flow for workplace booking. Users are employees booking desks and meeting rooms..."
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
        </div>

        {/* Generate */}
        <button
          onClick={generate}
          className="w-full py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-colors"
        >
          Generate Testing Script
        </button>

        {/* Output */}
        {script && (
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <p className="text-navy/40 text-xs uppercase tracking-widest font-medium">
                Your Script
              </p>
              <button
                onClick={copy}
                className="text-xs text-accent hover:text-accent/70 transition-colors font-medium"
              >
                {copied ? "✓ Copied!" : "Copy to clipboard"}
              </button>
            </div>
            <pre className="bg-surface rounded-xl p-5 text-xs text-navy/70 leading-relaxed overflow-auto max-h-96 whitespace-pre-wrap font-mono">
              {script}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
