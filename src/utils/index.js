export const minutesInHoursAndMinutes = (minutes) => {
  const hours = Math.floor(minutes/60);
  const minute = minutes % hours;
  return `${hours}ч ${minute}м`
}

export const addMinutesToDate = (date, minutes) => {
  const newDate = new Date(date);
  return new Date(newDate.setMinutes(newDate.getMinutes() + minutes))
}

export const getFormatStringDate = (stringDate, minutes) => {
  const dateFrom = new Date(Date.parse(stringDate))
  const dateTo = addMinutesToDate(dateFrom, minutes)

  return `${dateFrom.toLocaleTimeString().slice(0,5)} - ${dateTo.toLocaleTimeString().slice(0,5)}`
}

export const getFormatPrice = (price) => {
  return price.toLocaleString('ru-RU',{ style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })
}

export const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => {
  return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export const getTitleFromCountStops = (countStops) => {
  return (countStops===0)?'Без пересадок':`${countStops} ${sklonenie(countStops, ['пересадка', 'пересадки', 'пересадок'])}`
}

export const removeItemInArray = (item, array) => {
  return array.filter((elem) => elem !== item)
}