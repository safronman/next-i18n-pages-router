import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { NextPageWithLayout } from "pages/_app";
import { getLayout } from "components/Layout/BaseLayout/BaseLayout";

const Custom404: NextPageWithLayout = () => {
  return (
    <PageWrapper>
      <h1>404 - Page Not Found</h1>;
    </PageWrapper>
  );
};

Custom404.getLayout = getLayout;
export default Custom404;
