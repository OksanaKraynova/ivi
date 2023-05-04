import Layout from "@/src/components/Layout/Layout";
import Link from "next/link";
import React from "react";

type Props = {};

const Custom404 = (props: Props) => {
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
                    404 - страница не найдена
                    <Link href={"/profile"}>Link</Link>
                </div>
            </main>
        </Layout>
    );
};

export default Custom404;
