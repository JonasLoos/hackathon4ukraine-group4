import React from "react";
import { IntlProvider } from "react-intl";
import useLocale from "./hooks/useLocale";
import { LOCALE_MAP } from "./consts";

function App() {
  const { locale } = useLocale();

  return (
    <IntlProvider locale={locale} messages={LOCALE_MAP[locale]}>
      <div></div>
    </IntlProvider>
  );
}

export default App;
