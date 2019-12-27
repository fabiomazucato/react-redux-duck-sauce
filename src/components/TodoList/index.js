import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as TodoActions } from '../../store/ducks/todos'

import '../../assets/css/styles.css'

class TodoList extends Component {
	handleSubmit = e => {
		e.preventDefault()

		this.props.addTodo(this.input.value)

		this.input.value = ''
	}

	todosList = () => {
		const { todos, toggleTodo, removeTodo } = this.props

		return todos.map(todo => (
			<li key={todo.id}>
				{todo.complete ? <s>{todo.text}</s> : todo.text}
				<div>
					<button onClick={() => toggleTodo(todo.id)}>Toggle</button>
					<button onClick={() => removeTodo(todo.id)}>Remove</button>
				</div>
			</li>
		))
	}

	render() {
		return (
			<section>
				<form onSubmit={this.handleSubmit}>
					<input ref={el => (this.input = el)} />
					<button type='submit'>Novo</button>
				</form>

				<ul>{this.todosList()}</ul>
			</section>
		)
	}
}

const mapStateToProps = state => ({
	todos: state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
