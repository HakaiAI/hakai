import React from 'react';
import PricingCard from './PricingCard';

interface PricingSectionProps {
  billingPeriod: 'monthly' | 'yearly';
  onUpgrade: (planName: string) => void;
  onContactSales: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  billingPeriod,
  onUpgrade,
  onContactSales,
}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      <PricingCard
        badge='FREE'
        badgeVariant='default'
        title='Starter Plan'
        price={billingPeriod === 'monthly' ? '$10.00 /month' : '$100.00 /year'}
        buttonText='Current Plan'
        buttonVariant='outline'
        buttonDisabled={true}
        features={[
          'Manage up to 1,000 contacts',
          'Basic customer management tools',
          'Task and workflow automation',
          'Integration with third-party apps (limited)',
          'Customizable dashboards',
        ]}
      />

      <PricingCard
        badge='PRO'
        badgeVariant='default'
        title='Growth Plan'
        price={billingPeriod === 'monthly' ? '$79.00 /month' : '$790.00 /year'}
        buttonText='Upgrade Plan'
        buttonVariant='default'
        features={[
          'Manage up to 10,000 contacts',
          'Advanced customer management',
          'Full workflow automation',
          'Real-time reporting and analytics',
          'Collaborative team features',
        ]}
        isHighlighted={true}
        onButtonClick={() => onUpgrade('Growth')}
      />

      <PricingCard
        badge='ADVANCE'
        badgeVariant='outline'
        title='Enterprise Plan'
        price='Custom /month'
        buttonText='Contact Us'
        buttonVariant='secondary'
        features={[
          'Unlimited contacts and data storage',
          'Custom workflow and automation setups',
          'Dedicated account manager',
          'Advanced analytics and reporting',
          'Full API access and custom integrations',
        ]}
        onButtonClick={onContactSales}
      />
    </div>
  );
};

export default PricingSection;
