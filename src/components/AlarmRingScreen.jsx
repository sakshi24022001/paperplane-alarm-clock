import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { snoozeAlarm, stopAlarm, markAlarmTriggered } from '../features/alarms/alarmSlice';
import { useNavigate } from 'react-router-dom';
import alarmSound from '../assets/alarm.mp3';

const AlarmRingScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ringingAlarm = useSelector(
        (state) => state.alarms.ringingAlarm
    );

    useEffect(() => {
        const audio = new Audio(alarmSound);
        audio.loop = true;
        audio.play();

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const handleStop = () => {
        dispatch( markAlarmTriggered(ringingAlarm.id) );
        dispatch(stopAlarm());
        navigate('/');
    };

    const handleSnooze = () => {
        dispatch(snoozeAlarm(ringingAlarm.id));
        navigate('/');
    };

    if (!ringingAlarm) {
        return null;
    }

    return (
        <div className="screen center">
            <h1>Alarm Ringing</h1>

            <h2>{ringingAlarm.label}</h2>

            <div className="ring-buttons">
                <button onClick={handleStop}>Stop</button>

                {ringingAlarm.snooze && (
                    <button onClick={handleSnooze}>Snooze</button>
                )}
            </div>
        </div>
    );
}
export default AlarmRingScreen;