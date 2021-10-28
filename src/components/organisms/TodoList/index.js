import React, { memo } from "react";
import Typebar from '../../atoms/TypeBar';
import List from '../../molecules/List';
import styles from './index.css';

const TodoList = () => (
    <section className={styles.typeAndList}>
        <Typebar />
        <List />
	</section>
);

export default memo(TodoList);