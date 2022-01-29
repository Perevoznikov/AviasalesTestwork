import React, {memo} from 'react';
import cl from './Header.module.css'

const Header = () => {
  return (
    <header className={cl.container}>
      <div className={cl.logo}></div>
    </header>
  );
};

export default memo(Header);