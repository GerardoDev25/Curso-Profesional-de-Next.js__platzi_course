import MainLayaut from "@layout/MainLayaut";
import "@styles/tailwind.css";
import { ProviderAuth } from "@hooks/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayaut>
          <Component {...pageProps} />;
        </MainLayaut>
      </ProviderAuth>
    </>
  );
}

export default MyApp;
