---
name: "Y9G Studio Design System"
version: "2.0.0"
colors:
  primary: "#0F172A"
  secondary: "#475569"
  accent: "#4338CA"
  accentHover: "#3730A3"
  background: "#FFFFFF"
  surface: "#F8FAFC"
  surfaceAlt: "#F1F5F9"
  outline: "#E2E8F0"
typography:
  fontFamily:
    heading: "'Plus Jakarta Sans', sans-serif"
    body: "'Inter', sans-serif"
  h1:
    fontSize: "4rem"
    fontWeight: 800
    letterSpacing: "-0.04em"
    lineHeight: "1.1"
  h2:
    fontSize: "2.5rem"
    fontWeight: 700
    letterSpacing: "-0.02em"
    lineHeight: "1.2"
  h3:
    fontSize: "1.5rem"
    fontWeight: 600
    letterSpacing: "-0.01em"
    lineHeight: "1.3"
  body:
    fontSize: "1.125rem"
    fontWeight: 400
    letterSpacing: "0"
    lineHeight: "1.7"
  small:
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.01em"
    lineHeight: "1.5"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "4rem"
  xl: "8rem"
rounded:
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
  full: "9999px"
shadows:
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  lg: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
---

# Y9G Studio Design System

## Overview
This `DESIGN.md` defines the visual language for **Y9G Studio**. The goal is to move away from a generic "mediocre" template to a **highly premium, modern digital agency aesthetic**. The design language communicates trust, cutting-edge technology, and top-tier creative capabilities.

## Colors
- **Primary ({colors.primary})**: Used for main headings, logo, and high-contrast text. It provides a grounded, sophisticated tech feel (Slate 900).
- **Secondary ({colors.secondary})**: Used for body text and descriptions. It softens the contrast compared to pure black, improving readability.
- **Accent ({colors.accent})**: A vibrant Indigo used strictly for call-to-actions, hover states, and key visual highlights.
- **Background & Surfaces**: We use pure white ({colors.background}) for the main background and subtle slate tints ({colors.surface}) for cards and alternating sections to create depth without heavy borders.

## Typography
- **Heading Font**: `{typography.fontFamily.heading}` (Plus Jakarta Sans) is used for all headers. It is geometric, modern, and highly legible, giving a startup/tech agency vibe.
- **Body Font**: `{typography.fontFamily.body}` (Inter) is the industry standard for clean, neutral, and highly readable paragraph text.

## Components

### Buttons / Links
All interactive text should transition to the `{colors.accent}` color on hover. Navigation items should have a subtle background hover effect using `{colors.surfaceAlt}` and `{rounded.full}`.

### Cards
Cards (like the services) should use `{colors.surface}` as their background, `{rounded.md}` for corners, and a `{shadows.sm}` that transitions to `{shadows.lg}` and slightly translates upwards on hover. Borders should be `{colors.outline}` to keep it crisp.

### Hero Section
The Hero section must make a bold statement. It uses the `{typography.h1}` token for massive, tight-letter-spacing impact.

## Do's and Don'ts
- **Do**: Embrace whitespace. Use `{spacing.xl}` between major sections to let the content breathe.
- **Do**: Keep the color palette constrained. Rely on typography and spacing for hierarchy, not a rainbow of colors.
- **Don't**: Use drop shadows excessively. Keep the UI flat and clean, using shadows only for interactive states (hovering over a card).
