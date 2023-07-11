import { GetStaticProps } from "next";
import * as path from "path";
import fs from "fs/promises";
import { NextPageWithLayout } from "../_app";
import { getLayout } from "components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "components/PageWrapper/PageWrapper";

export const getStaticProps: GetStaticProps = async () => {
  const getParsedData = async (): Promise<{ title: string }> => {
    const filePath = path.join(process.cwd(), "public", "staticData.json");

    try {
      const jsonData = await fs.readFile(filePath);
      return JSON.parse(jsonData.toString());
    } catch (e) {
      return { title: "no title" };
    }
  };

  const { title } = await getParsedData();

  return {
    props: {
      title,
    },
  };
};

type Props = {
  title: string;
};

const Test: NextPageWithLayout<Props> = ({ title }) => {
  return (
    <PageWrapper>
      <h1>{title}</h1>
    </PageWrapper>
  );
};

Test.getLayout = getLayout;
export default Test;
