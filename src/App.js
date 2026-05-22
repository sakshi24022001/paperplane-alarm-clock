import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ClockScreen from './components/ClockScreen';
import AlarmListScreen from './components/AlarmListScreen';
import AddAlarmScreen from './components/AddAlarmScreen';
import AlarmRingScreen from './components/AlarmRingScreen';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<ClockScreen />} />
        <Route path="/alarms" element={<AlarmListScreen />} />
        <Route path="/add" element={<AddAlarmScreen />} />
        <Route path="/ring" element={<AlarmRingScreen />} />
        <Route path="/edit/:id" element={<AddAlarmScreen />}/>
      </Routes>
    </div>
  );
};

export default App;