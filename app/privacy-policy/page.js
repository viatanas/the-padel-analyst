import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <Navbar />
      <main className="w-full max-w-3xl mt-52 flex flex-col items-center mx-auto px-6 md:px-0">
        <div className="flex flex-col items-center w-full h-auto">
          <h1 className="font-gelica text-[52px] font-normal text-center leading-[120%] tracking-[-0.04em] text-white">
            Privacy Policy
          </h1>
          <span className="mt-4 md:mt-6 font-geist font-medium text-center text-base md:text-base text-white/60 leading-relaxed">
            Last updated: August 16, 2025
          </span>
        </div>

        <div className="w-full max-w-[900px] flex flex-col h-auto mt-40 pb-40">
          <h2 className="font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white">
            What does this Privacy Policy cover?
          </h2>
          <p className="mt-4 font-geist font-medium text-base text-white/70 leading-relaxed">
            Point Rewind respects your privacy and is committed to protecting
            your personal data. We want to be transparent with you about how we
            collect and use your personal data in making available our website
            and services (together, the “Site” and “Services”) and to explain
            your privacy rights and how the law protects you.
          </p>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            This Privacy Policy is designed to describe:
          </p>
          <ul className="mt-4 flex flex-col space-y-3 list-disc text-white/90 list-inside px-6">
            <li>
              <Link
                href="#who-we-are"
                className="font-geist font-medium text-base underline leading-relaxed hover:text-white"
              >
                Who we are and how to contact us.
              </Link>
            </li>
            <li>
              <Link
                href="#your-rights"
                className="font-geist font-medium text-base underline leading-relaxed hover:text-white"
              >
                Your rights relating to your personal data.
              </Link>
            </li>
            <li>
              <Link
                href="#marketing-preferences"
                className="font-geist font-medium text-base underline leading-relaxed hover:text-white"
              >
                Marketing communications preferences.
              </Link>
            </li>
            <li>
              <Link
                href="#personal-data-we-collect"
                className="font-geist font-medium text-base underline leading-relaxed hover:text-white"
              >
                What personal data we collect.
              </Link>
            </li>
            <li>
              <Link
                href="#how-we-use-data"
                className="font-geist font-medium text-base underline leading-relaxed hover:text-white"
              >
                How we use your personal data and why.
              </Link>
            </li>
            <li>
              <Link
                href="#if-no-data-provided"
                className="font-geist font-medium text-base underline leading-relaxed hover:text-white"
              >
                What happens when you do not provide necessary personal data.
              </Link>
            </li>
            <li>
              <Link
                href="#who-we-share-data-with"
                className="font-geist font-medium text-base underline leading-relaxed hover:text-white"
              >
                Who we share your personal data with.
              </Link>
            </li>
            <li>
              <Link
                href="#data-security"
                className="font-geist font-medium text-base underline leading-relaxed hover:text-white"
              >
                How we keep your personal data secure.
              </Link>
            </li>
            <li>
              <Link
                href="#data-retention"
                className="font-geist font-medium text-base underline leading-relaxed hover:text-white"
              >
                How long we store your personal data.
              </Link>
            </li>
            <li>
              <Link
                href="#cookies"
                className="font-geist font-medium text-base underline leading-relaxed hover:text-white"
              >
                Cookies and similar technologies.
              </Link>
            </li>
          </ul>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            This Privacy Policy aims to give you information on how Point Rewind
            collects and processes your personal data through your use of the
            Site, including any data you may provide through the Site.
          </p>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            We will post any modifications or changes to this Privacy Policy on
            this page.
          </p>
          <div className="w-full h-px bg-white/20 mt-16"></div>
          <h2
            id="who-we-are"
            className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white"
          >
            Who we are and how to contact us
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            {`Point Rewind (“Point Rewind”, “we”, “us” or “our”) is the
            ‘controller’ of your personal data (for the purposes of data
            protection laws). You can contact us by emailing: contact@pointrewind.com`}
          </p>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            If you are based in the European Economic Area (EEA), you may
            contact our EEA representative at: contact@pointrewind.com .
          </p>
          <h2
            id="your-rights"
            className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white"
          >
            Your rights relating to your personal data
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            By law you have the right to:
          </p>
          <ul className="mt-4 flex flex-col space-y-3 list-disc text-white/70 list-inside px-6">
            <li className="font-geist font-medium text-base  leading-relaxed">
              Request access to your personal data. This enables you to receive
              a copy of the personal data we hold about you, and to check that
              we are lawfully processing it.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Request correction of the personal data that we hold about you.
              This enables you to have any incomplete or inaccurate information
              we hold about you corrected.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Request erasure of your personal data. This enables you to ask us
              to delete or remove your personal data where there is no good
              reason for us continuing to process it.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Object to processing of your personal data. This enables you to
              object to our processing of your personal data in a specific
              way(including for marketing purposes).
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Request the restriction of processing of your personal data. This
              enables you to ask us to suspend the processing of your personal
              data altogether.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Request the transfer of your personal data. We will provide to
              you, ora third party you have chosen, your personal data in a
              structured, commonly used, machine-readable format. Note that this
              right only applies to automated information which you initially
              provided for us to use or where we used the information to perform
              a contract with you.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Withdraw consent. This right only exists where we are relying on
              consent to process your personal data. If you withdraw your
              consent, we may not be able to provide you with access to the
              certain specific functionalities of our Site. We will advise you
              if this is the case at the time you withdraw your consent.
            </li>
          </ul>

          <h2
            id="your-rights"
            className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white"
          >
            How to exercise your rights
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            If you want to exercise any of the rights described above, please
            contact us at contact@pointrewind.com . We may need to request
            specific information from you to verify your identity. We aim to
            respond to all legitimate requests within one month.
          </p>
          <h2 className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white">
            Complaints
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            If you have concerns about how we handle your personal data, you can
            contact us at the same email address. If you are not satisfied with
            our response, you also have the right to lodge a complaint with your
            local data protection supervisory authority.
          </p>
          <h2
            id="marketing-preferences"
            className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white"
          >
            Marketing communications preferences
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            You can opt out of marketing communications at any time by clicking
            the unsubscribe link in our emails or by contacting us at
            contact@pointrewind.com . We do not sell your information to third
            parties.
          </p>
          <h2
            id="personal-data-we-collect"
            className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white"
          >
            What personal data we collect
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            We may collect the following personal data from you:
          </p>
          <ul className="mt-4 flex flex-col space-y-3 list-disc text-white/70 list-inside px-6">
            <li className="font-geist font-medium text-base  leading-relaxed">
              Account and contact details: Name, email address, billing
              information.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Uploaded content: Match footage or training videos you submit for
              review.{" "}
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Service usage data: How you interact with our Site, device/browser
              details, IP address.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Communications: Messages you send us, including customer support
              requests.
            </li>
          </ul>

          <h2
            id="how-we-use-data"
            className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white"
          >
            How we use your personal data and why
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            We use your personal data to deliver our services by reviewing your
            uploaded footage and managing your account; to process payments
            securely; to communicate with you regarding your submissions,
            questions, or support requests; and to improve our Site and Services
            using anonymised usage data. We may also process personal data where
            required to comply with applicable laws and regulations. Our legal
            bases for processing include contractual necessity, legitimate
            interests, compliance with law, and, where relevant, your consent.
          </p>

          <h2
            id="if-no-data-provided"
            className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white"
          >
            What happens when you do not provide necessary personal data
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            If you fail to provide data necessary for us to deliver our services
            (e.g., email address or uploaded footage), we may be unable to
            provide the service you requested.
          </p>
          <h2
            id="who-we-share-data-with"
            className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white"
          >
            Who we share your personal data with
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            We only share data where necessary:
          </p>
          <ul className="mt-4 flex flex-col space-y-3 list-disc text-white/70 list-inside px-6">
            <li className="font-geist font-medium text-base  leading-relaxed">
              Coaches: The coach assigned to your review will have access to
              your uploaded footage.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Service providers: Such as payment processors and secure cloud
              hosting providers.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Regulators or authorities: If required by law.
            </li>
          </ul>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            Some providers may be outside the UK or EEA. Where this occurs, we
            ensure adequate safeguards are in place (e.g., Standard Contractual
            Clauses).
          </p>

          <h2
            id="data-security"
            className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white"
          >
            How we keep your personal data secure
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            We use appropriate technical and organisational measures, including:
          </p>
          <ul className="mt-4 flex flex-col space-y-3 list-disc text-white/70 list-inside px-6">
            <li className="font-geist font-medium text-base  leading-relaxed">
              All data (including video footage) is stored on secure, encrypted
              servers located in the UK and/or the European Union. Where service
              providers are based outside of these regions, we apply
              GDPR-compliant safeguards such as Standard Contractual Clauses.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Encrypted storage of uploaded videos.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              SSL/TLS encryption during data transfer.
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Limited access: only authorised coaches and staff can access
              footage.{" "}
            </li>
            <li className="font-geist font-medium text-base  leading-relaxed">
              Data breach protocols in line with GDPR/UK GDPR obligations.
            </li>
          </ul>

          <h2
            id="data-retention"
            className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white"
          >
            How long we store your personal data
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            We will only retain your personal data for so long as we reasonably
            need to use it for the purposes set out in the Section titled “How
            we use your personal data and why”, unless a longer retention period
            is required by law (for example, for regulatory purposes).
          </p>

          <h2
            id="cookies"
            className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white"
          >
            Cookies and third party sites
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            We use cookies to operate our Site, collect analytics, and remember
            your preferences. You can disable cookies in your browser settings,
            though some features may not work properly.
          </p>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            Our Site may link to third-party websites. We are not responsible
            for their privacy practices.
          </p>

          <h2 className="mt-16 font-gelica text-[28px] font-normal leading-[120%] tracking-[-0.04em] text-white">
            Updates to this Privacy Policy
          </h2>
          <p className="mt-6 font-geist font-medium text-base text-white/70 leading-relaxed">
            We may update this Privacy Policy from time to time. All changes
            will be posted here with the updated date shown above.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
