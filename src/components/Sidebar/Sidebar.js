import React from 'react';
import styles from './Sidebar.module.css';

import Logo from "../../assets/logo";
import {Home, Disc, BarChart2, MapPin, Heart, PlusSquare, User, AlignJustify} from "react-feather";

function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      {/* App Nav */}
      <nav className={styles.nav}>
          <button>
            <Home />
            <span>Discover</span>
          </button>
          <button><MapPin /></button>
          <button><BarChart2 /></button>
      </nav>
      {/* Personal Nav */}
      <nav className={styles.nav}>
          <button><PlusSquare /></button>
          <button><Heart /></button>
          <button><AlignJustify /></button>
          <button><User /></button>
      </nav>
    </div>
  );
}

export default Sidebar;
