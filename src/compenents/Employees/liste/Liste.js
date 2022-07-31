import DataTableEmployees from './DataTableEmployees';
import Sidebar from '../../pages/Sidebar';

const Liste = () => {

    return (
        <div className="main">
        <Sidebar />
      <div className="container">
        <div>
        <h1>Liste des employees</h1>
        <DataTableEmployees />
        </div>
      </div>
    </div>
    
    );
};

export default Liste;