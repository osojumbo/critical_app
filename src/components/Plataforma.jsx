import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { actualState } from '../alerts/AlertStatus.js'
import ad from "../resources/AD.json"
import dhcp from "../resources/dhcp.json"
import dns from "../resources/dns.json"
import sql from "../resources/sql.json"
import exchange from "../resources/exchange.json"
import iss from "../resources/iss.json"

const Plataforma = () => {
    const [adStatus] =useState([ad]);
    const [dhcpStatus] = useState([dhcp]);
    const [dnsStatus] = useState([dns]);
    const [sqlStatus] = useState([sql]);
    const [exchangeStatus] = useState([exchange]);
    const [issStatus] = useState([iss]);
    
    const [alertAD, setAlertAD] = useState(null);
    const [alertDhcp, setAlertDhcp] = useState(null);
    const [alertDns,setAlertDns]=useState(null);
    const [alertSql,setAlertSql]=useState(null);
    const [alertExchange, setAlertExchange] = useState(null);
    const [alertIIS,setAlertISS]=useState(null);

    useEffect(() => {
        actualState(adStatus, setAlertAD);
        actualState(dhcpStatus, setAlertDhcp);
        actualState(dnsStatus, setAlertDns);
        actualState(sqlStatus, setAlertSql);
        actualState(exchangeStatus, setAlertExchange);
        actualState(issStatus, setAlertISS);
    })
   
    return (
        <div className="">
            <div className='row'>
                <div className='col-sm-2'>
                    <div className={`alert-cont ${alertAD}`}>Active Directory</div>
                </div>
                <div className='col-sm-2'>
                    <div className={`alert-cont ${alertDhcp}`}>Dhcp</div>
                </div>
                <div className='col-sm-2'>
                    <div className={`alert-cont ${alertDns}`}>Dns</div>
                </div>
                <div className='col-sm-2'>
                    <div className={`alert-cont ${alertSql}`}>Sql</div>
                </div>
                <div className='col-sm-2'>
                    <div className={`alert-cont ${alertExchange}`}>Exchange</div>
                </div>
                <div className='col-sm-2'>
                    <div className={`alert-cont ${alertIIS}`}>Iis</div>
                </div>
            </div>
        </div>
    )
};
export default Plataforma;