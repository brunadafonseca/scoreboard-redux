import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Podium from './Podium'
import Player, { playerShape } from '../components/Player'
import './Board.css'
import { connect } from 'react-redux'

class Board extends PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(playerShape).isRequired,
  }

  renderPlayer = (player, index) => {
    return <Player key={index} { ...player } />
  }

  render() {
    return (
      <div>
        <Title content="Scoreboard" />
        <Podium players={this.props.players} />

        <ul className="Board">
            {this.props.players.map(this.renderPlayer)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ players }) => ({
  players
})

export default connect(mapStateToProps)(Board)
