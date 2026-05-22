import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteAlarm,
  toggleAlarm,
} from '../features/alarms/alarmSlice';
import { getRepeatText } from '../utils/alarmUtils';
import { useNavigate } from 'react-router-dom';

const AlarmItem = ({ alarm }) => {
  const dispatch = useDispatch();
const navigate = useNavigate();
  return (
    <div className={`alarm-item ${!alarm.active ? 'inactive' : ''}`}>
      <div>
        <h2>
          {alarm.hour.toString().padStart(2, '0')}:
          {alarm.minute.toString().padStart(2, '0')}
        </h2>

        <p>{getRepeatText(alarm.days)}</p>

        <p>{alarm.label}</p>
      </div>

      <div className="alarm-actions">
        <button onClick={() => dispatch(toggleAlarm(alarm.id))}>
          {alarm.active ? 'ON' : 'OFF'}
        </button>
        <button onClick={() => navigate(`/edit/${alarm.id}`) } >
            Edit
        </button>
        <button onClick={() => dispatch(deleteAlarm(alarm.id))}>
          Delete
        </button>

      </div>
    </div>
  );
};

export default AlarmItem;