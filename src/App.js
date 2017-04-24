// @flow
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import SongSheet from "./SongSheet"
import styles from "./App.css"

const Hi = () => <div className={styles.wrapper}>Hi!</div>

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Hi} />
      <Route path="/song/:id" component={SongSheet} />
    </div>
  </Router>
)

export default App
