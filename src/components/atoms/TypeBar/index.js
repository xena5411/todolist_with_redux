import React, {useState, useEffect}from "react";
import styles from "./index.css";
import { useList } from 'models/todo';


const NewItem = () =>{
    const [, { addItem }] = useList();
    const [newItem, setNewItem] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newItem) return;
        addItem({ value: newItem });
        setNewItem("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input className={styles.input} 
                placeholder="What needs to be done?" 
                value={newItem}
                onChange={e => {
                    setNewItem(e.target.value);
                }}
            />
        </form>
    )
}

export default NewItem;