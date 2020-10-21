import React from 'react'
import './team.scss'

const Team = (props) => {
	const { teams } = props

	const loaded = () => (
		<div className='page-div'>
			<button>Add Team</button>
			<div className='team-container'>
				{teams.map((team) => (
					<div className='team' key={team._id}>
						<div>
							<h2>{team.name}</h2>
							<img src={team.img} alt='teams'/>
							<button>Add Players</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)

	return teams.length > 0 ? loaded() : <h1>Please hold...</h1>
}

export default Team
