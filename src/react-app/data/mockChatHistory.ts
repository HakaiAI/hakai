export interface ChatHistoryItem {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

export const mockChatHistory: ChatHistoryItem[] = [
  {
    id: '1',
    title: 'React Authentication Layout',
    lastMessage: 'Last message 7 hours ago',
    timestamp: new Date(Date.now() - 7 * 60 * 60 * 1000),
  },
  {
    id: '2',
    title: 'Table Text Color Contrast Strategy',
    lastMessage: 'Last message 11 hours ago',
    timestamp: new Date(Date.now() - 11 * 60 * 60 * 1000),
  },
  {
    id: '3',
    title: 'Claude UI Design with Tailwind',
    lastMessage: 'Last message 13 hours ago',
    timestamp: new Date(Date.now() - 13 * 60 * 60 * 1000),
  },
  {
    id: '4',
    title: 'Lead Qualification App Landing Page',
    lastMessage: 'Last message 2 days ago',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: '5',
    title: 'Tailwind Login Page Design',
    lastMessage: 'Last message 4 days ago',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    id: '6',
    title: 'Icon Library Search',
    lastMessage: 'Last message 9 days ago',
    timestamp: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
  },
  {
    id: '7',
    title: 'Animated Floating Icons HTML',
    lastMessage: 'Last message 9 days ago',
    timestamp: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
  },
  {
    id: '8',
    title: 'Agency Landing Page Design',
    lastMessage: 'Last message 9 days ago',
    timestamp: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
  },
  {
    id: '9',
    title: 'Node VM MCP Server Context',
    lastMessage: 'Last message 9 days ago',
    timestamp: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
  },
  {
    id: '10',
    title: 'Web Design Gradient Trends 2025',
    lastMessage: 'Last message 9 days ago',
    timestamp: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
  },
  {
    id: '11',
    title: 'Tailwind CSS Page Loader',
    lastMessage: 'Last message 11 days ago',
    timestamp: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000),
  },
  {
    id: '12',
    title: 'HTML DNS Prefetching Technique',
    lastMessage: 'Last message 11 days ago',
    timestamp: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000),
  },
  {
    id: '13',
    title: 'Advanced React Hooks Pattern',
    lastMessage: 'Last message 12 days ago',
    timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
  },
  {
    id: '14',
    title: 'TypeScript Generic Utilities',
    lastMessage: 'Last message 14 days ago',
    timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
  },
  {
    id: '15',
    title: 'CSS Grid Layout Mastery',
    lastMessage: 'Last message 15 days ago',
    timestamp: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
  },
  {
    id: '16',
    title: 'Performance Optimization Tips',
    lastMessage: 'Last message 16 days ago',
    timestamp: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000),
  },
  {
    id: '17',
    title: 'Modern JavaScript Features',
    lastMessage: 'Last message 18 days ago',
    timestamp: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000),
  },
  {
    id: '18',
    title: 'Database Design Patterns',
    lastMessage: 'Last message 20 days ago',
    timestamp: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
  },
];

// Simulate API delay
export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchChatHistory = async (
  page: number = 1,
  pageSize: number = 10,
  searchQuery: string = ''
): Promise<{
  items: ChatHistoryItem[];
  hasMore: boolean;
  total: number;
}> => {
  await delay(800); // Simulate network delay

  let filteredChats = mockChatHistory;

  if (searchQuery) {
    filteredChats = mockChatHistory.filter(chat =>
      chat.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const items = filteredChats.slice(startIndex, endIndex);
  const hasMore = endIndex < filteredChats.length;

  return {
    items,
    hasMore,
    total: filteredChats.length,
  };
};
