import React, { useState } from 'react'

const Form = (props) => {
	const [formData, setFormData] = useState(props.players)

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleSubmit(formData)
		props.history.push('/players')
	}

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='name'
				placeholder='Player Name'
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
			<input
				type='text'
				name='role'
				placeholder='Role'
				value={formData.role}
				onChange={handleChange}
			/>
			<input type='submit' value={props.label} />
		</form>
	)
}

export default Form
