import { NextPageWithLayout } from "../_app";
import { getLayout } from "components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { LoginNavigate } from "hoc/LoginNavigate";

const Private: NextPageWithLayout = () => {
  return (
    <LoginNavigate>
      <PageWrapper>
        <h1>Private page</h1>
      </PageWrapper>
    </LoginNavigate>
  );
};

Private.getLayout = getLayout;
export default Private;
