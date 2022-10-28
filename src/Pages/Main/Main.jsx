import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import Button from '../../components/UI/Button/Button';
import Loader from '../../components/UI/Loader/Loader';

const Main = () => {
  const { currentLocation, setCurrentLocation } = useContext(Context);
  const [banks, setBanks] = useState([]);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);


  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      setCurrentLocation({ latitude, longitude });
      setIsLoadingLocation(false);
    }, error => {
      if (error.code == error.PERMISSION_DENIED){
        setIsError(true)
      }
    });
  };

  const goToBanksPage = () => navigate('/banksList')

  if(isError){
    return <div>אנא אשר קבלת מיקום ונסה שנית</div>
  }
  return <div className='main'>
    {isLoadingLocation && <Loader label='מחפש מיקום...' />}
    {!isLoadingLocation && !currentLocation &&
      <Button onClick={getCurrentLocation}>מצא את המיקום שלי</Button>}
    {
      currentLocation &&
      <>
        <div>אתה נמצא ב:
          <div>LAT: {currentLocation.latitude} - LONG: {currentLocation.longitude} </div>
        </div>
        <Button onClick={goToBanksPage}>מצא סניף בסביבתי</Button>
      </>
    }
  </div>;
}

export default Main;