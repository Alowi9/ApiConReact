import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component{

state = {
response: [],
estado: null

}

handlerBuscar(t){

  var buscar = t.target.value;
  this.setState({value : buscar });

}

handlerCLick = () =>{

  var buscar = this.state.value;

 if(buscar == null ){
  axios.get("https://api.giphy.com/v1/gifs/translate?api_key=Jz1qJGUuTBQ3u62SHnq27jZce8Hy9Uz2&s=counter-strike"
  )
  .then(
    dato => {
      console.log( dato.data);

      this.setState({
        response: dato.data,
        estado: true
      })
      console.log(this.state)

    });

 }else{

  axios.get("https://api.giphy.com/v1/gifs/translate?api_key=Jz1qJGUuTBQ3u62SHnq27jZce8Hy9Uz2&s="+buscar
  )
  .then(
    dato => {
      console.log( dato.data);

      this.setState({
        response: dato.data,
        estado: true
      })
      console.log(this.state)

    });
  }
}


handlerCLickRandom = () =>{

  var gif = this.state.value;

  axios.get("https://api.giphy.com/v1/gifs/random?api_key=Jz1qJGUuTBQ3u62SHnq27jZce8Hy9Uz2&tag=&rating=g")
  .then(
    dato => {
      console.log( dato.data);

      this.setState({
        response: dato.data,
        estadoR: true
      })
      console.log(this.state)

    });

}


  render() {
    if(this.state.estado != true && this.state.estadoR != true){
      return (
        <div className="App">
          <header className="App-header">
           
          <div>
            <h2>Buscar un gif por nombre</h2>
            <input type="text" name="name" pattern="[a-z]{1,15}" onChange={this.handlerBuscar.bind(this)}/>
            <input type="button" value="Buscar" onClick={this.handlerCLick.bind(this)}/>
          </div>

          <div>
            <h2>Buscar gif random :)</h2>
      
            <input type="button" value="Buscar random" onClick={this.handlerCLickRandom.bind(this)}/>
          
          </div>
          </header>
        </div>
      );

      }else if(this.state.estado == true) {
        
        return (
          
          <div className="App">
            
            <header className="App-header">
             
            <div>
              <h2>Buscar un gif</h2>
              <input type="text" name="name" pattern="[a-z]{1,15}" onChange={this.handlerBuscar.bind(this)}/>
              <input type="button" value="Buscar" onClick={this.handlerCLick.bind(this)}/>
  
            </div>

            <div>
             <h2>Buscar gif random</h2>
             <input type="button" value="Buscar random" onClick={this.handlerCLickRandom.bind(this)}/>
            
            </div>

            <div className="ApiDatosBusqueda">
              <p><img src={this.state.response.data.images.original.url} alt="Gif"></img></p>
              <p>Link gif: <a href= {this.state.response.data.url}> {this.state.response.data.url}</a> </p>
              <p>Tipo: {this.state.response.data.type}</p>
              <p>Titulo: {this.state.response.data.title}</p>
              <p>Creador del gif: {this.state.response.data.username}</p>
              <p>Cuando lo subio: {this.state.response.data.import_datetime}</p>
              <p>Estado: {this.state.response.meta.status}</p>
            </div>

            
           
          
  
            
            </header>
          </div>
          
      
        );

      }else{
      return (
        <div className="App">
          <header className="App-header">
           
          <div>
            <h2>Buscar un gif</h2>
            <input type="text" name="name" pattern="[a-z]{1,15}" onChange={this.handlerBuscar.bind(this)}/>
            <input type="button" value="Buscar" onClick={this.handlerCLick.bind(this)}/>

          </div>
        
         
          <div>
           <h2>Buscar gif random</h2>
           <input type="button" value="Buscar random" onClick={this.handlerCLickRandom.bind(this)}/>
          
          </div>

          <div className="ApiDatosRandom">
            <p><img src={this.state.response.data.image_url} alt="Gif"></img></p>
            <p>Link gif: <a href= {this.state.response.data.url}> {this.state.response.data.url}</a> </p>
            <p>Tipo: {this.state.response.data.type}</p>
            <p>Titulo: {this.state.response.data.title}</p>
            <p>Creador del gif: {this.state.response.data.username}</p>
            <p>Cuando lo subio: {this.state.response.data.import_datetime}</p>
            <p>Estado: {this.state.response.meta.status}</p>
          </div>
          </header>
        </div>
      );

  }

}

  

}

export default App;
