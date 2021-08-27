import React, {useState} from 'react';
import './index.css';
import Reg from './Register/fields';
import Login from './Login/fields';



function App() {
const [isLogin, isNotLogin] = useState(true);
return(
  <div>
    {isLogin ? <Login isLogin={isLogin} isNotLogin={isNotLogin} /> : <Reg isLogin={isLogin} isNotLogin={isNotLogin} />}
  </div>
)
  
}

export default App;
