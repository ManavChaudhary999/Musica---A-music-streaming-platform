import React from 'react';
import styles from "./Button.module.css";

function Button({type, size, children, ...delegatedProps}) {
  const btnTypeClass = styles[type] || '';
  const btnSizeClass = styles[size] || '';

  return (
    <button className={`${styles.btn} ${btnTypeClass} ${btnSizeClass}`} {...delegatedProps}>
      {children}
    </button>
  )
}

export default Button;
