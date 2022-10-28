import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import Button from '../../components/UI/Button/Button';
import Loader from '../../components/UI/Loader/Loader';

const Main = () => {
  const { currentLocation, setCurrentLocation } = useContext(Context);
  const [banks, setBanks] = useState([]);
  const navigate = useNavigate();
  // const [currentLocation, setCurrentLocation] = useState(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);


  const getCurrentLocation = () => {
    console.log('TEST')
    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log('Latitude is :', coords.latitude);
      console.log('Longitude is :', coords.longitude);
      const { latitude, longitude } = coords;
      setCurrentLocation({ latitude, longitude });
      console.log('Current location', { latitude, longitude });
      setIsLoadingLocation(false);
    });
  };

  const goToBanksPage = () => navigate('/banksList')

  return <div className='main'>
    {isLoadingLocation && <Loader label='מחפש...' />}
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