import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAlarm, updateAlarm } from '../features/alarms/alarmSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const AddAlarmScreen = () => {  
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const { id } = useParams();

const alarms = useSelector( (state) => state.alarms.alarms);

const existingAlarm = alarms.find((alarm) => alarm.id === id);

const [hour, setHour] = useState(existingAlarm ? existingAlarm.hour : '07');
const [minute, setMinute] = useState(existingAlarm ? existingAlarm.minute : '00');
const [label, setLabel] = useState(existingAlarm ? existingAlarm.label : 'Wake Up');
const [days, setDays] = useState(existingAlarm ? existingAlarm.days : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
const [snooze, setSnooze] = useState(existingAlarm ? existingAlarm.snooze : true);

  const handleDayToggle = (day) => {
    if (days.includes(day)) {
      setDays(days.filter((d) => d !== day));
    } else {
      setDays([...days, day]);
    }
  };

  const handleSubmit = () => {
    const alarm = {
        id: existingAlarm
        ? existingAlarm.id
        : uuidv4(),
        hour: Number(hour),
        minute: Number(minute),
        label,
        days,
        snooze,
        active: true,
    };
    if (existingAlarm) {
        dispatch(updateAlarm(alarm));
    } else {
        dispatch(addAlarm(alarm));
    }
  navigate('/alarms');
  };
 
    // const alarms = useSelector((state) => state.alarms.alarms);

    // const existingAlarm = alarms.find((alarm) => alarm.id === Number(id));
useEffect(() => {
  if (existingAlarm) {
    setHour(
      String(existingAlarm.hour)
    );

    setMinute(
      String(existingAlarm.minute)
    );

    setLabel(existingAlarm.label);

    setDays(existingAlarm.days);

    setSnooze(existingAlarm.snooze);
  }
}, [existingAlarm]);
  return (
    <div className="screen">
      <h1>Add Alarm</h1>

      <div className="form-group">
        <label>Hour</label>
        <input type="number" min="0" max="23" value={hour} onChange={(e) => setHour(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Minute</label>
        <input type="number" min="0"
          max="59"
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Label</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>

      <div className="days-container">
        {daysList.map((day) => (
          <button
            key={day}
            className={days.includes(day) ? 'selected' : ''}
            onClick={() => handleDayToggle(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="form-group checkbox">
        <label>Snooze</label>
        <input
          type="checkbox"
          checked={snooze}
          onChange={(e) => setSnooze(e.target.checked)}
        />
      </div>

      <button className="save-btn" onClick={handleSubmit}>
        Save Alarm
      </button>
    </div>
  );
};

export default AddAlarmScreen;