import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodoActions.module.css'

function TodoActions({ resetTodos, deletedCompletedTodos, completedTodosExsist}) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button tittle='Reset Todos' onClick={resetTodos}>
                <RiRefreshLine />
            </Button>                          
            <Button tittle='Clear Completed Todos' onClick={deletedCompletedTodos} disabled={!completedTodosExsist}>
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}

export default TodoActions