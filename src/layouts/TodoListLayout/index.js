import React from 'react';
import TodoList from '../../components/organisms/TodoList';
import Classify from '../../components/molecules/Classify';
import styles from './index.css';


const TodoListLayout = () => (
    <div className={styles.listAndClass}>
		<TodoList />
		<Classify /> 
	</div>
);

export default TodoListLayout;
