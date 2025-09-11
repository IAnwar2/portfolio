import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ExternalLinkCardProps {
  url: string;
  title?: string;
  description?: string;
  className?: string;
}

export const ExternalLinkCard: React.FC<ExternalLinkCardProps> = ({ 
  url, 
  title, 
  description, 
  className = "" 
}) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      className={`w-full border rounded-md px-3 py-2 cursor-pointer transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 hover:border-border/80 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ring ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open ${title || url} in new tab`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0">
          {title && (
            <h3 className="font-medium text-sm truncate leading-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-xs text-muted-foreground truncate mt-0.5">
              {description}
            </p>
          )}
          <p className="text-xs text-muted-foreground truncate mt-0.5">
            {url}
          </p>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      </div>
    </div>
  );
};
