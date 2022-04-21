import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import DataMapped from './Components/DataMapped';
import {  Routes, Route } from 'react-router-dom'

function App() {
  return (
   <>
<Routes>
<Route path ="/" element={<DataMapped/>} />
<Route path ="/data" element={<DataMapped/>} />
<Route path ="/form" element={<Form/>} />
</Routes>
   {/* <DataMapped/> */}
   </>
  );
}

export default App;
