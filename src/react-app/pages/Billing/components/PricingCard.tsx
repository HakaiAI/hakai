import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  badge: string;
  badgeVariant: 'default' | 'secondary' | 'outline';
  title: string;
  price: string;
  buttonText: string;
  buttonVariant: 'default' | 'secondary' | 'outline';
  buttonDisabled?: boolean;
  features: string[];
  isHighlighted?: boolean;
  onButtonClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  badge,
  badgeVariant,
  title,
  price,
  buttonText,
  buttonVariant,
  buttonDisabled,
  features,
  isHighlighted = false,
  onButtonClick,
}) => (
  <Card
    className={cn(
      'relative flex-1 min-w-[300px]',
      isHighlighted && 'bg-slate-900 text-white border-slate-700'
    )}
  >
    <CardHeader>
      <div className='flex items-start justify-between'>
        <div>
          <Badge
            variant={badgeVariant}
            className={cn(
              'mb-2',
              badge === 'FREE' && 'bg-orange-500 text-white border-orange-500',
              badge === 'PRO' && 'bg-orange-500 text-white border-orange-500',
              badge === 'ADVANCE' && 'bg-gray-500 text-white border-gray-500'
            )}
          >
            {badge}
          </Badge>
          <CardTitle className='text-xl'>{title}</CardTitle>
        </div>
      </div>
      <div className='text-3xl font-bold'>{price}</div>
    </CardHeader>
    <CardContent className='flex-1'>
      <ul className='space-y-3'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-start gap-2'>
            <div
              className={cn(
                'w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5',
                isHighlighted
                  ? 'bg-green-500 text-white'
                  : 'bg-green-100 text-green-600'
              )}
            >
              ✓
            </div>
            <span className='text-sm'>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button
        variant={buttonVariant}
        disabled={buttonDisabled}
        className='w-full'
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
);

export default PricingCard;
