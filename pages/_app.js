import { useState } from "react";
import { SessionProvider } from "next-auth/react";

import { AuthContextProvider } from "../context/AuthContext";
import GlobalContext from "../context/GlobalContext";

import "../styles/global.css";

function App({ Component, pageProps: { session, ...pageProps } }) {
  const [formState, setFormState] = useState();
  const [tripInfo, setTripInfo] = useState();
  const [value, setValue] = useState();
  const [endDate, setEndDate] = useState();
  const [skyscanner, setSkyscanner] = useState();
  const [kayak, setKayak] = useState();
  const [newValue, setNewValue] = useState("");

  return (
    <SessionProvider session={session}>
      <GlobalContext.Provider
        value={{
          formState,
          setFormState,
          setTripInfo,
          value,
          skyscanner,
          endDate,
          setEndDate,
          setSkyscanner,
          setKayak,
          tripInfo,
          setValue,
          kayak,
          newValue,
          setNewValue
        }}
      >
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </GlobalContext.Provider>
    </SessionProvider>
  );
}
export default App;
