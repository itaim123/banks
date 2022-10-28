import { DAYS } from '../constants';

export const getDistance = (currentLocation, targetLocation) => {
  const { x: currentX, y: currentY } = currentLocation;
  const { x: targetX, y: targetY } = targetLocation;

  return Math.sqrt(
    Math.pow(currentX - targetX, 2) + Math.pow(currentY - targetY, 2)
  );
};

export const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    console.log('Latitude is :', coords.latitude);
    console.log('Longitude is :', coords.longitude);
    const { latitude: x, longitude: y } = coords;
    console.log('Current location', { x, y });
    return { x, y };
  });
};

export const checkIfClosed = (dayStr) => {
  const today = new Date().getDay();
  if (today === 6) return true;
  const closedDayLetter = dayStr.split(' ')[1];
  return today === DAYS[closedDayLetter] ? true : false;
};

export const banksMapper = (banks) => {
  console.log('length 1', banks.length);
  banks = banks.filter(b=>b.distance <= 7)
  console.log('length 2', banks.length);
  const banksNameMapper = {};
  for (let bank of banks) {
    if (bank.distance <= 7) {
      if (banksNameMapper.hasOwnProperty(bank.Bank_Name)) {
        banksNameMapper[bank.Bank_Name]++;
      } else {
        banksNameMapper[bank.Bank_Name] = 1;
      }
    }
  }
  return getMostFrequentBank(banksNameMapper);
};

const getMostFrequentBank = (banksObj) => {
  let maxNum = 0;
  let bank = '';
  for (let bankName in banksObj) {
    if (banksObj[bankName] > maxNum) {
      maxNum = banksObj[bankName];
      bank = bankName;
    }
  }
  return bank;
};
