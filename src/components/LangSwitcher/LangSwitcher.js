import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { switchLang } from '../../store/actions';
import { langBtnContent } from '../../data/languages';
import { Diamond } from '../Parts/Parts';
import { ReactComponent as Planet } from '../../assets/img/Header/planet-earth.svg';

const LangSwitcher = () => {
  const langModal = React.createRef();

  const [langObj, setLang] = useState(langBtnContent[0]);
  const dispatch = useDispatch();

  const onHover = (elem, action) => {
    elem.current.style.display = action;
  }

  const changeLang = (e) => {
    const nextLang = (langObj.lang === 'eng') ? langBtnContent[1] : langBtnContent[0];
    setLang(nextLang);
    dispatch(switchLang(nextLang.lang));

    e.target.addEventListener('selectstart', (e) => {
      e.preventDefault();
    })
  }

  const nextLang = (langObj.lang === 'eng') ? langBtnContent[1] : langBtnContent[0];

  return (
    <div
      className="lang-menu d-flex align-items-center cursor-pointer"
      onMouseEnter={() => onHover(langModal, 'block')}>
      <Planet />
      <button
        className="lang-menu__btn cursor-pointer">
        {langObj.lang}
      </button>
      <div
        className="lang-menu__modal"
        ref={langModal}
        onClick={changeLang}
        onMouseLeave={() => onHover(langModal, '')}>
        <div className="lang-menu__modal-content d-flex justify-content-center align-items-center cursor-pointer">
          <div className="d-flex">
            <nextLang.pic className="flag-icon" />
            <button className="cursor-pointer">{nextLang.lang}</button>
          </div>
          <Diamond />
        </div>
      </div>
    </div>
  )
}

export default LangSwitcher;
