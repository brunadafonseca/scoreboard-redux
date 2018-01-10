// src/components/Player.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusOneButton from './PlusOneButton'
import './Player.css'
import { increaseScore } from '../redux/actions/scoreboard'
import { connect } from 'react-redux'

export const playerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
})

class Player extends PureComponent {
  static propTypes = {
    ...playerShape.isRequired,
    increaseScore: PropTypes.func.isRequired
  }

  increasePlayerScore = () => {
    const { id } = this.props
    this.props.increaseScore(id)
  }

  render() {
    const { name, score } = this.props

    return (
      <li className="Player">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
        <PlusOneButton onClick={this.increasePlayerScore} />
      </li>
    )
  }
}

const mapDispatchToProps = {
  increaseScore
}

export default connect(null, mapDispatchToProps)(Player)
