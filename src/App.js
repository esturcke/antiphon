// @flow
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { IntlProvider, FormattedMessage } from "react-intl"
import SongSheet from "./SongSheet"
import styles from "./App.css"
import messages from "./messages.json"

const Hi = () => (
  <div className={styles.wrapper}><FormattedMessage id="hi" /></div>
)

const App = () => (
  <IntlProvider locale="en-US" messages={messages}>
    <Router>
      <div>
        <Route exact path="/" component={Hi} />
        <Route path="/song/:id" component={SongSheet} />
      </div>
    </Router>
  </IntlProvider>
)

export default App
