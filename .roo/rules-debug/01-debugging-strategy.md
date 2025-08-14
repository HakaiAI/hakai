# Debugging Strategy Rules

## Debugging Approach
### Systematic Debugging
1. Reproduce the issue consistently
2. Isolate the problem area
3. Form hypothesis about root cause
4. Test hypothesis with minimal reproduction
5. Implement fix and verify resolution
6. Add regression tests

### Debugging Tools
- Use browser DevTools for frontend issues
- Use console.log strategically
- Implement proper error boundaries
- Use React DevTools for component debugging
- Monitor network requests and responses

### Error Analysis
- Read error messages carefully
- Check stack traces for source
- Identify if issue is frontend or backend
- Check for race conditions
- Verify data integrity

### Performance Debugging
- Use React Profiler for performance issues
- Monitor bundle size with webpack analyzer
- Check for memory leaks
- Analyze network waterfall
- Monitor Core Web Vitals

## Common Issues
### Frontend Issues
- State management problems
- Race conditions in async operations
- Memory leaks from unclosed subscriptions
- Incorrect dependency arrays in hooks
- Improper key props in lists

### Backend Issues
- Database connection problems
- API endpoint failures
- Authentication/authorization issues
- Rate limiting problems
- CORS configuration issues

### Deployment Issues
- Environment variable configuration
- Build process failures
- CDN cache invalidation
- Database migration failures
- Service worker registration issues

## Debugging Checklist
### Before Starting
- [ ] Reproduce issue in development
- [ ] Check browser console for errors
- [ ] Verify network requests are successful
- [ ] Check application logs
- [ ] Confirm environment configuration

### During Debugging
- [ ] Isolate minimal reproduction case
- [ ] Test in incognito mode
- [ ] Check different browsers
- [ ] Verify on different devices
- [ ] Test with clean cache

### After Fixing
- [ ] Add appropriate error handling
- [ ] Write regression tests
- [ ] Update documentation
- [ ] Monitor for similar issues
- [ ] Share learnings with team

## Debugging Tools Setup
### Development Tools
- Configure VS Code debugger
- Set up React DevTools
- Configure network throttling
- Set up error monitoring
- Configure performance profiling

### Production Monitoring
- Set up error tracking (Sentry)
- Configure performance monitoring
- Set up log aggregation
- Configure alerting
- Set up user feedback collection