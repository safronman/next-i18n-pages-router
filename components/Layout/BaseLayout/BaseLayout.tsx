import { NextPage } from "next";
import { PropsWithChildren, ReactElement } from "react";
import { Layout } from "../Layout";
import { Contacts } from "../../Contacts/Contacts";

export const BaseLayout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props;

  return <Layout>{children}</Layout>;
};

export const getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getContactsLayout = (page: ReactElement) => {
  return (
    <BaseLayout>
      {page}
      <Contacts />
    </BaseLayout>
  );
};
