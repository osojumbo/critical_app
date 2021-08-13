export function actualState(service, status){
    for(var i = 0; i < service[0].childNodeDatas.length; i++){
        if(service[0].childNodeDatas[i].healthState === 'Error'){
            status('error')
        }else if(service[0].childNodeDatas[i].healthState === 'Warning'){
            status('warning')
        }
        else if(service[0].childNodeDatas[i].healthState === 'Success'){
            status('success')
        }else{
            status('inactive')
        }
    }
}