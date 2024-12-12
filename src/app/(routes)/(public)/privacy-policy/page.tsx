import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Vocatio - Privacy Policy",
  description:
    "Prepare for job interviews and optimize your application documents in one click with Gemini AI",
};

const PrivacyPolicy = () => {
  return (
    <main className="bg-weiss container mx-auto my-6 rounded-md p-6 text-secondary shadow-xl">
      <h1 className="mb-2 text-2xl font-semibold text-primary">Privacy Policy - Vocatio</h1>
      <p className="text-tertiary mb-6">Effective date: Tue 7 Nov 2023</p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-primary">1. Introduction</h2>
        <p className="text-secondary">
          Vocatio (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website
          accessible from{" "}
          <a href="https://www.vocatio.cat/home" className="text-blue hover:underline">
            https://www.vocatio.cat/home
          </a>{" "}
          (the &quot;Service&quot;). We are committed to protecting the privacy of our users
          (&quot;user&quot;, &quot;you&quot;, or &quot;your&quot;). This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you visit our Service. By
          using the Service, you agree to the collection and use of information in accordance with
          this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-primary">
          2. Information Collection and Use
        </h2>
        <p className="text-secondary">
          We collect various types of information for various purposes to provide and improve our
          Service to you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-primary">3. Types of Data Collected</h2>
        <h3 className="mb-2 text-lg font-semibold text-primary">Personal Data</h3>
        <p className="mb-2 text-secondary">
          While using our Service, we may ask you to provide us with certain personally identifiable
          information that can be used to contact or identify you (&quot;Personal Data&quot;). This
          may include, but is not limited to:
        </p>
        <ul className="mb-4 list-disc pl-6 text-secondary">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Cookies and Usage Data</li>
        </ul>
        <p className="text-secondary">
          We use your Personal Data to provide and improve the Service. By using the Service, you
          agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="mb-2 text-lg font-semibold text-primary">Usage Data</h3>
        <p className="text-secondary">
          We may also collect information on how the Service is accessed and used (&quot;Usage
          Data&quot;). This Usage Data may include information such as your computer&apos;s Internet
          Protocol address (e.g., IP address, browser type, browser version, the pages of our
          Service that you visit, the time and date of your visit, the time spent on those pages,
          and other diagnostic data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-primary">4. Data Use Compliance</h2>
        <p className="mb-2 text-secondary">
          Our Service includes a Google Chrome extension that interacts with LinkedIn to scan and
          store vacancies. In full compliance with Google&apos;s User Data Privacy policy,
          particularly the Limited Use of User Data policy, we ensure the following:
        </p>
        <ul className="list-disc pl-6 text-secondary">
          <li>
            We only collect data that directly supports the extension&apos;s single purpose of
            scanning and storing job vacancies and generating tailored CVs.
          </li>
          <li>User consent is obtained before any data collection occurs.</li>
          <li>
            A prominent disclosure of our data collection practices is provided in our Privacy
            Policy and within the Chrome Web Store listing.
          </li>
          <li>
            Options for user data opt-out and an &quot;offline mode&quot; are available within the
            extension&apos;s settings.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-primary">5. Data Collection Consent</h2>
        <p className="mb-2 text-secondary">
          Before data collection begins, we will inform you through a clear and visible notice
          within the extension, detailing what data is being collected and how it will be used. You
          will have the opportunity to consent to this collection or opt-out entirely.
        </p>
        <p className="text-secondary">
          By utilizing our Service, you acknowledge that you have read these terms and consent to
          the privacy practices described herein.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-primary">6. Data Handling and Security</h2>
        <p className="mb-2 text-secondary">
          The data collected via the Chrome extension, our web application, and any associated
          services, including authentication through Next Auth and database services through
          Supabase, are subject to rigorous security measures to ensure the confidentiality,
          integrity, and availability of your personal information. Supabase&apos;s privacy policy
          can be found{" "}
          <a
            href="https://supabase.com/privacy"
            className="text-blue hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p className="text-secondary">
          We implement a variety of security measures, including encryption and authentication
          tools, to maintain the safety of your personal data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-primary">7. Hosting and Data Transfer</h2>
        <p className="mb-2 text-secondary">
          Our Service is hosted by Vercel, which provides us with the online platform that allows us
          to offer our Service to you. Your data may be stored through Vercel&apos;s data storage,
          databases, and general applications. They store your data on secure servers behind a
          firewall.
        </p>
        <p className="text-secondary">
          Vercel&apos;s privacy policy can be found{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            className="text-blue hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-primary">
          8. Compliance with Google&apos;s User Data Policy
        </h2>
        <p className="mb-2 text-secondary">
          We adhere to all the requirements set forth by Google&apos;s User Data Policy, ensuring
          that the collection and use of your data via our Google Chrome extension are transparent,
          secure, and within the scope of the extension&apos;s purpose.
        </p>
        <p className="text-secondary">
          For any additional questions or concerns about our privacy practices or the handling of
          your personal data, please contact us at{" "}
          <a href="mailto:yegorarndt@gmail.com" className="text-blue hover:underline">
            yegorarndt@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-primary">
          9. Changes to This Privacy Policy
        </h2>
        <p className="text-secondary">
          We reserve the right to modify this privacy policy at any time, so please review it
          frequently. Changes and clarifications will take effect immediately upon their posting on
          the website. If we make material changes to this policy, we will notify you here that it
          has been updated, so that you are aware of what information we collect, how we use it, and
          under what circumstances, if any, we use and/or disclose it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-primary">10. Consent Withdrawal</h2>
        <p className="text-secondary">
          You have the right to withdraw your consent at any time. To do so, please adjust your
          settings in the extension&apos;s settings or contact us directly.
        </p>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-tertiary">Last updated: Tue 23 Jul 2023</p>
      </footer>
    </main>
  );
};

export default PrivacyPolicy;
