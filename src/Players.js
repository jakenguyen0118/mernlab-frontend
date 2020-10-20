import React from 'react'
import './App.scss'

const Players = (props) => {
	const { players } = props
	console.log(players)

	const loaded = () => (
		<div className='player-container'>
			{players.map((player) => (
				<div className='player' key={player._id}>
					<div>
						<h2>{player.name}</h2>
						<h3>Position: {player.role}</h3>
					</div>
				</div>
			))}
		</div>
	)

	return players.length > 0 ? loaded() : <h1>Please hold...</h1>
}

export default Players
