import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2 } from 'lucide-react';

export interface PaymentMethod {
  id: string;
  type: 'visa' | 'mastercard' | 'amex' | 'paypal';
  last4?: string;
  expiryMonth?: string;
  expiryYear?: string;
  holderName: string;
  isDefault: boolean;
  email?: string; // For PayPal
}

interface PaymentMethodCardProps {
  method: PaymentMethod;
  onSetDefault: (paymentId: string) => void;
  onRemove: (paymentId: string) => void;
}

const getCardIcon = (type: PaymentMethod['type']) => {
  switch (type) {
    case 'visa':
      return '💳';
    case 'mastercard':
      return '💳';
    case 'amex':
      return '💳';
    case 'paypal':
      return '💰';
    default:
      return '💳';
  }
};

const getCardTypeDisplay = (type: PaymentMethod['type']) => {
  switch (type) {
    case 'visa':
      return 'Visa';
    case 'mastercard':
      return 'Mastercard';
    case 'amex':
      return 'American Express';
    case 'paypal':
      return 'PayPal';
    default:
      return 'Card';
  }
};

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  method,
  onSetDefault,
  onRemove,
}) => (
  <Card className='relative'>
    <CardContent className='p-4'>
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-3'>
          <div className='text-2xl'>{getCardIcon(method.type)}</div>
          <div>
            <div className='flex items-center gap-2'>
              <span className='font-medium text-foreground'>
                {getCardTypeDisplay(method.type)}
              </span>
              {method.isDefault && (
                <Badge variant='default' className='text-xs'>
                  Default
                </Badge>
              )}
            </div>
            <div className='text-sm text-muted-foreground'>
              {method.type === 'paypal'
                ? method.email
                : `•••• •••• •••• ${method.last4}`}
            </div>
            {method.type !== 'paypal' && (
              <div className='text-xs text-muted-foreground/70'>
                Expires {method.expiryMonth}/{method.expiryYear}
              </div>
            )}
            <div className='text-xs text-muted-foreground/70 mt-1'>
              {method.holderName}
            </div>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          {!method.isDefault && (
            <Button
              variant='outline'
              size='sm'
              onClick={() => onSetDefault(method.id)}
              className='text-xs'
            >
              Set Default
            </Button>
          )}
          <Button
            variant='ghost'
            size='sm'
            onClick={() => onRemove(method.id)}
            className='text-destructive hover:text-destructive/80 hover:bg-destructive/10 p-2'
          >
            <Trash2 className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default PaymentMethodCard;
