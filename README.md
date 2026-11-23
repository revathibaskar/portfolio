# Revathi Baskar - Modern Next.js Portfolio

A modern, high-performance portfolio website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed with an aesthetic dark/light theme, glassmorphism UI, interactive tabs, live search, and smooth animations.

## ✨ Features & Architecture

- **Aesthetic Color System & Dual Theme**:
  - **Dark Mode (Default)**: Deep obsidian night (`#090A11`), radiant indigo/violet glows, emerald radar pulses, and frosted glass panels (`backdrop-blur-xl`).
  - **Light Mode**: Crisp alabaster surfaces (`#F8FAFC`), slate typography, and clean contrast.
  - Seamless toggle with state persistence in `localStorage` and system preference auto-detection.
- **Dynamic Header & Navigation**:
  - Sticky frosted navigation bar with section detection on scroll.
  - Interactive monogram avatar with active status indicator.
  - Mobile slide-out drawer menu.
- **Hero Section**:
  - Status radar badge ("Available for Full-Stack Roles").
  - Shimmer gradient typography and concise technical value proposition.
  - Quick action buttons: View Projects, Contact, and 1-click "Copy Email" with instant toast feedback.
  - Personal Information & Architecture Bento Card highlighting core stack, current company, and education.
  - Metric counters (2+ Years, 4+ Shipped Platforms, 99.9% Uptime, 15+ Core Tech).
- **Interactive Skills Matrix**:
  - Filter by category: Frontend, State & Architecture, Backend & APIs, Database & Cloud, Auth & Integrations.
  - Real-time search filter for quick lookup (e.g. typing "React", "Stripe", "PostgreSQL").
  - Proficiency indicators (Expert, Advanced, Proficient) with custom styling.
- **Featured Projects Showcase**:
  - **Deck of Doodles**: E-commerce platform with storefront + admin catalog and Stripe checkout.
  - **Healer & Longevity App**: Subscription and recurring billing backend with Razorpay & Brevo webhooks.
  - **Aqua Service CRM**: Water service maintenance tracking with automated WhatsApp Cloud API notifications.
  - **Supermarket Hardware Billing**: Retail POS terminal integrated with COM port digital weighing machine.
  - Interactive project switcher, detailed deliverables checklist, and full-screen project specifications modal.
- **Experience Timeline**:
  - Connected vertical milestone timeline with "Current Role" badge, detailed impact bullets, and tech badges.
- **Education & Credentials**:
  - MCA (University of Madras, 73.1%) & BCA (Sri Sankara College, 81.0%) with visual progress bars and academic honors.
- **Contact & Direct Note**:
  - 1-click clipboard copy for Email and Phone with toast feedback.
  - Direct LinkedIn and GitHub buttons.
  - Interactive message form with validation and simulated dispatch.
- **Toast Notification System**:
  - Accessible floating toast alert for copy actions and form submissions.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (tested on Node.js 22)
- npm 9+

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or build for production
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS & Modern CSS Variables
- **Icons**: Lucide React & Custom Clean SVGs
- **Type Safety**: TypeScript 5+

