# TypeScript Code Mode Rules

## TypeScript Configuration
- Use strict mode in tsconfig.json
- Enable all strict type checking options
- Use exactOptionalPropertyTypes: true
- Use noUncheckedIndexedAccess: true

## Code Patterns
### Interfaces vs Types
- Use interfaces for object shapes that will be implemented
- Use type aliases for unions, primitives, and complex types
- Prefer interface extension over type intersection

### Function Definitions
- Always specify return types for functions
- Use arrow functions for callbacks and short functions
- Use function declarations for named functions
- Avoid function expressions without names

### Type Safety
- Never use `any` type
- Use `unknown` when type is truly unknown
- Use generics for reusable components
- Use type guards for runtime type checking

### React TypeScript
- Use proper prop types with React.FC
- Define component props as interfaces
- Use React.ReactNode for children
- Use React.CSSProperties for style props

### Error Handling
- Use proper error types (Error, CustomError)
- Implement Result types for error handling
- Use try-catch blocks with proper typing
- Never swallow errors silently

### Code Organization
- Group related types in type definition files
- Use barrel exports for type collections
- Keep type definitions close to their usage
- Use meaningful type names that describe the data

### Advanced Patterns
- Use discriminated unions for state machines
- Implement branded types for type safety
- Use const assertions for literal types
- Leverage conditional types when needed