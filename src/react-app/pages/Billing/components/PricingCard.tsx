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
import { Check } from 'lucide-react';

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
      isHighlighted && 'border-primary shadow-lg shadow-primary/20'
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
      <div className='text-3xl font-bold text-foreground'>{price}</div>
    </CardHeader>
    <CardContent className='flex-1'>
      <ul className='space-y-3'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-start gap-2'>
            <div
              className={cn(
                'w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5',
                isHighlighted
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
              )}
            >
              <Check className="w-3 h-3" />
            </div>
            <span className='text-sm text-muted-foreground'>{feature}</span>
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
