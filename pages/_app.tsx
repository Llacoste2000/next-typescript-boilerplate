import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

import "@styles/main.scss";
import "@styles/grid.scss";
import store from "@redux/store";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
