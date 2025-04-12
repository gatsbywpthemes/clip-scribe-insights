
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Video } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface VideoFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const VideoForm: React.FC<VideoFormProps> = ({ onSubmit, isLoading }) => {
  const [url, setUrl] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation for URL
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a video URL",
        variant: "destructive",
      });
      return;
    }

    // Check if it's a valid URL format
    try {
      new URL(url);
      onSubmit(url);
    } catch (error) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid video URL",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-4">
      <div className="flex flex-col sm:flex-row w-full gap-2">
        <div className="relative flex-grow">
          <Input
            type="url"
            placeholder="Enter video URL (YouTube, Vimeo, etc.)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="pl-10 h-12 bg-secondary/50 border-secondary focus-visible:ring-accent"
            autoComplete="off"
            disabled={isLoading}
          />
          <Video className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        </div>
        <Button 
          type="submit" 
          className="h-12 px-6 bg-accent hover:bg-accent/80 text-accent-foreground font-medium"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Summarize'}
        </Button>
      </div>
    </form>
  );
};

export default VideoForm;
