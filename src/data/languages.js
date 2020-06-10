import { ReactComponent as USFlag } from '../assets/img/united-states.svg';
import { ReactComponent as ChiFlag } from '../assets/img/china.svg';

export const langBtnContent = [
  { lang: 'eng', pic: USFlag },
  { lang: 'chi', pic: ChiFlag }
]

export const langEN = {
  lang: 'eng',
  flag: USFlag,
  header: {
    menu: {
      home: 'home',
      sell: 'sell',
      host: 'host',
      about: 'about us',
      support: 'support',
    }
  },
  footer: {
    sellersTitle: 'Top 5 sellers',
    awardsTitle: 'Best market place 2020',
  }
}

export const langCH = {
  lang: 'chi',
  flag: ChiFlag,
  header: {
    menu: {
      home: '家里',
      sell: '出售',
      host: '主人',
      about: '关于我们',
      support: '支持',
    }
  },
  footer: {
    sellersTitle: '5大卖家',
    awardsTitle: '2020年最好的市场场所',
  }
}