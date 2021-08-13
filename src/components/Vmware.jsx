import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {getRouters} from '../api/Api.js'
import axios from 'axios';

import {actualState} from '../alerts/AlertStatus.js';
import vmnet from "../resources/vmnet.json"
import vmrpool from "../resources/vmrpool.json"
import vmvcenter from "../resources/vmvcenter.json"
import vmvm from "../resources/vmvm.json"
import cluster from "../resources/vmcluster.json"
import datacenter from "../resources/datacenter.json"
import vswich from "../resources/vswitch.json"
import hostservice from "../resources/hostservice.json"
import esxhostmemory from "../resources/esxmemory.json"
import esxhostnet from "../resources/esxnet.json"
import esxhoststorage from "../resources/esxstorage.json"
import esxhostprocessor from "../resources/esxprocessor.json"
import vmsnap from "../resources/vmsnap.json"

const Vmware  = () => {
    const [vmnetStatus] = useState([vmnet]);
    const [vmrpoolStatus] = useState([vmrpool]);
    const [vmvcenterStatus] = useState([vmvcenter]);
    const [vmvmStatus] = useState([vmvm]);
    const [clusterStatus] = useState([cluster]);
    const [datacenterStatus] = useState([datacenter]);
    const [vswichStatus] = useState([vswich]);
    const [hostserviceStatus] = useState([hostservice]);
    const [esxhostmemoryStatus] = useState([esxhostmemory]);
    const [esxhostnetStatus] = useState([esxhostnet]);
    const [esxhoststorageStatus] = useState([esxhoststorage]);
    const [esxhostprocessorStatus] = useState([esxhostprocessor]);
    const [vmsnapStatus] = useState([vmsnap]);

    

    const [alertvmnetStatus, setAlertvmnetStatus] = useState(null);
    const [alertvmrpoolStatus, setAlertvmrpoolStatus] = useState(null);
    const [alertvmvcenterStatus, setAlertvmvcenterStatus] = useState(null);
    const [alertvmvmStatus, setAlertvmvmStatus] = useState(null);
    const [alertclusterStatus, setAlertclusterStatus] = useState(null);
    const [alertdatacenterStatus, setAlertdatacenterStatus] = useState(null);
    const [alertvswichStatus, setAlertvswichStatus] = useState(null);
    const [alerthostserviceStatus, setAlerthostserviceStatus] = useState(null);
    const [alertesxhostmemoryStatus, setAlertesxhostmemoryStatus] = useState(null);
    const [alertesxhostnetStatus, setAlertesxhostnetStatus] = useState(null);
    const [alertesxhoststorageStatus, setAlertesxhoststorageStatus] = useState(null);
    const [alertesxhostprocessorStatus, setAlertesxhostprocessorStatus] = useState(null);
    const [alertvmsnapStatus, setAlertvmsnapStatus] = useState(null);
    // function componentDidMount(){
    //     var self = this;
    //     axios.get('', {
    //         "Content-Type": "application/xml; charset=utf-8"
    //     }).then(function(response) {
    //         setItems(response);
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });
    // }
    // componentDidMount();
    useEffect(() => {
        actualState(vmnetStatus, setAlertvmnetStatus);
        actualState(vmrpoolStatus,setAlertvmrpoolStatus);
        actualState(vmvcenterStatus, setAlertvmvcenterStatus);
        actualState(vmvmStatus, setAlertvmvmStatus);
        actualState(clusterStatus, setAlertclusterStatus);
        actualState(datacenterStatus, setAlertdatacenterStatus);
        actualState(vswichStatus, setAlertvswichStatus);
        actualState(hostserviceStatus, setAlerthostserviceStatus);
        actualState(esxhostmemoryStatus, setAlertesxhostmemoryStatus);
        actualState(esxhostnetStatus, setAlertesxhostnetStatus);
        actualState(esxhoststorageStatus, setAlertesxhoststorageStatus);
        actualState(esxhostprocessorStatus, setAlertesxhostprocessorStatus);
        actualState(vmsnapStatus, setAlertvmsnapStatus);
    })
    /*const alerts = () =>{
        for(var i = 0; i < items[0].childNodeDatas.length; i++){
            console.log(items[0].childNodeDatas[i]);
            if(items[0].childNodeDatas[i].healthState === 'Error'){
                setAlertColor('red')
            }else if(items[0].childNodeDatas[i].healthState === 'Warning'){
                setAlertColor('blue')
            }
            else if(items[0].childNodeDatas[i].healthState === 'Success'){
                setAlertColor('black')
            }else{
                setAlertColor('green')
            }
        }
    }*/
    return(
        <div className = "">            
            <div className = 'row'>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertvmnetStatus}`}>Network</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertvmrpoolStatus}`}>Resource Pool</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertvmvcenterStatus}`}>V center</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertvmvmStatus}`}>Virtual Machine</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertclusterStatus}`}>Cluster</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertdatacenterStatus}`}>Datacenter</div>
                </div>
            </div>
            <div className = 'row'>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertvswichStatus}`}>Virtual Switch</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alerthostserviceStatus}`}>Host Service</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertesxhostmemoryStatus}`}>Esx Host Memory</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertesxhostnetStatus}`}>Esx Host Network</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertesxhoststorageStatus}`}>Esx Host Storage</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertesxhostprocessorStatus}`}>Esx Host Processor</div>
                </div>
                <div className = 'col-sm-2'>
                    <div className = {`alert-cont ${alertvmsnapStatus}`}>Virtual Machine Snapshot</div>
                </div>
            </div>
        </div>
    )
};
export default Vmware;