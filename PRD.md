# Milan Paudyal Portfolio Website

A sophisticated portfolio showcasing an AI/ML & Automation Lead's expertise through clean design and thoughtful interactions.

**Experience Qualities**:
1. **Professional** - Conveys technical expertise and credibility through structured content presentation
2. **Approachable** - Balances professionalism with warmth through thoughtful micro-interactions and personal touches
3. **Clarity-focused** - Prioritizes readability and clear information hierarchy over visual complexity

**Complexity Level**: Light Application (multiple features with basic state)
- Single-page portfolio with multiple interactive sections, smooth scrolling navigation, modal dialogs for project details, contact form functionality, and theme switching capability

## Essential Features

**Hero Section with CTA**
- Functionality: Eye-catching introduction with clear value proposition and action buttons
- Purpose: Immediately communicate Milan's role and expertise while guiding visitors to key content
- Trigger: Page load with fade-in animation
- Progression: Load → Hero appears → User reads headline/subheadline → Clicks "See My Work" or "Contact Me" → Scrolls to relevant section
- Success criteria: Clear messaging, prominent CTAs, professional portrait display

**Interactive Project Showcase**
- Functionality: Grid of project cards that expand into detailed modal views
- Purpose: Demonstrate technical capabilities and real-world impact through concrete examples
- Trigger: Click on project card
- Progression: Browse grid → Click project card → Modal opens with detailed information → View tech stack and achievements → Close to return to grid
- Success criteria: Engaging preview cards, informative modal content, smooth transitions

**Professional Timeline**
- Functionality: Career progression display with achievements and milestones
- Purpose: Establish credibility and show growth trajectory in AI/ML field
- Trigger: Scroll into view with staggered animations
- Progression: Scroll to experience section → Timeline items animate in → Read career progression → Understand expertise evolution
- Success criteria: Clear chronology, impactful achievement bullet points, visual hierarchy

**Contact Integration**
- Functionality: Contact form with validation plus direct links to professional profiles
- Purpose: Enable meaningful connections and collaboration opportunities
- Trigger: Navigate to contact section or click contact CTAs
- Progression: Navigate to contact → Fill form fields → Validate input → Submit message → Receive confirmation → Optional: visit external profiles
- Success criteria: Working form submission, clear contact information, professional profile links

## Edge Case Handling

- **Empty Form Submission**: Display validation messages for required fields with clear guidance
- **Large Screen Displays**: Maintain readable line lengths and proper spacing on ultra-wide monitors
- **Slow Network Conditions**: Implement loading states and optimize images for progressive loading
- **Keyboard-Only Navigation**: Ensure all interactive elements are focusable and properly ordered
- **Screen Reader Usage**: Provide meaningful alt text, ARIA labels, and semantic HTML structure

## Design Direction

The design should evoke trust, innovation, and technical sophistication while remaining approachable - similar to portfolios of renowned AI researchers but with a personal fintech focus. Minimal interface better serves the core purpose of showcasing expertise without distraction.

## Color Selection

Complementary (opposite colors) - Deep teal primary with warm gold accents creates sophisticated contrast while maintaining professional credibility.

- **Primary Color**: Deep Teal (oklch(0.45 0.08 180)) - Communicates trust, stability, and technical depth
- **Secondary Colors**: Muted Gold (oklch(0.75 0.08 85)) for accents and highlights, Off-white (oklch(0.98 0.005 85)) for clean backgrounds
- **Accent Color**: Warm Gold (oklch(0.75 0.08 85)) - Attention-grabbing highlight for CTAs and achievements
- **Foreground/Background Pairings**: 
  - Background (Off-white #F7F7F8): Charcoal text (#111827) - Ratio 12.6:1 ✓
  - Primary (Deep Teal #0F766E): White text (#FFFFFF) - Ratio 4.8:1 ✓
  - Accent (Muted Gold #D4AF37): Charcoal text (#111827) - Ratio 5.2:1 ✓
  - Card (Pure White #FFFFFF): Charcoal text (#111827) - Ratio 15.3:1 ✓

## Font Selection

Typography should convey modern professionalism and technical competence through clean, highly legible sans-serif fonts that perform well across devices.

- **Typographic Hierarchy**: 
  - H1 (Hero Title): Inter Bold/48px/tight letter spacing/-0.02em
  - H2 (Section Headers): Inter SemiBold/36px/normal spacing
  - H3 (Subsections): Inter Medium/24px/normal spacing
  - Body Text: Inter Regular/16px/1.6 line height
  - Small Text (Skills/Tags): Inter Medium/14px/tight spacing

## Animations

Subtle, purposeful animations enhance the professional experience without distraction, focusing on smooth transitions and gentle reveals that guide attention naturally.

- **Purposeful Meaning**: Motion reinforces the innovative AI/ML theme through smooth, intelligent-feeling transitions that mirror the precision of technical work
- **Hierarchy of Movement**: Hero elements receive priority animation focus, followed by scroll-triggered section reveals, with subtle hover states for interactive elements

## Component Selection

- **Components**: Hero section using custom layout, Card components for projects/experience, Dialog for project details, Button variants for CTAs, Form components for contact, Badge for skills/tech stack
- **Customizations**: Custom hero layout with split design, enhanced Card hover states, custom timeline component for experience section
- **States**: Buttons show subtle scale and color transitions on hover, Cards lift with shadow on hover, Form inputs show focus states with teal accent, Modal dialogs include backdrop blur
- **Icon Selection**: Phosphor icons for technical consistency - Code for projects, Briefcase for experience, ChatCircle for contact, User for about
- **Spacing**: Consistent 8px base unit system - sections use py-16, cards use p-6, text blocks use mb-4
- **Mobile**: Stacked single-column layout on mobile, collapsible navigation, touch-friendly 48px minimum touch targets, optimized typography scaling