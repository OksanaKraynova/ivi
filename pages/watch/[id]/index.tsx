import { GetServerSidePropsContext } from "next";
import { IContent } from "@/types/IContent";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { Content as ContentBlock } from "@/src/components/Content/Content";
import { queryData } from "@/src/functions/queryData";
import { Urls } from "@/types/Urls";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  const id = context.params?.id;
  const content: IContent = await queryData("get", Urls.SERVER_PORT, Urls.ONE_MOVIE + `/${id}`);

  return {
    props:
      { content: content || null }
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