import Studentregister from './sutregister';
import WelcomeScreen from './welcome';
import Adminlogin from './adminlogin';
import Studentlogin from './stulogin';
import Studenthome from './studenthome';
import Admincreate from './adminregister';
import Adminhome from './adminhome';
import userContext from "./context";
import { HashRouter,Routes,Route } from "react-router-dom";

function App() {
  return (<><HashRouter>
    <userContext.Provider value={{
            users: [
              {
                name:'',
                description:'',
              }
            ]
          }}></userContext.Provider>
  <Routes>
  <Route path="/" element={<WelcomeScreen />} />
  <Route path="/adminlogin" element={<Adminlogin />} />
  <Route path="/adminhome" element={<Adminhome />} />
  <Route path="/admin" element={<Admincreate />} />
  <Route path="/studentregister" element={<Studentregister />} />
  <Route path="/studentlogin" element={<Studentlogin />} />
  <Route path="/studenthome" element={<Studenthome />} />
  </Routes>
  </HashRouter>
  </>
  );
}

export default App;
