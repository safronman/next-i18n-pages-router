import { API } from "assets/api/api";
import { EpisodeType, ResponseType } from "assets/api/rick-and-morty-api";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { getLayout } from "components/Layout/BaseLayout/BaseLayout";
import { Card } from "components/Card/Card";
import { NextPageWithLayout } from "../_app";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");

  const isAuth = false;

  const episodes = await API.rickAndMorty.getEpisodes();

  if (!episodes) {
    return {
      notFound: true,
    };
  }

  if (!isAuth) {
    return {
      redirect: {
        destination: "/test",
        permanent: false,
      },
    };
  }

  return {
    props: {
      episodes,
    },
  };
};

type PropsType = {
  episodes: ResponseType<EpisodeType>;
};

const Episodes: NextPageWithLayout<PropsType> = ({ episodes }) => {
  return (
    <PageWrapper>
      {episodes.results.map((el) => {
        return <Card key={el.id} name={el.name} />;
      })}
    </PageWrapper>
  );
};

Episodes.getLayout = getLayout;
export default Episodes;
