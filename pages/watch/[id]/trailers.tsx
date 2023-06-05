import { GetServerSidePropsContext } from "next";
import IContent from "@/types/IContent";
import ContentExtra from "@/src/components/ContentExtra/ContentExtra";
import Layout from "@/src/components/Layout/Layout";
import getData from "@/src/functions/getData";
import Urls from "@/types/Urls";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  const id = context.params?.id;
  const content: IContent =
    await getData(Urls.SERVER_PORT, Urls.ONE_MOVIE + `/${id}`);

  return {
    props: { content: content || null }
  };
}

const Trailers = (params: { content: IContent }) => {

  return (

    <Layout>
      <ContentExtra content={params.content} extra="Трейлеры" />
    </Layout>

  );
}

export default Trailers;