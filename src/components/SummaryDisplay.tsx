
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';

interface SummaryDisplayProps {
  summary: string | null;
  keyTakeaways: string | null;
  isVisible: boolean;
}

const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ summary, keyTakeaways, isVisible }) => {
  const { toast } = useToast();

  if (!isVisible) return null;

  const copyToClipboard = (text: string, type: 'summary' | 'takeaways') => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type === 'summary' ? 'Summary' : 'Key takeaways'} copied to clipboard`,
    });
  };

  // Function to process key takeaways text for proper display
  const formatTakeaways = (text: string) => {
    if (!text) return [];
    return text.split('\n').filter(line => line.trim());
  };

  const takeawaysList = keyTakeaways ? formatTakeaways(keyTakeaways) : [];

  return (
    <div className="w-full max-w-3xl space-y-6 animate-fade-in">
      {/* Summary Card */}
      <Card className="border-secondary bg-secondary/20 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-xl font-semibold text-gradient">Summary</CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => summary && copyToClipboard(summary, 'summary')}
            className="h-8 w-8 text-muted-foreground hover:text-accent"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </CardHeader>
        <Separator className="bg-accent/20" />
        <CardContent className="pt-4">
          <p className="text-foreground/90 leading-relaxed">{summary}</p>
        </CardContent>
      </Card>

      {/* Key Takeaways Card */}
      <Card className="border-secondary bg-secondary/20 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-xl font-semibold text-gradient">Key Takeaways</CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => keyTakeaways && copyToClipboard(keyTakeaways, 'takeaways')}
            className="h-8 w-8 text-muted-foreground hover:text-accent"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </CardHeader>
        <Separator className="bg-accent/20" />
        <CardContent className="pt-4">
          <ul className="space-y-2">
            {takeawaysList.map((takeaway, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span className="text-foreground/90">{takeaway.replace(/^•\s*/, '')}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryDisplay;
