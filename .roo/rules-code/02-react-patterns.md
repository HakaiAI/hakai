# React Code Mode Rules

## Component Patterns
### Functional Components
- Always use functional components with hooks
- Use React.FC type for component definitions
- Destructure props in function parameters
- Use default parameter values for optional props

### Hooks Usage
- Use useState for local component state
- Use useEffect for side effects (with proper cleanup)
- Use useCallback for memoized callbacks
- Use useMemo for expensive computations
- Use custom hooks for reusable logic

### State Management
- Use React Context for global state
- Implement proper state lifting when needed
- Use reducer pattern for complex state
- Avoid prop drilling with composition

### Performance Optimization
- Use React.memo for expensive components
- Implement proper key props for lists
- Use useCallback for stable function references
- Use useMemo for expensive calculations
- Implement code splitting with React.lazy

### Styling Patterns
- Use Tailwind CSS classes directly
- Avoid inline styles except for dynamic values
- Use CSS modules for complex component styling
- Implement responsive design with Tailwind breakpoints
- Use Radix UI primitives for accessibility

### Form Handling
- Use React Hook Form for form management
- Implement proper validation with Zod
- Use controlled components appropriately
- Handle form submission with proper error states
- Implement proper loading states

### Error Boundaries
- Implement error boundaries for graceful degradation
- Use proper error fallback UI
- Log errors to monitoring services
- Provide user-friendly error messages
- Implement retry mechanisms

### Testing Patterns
- Test component rendering and interactions
- Mock external dependencies appropriately
- Test both happy path and error states
- Use React Testing Library best practices
- Implement proper test cleanup