import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom'; // Import Link for the Privacy Policy link

const CookiePolicy = () => {
  // const currentYear = new Date().getFullYear(); // User provided static year

  return (
    <div>
      <h1 className="text-4xl font-semibold text-foreground mb-6 text-left">Cookie Policy</h1>

      <Card className="shadow-xl">
        <CardContent className="p-6 md:p-8 space-y-6 text-base text-muted-foreground">
          <p className="text-sm">Effective Date: 2024</p>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
            <p>
              Your privacy matters to us. This Cookie Policy explains what cookies are, how we use them on this portfolio website, and how you can manage your preferences. By using this website, you consent to the use of cookies as outlined here.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help improve functionality, personalize your experience, and collect basic usage information to enhance performance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Why We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc list-outside space-y-2 pl-5 text-muted-foreground">
              <li>
                <h3 className="font-medium text-foreground inline">Ensure Website Functionality:</h3> These essential cookies help the site work properly—for example, enabling page navigation and loading content efficiently.
              </li>
              <li>
                <h3 className="font-medium text-foreground inline">Improve Performance:</h3> Some cookies help us understand how visitors interact with the website (like which pages are viewed most), allowing us to improve the overall experience.
              </li>
              <li>
                <h3 className="font-medium text-foreground inline">Enhance User Preferences:</h3> Functional cookies remember choices like your language or theme preferences so you don’t have to reset them on every visit.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Types of Cookies We Use</h2>
            <ul className="list-disc list-outside space-y-2 pl-5 text-muted-foreground">
              <li>
                <h3 className="font-medium text-foreground inline">Essential Cookies:</h3> Required for core site functionality and cannot be disabled.
              </li>
              <li>
                <h3 className="font-medium text-foreground inline">Analytics Cookies:</h3> Help us track basic usage statistics, such as page visits and session duration, using tools like Google Analytics.
              </li>
              <li>
                <h3 className="font-medium text-foreground inline">Functional Cookies:</h3> Remember settings or preferences to personalize your browsing experience.
              </li>
              <li>
                <h3 className="font-medium text-foreground inline">Third-Party Cookies:</h3> These may be set by embedded content, like videos or social media buttons (e.g., YouTube, GitHub). These third parties have their own cookie policies.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Managing Cookies</h2>
            <p>You can manage or disable cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc list-outside space-y-1 pl-5 text-muted-foreground">
              <li>Delete stored cookies</li>
              <li>Block new cookies</li>
              <li>Receive alerts when cookies are being used</li>
            </ul>
            <p>Visit your browser’s help section for detailed instructions.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Your Privacy</h2>
            <p>
              We do not use cookies to collect personally identifiable information. Any data collected through cookies is used only to improve your experience and is handled in accordance with our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Updates</h2>
            <p>
              We may update this Cookie Policy occasionally. Please review this page periodically to stay informed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p>
              If you have any questions about this policy, feel free to contact:
            </p>
            <ul className="list-none space-y-1 pl-0 text-muted-foreground"> {/* Changed to list-none and pl-0 for direct listing */}
              <li>Email: [your.email@example.com]</li>
              <li>Location: [Your City, Country]</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookiePolicy;