import { GetServerSidePropsContext } from "next";
import { IContent } from "@/types/IContent";
import contentData from "../../../src/json/content.json"
import Header from "@/src/components/Header/Header";
import { ContentExtra } from "@/src/components/ContentExtra/ContentExtra";
import { Footer } from "@/src/components/Footer/Footer";

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
      <ContentExtra content={params.content} extra={"Создатели"} />
      <Footer />
    </ >

  );
}

export default Person;