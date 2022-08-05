import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { DepartureWeather } from './departure-weather';
import { ArrivalWeather } from './arrival-weather';

export default function FlightInfo({ departure, arrival, routeData, loading }) {
  return (
    <div className='flex flex-row justify-center'>
      <div className='card-container w-[100%]'>
        <div className='flex-col text-xl'>
          Departing From <b className='italic'>{departure}</b>
          <br />
          Arriving To <b className='italic'>{arrival}</b>
        </div>

        {loading && (
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
        )}

        {routeData.from && (
          <div>
            <p>
              Flight Time: {routeData?.approxFlightTime} <span>Hours</span>
            </p>
            <p>
              Flying from{' '}
              <span>
                <b>{routeData.from?.shortName}</b>
              </span>{' '}
              to
              <span>
                {' '}
                <b>{routeData.to?.shortName}</b>
              </span>
            </p>
          </div>
        )}

        {routeData.greatCircleDistance && (
          <div>
            <h3 className='text-xl underline'>Route Distance</h3>
            <ul>
              <li>
                {(routeData?.greatCircleDistance?.meter).toLocaleString(
                  undefined,
                  { maximumFractionDigits: 0 }
                )}{' '}
                <span className='unit-text'>Metres</span>
              </li>
              <li>
                {(routeData?.greatCircleDistance?.km).toLocaleString(
                  undefined,
                  {
                    maximumFractionDigits: 0,
                  }
                )}{' '}
                <span className='unit-text'>KM</span>
              </li>
              <li>
                {(routeData?.greatCircleDistance?.mile).toLocaleString(
                  undefined,
                  {
                    maximumFractionDigits: 0,
                  }
                )}{' '}
                <span className='unit-text'>Miles</span>
              </li>
              <li>
                {(routeData?.greatCircleDistance?.nm).toLocaleString(
                  undefined,
                  {
                    maximumFractionDigits: 0,
                  }
                )}{' '}
                <span className='unit-text'>NM</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      {routeData.from?.location && (
        <>
          <DepartureWeather
            lat={routeData?.from?.location?.lat}
            lon={routeData?.from?.location?.lon}
            departure={routeData.from?.shortName}
          />
          <ArrivalWeather
            lat={routeData?.to?.location?.lat}
            lon={routeData?.to?.location?.lon}
            arrival={routeData.to?.shortName}
          />
        </>
      )}
    </div>
  );
}
