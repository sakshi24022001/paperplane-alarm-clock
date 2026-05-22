import { createSlice } from '@reduxjs/toolkit';
const savedAlarms = JSON.parse(localStorage.getItem('alarms')) || [];
const initialState = {
    alarms: savedAlarms,
    ringingAlarm: null,
};

const saveToLocalStorage = (alarms) => {
    localStorage.setItem('alarms', JSON.stringify(alarms));
};

const alarmSlice = createSlice({
    name: 'alarms',
    initialState,
    reducers: {
        addAlarm: (state, action) => {
            state.alarms.push(action.payload);
            saveToLocalStorage(state.alarms);
        },

        toggleAlarm: (state, action) => {
            const alarm = state.alarms.find(
                (a) => a.id === action.payload
            );

            if (alarm) {
                alarm.active = !alarm.active;
            }

            saveToLocalStorage(state.alarms);
        },

        deleteAlarm: (state, action) => {
            state.alarms = state.alarms.filter(
                (alarm) => alarm.id !== action.payload
            );

            saveToLocalStorage(state.alarms);
        },

        setRingingAlarm: (state, action) => {
            state.ringingAlarm = action.payload;
        },

        stopAlarm: (state) => {
            state.ringingAlarm = null;
        },

        snoozeAlarm: (state, action) => {
            const alarm = state.alarms.find(
                (a) => a.id === action.payload
            );

            if (alarm) {
                const now = new Date();
                now.setMinutes(now.getMinutes() + 5);

                alarm.hour = now.getHours();
                alarm.minute = now.getMinutes();
            }

            state.ringingAlarm = null;
            saveToLocalStorage(state.alarms);
        },
        markAlarmTriggered: (state, action) => {
            const alarm = state.alarms.find(
                (a) => a.id === action.payload
            );

            if (alarm) {
                alarm.active = false;
            }

            saveToLocalStorage(state.alarms);
        },
        updateAlarm: (state, action) => {
            const index = state.alarms.findIndex(
                (alarm) => alarm.id === action.payload.id
            );

            if (index !== -1) {
                state.alarms[index] = action.payload;
            }

            saveToLocalStorage(state.alarms);
        },
    },
});

export const {
    addAlarm,
    toggleAlarm,
    deleteAlarm,
    setRingingAlarm,
    stopAlarm,
    snoozeAlarm,
    markAlarmTriggered,
    updateAlarm
} = alarmSlice.actions;

export default alarmSlice.reducer;