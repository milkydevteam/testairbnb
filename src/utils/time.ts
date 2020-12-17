import moment from 'moment';
import { useState, useEffect, useCallback, useMemo } from 'react';

const countDown = () => {
  const date = new Date();
  const hours = 23 - date.getHours();
  const minute = 59 - date.getMinutes();
  const second = 59 - date.getSeconds();
  if (hours === 0 && minute === 0 && second === 0) {
    return {
      hours: '00',
      minute: '00',
      second: '00',
    };
  }
  return {
    hours: hours < 10 ? '0' + hours : hours.toString(),
    minute: minute < 10 ? '0' + minute : minute.toString(),
    second: second < 10 ? '0' + second : second.toString(),
  };
};

export const useCountDown = (endDate = moment().format('DD/MM/YYYY')) => {
  const endTime = moment(endDate, 'DD/MM/YYYY');

  const [h, setHours] = useState('00');
  const [m, setMinute] = useState('00');
  const [s, setSecond] = useState('00');
  const [d, setDay] = useState('0');
  const startCount = useCallback(() => {
    const interval = setInterval(() => {
      const time = countDown();
      const { hours, minute, second } = time;
      const days = endTime.diff(moment(), 'days');
      if (days <= 0) {
        clearInterval(interval);
      } else {
        setHours(hours);
        setMinute(minute);
        setSecond(second);
        setDay(days.toString());
      }
    }, 998);
    return interval;
  }, [setHours, setMinute, setSecond]);

  useEffect(() => {
    const interval = startCount();
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [startCount]);
  return {
    hours: h,
    minute: m,
    second: s,
    day: d,
  };
};

export const timeToDateString = (
  num = 0,
  select: 'date' | 'month' | 'year' | 'all' = 'all',
) => {
  const date = new Date();
  if (num) {
    date.setTime(num);
  }
  let dd: number | string = date.getDate();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (select === 'date') return dd;
  let mm: number | string = date.getMonth() + 1;
  if (mm < 10) {
    mm = `0${mm}`;
  }
  if (select === 'month') return mm;

  const yyyy = date.getFullYear();
  if (select === 'year') return yyyy;

  return `${dd}/${mm}/${yyyy}`;
};

export const createdToString = (num: number) => {
  const date = new Date();
  const date2 = new Date(num);
  const time = date2.toLocaleTimeString();
  const tmpTime = date.getTime();
  const diff = tmpTime - num;
  const numberDate = diff / (86400 * 1000);
  if (numberDate >= 1 && numberDate < 2) return `${time} Hôm qua`;
  if (numberDate >= 2 && numberDate < 4) {
    return `${Math.floor(numberDate)} ngày trước`;
  }
  if (numberDate >= 4) {
    return `Từ ${timeToDateString(num)}`;
  }
  const hours = diff / (3600 * 1000);
  if (hours >= 1) return `${Math.floor(hours)} giờ trước`;
  const min = diff / (60 * 1000);
  if (min >= 1) return `${Math.floor(min)} phút trước`;
  const s = diff / 1000;
  if (s >= 20) return `${Math.floor(s)} giây trước`;
  return 'Vừa đăng';
};

export const getWeek = (nextWeek = 0) => {
  if (nextWeek < 0) return [];
  const weekData = [];
  let dayOfWeek = new Date().getDay() + 1;
  const dayToAdd = 7 * nextWeek;
  if (nextWeek > 0) {
    dayOfWeek = 6;
  }
  for (let i = 2; i < 7; i++) {
    const dif = i - dayOfWeek;
    const tmp = moment()
      .add(dif + dayToAdd, 'days')
      .format('DD/MM/YYYY');
    weekData.push({ thu: i, ngay: tmp });
  }
  return weekData;
};

export const convertRangeTime = (time = 8) => `${time}:00-${time + 1}:00`;
