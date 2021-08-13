import 'bootstrap/dist/css/bootstrap.min.css';
import Networking from '../components/Networking.jsx';
import As_400 from '../components/As_400.jsx'
import Modelado_serv from '../components/Modelado_serv.jsx'
import Plataforma from '../components/Plataforma.jsx'
import Sistema_op from '../components/Sistema_op.jsx'
import Vmware from '../components/Vmware.jsx'

function Dashboard() {
    return (
      <div className = "container-fluid">
          <h1 className = 'title'>ESTADO DE SERVICIOS</h1>
          <div className = 'row'>
            <div className = 'col-lg-4'>
            <h2 className = 'title-service'>Networking</h2>
                <Networking/>
            </div>
            <div className = 'col-sm-4'>
            <h2 className = 'title-service'>AS/400</h2>
              <As_400/>    
            </div>
            <div className = 'col-sm-4'>
            <h2 className = 'title-service'>Modelado de servicios</h2>
              <Modelado_serv/>
            </div>
          </div>
          <div className = 'row'>  
            <div className = 'col-sm-6'>
              <h2 className = 'title-service'>Plataforma</h2>
                <Plataforma/>               
            </div>
            <div className = 'col-sm-6'>
              <h2 className = 'title-service'>Sistema operativo</h2>
              <Sistema_op/>
            </div>
          </div>
          <div className ='row'>
            <div className = 'col-sm-12'>
              <h2 className = 'title-service'>VMWARE</h2>
              <Vmware/>
            </div>
          </div>
      </div>
    );
  }
  
  export default Dashboard;