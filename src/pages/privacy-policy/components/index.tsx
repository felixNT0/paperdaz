import { motion } from "framer-motion";
import TitleHeader from "../../../components/TItleHeader";

function PrivacyPolicyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <TitleHeader
        title={"Privacy Policy"}
        subTitle={"Home - Privacy Policy"}
      />
      <div className="mx-40 max-lg:mx-20 max-md:mx-16 max-sm:mx-7 max-xsm:mx-5 mb-10 text-[#565656]">
        <p className="text-[#565656] my-10">
          Your online privacy is important to “Paperdaz” The purpose of this
          privacy statement is to provide you with information about our
          practices with respect to the personal data that we collect from users
          of our website (hereafter referred to as "Site") and the services that
          are made available through the Site. Please email us at
          hello@paperdaz.com if you have any questions concerning our privacy
          statement, our data collection policies, how we handle user
          information, or if you want to immediately report a security breach.
        </p>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">What this policy is for:</h3>
          <div className="w-44 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-5">
            The General Data Protection Regulation (GDPR) applies to the whole
            of the United States and European union (EU) companies holding data
            of United States and European union (EU) citizens. We value your
            privacy and want to be accountable to you, and transparent with you,
            in the way that we collect and use your personal information. We
            also want you to know your rights in relation to your personal
            information.
          </p>
          <p className="mb-5">
            This Privacy Policy tells you what to expect when we collect and use
            your personal information. We have tried to make it simple and easy
            for you to read and find the information that is most relevant to
            you.
          </p>
          <p className="mb-5">
            This Privacy Policy describes how this personal data must be
            collected, handled and stored to meet our data protection standards
            and to comply with the law.
          </p>
          <p className="mb-5">
            This Privacy Policy ("Policy") together with our Terms of Use
            (“Terms”) and any other documents referred to in it, governs the
            basis of our collection, storage and use of personal information
            collected by Paperdaz. We are always looking to improve the
            information we provide to our users so if you have any feedback on
            this privacy policy, please let us know using our contact details
            above or by emailing us as at hello@paperdaz.com 
          </p>
          <p className="mb-5">
            “Paperdaz” (“We” / “Us” / “Our”) is committed to protecting our
            visitors’ privacy and personal information. We will only use the
            information that we collect about you in accordance with the
            California online privacy policy Act or “CalOPPa” (and all other
            laws relating to the use of your Personal Data, both now and in the
            future). This includes information that is submitted voluntarily by
            you through a form on our website or that is gathered automatically
            as you visit different parts of this website.
          </p>
          <p className="mb-5">
            This page aims to help users understand what information might be
            collected from you when visiting and using our site, and how we
            protect such information. The reason for this is that, in keeping
            with the “CalOPPa” (and all other laws relating to the use of your
            Personal Data, both now and in the future), we are the “data
            controller”, meaning that we are responsible for deciding how your
            Personal Data is used and more importantly, for keeping your
            Personal Data safe and only using it for legitimate reasons.
          </p>
          <p className="mb-5">
            We are committed to protecting your privacy and will take all steps
            necessary to comply with our legal obligations when using your
            Personal Data so please read through this document carefully to
            understand the ways in which we safeguard your personal data.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">Consent</h3>
          <div className="w-[4.5rem] h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <p className="mb-5 text-[#565656]">
          By using the “Paperdaz.com” site, you agree to the terms of this
          privacy policy. Whenever you submit information via our website, you
          consent to the collection, use, and disclosure of that information in
          accordance with this privacy policy. If you do not agree with any
          point on this policy, please do not use our Services or give us your
          information. This policy applies to all visitors, users and registered
          members.
        </p>
        <div className="text-[#565656] ">
          <p className="flex gap-1 text-primary font-bold mt-14 mb-10">
            <span className="mr-3">1.</span>
            What Information we collect
          </p>
          <p className="mb-5">
            Paperdaz actively collects information from its visitors directly
            from you: create an online account, create a search, sign up to our
            newsletter, give a rating or review, take a survey, fill out an
            online form, enter a promotion or engage with us. Some information
            you submit may be personally identifiable information that can be
            uniquely identified with you such as full name, address or location,
            email address, phone number, etc. Some areas of the Site may require
            you to submit information in order for you to benefit from a wide
            range of exclusive features (such as email alerts or information
            requests). You will be informed at each information collection point
            on what information is required and optional. We collect the
            following information from you and about you:
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Contact Information</span> - We
            may ask about your personal information such as name, address or
            location, telephone or mobile number, or email address.
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Account Login Information</span>{" "}
            - We will require you to provide information to set up an account
            with us.
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Demographic Information</span> -
            We may collect demographic information such as your gender, age,
            ethnicity and postcode if and when you fill out an online form or a
            survey.
          </p>
          <p className="mb-5">
            <span className="font-bold">
              &bull; Information You Share and Submit 
            </span>
            - We may collect information that you post either publicly or on a
            channel/platform we provide (e.g. forum, comment section, survey
            form and social media) for sharing among users.
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Log Files</span> - As is true of
            most websites, we gather certain information automatically and store
            it in log files. This information includes IP addresses, browser
            type, internet service provider (ISP), referring/exit pages,
            operating system, date/time stamp, and clickstream data. We use this
            information to maintain and improve the performance of the Services.
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Analytics</span> - We use
            analytics services (including, but not limited to, Google Analytics)
            to help analyze how users use the Site. Analytics services use
            Cookies to collect information such as how often users visit the
            Site and we use the information to improve our Site and Services.
            The analytics services' ability to use and share information
            collected by them is restricted by their terms of use and privacy
            policy, which you should refer to for more information about how
            these entities use this information.
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Location Information</span> - If
            you have enabled location services on your mobile device, we may
            collect your location information to improve the Services we offer.
            This enables us to provide location-based services. If you wish to
            change our access or permissions, you may do so in your device’s
            settings.
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Cookies</span> - “Cookies” are
            small pieces of information (text files) that a website sends to
            your computer’s hard drive while you are viewing the website. These
            text files can be used by websites to make the users experience more
            efficient. The law states that we can store these cookies on your
            device if they are strictly necessary for the operation of this
            site. For all other types of cookies, we need your permission. To
            that end, this site uses different types of cookies. Some cookies
            are placed by third party services that appear on our pages. We and
            some third parties may use both session Cookies (which expire once
            you close your web browser) and persistent Cookies (which stay on
            your computer until you delete them) to provide you with a more
            personal and interactive experience on our Services and to market
            the Services. Marketing cookies are used to track visitors across
            websites. The intention is to display ads that are relevant and
            engaging for the individual user and thereby more valuable for
            publishers and third-party advertisers. This tracking is done on an
            anonymous basis and, while not an exhaustive list, some of the
            companies we work with are Google, AppNexus, Criteo, Rubicon,
            Pubmatic and DistrictM. 
          </p>
        </div>
        <p className="flex gap-1 text-primary font-bold mt-14 mb-10">
          <span className="mr-3">2.</span>
          Use of Your Personal information
        </p>
        <div className="text-[#565656] ">
          <p className="mb-5">
            In general, personal information you submit to us is used either to
            respond to requests that you make, aid us in serving you better, or
            market our Services. We use your personal information in the
            following ways:
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            Operate, maintain, and improve our site(s) services;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            Respond to comments and questions and provide customer service;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            Develop, improve and advertising our podcast Services;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            Fulfill and manage our service, payments, and other transactions
            related to the Application;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            Identify you as a user in our system;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            Resolve disputes and troubleshoot problems;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            Assist law enforcement and respond to subpoena;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            Generate a personal profile about you to make future visits to the
            Application more personalized;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            Prevent fraudulent transactions, monitor against theft, and protect
            against criminal activity.
          </p>
          <p className="my-5">
            Your personal information may be kept and processed on servers in
            the United States and Europe. We may also create anonymous data
            records from your personal information by completely excluding
            information (such as your name) that makes the data personally
            identifiable to you. We use this anonymous data to analyze request
            and usage patterns so that we may enhance the content of our
            Services and improve Site functionality. We reserve the right to use
            anonymous data for any purpose and disclose anonymous data to third
            parties at our sole discretion.
          </p>
          <p className="my-5">
            We may receive testimonials and comments from users who have had
            positive experiences with our Services. We may publish such content.
            When we publish this content, we may identify our users by their
            first and last name. We obtain the user's consent prior to posting
            this information along with the testimonial.
          </p>
        </div>
        <div className="text-[#565656]">
          <p className="flex gap-1 text-primary font-bold mt-14 mb-10">
            <span className="mr-3">3.</span>
            Disclosure of Your Personal information
          </p>
          <p className="my-5">
            We disclose your personal information as described below and as
            described elsewhere in this Privacy Policy.
          </p>
          <p className="my-5">
            <span className="font-bold">Third Parties Designated by You:</span>{" "}
            When you use the Services, the personal information you provide will
            be shared with the third parties that you authorize to receive such
            information.
          </p>
          <p className="my-5">
            <span className="font-bold">Third Party Service Providers:</span> We
            may share your personal information with third party service
            providers to: provide you with the Services that we offer you
            through our Services; conduct quality assurance testing; to provide
            technical support; market the Services; and/or to provide other
            services to us.
          </p>
          <p className="my-5">
            <span className="font-bold">Information We Share:</span> We may
            disclose aggregated information about our users and information that
            does not identify any individual without restriction. In addition,
            we may disclose personal information that we collect or you provide:
          </p>
        </div>
        <div className="text-[#565656]">
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            To fulfill the purpose for which you provide it, for any other
            purpose disclosed by us when you provide the information, or with
            your consent;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            To third parties designated by you;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            With our subsidiaries and affiliates;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            To third parties to process payments made through the Services;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            With contractors, service providers and other third parties we use
            to support our business;
          </p>
          <p className="flex gap-1 mb-0.5">
            <span className="mr-3">&bull;</span>
            To a buyer or other successor in the event of a merger, divestiture,
            restructuring, reorganization, dissolution or other sale or transfer
            of some or all of our assets, whether as a going concern or as part
            of bankruptcy, liquidation or similar proceeding, in which personal
            information held by us about users is among the assets transferred;
            and
          </p>
          <p className="my-5">
            <span className="font-bold">Other Disclosures:</span> Regardless of
            any choices you make concerning your personal information (as
            described below), Paperdaz may disclose personal information if it
            believes in good faith that such disclosure is necessary: (i) in
            connection with any legal investigation; (ii) to comply with
            relevant laws or to respond to subpoenas or warrants served on our
            company; (iii) to protect or defend the rights or property of
            lipsum.com or users of the Services; and/or (iv) to investigate or
            assist in preventing any violation or potential violation of the
            law, this Privacy Policy, or our Terms of Use.
          </p>
          <p className="font-bold my-5">Data Retention Policy</p>
          <p className="my-4">
            We will keep your Personal Data for as long as you are a registered
            user Digital marketing platform, or for as long as is necessary for
            us to provide products or services for you, and for a limited period
            of time afterwards.
          </p>
          <p className="my-4">
            Once you no longer wish to be engaged with “paperdaz.com” for any
            prescribed purpose, we may still need to retain your data if there
            is a legal reason for doing so (such as for tax purposes where you
            have made purchases through one of our digital platforms or where we
            need to resolve any disputes with you).
          </p>
        </div>
        <p className="flex gap-1 text-primary font-bold mt-14 mb-10">
          <span className="mr-3">4.</span>
          Third Party Websites
        </p>
        <p className="my-5">
          Our Site may contain links to third party websites. When you click on
          a link to any other website or location, you automatically exit our
          Site or Services and go to another site, and another entity may
          collect personal information or anonymous data from you. We have no
          control over, do not review, and are not responsible for, these
          outside websites or their contents. Please, be aware that the terms of
          this Privacy Policy, do not apply to these outside websites or
          contents, or to any collection of your personal information after you
          click on links to such outside websites. We encourage you to read the
          privacy policies of every website you visit. The links to third party
          websites or locations are for your convenience and do not signify our
          endorsement of such third parties or, content or websites.
        </p>
        <p className="flex gap-1 text-primary font-bold mt-14 mb-10">
          <span className="mr-3">5.</span>
          Your Choices Regarding Information
        </p>
        <p className="my-5">
          Choices: We offer you choices regarding the collection, use, and
          sharing of your personal information. We may periodically send you
          emails that directly promote the use of our Services. When you receive
          promotional communications from us, you may indicate a preference to
          stop receiving further communications from us and you will have the
          opportunity to “opt-out” by following the unsubscribe instructions
          provided in the email you receive or by contacting us directly.
          Despite your indicated email preferences, we may send you
          service-related communications, including notices of any updates to
          our Terms of Use or Privacy Policy.
        </p>
        <p className="my-5">
          <span className="font-bold">Cookies:</span> If you decide at any time
          that you no longer wish to accept cookies from our Services for any of
          the purposes described above, then you can instruct your browser, by
          changing its settings, to stop accepting cookies or to prompt you
          before accepting a cookie from the websites you visit. Consult your
          browser’s technical information. If you do not accept cookies,
          however, you may not be able to use all portions of the Services or
          all functionality of the Services. If you have any questions about how
          to disable or modify cookies, please contact us at hello@paperdaz.com
          .
        </p>
        <p className="flex gap-1 text-primary font-bold mt-14 mb-10">
          <span className="mr-3">6.</span>
          Your Rights
        </p>
        <p className="my-5">
          As a user of our Site, you have the following rights, any of which you
          may exercise by contacting us at hello@paperdaz.com
        </p>
        <div>
          <p className="flex gap-1 mb-1">
            <span className="mr-3">&bull;</span>
            The right to ask what personal data that we hold about you at any
            time. Extra requests (particularly repetitive) for data may result
            in a fee being charged to the user.
          </p>
          <p className="flex gap-1 mb-1">
            <span className="mr-3">&bull;</span>
            The right to ask us to update and correct any out-of-date or
            incorrect personal data that we hold about you free of charge.
          </p>
          <p className="flex gap-1 mb-1">
            <span className="mr-3">&bull;</span>
            As set out above, the right to opt out of any marketing
            communications that we may send you.e.
          </p>
        </div>
        <div className="my-7">
          <p className="font-bold">A. Right of access</p>
          <p>
            You have a right of access to any personal information we hold about
            you. You can ask us for a copy of your personal information;
            confirmation whether your personal information is being used by us;
            details about how and why it is being used; and details of what
            safeguards are in place if we transfer your information outside of
            the United States and European Economic Area ("EEA").
          </p>
        </div>
        <div className="my-7">
          <p className="font-bold">B. Right to update your information</p>
          <p>
            You have a right to request an update to any of your personal
            information which is out of date or incorrect.
          </p>
        </div>
        <div className="my-7">
          <p className="font-bold">C. Right to delete your information</p>
          <p>
            You have a right to ask us to delete any personal information which
            we are holding about you in certain specific circumstances. You can
            ask us for further information on these specific circumstances by
            contacting us via email at hello@paperdaz.com
          </p>
          <p className="flex gap-1 mb-1 ml-3 mt-5">
            <span className="mr-3">&bull;</span>
            We will pass your request onto other recipients of your personal
            information unless that is impossible or involves disproportionate
            effort. You can ask us who the recipients are using the email
            address above.
          </p>
        </div>
        <div className="my-7">
          <p className="font-bold">
            D. Right to restrict use of your information
          </p>
          <p>
            You have a right to ask us to restrict the way that we process your
            personal information in certain specific circumstances. You can ask
            us for further information on these specific circumstances by
            contacting us via email at hello@paperdaz.com
          </p>
          <p className="flex gap-1 mb-1 ml-3 mt-5">
            <span className="mr-3">&bull;</span>
            We will pass your request onto other recipients of your personal
            information unless that is impossible or involves disproportionate
            effort. You can ask us who the recipients are using the email
            address above.
          </p>
        </div>
        <p>
          <span className="font-bold">Signing up on</span> paperdaz.com
        </p>
        <p>
          When you sign up on our website, contact details you provide, as well
          as your IP address and ISP, are stored on our systems. This
          information will also be used on your account and utilized by us to
          monitor suspicious activities so we can contact you if necessary.
        </p>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">Standard Security</h3>
          <div className="w-36 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div>
          <p className="mb-5">
            We use standard security measures on our site. We will treat your
            information in strict confidence and endeavor to take all reasonable
            steps to protect your personal information. However, we cannot
            guarantee the security of any data you disclose online. You accept
            inherent security risks of providing information and other internet
            activities and will not hold us responsible for any breach of
            security unless it is due to our negligence or willful default.
          </p>
          <p>
            We keep personal information as long as it is necessary for the
            practices described in this Policy. We also keep information as
            otherwise required by law.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">
            California Online Privacy Protection Act (CaloPPA)
          </h3>
          <div className="w-[25rem] h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div>
          <p className="mb-5">
            CaloPPA is the first state law in the country to mandate the posting
            of a privacy statement on commercial websites and online services.
            The law's reach extends well beyond California, requiring anyone or
            any organization operating websites in the United States (or perhaps
            the entire world) that collect personally identifiable information
            from California consumers to post a clear privacy statement on their
            website, adhere to it, and disclose exactly what information is
            being collected and with whom it will be shared.
          </p>
          <p className="mb-5">
            According to CalOPPA we agree to the following:
          </p>
          <p className="mb-5">
            Access to our website is open to anonymous users. As soon as this
            privacy statement is finished, a link to it will be added to our
            home page or, at the very least, the first important page you see
            when you visit our website. The phrase "Privacy" appears in our
            Privacy Policy link, which is prominently displayed on the page
            mentioned above.
          </p>
          <p className="mb-5">
            Users will be notified of any privacy policy changes:
          </p>
          <p className="flex gap-1 mb-1 ml-3 mt-5">
            <span className="mr-3">&bull;</span>
            On our Privacy Policy Page 
          </p>

          <p className="flex gap-1 mb-1 ml-3 mt-5">
            <span className="mr-3">&bull;</span>
            By emailing us
          </p>
          <p className="flex gap-1 mb-1 ml-3 mt-5">
            <span className="mr-3">&bull;</span>
            By calling us
          </p>
          <p className="mb-5">How does our site handle not track signals?</p>
          <p className="mb-5">
            We honor do not track signals and do not track, plant cookies, or
            use advertising when a Do Not Track (DNT) browser mechanism is in
            place.
          </p>
          <p className="mb-5">
            Does our site allow third-party behavioral tracking?
          </p>

          <p className="mb-5">
            It’s also important to note that we do not allow third-party
            behavioral tracking.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">Fair Information Practices</h3>
          <div className="w-52 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div>
          <p className="mb-5">
            The Fair Information Practices Principles are the cornerstone of
            American privacy legislation, and the ideas they encompass have had
            a big impact on the evolution of data protection laws all over the
            world. Compliance with the different privacy regulations that
            safeguard personal information requires an understanding of the Fair
            Information Practice Principles and how they should be put into
            practice.
          </p>
          <p className="mb-5">
            In order to be in line with Fair Information Practices we will take
            the following responsive action, should a data breach occur:
          </p>
          <p className="flex gap-1 mb-1 ml-3 mt-5">
            <span className="mr-3">&bull;</span>
            We will notify the users via email
          </p>
          <p className="flex gap-1 mb-1 ml-3 mt-5">
            <span className="mr-3">&bull;</span>
            Within 7 business days
          </p>
          <p className="flex gap-1 mb-1 ml-3 mt-5">
            <span className="mr-3">&bull;</span>
            We will notify the users via in-site notification
          </p>
          <p className="flex gap-1 mb-1 ml-3 mt-5">
            <span className="mr-3">&bull;</span>
            Within 1 business day
          </p>
          <p className="my-5">
            We also concur with the Individual Redress Principle, which mandates
            that people have the ability to legally hold negligent data
            collectors and processors accountable. This concept mandates that
            people have recourse to courts or government entities to investigate
            and/or prosecute non-compliance by data processors, in addition to
            having enforceable rights against data users.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">Cookie Usage</h3>
          <div className="w-28 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div>
          <p className="mb-5">
            This section describes how we use the cookies, and why these cookies
            are stored on your device. We will also share how you can prevent
            these cookies from being stored. However, this may downgrade or
            ‘break’ certain elements of the site’s functionality.
          </p>
          <p className="mb-5">
            A ‘cookie’ is a bit of information that a website sends to your web
            browser that helps the site remember information about you and your
            preferences.
          </p>
          <p className="mb-5">
            ‘Session’ cookies are temporary bits of information that are used to
            improve navigation, block visitors from providing information that
            is inappropriate (the site ‘remembers’ previous entries of age or
            country of origin that were outside the specified parameters and
            blocks subsequent changes), and collect aggregate statistical
            information on the site. They are erased once you exit your web
            browser or otherwise turn off your computer.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">How We Use Cookies</h3>
          <div className="w-44 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div>
          <p className="mb-5">
            If you create an account with us, we will use cookies for the
            management of the sign-up process and general administration. We
            usually store cookies on your computer during the registration
            process for you to resume where you left off, remembering your
            registered login, preferences, and other customization functions.
            These cookies will usually be deleted when you log out; however, in
            some cases they may remain afterwards to remember your site
            preferences when logged out.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">Third-Party Cookies</h3>
          <div className="w-40 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div>
          <p className="mb-5">
            In some cases, cookies provided by trusted third parties might be
            used. The sections below detail which third party cookies you might
            encounter through this site.
          </p>
          <p className="mb-5">
            We use third-party analytics to help us track and measure usage of
            the site so that we can continue to produce engaging content. These
            cookies may track things such as how long you spend on the site, or
            pages you visit. This will help inform us how to improve the site
            for you.
          </p>
          <p className="mb-5">
            Our site also uses social media buttons and/or plugins that allow
            you to connect with your social platforms in various ways. For these
            to work, social media sites, such as Facebook, Twitter, Pinterest,
            etc., will set cookies through our site that may be used to enhance
            your profile on their site or contribute to the data they hold for
            various purposes outlined in their respective privacy policies.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">Removing or Disabling Cookies</h3>
          <div className="w-64 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div>
          <p className="mb-5">
            n most cases, there are no industry standard options for disabling
            cookies without completely disabling the functionality and features
            of the site. You have the option to disable or selectively turn off
            our cookies or third-party cookies in your browser settings or
            manage preferences in internet security programmes. However, doing
            so may affect how you are able to navigate our site. This may
            include the inability to log in to services or programmes, such as
            logging into your “paperdaz.com” account. It is recommended that you
            leave on all cookies if you are not sure whether you need them or
            not, in case they are used to provide a service that is useful to
            you.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">Your rights as a data subject</h3>
          <div className="w-64 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div>
          <p className="mb-5">
            At any point whilst “paperdaz.com” is in possession of or processing
            your Personal Data, you may have the following rights:
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Right of access </span> - you
            have the right to request a copy of the Personal Data that we hold
            about you.
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Right of rectification</span> -
            you have a right to correct Personal Data that we hold about you
            that is inaccurate or incomplete.
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Right to be forgotten </span> -
            in certain circumstances you can ask for the Personal Data we hold
            about you to be erased from our records.
          </p>
          <p className="mb-5">
            <span className="font-bold">
              &bull; Right to restriction of processing 
            </span>{" "}
            - where certain conditions apply you have a right to restrict the
            processing of your Personal Data.
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Right of portability </span> -
            you have the right to have the Personal Data we hold about you
            transferred to another organization.
          </p>
          <p className="mb-5">
            <span className="font-bold">&bull; Right to object</span> - you have
            the right to object to certain types of processing such as direct
            marketing, as well as processing we undertake based on our
            legitimate interests.
          </p>
          <p className="mb-5">
            <span className="font-bold">
              &bull; Right to object to automated processing, including
              profiling
            </span>{" "}
            - you also have the right not to be subject to the legal effects of
            automated processing or profiling.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">
            Children’s Online Privacy and Protection Act
          </h3>
          <div className="w-64 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <p className="mb-5">
          Federal laws impose special restrictions and obligations on commercial
          website operators who direct their operations toward, and collect and
          use information from, children under the age of 16. Paperdaz takes
          such restrictions seriously, and does not intend for our website or
          resources to be used by children under the age of 16 without first
          obtaining the verifiable consent of such child’s parent or legal
          guardian. We do not knowingly collect personal information from minors
          under the age of 16, only a parent or legal guardian may provide such
          information after adhering to our verification process for submitting
          such information
        </p>

        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">Policy Update</h3>
          <div className="w-64 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <p className="mb-5">
          “paperdaz.com” reserves the right to change, amend, or modify our
          Privacy Policy without notice. We will post the amended Policy on this
          page and indicate at the top of the page the date the Policy was
          revised. Please check our site and this page periodically for updates.
        </p>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">Contact Us</h3>
          <div className="w-64 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <p className="mb-5">
          To contact us regarding anything in this privacy policy or how we
          collect or store your personal data, please get in touch with us by
          using the ‘Contact Us’ page on our website. hello@paperdaz.com
        </p>
        <div className="flex flex-col mt-10 mb-10">
          <h3 className="text-primary ">Office Address</h3>
          <div className="w-64 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <p className="mb-5">
          Paperdaz LLC1968 S Coast Hwy Suite 4302,Laguna Beach CA 92651
        </p>
      </div>
    </motion.div>
  );
}

export default PrivacyPolicyComponent;
