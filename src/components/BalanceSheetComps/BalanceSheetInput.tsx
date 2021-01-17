import React, { useState } from 'react';
import Select from 'react-select';
import { fetchData } from '../../utils/fetchAPIData';
import BalanceSheet from './BalanceSheet';
import { quarterlyReportsDataMap } from '../../utils/quarterlyReportsDataMap';
import { Response, Report } from '../../@types/responseObjectTypes'
// import { OptionsContent } from '../../@types/optionsObjectType'

function BalanceSheetInput() {
  const [stock, setStock] = useState<string>('');
  const [data, setData] = useState<Response>({
    symbol: '',
    annualReports: [],
    quarterlyReports: []
  });

  const [period, setPeriod] = useState<number>(0);
  const [periodData, setPeriodData] = useState<Report[]>([]);
  const [periodTypeName, setPeriodTypeName] = useState<string>('annualReports');

  const [options, setOptions] = useState<any>([]);
  const [optionsLoaded, setOptionsLoaded] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false)

  function handleStockSymbol(event: { target: HTMLInputElement }) {
    const getValue = event.target.value;
    setStock(getValue);
  }

  function mapOptions(data, periodTypeName) {
    setOptions(() => {
      return data.map((report: Report, index: number) => {
        
        let option: any

        if (periodTypeName === 'annualReports') {
          option =
          +report.fiscalDateEnding.slice(5, 7) === 1
            ? +report.fiscalDateEnding.slice(0, 4) - 1
            : report.fiscalDateEnding.slice(0, 4);
        } else {
            option =
            +report.fiscalDateEnding.slice(5, 7) === 1
              ? +report.fiscalDateEnding.slice(0, 4) -
                1 +
                '-' +
                quarterlyReportsDataMap[+report.fiscalDateEnding.slice(5, 7)]
              : report.fiscalDateEnding.slice(0, 5) +
                quarterlyReportsDataMap[+report.fiscalDateEnding.slice(5, 7)];
        }

        return {
          value: option,
          label: option,
          index: index,
        };
      });
    });
  }

  async function handleFetchData() {
    setPeriod(0);
    setError(false)
    setPeriodTypeName('annualReports');
    const dataFetched = await fetchData(stock);

    if(dataFetched.annualReports) {
      setOptionsLoaded(false);
      setData(dataFetched);
      setPeriodData(dataFetched.annualReports);      
      mapOptions(dataFetched.annualReports, 'annualReports')
      setTimeout(() => {
        setOptionsLoaded(true);
      }, 1);
    } else {
      console.log('invalid stock symbol');
      setError(true)
      setOptionsLoaded(false);
      setData({
        symbol: '',
        annualReports: [],
        quarterlyReports: []
      });
      setPeriodData([]);   
    }
  }

  function handledPeriodCheck(event: { target: HTMLInputElement }) {
    setPeriod(0);
    setOptionsLoaded(false);
    if (event.target.value === 'quarterlyReports') {
      setPeriodData(data.quarterlyReports);
      setPeriodTypeName('quarterlyReports');      
      mapOptions(data.quarterlyReports, 'quarterlyReports')
      setTimeout(() => {
        setOptionsLoaded(true);
      }, 1);
    }

    if (event.target.value === 'annualReports') {
      setPeriodData(data.annualReports);
      setPeriodTypeName('annualReports');
      mapOptions(data.annualReports, 'annualReports')
      setTimeout(() => {
        setOptionsLoaded(true);
      }, 1);
    }
  }

  function handlePeriodChange(event: any) {
    setPeriod(+event.index);
  }

  return (

    

    <div className='mainContent'>

      {!data.annualReports[0] ? <p>Type the desired stock symbol below and click on Next to get the stock Balance Sheet</p> : null}
  
      <input
        className='stockInput'
        type='text'
        name='stockValue'
        placeholder='Stock'
        onChange={handleStockSymbol}
      />

      <button
        className='btn btn-outline-dark'
        type='button'
        onClick={handleFetchData}
      >
        Next
      </button>

      {error ? <p className='error'>Please type a valid Stock Symbol</p> : null}

      {data.annualReports[0] ? (
        <div>
          <br />
          <input
            type='radio'
            id='year'
            name='periodType'
            value='annualReports'
            onChange={handledPeriodCheck}
            checked={periodTypeName === 'annualReports'}
          />
          <label htmlFor='year'>Year</label>
          <br />
          <input
            type='radio'
            id='quarter'
            name='periodType'
            value='quarterlyReports'
            onChange={handledPeriodCheck}
            checked={periodTypeName === 'quarterlyReports'}
          />
          <label htmlFor='quarter'>Quarter</label>
          <br />
          <br />

          {optionsLoaded ? (
            <div>
              <Select
                options={options}
                onChange={handlePeriodChange}
                defaultValue={options[0]}
              />
              <BalanceSheet
                data={data}
                periodData={periodData}
                period={period}
              />
            </div>
          ) : (
            'Loading Available Options'
          )}
        </div>
      ) : null}
    </div>
  );
}

export default BalanceSheetInput;
