import React from 'react';
import styles from './Sidebar.module.css';

import Logo from "../../assets/logo";
import {Home, BarChart2, MapPin, Heart, PlusSquare, User, AlignJustify} from "react-feather";

function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <img src={Logo} alt="Logo" className={styles.logo} />
      {/* App Nav */}
      <nav className={styles.nav}>
          <button className={styles.button}>
            <div className={styles.icon}><Home /></div>
            <span className={styles.span}>Discover</span>
          </button>
          <button className={styles.button}>
            <div className={styles.icon}><MapPin /></div>
            <span className={styles.span}>Around You</span>
          </button>
          <button className={styles.button}>
            <div className={styles.icon}><BarChart2 /></div>
            <span className={styles.span}>Top Charts</span>
          </button>
      </nav>
      {/* Personal Nav */}
      <nav className={styles.nav}>
        <button className={styles.button}>
          <div className={styles.icon}><PlusSquare /></div>
          <span className={styles.span}>Create Playlist</span>
        </button>
        <button className={styles.button}>
          <div className={styles.icon}><Heart /></div>
          <span className={styles.span}>Liked Songs</span>
        </button>
        <button className={styles.button}>
          <div className={styles.icon}><AlignJustify /></div>
          <span className={styles.span}>Mac's Playlist</span>
        </button>
        <button className={styles.button}>
          <div className={styles.icon}><User /></div>
          <span className={styles.span}>Manage</span>
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
