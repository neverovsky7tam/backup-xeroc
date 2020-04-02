import React, { useState } from 'react';
import { languages } from '../../data/languages';
import { Diamond } from '../Parts/Parts';
import { ReactComponent as Planet } from '../../assets/img/Header/planet-earth.svg';

const LangSwitcher = () => {
  const langBtn = React.createRef();
  const langModal = React.createRef();
  const arrow = React.createRef();

  const [langObj, setLang] = useState(languages[0]);

  const onHover = (param) => {
    if (param) {
      langModal.current.classList.remove('lang-menu__modal_animatOff');
      langModal.current.classList.add('lang-menu__modal_animateOn');

      langBtn.current.classList.remove('lang-menu__btn_hoverOff');
      langBtn.current.classList.add('lang-menu__btn_hoverOn')

      arrow.current.classList.add('lang-menu__arrow_active');
    } else {
      langModal.current.classList.remove('lang-menu__modal_animateOn');
      langModal.current.classList.add('lang-menu__modal_animatOff');

      langBtn.current.classList.remove('lang-menu__btn_hoverOn')
      langBtn.current.classList.add('lang-menu__btn_hoverOff')

      arrow.current.classList.remove('lang-menu__arrow_active');
    }
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
        onMouseEnter={() => onHover(true)}
        ref={langBtn}
      >
        {langObj.lang}
        <span className="lang-menu__arrow" ref={arrow}><i className="fas fa-long-arrow-alt-left"></i></span>
      </button>
      <div
        className="lang-menu__modal"
        ref={langModal}
        onClick={changeLang}
        onMouseLeave={() => onHover(false)}>
        <div className="lang-menu__modal-content d-flex justify-content-center align-items-center cursor-pointer">
          <div className="d-flex">
            <langObj.pic className="flag-icon"/>
            <button>{langObj.lang}</button>
          </div>
          <Diamond />
        </div>
      </div>
    </div>
  )
}

export default LangSwitcher;
