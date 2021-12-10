import React, { useState } from 'react';
import { useList } from 'models/todo';
import styles from './index.css';

const NewItem = () => {
	const [, { addItem }] = useList();
	const [newItem, setNewItem] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		if (!newItem) return;
		addItem({ value: newItem });
		setNewItem('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className={styles.addItem}
				placeholder="輸入文字可以加新工作，順便加薪好ㄇ"
				value={newItem}
				onChange={e => {
					setNewItem(e.target.value);
				}}
			/>
		</form>
	);
};

export default NewItem;
