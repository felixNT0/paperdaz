import navigations from "../navigations";
import {
  PaperdazLinkPage,
  PaperdazFinalLandingPage,
  FaqPage,
  TermsAndConditionsPage,
  ContactUsPage,
  PrivacyPolicyPage,
} from "../pages";

export const childrenRoutes = [
  {
    path: navigations.PAPER_LINK,
    element: <PaperdazLinkPage />,
  },
  {
    path: navigations.LANDING_PAGE,
    element: <PaperdazFinalLandingPage />,
  },
  {
    path: navigations.FAQ,
    element: <FaqPage />,
  },
  {
    path: navigations.CONTACT_US,
    element: <ContactUsPage />,
  },
  {
    path: navigations.TERMS_AND_CONDITIONS,
    element: <TermsAndConditionsPage />,
  },
  {
    path: navigations.PRIVACY_POLICY,
    element: <PrivacyPolicyPage />,
  },
];
