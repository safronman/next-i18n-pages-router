import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";

export const LoginNavigate: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const isAuth = false;

  if (!isAuth) router.push("/test");

  return <>{children}</>;
};
