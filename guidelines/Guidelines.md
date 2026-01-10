# Intuit QuickBooks Design System Guidelines

Use this file to guide Figma Make in generating designs consistent with QuickBooks Online Bill Pay experience.

> **Tip**: These guidelines ensure consistency with Intuit's existing patterns. Reference them when creating any QuickBooks UI.

---

# General Guidelines

* Use responsive, well-structured layouts with flexbox and grid by default
* Only use absolute positioning when strictly necessary (e.g., tooltips, modals)
* Refactor code as you go to keep files clean and organized
* Put helper functions and components in separate files
* Never use arbitrary values - always reference the design tokens below
* Follow Intuit's trustworthy, professional aesthetic - clean, not flashy
* Maintain generous whitespace for readability
* All interactive elements must have visible focus states for accessibility
* Right-to-left (RTL) support is not required for this project

---

# Design System Guidelines

## Colors

### Naming Convention
Colors follow the pattern: `--color-{category}-{role}-{state}`
- **Categories**: bg, text, border, icon, ui, action, input, link
- **Roles**: brand, danger, success, warning, info, neutral, primary, secondary
- **States**: hover, active, disabled, subtle (optional)

### Primary Palette (Intuit Green)
| Token | Value | Usage |
|-------|-------|-------|
| `--color-ui-primary` | #2CA01C | Toggle switches (on state) |
| `--color-ui-primary-active` | #108000 | Primary buttons, CTAs, Cancel text |
| `--color-action-standard` | #00892E | Links, text buttons, "Manage" links |
| `--color-action-standard-subtle` | rgba(0,137,46,0) | Ghost button backgrounds |
| `--color-text-onprimary` | #FFFFFF | Text on green backgrounds |

### Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-success` | #2CA01C | Success states, confirmations |
| `--color-text-success` | #108000 | Success text, "Today" delivery date |
| `--color-bg-danger` | #D32F2F | Error states, destructive actions |
| `--color-bg-warning` | #F9A825 | Warning states, caution |
| `--color-bg-info` | #0365AC | Informational states |

### Neutral Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | #FFFFFF | Default page/card background, table rows |
| `--color-bg-secondary` | #F4F5F8 | Stage area, header bar, vendor parent rows |
| `--color-bg-tertiary` | #ECEEF1 | Hover states, Real-Time selected rows |
| `--color-border-primary` | #8D9096 | Input borders, dividers |
| `--color-border-secondary` | #BABEC5 | Subtle section dividers (vertical) |
| `--color-border-divider` | #D4D7DC | Table row borders |
| `--color-text-primary` | #393A3D | Primary text, headings, icons |
| `--color-text-secondary` | #6B6C72 | Labels, secondary text, icons |
| `--color-text-disabled` | #BABEC5 | Disabled text |

### Link Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-link-text` | #0365AC | "Add note" links, informational links |
| `--color-link-hover` | #024C82 | Link hover state |

### Color Rules
* Always use semantic tokens, never raw hex values
* Text on primary green backgrounds must use `--color-text-onprimary` (#FFFFFF)
* Vendor parent rows use `--color-bg-secondary` (#F4F5F8)
* Child bill rows use `--color-bg` (#FFFFFF)
* Real-Time selected rows use `--color-bg-tertiary` (#ECEEF1)
* "Today" delivery dates display in `--color-text-success` (#108000) with green checkmark

---

## Typography

### Font Families
| Token | Value | Usage |
|-------|-------|-------|
| `--font-family-default` | 'Avenir Next', sans-serif | All UI text |
| `--font-family-mono` | 'SF Mono', monospace | Code, IDs (if needed) |

### Font Weights
| Token | Value | CSS Weight | Usage |
|-------|-------|------------|-------|
| `--font-weight-regular` | Regular | 400 | Body text, table cells, monetary values |
| `--font-weight-medium` | Medium | 500 | Input values, labels, dropdown values |
| `--font-weight-demi` | Demi Bold | 600 | Buttons, table headers, action links |
| `--font-weight-bold` | Bold | 700 | Page titles, total amounts |

### Type Scale
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Headline 05 | 24px | Bold (700) | 32px | Page title "Schedule bill payment" |
| Body 02 | 16px | Demi (600) | 24px | Button labels "Continue", "Cancel" |
| Body 02 | 16px | Medium (500) | 24px | Input values, dropdown values |
| Body 02 | 16px | Regular (400) | 24px | Body text, descriptions |
| Body 03 | 14px | Demi (600) | 20px | "Manage" links, action links |
| Body 03 | 14px | Medium (500) | 20px | Input labels, "Add note" links |
| Body 03 | 14px | Regular (400) | 20px | Table cell content, monetary values |
| Label | 12px | Demi (600) | 20px | Table column headers (UPPERCASE) |
| Caption | 11.65px | Demi (600) | 19.4px | Small uppercase labels |

### Typography Rules
* Body 03 (14px Regular) is the default for table cell content
* Body 02 (16px Medium) is the default for form inputs
* Never use font sizes smaller than 11px
* Table column headers: 12px Demi, UPPERCASE, #393A3D
* Page title: 24px Bold, #393A3D
* Monetary values: 14px Regular, RIGHT-ALIGNED
* Links in table cells: 14px Demi

---

## Spacing

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 2px | Icon control padding |
| `--space-sm` | 4px | Tight gaps, label-to-input gap |
| `--space-md` | 8px | Input internal padding, icon gaps |
| `--space-lg` | 16px | Cell padding, component gaps |
| `--space-xl` | 24px | Section separation, Help-to-Close gap |
| `--space-2xl` | 36px | Page side margins |
| `--space-3xl` | 40px | Between stage area sections |

### Spacing Rules
* Base unit: 4px - all spacing should be multiples of 4
* Table cell padding: 16px horizontal
* Input internal padding: 8px horizontal, 6px vertical
* Gap between label and input: 4px
* Gap between stage sections: 40px
* Page side margins: 36px (stage area), 20px (table area)
* Header bar padding: 17px vertical, 36px horizontal
* CTA bar padding: 16px vertical, 20px horizontal

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | ALL inputs, ALL buttons, dropdowns |
| `--radius-md` | 8px | Cards, containers (if used) |
| `--radius-lg` | 12px | Modal corners (if used) |
| `--radius-full` | 20px | Toggle switch track |

### Border Radius Rules
* ALL inputs use 4px radius - no exceptions
* ALL buttons use 4px radius - no exceptions
* Toggle switches use 20px radius (pill shape)
* Never mix radius values in the same component type

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | 0px 2px 2px rgba(0,0,0,0.3) | Toggle thumb |
| `--shadow-md` | 0px 5px 10px rgba(0,0,0,0.1) | Toggle thumb combined |
| `--shadow-lg` | 0px -4px 8px rgba(0,0,0,0.05) | CTA bar (TOP shadow) |

### Shadow Rules
* CTA bar uses UPWARD shadow (negative Y) to separate from content
* Shadows are subtle - Intuit style avoids heavy drop shadows
* Prefer borders over shadows for container definition
* Table rows have NO shadows - only bottom borders

---

# Component Guidelines

## Buttons

### Variants
| Variant | Background | Text Color | Border | Usage |
|---------|------------|------------|--------|-------|
| Primary | #108000 | #FFFFFF | none | Main CTA "Continue", one per view |
| Text/Ghost | transparent | #108000 | none | "Cancel" button |
| Link | transparent | #00892E | none | "Manage", "Select account" |
| Icon Control | transparent | #6B6C72 icon | none | Help, Close icons |

### Button Sizes
| Size | Height | Padding | Font |
|------|--------|---------|------|
| Medium | 36px | 6px 16px | 16px Demi |
| Small (icon) | 24px | 2-6px | Icon 24px |

### Button Rules
| ✅ Do | 🚫 Don't |
|-------|----------|
| Use one primary button per section | Place multiple primary buttons |
| Place primary CTA on far right | Center buttons in containers |
| Use "Cancel" as text button on left | Make Cancel a primary button |
| Use sentence case: "Continue" | Use ALL CAPS: "CONTINUE" |

---

## Inputs

### Text Input Specifications
| Property | Value |
|----------|-------|
| Height | 36px |
| Padding | 6px 8px |
| Border | 1px solid #8D9096 |
| Border Radius | 4px |
| Background | #FFFFFF |
| Font | 16px Medium, #393A3D |

### Input with Icon (Date Picker)
| Property | Value |
|----------|-------|
| Icon | calendar, 24px, #6B6C72 |
| Icon position | Right, 8px from edge |
| Text padding-right | 40px |

### Dropdown/Select
| Property | Value |
|----------|-------|
| Height | 36px |
| Chevron | chevron-down, 24px, #393A3D |
| Value font | 16px Medium, #393A3D |
| Border | 1px solid #8D9096 |
| Radius | 4px |

### Input States
| State | Border | Background |
|-------|--------|------------|
| Default | #8D9096 | #FFFFFF |
| Focus | #00892E | #FFFFFF |
| Error | #D32F2F | #FFFFFF |
| Disabled | #BABEC5 | #F4F5F8 |

### Input Rules
| ✅ Do | 🚫 Don't |
|-------|----------|
| Labels above inputs, 14px Medium #6B6C72 | Floating labels inside |
| Right-align monetary values | Left-align currency |
| Show chevron-down for dropdowns | Custom dropdown icons |

---

## Tables

### Table Structure
| Element | Background | Height | Border |
|---------|------------|--------|--------|
| Header row | #FFFFFF | 72px | bottom 1px #D4D7DC |
| Vendor parent row | #F4F5F8 | 60px | bottom 1px #D4D7DC |
| Child bill row | #FFFFFF | 60px | bottom 1px #D4D7DC |
| Real-Time selected row | #ECEEF1 | 60px | bottom 1px #D4D7DC |

### Table Header Styling
| Property | Value |
|----------|-------|
| Font | 12px Demi, UPPERCASE |
| Color | #393A3D |
| Padding | 16px |
| Alignment | Left (text), Right (amounts) |

### Table Cell Styling
| Property | Value |
|----------|-------|
| Font | 14px Regular |
| Color | #393A3D |
| Padding | 16px |
| Alignment | Left (text), Right (amounts) |

### Column Specifications
| Column | Width | Alignment | Content |
|--------|-------|-----------|---------|
| VENDOR | 180px | Left | Vendor name (parent rows only) |
| BILL # | 130px | Left | Bill numbers (child rows only) |
| PAYMENT METHOD | 280px | Left | "Bank payment ...1234" + "Manage" link |
| WITHDRAWAL DATE | 180px | Left | Date picker input (parent rows) |
| PAYMENT SPEED | 180px | Left | Dropdown: "Standard" / "Real-Time" |
| EST. DELIVERY DATE | 140px | Left | Date or "Today, MM/DD/YYYY" (green) |
| DUE DATE | 140px | Left | Date (child rows only) |
| PROCESSING FEE | 134px | Right | Fee amount + info icon |
| OPEN BALANCE | 150px | Right | Currency amount |
| AMOUNT | 160px | Right | Input field (child) or text (parent) |
| Note icon | 56px | Center | Star/note icon |
| ACTION | 150px | Right | "Add note" link + chevron, or X icon |

### Grouped Row Structure
```
┌─────────────────────────────────────────────────────────────┐
│ VENDOR PARENT ROW (bg: #F4F5F8)                             │
│ - Shows: Vendor name, Payment Method, Withdrawal Date,      │
│          Payment Speed dropdown, Est. Delivery, Fee, Total  │
├─────────────────────────────────────────────────────────────┤
│ CHILD ROW 1 (bg: #FFFFFF)                                   │
│ - Shows: Bill #, Due Date, Open Balance, Amount input, X    │
├─────────────────────────────────────────────────────────────┤
│ CHILD ROW 2 (bg: #FFFFFF)                                   │
│ - Same structure as Child Row 1                             │
└─────────────────────────────────────────────────────────────┘
```

### Table Rules
| ✅ Do | 🚫 Don't |
|-------|----------|
| Group bills under vendor parent row | Show flat list of all bills |
| Vendor name only on parent row | Repeat vendor on child rows |
| Right-align ALL monetary values | Left-align currency |
| Use input fields for editable amounts | Plain text for editable values |
| Info icon (ⓘ) next to fees | Explanations in headers |

---

## Toggle Switch

### Specifications
| Property | Value |
|----------|-------|
| Track width | 36px |
| Track height | 20px |
| Track radius | 20px |
| Track color (on) | #2CA01C |
| Track color (off) | #8D9096 |
| Thumb size | 18px |
| Thumb color | #FFFFFF |
| Thumb shadow | 0px 5px 10px rgba(0,0,0,0.1), 0px 2px 2px rgba(0,0,0,0.3) |
| Thumb position (on) | Right |
| Thumb position (off) | Left |

---

## Links

### Link Styles
| Type | Color | Font | Usage |
|------|-------|------|-------|
| Action link | #00892E | 14px Demi | "Manage", "Select account" |
| Text link | #0365AC | 14px Medium | "Add note" |
| Combo link | #0365AC + divider + chevron | 14px Medium | "Add note" with dropdown |

### Link Rules
* "Manage" links in table = #00892E Demi
* "Select account" = #00892E Demi
* "Add note" = #0365AC Medium
* No underline by default, underline on hover

---

## Icons

### Icon Sizes
| Context | Size |
|---------|------|
| Header icons (Help, Close) | 24px |
| Table cell icons | 20px |
| Input icons (calendar, chevron) | 24px |
| Info icons (ⓘ) | 20px |

### Icon Colors
| State | Color |
|-------|-------|
| Default | #6B6C72 |
| Active/Primary | #393A3D |
| Disabled | #BABEC5 |
| Success checkmark | #108000 |

### Common Icons
| Icon | Usage |
|------|-------|
| `help` / `circle-question` | Help button in header |
| `close` | Close button in header, remove row |
| `calendar` | Date picker trigger |
| `chevron-down` | Dropdown indicator |
| `circle-info` | Fee tooltip, delivery date tooltip |
| `note` / `star` | Note indicator in table |
| `plus` | Add action |
| `checkmark` | Success indicator (green) |

---

## Real-Time Payment Banner

### Specifications
| Property | Value |
|----------|-------|
| Position | Below stage area, above table |
| Width | Full width with 36px side margins |
| Padding | 8-12px vertical |
| Background | #FFFFFF or light green tint |
| Icon | Green info/lightning, 24px |

### Banner Content
```
[Icon] Real-Time payment is available! Pay before 5:00 PM PT for same-day delivery
```
- "Real-Time payment is available!" - 14px Demi, #393A3D
- "Pay before **5:00 PM PT**" - 14px Medium, #393A3D (time bold)
- "for same-day delivery" - 14px Regular, #393A3D

---

## Stage Area (Header Section)

### Specifications
| Property | Value |
|----------|-------|
| Background | #F4F5F8 |
| Padding | 16px 36px |
| Gap between sections | 40px |
| Vertical dividers | 1px solid #BABEC5 |

### Section Widths
| Section | Width |
|---------|-------|
| Bank Account | 420px |
| Combine Bills | 272px |
| Withdrawal Date | 148px |
| Total Amount | Auto (right-aligned) |

### Stage Layout
```
[Bank Account (420px)] | [Combine Bills (272px)] | [Withdrawal Date (148px)] | [Total Amount →]
     divider                  divider                   (no divider)
```

---

## Header Bar

### Specifications
| Property | Value |
|----------|-------|
| Height | 70px |
| Background | #F4F5F8 |
| Padding | 17px 36px |

### Header Content
| Left | Right |
|------|-------|
| "Schedule bill payment" - 24px Bold #393A3D | Help icon + "Help" text (24px gap) + Close X icon |

---

## CTA Bar (Footer)

### Specifications
| Property | Value |
|----------|-------|
| Height | 68px |
| Background | #FFFFFF |
| Shadow | 0px -4px 8px rgba(0,0,0,0.05) (TOP) |
| Padding | 16px 20px |
| Position | Fixed bottom |

### CTA Layout
| Left | Right |
|------|-------|
| "Cancel" - text button, #108000 | "Continue" - primary button, #108000 bg |

---

# Layout Guidelines

## Page Structure
```
┌─────────────────────────────────────────────────┐
│ Header Bar (70px)                               │
│ - Title left, Help + Close right                │
├─────────────────────────────────────────────────┤
│ Stage Area (~96px)                              │
│ - Bank | Combine | Date | Total                 │
├─────────────────────────────────────────────────┤
│ Real-Time Banner (~40px) - NEW                  │
├─────────────────────────────────────────────────┤
│ Table Area (scrollable)                         │
│ - Header Row (72px)                             │
│ - Grouped Data Rows (60px each)                 │
├─────────────────────────────────────────────────┤
│ CTA Bar (68px) - Fixed bottom                   │
└─────────────────────────────────────────────────┘
```

## Auto Layout Rules
* Default gap: 8px (related), 16px (sections), 40px (stage sections)
* Container padding: 16px (cells), 36px (page margins)
* Use "Fill" for expandable columns
* Use "Hug" for fixed content

## Dimensions
| Element | Width | Notes |
|---------|-------|-------|
| Page | 1920px | Primary design width |
| Table | 1880px | With 20px side margins |
| Minimum | 1200px | Below this, horizontal scroll |

---

# Interaction Guidelines

## Hover States
| Element | Hover Effect |
|---------|--------------|
| Table row | Background → #ECEEF1 |
| Text button | Subtle background tint |
| Link | Underline appears |
| Icon button | Background tint |

## Transitions
| Property | Duration | Easing |
|----------|----------|--------|
| background-color | 150ms | ease-in-out |
| border-color | 150ms | ease-in-out |
| opacity | 150ms | ease-in-out |

## Focus States
* Always visible for accessibility
* Focus ring: 2px solid #00892E
* Ring offset: 2px

## Real-Time Selection Behavior
When user selects "Real-Time" in Payment Speed dropdown:
1. Row background changes to #ECEEF1
2. Est. Delivery Date updates to "Today, [date]"
3. Date text color changes to #108000 (green)
4. Green checkmark (✓) appears next to date
5. Processing Fee updates to Real-Time fee amount