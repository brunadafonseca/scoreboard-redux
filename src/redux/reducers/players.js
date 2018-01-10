export const players = [
  { id: 1, name: 'Arno', score: 4 },
  { id: 2, name: 'Mat', score: 6 },
  { id: 3, name: 'Mike', score: 3 },
  { id: 4, name: 'Wouter', score: 4 },
  { id: 5, name: 'Bram', score: 5 },
  { id: 6, name: 'Mimi', score: 3 }
]

export default function(state = players, action = {}) {
  if (action.type === 'INCREASE_SCORE') {
    return state.map((player) => {
      if (player.id !== action.payload) return player
      return { ...player, score: player.score + 1 }
    })
  }
  return state
}
