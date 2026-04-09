"use client"

import Image from "next/image"
import { Block } from "@/lib/projects"

export function BlockRenderer({ block }: { block: Block }) {
  if (block.type === "text") {
    return (
      <p className="text-navy/70 leading-relaxed text-lg max-w-3xl whitespace-pre-wrap">
        {block.content}
      </p>
    )
  }

  if (block.type === "heading") {
    return (
      <h3 className="font-serif text-2xl text-navy">{block.content}</h3>
    )
  }

  if (block.type === "image") {
    if (!block.src) return null
    return (
      <figure className="my-2">
        <div className="rounded-2xl overflow-hidden bg-surface flex items-center justify-center p-4">
          <Image
            src={block.src}
            alt={block.alt || block.caption || ""}
            width={900}
            height={600}
            className="rounded-xl object-contain max-h-[420px] w-auto max-w-full"
          />
        </div>
        {block.caption && (
          <figcaption className="text-center text-navy/40 text-sm mt-3">
            {block.caption}
          </figcaption>
        )}
      </figure>
    )
  }

  if (block.type === "video") {
    if (!block.url) return null
    const youtubeMatch = block.url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    )
    const vimeoMatch = block.url.match(/vimeo\.com\/(\d+)/)
    const isLocalFile = block.url.startsWith("/")
    const embedUrl = youtubeMatch
      ? `https://www.youtube.com/embed/${youtubeMatch[1]}`
      : vimeoMatch
      ? `https://player.vimeo.com/video/${vimeoMatch[1]}`
      : block.url

    const videoEl = isLocalFile ? (
      <video
        src={block.url}
        controls
        className="absolute inset-0 w-full h-full object-contain bg-black"
      />
    ) : (
      <iframe
        src={embedUrl}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allowFullScreen
      />
    )

    if (block.mockup === "desktop") {
      return (
        <figure className="my-2">
          {/* Desktop chrome */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-light-gray/60 bg-[#E8E8E4]">
            {/* Menu bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#E0DDD8]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              {/* Address bar */}
              <div className="flex-1 mx-4 bg-white/70 rounded-md px-3 py-1 text-xs text-navy/30 font-mono truncate">
                servicenow.com
              </div>
            </div>
            {/* Screen */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              {videoEl}
            </div>
          </div>
          {block.caption && (
            <figcaption className="text-center text-navy/40 text-sm mt-3">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    }

    return (
      <figure className="my-2">
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ aspectRatio: block.aspectRatio ?? "16/9" }}
        >
          {videoEl}
        </div>
        {block.caption && (
          <figcaption className="text-center text-navy/40 text-sm mt-3">
            {block.caption}
          </figcaption>
        )}
      </figure>
    )
  }

  if (block.type === "quote") {
    return (
      <blockquote className="border-l-4 border-accent pl-6 my-2 max-w-3xl">
        <p className="font-serif text-2xl text-navy italic leading-snug">
          &ldquo;{block.text}&rdquo;
        </p>
        {block.attribution && (
          <cite className="block mt-3 text-navy/50 text-sm not-italic">
            — {block.attribution}
          </cite>
        )}
      </blockquote>
    )
  }

  if (block.type === "divider") {
    return <hr className="border-light-gray/40 my-2" />
  }

  return null
}
