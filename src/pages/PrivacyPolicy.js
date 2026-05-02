import React from "react";

function PrivacyPolicy() {
  return (
    <div className="policy-container">
      <h1>Privacy Policy</h1>
      <p className="effective-date">Effective Date: [Add Date]</p>

      <p>
        Memoir is a web-based image sharing platform that allows users to upload,
        view, and interact with images, as well as integrate content from external
        services such as YouTube.
      </p>

      <h2>1. Information We Collect</h2>
      <p><strong>Personal Information:</strong></p>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Profile picture</li>
      </ul>

      <p><strong>Account & Usage Data:</strong></p>
      <ul>
        <li>Uploaded images</li>
        <li>Image interactions (likes)</li>
      </ul>

      <p><strong>YouTube Integration (if connected):</strong></p>
      <ul>
        <li>Access to your liked YouTube videos</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Create and manage your account</li>
        <li>Display your profile and content</li>
        <li>Enable image uploads and interactions</li>
        <li>Provide YouTube liked videos (if connected)</li>
        <li>Improve platform performance and user experience</li>
        <li>Maintain security and prevent misuse</li>
      </ul>

      <h2>3. YouTube and Google Data Usage</h2>
      <p>
        Memoir uses the YouTube Data API to retrieve data when you connect your account.
      </p>
      <ul>
        <li>We only access data you explicitly authorize</li>
        <li>We do not sell or share your YouTube data</li>
        <li>You can revoke access at any time via your Google account settings</li>
      </ul>

      <h2>4. Sharing of Information</h2>
      <p>
        We do not sell or rent your personal information. Some information is visible to
        other users, such as your name, profile picture, and uploaded images.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We take reasonable measures to protect your data. However, no system is completely secure.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>Access your personal data</li>
        <li>Update or correct your information</li>
        <li>Request account deletion</li>
        <li>Disconnect your YouTube account</li>
      </ul>

      <h2>7. Third-Party Services</h2>
      <p>
        Memoir may use third-party services such as authentication providers and hosting platforms.
        These services may process your data according to their own policies.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. Updates will be posted on this page.
      </p>

      <h2>9. Contact</h2>
      <p>
        If you have any questions, contact us at:
        <br />
        📧 orapelengm239@gmail.com
      </p>
    </div>
  );
}

export default PrivacyPolicy;