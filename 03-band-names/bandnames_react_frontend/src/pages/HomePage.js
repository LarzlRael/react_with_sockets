import React, { useContext } from 'react';

import { SocketContext } from '../context/SocketContext';

import { BanddAdd } from '../componentes/BanddAdd';
import { BandList } from '../componentes/BandList';
import { BandChart } from '../componentes/BandChart';


function HomePage() {


  const { online } = useContext(SocketContext);


  return (
    <div className="App container">
      <div className="alert">
        <p>
          Service status :
          {online ?
            <span className="text-success">Online</span> :
            <span className="text-danger">Offline</span>
          }
        </p>
      </div>

      <h1>BandNames</h1>

      <hr />

      <div className="row">
        <div className="col">
          <BandChart />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <BandList
          // data={bands}
          // votar={votar}
          // borrarBanda={borrarBanda}
          // cambiarNombre={cambiarNombre}
          />

        </div>
        <div className="col-4">
          <BanddAdd
          // crearBanda={crearBanda}
          />
        </div>
      </div>
    </div>


  );
}

export default HomePage;
