import React, { useState, useEffect } from 'react';
import { BarChart3, DollarSign, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReportLoadingSkeleton, ReportHeader, MetricCard, ActivityTable } from './components';

const ReportPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    {
      title: 'Lead Generation Runs',
      value: '1,287',
      icon: <BarChart3 className="h-4 w-4" />,
      trend: {
        value: '12% increase this month',
        isPositive: true,
      },
    },
    {
      title: 'Credits Consumed',
      value: '45,210',
      icon: <DollarSign className="h-4 w-4" />,
      description: 'Total credits used across all campaigns.',
    },
    {
      title: 'Leads Generated',
      value: '3,456',
      icon: <Users className="h-4 w-4" />,
      trend: {
        value: '257 new leads this week',
        isPositive: true,
      },
    },
  ];

  const activities = [
    {
      campaign: '"Tech Innovators"',
      status: 'completed' as const,
      date: 'Aug 11, 2025',
    },
    {
      campaign: '"Healthcare Leaders"',
      status: 'paused' as const,
      date: 'Aug 10, 2025',
    },
    {
      campaign: '"Finance Wizards"',
      status: 'updated' as const,
      date: 'Aug 9, 2025',
    },
    {
      campaign: '"Startup Founders"',
      status: 'initiated' as const,
      date: 'Aug 8, 2025',
    },
  ];

  if (isLoading) {
    return <ReportLoadingSkeleton />;
  }

  return (
    <div className="p-8 w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <ReportHeader
          title="Reports"
          description="Here's a summary of your recent activity and key metrics."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              trend={metric.trend}
              description={metric.description}
            />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ActivityTable activities={activities} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportPage;
