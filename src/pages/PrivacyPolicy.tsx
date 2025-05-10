import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h1 className="text-4xl font-semibold text-foreground mb-6 text-left">Privacy Policy</h1>
      
      <Card className="shadow-xl">
        <CardContent className="p-6 md:p-8 space-y-6 text-base text-muted-foreground">
          <p className="text-sm">Effective Date: {currentYear}</p>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
            <p>
              Your privacy is important to us. This Privacy Policy explains how we (Ashish Gupta, owner of this portfolio website) collect, use, disclose, and protect your personal information when you use our website. By accessing our website, you agree to the terms outlined in this Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
            <p>We may collect the following types of information from you:</p>
            <ol className="list-decimal list-outside space-y-3 pl-5">
              <li>
                <h3 className="font-medium text-foreground">Personal Information</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>Name and email address if you contact us via our contact form or email.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Non-Personal Information</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>Browser type, operating system, and IP address (collected by our hosting provider or analytics tools).</li>
                  <li>Details about how you use our website, such as pages visited, time spent, and links clicked (if using analytics).</li>
                </ul>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Cookies and Tracking Technologies</h3>
                <p className="text-muted-foreground">
                  Data collected through cookies and similar technologies to enhance your browsing experience. Our website may use cookies for essential functionalities and, if implemented, for analytics.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-foreground">User-Generated Content</h3>
                <p className="text-muted-foreground">
                  Information you provide when interacting with our website, such as through a contact form.
                </p>
              </li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ol className="list-decimal list-outside space-y-3 pl-5">
              <li>
                <h3 className="font-medium text-foreground">To Provide and Improve Our Services</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>To operate and maintain our portfolio website.</li>
                  <li>To understand how users interact with our website to improve its design and functionality.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-medium text-foreground">To Communicate With You</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>Respond to your inquiries if you contact us.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-medium text-foreground">For Analytics and Insights</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>Analyze user behavior to improve website performance and design (if analytics are used).</li>
                </ul>
              </li>
              <li>
                <h3 className="font-medium text-foreground">To Ensure Security</h3>
                <ul className="list-disc list-outside space-y-1 pl-5 mt-1 text-muted-foreground">
                  <li>Monitor and prevent fraudulent activities.</li>
                  <li>Protect the integrity and security of our website and systems.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">How We Share Your Information</h2>
            <p>We do not sell or rent your personal information. However, we may share your data under the following circumstances:</p>
            <ol className="list-decimal list-outside space-y-3 pl-5">
              <li>
                <h3 className="font-medium text-foreground">With Service Providers</h3>
                <p className="text-muted-foreground">
                  We may share information with trusted third-party providers who assist us in operating our website, such as hosting providers and analytics platforms (if used).
                </p>
              </li>
              <li>
                <h3 className="font-medium text-foreground">For Legal Compliance</h3>
                <p className="text-muted-foreground">
                  We may disclose information if required by law, such as to comply with a subpoena or legal process.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-foreground">In Business Transfers</h3>
                <p className="text-muted-foreground">
                  In the event of a merger, acquisition, or sale of assets related to this website, your information may be transferred as part of the business transaction.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-foreground">With Your Consent</h3>
                <p className="text-muted-foreground">
                  We may share your information with third parties when you explicitly give us permission to do so.
                </p>
              </li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Your Privacy Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ol className="list-decimal list-outside space-y-3 pl-5">
              <li>
                <h3 className="font-medium text-foreground">Access and Update</h3>
                <p className="text-muted-foreground">
                  You can request access to the personal information we have about you (e.g., contact form submissions) and update or correct inaccuracies by contacting us.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Data Deletion</h3>
                <p className="text-muted-foreground">
                  You may request the deletion of your personal information, subject to any legal obligations we have to retain it.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Opt-Out</h3>
                <p className="text-muted-foreground">
                  If you receive any communications from us you wish to stop, you can opt-out by replying to the communication or contacting us directly.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Cookies Management</h3>
                <p className="text-muted-foreground">
                  You can manage your cookie preferences through your browser settings. Our Cookie Policy provides more details.
                </p>
              </li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
            <p>
              We take appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. While we strive to ensure the highest level of security, no system can be completely secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services (e.g., GitHub, LinkedIn, project demos). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before sharing any personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Children's Privacy</h2>
            <p>
              Our website and services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware of such data, we will take immediate steps to delete it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">International Users</h2>
            <p>
              If you access our website from outside [Your Country/Region of Operation], please be aware that your information may be transferred to, stored, and processed in [Your Country/Region of Operation] where our servers are located or where we operate. By using our website, you consent to this transfer of information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised effective date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc list-outside space-y-1 pl-5 text-muted-foreground">
              <li>Email: [Your Email Address]</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;