import { useEffect, useState } from "react";
import { Response, Report } from '../../@types/responseObjectTypes' 

function BalanceSheet(props: { data: Response; periodData: Report[]; period: number }) {
  const [comparePeriod, setComparePeriod] = useState<number>(props.period + 1);

  useEffect(() => {
    if (props.period === props.periodData.length - 1) {
      setComparePeriod(props.period - 1);
    } else {
      setComparePeriod(props.period + 1);
    }
  }, [props.period, props.periodData]);

  (function treatResponseData(responseData: Report[]) {
    responseData.forEach((obj: Report) => {
      for (let item in obj) {
        if (Number.isInteger(+obj[item])) {
          obj[item] = (+obj[item] / 1000).toLocaleString("en", {
            useGrouping: true,
          });
        } else if (obj[item] === "None") {
          obj[item] = "0";
        }
      }
    });
  })(props.periodData);

  return (
    <div>
      {props.periodData.length > 0 ? (
        <div>
          <p>
            Condensed Consolidated Balance Sheet (in thousands) for:{" "}
            {props.data.symbol}
          </p>
          <table>
            <thead>
              <tr>
                <td className='tableData'></td>
                <td className='tableInfo'>{props.periodData[props.period].fiscalDateEnding}</td>
                <td className='tableInfo'>{props.periodData[comparePeriod].fiscalDateEnding}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='tableInfo'>Assets</td>
              </tr>
              <tr>
                <td className='tableInfo'>Current assets:</td>
              </tr>
              <tr>
                <td className='tableData'>Cash and cash equivalents</td>
                <td className='tableData'>{props.periodData[props.period].cash}</td>
                <td className='tableData'>{props.periodData[comparePeriod].cash}</td>
              </tr>
              <tr>
                <td className='tableData'>Marketable securities</td>
                <td className='tableData'>{props.periodData[props.period].shortTermInvestments}</td>
                <td className='tableData'>{props.periodData[comparePeriod].shortTermInvestments}</td>
              </tr>
              <tr>
                <td className='tableData'>Trade and other receivables, net</td>
                <td className='tableData'>{props.periodData[props.period].netReceivables}</td>
                <td className='tableData'>{props.periodData[comparePeriod].netReceivables}</td>
              </tr>
              <tr>
                <td className='tableData'>Deferred costs: 110,024 100,459</td>
                <td className='tableData'>NEED TO FIND</td>
                <td className='tableData'>NEED TO FIND</td>
              </tr>
              <tr>
                <td className='tableData'>
                  Prepaid expenses and other current assets 157,664 172,012
                </td>
                <td className='tableData'>NEED TO FIND</td>
                <td className='tableData'>NEED TO FIND</td>
              </tr>
              <tr>
                <td className='tableData'>Total current assets</td>
                <td className='tableData'>{props.periodData[props.period].totalCurrentAssets}</td>
                <td className='tableData'>{props.periodData[comparePeriod].totalCurrentAssets}</td>
              </tr>
              <tr>
                <td className='tableData'>Property and equipment, net</td>
                <td className='tableData'>{props.periodData[props.period].propertyPlantEquipment}</td>
                <td className='tableData'>{props.periodData[comparePeriod].propertyPlantEquipment}</td>
              </tr>
              <tr>
                <td className='tableData'>Operating lease right-of-use assets: 415,547 290,902 </td>
                <td className='tableData'>NEED TO FIND</td>
                <td className='tableData'>NEED TO FIND</td>
              </tr>
              <tr>
                <td className='tableData'>Deferred costs, noncurrent</td>
                <td className='tableData'>
                  {props.periodData[props.period].deferredLongTermLiabilities}
                </td>
                <td className='tableData'>
                  {props.periodData[comparePeriod].deferredLongTermLiabilities}
                </td>
              </tr>
              <tr>
                <td className='tableData'>
                  Acquisition-related intangible assets, net 262,603 308,401
                </td>
                <td className='tableData'>NEED TO FIND</td>
                <td className='tableData'>NEED TO FIND</td>
              </tr>
              <tr>
                <td className='tableData'>Goodwill</td>
                <td className='tableData'>{props.periodData[props.period].goodwill}</td>
                <td className='tableData'>{props.periodData[comparePeriod].goodwill}</td>
              </tr>
              <tr>
                <td className='tableData'>Other assets 179,987 144,605</td>
                <td className='tableData'>NEED TO FIND</td>
                <td className='tableData'>NEED TO FIND</td>
              </tr>
              <tr>
                <td className='tableInfo'>Total assets:</td>
                <td className='tableInfo'>{props.periodData[props.period].totalAssets}</td>
                <td className='tableInfo'>{props.periodData[comparePeriod].totalAssets}</td>
              </tr>
              <tr>
                <td className='tableInfo'>Liabilities and stockholders’ equity</td>
              </tr>
              <tr>
                <td className='tableInfo'>Current liabilities:</td>
              </tr>
              <tr>
                <td className='tableData'>Accrued expenses and other current liabilities 129,794	 	 	130,050	</td>
                <td className='tableData'>NEED TO FIND</td>
                <td className='tableData'>NEED TO FIND</td>
              </tr>
              <tr>
                <td className='tableData'>Accrued compensation	264,443	 	 	248,154</td>
                <td className='tableData'>NEED TO FIND</td>
                <td className='tableData'>NEED TO FIND</td>
              </tr>
              <tr>
                <td className='tableData'>Unearned revenue	2,000,417	 	 	2,223,178	 </td>
                <td className='tableData'>NEED TO FIND</td>
                <td className='tableData'>NEED TO FIND</td>
              </tr>
              <tr>
                <td className='tableData'>Operating lease liabilities	84,552	 	 	66,147</td>
                <td className='tableData'>{props.periodData[props.period].cash}</td>
                <td className='tableData'>{props.periodData[comparePeriod].cash}</td>
              </tr>           
              <tr>
                <td className='tableData'>Debt, current</td>
                <td className='tableData'>{props.periodData[props.period].shortTermDebt}</td>
                <td className='tableData'>{props.periodData[comparePeriod].shortTermDebt}</td>
              </tr>   
              <tr>
                <td className='tableData'>Total current liabilities</td>
                <td className='tableData'>{props.periodData[props.period].totalCurrentLiabilities}</td>
                <td className='tableData'>{props.periodData[comparePeriod].totalCurrentLiabilities}</td>
              </tr>  
              <tr>
                <td className='tableData'>Debt, noncurrent</td>
                <td className='tableData'>{props.periodData[props.period].totalLongTermDebt}</td>
                <td className='tableData'>{props.periodData[comparePeriod].totalLongTermDebt}</td>
              </tr> 
              <tr>
                <td className='tableData'>Unearned revenue, noncurrent	68,874	 	 	86,025</td>
                <td className='tableData'>NEED TO FIND</td>
                <td className='tableData'>NEED TO FIND</td>
              </tr>
              <tr>
                <td className='tableData'>Operating lease liabilities, noncurrent	352,900	 	 	241,425</td>
                <td className='tableData'>NEED TO FIND</td>
                <td className='tableData'>NEED TO FIND</td>
              </tr>  
              <tr>
                <td className='tableData'>Other liabilities	18,816	 	 	14,993</td>
                <td className='tableData'>NEED TO FIND</td>
                <td className='tableData'>NEED TO FIND</td>
              </tr> 
              <tr>
                <td className='tableData'>Total liabilities	4,766,973	 	 	4,329,814</td>
                <td className='tableData'>{props.periodData[props.period].totalLiabilities}</td>
                <td className='tableData'>{props.periodData[comparePeriod].totalLiabilities}</td>
              </tr> 
              <tr>
                <td className='tableInfo'>Stockholders’ equity:</td>
              </tr> 
              <tr>
                <td className='tableData'>Common stock</td>
                <td className='tableData'>{props.periodData[props.period].commonStock}</td>
                <td className='tableData'>{props.periodData[comparePeriod].commonStock}</td>
              </tr>
              <tr>
                <td className='tableData'>Additional paid-in capital</td>
                <td className='tableData'>{props.periodData[props.period].capitalSurplus}</td>
                <td className='tableData'>{props.periodData[comparePeriod].capitalSurplus}</td>
              </tr> 
              <tr>
                <td className='tableData'>Treasury stock</td>
                <td className='tableData'>{props.periodData[props.period].treasuryStock}</td>
                <td className='tableData'>{props.periodData[comparePeriod].treasuryStock}</td>
              </tr> 
              <tr>
                <td className='tableData'>Accumulated other comprehensive income (loss)</td>
                <td className='tableData'>{props.periodData[props.period].otherShareholderEquity}</td>
                <td className='tableData'>{props.periodData[comparePeriod].otherShareholderEquity}</td>
              </tr> 
              <tr>
                <td className='tableData'>Accumulated deficit</td>
                <td className='tableData'>{props.periodData[props.period].retainedEarningsTotalEquity}</td>
                <td className='tableData'>{props.periodData[comparePeriod].retainedEarningsTotalEquity}</td>
              </tr> 
              <tr>
                <td className='tableInfo'>Total liabilities and stockholders’ equity</td>
                <td className='tableInfo'>{props.periodData[props.period].liabilitiesAndShareholderEquity}</td>
                <td className='tableInfo'>{props.periodData[comparePeriod].liabilitiesAndShareholderEquity}</td>
              </tr> 
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default BalanceSheet;
