import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'

const Home = () => {
	return (
		<div className='home-nav'>
			<Link to='/players'>
				<div className='player-div'>
					<h2>Players</h2>
					<img src='https://am-a.akamaihd.net/image/?resize=750:&f=https%3A%2F%2Flolstatic-a.akamaihd.net%2Fesports-assets%2Fproduction%2Fplayer%2Fbjergsen-d8v00kci.png' />
				</div>
			</Link>
			<Link to='/team'>
				<div className='team-div'>
					<h2>Teams</h2>
					<img src='https://i.imgur.com/P1TeW9y.png' />
				</div>
			</Link>
		</div>
	)
}

export default Home
