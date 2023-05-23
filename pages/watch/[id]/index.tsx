import { GetServerSidePropsContext } from "next";
import { IContent } from "@/types/IContent";
import contentData from "../../../src/json/content.json"
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { Content as ContentBlock } from "@/src/components/Content/Content";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  const content = contentData.content.find(content => content.id === id) ?? null;

  return {
    props:
      { content: content }
  };
}

const Content = (params: { content: IContent }) => {

  return (
    <>
      <Header />
      <ContentBlock content={params.content} />
      <Footer />
    </>
  );
}

export default Content;