import { motion } from "framer-motion";
import TitleHeader from "../../../components/TItleHeader";

function TermsAndConditionsComponents() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <TitleHeader
        title={"Terms & Conditions"}
        subTitle={"Home - Terms & Conditions"}
      />
      <div className="mx-40 max-lg:mx-20 max-md:mx-16 max-sm:mx-7 max-xsm:mx-5 mb-10">
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">INTRODUCTION</h3>
          <div className="w-32 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-3">
            Welcome to www.paperdaz.com. This “Agreement” jointly refers to all
            the terms, conditions, notices and instructions referenced or
            contained in this document (the “Terms and Conditions”) and every
            other operating rules, regulations and policies (including our
            Privacy Policy available on the Web App) and other necessary
            guidelines which we may occasionally publish on the Service
          </p>
          <p className="mb-3">
            The “Service” collectively refers to the software, or Web App made
            available by Paperdaz, “The User” (“You” or “Your”) implies the
            person, entity or corporate organisation that has accessed or is
            currently using the Service.
          </p>
          <p className="mb-3">
            “Paperdaz” (“We” or “Us”) refers to Paperdaz, our partners,
            associates, subsidiaries, directors, licensors, contractors, agents,
            officers, and employees.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary "> AGE LIMITATION</h3>
          <div className="w-32 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-3">
            Children below the age of 18 years are not eligible to access or use
            the Service. To this end, our Services are not directed towards
            anyone under the age of 18. Also, we do not collect personally
            identifiable information from Users who we know to be less than 18
            years old. We should be promptly notified if we have requested or
            collected personally identifiable information from users below 18
            years of age and we will duly delete such information.
          </p>
        </div>

        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">PROVISIONS OF THE SERVICE</h3>
          <div className="w-56 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="flex gap-1">
            <span className="mr-3">&bull;</span>
            You acknowledge and consent that we may make modifications to, or
            stop providing, the Service, or limit the use of the Service and/or,
            at any time without prior notification to you.
          </p>
          <p className="flex gap-1">
            <span className="mr-3">&bull;</span>
            You are exclusively responsible for all data, mobile carrier, SMS,
            telecommunications and internet fees and bills sustained as a result
            of your use of the Service.
          </p>
          <p className="flex gap-1">
            <span className="mr-3">&bull;</span>
            You acknowledge and consent that we can disable your account or deny
            you access to the Service, without prior notification to you, for
            any or no reason at all, including but not limited to any breach of
            these Terms and Conditions or if we speculate that you have accessed
            and used any portion of the Service to carry out any unlawful
            activity. If we disable your account, you may not be allowed to
            access the Service, your account details or any materials contained
            in your account.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">LINKS TO EXTERNAL WEBSITES</h3>
          <div className="w-56 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-5">
            Our Service may include links or attachments to other websites and
            materials provided by third parties (“Linked Websites”). The purpose
            of the Linked Websites is to provide information only and are
            exclusively for your convenience. We exercise no control over,
            neither do we accept or claim any responsibility for the products or
            content of such Linked Websites. Also, we do not claim or accept any
            responsibility for the loss or damage that may arise from your use
            of the Linked Websites.
          </p>
          <p className="mb-5">
            If you decide to use the Linked Websites, you do so only at your
            sole risk and according to the terms and conditions, including the
            privacy policy of the Linked Websites.
          </p>
          <p className="mb-5">
            Our website may also contain promotions or advertisements from third
            parties. By permitting the third parties to advertise on our
            Services, we do not make any warranties or representations in
            respect or the products or the services advertised or promoted.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">INTELLECTUAL PROPERTY</h3>
          <div className="w-48 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-5">
            All intellectual property rights (including the various rights
            conferred on <span className="font-bold">www.paperdaz.com</span> by
            statute, common law and equity in and in relation to copyright,
            trademarks, patents, trade names, service marks and designs-
            referring to the “look and feel” and other visual or non-literal
            contents) whether registered or otherwise under our Services. These
            apply to all the text, design, graphics, photos, sounds, music,
            videos, software, and their arrangement and selection, and all
            compilations of software, underlying source code and software
            (scripts and applets) of our Services, are owned by or licensed to
            us. You shall not attempt to obtain or bypass any title to such
            intellectual property rights. To this end,{" "}
            <span className="font-bold">ALL RIGHTS ARE RESERVED.</span>
          </p>
          <p className="mb-5">
            As a result, none of those mentioned above materials or content may
            be copied, reproduced, distributed, downloaded, republished, posted,
            displayed or transferred in any format or through any media, rented,
            sold or sub-licensed, create derivative works of, or exploited in
            any way without the prior written permission from us. Also, you may
            not modify, copy, reproduce, or distribute or use for commercial
            reasons any of the content or materials on our Services without the
            prior written permission from us.
          </p>
        </div>

        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary "> DISCLAIMERS</h3>
          <div className="w-28 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-5">
            The service is provided by Paperdaz on “as is” and “as available”
            basis without any warranty whatsoever. Without limiting the
            preceding, we explicitly disclaim all warranties, whether implied or
            express or statutory, regarding the Service including without
            limitation to any warranty of merchantability, warranty of fitness
            for a specific purpose, security, title, accuracy, and
            non-violation.
          </p>
          <p className="mb-5">
            Paperdaz does not warrant that the Service will meet your specific
            requirements; that the Service will not be disrupted, that they will
            be secure, timely, or free from errors. Similarly, Paperdaz does not
            warrant that the information provided therein will be reliable,
            accurate or correct; that any errors or defects will be promptly
            corrected; that the Service will be available at any given location
            and time; or that they will be free of malware, viruses or other
            harmful codes.
          </p>
          <p className="mb-5">
            You assume full liability and risk of loss as a result of
            downloading or using of files, content, information or other
            material obtained from the Service.
          </p>
        </div>

        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">LIMITATION OF LIABILITY</h3>
          <div className="w-[11.5rem] h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-5">
            You acknowledge and consent that Paperdaz will not be liable to you
            or any third party for any loss of profits, goodwill, use or data,
            or for any incidental, special, consequential, indirect or exemplary
            damages, that result from:
          </p>
          <p className="flex gap-1">
            <span className="mr-3">&bull;</span>
            the disclosure, use, or display of your content;
          </p>
          <p className="flex gap-1">
            <span className="mr-3">&bull;</span>
            your use or failure to use the Service;
          </p>
          <p className="flex gap-1">
            <span className="mr-3">&bull;</span>
            any modification, discontinuance or suspension of any part of the
            Service;
          </p>
          <p className="flex gap-1">
            <span className="mr-3">&bull;</span>
            the general outlay of the Service or the systems or software that
            makes our service available;
          </p>
          <p className="flex gap-1">
            <span className="mr-3">&bull;</span>
            unsolicited access to or modifications of your transmissions or
            data;
          </p>
          <p className="flex gap-1">
            <span className="mr-3">&bull;</span>
            any other communications you initiated, or you received through the
            use of the Service; or
          </p>
          <p className="flex gap-1">
            <span className="mr-3">&bull;</span>
            any other issue involving the Service.
          </p>
          <p className="my-5">
            You acknowledge and consent that Paperdaz will not be liable to you
            or any third party for any loss of profits, goodwill, use or data,
            or for any incidental, special, consequential, indirect or exemplary
            damages, that result from: the disclosure, use, or display of your
            content; your use or failure to use the Service; any modification,
            discontinuance or suspension of any part of the Service; the general
            outlay of the Service or the systems or software that makes our
            service available; unsolicited access to or modifications of your
            transmissions or data; any other communications you initiated, or
            you received through the use of the Service; or any other issue
            involving the Service. Paperdaz liability is limited whether or
            otherwise we have been notified of the likely occurrence of such
            damages, and even if a resolution outlined in this Agreement failed
            its essential purpose. Paperdaz has no liability for any delay or
            failure due to matters beyond our rational control.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">COPYRIGHT VIOLATION</h3>
          <div className="w-44 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-5">
            If you have any reason to believe that any content of our Service
            breaches your copyright, please do contact us in compliance with the
            Digital Millennium Copyright Act Policy. If you are an accredited
            copyright owner and you have any reason to believe that any content
            on this website breaches your rights, please do contact us through
            our email mai@paperdaz.com.
          </p>
          <p className="mb-5">
            Please be informed that there may be legal repercussions for sending
            a frivolous notice of copyright breach. Before sending us such a
            request, you must consider legal points such as licensed use and
            fair uses.
          </p>
          <p className="mb-5">
            We will terminate the accounts of chronic violators of this policy.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">INDEMNIFICATION</h3>
          <div className="w-36 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-5">
            You accept to indemnify us, defend us and hold us harmless from and
            against all liabilities, claims, and expenses, including reasonable
            attorney’s fees, arising from your use of the Service, including but
            not limited to your breach of this Agreement, provided that we
          </p>
          <p className="flex gap-1">
            <span className="mr-3">1.</span>
            promptly gives you prior notification of the demand, claim,
            proceeding or suit;
          </p>
          <p className="flex gap-1">
            <span className="mr-3">3.</span>
            gives you exclusive control of the defence and settlement of the
            demand, claim, proceeding or suit (given that you may not settle any
            demand, claim, proceeding or suit except the settlement
            unconditionally frees Paperdaz of all liability); and
          </p>
          <p className="flex gap-1">
            <span className="mr-3">3.</span>
            makes available at your disposal all necessary assistance.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">
            CHANGES TO THESE TERMS AND CONDITIONS
          </h3>
          <div className="w-[22rem] max-md:w-[15rem] h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-5">
            Paperdaz reserves the exclusive right, at its discretion to amend or
            modify these Terms and Conditions at any time and will update these
            Terms and Conditions in the event of such amendments and
            modifications. We will duly notify you of any material changes to
            this agreement at least 30 days before the amended Terms and
            Conditions become effective. For non-material amendments, your
            further use of the Service represents your consent to the revised
            Terms and Conditions. 
          </p>
          <p className="mb-5">
            We reserve the right at any time, as we deem it necessary to amend
            or discontinue, temporarily or permanently, the Service (or any part
            of it) with or without notice.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary "> GOVERNING LAW</h3>
          <div className="w-36 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-5">
            Except to the extent provided by the applicable law, otherwise, this
            Agreement between you and Paperdaz and any access to or use of the
            Service are governed by the Federal laws of Malaysia, without regard
            to provisions of the conflict of the law. You and Paperdaz consent
            to submit to the exclusive jurisdiction and venue of the courts
            located in Kuala Lumpur.
          </p>
        </div>
        <div className="flex flex-col mt-10 mb-7">
          <h3 className="text-primary ">NON-ASSIGNABILITY</h3>
          <div className="w-40 h-0.5 bg-[#565656] mt-0.5" />
        </div>
        <div className="text-[#565656]">
          <p className="mb-5">
            If any section of this Agreement is considered to be invalid and
            unenforceable, that portion of the Agreement will be interpreted to
            reflect the parties’ initial intent. The remaining sections will
            remain effective. Any failure by Paperdaz to enforce any provision
            of this Agreement will be deemed as a waiver of our right to enforce
            such provision. Our rights under this Agreement will suffice beyond
            the cancellation of this Agreement.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TermsAndConditionsComponents;
