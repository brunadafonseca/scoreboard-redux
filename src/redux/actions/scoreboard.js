export const increaseScore = (playerId) => {
  return {
    type: 'INCREASE_SCORE',
    payload: playerId
  }
}
