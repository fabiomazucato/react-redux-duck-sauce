import { createActions, createReducer } from 'reduxsauce'

/**
 * Criando actions types & creators
 */
export const { Types, Creators } = createActions({
	addTodo: ['text'],
	toggleTodo: ['id'],
	removeTodo: ['id']
})
console.log(Types)
console.log(Creators)
/**
 * Criando readucers handlers
 */
const INITIAL_STATE = []

const add = (state = INITIAL_STATE, actions) => [
	...state,
	{
		id: Math.random(),
		text: actions.text,
		complete: false
	}
]

const toggle = (state = INITIAL_STATE, actions) =>
	state.map(todo =>
		todo.id === actions.id ? { ...todo, complete: !todo.complete } : todo
	)

const remove = (state = INITIAL_STATE, actions) =>
	state.filter(todo => todo.id !== actions.id)

/**
 * Criando reducer
 */
export default createReducer(INITIAL_STATE, {
	[Types.ADD_TODO]: add,
	[Types.TOGGLE_TODO]: toggle,
	[Types.REMOVE_TODO]: remove
})
