import { NavLink, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Home, User, Briefcase, Layers, Mail, Menu, X, ExternalLink, Facebook, Instagram, Linkedin, Github, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/stack", label: "Stack", icon: Layers },
  { href: "/contact", label: "Contact", icon: Mail },
];

const socialLinks = [
  { href: "#", label: "Facebook", icon: Facebook },
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "LinkedIn", icon: Linkedin },
  { href: "#", label: "GitHub", icon: Github },
];

const UserProfile = () => (
  <div className="flex items-center p-6 space-x-4 border-b border-border">
    <Avatar className="w-12 h-12">
      <AvatarImage src="https://placehold.co/100x100/black/white?text=AG" alt="Ashish Gupta" /> {/* Updated alt and placeholder text */}
      <AvatarFallback>AG</AvatarFallback> {/* Updated fallback */}
    </Avatar>
    <div>
      <h2 className="text-lg font-semibold">Ashish Gupta</h2> {/* Updated name */}
      <p className="text-sm text-muted-foreground">AI & Robotics Engineer</p> {/* Updated role */}
    </div>
  </div>
);

const NavigationLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const location = useLocation();
  return (
    <nav className="flex-grow px-4 py-6 space-y-1">
      {navItems.map((item) => {
        const isCurrentPageActive = 
          (item.href === "/" && (location.pathname === "/" || location.pathname === "/index.html")) ||
          (item.href !== "/" && location.pathname === item.href);

        return (
          <NavLink
            key={item.label}
            to={item.href}
            onClick={onLinkClick}
            end
            className={({ isActive: navLinkIsActiveForClass }) =>
              cn(
                "flex items-center justify-between px-3 py-3 text-sm font-medium rounded-md transition-colors group",
                navLinkIsActiveForClass
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <div className="flex items-center">
              <item.icon 
                className={cn(
                  "w-5 h-5 mr-3",
                  isCurrentPageActive 
                    ? "text-primary-foreground" 
                    : "text-muted-foreground group-hover:text-accent-foreground"
                )}
              />
              {item.label}
            </div>
            {isCurrentPageActive ? (
              <ChevronRight className="w-4 h-4 text-primary-foreground/70" />
            ) : (
              <ChevronRight className="w-4 h-4 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

const SocialMediaLinks = () => (
  <div className="px-4 py-6 border-t border-border">
    <div className="space-y-2">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors group"
        >
          <link.icon className="w-5 h-5 mr-3" />
          {link.label}
          <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </a>
      ))}
    </div>
  </div>
);

const SidebarContent = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <>
    <UserProfile />
    <NavigationLinks onLinkClick={onLinkClick} />
    <SocialMediaLinks />
  </>
);

const Sidebar = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  if (isMobile) {
    return (
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50 bg-card text-card-foreground shadow-lg">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0 flex flex-col bg-card">
           <SheetHeader className="p-0">
             <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
             <Button variant="ghost" size="icon" className="absolute top-3 right-3" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-5 h-5" />
             </Button>
           </SheetHeader>
          <SidebarContent onLinkClick={() => setMobileMenuOpen(false)} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-72 bg-card border border-border flex flex-col shadow-xl rounded-lg overflow-hidden">
      <SidebarContent />
    </aside>
  );
};

export default Sidebar;