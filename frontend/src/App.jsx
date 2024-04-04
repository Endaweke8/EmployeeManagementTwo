
import './App.css'
import { Login } from './components/Login.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Dashboard } from './components/Dashboard.jsx'
import { Home } from './components/Home.jsx'
import { Employees } from './components/Employees.jsx'
import { AddCategory} from './components/AddCategory.jsx'
import { Profiles } from './components/Profiles.jsx'
import { Categories } from './components/Categories.jsx'
import { AddEmployee } from './components/AddEmployee.jsx'

function App() {
 

  return (
   
   <BrowserRouter>
     <Routes>
       <Route path='/adminlogin' element={<Login />}></Route>
       <Route path='/dashboard' element={<Dashboard />}>
         <Route path='' element={<Home />}></Route>
         <Route path='/dashboard/employees' element={<Employees />}></Route>
         <Route path='/dashboard/categories' element={<Categories />}></Route>
         <Route path='/dashboard/profiles' element={<Profiles />}></Route>
         <Route path='/dashboard/add-category' element={<AddCategory />}></Route>
         <Route path='/dashboard/add-employee' element={<AddEmployee />}></Route>




       </Route>

     </Routes>
   </BrowserRouter>
   
  )
}

export default App
