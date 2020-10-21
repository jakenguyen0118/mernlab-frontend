import React from 'react'
import './team.scss'
import {Link} from 'react-router-dom'

const Team = (props) => {
	const { teams } = props

	const loaded = () => (
		<div className='page-div'>
			<Link to='/team/create'>
				<button>Add Team</button>
			</Link>
			<div className='team-container'>
				{teams.map((team) => (
					<div className='team' key={team._id}>
						<div>
							<h2>{team.name}</h2>
							<img src={team.img} alt='teams' />
							<button>Add Players</button>
							<button
								onClick={() => {
									props.deleteTeam(team)
								}}>
								Delete
							</button>
							<Link to='/team/edit'>
								<button
									onClick={() => {
										props.selectTeam(team)
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

	return teams.length > 0 ? (
		loaded()
	) : (
		<Link to='/players/create'>
			<button>Add Player</button>
		</Link>
	)
}

export default Team
