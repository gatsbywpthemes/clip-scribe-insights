
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LoadingState: React.FC = () => {
  return (
    <div className="w-full max-w-3xl space-y-6 animate-fade-in">
      <Card className="border-secondary bg-secondary/20 overflow-hidden">
        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="h-6 w-1/4 bg-secondary rounded animate-pulse-slow"></div>
            <div className="h-4 w-full bg-secondary/60 rounded animate-pulse-slow"></div>
            <div className="h-4 w-full bg-secondary/60 rounded animate-pulse-slow"></div>
            <div className="h-4 w-3/4 bg-secondary/60 rounded animate-pulse-slow"></div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-secondary bg-secondary/20 overflow-hidden">
        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="h-6 w-1/3 bg-secondary rounded animate-pulse-slow"></div>
            <div className="flex items-start space-x-2">
              <div className="h-4 w-4 mt-1 rounded-full bg-secondary/80 animate-pulse-slow"></div>
              <div className="h-4 w-full bg-secondary/60 rounded animate-pulse-slow"></div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="h-4 w-4 mt-1 rounded-full bg-secondary/80 animate-pulse-slow"></div>
              <div className="h-4 w-full bg-secondary/60 rounded animate-pulse-slow"></div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="h-4 w-4 mt-1 rounded-full bg-secondary/80 animate-pulse-slow"></div>
              <div className="h-4 w-3/4 bg-secondary/60 rounded animate-pulse-slow"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingState;
