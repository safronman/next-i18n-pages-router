import Image, { StaticImageData } from "next/image";
import { CharacterStatusType } from "assets/api/rick-and-morty-api";
import { NextPage } from "next";

type Props = {
  status: CharacterStatusType;
  src: StaticImageData;
};

export const Status: NextPage<Props> = ({ status, src }) => {
  return <Image src={src} alt={`status: + ${status}`} width={20} height={20} />;
};
