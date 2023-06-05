import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type Props = {
    activePage?: "Мой Иви" | "Каталог";
    children: React.ReactNode;
};

const Layout = ({ children, activePage }: Props) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer activePage={activePage} />
        </>
    );
};

export default Layout;
