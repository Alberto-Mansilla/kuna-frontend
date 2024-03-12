import Layout from "../layouts/Layout";
import "../styles/globals.css";
import "../styles/scss/style.scss";
import { CartProvider } from "./cart-context.js";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;