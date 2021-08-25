import React from 'react';
import { Formulario } from './elementos/formularios';
import { Label } from './elementos/formularios';
import { GrupoInput } from './elementos/formularios';
import { Input } from './elementos/formularios';


const App = () => {
  return ( 
    <main>
      <h1><center>Evaluacion de Talento</center></h1>
      <Formulario action="">
      <GrupoInput>
        <div>
          <Label htmlFor="">Nombre del Evaluado</Label>
        </div>
        <div>
          <Input type="text" placeholder="Apellido 1"/>
          <Input type="text" placeholder="Apellido 2"/>
          <Input type="text" placeholder="Nombres"/>
        </div>
      </GrupoInput>

      <div>
        <div>
          <label htmlFor="">Cargo</label>
        </div>
        <div>
          <input type="text"/>
        </div>
      </div>
      
        
      </Formulario>
    </main>
  ); 
}

export default App;



