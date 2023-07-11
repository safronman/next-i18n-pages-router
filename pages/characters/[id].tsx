import { API } from "assets/api/api";
import { CharacterType } from "assets/api/rick-and-morty-api";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { NextPageWithLayout } from "../_app";
import { getLayout } from "components/Layout/BaseLayout/BaseLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import { CharacterCard } from "components/Card/CharacterCard/CharacterCard";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useTranslation } from "hooks/useTranslation";
import { Trans } from "components/Trans/Trans";

export const getStaticPaths: GetStaticPaths = async () => {
  const characters = await API.rickAndMorty.getCharacters();

  const paths = characters.results.map((el) => {
    return {
      params: { id: String(el.id) },
    };
  });

  return {
    paths,
    fallback: "blocking", // true or false or "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params || {};

  const character = await API.rickAndMorty.getCharacter(id as string);

  if (!character) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      character,
    },
  };
};

type PropsType = {
  character: CharacterType;
};

const Character: NextPageWithLayout<PropsType> = ({ character }) => {
  const router = useRouter();
  const id = router.query.id;
  const { t } = useTranslation();

  const navigateToCharacters = () => router.push("/characters");

  return (
    <PageWrapper>
      <Container>
        <button onClick={navigateToCharacters}>go to characters</button>
        <div>
          <b>id: {id}</b>
          <CharacterCard key={character.id} character={character} />
          <p>{t.characterPage.getDescription(character.name, character.species)}</p>
          <hr />
          <Trans
            text={t.characterPage.description}
            tags={{
              1: () => <b style={{ color: "blueviolet" }}>{character.name}</b>,
              2: () => <strong>{character.species}</strong>,
            }}
          />
          <hr />
          <p>
            <Trans
              text={t.characterPage.description}
              tags={{
                1: () => <>{character.name}</>,
                2: () => <>{character.species}</>,
              }}
            />
          </p>
        </div>
      </Container>
    </PageWrapper>
  );
};

Character.getLayout = getLayout;
export default Character;

// styles
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
