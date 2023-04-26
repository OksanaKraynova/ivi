import { Footer } from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Layout from "@/src/components/Layout/Layout";
import Movies from "@/src/components/Movies/Movies";
import React from "react";

const movies = () => {
    return (
        <Layout>
            <Movies />
        </Layout>
    );
};

export default movies;
