import React, { useState } from 'react';
import { languages } from '../../data/languages';
import { Diamond } from '../Parts/Parts';
import { ReactComponent as Planet } from '../../assets/img/Header/planet-earth.svg';

const LangSwitcher = () => {
  const langModal = React.createRef();

  const [langObj, setLang] = useState(languages[0]);

  const onHover = (elem, action) => {
    elem.current.style.display = action;
  }

  const changeLang = (e) => {
    const nextLang = (langObj.lang === 'eng') ? languages[1] : languages[0];
    setLang(nextLang);

    e.target.addEventListener('selectstart', (e) => {
      e.preventDefault();
    })
  }

  return (
    <div className="lang-menu d-flex align-items-center">
      <Planet />
      <button
        className="lang-menu__btn"
        onMouseEnter={() => onHover(langModal, 'block')}>
        {langObj.lang}
      </button>
      <div
        className="lang-menu__modal"
        ref={langModal}
        onClick={changeLang}
        onMouseLeave={() => onHover(langModal, '')}>
        <div className="lang-menu__modal-content d-flex justify-content-center align-items-center cursor-pointer">
          <div className="d-flex">
            <langObj.pic className="flag-icon" />
            <button>{langObj.lang}</button>
          </div>
          <Diamond />
        </div>
      </div>
    </div>
  )
}

export default LangSwitcher;
