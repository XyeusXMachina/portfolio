# Portfolio Redesign Specification

## 1. Project Objective

Redesign the existing personal portfolio into a clean, minimal, professional web-developer and AI/Computer Vision portfolio with a distinctive 1-bit dithering visual identity.

The redesign must preserve the existing project's functionality, content, routing, and responsiveness unless a change is explicitly required by the redesign. Prioritize a polished user experience, strong typography, intentional spacing, accessibility, and maintainable code.

The visual style should feel like:

- Modern developer portfolio
- Minimal editorial layout
- Monochrome 1-bit computer-art aesthetic
- Subtle retro-computing influence
- Professional, credible, and suitable for research, engineering, and software development
- Animated, but never visually noisy or distracting

Avoid making the website look like a game interface, hacker dashboard, cyberpunk landing page, or heavily decorated experimental art site.

---

## 2. Core Design Direction

### Main Design Concept

Use the existing clean white mode and dark mode as the foundation. Add 1-bit dithering as a visual texture and image-treatment system rather than applying it to every component.

1-bit means using only two visual values within a treatment:

- Black and white in light mode
- Near-white and near-black in dark mode
- Optional use of the existing accent color only for emphasis, focus states, links, and selected interactive elements

The site should remain readable and professional even when the dithering effects are disabled or unavailable.

### Design Principles

1. Minimal first, decorative second.
2. Motion should communicate hierarchy, interaction, or progression.
3. Use dithering selectively, especially for portraits, backgrounds, icons, and visual accents.
4. Maintain strong contrast and accessible text sizes.
5. Avoid excessive gradients, glow effects, visual clutter, and unnecessary borders.
6. Ensure all animated elements respect reduced-motion preferences.
7. Preserve a consistent design system across light and dark modes.

---

## 3. Existing Portrait Image

Primary portrait asset:

```text
public/images/portrait-photo.jpg
```

Use this image as the main personal portrait throughout the portfolio where appropriate.

### Portrait Processing Requirements

- Do not replace the portrait with a random generated person.
- Preserve the user's identity and recognizable facial features.
- Create a visually consistent 1-bit/dithered treatment using CSS, canvas, SVG, or a preprocessing utility if appropriate.
- Keep the original image available as a fallback.
- Avoid permanent destructive modification of the original JPG unless a separate processed asset is intentionally generated.
- Provide a graceful fallback if image processing fails.
- Ensure the portrait remains professional and recognizable.
- Avoid excessive distortion, aggressive posterization, or unreadable facial details.

### Suggested Portrait Variants

Create or support the following variants if practical:

1. Original portrait for accessibility and fallback.
2. High-contrast monochrome portrait.
3. 1-bit dithered portrait for the hero section.
4. Optional hover state that transitions between original and dithered versions.

The portrait treatment should look intentional, not like a low-quality image filter.

---

## 4. Color System

Use a restrained monochrome palette.

### Light Mode

- Page background: warm white or pure white
- Primary text: near-black
- Secondary text: dark gray
- Borders: light gray or black with low visual weight
- Dither pixels: black and white
- Accent: use the existing project accent color only where appropriate

### Dark Mode

- Page background: near-black or deep charcoal
- Primary text: off-white
- Secondary text: muted gray
- Borders: muted gray or off-white with low opacity
- Dither pixels: off-white and near-black
- Accent: use the existing project accent color sparingly

Do not introduce many new colors. The portfolio should remain visually coherent in both themes.

Define all colors through the existing theme/token system when available. Do not scatter hard-coded colors throughout components.

---

## 5. Typography

Use a clean modern sans-serif font for primary content. A monospace font may be used selectively for:

- Small metadata
- Technical labels
- Navigation indicators
- Project tags
- Code-related details
- Section numbering

Typography requirements:

- Strong hierarchy between headline, section title, body, metadata, and labels.
- Avoid excessive uppercase text.
- Keep paragraphs readable with a reasonable maximum width.
- Use responsive font sizing.
- Do not use novelty or pixel fonts for the entire website.
- Use a pixel-inspired or monospace font only as a subtle supporting detail.

---

## 6. Layout Structure

Retain or improve the current portfolio's sections based on the existing codebase. If sections are missing, consider the following structure:

1. Header / Navigation
2. Hero / Introduction
3. About / Profile
4. Skills / Technical Stack
5. Featured Projects
6. Research / Experience
7. Design or Engineering Process
8. Contact / Call to Action
9. Footer

Do not add sections merely to increase page length. Only include sections supported by available content or clearly marked placeholders.

### Layout Characteristics

- Generous whitespace.
- Strong alignment to a consistent content grid.
- Responsive behavior for mobile, tablet, and desktop.
- Asymmetry may be used in the hero or project layout, but it must remain balanced.
- Avoid unnecessary cards for every item.
- Use borders, rules, and spacing instead of excessive shadows.
- Keep the content easy to scan.

---

## 7. Hero Section

Redesign the hero section as the primary expression of the portfolio identity.

### Suggested Composition

- Short professional label, such as `AI / COMPUTER VISION / SOFTWARE ENGINEERING`.
- Strong headline introducing the person and their focus.
- Concise supporting description.
- Primary CTA, such as `View Projects`.
- Secondary CTA, such as `Contact Me` or `View Resume`, if supported.
- Portrait image using `public/images/portrait-photo.jpg`.
- Small technical or editorial metadata, such as location, role, or availability, only if actual information exists.

### Hero Visual Treatment

- Use a subtle dithered portrait or dithered background texture.
- Add restrained entrance animation for text and portrait.
- Consider a slow, low-amplitude floating or scanning effect.
- Use an animated cursor, underline, or pixel indicator only if it improves the design.
- Do not use constant aggressive motion.

### Hero Motion

Possible effects:

- Text elements reveal with staggered fade and vertical movement.
- Portrait transitions from dithered to original on hover or focus.
- A small pixel marker follows a restrained loop.
- Decorative dither texture shifts very subtly.
- CTA buttons have a clear hover and pressed state.

All effects must be performant and must not cause layout shifts.

---

## 8. 1-Bit Dithering System

Implement dithering as a reusable visual treatment rather than one-off styling.

### Recommended Techniques

Choose the most maintainable approach based on the current stack:

- CSS patterns for simple backgrounds.
- SVG patterns for scalable decorative textures.
- Canvas processing for image dithering.
- Preprocessed static assets if runtime processing would hurt performance.
- CSS masking or overlays for subtle decorative effects.

Do not introduce a large dependency solely for a simple effect unless the benefit is justified.

### Dithering Guidelines

- Use ordered dithering, Bayer dithering, or error-diffusion dithering if implementing image processing.
- Keep pixel density controlled and responsive.
- Avoid making small text dithered.
- Ensure important information is never communicated only through texture.
- Ensure dithering does not reduce accessibility or text contrast.
- Use a consistent threshold and visual language across the site.
- Allow the dithered treatment to be disabled for users who prefer reduced visual effects when appropriate.

### Appropriate Usage

Good uses:

- Portrait image
- Section background texture
- Project thumbnail placeholder
- Decorative visual separator
- Small icon treatment
- Hover overlay

Avoid:

- Dithering every text block
- Dithering navigation labels
- Making buttons difficult to read
- Applying noisy textures behind dense content
- Excessive animated pixel noise

---

## 9. Animation and Interaction

Add more animated movement while maintaining a minimal and professional appearance.

### General Motion Rules

- Use short, smooth transitions for interactions.
- Use longer, softer transitions for section entrances.
- Prefer transform and opacity animations for performance.
- Avoid animating layout-heavy properties when possible.
- Do not animate everything at once.
- Use animation to guide attention rather than compete with content.

### Recommended Interactions

#### Navigation

- Smooth active-link indicator.
- Subtle underline or pixel marker on hover.
- Mobile menu with clean open and close transition.
- Sticky or semi-sticky header only if it supports usability.

#### Buttons

- Small translation or pixel-offset effect on hover.
- Clear focus-visible state.
- Optional border inversion or subtle dither sweep.
- Avoid excessive bouncing, scaling, or glow.

#### Project Cards

- Image shifts or reveals slightly on hover.
- Border or metadata changes subtly.
- Dither overlay transitions smoothly.
- Card remains usable with keyboard navigation and touch devices.

#### Section Entrances

- Use Intersection Observer or the project's existing animation system.
- Reveal sections only once unless there is a strong reason to repeat.
- Respect `prefers-reduced-motion: reduce`.
- Avoid hiding important content if JavaScript fails.

#### Background Details

- Use limited animated pixel patterns, scanning lines, or small markers.
- Keep movement slow and low contrast.
- Avoid infinite animations over large areas unless performance is confirmed.

---

## 10. Project Section

The project section should communicate technical ability clearly without becoming visually crowded.

### Project Content

Use real project information where available. For missing images, use explicit placeholders that can be replaced manually.

Example placeholder paths:

```text
public/images/projects/project-01-placeholder.jpg
public/images/projects/project-02-placeholder.jpg
public/images/projects/project-03-placeholder.jpg
```

Do not invent project screenshots, client logos, metrics, or claims. Use placeholder labels such as:

- `ADD PROJECT IMAGE`
- `ADD PROJECT DESCRIPTION`
- `ADD PROJECT LINK`
- `ADD TECHNOLOGIES`

### Project Layout

Consider a mixture of:

- Featured project with larger visual treatment.
- Compact project list for additional work.
- Technical tags.
- Year or project type metadata if known.
- Links to repository, live demo, case study, or documentation when available.

Keep project cards visually consistent. Avoid using a separate heavy card style for every project.

---

## 11. Image Placeholders

For every image that the developer must manually provide:

- Use a clearly named placeholder asset or placeholder container.
- Include the expected dimensions or aspect ratio in a comment or documentation.
- Do not use broken image icons.
- Provide a neutral dithered placeholder visual where useful.
- Make replacing the image simple and obvious.
- Use descriptive alt text when the real image is added.

Suggested placeholder structure:

```text
public/images/
├── portrait-photo.jpg
├── projects/
│   ├── project-01-placeholder.jpg
│   ├── project-02-placeholder.jpg
│   └── project-03-placeholder.jpg
├── experience/
│   └── experience-placeholder.jpg
└── og-image-placeholder.jpg
```

Only create folders and assets that fit the existing project structure.

---

## 12. Favicon and Branding

Create a favicon if feasible.

### Favicon Direction

Use a simple, recognizable personal mark rather than a detailed portrait. Possible directions:

- Initials or monogram.
- Minimal pixel-inspired lettermark.
- Geometric symbol associated with AI, code, or engineering.
- Monochrome icon that works in both light and dark browser themes.

The favicon must remain recognizable at small sizes, especially 16x16 and 32x32 pixels.

### Required Outputs When Supported

- `favicon.ico`
- `favicon.svg`
- Apple touch icon if the project supports it
- Appropriate `<link>` tags in the document head
- Optional web manifest icon references

Do not create an overly detailed icon that becomes unreadable at small sizes.

If the agent cannot generate image files reliably, create a simple SVG favicon directly in the project and document how it can be replaced manually.

---

## 13. Accessibility Requirements

The redesign must remain accessible.

- Use semantic HTML elements.
- Maintain sufficient color contrast.
- Add meaningful alt text to real images.
- Decorative images must use empty alt text where appropriate.
- Provide visible keyboard focus states.
- Ensure all interactive elements are keyboard accessible.
- Do not rely on hover alone to expose important information.
- Respect `prefers-reduced-motion`.
- Avoid flashing, rapidly changing, or seizure-triggering animations.
- Maintain readable text at mobile widths.
- Ensure menus and dialogs have appropriate labels and states.

---

## 14. Responsive Design

The website must work smoothly on:

- Small mobile phones
- Large mobile phones
- Tablets
- Laptops
- Large desktop screens

### Responsive Requirements

- No horizontal overflow.
- Portrait image scales without distortion.
- Hero layout transitions cleanly from two-column to single-column.
- Navigation becomes a usable mobile menu.
- Project layouts stack or adapt appropriately.
- Animation density may be reduced on smaller devices.
- Avoid excessive viewport-height layouts that hide content.

Test at minimum:

- 320px width
- 375px width
- 768px width
- 1024px width
- 1440px width

---

## 15. Performance Requirements

- Avoid unnecessary animation libraries.
- Lazy-load noncritical images.
- Use responsive image sizing when possible.
- Avoid processing large images repeatedly on every render.
- Memoize or cache generated dithered image output when appropriate.
- Prefer CSS transforms and opacity for animation.
- Prevent cumulative layout shift.
- Ensure the site remains usable on lower-powered mobile devices.
- Check console output for warnings and runtime errors.

---

## 16. Implementation Workflow for the AI Agent

Follow this order:

1. Inspect the current project structure and identify the framework, entry points, routing, styling system, and existing theme implementation.
2. Run the project before making changes to establish a baseline.
3. Review the existing components and preserve reusable logic where possible.
4. Identify the current light/dark mode implementation.
5. Inspect `public/images/portrait-photo.jpg` and verify that it is available.
6. Create a design token layer for colors, spacing, typography, borders, motion, and theme values.
7. Implement the updated global layout and navigation.
8. Redesign the hero section using the provided portrait.
9. Implement the reusable 1-bit dithering treatment.
10. Add restrained animation and interaction states.
11. Redesign project and other portfolio sections while preserving real content.
12. Add clearly marked image placeholders for missing assets.
13. Create a favicon or simple SVG mark if feasible.
14. Add responsive behavior and accessibility improvements.
15. Run linting, type checking, tests, and production build where supported.
16. Check both light and dark modes.
17. Test keyboard navigation and reduced-motion behavior.
18. Review for visual clutter, excessive animation, poor contrast, and inconsistent spacing.
19. Provide a concise summary of changed files and any manual image replacements required.

---

## 17. Quality Checklist

Before considering the redesign complete, verify:

- [ ] Existing portfolio functionality still works.
- [ ] Light mode is clean and readable.
- [ ] Dark mode is clean and readable.
- [ ] 1-bit dithering is visible but restrained.
- [ ] Portrait at `public/images/portrait-photo.jpg` is used appropriately.
- [ ] Original portrait remains available as a fallback where practical.
- [ ] Missing images are represented by clear placeholders.
- [ ] Animations are smooth and purposeful.
- [ ] Reduced-motion preference is supported.
- [ ] Navigation works on desktop and mobile.
- [ ] Keyboard focus states are visible.
- [ ] No horizontal scrolling occurs at supported widths.
- [ ] No invented project details or unsupported claims were added.
- [ ] Favicon is present or a documented fallback was created.
- [ ] No broken image links exist.
- [ ] No console errors are present.
- [ ] Production build completes successfully, if supported.
- [ ] Design remains professional rather than overly retro or game-like.

---

## 18. Agent Behavior and Constraints

The AI agent should:

- Inspect before modifying.
- Reuse existing components and utilities when sensible.
- Avoid rewriting the entire project without justification.
- Avoid deleting existing content unless it is obsolete or explicitly requested.
- Avoid adding dependencies without explaining their purpose.
- Avoid inventing personal information, work experience, project metrics, or testimonials.
- Use TODO comments or placeholders for information that requires manual input.
- Keep code modular and maintainable.
- Explain major design and architectural decisions briefly.
- Prefer progressive enhancement: the portfolio must remain usable without advanced animation or image processing.

The final result should feel like a refined professional portfolio with a distinctive monochrome pixel/dither identity, not a template overloaded with effects.
