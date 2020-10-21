import React from 'react'
import './players.scss'
import {Link} from 'react-router-dom'

const Players = (props) => {
	const { players } = props
	console.log(players)

	const loaded = () => (
		<div>
			<Link to='/players/create'>
				<button>Add Player</button>
			</Link>
			<div className='player-container'>
				{players.map((player) => (
					<div className='player' key={player._id}>
						<div>
							<h2>{player.name}</h2>
							<img src={player.img} alt='playerimg' />
							<h3>Position: {player.role}</h3>
							<button
								onClick={() => {
									props.deletePlayer(players)
								}}>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)

	return players.length > 0 ? loaded() : <h1>Please hold...</h1>
}

export default Players
