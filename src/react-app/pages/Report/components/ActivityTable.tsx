import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface Activity {
  campaign: string;
  status: 'completed' | 'paused' | 'updated' | 'initiated';
  date: string;
}

interface ActivityTableProps {
  activities: Activity[];
}

const getStatusBadgeVariant = (status: Activity['status']) => {
  switch (status) {
    case 'completed':
      return 'default';
    case 'paused':
      return 'secondary';
    case 'updated':
      return 'outline';
    case 'initiated':
      return 'destructive';
    default:
      return 'default';
  }
};

export const ActivityTable: React.FC<ActivityTableProps> = ({ activities }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Campaign</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities.map((activity, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{activity.campaign}</TableCell>
            <TableCell>
              <Badge variant={getStatusBadgeVariant(activity.status)}>
                {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell>{activity.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};