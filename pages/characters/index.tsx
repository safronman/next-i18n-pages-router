import { API } from "assets/api/api";
import { CharacterType, ResponseType } from "assets/api/rick-and-morty-api";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { NextPageWithLayout } from "../_app";
import { getContactsLayout } from "components/Layout/BaseLayout/BaseLayout";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { useTranslation } from "hooks/useTranslation";

const CharacterCard = dynamic(() =>
  import("components/Card/CharacterCard/CharacterCard").then((mod) => mod.CharacterCard),
);

export const getStaticProps: GetStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters();
  return {
    props: {
      characters,
    },
    revalidate: 60,
  };
};

type PropsType = {
  characters: ResponseType<CharacterType>;
};

const Characters: NextPageWithLayout<PropsType> = ({ characters }) => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <h1>{t.charactersPage.title}</h1>
      {characters.results.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </PageWrapper>
  );
};

Characters.getLayout = getContactsLayout;
export default Characters;
