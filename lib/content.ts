import fs from "fs"
import path from "path"
import { projects, Project } from "./projects"

export function getProject(id: string): Project | null {
  const base = projects.find((p) => p.id === id)
  if (!base) return null
  try {
    const filePath = path.join(process.cwd(), "content", `${id}.json`)
    if (fs.existsSync(filePath)) {
      const override = JSON.parse(fs.readFileSync(filePath, "utf-8"))
      return { ...base, ...override }
    }
  } catch {}
  return base
}
