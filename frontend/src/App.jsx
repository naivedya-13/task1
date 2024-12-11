import { useState } from 'react'
import FormLayout from './Pages/FormLayout'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ProForm from './Pages/ProForm';
import Charboard from './Pages/Charboard';

const dummy =()=>{
  return <div>Welcome</div>
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<FormLayout />} />
        <Route path="/eCommerce" element={<FormLayout activeComponent={<Charboard />} />} />
        <Route path="/pro-form-layout" element={<FormLayout activeComponent={<ProForm />} />} />
   
   </Routes>
    </BrowserRouter>
    
    
  
  )
}

export default App
