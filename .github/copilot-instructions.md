This is a personal hobby project using nextjs. The idea is that a person can log in and collect achievements. Goal is to be mobile friendly and easy to access. Main functionallities are ability to collect personal achievements, gain points, have seasonal leaderboards.

## Project Architecture
- App Router structure
- Pages organization (auth, dashboard, achievements, leaderboards)
- API routes

## Technologies
- Next.js: App router, project structure
- Tailwind CSS: Styling and responsive design
- shadcn/ui: Reusable UI components
- Prisma: Database access and schema management
- TypeScript: Type safety and developer experience

## Core Features
- User registration and profile management
- Achievement discovery and completion
- Point calculation system
- Seasonal leaderboards with reset periods
- Mobile-responsive design priorities

## Code Conventions
- File/folder naming: kebab-case for components, PascalCase for interfaces/types
- Component structure (server vs client components)
- State management approach
- Error handling patterns

## Planned Features
- Achievement categories
- Social sharing
- Friend connections
- Badges/special rewards

## Code Conventions
- File/folder naming:
  - Route segments (folders in app/): kebab-case (e.g., user-profile, achievement-details)
  - Page files: lowercase (e.g., page.tsx, layout.tsx, loading.tsx)
  - Components: PascalCase (e.g., UserAvatar.tsx, AchievementCard.tsx)
  - Utilities/helpers: camelCase (e.g., formatDate.ts, calculatePoints.ts)
  - Types/Interfaces: PascalCase (e.g., UserProfile, AchievementType)
- Component structure:
  - Use React Server Components by default ("use client" only when needed)
  - Keep client components focused on interactivity
  - Extract reusable components to /components directory
- State management approach:
  - React Context for global state where appropriate
  - React Query for server state management
  - Form state with react-hook-form
- Error handling patterns:
  - Try/catch for async operations
  - Error boundaries for client components
  - Consistent error UI components

## Learning Goals
- This is primarily a learning project
- Proactively identify and explain non-standard patterns or anti-patterns in my code
- Suggest improvements with explanations of why they're better
- Point out when I'm deviating from Next.js, React, or TypeScript best practices
- Explain conventions and reasoning when generating new code
- Provide educational context when appropriate without being overly verbose