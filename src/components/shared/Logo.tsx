// src/components/shared/Logo.tsx
import { Sparkles } from 'lucide-react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 32, className = '' }: LogoProps) => {
  return (
    <div 
      className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 p-2 ${className}`}
      style={{ width: size, height: size }}
    >
      <Sparkles 
        size={size * 0.6} 
        className="text-primary-foreground" 
      />
    </div>
  );
};

export default Logo;