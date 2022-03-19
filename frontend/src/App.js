
import Companies from './components/Companies'
import ButtonList from './components/ButtonList'
import MyFooter from './components/MyFooter'
import TagPanel from './components/TagPanel'

import React from "react";
// eslint-disable-next-line no-unused-vars
import { IntlProvider, FormattedMessage } from "react-intl";
import useLocale from "./hooks/useLocale";
import { LOCALE_MAP } from "./consts";

function App() {
  const { locale } = useLocale();

  return (
    <IntlProvider locale={locale} messages={LOCALE_MAP[locale]}>
      <div>
        <nav
          className="relative w-full flex flex-wrap items-center justify-between py-1 bg-white-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg"
        >
          <div
            className="container-fluid w-full flex flex-wrap items-center justify-between px-3"
          >
            <div className="container-fluid flex flex-col">
              <p className="text-sm text-black" href="#">contact</p>
              <p className="text-sm text-black" href="#">help us</p>
              <p className="text-sm text-black" href="#">Knolegebase</p>
            </div>
            <div className="bg-gray-400 ">
              <div className="px-6 py-5 text-lg"><e>PREPKIT</e><e className="text-sm">.help</e></div>
            </div>
            <div className="flex">
              <div className="flex-row">
                <span className="fi fi-pl fib px-2">lang1</span>
                <span className="fi fi-ua fib px-2">lang12</span>
                <span className="fi fi-gr fib px-2">lang13</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <TagPanel></TagPanel>
      <ButtonList></ButtonList>
      <Companies></Companies>
      <MyFooter></MyFooter>
    </IntlProvider>
  );

}

export default App;
