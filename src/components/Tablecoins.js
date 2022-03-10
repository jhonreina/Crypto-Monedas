import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CoinRow from './CoinRow';


const titles = ['#', 'Coin', 'Price usd','price Change','24H Volume']


function TableCoins({coins}) {

 
        
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <table className="table table-dark mt-4">
        <thead>
          <tr>
            {titles.map((title) => (
              <td>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <CoinRow coin={coin} key={index} index={index + 1} />
          ))}
        </tbody>
      </table>
      <Link
        to="/login"
        className="text-white backgroud-blue w-full bg-blue-500 mb-4 rounded  hover:bg-blue-700 px-4 py-2 "
      >
        logout
      </Link>
    </div>
  );
}

export default TableCoins