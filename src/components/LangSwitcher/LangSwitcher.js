import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchLang } from '../../store/actions';
import { langEN, langCH } from '../../data/languages';
import { Diamond } from '../Parts/Parts';
import { ReactComponent as Planet } from '../../assets/img/Header/planet-earth.svg';

const LangSwitcher = () => {
  const langModal = React.createRef();

  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.langObj);

  const onHover = (elem, action) => {
    elem.current.style.display = action;
  }

  const changeLang = (e) => {
    const nextLang = (currentLang.lang === 'eng') ? langCH : langEN;
    dispatch(switchLang(nextLang));

    e.target.addEventListener('selectstart', (e) => {
      e.preventDefault();
    })
  }

  const nextLang = (currentLang.lang === 'eng') ? langCH : langEN;

  return (
    <div
      className="lang-menu d-flex align-items-center cursor-pointer"
      onMouseEnter={() => onHover(langModal, 'block')}>
      <Planet />
      <button
        className="lang-menu__btn cursor-pointer">
        {currentLang.lang}
      </button>
      <div
        className="lang-menu__modal"
        ref={langModal}
        onClick={changeLang}
        onMouseLeave={() => onHover(langModal, '')}>
        <div className="lang-menu__modal-content d-flex justify-content-center align-items-center cursor-pointer">
          <div className="d-flex">
            <nextLang.flag className="flag-icon" />
            <button className="cursor-pointer">{nextLang.lang}</button>
          </div>
          <Diamond />
        </div>
      </div>
    </div>
  )
}

export default LangSwitcher;
