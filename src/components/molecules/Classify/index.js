import React from 'react';
import { useList, useFilter } from 'models/todo';
import styles from './index.css';

const Classify = () => {
	const [{ left }, { deleteAllFinished }] = useList();
	const [, { setFilter }] = useFilter();
	return (
		<div className={styles.main} id="todo-footer">
			<div className={styles.total} id="todo-count">
				{left} left
			</div>
			<ul className={styles.view_buttons}>
				<button type="button" id="All" onClick={() => setFilter(0)}>
					All
				</button>
				<button type="button" id="Active" onClick={() => setFilter(1)}>
					Active
				</button>
				<button type="button" id="Completed" onClick={() => setFilter(2)}>
					Completed
				</button>
			</ul>
			<div className={styles.clean}>
				<button type="button" id="clearcompleted" onClick={() => deleteAllFinished()}>
					Clear completed
				</button>
			</div>
		</div>
	);
};

export default Classify;
