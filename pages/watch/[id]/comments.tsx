import { GetServerSidePropsContext } from "next";
import IContent from "@/types/IContent";
import ContentExtra from "@/src/components/ContentExtra/ContentExtra";
import getData from "@/src/functions/getData";
import Urls from "@/types/Urls";
import Layout from "@/src/components/Layout/Layout";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  const id = context.params?.id;
  const content: IContent =
    await getData(Urls.SERVER_PORT, Urls.ONE_MOVIE + `/${id}`);

  return {
    props: { content: content || null }
  };
}

const Comments = (params: { content: IContent }) => {

  return (

    <Layout>
      <ContentExtra content={params.content} extra={"Отзывы"} />
    </Layout>

  );
}

export default Comments;