
import React, { useState } from 'react';
import VideoForm from '@/components/VideoForm';
import SummaryDisplay from '@/components/SummaryDisplay';
import LoadingState from '@/components/LoadingState';
import Logo from '@/components/Logo';
import { useToast } from '@/components/ui/use-toast';

interface SummaryResponse {
  output: {
    summary: string;
    key_takeaways: string;
  };
}

const Index = () => {
  const [summary, setSummary] = useState<string | null>(null);
  const [keyTakeaways, setKeyTakeaways] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (url: string) => {
    setLoading(true);
    setSummary(null);
    setKeyTakeaways(null);
    
    try {
      const webhookUrl = 'https://apps-n8n-2.kkcjk8.easypanel.host/webhook/94f90bfa-fcab-488f-9550-fa1b9b160851';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoUrl: url }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch summary');
      }
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        const summaryData = data[0] as SummaryResponse;
        setSummary(summaryData.output.summary);
        setKeyTakeaways(summaryData.output.key_takeaways);
        setHasResults(true);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/50 flex flex-col items-center">
      <header className="w-full py-6 px-4 sm:px-6 flex justify-center">
        <Logo />
      </header>
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col items-center gap-8">
        <div className="text-center space-y-3 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Instantly Summarize Any Video
          </h2>
          <p className="text-muted-foreground text-lg">
            Paste a video URL and get a comprehensive summary and key takeaways in seconds.
          </p>
        </div>
        
        <VideoForm onSubmit={handleSubmit} isLoading={loading} />
        
        {loading && <LoadingState />}
        
        <SummaryDisplay 
          summary={summary} 
          keyTakeaways={keyTakeaways} 
          isVisible={!loading && hasResults} 
        />
      </main>
      
      <footer className="w-full py-6 border-t border-secondary/30">
        <div className="text-center text-sm text-muted-foreground">
          <p>Powered by AI | ClipScribe Insights ✨</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
