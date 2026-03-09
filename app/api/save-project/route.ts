import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req: NextRequest) {
  try {
    const { id, sections } = await req.json()
    if (!id || typeof id !== "string" || !/^[a-z0-9-]+$/.test(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 })
    }
    const dir = path.join(process.cwd(), "content")
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(
      path.join(dir, `${id}.json`),
      JSON.stringify({ sections }, null, 2)
    )
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
