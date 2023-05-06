import Layout from "@/src/components/Layout/Layout";
import Movies from "@/src/components/Movies/Movies";
import React from "react";

const movies = () => {
    return (
        <Layout activePage="Каталог">
            <Movies />
        </Layout>
    );
};

export default movies;
