import React, { useState } from 'react'

const TeamForm = (props) => {
	const [formData, setFormData] = useState(props.team)

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleSubmit(formData)
		props.history.push('/team')
	}

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='name'
				placeholder='Team Name'
				value={formData.name}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='img'
				placeholder='Img URL'
				value={formData.img}
				onChange={handleChange}
			/>
			<input type='submit' value={props.label} />
		</form>
	)
}

export default TeamForm
