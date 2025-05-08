import { NavLink, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Home, User, Briefcase, Layers, Mail, Twitter, Linkedin, Framer, Instagram, Menu, X, ExternalLink } from "lucide-react";
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
  { href: "#", label: "Twitter", icon: Twitter },
  { href: "#", label: "LinkedIn", icon: Linkedin },
  { href: "#", label: "Framer", icon: Framer },
  { href: "#", label: "Instagram", icon: Instagram },
];

const UserProfile = () => (
  <div className="flex flex-col items-center p-6 border-b border-border">
    <Avatar className="w-20 h-20 mb-3">
      <AvatarImage src="https://placehold.co/100x100/black/white?text=NH" alt="Nicole Harper" />
      <AvatarFallback>NH</AvatarFallback>
    </Avatar>
    <h2 className="text-xl font-semibold">Nicole Harper</h2>
    <p className="text-sm text-muted-foreground">Creative Designer</p>
  </div>
);

const NavigationLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const location = useLocation();
  return (
    <nav className="flex-grow px-4 py-6 space-y-2">
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.href}
          onClick={onLinkClick}
          className={({ isActive }) =>
            cn(
              "flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              isActive || (item.href === "/" && location.pathname === "/index.html") // Handle index.html case for home
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            )
          }
        >
          <item.icon className="w-5 h-5 mr-3" />
          {item.label}
        </NavLink>
      ))}
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
          className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <link.icon className="w-5 h-5 mr-3" />
          {link.label}
          <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground/70" />
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
          <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 bg-card text-card-foreground">
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
    <aside className="fixed top-0 left-0 h-screen w-72 bg-card border-r border-border flex flex-col shadow-lg">
      <SidebarContent />
    </aside>
  );
};

export default Sidebar;