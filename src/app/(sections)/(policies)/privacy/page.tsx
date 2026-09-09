/*
Privacy Policy
*/

// Imports
import AnimationContainer from "@/components/ui/animation-container"
import { AppBadge } from "@/components/ui/app-badge"
import type { Metadata } from "next"

// Metadata
export const metadata: Metadata = {
  title: "Privacy Policy — Orbbt",
  description:
    "Learn how Orbbt collects, uses, stores, shares, and protects information across the web application, browser extension, and mobile applications.",
}

export default function PrivacyPage() {
  return (
    <section className="relative pt-24 pb-20 lg:pb-28">
      <AnimationContainer
        delay={0.1}
        className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center w-full pb-12">
          <AppBadge className="mb-6">Policy</AppBadge>

          <h1 className="text-center text-3xl md:text-5xl !leading-[1.1] font-bold font-heading text-foreground">
            Privacy Policy
          </h1>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Last Updated: September 7, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Introduction */}
          <p className="text-muted-foreground leading-relaxed">
            This Privacy Policy explains how Orbbt (“Orbbt,” “we,” “us,” or
            “our”) collects, uses, stores, shares, and protects information when
            you use our website, web application, browser extension, and mobile
            applications (collectively, the “Services”).
          </p>

          <p className="text-muted-foreground leading-relaxed">
            This Privacy Policy applies to all Orbbt Services. Certain sections
            below apply only to a specific product, such as the browser
            extension or mobile application.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            By using the Services, you acknowledge the data practices described
            in this Privacy Policy.
          </p>

          {/* Information We Collect */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Information We Collect
          </h2>

          <h3 className="text-lg font-semibold text-foreground mt-6">
            Account Information
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            When you create an Orbbt Account, we may collect information such as
            your name, email address, profile picture, account preferences, and
            other information necessary to create and maintain your Account.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            When you sign in with Google, we receive basic profile information
            made available through Google authentication, such as your name,
            email address, and profile picture. We use this information to
            create and authenticate your Orbbt Account. We do not access, read,
            request, or store the contents of your Gmail messages.
          </p>

          {/* Job Data */}
          <h3 className="text-lg font-semibold text-foreground mt-6">
            Job Search and User-Provided Data
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            We collect and store information that you choose to create, enter,
            save, or upload through Orbbt. For purposes of this Privacy Policy,
            “Job Data” may include job applications, job titles, companies,
            application statuses, job descriptions, locations, salaries,
            deadlines, job posting links, notes, professional contacts, company
            information, resumes, and other job-search information that you
            choose to store in Orbbt.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Job Data may be created through the Orbbt web application, browser
            extension, or mobile application and may be synchronized across
            your devices.
          </p>

          {/* Browser Extension */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Orbbt Browser Extension
          </h2>

          <h3 className="text-lg font-semibold text-foreground mt-6">
            Website Content
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            The Orbbt browser extension operates on supported LinkedIn and
            Indeed pages to help you save job-search information to your Orbbt
            Account. On supported pages, the extension may access visible page
            content that is necessary to provide its features.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Depending on the page and feature you use, this may include
            information such as a job title, company name, job description,
            location, salary information, job posting URL, company information,
            and professional contact or profile information displayed on the
            page.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            This information is accessed for the purpose of allowing you to
            review and save relevant job, company, or contact information to
            Orbbt. Orbbt does not collect unrelated browsing history and does
            not use browsing activity or website content for advertising,
            behavioral profiling, or resale.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6">
            Extension Authentication and Local Storage
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            The Orbbt browser extension stores limited authentication
            information in browser extension storage, including access and
            refresh tokens, so that you can remain signed in to your Orbbt
            Account. These credentials are used only to authenticate requests
            between the extension and Orbbt.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            The extension may also locally cache limited account information,
            such as your total number of saved jobs and jobs saved today, to
            display the extension interface efficiently.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Authentication credentials are not displayed publicly, used for
            advertising, or shared with data brokers.
          </p>

          {/* Mobile */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Orbbt Mobile Applications
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            The Orbbt mobile applications provide access to your Orbbt Account
            and Job Data while using a supported mobile device. Information you
            create or update through the mobile application may be synchronized
            with the Orbbt web application and browser extension.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6">
            Push Notifications
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            If you enable push notifications, the mobile application may
            generate and transmit a device notification token so that Orbbt can
            send notifications you have enabled, such as job deadline
            reminders. We use notification tokens only to provide notification
            functionality and related service communications.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            You can disable push notifications at any time through your device
            settings or applicable Orbbt notification settings.
          </p>

          {/* Technical Data */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Technical and Security Information
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            We may collect limited technical information necessary to operate,
            secure, troubleshoot, and improve the Services. Depending on the
            product you use, this may include browser type and version,
            operating system information, application or extension version,
            extension installation or session identifiers, IP address,
            authentication timestamps, last activity timestamps, diagnostic
            information, and server logs.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            We do not use this technical information to create advertising
            profiles or sell information about your browsing activity.
          </p>

          {/* AI */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            AI-Powered Features
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Orbbt may offer AI-powered features, such as resume and job
            matching, that process information you choose to provide, including
            resume content and job descriptions, to generate strengths, gaps,
            recommendations, or other requested analysis.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Information submitted to an AI-powered feature is used to provide
            the feature requested by you. We do not sell your Job Data or use
            it for personalized advertising. Where third-party AI processing
            services are used, information is shared only as necessary to
            provide the requested AI functionality and is subject to applicable
            privacy and security safeguards.
          </p>

          {/* Payments */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Payments and Premium Subscriptions
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            If you purchase an Orbbt Pro subscription, Payments and subscription billing are handled by Paddle, which acts as the Merchant of Record for purchases of Orbbt Pro. Orbbt does
            not directly collect or store your full payment card number or
            payment credentials.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            We may receive information from Paddle related to your purchase,
            such as subscription status, transaction identifiers, billing
            status, plan information, and other information required to manage
            your subscription.
          </p>

          {/* How We Use Data */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            How We Use Your Information
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            We use information collected through the Services to:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>Create, authenticate, secure, and maintain your Account.</li>
            <li>
              Store and synchronize your Job Data across Orbbt products and
              devices.
            </li>
            <li>
              Allow the browser extension to save job, company, and contact
              information that you choose to save.
            </li>
            <li>
              Provide job tracking, contact management, company management,
              reminders, analytics, and other Orbbt functionality.
            </li>
            <li>Provide AI-powered features that you request.</li>
            <li>Process and manage Premium subscriptions.</li>
            <li>
              Deliver transactional emails, reminders, push notifications, and
              other service communications that you enable or request.
            </li>
            <li>
              Provide customer support and respond to questions or requests.
            </li>
            <li>
              Detect, investigate, and prevent fraud, abuse, unauthorized
              access, and technical or security issues.
            </li>
            <li>
              Monitor and improve the reliability and performance of the
              Services.
            </li>
            <li>Comply with applicable legal obligations.</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed">
            We do not sell your personal information or Job Data, and we do not
            use your Job Data for personalized or interest-based advertising.
          </p>

          {/* Service Providers */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Third-Party Service Providers
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            We use third-party service providers to operate specific parts of
            the Services. Depending on the features you use, these providers
            may process limited information on our behalf only as necessary to
            provide their respective services.
          </p>

          <ul className="list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Supabase</strong> — database,
              authentication, and backend infrastructure.
            </li>

            <li>
              <strong className="text-foreground">Vercel</strong> — web hosting
              and server/API infrastructure.
            </li>

            <li>
              <strong className="text-foreground">Google</strong> — Google
              account authentication and related platform services.
            </li>

            <li>
              <strong className="text-foreground">Firebase</strong> — mobile
              push notification infrastructure where notifications are enabled.
            </li>

            <li>
              <strong className="text-foreground">Resend</strong> —
              transactional email and email reminder delivery.
            </li>

            <li>
              <strong className="text-foreground">Paddle</strong> — payment,
              billing, subscription, tax, and transaction processing.
            </li>
          </ul>

          <p className="text-muted-foreground leading-relaxed">
            We may also disclose information to legal or regulatory authorities
            where required by applicable law, or as necessary to investigate
            and prevent fraud, abuse, security threats, or violations of our
            terms.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            If Orbbt is involved in a merger, acquisition, financing,
            reorganization, or sale of assets, information may be transferred
            as part of that transaction subject to applicable legal
            requirements.
          </p>

          {/* Data Sync */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Data Syncing Across Orbbt Products
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Orbbt is designed to synchronize your Job Data across the web
            application, browser extension, and mobile applications. When you
            save, update, or retrieve information, data may be securely
            transmitted between your device, Orbbt&apos;s servers, and the
            infrastructure providers necessary to provide the requested
            functionality.
          </p>

          {/* Security */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            How We Store and Protect Your Data
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Account information and Job Data are stored using infrastructure
            providers such as Supabase. We use reasonable administrative,
            technical, and organizational security measures designed to protect
            information against unauthorized access, alteration, disclosure,
            or destruction.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Data transmitted between supported Orbbt applications and our
            servers is protected using encrypted HTTPS connections. Sensitive
            authentication credentials used by the browser extension are
            handled separately from normal application data, and server-side
            authentication token values are stored using secure token-handling
            practices.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            No method of electronic transmission or storage is completely
            secure. While we take reasonable measures to protect your
            information, we cannot guarantee absolute security.
          </p>

          {/* Chrome Limited Use */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Chrome Web Store Limited Use
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Information accessed or collected by the Orbbt browser extension is
            used only as necessary to provide or improve the extension&apos;s
            disclosed job-search management functionality, maintain and secure
            those features, and support their reliability.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            We do not use or transfer extension user data for personalized,
            retargeted, or interest-based advertising, and we do not sell or
            transfer extension user data to advertising platforms, data
            brokers, or information resellers.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            We do not permit humans to read extension user data except where
            you provide explicit consent for a specific purpose such as
            customer support, where access is necessary for security or abuse
            investigation, where required by law, or where data has been
            aggregated and anonymized for legitimate internal operations.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            The use of information received from Google APIs will adhere to the
            Chrome Web Store User Data Policy, including the Limited Use
            requirements.
          </p>

          {/* Rights */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Your Rights and Choices
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Depending on where you live, you may have rights regarding your
            personal information, including the right to request access,
            correction, deletion, restriction, portability, or objection to
            certain processing.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            You may update or delete Job Data through available Orbbt features.
            You may also request access to or deletion of your personal
            information by contacting us.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            You may disable optional notifications through Orbbt or your device
            settings, revoke browser extension sessions where supported, or
            uninstall the browser extension or mobile application at any time.
          </p>

          {/* Account deletion */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Account and Data Deletion
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            You may request deletion of your Orbbt Account and associated
            personal information. When an Account is deleted, we will delete or
            anonymize associated Job Data and personal information from our
            active systems, except for information that we are required or
            permitted to retain for legal, security, fraud-prevention,
            financial, or other legitimate purposes.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Certain information may remain temporarily in encrypted backups or
            system logs until those records are automatically overwritten or
            deleted in accordance with our normal retention processes.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            To request access, correction, export, or deletion of your data,
            contact us at{" "}
            <a
              href="mailto:support@orbbt.app"
              className="text-primary underline"
            >
              support@orbbt.app
            </a>
            .
          </p>

          {/* Retention */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Data Retention
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            We generally retain your Account information and Job Data for as
            long as your Account remains active or as necessary to provide the
            Services.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Authentication sessions, technical logs, security records, payment
            records, and other operational information may be retained for
            shorter or longer periods where reasonably necessary for security,
            fraud prevention, troubleshooting, legal compliance, financial
            obligations, dispute resolution, or enforcement of our agreements.
          </p>

          {/* Children */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Children&apos;s Privacy
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            The Services are not directed to children under the age of 16, and
            we do not knowingly collect personal information from children
            under 16. If we become aware that we have collected personal
            information from a child in violation of applicable law, we will
            take reasonable steps to delete it.
          </p>

          {/* International */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            International Data Transfers
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Orbbt and our service providers may process or store information in
            countries other than the country in which you live. Where required
            by applicable law, we take reasonable steps to ensure appropriate
            safeguards are in place for international transfers of personal
            information.
          </p>

          {/* Changes */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Changes to This Privacy Policy
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time to reflect
            changes to the Services, our data practices, legal requirements, or
            third-party services.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            When we update this Privacy Policy, we will revise the “Last
            Updated” date shown at the top of this page. Where required or
            appropriate, we may also provide additional notice through the
            Services or by email.
          </p>

          {/* Contact */}
          <h2 className="text-xl font-semibold text-foreground mt-8">
            Contact Us
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            If you have questions, concerns, or requests relating to this
            Privacy Policy or Orbbt&apos;s handling of your information, contact
            us at{" "}
            <a
              href="mailto:support@orbbt.app"
              className="text-primary underline"
            >
              support@orbbt.app
            </a>
            .
          </p>
        </div>
      </AnimationContainer>
    </section>
  )
}
