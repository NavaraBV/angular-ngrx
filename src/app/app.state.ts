import { TodoItem } from './store/models/todolist.model'

export interface AppState {
    readonly todolist: TodoItem[]
}