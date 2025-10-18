import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import founderImage from "@/assets/founder-charles.png";

interface ProfileCardProps {
  name?: string;
  title?: string;
  imageUrl?: string;
  linkedinUrl?: string;
  email?: string;
  className?: string;
}

const ProfileCard = React.forwardRef<HTMLDivElement, ProfileCardProps>(
  (
    {
      name = "Charles Baudin",
      title = "Founder & CEO",
      imageUrl = founderImage,
      linkedinUrl = "https://www.linkedin.com/in/charles-baudin/",
      email = "Charles@activ8pay.com",
      className,
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "w-full max-w-sm shadow-lg",
          className
        )}
      >
        <CardContent className="flex flex-col items-center p-8 space-y-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
            </a>

            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200 group"
            >
              <Mail className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </CardContent>
      </Card>
    );
  }
);

ProfileCard.displayName = "ProfileCard";

export { ProfileCard };
