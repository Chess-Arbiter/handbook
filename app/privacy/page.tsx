import styles from "./privacy.module.css";

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>
        At Google Playmarket, we take your privacy very seriously. This Privacy
        Policy outlines the types of information we collect, how we use that
        information, and how we protect your privacy when you use our app.
      </p>
      <h2>Information We Collect</h2>
      <p>
        When you use our app, we may collect the following types of information:
      </p>
      <ul>
        <li>
          Device Information: We may collect information about the device you
          use to access our app, including the type of device, its operating
          system, and other technical information.
        </li>
        <li>
          Usage Information: We may collect information about how you use our
          app, including the pages you visit, the features you use, and other
          usage data.
        </li>
      </ul>
      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect to provide you with the best possible
        experience when using our app. This includes:
      </p>
      <ul>
        <li>
          Providing and improving our services: We use your information to
          operate and improve our app and to develop new features and services.
        </li>
        <li>
          Personalizing your experience: We may use your information to
          customize your experience, such as by recommending content or features
          that may be of interest to you.
        </li>
        <li>
          Communicating with you: We may use your information to send you
          updates about our app or to respond to your inquiries and requests.
        </li>
        <li>
          Advertising and marketing: We may use your information to deliver
          targeted advertising and promotional messages to you, both within our
          app and elsewhere.
        </li>
      </ul>
      <h2>Information Sharing</h2>
      <p>
        We may share your information with third-party service providers that
        help us to provide our app and services to you. We may also share your
        information with third parties for advertising and marketing purposes.
        We do not sell your personal information to third parties.
      </p>
      <h2>Data Retention</h2>
      <p>
        We retain your personal information for as long as necessary to provide
        you with our app and services and to comply with legal obligations.
      </p>
      <h2>Security</h2>
      <p>
        We take reasonable measures to protect your information from
        unauthorized access, use, or disclosure. However, no system can be
        completely secure, and we cannot guarantee the security of your
        information.
      </p>
      <h2>Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <a href="mailto:chessarbiter.info@gmail.com">
          {" "}
          chessarbiter.info@gmail.com{" "}
        </a>
        .
      </p>
      <p>Effective Date: February 19, 2023.</p>
    </div>
  );
}
