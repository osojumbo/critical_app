import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { actualState } from '../alerts/AlertStatus.js'
import { getRouters } from '../api/Api.js'
import axios from 'axios';
import routers from "../resources/routers.json"
import swich from "../resources/swich.json"
import vlan from "../resources/vlan.json"
import hsrp from "../resources/hsrp.json"
import wific from "../resources/wific.json"


const Networking = () => {
    const [routerStatus, setRouterStatus] = useState([]);
    /*const [routerStatus] = useState([routers]);
    const [swichStatus] = useState([swich]);
    const [vlanStatus] = useState([vlan]);
    const [hsrpStatus] = useState([hsrp]);
    const [wificStatus] = useState([wific]);
    
    const [alertRouter, setAlertRouter] = useState(null);
    const [alertSwich, setAlertSwich] = useState(null);
    const [alertVlan,setAlertVlan]=useState(null);
    const [alertHsrp, setAlertHsrp] = useState(null);
    const [alertWifiController,setAlertWifiController]=useState(null);*/

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
        axios.get("https://www.nocgroupbit.com/OperationsManager/")
        .then(res=>{
           console.log(res.data)
        }).catch(err =>console.log(err)

        )
        /*actualState(routerStatus, setrouterStatus);
        actualState(swichStatus, setAlertSwich);
        actualState(vlanStatus, setAlertVlan);
        actualState(hsrpStatus, setAlertHsrp);
        actualState(wificStatus, setAlertWifiController);*/
        
    })
    return (
        <div className="">
            <div className='row'>
                <div className='col-sm-4'>
                    <div className={`alert-cont ${routerStatus}`}>Enrutadores</div>
                </div>
                <div className='col-sm-4'>
                    <div className={`alert-cont ${routerStatus}`}>Conmutadores</div>
                </div>
                <div className='col-sm-4'>
                    <div className={`alert-cont ${routerStatus}`}>Vlan</div>
                </div>

            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className={`alert-cont ${routerStatus}`}>HSRP</div>
                </div>
                <div className='col-sm-4'>
                    <div className={`alert-cont ${routerStatus}`}>Wifi Controller</div>
                </div>
                <div className='col-sm-4'>
                    <div className={`alert-cont unavailable}`}>Netc</div>
                </div>
            </div>
        </div>
    )
}
export default Networking;