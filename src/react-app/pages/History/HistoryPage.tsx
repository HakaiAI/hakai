import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { Search, Plus, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ChatHistoryItem, fetchChatHistory } from '@/data/mockChatHistory';
import HistoryPageSkeleton from '@/components/HistoryPageSkeleton';
import SearchSpinner from '@/components/SearchSpinner';
import LoadMoreButton from '@/components/LoadMoreButton';

const HistoryPage = () => {
  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const loadChatHistory = useCallback(
    async (pageNum: number, query: string, reset: boolean = false) => {
      if (reset) {
        setIsLoading(true);
      } else {
        setIsLoadingMore(true);
      }

      try {
        const result = await fetchChatHistory(pageNum, 10, query);

        if (reset) {
          setChatHistory(result.items);
        } else {
          setChatHistory(prev => [...prev, ...result.items]);
        }

        setHasMore(result.hasMore);
        setTotal(result.total);
      } catch (error) {
        console.error('Failed to load chat history:', error);
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
        setIsSearching(false);
      }
    },
    []
  );

  const handleSearch = useCallback(
    async (query: string) => {
      setSearchQuery(query);
      setPage(1);
      setIsSearching(true);
      await loadChatHistory(1, query, true);
    },
    [loadChatHistory]
  );

  const handleLoadMore = useCallback(async () => {
    if (!hasMore || isLoadingMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    await loadChatHistory(nextPage, searchQuery, false);
  }, [hasMore, isLoadingMore, page, searchQuery, loadChatHistory]);

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - timestamp.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} days ago`;
    }
  };

  useEffect(() => {
    loadChatHistory(1, '', true);
  }, [loadChatHistory]);

  if (isLoading) {
    return <HistoryPageSkeleton />;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-foreground">
            Your chat history
          </h1>
          <Button asChild>
            <Link to="/chat/new">
              <Plus className="w-4 h-4 mr-2" />
              New chat
            </Link>
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Search your chats..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
          <SearchSpinner isVisible={isSearching} />
        </div>

        {/* Stats */}
        <p className="text-sm text-muted-foreground mb-6">
          You have {total} previous chats.
        </p>

        {/* Chat List */}
        <div className="space-y-3">
          {chatHistory.map(chat => (
            <Link
              key={chat.id}
              to={`/chat/${chat.id}`}
              className="block"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base font-medium mb-1">
                        {chat.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Last message {formatTimeAgo(chat.timestamp)}
                      </p>
                    </div>
                    <MessageCircle className="w-5 h-5 text-muted-foreground mt-1" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <LoadMoreButton
            onLoadMore={handleLoadMore}
            isLoading={isLoadingMore}
            disabled={isLoadingMore}
          />
        )}

        {/* No results */}
        {searchQuery && chatHistory.length === 0 && !isSearching && (
          <div className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              No chats found
            </h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
