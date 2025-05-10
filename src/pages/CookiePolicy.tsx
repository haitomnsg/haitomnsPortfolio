import React from 'react';
import { Card, CardContent } from "@/components/ui/card"; // Re-using Card component

const CookiePolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h1 className="text-4xl font-semibold text-foreground mb-6 text-left">Cookie Policy</h1>

      <Card className="shadow-xl">
        <CardContent className="p-6 md:p-8 space-y-6 text-base text-muted-foreground">
          <p className="text-sm">Effective Date: {currentYear}</p>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
            <p>
              We value your privacy and are committed to being transparent about the data we collect and how we use it. This Cookie Policy explains what cookies are, how they are used on our website, the types of cookies we use, and how you can control or manage them. By continuing to use our website, you consent to the use of cookies as described in this policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device (computer, tablet, or smartphone) by websites that you visit. They serve various purposes, such as enabling the website to function, improving its performance, and providing a more personalized user experience. Cookies can also be used to track your online behavior for analytics or advertising purposes (though we primarily focus on functionality and analytics for this portfolio).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Why We Use Cookies</h2>
            <p>Cookies play an essential role in helping us deliver a better, more personalized experience. We use cookies to:</p>
            <ol className="list-decimal list-outside space-y-2 pl-5">
              <li>
                <h3 className="font-medium text-foreground">Ensure Website Functionality</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>Certain cookies are essential to make the website work properly.</li>
                  <li>They enable basic features such as page navigation, access to secure areas (if any), and session management.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Enhance Performance</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>Cookies collect data on how visitors use our website, such as which pages are most visited or whether users encounter errors.</li>
                  <li>This information helps us improve website functionality and user experience (if analytics are implemented).</li>
                </ul>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Provide Personalization (Limited)</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>Cookies might allow the website to remember your preferences, such as language settings or display preferences, to offer a tailored experience if such features are implemented.</li>
                </ul>
              </li>
              {/* Removed "Support Marketing and Advertising" as it's less typical for a portfolio */}
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Types of Cookies We Use</h2>
            <ol className="list-decimal list-outside space-y-3 pl-5">
              <li>
                <h3 className="font-medium text-foreground">Essential Cookies</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>These cookies are necessary for the website to function and cannot be disabled in our systems.</li>
                  <li>They may include session cookies, authentication cookies (if login is implemented), and cookies that maintain your preferences (like cookie consent).</li>
                </ul>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Performance and Analytics Cookies (If Used)</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously (e.g., via Google Analytics).</li>
                  <li>For example, they track the pages you visit, time spent on the site, and any errors you encounter.</li>
                  <li>The information collected is aggregated and helps us improve our website.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Functional Cookies (If Used)</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>Functional cookies allow the website to remember your preferences and provide enhanced features if such functionalities exist (e.g., theme settings).</li>
                </ul>
              </li>
              {/* Removed "Advertising and Targeting Cookies" */}
              <li>
                <h3 className="font-medium text-foreground">Third-Party Cookies (If Used)</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>These cookies may be set by external services we use, such as analytics tools or embedded content (e.g., YouTube videos, social media feeds).</li>
                  <li>They help enhance the website's functionality and provide additional services.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">How We Use Third-Party Cookies</h2>
            <p>
              If we work with trusted third-party service providers, they may set cookies on our website for various purposes, including:
            </p>
            <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
              <li><strong>Google Analytics:</strong> To analyze website performance and user behavior (if implemented).</li>
              {/* Removed Facebook Pixel unless specifically used */}
              <li><strong>Embedded Content:</strong> If we embed videos from platforms like YouTube or Vimeo, these services may set their own cookies.</li>
            </ul>
            <p>
              These third parties have their own cookie policies and privacy practices. We encourage you to review them.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">How You Can Manage Cookies</h2>
            <p>You have the right to manage your cookie preferences and can do so in several ways:</p>
            <ol className="list-decimal list-outside space-y-3 pl-5">
              <li>
                <h3 className="font-medium text-foreground">Browser Settings</h3>
                <p className="text-muted-foreground">
                  Most web browsers allow you to control cookies through their settings. You can block or delete cookies, or set alerts when cookies are being placed. Common browsers include:
                </p>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>Google Chrome</li>
                  <li>Mozilla Firefox</li>
                  <li>Microsoft Edge</li>
                  <li>Safari</li>
                </ul>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Cookie Management Tools (If Provided)</h3>
                <p className="text-muted-foreground">
                  Some websites offer cookie management tools or banners that allow you to customize your preferences directly on their platform. (This site may or may not have a dedicated tool).
                </p>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Opt-Out Options (for Analytics)</h3>
                <p className="text-muted-foreground">
                  If we use services like Google Analytics, you can often opt-out of their tracking. For Google Analytics, you can use the Google Analytics Opt-out Browser Add-on.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Clear Cookies</h3>
                <p className="text-muted-foreground">
                  You can delete existing cookies from your browser to remove previously stored data. Please note that clearing cookies may reset your preferences for some websites.
                </p>
              </li>
            </ol>
            <p>
              Any data collected is used in accordance with our Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically to reflect changes in technology, legal requirements, or our website functionality. Please check this page regularly for the latest updates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Cookie Policy, please reach out to us:
            </p>
            <ul className="list-disc list-outside space-y-1 pl-5 text-muted-foreground">
              <li>Email: [Your Email Address]</li>
              {/* Address is optional */}
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookiePolicy;