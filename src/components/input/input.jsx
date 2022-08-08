import React from 'react';

export default function Input({ handleArrival, handleDeparture }) {
  return (
    <form>
      <div className='input-container'>
        <label
          htmlFor='departure'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Departure Airport
        </label>
        <input
          onInput={handleDeparture}
          type='text'
          id='departure'
          className='input'
          placeholder='EHAM'
        >
          {/* <p
            id='helper-text-explanation'
            className='mt-2 text-sm text-gray-500 dark:text-gray-400'
          >
            Enter an aiport 4 letter ICAO code. Read about
            <a
              href='#'
              className='font-medium text-blue-600 hover:underline dark:text-blue-500'
            >
              ICAO codes.
            </a>
            .
          </p> */}
        </input>
        <label
          htmlFor='arrival'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Your departure airport
        </label>
        <input
          onInput={handleArrival}
          type='text'
          id='arrival'
          className='input'
          placeholder='YBBN'
        ></input>
        <p
          id='helper-text-explanation'
          className='mt-2 text-sm text-gray-500 dark:text-gray-400'
        >
          Enter an aiport 4 letter ICAO code. Read about
          <a
            href='https://en.wikipedia.org/wiki/ICAO_airport_code'
            target='_blank'
            className='font-medium text-blue-600 hover:underline dark:text-blue-500'
          >
            ICAO codes
          </a>
          .
        </p>
      </div>
    </form>
  );
}
