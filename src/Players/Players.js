import React from 'react'
import './players.scss'
import { Link } from 'react-router-dom'

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
									props.deletePlayer(player)
								}}>
								Delete
							</button>
							<Link to='/players/edit'>
								<button
									onClick={() => {
										props.selectPlayer(player)
									}}>
									Edit
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)

	return players.length > 0 ? (
		loaded()
	) : (
		<Link to='/players/create'>
			<button>Add Player</button>
		</Link>
	)
}

export default Players
