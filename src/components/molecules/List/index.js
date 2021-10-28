import React, { memo, useState, useEffect } from 'react';
import { useList, useFilter } from 'models/todo';
import Item from '../../atoms/Item';
import styles from './index.css';

const List = () => {
	const [{ list }] = useList();
	const [{ filter }] = useFilter();
	const [showList, setShowList] = useState(list);

	useEffect(() => {
		if (filter === 1) {
			setShowList(list.filter(i => !i.finished));
		} else if (filter === 2) {
			setShowList(list.filter(i => i.finished));
		} else {
			// filter == 0
			setShowList(list);
		}
	}, [filter, list]);

	return (
		<ul className={styles.list}>
			{showList.map(item => (
				<Item key={item.id} item={item} />
			))}
		</ul>
	);
};

export default memo(List);
