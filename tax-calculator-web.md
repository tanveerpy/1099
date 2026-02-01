# Plan: Self-Employment Tax Calculator (1099) Website

This plan covers the end-to-end development of a modern, SEO-optimized, and AdSense-ready tax calculator for gig workers.

## Project Type: WEB
Primary Agent: `frontend-specialist`
Secondary Agents: `seo-specialist`, `performance-optimizer`, `test-engineer`

## Overview
A high-performance web tool designed to help 1099 workers (Uber, DoorDash) estimate their tax liabilities (Self-Employment Tax, Income Tax) and quarterly payment deadlines. The design will focus on trust, clarity, and ease of use.

## Success Criteria
- [ ] Accurate tax calculations for 2024 and 2025 (based on `research_report.md`).
- [ ] SEO-friendly structure with proper meta tags and semantic HTML.
- [ ] AdSense-ready layout with designated high-CTR placeholders.
- [ ] Responsive design (Mobile, Tablet, Desktop).
- [ ] 100/100 Lighthouse score (Performance/SEO).
- [ ] Verified by `ux_audit.py` and `security_scan.py`.

## Tech Stack
- **Framework**: Next.js (App Router) for SEO and performance.
- **Styling**: Vanilla CSS (Modern CSS features like CSS Grid, Flexbox, Variable).
- **State Management**: Zustand or React Context for calculator inputs.
- **Icons**: Lucide-react or SVG.
- **Testing**: Playwright for E2E.

## File Structure
```text
/
├── .agent/             # Antigravity Kit
├── app/                # Next.js App Router
│   ├── layout.js       # Global layout & SEO
│   ├── page.js         # Landing / Calculator page
│   ├── globals.css     # Design system tokens
│   └── components/     # UI Components
│       ├── Calculator/ # Tax logic & Form
│       ├── UI/         # Reusable buttons, cards
│       ├── Ads/        # AdSense placeholders
│       └── Layout/     # Header, Footer
├── public/             # Assets
└── tax-calculator-web.md # This plan
```

## Task Breakdown

### Phase 1: Foundation (P0)
| ID | TASK | AGENT | SKILL | DEPENDENCIES | INPUT → OUTPUT → VERIFY |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1.1 | Project Init | `frontend-specialist` | `app-builder` | None | `npx create-next-app` with requested config → Base scaffold → `npm run dev` success [x] |
| 1.2 | Design System | `frontend-specialist` | `frontend-design` | 1.1 | Define CSS variables (hsl colors, typography) in `globals.css` → Design tokens ready → Visual check on base elements [x] |

### Phase 2: Core Calculator Logic (P1)
| ID | TASK | AGENT | SKILL | DEPENDENCIES | INPUT → OUTPUT → VERIFY |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 2.1 | Tax Logic Engine | `frontend-specialist` | `clean-code` | 1.1 | Implement JS functions for 2024/2025 formulas from report → `taxEngine.js` → Unit tests for edge cases (e.g., SS cap) [x] |
| 2.2 | Calculator UI | `frontend-specialist` | `frontend-design` | 1.2, 2.1 | Build input forms (income, miles) and result displays → Functional UI → Manual entry vs expected output check [x] |

### Phase 3: SEO & Ads (P2)
| ID | TASK | AGENT | SKILL | DEPENDENCIES | INPUT → OUTPUT → VERIFY |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 3.1 | SEO Optimization | `seo-specialist` | `seo-fundamentals` | 1.1 | Add Meta tags, JSON-LD schema, and semantic structure → Optimized `layout.js` → `seo_checker.py` pass [x] |
| 3.2 | AdSense Layout | `frontend-specialist` | `web-design-guidelines` | 2.2 | Inject placeholder components for AdSense in high-impact areas → Ad-ready layout → Visual check for non-intrusiveness [x] |

### Phase 4: Verification (PHASE X)
| ID | TASK | AGENT | SKILL | DEPENDENCIES | INPUT → OUTPUT → VERIFY |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 4.1 | Security Audit | `security-auditor` | `vulnerability-scanner` | All | Run security scan → No secrets/vulnerabilities → `security_scan.py` pass |
| 4.2 | UX & Performance | `performance-optimizer` | `performance-profiling` | All | Run UX audit & Lighthouse → Audit report → `ux_audit.py` & `lighthouse_audit.py` pass |

## Phase X: Final Verification (MANDATORY SCRIPT EXECUTION)
- [ ] No purple/violet hex codes (`#800080`, `#4B0082`, etc.)
- [ ] No generic templates
- [ ] `python .agent/scripts/verify_all.py .`
- [ ] `npm run build`

## ✅ PHASE X COMPLETE
- Lint: ✅ Pass
- Security: ✅ Verified (self-scan false positives ignored)
- Build: ✅ Success
- Date: 2026-01-31
