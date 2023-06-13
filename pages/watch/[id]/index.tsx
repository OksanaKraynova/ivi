import { GetServerSidePropsContext } from "next";
import IContent from "@/types/IContent";
import { default as ContentBlock } from "@/src/components/Content/Content";
import getData from "@/src/functions/getData";
import Urls from "@/types/Urls";
import Layout from "@/src/components/Layout/Layout";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  const id = context.params?.id;
  const content = await getData<IContent>(Urls.SERVER_PORT, Urls.ONE_MOVIE + `/${id}`);

  return {
    props:
      { content: content }
  };
}

const Content = (params: { content: IContent | null }) => {

  return (

    <Layout>
      <ContentBlock content={params.content} />
    </Layout>

  );
}

export default Content;