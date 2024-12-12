import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Vocatio - Terms of Service",
  description: "Terms of Service for Vocatio",
};

const TermsOfService = () => {
  return (
    <main className="text-secondary container mx-auto my-6 rounded-md p-6 shadow-xl">
      <h1 className="text-primary mb-2 text-2xl font-semibold">Terms of Service - Vocatio</h1>
      <p className="text-tertiary mb-6">Effective date: Tue 7 Nov 2023</p>

      <section className="mb-8">
        <h2 className="text-primary mb-3 text-xl font-semibold">1. Introduction</h2>
        <p className="text-secondary">
          Welcome to Vocatio (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or
          using our website at{" "}
          <a href="https://www.vocatio.cat/home" className="text-blue hover:underline">
            https://www.vocatio.cat/home
          </a>{" "}
          (the &quot;Service&quot;), you agree to be bound by these Terms of Service
          (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-primary mb-3 text-xl font-semibold">2. Use of the Service</h2>
        <p className="text-secondary mb-2">
          You may use the Service only for lawful purposes and in accordance with these Terms. You
          agree not to use the Service:
        </p>
        <ul className="text-secondary list-disc pl-6">
          <li>
            In any way that violates any applicable federal, state, local, or international law or
            regulation.
          </li>
          <li>
            For the purpose of exploiting, harming, or attempting to exploit or harm minors in any
            way.
          </li>
          <li>
            To transmit, or procure the sending of, any advertising or promotional material without
            our prior written consent.
          </li>
          <li>
            To impersonate or attempt to impersonate Vocatio, a Vocatio employee, another user, or
            any other person or entity.
          </li>
          <li>
            To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment
            of the Service, or which, as determined by us, may harm Vocatio or users of the Service
            or expose them to liability.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-primary mb-3 text-xl font-semibold">3. Account Registration</h2>
        <p className="text-secondary">
          To access certain features of the Service, you may be required to register for an account.
          You agree to provide accurate, current, and complete information during the registration
          process and to update such information to keep it accurate, current, and complete. You are
          responsible for safeguarding your password. You agree not to disclose your password to any
          third party and to take sole responsibility for any activities or actions under your
          account, whether or not you have authorized such activities or actions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-primary mb-3 text-xl font-semibold">4. Intellectual Property</h2>
        <p className="text-secondary">
          The Service and its entire contents, features, and functionality (including but not
          limited to all information, software, text, displays, images, video, and audio, and the
          design, selection, and arrangement thereof) are owned by Vocatio, its licensors, or other
          providers of such material and are protected by United States and international copyright,
          trademark, patent, trade secret, and other intellectual property or proprietary rights
          laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-primary mb-3 text-xl font-semibold">5. Termination</h2>
        <p className="text-secondary mb-2">
          We may terminate or suspend your access to all or part of the Service immediately, without
          prior notice or liability, for any reason whatsoever, including, without limitation, if
          you breach these Terms.
        </p>
        <p className="text-secondary">
          Upon termination, your right to use the Service will cease immediately. If you wish to
          terminate your account, you may simply discontinue using the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-primary mb-3 text-xl font-semibold">6. Limitation of Liability</h2>
        <p className="text-secondary">
          In no event shall Vocatio, nor its directors, employees, partners, agents, suppliers, or
          affiliates, be liable for any indirect, incidental, special, consequential, or punitive
          damages, including without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from (i) your use of or inability to use the Service; (ii)
          any unauthorized access to or use of our servers and/or any personal information stored
          therein; (iii) any interruption or cessation of transmission to or from the Service; (iv)
          any bugs, viruses, trojan horses, or the like that may be transmitted to or through our
          Service by any third party; and/or (v) any errors or omissions in any content or for any
          loss or damage incurred as a result of the use of any content posted, emailed,
          transmitted, or otherwise made available through the Service, whether based on warranty,
          contract, tort (including negligence), or any other legal theory, whether or not we have
          been informed of the possibility of such damage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-primary mb-3 text-xl font-semibold">7. Governing Law</h2>
        <p className="text-secondary mb-2">
          These Terms shall be governed and construed in accordance with the laws of the United
          States, without regard to its conflict of law provisions.
        </p>
        <p className="text-secondary">
          Our failure to enforce any right or provision of these Terms will not be considered a
          waiver of those rights. If any provision of these Terms is held to be invalid or
          unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          These Terms constitute the entire agreement between us regarding our Service, and
          supersede and replace any prior agreements we might have had between us regarding the
          Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-primary mb-3 text-xl font-semibold">8. Changes to Terms of Service</h2>
        <p className="text-secondary mb-2">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any
          time. If a revision is material, we will provide at least 30 days&apos; notice prior to
          any new terms taking effect. What constitutes a material change will be determined at our
          sole discretion.
        </p>
        <p className="text-secondary">
          By continuing to access or use our Service after any revisions become effective, you agree
          to be bound by the revised terms. If you do not agree to the new terms, please stop using
          the Service.
        </p>
      </section>

      <footer className="mt-8 text-center">
        <p className="text-tertiary">Last updated: Tue 23 Jul 2023</p>
      </footer>
    </main>
  );
};

export default TermsOfService;
