# Minha Imports & Exports — Site Issues

**Audited:** 21 Aug 2026
**Branch audited:** `origin/main` @ `ecdcb42` — this is the Vercel **production** branch, so everything below is live.
**Repo:** https://github.com/manueninfotech/Minha-Imports-and-Exports

Nothing here is an outage. The site is up and serving correctly. These are SEO, metadata,
and repo-hygiene defects. Ordered by impact.

---

## 1. Social share previews are broken — `og-image.jpg` does not exist

**Severity:** High · **Effort:** 15 min

The Open Graph / Twitter card image is referenced four times but the file was never added
to `public/`.

| Reference | Location |
|---|---|
| `og:image` | `index.html:30` |
| `twitter:image` | `index.html:38` |
| `DEFAULT_IMAGE` (fallback for every page) | `src/components/common/SEO.jsx:5` |

`public/` contains only: `favicon.png`, `favicon1.png`, `icons.svg`, `robots.txt`, `sitemap.xml`.

**Effect:** every link shared on WhatsApp, LinkedIn, or Facebook renders a blank preview
card. Since inbound inquiries run through WhatsApp, this is the highest-value fix on the list.

**Fix:** add a 1200×630 JPG at `public/og-image.jpg`. Branded hero shot + logo + "Guntur Dry
Red Chilli Exporter" is enough.

---

## 2. Sitemap is missing 18 of 32 product pages

**Severity:** High · **Effort:** 20 min

`public/sitemap.xml` lists **14** `/varieties/*` URLs. `src/config/chilliData.js` defines **32**
varieties, each of which renders a real page at `/varieties/:id`.

**Missing from the sitemap** (all live, all indexable):

`341-dry-chilli`, `no5-dry-chilli`, `armoor-dry-chilli`, `devonur-deluxe-chilli`,
`teja-fatki`, `s10-fatki`, `bullet-dry-chilli`, `chilli-26-dry`, `super10-dry-chilli`,
`bangaram-chilli-gradea`, `shark-dry-chilli`, `classic-dry-chilli`, `romi26-dry-chilli`,
`syngenta-5531-byadgi`, `byadgi-335-chilli`, `endo5-c5-chilli`, `kashmiri-dry-chilli`,
`wrinkle-273-chilli`

**Effect:** 18 product pages are not being submitted to Google. These are exactly the
long-tail keyword pages the site is built to rank for.

**Fix:** generate the sitemap from `chilliData.js` at build time rather than hand-maintaining
it, so it can't drift again. `lastmod` values are also stale (all `2026-07-27`).

---

## 3. Three different phone numbers across the site

**Severity:** Medium · **Effort:** 5 min

| Number | Where | Context |
|---|---|---|
| `+91-7288995777` | `src/components/common/SEO.jsx:27` | Organization schema, `contactType: sales` |
| `+91-8185867999` | `src/components/common/SEO.jsx:54` | LocalBusiness schema |
| `+91 99857 28555` | `src/pages/Contact.jsx:272`, `:89`, `:773` | Contact page, WhatsApp links, tel: link |

**Effect:** the structured data feeds Google Business / knowledge panels. Google may surface
one of the first two numbers while all actual customer contact flows to the third. Inconsistent
NAP (Name/Address/Phone) data also weakens local SEO.

**Fix:** confirm with the business which number is canonical, then use it in all three places.

---

## 4. Thirteen dead links in the crawler fallback block

**Severity:** Medium · **Effort:** 10 min

The hidden `<main>` SEO block in `index.html` (lines 96–163) still uses the old GitHub Pages
path prefix `/Minha_Imports_and_Exports/`. On the current domain that prefix does not exist,
so **all 13 links 404**.

Five of them additionally use variety slugs that were never in `chilliData.js`:

| Link in `index.html` | Status |
|---|---|
| `/varieties/teja-s17` (line 107) | slug does not exist — real: `teja-stem-deluxe` |
| `/varieties/s4-334` (line 108) | slug does not exist — real: `s4-stem-deluxe` |
| `/varieties/byadgi` (line 109) | slug does not exist — real: `byadgi-stem` |
| `/varieties/armour` (line 110) | slug does not exist — real: `armoor-dry-chilli` |
| `/varieties/wonder-hot` (line 111) | slug does not exist at all |

The logo `<img>` at line ~96 points at `/Minha_Imports_and_Exports/favicon1.png` and is
likewise broken.

**Effect:** this block exists specifically so crawlers can read the site without executing JS.
Right now it feeds them a set of 404s.

**Fix:** strip the `/Minha_Imports_and_Exports` prefix from all 13 links and correct the five
slugs.

---

## 5. Repo hygiene — default branch points at a stale branch

**Severity:** Medium (process risk, not user-facing) · **Effort:** 10 min

Three settings disagree about which branch matters:

| Setting | Value |
|---|---|
| Vercel production branch | `main` ✅ correct |
| GitHub default branch (`origin/HEAD`) | `feature/updates` ❌ |
| GitHub Pages workflow trigger (`.github/workflows/deploy.yml:6`) | `feature/updates` ❌ |

The workflow was repointed from `main` to `feature/updates` on 2 Jul (commit `a0d096c`,
"Changed the branch name for deployment") and never switched back.

**This has already caused one incident.** The merge on 1 Aug (`0dc3b9c`) merged an *outdated*
`main` into `feature/updates`, silently reverting 7 commits of work on that branch — including
the WhatsApp contact-form redirect, the Product→WebPage schema fix for the Search Console
warning, and the correct production domain in `SEO.jsx`. `feature/updates` still carries the
old `shravyavenishetty-manuen.github.io` URL as its `BASE_URL`.

Production was never affected because Vercel deploys `main`. But anyone who clones the repo
today lands on `feature/updates` and starts from the reverted code — the same trap that caused
the first incident.

There is also a **second public copy of the site** on GitHub Pages, built from `feature/updates`,
serving canonical tags that point at a dead github.io address.

**Fix:**
1. Set the GitHub default branch back to `main` (Settings → General → Default branch).
2. Delete `.github/workflows/deploy.yml` — Vercel handles deploys; the Pages workflow only
   publishes a confusing duplicate.
3. Delete the `feature/updates` branch. Verified: it contains nothing `main` needs.

---

## 6. Minor / cleanup

- **Product images are hotlinked from Google.** Every `image` field in `chilliData.js` points at
  `lh3.googleusercontent.com/aida-public/...`. These are AI-Studio-hosted URLs with no uptime
  guarantee — if they expire, the entire product catalog loses its images. Should be
  self-hosted in `src/assets/`.
- **`README.md` is still the stock Vite template.** No setup, deploy, or architecture notes.
- **Root-level scripts `crop.js`, `remove_background.js`, `remove_bg.cjs`** are one-off image
  utilities sitting in the project root. `sharp` and `jimp` are listed as runtime
  `dependencies` in `package.json` but are only used by these scripts — they should be
  `devDependencies` (or the scripts moved to `scripts/` and the deps dropped) to cut install
  and build time.
- **Sitemap `lastmod` dates are all `2026-07-27`**, predating the Aug 1 and Aug 5 content changes.

---

## Suggested order

1. `og-image.jpg` (#1) — biggest visible win, smallest effort
2. Branch cleanup (#5) — prevents another lost-work incident
3. Sitemap generation (#2) — unlocks 18 pages for indexing
4. Phone numbers (#3) and fallback links (#4) — quick correctness fixes
5. Self-host product images (#6) — before the Google URLs expire
