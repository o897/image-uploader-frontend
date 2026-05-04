// pages/TermsOfService.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TermsOfService() {
  return (
    <>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", lineHeight: "1.8", color: "#333" }}>

        <h1 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "8px" }}>Terms of Service</h1>
        <p style={{ color: "#888", marginBottom: "40px" }}>Effective Date: 03 | May | 2026</p>

        <p>Welcome to Memoir. By accessing or using our platform at <a href="https://usememoir.online">https://usememoir.online</a>, you agree to be bound by these Terms of Service. Please read them carefully.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>1. Acceptance of Terms</h2>
        <p>By creating an account or using Memoir, you confirm that you are at least 13 years old and agree to these terms. If you do not agree, please do not use the platform.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>2. Your Account</h2>
        <ul>
          <li>You are responsible for maintaining the security of your account</li>
          <li>You must provide accurate information when registering</li>
          <li>You are responsible for all activity that occurs under your account</li>
          <li>You may not share your account with others</li>
          <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
        </ul>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>3. Content You Upload</h2>
        <ul>
          <li>You retain ownership of content you upload to Memoir</li>
          <li>By uploading content you grant Memoir a license to display it on the platform</li>
          <li>You must not upload content that is illegal, offensive, or violates third-party rights</li>
          <li>You must not upload content that infringes copyright or trademarks</li>
          <li>We reserve the right to remove any content that violates these terms</li>
        </ul>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>4. Third-Party Services</h2>
        <p>Memoir integrates with the following third-party services:</p>
        <ul>
          <li><strong>Google & YouTube</strong> — for authentication and displaying your liked videos. Subject to <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Google's Terms of Service</a></li>
          <li><strong>Facebook</strong> — for authentication. Subject to <a href="https://www.facebook.com/terms.php" target="_blank" rel="noreferrer">Meta's Terms of Service</a></li>
          <li><strong>Pexels</strong> — for curated stock images. Subject to <a href="https://www.pexels.com/terms-of-service/" target="_blank" rel="noreferrer">Pexels Terms of Service</a></li>
          <li><strong>Cloudinary</strong> — for image storage and delivery</li>
        </ul>
        <p>We are not responsible for the content or practices of these third-party services.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>5. Prohibited Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use Memoir for any unlawful purpose</li>
          <li>Upload malicious code or attempt to hack the platform</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Scrape or collect data from Memoir without permission</li>
          <li>Impersonate another person or entity</li>
          <li>Use Memoir to distribute spam or unsolicited content</li>
        </ul>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>6. Intellectual Property</h2>
        <ul>
          <li>Memoir's design, logo, and code are the property of Orapeleng Mathebula</li>
          <li>Pexels images remain the property of their original creators</li>
          <li>YouTube content remains the property of the respective creators and YouTube</li>
          <li>You may not copy or reproduce any part of Memoir without permission</li>
        </ul>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>7. Disclaimer of Warranties</h2>
        <p>Memoir is provided "as is" without warranties of any kind. We do not guarantee that the platform will be available at all times or free from errors.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Memoir shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>9. Termination</h2>
        <p>We reserve the right to suspend or terminate your access to Memoir at any time for violations of these terms. You may also delete your account at any time from within the app under Profile Settings → Delete Account.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>10. Changes to These Terms</h2>
        <p>We may update these Terms of Service from time to time. Continued use of Memoir after changes are posted constitutes your acceptance of the new terms.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>11. Governing Law</h2>
        <p>These terms are governed by the laws of the Republic of South Africa.</p>

        <h2 style={{ fontSize: "18px", fontWeight: "600", marginTop: "36px", marginBottom: "12px" }}>12. Contact</h2>
        <p>If you have any questions about these terms, contact us at: <a href="mailto:orapelengm239@gmail.com">orapelengm239@gmail.com</a></p>

      </div>
      <Footer />
    </>
  );
}

export default TermsOfService;