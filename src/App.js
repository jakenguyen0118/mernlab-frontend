import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import Players from './Players/Players'
import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import Team from './Team/Team'
import PlayerForm from './Form/PlayerForm'
import TeamForm from './Form/TeamForm'

function App() {
	const url = 'https://jnmernlab.herokuapp.com'
	const emptyPlayer = {
		name: '',
		role: '',
		img: '',
	}

	const emptyTeam = {
		name: '',
		img: '',
	}
	const [players, setPlayers] = useState([])
	const [selectedPlayer, setSelectedPlayer] = useState(emptyPlayer)
	const [teams, setTeams] = useState([])
	const [selectedTeam, setSelectedTeam] = useState(emptyTeam)

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
			.then((res) => res.json())
			.then((data) => {
				setTeams(data)
			})
	}

	useEffect(() => {
		getTeams()
	}, [])

	const deletePlayer = (player) => {
		fetch(url + '/players/' + player._id, {
			method: 'delete',
		}).then(() => getPlayers())
	}

	const deleteTeam = (team) => {
		fetch(url + '/team/' + team._id, {
			method: 'delete',
		}).then(() => getTeams())
	}

	const handleUpdate = (player) => {
		fetch(url + '/players/' + player._id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(player),
		}).then(() => getPlayers)
	}

	const selectPlayer = (player) => {
		setSelectedPlayer(player)
	}

	const selectTeam = (team) => {
		setSelectedTeam(team)
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

	const handleCreateTeam = (newTeam) => {
		fetch(url + '/team/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newTeam),
		}).then(() => getTeams())
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
						<Players
							{...routerProps}
							players={players}
							deletePlayer={deletePlayer}
							selectPlayer={selectPlayer}
						/>
					)}
				/>
				<Route
					exact
					path='/team'
					render={(routerProps) => (
						<Team
							{...routerProps}
							teams={teams}
							deleteTeam={deleteTeam}
							selectTeam={selectTeam}
						/>
					)}
				/>
				<Route
					exact
					path='/players/create'
					render={(routerProps) => (
						<PlayerForm
							{...routerProps}
							label='create'
							players={{ emptyPlayer }}
							handleSubmit={handleCreate}
						/>
					)}
				/>
				<Route
					exact
					path='/players/edit'
					render={(routerProps) => (
						<PlayerForm
							{...routerProps}
							label='edit'
							players={{ selectedPlayer }}
							handleSubmit={handleUpdate}
						/>
					)}
				/>
				<Route
					exact
					path='/team/create'
					render={(routerProps) => (
						<TeamForm
							{...routerProps}
							label='create'
							team={{ emptyTeam }}
							handleSubmit={handleCreateTeam}
						/>
					)}
				/>
				<Route
					exact
					path='/team/edit'
					render={(routerProps) => (
						<TeamForm
							{...routerProps}
							label='edit'
							team={{ selectedTeam }}
							handleSubmit={handleUpdate}
						/>
					)}
				/>
			</Switch>
		</div>
	)
}

export default App
