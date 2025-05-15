import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Home, User, Briefcase, Bot, Mail, Menu, X, ExternalLink, Facebook, Instagram, Linkedin, Github, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home, id: "home" },
  { href: "/about", label: "About", icon: User, id: "about" },
  { href: "/projects", label: "Projects", icon: Briefcase, id: "projects" },
  { href: "/robotics", label: "Robotics", icon: Bot, id: "robotics" },
  { href: "/contact", label: "Contact", icon: Mail, id: "contact" },
];

// Keeping social links layout as provided by the user
const socialLinks = [
  { href: "https://www.facebook.com/haitomnsg", label: "Facebook", icon: Facebook },
  { href: "https://www.instagram.com/haitomnsg/", label: "Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/in/haitomnsg/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/haitomnsg/", label: "GitHub", icon: Github },
];

const UserProfile = () => (
  <div className="flex items-center p-6 space-x-4 border-b border-border">
    <Avatar className="w-12 h-12">
      <AvatarImage src="./images/ashish-website-logo.png" alt="Ashish Gupta" />
      <AvatarFallback>AG</AvatarFallback>
    </Avatar>
    <div>
      <h2 className="text-lg font-semibold text-foreground">Ashish Gupta</h2>
      <p className="text-sm text-muted-foreground">AI & Robotics Engineer</p>
    </div>
  </div>
);

const NavigationLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleClick = (href: string, id: string) => {
    if (isMobile) {
      // For mobile, scroll to section instead of navigating
      document.getElementById(`${id}-section`)?.scrollIntoView({ behavior: 'smooth' });
      onLinkClick?.(); // Close the sheet after clicking a link
    } else {
      // For desktop, use react-router-dom navigation
      navigate(href);
    }
  };

  return (
    <nav className="flex-grow px-4 py-6 space-y-1">
      {navItems.map((item) => {
        // Determine active state only for desktop based on route
        const isActive = !isMobile && (item.href === "/" ? location.pathname === "/" : location.pathname === item.href);

        // Use a button for both mobile (scrolling) and desktop (handled by onClick)
        return (
          <button
            key={item.label}
            onClick={() => handleClick(item.href, item.id)}
            className={cn(
              "flex items-center justify-between px-3 py-3 text-sm font-medium rounded-md transition-colors group w-full text-left",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <div className="flex items-center">
              <item.icon
                className={cn(
                  "w-5 h-5 mr-3",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground group-hover:text-sidebar-accent-foreground"
                )}
              />
              {item.label}
            </div>
            {isActive ? (
              <ChevronRight className="w-4 h-4 text-primary-foreground/70" />
            ) : (
              <ChevronRight className="w-4 h-4 text-muted-foreground/50 opacity-0 group-hover:opacity-100 group-hover:text-sidebar-accent-foreground transition-opacity" />
            )}
          </button>
        );
      })}
    </nav>
  );
};

// Keeping SocialMediaLinks component layout as provided by the user
const SocialMediaLinks = () => (
  <div className="px-4 py-6 border-t border-border">
    <div className="space-y-2">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group"
        >
          <link.icon className="w-5 h-5 mr-3 text-muted-foreground group-hover:text-sidebar-accent-foreground" />
          {link.label}
          <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground/70 opacity-0 group-hover:opacity-100 group-hover:text-sidebar-accent-foreground transition-opacity duration-200" />
        </a>
      ))}
    </div>
  </div>
);

// Removed activeSection prop as it's no longer used for mobile highlighting
const Sidebar: React.FC = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  if (isMobile) {
    return (
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50 bg-card text-card-foreground shadow-lg md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0 flex flex-col bg-card">
          {/* Pass onLinkClick to close the sheet */}
          <SidebarContent
            onLinkClick={() => setMobileMenuOpen(false)}
          />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-72 bg-card border border-border flex flex-col shadow-xl rounded-lg overflow-hidden">
      {/* No activeSection needed for desktop SidebarContent */}
      <SidebarContent />
    </aside>
  );
};

// Removed activeSection prop
const SidebarContent = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <>
    <UserProfile />
    {/* Pass onLinkClick to NavigationLinks */}
    <NavigationLinks onLinkClick={onLinkClick} />
    <SocialMediaLinks />
  </>
);

export default Sidebar;