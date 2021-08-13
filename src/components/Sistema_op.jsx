import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {getRouters} from '../api/Api.js'
import axios from 'axios';


import {actualState} from '../alerts/AlertStatus.js';
import winser from "../resources/winser.json"
import linux from "../resources/linux.json"
import oracle from "../resources/oracle.json"

const Sistema_op  = () => {
    const [winserStatus] = useState([winser]);
    const [linuxStatus] = useState([linux]);
    const [oracleStatus] = useState([oracle]);

    const [alertWinser, setAlertWinser] = useState(null);
    const [alertLinux, setAlertLinux]= useState(null);
    const [alertOracle, setAlertOracle] = useState(null);
   
    useEffect(() => {
        actualState(winserStatus, setAlertWinser);
        actualState(linuxStatus, setAlertLinux );
        actualState(oracleStatus, setAlertOracle);
      
    })
    return(
        <div className = "">            
            <div className = 'row'>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertWinser}`}>Windows Servers</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertLinux}`}>Linux Servers</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertOracle}`}>Oracle</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont unavailable`}>Neta</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont unavailable`}>Netb</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont unavailable`}>Netc</div>
                </div>
            </div>
        </div>
    )
};
export default Sistema_op;