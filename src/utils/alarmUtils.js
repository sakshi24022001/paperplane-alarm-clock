export const getRepeatText = (days) => {
  if (days.length === 7) {
    return 'Everyday';
  }

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const weekends = ['Sat', 'Sun'];

  const isWeekdays = weekdays.every((d) => days.includes(d));
  const isWeekends = weekends.every((d) => days.includes(d));

  
  if (isWeekdays && days.length === 5) {
    return 'Weekdays';
  }

  if (isWeekends && days.length === 2) {
    return 'Weekends';
  }

  return days.join(', ');
};