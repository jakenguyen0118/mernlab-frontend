import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './App.scss'
import Players from './Players/Players'
import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import Team from './Team/Team'

function App() {
	const url = 'https://jnmernlab.herokuapp.com'
  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])

	const getPlayers = () => {
		fetch(url + '/players/')
			.then((res) => res.json())
			.then((data) => {
				setPlayers(data)
			})
	}

	useEffect(() => {
		getPlayers()
  }, [])
  
  const getTeams = () => {
    fetch(url + '/team/')
    .then(res => res.json())
    .then(data => {
      setTeams(data)
    })
  }

  useEffect(() => {
		getTeams()
  }, [])
  
  return (
		<div className='App'>
			<NavBar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route
					exact
					path='/players'
					render={(routerProps) => (
						<Players {...routerProps} players={players} />
					)}
				/>
				<Route
					exact
					path='/team'
					render={(routerProps) => (
						<Team {...routerProps} teams={teams} />
					)}
				/>
			</Switch>
		</div>
	)
}

export default App
