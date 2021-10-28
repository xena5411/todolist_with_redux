import React, { useState, useRef, useEffect } from 'react';
import styles from './index.css';
import xpic from 'images/x.png';

import { useList } from 'models/todo';

const Item = ({ item }) => {
	//item : {content, id, finished, editing}
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
			<div className={styles.checkbox}>
				<input
					id={item.id}
					type="checkbox"
					checked={item.finished}
					onClick={() => toggleFinishedItem({ id: item.id })}
				/>
				<label htmlFor={item.id}></label>
			</div>
			{item.editing ? (
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
			) : (
				<p
					className={styles.item_detail}
					onClick={() => toggleEditItem({ id: item.id })}
					style={
						item.finished === true
							? { textDecoration: 'line-through', opacity: 0.5 }
							: { textDecoration: 'none', opacity: 1 }
					}
				>
					{item.content}
				</p>
			)}
			<img className={styles.item_x} src={xpic} onClick={() => deleteItem({ id: item.id })} />
		</li>
	);
};

export default Item;
