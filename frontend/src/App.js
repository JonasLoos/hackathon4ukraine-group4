
import Companies from './components/Companies'
import ButtonList from './components/ButtonList'
import MyFooter from './components/MyFooter'
import TagPanel from './components/TagPanel'

import React from "react";
// eslint-disable-next-line no-unused-vars
import { IntlProvider, FormattedMessage } from "react-intl";
import useLocale from "./hooks/useLocale";
import { LOCALE_MAP } from "./consts";
import Myheader from "./components/MyHeader.js"
function App() {
  const { locale } = useLocale();

  return (
    <IntlProvider locale={locale} messages={LOCALE_MAP[locale]}>
      <Myheader></Myheader>
      <TagPanel></TagPanel>
      <ButtonList></ButtonList>
      <Companies></Companies>
      <MyFooter></MyFooter>
    </IntlProvider>
  );

}

export default App;
