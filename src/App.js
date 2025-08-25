import { Provider } from "react-redux";
import appStore from "./utils/ReduxStore/appStore";
import Body from "./components/Body";
import useOnlineStatus from "./customHooks/useOnlineStatus";
import CustomOfflinePage from "./utils/CustomOfflinePage";

function App() {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    // If offline → show custom offline page
    return <CustomOfflinePage />;
  }

  // If online → show your normal app wrapped with Redux Provider
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
