import Image from "next/image";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { NextPageWithLayout } from "./_app";
import { getLayout } from "components/Layout/BaseLayout/BaseLayout";
import { useTranslation } from "hooks/useTranslation";
import { useState } from "react";

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  const increaseCountHandler = () => setCount(count + 1);
  const decreaseCountHandler = () => setCount(count - 1);
  const resetCountHandler = () => setCount(0);

  return (
    <PageWrapper>
      <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      <h1>{t.homePage.test}</h1>
      <hr />
      <div>
        <p>{t.homePage.getCount(count)}</p>
        <button onClick={decreaseCountHandler}>-</button>
        <button onClick={increaseCountHandler}>+</button>
        <button onClick={resetCountHandler}>0</button>
      </div>
    </PageWrapper>
  );
};

Home.getLayout = getLayout;
export default Home;
