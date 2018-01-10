import React, { PureComponent } from 'react'
import Board from './containers/Board'
import './App.css'

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    )
  }
}

export default App
