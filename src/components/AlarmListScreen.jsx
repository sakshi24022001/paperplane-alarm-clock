import React from 'react';
import { useSelector } from 'react-redux';
import AlarmItem from './AlarmItem';
import { Link } from 'react-router-dom';

const AlarmListScreen = () => {
  const alarms = useSelector((state) => state.alarms.alarms);

  const sortedAlarms = [...alarms].sort((a, b) => {
    const first = a.hour * 60 + a.minute;
    const second = b.hour * 60 + b.minute;

    return first - second;
  });

  return (
    <div className="screen">
      <div className="header">
        <h1>Alarms</h1>

        <Link to="/add">
          <button>Add</button>
        </Link>
      </div>

      {sortedAlarms.length === 0 ? (
        <p>No Alarms Added</p>
      ) : (
        sortedAlarms.map((alarm) => (
          <AlarmItem key={alarm.id} alarm={alarm} />
        ))
      )}
    </div>
  );
};

export default AlarmListScreen;