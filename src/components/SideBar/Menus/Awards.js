import React from 'react';
import { AchieveGold, AchieveSilver, AchievePlatinum, AchieveBronze } from 'svg/svgAchievement';
import { BoxDecor } from 'components/Parts/BoxDecor';

export const Awards = () => {
  return (
    <>
      <h2>our awards</h2>
      <div className="content">
        <ul className="awards">
          <li className="awards__item">
            <div className="awards__item-inner">
              {AchieveGold}
              <h4 className="h4-mob">Best marketplace 2020</h4>
              <p className="p-mob">
                A new digital innovation award is aimed at media that uses the
                latest technology to make
                of crypto services.
              </p>
            </div>
            <BoxDecor />
          </li>
          <li className="awards__item">
            <div className="awards__item-inner">
              {AchievePlatinum}
              <h4 className="h4-mob">Best marketplace 2020</h4>
              <p className="p-mob">
                A new digital innovation award is aimed at media that uses the
                latest technology to make
                of crypto services.
              </p>
            </div>
            <BoxDecor />
          </li>
          <li className="awards__item">
            <div className="awards__item-inner">
              {AchieveSilver}
              <h4 className="h4-mob">Best marketplace 2020</h4>
              <p className="p-mob">
                A new digital innovation award is aimed at media that uses the
                latest technology to make
                of crypto services.
              </p>
            </div>
            <BoxDecor />
          </li>
          <li className="awards__item">
            <div className="awards__item-inner">
              {AchieveBronze}
              <h4 className="h4-mob">Best marketplace 2020</h4>
              <p className="p-mob">
                A new digital innovation award is aimed at media that uses the
                latest technology to make
                of crypto services.
              </p>
            </div>
            <BoxDecor />
          </li>
        </ul>
      </div>
    </>
  )
}