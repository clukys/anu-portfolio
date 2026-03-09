"use client"

import { useState, useEffect } from "react"
import { Block, Section } from "@/lib/projects"
import { BlockRenderer } from "./BlockRenderer"

const EDIT_PASSWORD = "design2025"

function BlockEditForm({
  block,
  onSave,
  onCancel,
}: {
  block: Block
  onSave: (b: Block) => void
  onCancel: () => void
}) {
  const [draft, setDraft] = useState<Block>({ ...block } as Block)

  return (
    <div className="bg-white border border-accent/30 rounded-xl p-4 shadow-lg space-y-3">
      {draft.type === "text" && (
        <textarea
          className="w-full border border-light-gray rounded-lg p-3 text-navy text-sm outline-none focus:border-accent resize-none"
          rows={5}
          value={(draft as Extract<Block, { type: "text" }>).content}
          onChange={(e) =>
            setDraft({ type: "text", content: e.target.value })
          }
          placeholder="Text content..."
          autoFocus
        />
      )}
      {draft.type === "heading" && (
        <input
          className="w-full border border-light-gray rounded-lg p-3 text-navy text-sm outline-none focus:border-accent font-serif"
          value={(draft as Extract<Block, { type: "heading" }>).content}
          onChange={(e) =>
            setDraft({ type: "heading", content: e.target.value })
          }
          placeholder="Heading text..."
          autoFocus
        />
      )}
      {draft.type === "image" && (
        <>
          <input
            className="w-full border border-light-gray rounded-lg p-3 text-navy text-sm outline-none focus:border-accent"
            placeholder="Image URL (e.g. /images/projects/my-image.png)"
            value={(draft as Extract<Block, { type: "image" }>).src}
            onChange={(e) =>
              setDraft({
                ...(draft as Extract<Block, { type: "image" }>),
                src: e.target.value,
              })
            }
            autoFocus
          />
          <input
            className="w-full border border-light-gray rounded-lg p-3 text-navy text-sm outline-none focus:border-accent"
            placeholder="Caption (optional)"
            value={(draft as Extract<Block, { type: "image" }>).caption || ""}
            onChange={(e) =>
              setDraft({
                ...(draft as Extract<Block, { type: "image" }>),
                caption: e.target.value,
              })
            }
          />
        </>
      )}
      {draft.type === "video" && (
        <>
          <input
            className="w-full border border-light-gray rounded-lg p-3 text-navy text-sm outline-none focus:border-accent"
            placeholder="YouTube or Vimeo URL"
            value={(draft as Extract<Block, { type: "video" }>).url}
            onChange={(e) =>
              setDraft({
                ...(draft as Extract<Block, { type: "video" }>),
                url: e.target.value,
              })
            }
            autoFocus
          />
          <input
            className="w-full border border-light-gray rounded-lg p-3 text-navy text-sm outline-none focus:border-accent"
            placeholder="Caption (optional)"
            value={(draft as Extract<Block, { type: "video" }>).caption || ""}
            onChange={(e) =>
              setDraft({
                ...(draft as Extract<Block, { type: "video" }>),
                caption: e.target.value,
              })
            }
          />
        </>
      )}
      {draft.type === "quote" && (
        <>
          <textarea
            className="w-full border border-light-gray rounded-lg p-3 text-navy text-sm outline-none focus:border-accent resize-none"
            rows={3}
            placeholder="Quote text..."
            value={(draft as Extract<Block, { type: "quote" }>).text}
            onChange={(e) =>
              setDraft({
                ...(draft as Extract<Block, { type: "quote" }>),
                text: e.target.value,
              })
            }
            autoFocus
          />
          <input
            className="w-full border border-light-gray rounded-lg p-3 text-navy text-sm outline-none focus:border-accent"
            placeholder="Attribution (optional)"
            value={
              (draft as Extract<Block, { type: "quote" }>).attribution || ""
            }
            onChange={(e) =>
              setDraft({
                ...(draft as Extract<Block, { type: "quote" }>),
                attribution: e.target.value,
              })
            }
          />
        </>
      )}
      {draft.type === "divider" && (
        <p className="text-navy/40 text-sm">Horizontal divider — no content needed.</p>
      )}
      <div className="flex gap-2 pt-1">
        <button
          onClick={() => onSave(draft)}
          className="px-4 py-1.5 bg-accent text-white text-xs rounded-full font-medium hover:bg-accent/90"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-1.5 border border-light-gray text-navy/60 text-xs rounded-full hover:bg-surface"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

function AddBlockMenu({ onAdd }: { onAdd: (type: Block["type"]) => void }) {
  const [open, setOpen] = useState(false)
  const types: { type: Block["type"]; label: string }[] = [
    { type: "text", label: "📝 Text" },
    { type: "heading", label: "🔤 Heading" },
    { type: "image", label: "🖼 Image" },
    { type: "video", label: "🎬 Video" },
    { type: "quote", label: "💬 Quote" },
    { type: "divider", label: "➖ Divider" },
  ]
  return (
    <div className="relative mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-1.5 border border-accent/30 text-accent text-xs rounded-full hover:bg-accent/5 transition-colors"
      >
        + Add Block
      </button>
      {open && (
        <div className="absolute left-0 top-9 bg-white border border-light-gray rounded-xl shadow-lg p-2 z-10 min-w-[150px]">
          {types.map((t) => (
            <button
              key={t.type}
              onClick={() => {
                onAdd(t.type)
                setOpen(false)
              }}
              className="block w-full text-left px-3 py-1.5 text-sm text-navy hover:bg-surface rounded-lg transition-colors"
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const defaultBlock = (type: Block["type"]): Block => {
  switch (type) {
    case "text":
      return { type: "text", content: "" }
    case "heading":
      return { type: "heading", content: "New Heading" }
    case "image":
      return { type: "image", src: "", caption: "" }
    case "video":
      return { type: "video", url: "", caption: "" }
    case "quote":
      return { type: "quote", text: "", attribution: "" }
    case "divider":
      return { type: "divider" }
  }
}

export function EditMode({
  projectId,
  initialSections,
}: {
  projectId: string
  initialSections: Section[]
}) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [sections, setSections] = useState<Section[]>(initialSections || [])
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showUnlock, setShowUnlock] = useState(false)
  const [pw, setPw] = useState("")
  const [editingBlock, setEditingBlock] = useState<{
    si: number
    bi: number
  } | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("editMode") === "true") {
      setIsEditMode(true)
    }
  }, [])

  const unlock = () => {
    if (pw === EDIT_PASSWORD) {
      sessionStorage.setItem("editMode", "true")
      setIsEditMode(true)
      setShowUnlock(false)
      setPw("")
    } else {
      alert("Wrong password")
      setPw("")
    }
  }

  const exitEdit = () => {
    sessionStorage.removeItem("editMode")
    setIsEditMode(false)
    setEditingBlock(null)
  }

  const save = async () => {
    setSaving(true)
    try {
      await fetch("/api/save-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: projectId, sections }),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch {
      alert("Save failed. Please try again.")
    }
    setSaving(false)
  }

  const updateBlock = (si: number, bi: number, updated: Block) => {
    setSections((prev) =>
      prev.map((s, i) =>
        i === si
          ? { ...s, blocks: s.blocks.map((b, j) => (j === bi ? updated : b)) }
          : s
      )
    )
    setEditingBlock(null)
  }

  const deleteBlock = (si: number, bi: number) => {
    setSections((prev) =>
      prev.map((s, i) =>
        i === si ? { ...s, blocks: s.blocks.filter((_, j) => j !== bi) } : s
      )
    )
  }

  const addBlock = (si: number, type: Block["type"]) => {
    setSections((prev) =>
      prev.map((s, i) =>
        i === si
          ? { ...s, blocks: [...s.blocks, defaultBlock(type)] }
          : s
      )
    )
  }

  const addSection = () => {
    setSections((prev) => [...prev, { title: "New Section", blocks: [] }])
  }

  const updateSectionTitle = (si: number, title: string) => {
    setSections((prev) =>
      prev.map((s, i) => (i === si ? { ...s, title } : s))
    )
  }

  const deleteSection = (si: number) => {
    setSections((prev) => prev.filter((_, i) => i !== si))
  }

  return (
    <div className="relative">
      {sections.map((section, si) => (
        <div key={si} className="mb-14">
          {/* Section title */}
          {isEditMode ? (
            <div className="flex items-center gap-3 mb-6">
              <input
                className="text-accent font-semibold tracking-[0.2em] uppercase text-sm bg-transparent border-b border-accent/30 outline-none flex-1"
                value={section.title || ""}
                onChange={(e) => updateSectionTitle(si, e.target.value)}
                placeholder="SECTION TITLE"
              />
              <button
                onClick={() => deleteSection(si)}
                className="text-red-400 text-xs hover:text-red-600 transition-colors"
                title="Delete section"
              >
                ✕ section
              </button>
            </div>
          ) : section.title ? (
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-6">
              {section.title}
            </p>
          ) : null}

          {/* Blocks */}
          <div className="space-y-8">
            {section.blocks.map((block, bi) => (
              <div
                key={bi}
                className={
                  isEditMode
                    ? "relative group border border-transparent hover:border-accent/20 rounded-xl p-3 -mx-3 transition-colors"
                    : ""
                }
              >
                {/* Edit / Delete controls */}
                {isEditMode && (
                  <div className="absolute -top-3 right-1 hidden group-hover:flex gap-1 z-10">
                    <button
                      onClick={() => setEditingBlock({ si, bi })}
                      className="px-2.5 py-0.5 bg-accent text-white text-xs rounded-full shadow"
                    >
                      edit
                    </button>
                    <button
                      onClick={() => deleteBlock(si, bi)}
                      className="px-2.5 py-0.5 bg-red-400 text-white text-xs rounded-full shadow"
                    >
                      delete
                    </button>
                  </div>
                )}

                {/* Inline edit form or block */}
                {isEditMode &&
                editingBlock?.si === si &&
                editingBlock?.bi === bi ? (
                  <BlockEditForm
                    block={block}
                    onSave={(updated) => updateBlock(si, bi, updated)}
                    onCancel={() => setEditingBlock(null)}
                  />
                ) : (
                  <BlockRenderer block={block} />
                )}
              </div>
            ))}
          </div>

          {/* Add block */}
          {isEditMode && <AddBlockMenu onAdd={(type) => addBlock(si, type)} />}
        </div>
      ))}

      {/* Add Section */}
      {isEditMode && (
        <button
          onClick={addSection}
          className="mt-2 px-4 py-2 border border-accent/30 text-accent text-sm rounded-full hover:bg-accent/5 transition-colors"
        >
          + Add Section
        </button>
      )}

      {/* Floating toolbar */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end">
        {isEditMode ? (
          <>
            <button
              onClick={save}
              disabled={saving}
              className="px-5 py-2 bg-accent text-white text-sm rounded-full shadow-lg hover:bg-accent/90 disabled:opacity-50 transition-all font-medium"
            >
              {saving ? "Saving…" : saved ? "✓ Saved!" : "Save Changes"}
            </button>
            <button
              onClick={exitEdit}
              className="px-5 py-2 bg-white border border-light-gray text-navy/50 text-sm rounded-full shadow hover:bg-surface transition-colors"
            >
              Exit Edit Mode
            </button>
          </>
        ) : (
          <button
            onClick={() => setShowUnlock(true)}
            className="w-10 h-10 bg-white/80 backdrop-blur border border-light-gray/50 text-navy/30 text-base rounded-full shadow hover:text-navy/60 hover:border-light-gray transition-all flex items-center justify-center"
            title="Edit this page"
          >
            ✏️
          </button>
        )}
      </div>

      {/* Password modal */}
      {showUnlock && (
        <div
          className="fixed inset-0 bg-navy/20 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={(e) => e.target === e.currentTarget && setShowUnlock(false)}
        >
          <div className="bg-white rounded-2xl p-8 shadow-2xl w-80">
            <h3 className="font-serif text-navy text-xl mb-1">Edit Mode</h3>
            <p className="text-navy/40 text-sm mb-5">Enter your password to edit this page.</p>
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && unlock()}
              placeholder="Password"
              autoFocus
              className="w-full border border-light-gray rounded-lg px-4 py-2.5 text-navy outline-none focus:border-accent mb-4 text-sm"
            />
            <div className="flex gap-3">
              <button
                onClick={unlock}
                className="flex-1 bg-accent text-white rounded-lg py-2.5 text-sm font-medium hover:bg-accent/90"
              >
                Unlock
              </button>
              <button
                onClick={() => {
                  setShowUnlock(false)
                  setPw("")
                }}
                className="flex-1 border border-light-gray text-navy/60 rounded-lg py-2.5 text-sm hover:bg-surface"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
