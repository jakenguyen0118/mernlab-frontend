import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './App.scss'
import Players from './Players/Players'
import Home from './Home/Home'

function App() {
	const url = 'https://jnmernlab.herokuapp.com'
	const [players, setPlayers] = useState([])

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
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route
          exact
          path='/players'
          render={(routerProps) => <Players {...routerProps} players={players} />}
        />
      </Switch>
    </div>
  )
}

export default App
