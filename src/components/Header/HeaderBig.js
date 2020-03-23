import React from "react";

import style from "./Header.module.css";

/**Header comp description */
const HeaderBig = ({ children }) => (
  <h1 className={style.HeaderBig}>{children}</h1>
);

HeaderBig.propTypes = {
  /**opis propsa */
  children: ''
}
HeaderBig.defaultProps = {
  children: 'asaa'
}

export default HeaderBig;
