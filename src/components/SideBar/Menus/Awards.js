import React from 'react';
import { ReactComponent as GoldAwards } from '../../../assets/img/achievment_gold.svg';
import { ReactComponent as PlatinumAwards } from '../../../assets/img/achievment_platinum.svg';
import { ReactComponent as SilverAwards } from '../../../assets/img/achievment_silver.svg';
import { ReactComponent as BronzeAwards } from '../../../assets/img/achievment_bronze.svg';
import { BoxDecor } from '../../Parts/BoxDecor';

export const Awards = () => {
  return (
    <>
      <h2>our awards</h2>
      <div className="content">
        <ul className="awards">
          <li className="awards__item">
            <div className="awards__item-inner">
              <GoldAwards />
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
              <PlatinumAwards />
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
              <SilverAwards />
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
              <BronzeAwards />
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