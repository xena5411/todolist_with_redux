import React, { memo, useState, useEffect } from "react";
import Item from "../../atoms/Item"
import styles from "./index.css";
import { useList, useFilter } from 'models/todo';

const List = () => {
  const [{ list }, ] =  useList();
  const [{ filter }, ] = useFilter();
  const [showList, setShowList] = useState(list);

  useEffect(() => {
		if (filter === 1) {
			setShowList(list.filter(i => !i.finished));
			return;
		}
		else if (filter === 2) {
			setShowList(list.filter(i => i.finished));
			return;
		} else{ //filter == 0
			setShowList(list);
			return;
		}
	}, [filter, list]);

  return (
		<ul className={styles.list}>
			{showList.map(item => (
				<Item key={item.id} item={item} />
			))}
		</ul>
	);  
}


export default memo(List);