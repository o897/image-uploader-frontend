import React from "react";

function TermsOfService() {
  return (
    <div className="terms-container">
      <h1>Terms of Service</h1>

      <p className="effective-date">
        Effective Date: 03 | May | 2026
      </p>

      <p>
        Welcome to Memoir (https://usememoir.online). Memoir is a web-based platform
        that allows users to upload, view, and interact with images, and connect
        external services such as Google and Facebook for authentication and YouTube
        for content features.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old to use Memoir. By using the platform, you
        confirm that you meet this requirement.
      </p>

      <h2>2. Accounts</h2>
      <p>
        You are responsible for maintaining the security of your account and all
        activity under it.
      </p>

      <h2>3. User Content</h2>
      <p>
        You retain ownership of content you upload. You agree not to upload illegal,
        harmful, or infringing content.
      </p>

      <h2>4. Third-Party Services</h2>

      <h3>4.1 Google Services (Authentication & YouTube)</h3>
      <p>
        Memoir uses Google authentication and YouTube Data API to provide login and
        YouTube-related features such as displaying liked videos.
      </p>
      <ul>
        <li>We only access data you explicitly authorize</li>
        <li>This may include name, email, and profile picture</li>
        <li>YouTube data is accessed only with your permission</li>
        <li>You can revoke access at any time via Google settings</li>
      </ul>

      <h3>4.2 Facebook Login (Meta Authentication)</h3>
      <p>
        Memoir uses Facebook Login provided by Meta for Developers to allow users to
        sign in.
      </p>
      <ul>
        <li>We may access your name, email, and profile picture</li>
        <li>We only access data you approve during login</li>
        <li>We do not post or act on your behalf</li>
        <li>You can revoke access at any time via Facebook settings</li>
      </ul>

      <h3>4.3 Pexels Image Content</h3>
      <p>
        Memoir uses the Pexels API to display free stock images within the platform.
      </p>
      <ul>
        <li>Images remain the property of their creators</li>
        <li>Content is subject to Pexels license terms</li>
        <li>We do not claim ownership of Pexels content</li>
      </ul>

      <h2>5. Acceptable Use</h2>
      <ul>
        <li>No hacking, abusing, or disrupting the platform</li>
        <li>No spam or malicious activity</li>
        <li>No illegal, offensive, or infringing content</li>
      </ul>

      <h2>6. Content License</h2>
      <p>
        You retain ownership of your content. By uploading, you grant Memoir a
        limited license to display and process it within the platform.
      </p>

      <h2>7. Termination</h2>
      <p>
        We may suspend or terminate accounts that violate these Terms. You may also
        delete your account at any time.
      </p>

      <h2>8. Third-Party Services</h2>
      <p>
        Memoir relies on third-party services including Google, Facebook, YouTube,
        and Pexels. These services are governed by their own terms and policies.
      </p>

      <h2>9. Disclaimer</h2>
      <p>
        Memoir is provided “as is” without warranties of any kind.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        We are not liable for any damages resulting from use of the platform,
        data loss, or third-party service failures.
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of Memoir means
        you accept the updated Terms.
      </p>

      <h2>12. Contact</h2>
      <p>
        If you have any questions, contact us at:
        <br />
        📧 orapelengm239@gmail.com
      </p>
    </div>
  );
}

export default TermsOfService;