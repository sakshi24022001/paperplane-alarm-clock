import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate, formatTime } from '../utils/timeUtils';
import { setRingingAlarm } from '../features/alarms/alarmSlice';
import { useNavigate } from 'react-router-dom';

const ClockScreen = () => {
  const [time, setTime] = useState(new Date());
  const alarms = useSelector((state) => state.alarms.alarms);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);

      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentDay = now.toLocaleDateString('en-US', {
        weekday: 'short',
      });

      alarms.forEach((alarm) => {
        if (
          alarm.active &&
          alarm.hour === currentHour &&
          alarm.minute === currentMinute &&
          alarm.days.includes(currentDay)
        ) {
          dispatch(setRingingAlarm(alarm));
          navigate('/ring');
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [alarms, dispatch, navigate]);

  return (
    <div className="screen center">
      <h1 className="clock-time">
        {formatTime(time.getHours())}:
        {formatTime(time.getMinutes())}:
        {formatTime(time.getSeconds())}
      </h1>

      <h2>{formatDate(time)}</h2>
    </div>
  );
};

export default ClockScreen;