import { DAYS } from '../constants';

export const checkIfClosed = (dayStr) => {
  const today = new Date().getDay();
  if (today === 6) return true;
  const closedDayLetter = dayStr.split(' ')[1];
  return today === DAYS[closedDayLetter] ? true : false;
};

export const banksMapper = (banks) => {
  banks = banks.filter(b=>b.distance <= 7)
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
