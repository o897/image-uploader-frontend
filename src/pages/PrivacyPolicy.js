// pages/PrivacyPolicy.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", lineHeight: "1.8", color: "#333" }}>
        
        <h1 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "8px" }}>Privacy Policy</h1>
        <p style={{ color: "#888", marginBottom: "40px" }}>Effective Date: 03 | May | 2026</p>

        <p>Welcome to Memoir (<a href="https://usememoir.online">https://usememoir.online</a>). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our platform.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>1. Information We Collect</h2>
        <h3 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "8px" }}>1.1 Personal Information</h3>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Profile picture</li>
        </ul>

        <h3 style={{ fontSize: "15px", fontWeight: "600", marginTop: "16px", marginBottom: "8px" }}>1.2 User Content</h3>
        <ul>
          <li>Images uploaded to the platform</li>
          <li>Likes and interactions</li>
        </ul>

        <h3 style={{ fontSize: "15px", fontWeight: "600", marginTop: "16px", marginBottom: "8px" }}>1.3 YouTube Data</h3>
        <ul>
          <li>Liked videos accessed via YouTube Data API</li>
          <li>Video titles, thumbnails, and channel information</li>
          <li>We do not store your YouTube data — it is fetched in real time and displayed only during your session</li>
        </ul>

        <h3 style={{ fontSize: "15px", fontWeight: "600", marginTop: "16px", marginBottom: "8px" }}>1.4 Usage Data</h3>
        <ul>
          <li>Device information</li>
          <li>Browser type</li>
          <li>Activity within the app</li>
        </ul>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>2. How We Use Your Information</h2>
        <ul>
          <li>To create and manage your account</li>
          <li>To display and manage content</li>
          <li>To improve user experience</li>
          <li>To provide personalized features</li>
          <li>To maintain platform security</li>
          <li>To display your YouTube liked videos within the media feed</li>
        </ul>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>3. Third-Party Services</h2>
        <h3 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "8px" }}>3.1 Google Services (Authentication & YouTube)</h3>
        <p>Memoir uses Google authentication and YouTube Data API to enable login and YouTube-related features such as displaying liked videos.</p>
        <ul>
          <li>We access only data you explicitly authorize</li>
          <li>This may include name, email, and profile picture</li>
          <li>YouTube liked videos are fetched in real time and never stored</li>
          <li>Each video links back to the original YouTube video and channel</li>
          <li>We do not modify, upload, delete, or interact with any YouTube content on your behalf</li>
          <li>You can revoke access at any time via <a href="https://myaccount.google.com/permissions">Google settings</a></li>
        </ul>

        <h3 style={{ fontSize: "15px", fontWeight: "600", marginTop: "16px", marginBottom: "8px" }}>3.2 Facebook Login (Meta Authentication)</h3>
        <p>Memoir uses Facebook Login provided by Meta for Developers to authenticate users.</p>
        <ul>
          <li>We may receive your name, email, and profile picture</li>
          <li>We only access data you approve during login</li>
          <li>We do not post or interact on your behalf</li>
          <li>You can revoke access at any time via Facebook settings</li>
        </ul>

        <h3 style={{ fontSize: "15px", fontWeight: "600", marginTop: "16px", marginBottom: "8px" }}>3.3 Pexels Image Content</h3>
        <p>Memoir uses the Pexels API to display free stock images within the platform.</p>
        <ul>
          <li>Images remain property of their original creators</li>
          <li>Content is subject to Pexels license terms</li>
          <li>We do not claim ownership of Pexels content</li>
        </ul>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>4. Data Sharing</h2>
        <p>We do not sell or rent your personal data. We only share data with trusted third-party services required to operate the platform.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>5. Data Security</h2>
        <p>We implement reasonable security measures to protect your data. However, no system is completely secure.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>6. Your Rights</h2>
        <ul>
          <li>Access your personal data</li>
          <li>Update or correct your information</li>
          <li>Request account deletion</li>
          <li>Revoke third-party access (Google/Facebook)</li>
          <li>Revoke YouTube access via <a href="https://myaccount.google.com/permissions">Google permissions</a></li>
        </ul>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>7. Data Retention</h2>
        <p>We retain your data only as long as necessary to provide services or comply with legal obligations. YouTube data is never stored — it is only fetched live during your session.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>8. Children's Privacy</h2>
        <p>Memoir is not intended for users under the age of 13.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Updates will be posted on this page.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>10. Data Deletion</h2>
        <h3 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "8px" }}>10.1 Facebook Data Deletion</h3>
        <ol>
          <li>Go to your Facebook Settings</li>
          <li>Click "Apps and Websites"</li>
          <li>Find Memoir and click "Remove"</li>
          <li>Facebook will notify us and your data will be deleted automatically</li>
        </ol>

        <h3 style={{ fontSize: "15px", fontWeight: "600", marginTop: "16px", marginBottom: "8px" }}>10.2 Google & YouTube Data Deletion</h3>
        <ol>
          <li>Go to <a href="https://myaccount.google.com/permissions">https://myaccount.google.com/permissions</a></li>
          <li>Find Memoir and click "Remove Access"</li>
          <li>Your YouTube data is never stored so no further deletion is needed</li>
        </ol>

        <h3 style={{ fontSize: "15px", fontWeight: "600", marginTop: "16px", marginBottom: "8px" }}>10.3 Delete Your Memoir Account</h3>
        <p>You can delete your account directly from within the Memoir app under Profile Settings → Delete Account. This will permanently remove all your data from our servers.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>11. Contact</h2>
        <p>If you have any questions, contact us at: <a href="mailto:orapelengm239@gmail.com">orapelengm239@gmail.com</a></p>

      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;