import Companies from './components/Companies'
import ButtonList from './components/ButtonList'
import MyFooter from './components/MyFooter'
import TagPanel from './components/TagPanel'
import AddArticle from './modules/AddArticle/components'
import JoinUs from './modules/JoinUs/components'
import AddOrganisation from './modules/AddArticle/components'

import React from 'react'
// eslint-disable-next-line no-unused-vars
import { IntlProvider, FormattedMessage } from 'react-intl'
import useLocale from './hooks/useLocale'
import { LOCALE_MAP } from './consts'
import Myheader from './components/MyHeader.js'
import { useState } from 'react'

function renderPage(page) {
  let ret = (
    <div>
      <TagPanel></TagPanel>
      <ButtonList></ButtonList>
      <Companies></Companies>
      <MyFooter></MyFooter>
    </div>
  )
  switch (page) {
    case 'AddArticle':
      ret = <AddArticle />
      break
    case 'JoinUs':
      ret = <JoinUs />
      break
    case 'AddOrganisation':
      ret = <AddOrganisation />
      break

    default:
      break
  }
  return ret
}

function App() {
  const { locale } = useLocale()
  const [page, setPage] = useState('')

  return (
    <IntlProvider locale={locale} messages={LOCALE_MAP[locale]}>
      <Myheader onPageChange={setPage}></Myheader>
      {renderPage(page)}
    </IntlProvider>
  )
}

export default App
