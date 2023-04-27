import { GetServerSidePropsContext } from "next";
import { IContent } from "@/types/IContent";
import contentData from "../../../src/json/content.json"
import { ContentExtra } from "@/src/components/ContentExtra/ContentExtra";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";

const leftIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path></svg>

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  const content = contentData.content.find(content => content.id === id) ?? null;

  return {
    props:
      { content: content }
  };
}

const Person = (params: { content: IContent }) => {

  return (

    <>
      <Header />
      <ContentExtra content={params.content} extra={"Трейлеры"} />
      <Footer />
    </ >

  );
}

export default Person;