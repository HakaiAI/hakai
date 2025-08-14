# System Design Architect Rules

## Architecture Principles
### Cloud-First Design
- Design for Cloudflare Workers environment
- Consider edge computing constraints
- Plan for global distribution
- Account for cold start times
- Design for horizontal scaling

### Microservices Architecture
- Decompose into single-responsibility services
- Use API Gateway pattern
- Implement service discovery
- Plan for service mesh
- Design for independent deployment

### Data Architecture
- Choose appropriate database per service
- Implement CQRS when needed
- Plan for data consistency
- Design for eventual consistency
- Implement proper caching layers

### Security Architecture
- Implement zero-trust security model
- Use OAuth 2.0 / JWT for authentication
- Implement proper authorization patterns
- Plan for secret management
- Design for compliance requirements

### Performance Architecture
- Implement caching at multiple levels
- Use CDN for static assets
- Plan for database query optimization
- Design for read-heavy workloads
- Implement proper monitoring

## Technology Selection
### Frontend Stack
- React 19 for UI framework
- TypeScript for type safety
- Vite for build tooling
- Tailwind CSS for styling
- React Router 7 for routing

### Backend Stack
- Hono for API framework
- Cloudflare Workers for runtime
- TypeScript for consistency
- Prisma for database access
- Redis for caching

### Infrastructure
- Cloudflare for edge deployment
- GitHub Actions for CI/CD
- Docker for containerization
- Terraform for infrastructure as code
- Monitoring with proper observability

## Design Patterns
### API Design
- RESTful API design principles
- GraphQL for complex queries
- Rate limiting implementation
- API versioning strategy
- Proper error handling

### Database Design
- Normalized database design
- Proper indexing strategy
- Partitioning for large datasets
- Backup and recovery planning
- Migration strategy

### Caching Strategy
- Multi-level caching approach
- Cache invalidation strategy
- CDN integration
- Browser caching headers
- Service worker caching

### Monitoring Strategy
- Application performance monitoring
- Infrastructure monitoring
- Error tracking and alerting
- Log aggregation
- User analytics