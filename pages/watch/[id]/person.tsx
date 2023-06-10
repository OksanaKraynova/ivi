import { GetServerSidePropsContext } from "next";
import IContent from "@/types/IContent";
import ContentExtra from "@/src/components/ContentExtra/ContentExtra";
import getData from "@/src/functions/getData";
import Urls from "@/types/Urls";
import Layout from "@/src/components/Layout/Layout";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  const id = context.params?.id;
  // const content = await getData<IContent>(Urls.SERVER_PORT, Urls.ONE_MOVIE + `/${id}`);
  const content = await getData<IContent>("3003", "/api/movies" + `/${id}`);

  return {
    props: { content: content }
  };
}

const Person = (params: { content: IContent | null }) => {

  return (

    <Layout>
      <ContentExtra content={params.content} extra={"Создатели"} />
    </Layout>

  );
}

export default Person;