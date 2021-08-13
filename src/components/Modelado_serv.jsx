import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {getRouters} from '../api/Api.js'
import axios from 'axios';


import { actualState } from '../alerts/AlertStatus.js'
import caja from "../resources/servcaja.json"
import icbanking from "../resources/iBANK.json"
import telered from "../resources/telered.json"
import ahc from "../resources/ahc.json"

const Modelado_serv  = () => {
    
    const [cajaStatus] = useState([caja]);
    const [icbankingStatus] = useState([icbanking]);
    const [teleredStatus] = useState([telered]);
    const [ahcStatus] = useState([ahc]);
   
    const [alertCaja, setAlertCaja] = useState(null);
    const [alertIcBanking, setAlertIcBanking]= useState(null);
    const [alertTelered, setAlertTelered] = useState(null);
    const [alertAhc, setAlertAhc] = useState(null);
    
    
    useEffect(() => {
        actualState(cajaStatus, setAlertCaja);
        actualState(icbankingStatus, setAlertIcBanking);
        actualState(teleredStatus, setAlertTelered);
        actualState(ahcStatus, setAlertAhc);
    })
   
    return(
        <div className = "">            
            <div className = 'row'>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertCaja}`}>CAJA</div>
                </div>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertIcBanking}`}>ICBANKING</div>
                </div>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertTelered}`}>TELERED</div>
                </div>
                
            </div>
            <div className = 'row'>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont ${alertAhc}`}>ACH</div>
                </div>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont unavailable`}>NETB</div>
                </div>
                <div className = 'col-sm-4'>
                    <div className = {`alert-cont unavailable`}>NETC</div>
                </div>
            </div>
        </div>
    )
};
export default Modelado_serv;