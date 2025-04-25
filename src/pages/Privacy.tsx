
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="pt-20">
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">Last Updated: April 25, 2023</p>
            
            <p>
              At AetherUI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            
            <h2>Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>
              When you register for an account, we may collect personally identifiable information, such as:
            </p>
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing address</li>
              <li>Payment information</li>
              <li>Company information (if applicable)</li>
            </ul>
            
            <h3>Usage Data</h3>
            <p>
              We automatically collect certain information when you use our services, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Time and date of your visit</li>
              <li>Pages of our website that you visit</li>
              <li>Time spent on those pages</li>
              <li>Device information</li>
            </ul>
            
            <h3>Cookies and Similar Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2>How We Use Your Information</h2>
            
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to comments, questions, and requests</li>
              <li>Monitor usage patterns and analyze trends</li>
              <li>Personalize your experience</li>
              <li>Protect against, identify, and prevent fraud and other illegal activity</li>
            </ul>
            
            <h2>Data Security</h2>
            
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>Data Retention</h2>
            
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will also retain and use your information to comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
            
            <h2>Third-Party Services</h2>
            
            <p>
              Our service may contain links to third-party websites and services that are not owned or controlled by AetherUI. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
            
            <h2>Children's Privacy</h2>
            
            <p>
              Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information as soon as possible.
            </p>
            
            <h2>Your Rights</h2>
            
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access personal information we hold about you</li>
              <li>The right to request that we correct inaccurate personal information</li>
              <li>The right to request that we delete your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            
            <h2>Changes to This Privacy Policy</h2>
            
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2>Contact Us</h2>
            
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            
            <address>
              <strong>AetherUI Inc.</strong><br />
              123 Innovation Drive<br />
              San Francisco, CA 94103<br />
              Email: privacy@aetherui.com<br />
              Phone: +1 (555) 123-4567
            </address>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link to="/" className="text-brand-600 dark:text-brand-400 hover:text-brand-500 font-medium">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
