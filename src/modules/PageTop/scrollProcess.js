//import { useDispatch } from 'react-redux';
import store from 'store/store'

let action = null;
let actionVal = null;
let target = null;

export const setActionData = (act, val, element) => {
  action = act;
  actionVal = val;
  target = element;
}

let checkPoint = 1;
let flag = true;
let distanceSave = 0;
let endTouchPoint = null;

export const scrollProcess = () => {
  const scrollTop = target.scrollTop;

  if (flag) {
    const delta = scrollTop - checkPoint;
    if (delta < 0) {
      checkPoint = scrollTop;
    };

    if (delta > 10) {
      flag = false;
      checkPoint = scrollTop;
      store.dispatch(action(actionVal));
    }
  } else {
    const distanceCurrent = scrollTop - checkPoint;

    if (distanceCurrent >= distanceSave) {
      distanceSave = distanceCurrent;
    } else {
      flag = true;
      checkPoint = scrollTop;
      distanceSave = 0;
    }
  };
};

const checkRules = () => {
  setTimeout(() => {
    const curretnScroll = target.scrollTop;
    if (curretnScroll < (endTouchPoint - 8)) {
      store.dispatch(action(null));
    };
  }, 100);
};

export const onTouchEnd = () => {
  endTouchPoint = target.scrollTop;
  checkRules();
};