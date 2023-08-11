import React, { useState } from 'react';
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
    const [lightState, setLightState] = useState(false); // assuming initial state is 'false' (light off)

    return (
        <Layout>
            <GlobalStyle />
            <Component 
                {...pageProps} 
                lightState={lightState} 
                setLightState={setLightState}
            />
        </Layout>
    );
}
