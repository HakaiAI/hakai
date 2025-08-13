import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, CreditCard } from 'lucide-react';
import PaymentMethodCard, { PaymentMethod } from './PaymentMethodCard';

interface PaymentMethodsSectionProps {
  paymentMethods: PaymentMethod[];
  onAddPayment: () => void;
  onSetDefaultPayment: (paymentId: string) => void;
  onRemovePayment: (paymentId: string) => void;
}

const PaymentMethodsSection: React.FC<PaymentMethodsSectionProps> = ({
  paymentMethods,
  onAddPayment,
  onSetDefaultPayment,
  onRemovePayment,
}) => {
  return (
    <div className='bg-white rounded-lg border'>
      <div className='p-6 border-b'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-xl font-semibold'>Payment Methods</h2>
            <p className='text-gray-600 text-sm mt-1'>
              Manage your payment methods and set your default payment option
            </p>
          </div>
          <Button onClick={onAddPayment} className='flex items-center gap-2'>
            <Plus className='w-4 h-4' />
            Add Payment Method
          </Button>
        </div>
      </div>

      <div className='p-6'>
        {paymentMethods.length === 0 ? (
          <div className='text-center py-8'>
            <CreditCard className='w-12 h-12 text-gray-400 mx-auto mb-4' />
            <p className='text-gray-600 mb-4'>No payment methods added yet</p>
            <Button onClick={onAddPayment} variant='outline'>
              Add Your First Payment Method
            </Button>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {paymentMethods.map(method => (
              <PaymentMethodCard
                key={method.id}
                method={method}
                onSetDefault={onSetDefaultPayment}
                onRemove={onRemovePayment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodsSection;
