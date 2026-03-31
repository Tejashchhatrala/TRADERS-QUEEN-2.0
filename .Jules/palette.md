## 2024-03-30 - Interactive Elements Focus and Screen Reader Visibility
**Learning:** Found multiple interactive elements (mobile nav toggle, modal close buttons, carousel controls) lacking proper ARIA labels and keyboard focus indicators. The Exit Intent popup was also missing structural ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`).
**Action:** When implementing new icon-only buttons or interactive UI elements (like carousels or modals), always include `aria-label` for screen readers, and `focus-visible` utility classes (e.g., `focus-visible:ring-2`, `focus-visible:ring-primary`, `focus-visible:outline-none`) to ensure keyboard navigability is clear without breaking mouse user experience. Modals should always have standard dialog roles.

## 2026-03-31 - Tooltip Accessibility and Animation Pattern
**Learning:** Found static `<span>` tooltips relying on `hidden group-hover:block`. This completely broke keyboard accessibility and prevented smooth transitions (since display: none can't be animated).
**Action:** Tooltips should use a semantic `<button type="button">` trigger. The tooltip itself should use `opacity-0 invisible group-hover:opacity-100 group-hover:visible` to allow transition animations (like `translate-y-1 group-hover:translate-y-0`), and must include `group-focus-visible` states so keyboard users can reveal the tooltip.
