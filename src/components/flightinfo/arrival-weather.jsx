import { WEATHER_API_KEY } from '../../constants/api';
import { useState, useEffect, useContext } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { AppContext } from '../../App';
import { GiAirplaneArrival } from 'react-icons/gi';

export const ArrivalWeather = ({ lat, lon }) => {
  const [weather, setWeather] = useState(null);
  const { loading, routeData } = useContext(AppContext);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log(data);
      console.log(data.main?.temp);
      setWeather(data);
    };
    fetchWeather();
  }, [lat, lon]);

  return (
    <div className='flex flex-col'>
      <div className='card-container w-[100%] h-[100%]'>
        {loading ? (
          <div className='place-self-center'>
            <TailSpin
              height='80'
              width='80'
              color='#1c4ed8'
              ariaLabel='tail-spin-loading'
              radius='1'
              wrapperStyle={{}}
              wrapperClass=''
              visible={true}
            />
          </div>
        ) : (
          <>
            <GiAirplaneArrival size={'4em'} />
            <h2 className='text-xl'>
              Current weather at {routeData?.to.shortName}
            </h2>
            <img
              src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`}
              alt='weather'
            />
            <div className='flex flex-row space-x-6'>
              <p className=''>{weather?.weather[0].description}</p>
              <p className='text-xl font-bold'>{`${Math.round(
                weather?.main?.temp
              )}°C`}</p>
            </div>
            <div className=''>
              <div className='mt-4'>
                <div className=''>
                  <span className='text-xl underline'>Details</span>
                </div>
                <div className=''>
                  <span className=''>Feels like </span>
                  <span className='weather-info'>{`${Math.round(
                    weather?.main?.feels_like
                  )}°C`}</span>
                </div>
                <div className=''>
                  <span className=''>Wind </span>
                  <span className='weather-info'>{`${Math.round(
                    weather?.wind?.speed
                  )}m/s`}</span>
                </div>
                <div className=''>
                  <span className=''>Humidity </span>
                  <span className='weather-info'>
                    {weather?.main?.humidity}%
                  </span>
                </div>
                <div className=''>
                  <span className=''>Pressure </span>
                  <span className='weather-info'>{`${weather?.main?.pressure} hPa`}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
