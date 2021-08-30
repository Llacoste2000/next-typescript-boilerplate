import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@styles/main.scss";
import "@styles/grid.scss";
import { store, persistor } from "@redux/store";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
