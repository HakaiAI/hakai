import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, CreditCard } from 'lucide-react';
import PaymentMethodCard, { PaymentMethod } from './PaymentMethodCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <Card>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle>Payment Methods</CardTitle>
            <p className='text-sm text-muted-foreground mt-1'>
              Manage your payment methods and set your default payment option
            </p>
          </div>
          <Button onClick={onAddPayment} className='flex items-center gap-2'>
            <Plus className='w-4 h-4' />
            Add Payment Method
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {paymentMethods.length === 0 ? (
          <div className='text-center py-8'>
            <CreditCard className='w-12 h-12 text-muted-foreground mx-auto mb-4' />
            <p className='text-muted-foreground mb-4'>No payment methods added yet</p>
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
      </CardContent>
    </Card>
  );
};

export default PaymentMethodsSection;
