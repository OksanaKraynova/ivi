import ru from "@/locales/titles/ru";
import en from "@/locales/titles/en";
import Layout from "@/src/components/Layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Custom404 = (props: Props) => {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'ru' ? ru : en
    return (
        <Layout>
            <main
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    textAlign: "center",
                }}
            >
                <div style={{ margin: "250px 0", fontSize: "2em" }}>
                    {" "}
                    404 - {t.notFound}
                    <Link href={"/profile"}>Link</Link>
                </div>
            </main>
        </Layout>
    );
};

export default Custom404;
