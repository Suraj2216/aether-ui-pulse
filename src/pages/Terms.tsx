
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="pt-20">
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">Last Updated: April 25, 2023</p>
            
            <p>
              Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the AetherUI website and services operated by AetherUI Inc.
            </p>
            
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            
            <h2>1. Use of the Service</h2>
            
            <p>
              AetherUI provides a platform for businesses to leverage AI technologies and data analytics solutions. By using our Service, you agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information when creating an account</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly notify AetherUI of any security breaches or unauthorized use of your account</li>
              <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
              <li>Not use the Service in any way that violates applicable local, state, national, or international law</li>
            </ul>
            
            <h2>2. Subscriptions</h2>
            
            <p>
              Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring basis, depending on the type of subscription plan you select.
            </p>
            
            <p>
              We may change subscription fees at any time. If we change pricing for a subscription period you've already paid for, the change will become effective upon your next billing cycle.
            </p>
            
            <p>
              You may cancel your subscription at any time through your account settings or by contacting our customer support team. If you cancel, your subscription will remain active until the end of your current billing period, but will not be renewed.
            </p>
            
            <h2>3. Free Trial</h2>
            
            <p>
              We may offer a free trial period for new users. At the end of the trial period, we will automatically bill you for the subscription unless you cancel before the trial expires.
            </p>
            
            <h2>4. Intellectual Property</h2>
            
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of AetherUI Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            
            <p>
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of AetherUI Inc.
            </p>
            
            <h2>5. User Content</h2>
            
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post, including its legality, reliability, and appropriateness.
            </p>
            
            <p>
              By posting User Content, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service. You agree that this license includes the right for us to make your User Content available to other users of the Service, who may also use your User Content subject to these Terms.
            </p>
            
            <h2>6. Termination</h2>
            
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            
            <p>
              In no event shall AetherUI Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use or alteration of your transmissions or content</li>
            </ul>
            
            <h2>8. Disclaimer</h2>
            
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
            
            <h2>9. Governing Law</h2>
            
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States and the State of California, without regard to its conflict of law provisions.
            </p>
            
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
            
            <h2>10. Changes to Terms</h2>
            
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
            
            <h2>11. Contact Us</h2>
            
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <address>
              <strong>AetherUI Inc.</strong><br />
              123 Innovation Drive<br />
              San Francisco, CA 94103<br />
              Email: legal@aetherui.com<br />
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

export default Terms;
