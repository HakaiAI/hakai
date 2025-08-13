# Project Commands & Guidelines

## Build/Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build application (TypeScript + Vite)
- `npm run check` - Full validation (TypeScript + build + Wrangler dry-run)
- `npm run lint` - ESLint linting
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting
- `npm run deploy` - Deploy to Cloudflare
- `npm run cf-typegen` - Generate Cloudflare types

## Architecture
- **Frontend**: React 19 + React Router 7 + Vite
- **Backend**: Hono on Cloudflare Workers (`src/worker/index.ts`)
- **Styling**: Tailwind CSS v4 + Radix UI components
- **Path alias**: `@/` → `src/react-app/`
- **Layouts**: AppLayout (with sidebar), AuthLayout (auth pages)
- **Pages**: Lazy-loaded with code splitting

## Code Style
- **Formatting**: Prettier (single quotes, semicolons, 2 spaces)
- **Imports**: Use `@/` alias, group by external → internal
- **Components**: PascalCase, functional components with TypeScript
- **Hooks**: Use React hooks (useState, useEffect, useCallback)
- **Forms**: React Hook Form + Zod validation
- **Error handling**: TypeScript strict mode enabled
