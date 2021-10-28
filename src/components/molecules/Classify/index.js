import React from "react";
import styles from "./index.css"
import { useList, useFilter } from "models/todo"

const Classify = () => {
	const [{ left }, { deleteAllFinished }] = useList();
	const [, { setFilter }] = useFilter();
	return (
		<div className={styles.main} id="todo-footer">
			<div>
				<p className={styles.total} id="todo-count">
					{left} left
				</p>
			</div>
			<ul className={styles.view_buttons}>
				<button id="All" onClick={() => setFilter(0)}>
					All
				</button>
				<button id="Active" onClick={() => setFilter(1)}>
					Active
				</button>
				<button id="Completed" onClick={() => setFilter(2)}>
					Completed
				</button>
			</ul>
			<div className={styles.clean}>
				<button id="clearcompleted" onClick={() => deleteAllFinished()}>
					Clear completed
				</button>
			</div>
		</div>
	);
};

export default Classify;
