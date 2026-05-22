export const formatTime = (value) => {
  return value.toString().padStart(2, '0');
};

export const formatDate = (date) => {
  return date.toDateString();
};