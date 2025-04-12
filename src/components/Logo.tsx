
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative size-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-md opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="size-6 text-white" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M15 4H9C4 4 2 6 2 11V13C2 18 4 20 9 20H15C20 20 22 18 22 13V11C22 6 20 4 15 4Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M9.1001 12V10.52C9.1001 8.60999 10.4501 7.83999 12.1001 8.78999L13.3801 9.52999L14.6601 10.27C16.3101 11.22 16.3101 12.78 14.6601 13.73L13.3801 14.47L12.1001 15.21C10.4501 16.16 9.1001 15.38 9.1001 13.48V12Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeMiterlimit="10" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-bold tracking-tight">
          <span className="text-gradient">ClipScribe</span>
          <span className="text-white"> Insights</span>
        </h1>
        <p className="text-xs text-muted-foreground">Video Summarization Tool</p>
      </div>
    </div>
  );
};

export default Logo;
