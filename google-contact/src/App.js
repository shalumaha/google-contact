
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Createcontact from './Crudtask/Createcontact';
import Contactedit from './Crudtask/Contactedit';
import Trash from './Crudtask/Trash';
import Main from './Crudtask/Main';
import Contact from './Crudtask/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Main></Main>}/> 
        <Route path='/Create' element={<Createcontact></Createcontact>}/> 
        <Route path='/update' element={<Contactedit></Contactedit>}/> 
        <Route path='/Trash' element={<Trash></Trash>}/> 
        <Route path='/Contact' element={<Contact></Contact> }/> 
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
