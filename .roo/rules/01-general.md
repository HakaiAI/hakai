# General Coding Standards

## Project Overview
This is a React 19 + TypeScript + Vite application with Hono backend on Cloudflare Workers.

## Code Style Guidelines

### TypeScript
- Use strict TypeScript configuration
- Prefer interfaces over type aliases for object shapes
- Always specify return types for functions
- Use `const` assertions for literal types
- Avoid `any` type - use `unknown` or generics instead

### React
- Use functional components with TypeScript
- Follow React 19 best practices (use hooks, avoid class components)
- Use React Router 7 for routing
- Implement proper error boundaries
- Use React.memo for expensive components

### Styling
- Use Tailwind CSS v4 for styling
- Follow utility-first approach
- Use CSS modules for complex components
- Maintain responsive design principles
- Use Radix UI components for accessibility

### File Organization
- Use kebab-case for file names
- Group related components in feature folders
- Use index.ts for clean exports
- Separate concerns: components, hooks, utils, types

### Naming Conventions
- Components: PascalCase (e.g., `UserProfile.tsx`)
- Functions: camelCase (e.g., `getUserData()`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- Types: PascalCase with 'T' prefix (e.g., `TUserData`)

### Code Quality
- Write self-documenting code with clear variable names
- Add JSDoc comments for public APIs
- Include inline comments for complex logic
- Maintain 80-100 character line length
- Use Prettier for consistent formatting

### Testing
- Write unit tests for utilities and hooks
- Use React Testing Library for component tests
- Aim for 80% code coverage
- Test both happy path and edge cases
- Mock external dependencies appropriately

### Security
- Never commit secrets or API keys
- Use environment variables for configuration
- Validate all user inputs
- Implement proper authentication flows
- Follow OWASP guidelines for web security

### Performance
- Use React.lazy for code splitting
- Implement proper memoization
- Optimize bundle size with tree shaking
- Use Web Workers for heavy computations
- Implement proper caching strategies