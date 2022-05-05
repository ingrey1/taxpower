import React, { useState } from 'react';
import {Button, TextField} from '@material-ui/core';
import styles from './styles.module.css';

const COST_PER_REQUEST = .01
const DEFAULT_REQUEST_COUNT = 10

const calculateCost = (reqCount, costPerRequest) => {
  const total = reqCount * costPerRequest
  return total
}

const formatCost = (cost) => {
  const dollarUSLocale = Intl.NumberFormat('en-US');
  const formattedCost = dollarUSLocale.format(cost)
  return `$${formattedCost}`
}

const createCostNotification = (cost, reqCount) => {

  return <div className={styles.costMessage}><h3>{reqCount} requests cost {formatCost(cost)}</h3></div>
} 

export default function PriceTool() {

  const [requestCount, setRequestCount]= useState(DEFAULT_REQUEST_COUNT);
  const [cost, setCost] = useState(null) 

  const onRequestCountChange = (e) => {
    const newRequestCount = e.target.value
    setRequestCount(newRequestCount)
    setCost(null)
  }

  const onCalculateClick = () => {
    const newCost = calculateCost(requestCount, COST_PER_REQUEST)
    setCost(newCost)
  }

  return (
    <section className={styles.priceTool}>
      <div className="container">
        <div className="row">
         <TextField value={requestCount} inputProps={{min: 1}} id="request-count" type="number" placeholder="Integer" label="Request Count" variant="outlined" onChange={onRequestCountChange} />
         <Button variant="contained" color="primary" onClick={onCalculateClick}>Calculate Cost (USD)</Button>
        </div>
        <div className="row">
        {cost && createCostNotification(cost, requestCount)}
        </div>
      </div>
    </section>
  );
}
