import { NextPage } from "next";
import { PropsWithChildren } from "react";
import { Header } from "../Header/Header";

export const Layout: NextPage<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
