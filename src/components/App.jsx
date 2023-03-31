import React from 'react'
import styles from "./app.module.css";

import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className={styles.wrapper}>
      {/* Sidebar */}
      <Sidebar />
      {/* Header */}
      <div className={styles.header}>Header</div>
      {/* Content */}
      <div className={styles.content}>Content</div>
      {/* Footer */}
      <div className={styles.footer}>Footer</div>
    </div>
  )
};

export default App;