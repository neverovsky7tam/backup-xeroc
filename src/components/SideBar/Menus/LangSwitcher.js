import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchLang } from '../../../store/actions';
import { langEN, langCH } from '../../../data/languages';
import { MainBlockMob } from '../../BlocksUI/MainBlockMob';
import { ReactComponent as USAFlagIcon } from '../../../assets/img/SideBar/usa-flag.svg';
import { ReactComponent as ChinaFlagIcon } from '../../../assets/img/china.svg';

export const LangSwitcher = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.langObj);
  const styleBlock = { backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' };

  const setLang = () => {
    const nextLang = (currentLang.lang === 'eng') ? langCH : langEN;
    dispatch(switchLang(nextLang));
  }

  return (
    <>
      <h2>language</h2>
      <div className="content">
        <div onClick={setLang}>
          <MainBlockMob
            icon={<USAFlagIcon className="social-icon__big" />}
            header={'English'}
            span={(currentLang.lang === 'eng') ? 'Current language' : 'Change language'}
            styleInner={(currentLang.lang === 'eng') ? styleBlock : null} />
        </div>
        <div onClick={setLang}>
          <MainBlockMob
            icon={<ChinaFlagIcon className="social-icon__big" />}
            header={'Chinese'}
            span={(currentLang.lang === 'eng') ? '改變語言' : '目前的语言'}
            styleInner={(currentLang.lang === 'chi') ? styleBlock : null} />
        </div>
      </div>
    </>
  )
}