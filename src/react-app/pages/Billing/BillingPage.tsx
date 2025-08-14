import { useState, useEffect } from 'react';
import BillingHeader from './components/BillingHeader';
import PricingSection from './components/PricingSection';
import PaymentMethodsSection from './components/PaymentMethodsSection';
import BillingHistorySection, {
  BillingRecord,
} from './components/BillingHistorySection';
import { PaymentMethod } from './components/PaymentMethodCard';
import BillingPageSkeleton from './components/BillingPageSkeleton';

const mockBillingData: BillingRecord[] = [
  {
    id: '1',
    planName: 'Starter Plan - Jun 2024',
    amount: '$10.00',
    purchaseDate: '2024-06-01',
    endDate: '2024-06-31',
    status: 'Processing',
  },
  {
    id: '2',
    planName: 'Growth Plan - May 2024',
    amount: '$79.00',
    purchaseDate: '2024-05-01',
    endDate: '2024-05-31',
    status: 'Success',
  },
  {
    id: '3',
    planName: 'Starter Plan - Apr 2024',
    amount: '$10.00',
    purchaseDate: '2024-04-01',
    endDate: '2024-04-30',
    status: 'Success',
  },
  {
    id: '4',
    planName: 'Starter Plan - Mar 2024',
    amount: '$10.00',
    purchaseDate: '2024-03-01',
    endDate: '2024-03-31',
    status: 'Success',
  },
];

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: '1',
    type: 'visa',
    last4: '4242',
    expiryMonth: '12',
    expiryYear: '2025',
    holderName: 'John Doe',
    isDefault: true,
  },
  {
    id: '2',
    type: 'mastercard',
    last4: '8888',
    expiryMonth: '06',
    expiryYear: '2026',
    holderName: 'John Doe',
    isDefault: false,
  },
  {
    id: '3',
    type: 'paypal',
    email: 'john.doe@example.com',
    holderName: 'John Doe',
    isDefault: false,
  },
];

const BillingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>(
    'monthly'
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(mockBillingData);
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = mockBillingData.filter(
      record =>
        record.planName.toLowerCase().includes(value.toLowerCase()) ||
        record.amount.toLowerCase().includes(value.toLowerCase()) ||
        record.status.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleUpgrade = (planName: string) => {
    alert(`Mock upgrade to ${planName} plan initiated!`);
  };

  const handleContactSales = () => {
    alert('Mock contact sales form would open here!');
  };

  const handleExport = () => {
    alert('Mock billing data export initiated!');
  };

  const handleSetDefaultPayment = (paymentId: string) => {
    setPaymentMethods(prev =>
      prev.map(method => ({
        ...method,
        isDefault: method.id === paymentId,
      }))
    );
    alert('Default payment method updated!');
  };

  const handleRemovePayment = (paymentId: string) => {
    const methodToRemove = paymentMethods.find(m => m.id === paymentId);
    if (methodToRemove?.isDefault && paymentMethods.length > 1) {
      alert(
        'Cannot remove default payment method. Please set another as default first.'
      );
      return;
    }

    setPaymentMethods(prev => prev.filter(method => method.id !== paymentId));
    alert('Payment method removed successfully!');
  };

  const handleAddPayment = () => {
    alert('Mock add payment method form would open here!');
  };

  if (isLoading) {
    return <BillingPageSkeleton />;
  }

  return (
    <div className='min-h-screen bg-background'>
      <div className='max-w-7xl mx-auto space-y-8 p-6'>
        <BillingHeader
          billingPeriod={billingPeriod}
          onBillingPeriodChange={setBillingPeriod}
        />

        <PricingSection
          billingPeriod={billingPeriod}
          onUpgrade={handleUpgrade}
          onContactSales={handleContactSales}
        />

        <PaymentMethodsSection
          paymentMethods={paymentMethods}
          onAddPayment={handleAddPayment}
          onSetDefaultPayment={handleSetDefaultPayment}
          onRemovePayment={handleRemovePayment}
        />

        <BillingHistorySection
          filteredData={filteredData}
          searchTerm={searchTerm}
          onSearch={handleSearch}
          onExport={handleExport}
        />
      </div>
    </div>
  );
};

export default BillingPage;
