import React, { useState, useRef, useEffect } from 'react';
import xpic from 'images/x.png';

import { useList } from 'models/todo';
import classnames from 'classnames';
import styles from './index.css';

const Item = ({ item }) => {
	// item : {content, id, finished, editing}
	const [, { deleteItem, toggleEditItem, editItem, toggleFinishedItem }] = useList();
	const [editcontent, setEditContent] = useState('');
	const toDoInput = useRef(null);
	useEffect(() => {
		if (toDoInput != null && item.editing === true) {
			toDoInput.current.focus();
		}
	}, [item.editing]);

	return (
		<li key={item.id} className={styles.item}>
			<div className={styles.left}>
				<div className={styles.checkbox}>
					<input
						id={item.id}
						type="checkbox"
						checked={item.finished}
						onClick={() => toggleFinishedItem({ id: item.id })}
					/>
					<label htmlFor={item.id} />
				</div>
				{item.editing ? (
					<div>
						<input
							className={styles.editinput}
							placeholder="Edit"
							value={editcontent}
							ref={toDoInput}
							onChange={e => {
								setEditContent(e.target.value);
							}}
							onBlur={() => {
								if (editcontent) editItem({ id: item.id, value: editcontent });
								toggleEditItem({ id: item.id });
							}}
						/>
					</div>
				) : (
					<button
						className={styles.texts}
						type="button"
						onClick={() => toggleEditItem({ id: item.id })}
					>
						<p
							className={classnames(styles.item_detail, {
								[styles.item_detail_finished]: item.finished,
							})}
						>
							{item.content}
						</p>
					</button>
				)}
			</div>
			<button className={styles.right} type="button" onClick={() => deleteItem({ id: item.id })}>
				<img className={styles.item_x} src={xpic} alt="del" />
			</button>
		</li>
	);
};

export default Item;
