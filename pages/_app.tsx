import { setupStore } from "@/src/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
    const store = setupStore();

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
