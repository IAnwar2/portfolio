import React from 'react';
import { Button } from '@/components/ui/button';
import { AtSign, Paperclip } from 'lucide-react';

export default function ResumeEmailButtons() {
  return (
    <div className="flex gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        className="flex items-center gap-2"
        onClick={() => window.open('https://drive.google.com/file/d/17gU1eAXcfsFB1XmW52rzp2WFSpUa9sZi/view?usp=sharing', '_blank')}
      >
        <Paperclip className="h-4 w-4" />
        Resume
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="flex items-center gap-2"
        onClick={() => window.open('mailto:i2anwar@uwaterloo.ca', '_blank')}
      >
        <AtSign className="h-4 w-4" />
        Email
      </Button>
    </div>
  );
}