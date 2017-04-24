// @flow
import React from "react"
import type { ContextRouter } from "react-router-dom"
import includes from "lodash/includes"
import { FormattedMessage } from "react-intl"
import { uri } from "./server/util"
import type { Song } from "./song/types"
import { fromString } from "./song"
import styles from "./SongSheet.css"

type ErrorState = "not-found" | "error"
type SongState =
  | { status: "ready", value: Song }
  | { status: "error", error: ErrorState }
  | { status: "loading" }
type State = { song: SongState }

export default class SongSheet extends React.Component {
  props: ContextRouter
  state: State = {
    song: { status: "loading" }
  }

  isLoading = () => this.state.song === "loading"

  isError = () => includes(["not-found", "error"], this.state.song)

  componentDidMount = () => {
    fetch(uri(this.props.match.params.id))
      .then(result => result.text())
      .then(raw => fromString(raw))
      .then(song => this.setState({ song: { status: "ready", value: song } }))
      .catch((error: ErrorState) =>
        this.setState({ song: { status: "error", error: "error" } })
      )
  }

  render = () =>
    (this.state.song.status === "error"
      ? <div>Error</div>
      : this.state.song.status === "loading"
          ? <div>Loading</div>
          : <div className={styles.wrapper}>
              <FormattedMessage id="hi" />
            </div>)
}
