import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface ProfileData {
  id: number;
  name: string;
  image: string;
  fallback: string;
}

const defaultProfiles: ProfileData[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: 'https://i.pravatar.cc/150?img=1',
    fallback: 'SJ',
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: 'https://i.pravatar.cc/150?img=2',
    fallback: 'MC',
  },
  {
    id: 3,
    name: 'Emma Davis',
    image: 'https://i.pravatar.cc/150?img=3',
    fallback: 'ED',
  },
  {
    id: 4,
    name: 'James Wilson',
    image: 'https://i.pravatar.cc/150?img=4',
    fallback: 'JW',
  },
  {
    id: 5,
    name: 'Olivia Brown',
    image: 'https://i.pravatar.cc/150?img=5',
    fallback: 'OB',
  },
];

interface ProfileNotificationProps {
  profiles?: ProfileData[];
  interval?: number;
  className?: string;
}

export function ProfileNotificationAnimation({
  profiles = defaultProfiles,
  interval = 2000,
  className,
}: ProfileNotificationProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % profiles.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [profiles.length, interval]);

  const currentProfile = profiles[currentIndex];

  return (
    <div className={cn('flex items-center justify-center min-h-[200px]', className)}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentProfile.id}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
            className="relative"
          >
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 shadow-lg shadow-black/5 max-w-[300px]">
              <Avatar className="h-12 w-12 ring-2 ring-background shadow-md">
                <AvatarImage src={currentProfile.image} alt={currentProfile.name} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {currentProfile.fallback}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {currentProfile.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  just joined
                </p>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="h-2 w-2 rounded-full bg-green-500 shrink-0"
              />
            </div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary border-2 border-background"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
