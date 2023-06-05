import HomePage from "@/src/components/HomePage/HomePage";
import Layout from "@/src/components/Layout/Layout";

export default function Home() {
    return (
        <>
            <Layout activePage="Мой Иви">
                <HomePage />
            </Layout>
        </>
    );
}
