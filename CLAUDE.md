# CLAUDE.md — anu-portfolio

## Project Overview

This is **Anuradha Vellineni's portfolio website** — a Next.js 14 app deployed on Vercel at `https://anu-portfolio-brown.vercel.app`. It showcases her work as a Staff Product Designer with 10+ years of experience at ServiceNow, Google, PayPal, and JPMorgan Chase.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with a custom design token system
- **Animation**: Framer Motion
- **Deployment**: Vercel

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Project Structure

```
app/
  page.tsx                  # Home page — assembles all sections
  layout.tsx                # Root layout with metadata/SEO
  globals.css               # Global styles + font imports
  projects/[id]/page.tsx    # Dynamic project detail pages
  jobs/page.tsx             # Jobs page
  ai-experiments/page.tsx   # AI experiments page
  api/save-project/         # API route for saving project overrides

components/
  Hero.tsx                  # Landing hero with animated text reveal
  About.tsx                 # About section with stats and education
  Projects.tsx              # Project grid/list
  Experience.tsx            # Timeline of work experience
  Skills.tsx                # Skills section
  Contact.tsx               # Contact section
  Navigation.tsx            # Top nav
  Footer.tsx                # Footer
  BlockRenderer.tsx         # Renders project content blocks (text, image, quote, etc.)
  AIExperiments.tsx         # AI experiments showcase
  EditMode.tsx              # In-browser project editing UI
  StoryboardGenerator.tsx   # Storyboard generation feature

lib/
  projects.ts               # All project data (source of truth for portfolio content)
  content.ts                # getProject() — merges base data with JSON overrides
  ai-experiments.ts         # AI experiments data

public/images/              # All project images, organized by project slug
```

## Design System

Defined in `tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `cream` | `#FAFAF8` | Page background |
| `navy` | `#0A1628` | Primary text |
| `accent` | `#C4956A` | Warm gold — highlights, CTAs, hover states |
| `surface` | `#F0EDE8` | Card backgrounds |
| `light-gray` | `#E8E8E4` | Borders, dividers |

**Fonts**: DM Serif Display (headings), Inter (body)

## Content Architecture

### Project Data (`lib/projects.ts`)
All portfolio projects live here as a typed `Project[]` array. Each project has:
- `id` — slug used in URLs and image paths (e.g. `servicenow-uex`)
- `title`, `company`, `role`, `year`, `era` — metadata
- `image` + `images[]` — cover and gallery images
- `challenge` — one-line challenge statement
- `description` — summary
- `bullets[]` — key achievements
- `sections[]` — rich content blocks for the detail page

### Content Block Types (`lib/projects.ts` — `Block` type)
Project detail sections are built from typed blocks:
- `text` — paragraph content
- `heading` — section subheading
- `image` — with `src`, `alt`, `caption`
- `video` — with `url`, `caption`
- `quote` — with `text`, `attribution`
- `divider` — horizontal rule

### JSON Content Overrides (`lib/content.ts`)
Projects can be overridden at runtime via `content/{id}.json` files (not committed). The `getProject(id)` function merges `projects.ts` base data with any JSON override found on disk.

## Current Projects (in display order)

1. **servicenow-uex** — AI-native employee experience, Employee Works (Current)
2. **servicenow-wsd** — Workplace Service Delivery, Map Studio, Reservations (2019–2024)
3. **google-emoney** — Google Payments Platform, eMoney + PSD2 (2018–2019)
4. **paypal-partner** — PayPal Partner Servicing portal (2016–2018)
5. **chase-payments** — Chase Mobile Banking, ATM OTP, responsive web (2014–2016)
6. **wallyhome** — IoT home sensor dashboard (2014)
7. **botcentral** — Conversational UI / Facebook Messenger bots (2016)

## Key Design Decisions

- **Serif + accent gold aesthetic** — warm, editorial feel intentional for a design portfolio
- **Framer Motion mask reveals** — text animations on Hero use clip/overflow technique (not opacity-only)
- **`useInView` scroll animations** — sections animate in as they enter the viewport (`once: true`)
- **App Router** — uses Next.js 14 App Router conventions throughout
- **No test suite** — no testing framework set up; lint is the only automated check

## Deployment

Deployed on Vercel. The `BASE_URL` in `layout.tsx` should match the live domain. Vercel env variables should be used for any secrets — never commit to `.env`.
