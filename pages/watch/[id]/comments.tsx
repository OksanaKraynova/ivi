import { GetServerSidePropsContext } from "next";
import { IContent } from "@/types/IContent";
import contentData from "../../../src/json/content.json"
import { ContentExtra } from "@/src/components/ContentExtra/ContentExtra";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  const content = contentData.content.find(content => content.id === id) ?? null;

  return {
    props:
      { content: content }
  };
}

const Comments = (params: { content: IContent }) => {


  return (

    <>
      <Header />
      <ContentExtra content={params.content} extra={"Отзывы"} />
      <Footer />
    </ >

  );
}

export default Comments;