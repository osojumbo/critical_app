import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {getRouters} from '../api/Api.js'
import axios from 'axios';

import {actualState} from '../alerts/AlertStatus.js';

import aspdisk from "../resources/aspdisk.json"
import aspcpu from "../resources/aspcpu.json"
import jobqueue from "../resources/jobqueue.json"
import jobqueuest from "../resources/jobqueuest.json"
import memorypool from "../resources/memorypool.json"
import mqseriesm from "../resources/mqseriesm.json"
import mqseriesq from "../resources/mqseriesq.json"
import services from "../resources/services.json"

const As_400 = () => {
    const [aspdiskStatus] = useState([aspdisk]);
    const [aspcpuStatus] = useState([aspcpu]);
    const [jobqueueStatus] = useState([jobqueue]);
    const [jobqueuestStatus] = useState([jobqueuest]);
    const [memorypoolStatus] = useState([memorypool]);
    const [mqseriesmStatus] = useState([mqseriesm]);
    const [mqseriesqStatus] = useState([mqseriesq]);
    const [servicesStatus] = useState([services]);
  
    const [alertAsp, setAlertAsp] = useState(null);
    const [alertAspCpu, setAlertAspCpu]= useState(null);
    const [alertJobQueue, setAlertJobQueue] = useState(null);
    const [alertJobQueuest, setAlertJobQueuest] = useState(null);
    const [alertMemoryPool, setAlertMemoryPool] = useState(null);
    const [alertMqSeriesM, setAlertMqSeriesM] = useState(null);
    const [alertMqSeriesQ, setAlertMqSeriesQ] = useState(null);
    const [alertServices, setAlertServices] = useState(null);
    
    useEffect(() => {
        actualState(aspdiskStatus, setAlertAsp);
        actualState(aspcpuStatus, setAlertAspCpu);
        actualState(jobqueueStatus, setAlertJobQueue);
        actualState(jobqueuestStatus, setAlertMemoryPool);
        actualState(memorypoolStatus, setAlertJobQueuest);
        actualState(mqseriesmStatus, setAlertMqSeriesM);
        actualState(mqseriesqStatus, setAlertMqSeriesQ);
        actualState(servicesStatus, setAlertServices);
        
    })
    return(
        <div>
            <div className ='row'>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertAsp}`}>ASP DISK</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertAspCpu}`}>ASP CPU</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertJobQueue}`}>JOB QUEUE</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertJobQueuest}`}>JOB QUEUE STATUS</div>
                </div>
            </div>
            <div className ='row'>
            <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertMemoryPool}`}>MEMORY POOL</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertMqSeriesM}`}>MQ SERIES MANAGER</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${alertMqSeriesQ}`}>MQ SERIES QUEUE</div>
                </div>
                <div className ='col-sm-3'>
                    <div className = {`alert-cont ${servicesStatus}`}>SERVICES</div>
                </div>
            </div>
        </div>
    )
};
export default As_400;