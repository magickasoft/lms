import {useEffect, useState} from 'react';

export const useCountdown = (targetDate: number) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    setCountDown(countDownDate - new Date().getTime());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const _h = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const hours = _h >= 10 ? _h : '0' + _h;
  const _m = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const minutes = _m >= 10 ? _m : '0' + _m;
  const _s = Math.floor((countDown % (1000 * 60)) / 1000);
  const seconds = _s >= 10 ? _s : '0' + _s;

  return [days, hours, minutes, seconds];
};
