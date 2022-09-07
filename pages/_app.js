import { Provider } from "react-redux";
import { setupStore } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  let preloadedState = {};
  let store = setupStore(preloadedState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
