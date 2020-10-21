import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import Players from './Players/Players'
import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import Team from './Team/Team'
import PlayerForm from './Form/PlayerForm'

function App() {
	const url = 'https://jnmernlab.herokuapp.com'
	const [players, setPlayers] = useState([])
	const [teams, setTeams] = useState([])

	const emptyPlayer = {
		name: "",
		role: "",
		img: "",
	}

	const getPlayers = () => {
		fetch(url + '/team/org/')
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
			.then((res) => res.json())
			.then((data) => {
				setTeams(data)
			})
	}

	useEffect(() => {
		getTeams()
	}, [])

	const deletePlayer = player => {
		fetch(url + '/players/' + player._id, {
			method: "delete"
		}).then(() => getPlayers())
	}

	const handleCreate = (newPlayer) => {
		fetch(url + '/players/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newPlayer),
		}).then((res) => getPlayers())
	}

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
						<Players {...routerProps} players={players} deletePlayer={deletePlayer}/>
					)}
				/>
				<Route
					exact
					path='/team'
					render={(routerProps) => <Team {...routerProps} teams={teams} />}
				/>
				<Route 
					exact
					path='/players/create'
					render={(routerProps) => (
						<PlayerForm {...routerProps} label='create' players={{emptyPlayer}} handleSubmit={handleCreate} />
					)}
				/>
			</Switch>
		</div>
	)
}

export default App
