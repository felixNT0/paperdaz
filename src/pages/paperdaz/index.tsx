import Loader from "../../components/Loader";
import { useAppContext } from "../../context";
import Layout from "../../layout";
import PaperdazFinalLandingPageComponent from "./components";

function PaperdazFinalLandingPage() {
  const { isLoading } = useAppContext();
  if (isLoading) return <Loader />;
  return (
    <Layout>
      <PaperdazFinalLandingPageComponent />
    </Layout>
  );
}

export default PaperdazFinalLandingPage;
