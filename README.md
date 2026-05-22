# Paperplane Alarm Clock

A simple Alarm Clock SPA built using React.js and Redux Toolkit.

This project was developed as part of the JavaScript Developer Assignment provided by Paperplane.

---

## Features

- Digital Clock with current system time
- Live date and time updates
- Add Alarm
- Edit Alarm
- Delete Alarm
- Toggle Alarm ON/OFF
- Alarm Repeat Days
- Snooze functionality
- Alarm Ring Screen
- LocalStorage persistence
- React Router navigation
- Redux state management
- Responsive UI

---

## Tech Stack

- React.js
- Redux Toolkit
- React Router DOM
- CSS
- LocalStorage

---

## Project Structure

```bash
src/
│
├── assets/
│   └── alarm.mp3
│
├── components/
│   ├── ClockScreen.jsx
│   ├── AlarmListScreen.jsx
│   ├── AddAlarmScreen.jsx
│   ├── AlarmRingScreen.jsx
│   └── AlarmItem.jsx
│
├── features/
│   └── alarms/
│       └── alarmSlice.js
│
├── utils/
│   ├── timeUtils.js
│   └── alarmUtils.js
│
├── store/
│   └── store.js
│
├── App.js
├── main.jsx
└── index.css
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Run Project

```bash
npm run dev
```

---

## Alarm Features

### Add Alarm

- Select Hour & Minute
- Add Label
- Select Repeat Days
- Enable Snooze
- Select Sound

### Edit Alarm

- Update existing alarm details
- Prefilled form values

### Alarm Ring

- Alarm sound plays automatically
- Snooze option available
- Stop disables alarm after ringing

---

## State Management

Redux Toolkit is used for:

- Alarm List
- Active Alarm
- Ringing Alarm
- Snooze Logic
- LocalStorage Sync

---

## LocalStorage

All alarms are stored in browser LocalStorage.

Data remains available after page refresh.

---

## Screens Included

- Digital Clock Screen
- Alarm List Screen
- Add/Edit Alarm Screen
- Alarm Ring Screen

---

## Assignment Requirements Covered

- React.js SPA
- Redux Store
- Alarm CRUD Operations
- Digital Clock
- Alarm Trigger Logic
- Snooze Feature
- Responsive Design
- Clean Code Structure

---

## Developed By

Sakshi Balodiya