# PetOlife

Unified pet identity and healthcare management platform. PetOlife consolidates vaccination records, emergency access, verified ownership, and lifelong medical history into a single secure digital identity.

## Overview

PetOlife is a modern healthcare SaaS application built for pet parents and veterinary professionals. The platform provides a centralized digital identity for pets, enabling instant access to critical health information during emergencies, verified ownership records, and seamless coordination across veterinary clinics.

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Routing**: Wouter
- **UI Primitives**: Radix UI
- **Server**: Express (static serving)
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Production Build

```bash
pnpm build
```

Output is generated in `dist/public`.

## Project Structure

```
client/
  src/
    components/    # UI components (Hero, Features, FAQ, etc.)
    pages/         # Page-level components
    hooks/         # Custom React hooks
    contexts/      # React context providers
    lib/           # Utility functions
  public/          # Static assets
server/
  index.ts         # Express server for production serving
shared/
  const.ts         # Shared constants
```

## Deployment

Configured for Vercel deployment. The `vercel.json` includes build settings and SPA routing rewrites.

## License

All rights reserved.
