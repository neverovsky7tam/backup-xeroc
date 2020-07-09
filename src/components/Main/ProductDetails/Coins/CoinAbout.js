import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { renderCoinInfoItems } from './CoinInfo';
import Container from '../../../BlocksUI/Container';
import { ReactComponent as CloseCross } from '../../../../assets/img/close-cross.svg';
import { ReactComponent as InfoIcon } from '../../../../assets/img/Product_details/info-icon.svg';
import { ReactComponent as GreenArrow } from '../../../../assets/img/green-arrow.svg';
import { ReactComponent as RedArrow } from '../../../../assets/img/red-arrow.svg';
import { ReactComponent as ToggleArrow } from '../../../../assets/img/toggle-arrow.svg';
import { ReactComponent as BtnLine } from '../../../../assets/img/Product_details/btn_line.svg';
import { ReactComponent as BtnChart } from '../../../../assets/img/Product_details/btn_chart.svg';
import { BoxDecor } from '../../../Parts/BoxDecor';

const CoinAbout = ({ coin, item, currentHash }) => {
  const [electricityCost, setElectricityCost] = useState(0.17);
  const [isGraphicLine, setGraphicLine] = useState(true);
  const [isGraphicChart, setGraphicChart] = useState(true);
  const coinInfo = React.createRef();
  const btnGraphicLine = React.createRef();
  const btnGraphicChart = React.createRef();

  const isMobile = useSelector((state) => state.deviceType);

  let price = coin['Price'];
  const checkPriceLength = () => {
    if (price.length > 5) price = price.slice(0, 5);
    return price;
  };

  const priceDisplay = (isMobile) ? checkPriceLength() : price;

  const incomeDay = (currentHash * (item.efficiency / coin.ratio)).toFixed(2);
  const electricityDay = (electricityCost * item.efficiency * currentHash).toFixed(2);
  const profitDay = (incomeDay - electricityDay).toFixed(2);

  const setElectricityVal = (e, param) => {
    let val = null;
    if (param) val = +electricityCost + 0.01;
    else val = +electricityCost - 0.01;

    if (val < 0) return;
    else setElectricityCost(val.toFixed(2));

    e.target.addEventListener('selectstart', (e) => {
      e.preventDefault();
    }, { once: true });
  };

  let prevInputVal = electricityCost;
  const setElectricityInputVal = (e) => {
    const value = +e.target.value
    if (isNaN(value) || value < 0) {
      e.target.value = prevInputVal;
      return;
    } else {
      setElectricityCost(value.toFixed(2));
    }
  };

  let electricityControl = (
    <div className="grah__control-input item-active">
      <input
        type="text"
        defaultValue={electricityCost}
        onChange={setElectricityInputVal} />
    </div>
  );

  if (!isMobile) {
    electricityControl = (
      <button className="graph__control-btn">
        <div
          className="arrow-holder arrow-holder__left"
          onClick={(e) => setElectricityVal(e, false)}>
          <ToggleArrow className="arrow arrow_left" />
        </div>
        <div className="electricity-val">{electricityCost}</div>
        <div
          className="arrow-holder arrow-holder__right"
          onClick={(e) => setElectricityVal(e, true)}>
          <ToggleArrow className="arrow arrow_right" />
        </div>
      </button>
    )
  };

  const renderGraphScaleItems = () => {
    const itemsArr = [];
    let currentVal = coin.graphicScaleMaxVal;
    let i = 0;
    while (i < 11) {
      itemsArr.push(currentVal.toFixed(2));
      currentVal -= coin.scaleStep;
      i += 1;
    }

    const items = itemsArr.map((el, idx) => {
      let val = el;
      if (+el / 1000 > 0) {
        val = el.slice(0, -6) + ',' + el.slice(-6);
      }
      return (
        <li key={idx} className="graph-hourly__item"><span className="item-head">${val}</span><div className="item-body"></div></li>
      );
    });
    return items;
  }

  useEffect(() => {
    if (isMobile) {
      const setBtnColor = (btn, param) => {
        if (param) btn.style.background = '#26268f';
        else btn.style = '';
      };
      setBtnColor(btnGraphicLine.current, isGraphicLine);
      setBtnColor(btnGraphicChart.current, isGraphicChart);
    } else {
      const setSvgColor = (svg, param) => {
        for (let path of svg.children) {
          const color = (param) ? '#fff' : '#c4c4c4';
          path.style.stroke = color;
        }
      };

      const svgGraphicLine = btnGraphicLine.current.firstElementChild;
      setSvgColor(svgGraphicLine, isGraphicLine);

      const svgGraphicChart = btnGraphicChart.current.firstElementChild;
      setSvgColor(svgGraphicChart, isGraphicChart);
    }
  });

  const displayCoinInfo = (e) => {
    if (e.type === 'mouseenter') coinInfo.current.style.display = 'block';
    else coinInfo.current.style = '';
  }

  const priceDynamicCssClass = (coin.dynamics >= 0) ? 'growth' : 'growth growth_false';

  return (
    <section className="coin-about">
      <div className="coin-about__header">
        <div className="d-flex">
          <h3>{coin.title} {coin.value.toUpperCase()}</h3>
          <div
            className="coin-info-holder"
            onMouseEnter={displayCoinInfo}
            onMouseLeave={displayCoinInfo}>
            <h3>Info</h3>
            <section className="drop-menu" ref={coinInfo}>
              <div className="drop-menu__inner">
                <div className="diamond-part">
                  <div className="diamond-bg"></div>
                </div>
                <div className="drop-menu__header">
                  <h4>Info</h4>
                  <CloseCross className="close-cross" />
                </div>
                <div className="drop-menu__box">
                  <div className="coin-info__header">
                    <h3>{coin.value.toUpperCase()}</h3>
                    <InfoIcon />
                  </div>
                  <dl className="coin-info__body">
                    {renderCoinInfoItems(coin)}
                  </dl>
                </div>
              </div>
              <BoxDecor />
            </section>
          </div>
        </div>
        <div className="coin-about__header-left">
          <div className="price"><span className="price__unit">$</span>{priceDisplay}</div>
          <div className="coin-dynamics">
            <span className={priceDynamicCssClass}>{coin.dynamics}%</span>
            {(coin.dynamics > 0) ? <GreenArrow /> : <RedArrow />}
          </div>
        </div>
      </div>
      <p className="coin-about__txt-block">{coin.description}</p>
      <div className="coin-about__params">
        <h3>Mining with {item.manufacturer} {item.model}, HR - {currentHash}</h3>
        <div className="profit">
          <div className="column column_head">
            <div className="column__header">Term</div>
            <ul className="column__body">
              <li className="column__item">Income</li>
              <li className="column__item">Electricity</li>
              <li className="column__item">Profit</li>
            </ul>
          </div>
          <div className="column column_main">
            <div className="column__header">Day</div>
            <ul className="column__body column__decor">
              <li className="column__item column__item_income">${incomeDay}</li>
              <li className="column__item column__item_electricity">${electricityDay}</li>
              <li className="column__item column__item_profit">${profitDay}</li>
            </ul>
          </div>
          <div className="column column_main">
            <div className="column__header">Month</div>
            <ul className="column__body column__decor">
              <li className="column__item column__item_income">${(incomeDay * 30).toFixed(2)}</li>
              <li className="column__item column__item_electricity">${(electricityDay * 30).toFixed(2)}</li>
              <li className="column__item column__item_profit">${(profitDay * 30).toFixed(2)}</li>
            </ul>
          </div>
          <div className="column column_main column_last">
            <div className="column__header">Year</div>
            <ul className="column__body column__decor custom">
              <li className="column__item column__item_income">${(incomeDay * 365).toFixed(2)}</li>
              <li className="column__item column__item_electricity">${(electricityDay * 365).toFixed(2)}</li>
              <li className="column__item column__item_profit">${(profitDay * 365).toFixed(2)}</li>
            </ul>
          </div>
        </div>
        <div className="graph">
          <h5 className="graph__header">Electricity, <span>$/kWh</span></h5>
          <div className="graph__inner">
            {electricityControl}
            <div className="profit-graphic-holder">
              <ul className="scale">
                <li className="scale-item"></li>
                <li className="scale-item"></li>
                <li className="scale-item"></li>
                <li className="scale-item"></li>
                <li className="scale-item"></li>
                <li className="scale-item"></li>
                <li className="scale-item"></li>
                <li className="scale-item"></li>
                <li className="scale-item"></li>
                <li className="scale-item"></li>
                <li className="scale-item"></li>
                <li className="scale-item"></li>
              </ul>
              {<coin.graphProfit className="profit-graphic" />}
            </div>
          </div>
        </div>
      </div>
      <div className="coin-about__dynamics">
        <div className="controls">
          <div className="btns-wrapper btns-wrapper__left">
            <button
              className="btn-graph-line"
              ref={btnGraphicLine}
              onClick={() => setGraphicLine(!isGraphicLine)}>
              <BtnLine />
            </button>
            <button
              className="btn-graph-chart"
              ref={btnGraphicChart}
              onClick={() => setGraphicChart(!isGraphicChart)}>
              <BtnChart />
            </button>
          </div>
          <div className="btns-wrapper btns-wrapper__right">
            {
              isMobile &&
              <button>
                <Container
                  style={{ height: '100%' }}
                  innerStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  24h
                  </Container>
              </button>
            }
            {!isMobile &&
              <>
                <button className="btn-main">24h</button>
                <button>7d</button>
                <button>14d</button>
                <button>30d</button>
                <button>90d</button>
                <button>Max</button>
              </>
            }
          </div>
        </div>
        <div className="graphics">
          <div className="graph-hourly">
            <ul className="graph-hourly__inner">
              {renderGraphScaleItems()}
            </ul>
            <div className="graph-hourly__scale-wrapper">
              <ul className="graph-hourly__scale">
                <li className="scale-item"><span>9PM</span></li>
                <li className="scale-item"><span>10Jun</span></li>
                <li className="scale-item"><span>3AM</span></li>
                <li className="scale-item"><span>6AM</span></li>
                <li className="scale-item"><span>9AM</span></li>
                <li className="scale-item"><span>12AM</span></li>
                <li className="scale-item"><span>3PM</span></li>
                <li className="scale-item"><span>6PM</span></li>
                <li className="scale-item"><span>9PM</span></li>
                <li className="scale-item"><span>11Jun</span></li>
                <li className="scale-item"><span>3AM</span></li>
                <li className="scale-item"><span>6AM</span></li>
                <li className="scale-item"><span>9AM</span></li>
                <li className="scale-item"><span>12AM</span></li>
                <li className="scale-item"><span>3PM</span></li>
                <li className="scale-item"><span>6PM</span></li>
                <li className="scale-item"><span>9PM</span></li>
                <li className="scale-item"><span>12Jun</span></li>
                <li className="scale-item"><span>3AM</span></li>
                <li className="scale-item"><span>6AM</span></li>
                <li className="scale-item"><span>9AM</span></li>
                <li className="scale-item"><span>12AM</span></li>
                <li className="scale-item"><span>3PM</span></li>
                <li className="scale-item"><span>6PM</span></li>
                <li className="scale-item"><span>9PM</span></li>
                <li className="scale-item"><span>13Jun</span></li>
              </ul>
            </div>
            <div className="graphics-holder graphics-holder_top">
              {isGraphicLine && <coin.graphLine className="graphic" />}
              {isGraphicChart && <coin.graphChart className="graphic" />}
            </div>
            <div className="graphics-holder graphics-holder_bottom">
              <coin.graphColumn className="graphic" />
            </div>
          </div>
          <div className="graph-year">
            <ul className="graph-year__scale">
              <li className="scale-item"><span></span></li>
              <li className="scale-item"><span>2013</span></li>
              <li className="scale-item"><span>2014</span></li>
              <li className="scale-item"><span>2015</span></li>
              <li className="scale-item"><span>2016</span></li>
              <li className="scale-item"><span>2017</span></li>
              <li className="scale-item"><span>2018</span></li>
              <li className="scale-item"><span>2019</span></li>
              <li className="scale-item"><span>2020</span></li>
            </ul>
            <coin.graphYearDynamics className="graphic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinAbout;