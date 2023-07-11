import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { dehydrate, useQuery } from "@tanstack/react-query";
import { LocationType, ResponseType } from "assets/api/rick-and-morty-api";
import { QueryClient } from "@tanstack/query-core";
import { Card } from "components/Card/Card";
import { NextPageWithLayout } from "../_app";
import { getLayout } from "components/Layout/BaseLayout/BaseLayout";
import { useTranslation } from "hooks/useTranslation";

const getLocations = () => {
  return fetch("https://rickandmortyapi.com/api/location", { method: "GET" }).then((res) => res.json());
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(["locations"], getLocations);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Locations: NextPageWithLayout = () => {
  const { t } = useTranslation();

  const { data: locations } = useQuery<ResponseType<LocationType>>(["locations"], getLocations);

  if (!locations) return null;

  return (
    <PageWrapper>
      <h1>{t.locationsPage.title}</h1>
      {locations.results.map((el) => {
        return <Card key={el.id} name={el.name} />;
      })}
    </PageWrapper>
  );
};
Locations.getLayout = getLayout;
export default Locations;
