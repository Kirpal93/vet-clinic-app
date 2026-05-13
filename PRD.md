# PRD — PawCare Vet Clinic Landing Page

**Last Updated:** May 2026  
**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Resend  
**Deployment Target:** GitHub + Vercel

---

## 1. Product Overview

A professional, elegant single-page marketing website for **PawCare Vet Clinic**, a family veterinary practice located in Vaishali Sector-1, Ghaziabad UP 201010. The site generates appointment leads via an integrated contact form and showcases services and social proof.

---

## 2. Goals

| Goal | Success Metric |
|---|---|
| Capture appointment leads | Contact form submissions forwarded to clinic email via Resend |
| Showcase services & pricing | All 6 service tiers visible with transparent pricing |
| Build trust | Testimonials section + 4.9★ social proof badge |
| Drive calls | Sticky bottom CTA bar always visible |
| Easy findability | Map embed + Google Maps deep link |

---

## 3. Pages & Sections

### 3.1 Top Bar
- Social media links (Facebook, Instagram, Twitter/X, WhatsApp)
- Phone number: `+91 99584 36981`
- Address: Vaishali Sector-1, Ghaziabad UP 201010
- Background: `blue-900`

### 3.2 Navigation (Sticky)
- Logo: Text-based — "PawCare / Vet Clinic"
- Menu items: Home · Services · About · Testimonials · Location · Contact
- Each item smooth-scrolls to its section
- "Book Appointment" CTA button (scrolls to form)
- Mobile-responsive hamburger menu

### 3.3 Hero Section (`#home`)
- Full-width gradient background (blue-950 → blue-800) with image overlay
- Headline: "Caring for Your Beloved Pets Like Family"
- Trust badges: Experienced Vets · Modern Equipment · Emergency Services
- **Appointment Form** (right column):
  - Fields: Name*, Phone*, Email, Message
  - Submit via `/api/contact` (Resend)
  - Loading / Success / Error states

### 3.4 Services & Pricing (`#services`)
- 6 service cards with icon, description, and price:
  | Service | Price |
  |---|---|
  | General Health Check | ₹500 |
  | Vaccinations | ₹800 |
  | Surgery & Procedures | From ₹3,000 |
  | Diagnostics & Lab Tests | From ₹700 |
  | Dental Care | ₹1,500 |
  | Emergency Care | ₹2,000 |
- Image showcase row (2 images from `vet_images/`)

### 3.5 About (`#about`)
- Stats: 15+ Years · 8,000+ Patients · 5 Vets · 24/7 Emergency
- Opening hours card
- Main image from `vet_images/vet - Google Search.png`
- Floating trust badge (4.9/5 from 500+ reviews)

### 3.6 Testimonials (`#testimonials`)
- 4 review cards with reviewer photo, name, location, pet type, star rating, text
- Photos from `vet_reviews/`
- Overall rating badge: 4.9 ★ from 500+ reviews

### 3.7 Location / Map (`#location`)
- OpenStreetMap embed (no API key required)
- Google Maps deep link for directions
- Address, hours, and contact info sidebar cards

### 3.8 Footer
- Brand column with social links
- Quick links
- Services list
- Contact info
- Copyright

### 3.9 Sticky Bottom Bar (Fixed)
- Message: "Ready to care for your pet? Call to make an appointment!"
- Phone CTA button: `+91 99584 36981`
- Background: `blue-700`
- Adds `pb-20` padding to footer so content isn't obscured

---

## 4. Technical Architecture

```
vet-clinic-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, Inter font, metadata
│   │   ├── page.tsx            # Page assembly
│   │   ├── globals.css         # Tailwind + custom CSS vars
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # Resend email POST handler
│   └── components/
│       ├── TopBar.tsx
│       ├── Navbar.tsx
│       ├── Hero.tsx            # Includes appointment form
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Testimonials.tsx
│       ├── MapSection.tsx
│       ├── Footer.tsx
│       └── StickyBottomBar.tsx
├── public/
│   └── images/
│       ├── hero-1.jpg
│       ├── hero-2.jpg
│       ├── service-1.jpg
│       ├── service-2.jpg
│       ├── about.png
│       ├── review-1.jpg
│       └── review-2.jpg
├── .env.local                  # RESEND_API_KEY, CLINIC_EMAIL
├── .env.example                # Safe template for git
├── PRD.md                      # This file
└── package.json
```

---

## 5. Environment Variables

| Variable | Description | Required |
|---|---|---|
| `RESEND_API_KEY` | From resend.com dashboard | Yes |
| `CLINIC_EMAIL` | Email to receive appointment notifications | Yes |

### Setting up on Vercel:
1. Go to Project → Settings → Environment Variables
2. Add `RESEND_API_KEY` and `CLINIC_EMAIL`
3. Redeploy

---

## 6. Deployment Checklist

### Local Development
- [ ] From repo root: `cd vet-clinic-app` then `npm run dev` (Windows PowerShell 5.x does **not** support `&&`; use two lines or `;` between commands.)
- [ ] Fill `.env.local` with real `RESEND_API_KEY`
- [ ] Test form submission end-to-end

### GitHub Setup
- [ ] `git init` in `vet-clinic-app/`
- [ ] Add `.gitignore` (ensure `.env.local` is excluded)
- [ ] First commit (pick one):
  - **PowerShell 5.x / CMD-safe:** run each line separately:
    - `git add .`
    - `git commit -m "feat: PawCare vet clinic landing page"`
  - **Or** one line with semicolons: `git add .; git commit -m "feat: PawCare vet clinic landing page"`
  - **Git Bash** (or PowerShell 7+): `git add . && git commit -m "feat: PawCare vet clinic landing page"`
- [ ] Create GitHub repo and push (PowerShell 5: run `git remote add origin <url>` then `git push -u origin main` on separate lines)

### Vercel Deployment
- [ ] Go to [vercel.com](https://vercel.com) → **Add New…** → **Project** → import **kirpals/pawcare-vet** (or your repo).
- [ ] **Root directory:** If the GitHub repo root is *this app folder* (`package.json` at root), leave blank. If the repo contains a parent folder, set **Root Directory** to `vet-clinic-app`.
- [ ] **Environment Variables** (Production — and Preview if you test there):  
  `RESEND_API_KEY` = (from Resend) · `CLINIC_EMAIL` = inbox for appointment emails  
  Optional: add `RESEND_FROM` later if you move the sender to an env var.
- [ ] Deploy. After first deploy, test the appointment form on the `.vercel.app` URL.
- [ ] **CLI (optional):** from `vet-clinic-app`, run `vercel login`, then `vercel` (preview) or `npm run vercel:prod`. Repo already includes `vercel.json` (Next.js + `bom1` region for India-adjacent functions).

### Resend Setup
- [ ] Create account at [resend.com](https://resend.com)
- [ ] Verify your sending domain (e.g., `pawcarevetclinic.com`)
- [ ] Copy API key to `.env.local` / Vercel env vars
- [ ] Update `from` address in `api/contact/route.ts` to match verified domain

---

## 7. Future Enhancements

| Feature | Priority | Notes |
|---|---|---|
| Google Maps API embed | Medium | More accurate pin placement |
| Online booking calendar | High | Integrate Calendly or Cal.com |
| WhatsApp chat widget | Medium | Direct link to WhatsApp number |
| Blog / pet care tips | Low | SEO content strategy |
| Multi-language support | Low | Hindi + English |
| Pet health portal | Low | Patient login for records |
| Analytics | Medium | Vercel Analytics or Google Analytics 4 |

---

## 8. Design System

| Token | Value |
|---|---|
| Primary | `blue-700` (#1d4ed8) |
| Primary Dark | `blue-900` (#1e3a8a) |
| Background | `white` / `slate-50` |
| Text | `slate-800` / `slate-600` |
| Accent | `sky-300` / `sky-500` |
| Font | Inter (Google Fonts) |
| Border Radius | `rounded-xl` / `rounded-2xl` |

---

*This PRD is a living document. Update as features are shipped or requirements change.*
