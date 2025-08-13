import { BrowserRouter, Routes, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import AuthLayout from '@/layouts/AuthLayout';
import AppLayout from '@/layouts/AppLayout';

// Lazy load pages for code splitting
const LoginPage = lazy(() => import('@/pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/Auth/RegisterPage'));
const ForgotPage = lazy(() => import('@/pages/Auth/ForgotPage'));
const ResetPage = lazy(() => import('@/pages/Auth/ResetPage'));
const VerifyPage = lazy(() => import('@/pages/Auth/VerifyPage'));
const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const AccountPage = lazy(() => import('@/pages/Account/AccountPage'));
const BillingPage = lazy(() => import('@/pages/Billing/BillingPage'));
const ReportPage = lazy(() => import('@/pages/Report/ReportPage'));
const ChatPage = lazy(() => import('@/pages/Chat/ChatPage'));
const HistoryPage = lazy(() => import('@/pages/History/HistoryPage'));

/**
 * The top-level React component that wraps the entire application.
 * It uses the react-router-dom library to set up client-side routing.
 * The routes are defined in the routes array, which is imported from
 * the ./pages/routes module.
 * @returns {JSX.Element} The App component.
 */
const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className='flex items-center justify-center min-h-screen text-lg'>
            Loading...
          </div>
        }
      >
        <Routes>
          {/* Main app routes with sidebar */}
          <Route element={<AppLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/account' element={<AccountPage />} />
            <Route path='/billing' element={<BillingPage />} />
            <Route path='/reports' element={<ReportPage />} />
            <Route path='/history' element={<HistoryPage />} />
            <Route path='/chat/new' element={<HomePage />} />
            <Route path='/chat/:id' element={<ChatPage />} />
          </Route>

          {/* Auth routes without sidebar */}
          <Route element={<AuthLayout />}>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='forgot' element={<ForgotPage />} />
            <Route path='reset' element={<ResetPage />} />
            <Route path='verify/:token' element={<VerifyPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;