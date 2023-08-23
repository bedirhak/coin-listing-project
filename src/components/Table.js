import React from 'react'
import '../style/table.css';
import { Link } from 'react-router-dom';

const Table = ({data,trendTime}) => {
  return (
    <table className='each-table'>
        <th><td>{trendTime}</td></th>
        <th className='table-headings'>
            <td>Rank</td>
            <td>Name</td>
            <td>Public Key</td>
        </th>
        {data.map((item, index) => (
            <tr className='table-data' key={index}>
                <Link to="/coin" state={{coinData: item}}>
                <td>#{item.rank}</td>
                <td>{item.name}</td>
                <td>{`${item.publicKey.substring(0, 4)}..${item.publicKey.slice(-2)}`}</td>
          </Link>
            </tr>
      ))}
    </table>
  )
}

export default Table;