import MainLayaut from "@layout/MainLayaut";
import "@styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayaut>
        <Component {...pageProps} />;
      </MainLayaut>
    </>
  );
}

export default MyApp;
