import React from 'react';

import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';
import styles from './index.css';

const App = ({ children }) => (
	<>
		<div className={styles.block}>
			<Header />
			{children}
		</div>
		<div className={styles.outblock} />
		<Footer />
	</>
);

export default App;
