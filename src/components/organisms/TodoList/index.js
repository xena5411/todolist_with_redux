import React, { memo } from 'react';
import Typebar from '../../atoms/TypeBar';
import List from '../../molecules/List';
import styles from './index.css';

const TodoList = () => (
	<div className={styles.typeAndList}>
		<Typebar />
		<List />
	</div>
);

export default memo(TodoList);
