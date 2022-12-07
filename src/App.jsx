import Advice from './advice/Advice'
import FilterData from './filter/FilterData'
import NavMenu from './navMenu/NavMenu'
import Quiz from './quiz/Quiz'
import Quiz2 from './quiz/Quiz2'
import Sidebar from './sidebar/Sidebar'
import Temp from './temp/temp'
import Temp2 from './temp/temp2'
import Weather from './Weather/Weather'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './navbar/Navbar'
function App() {

  return (
    <div >
      <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/sidebar" element={<Sidebar />}/>
      <Route path="/quiz" element={<Quiz />}/>
      <Route path="/temp" element={<Temp />}/>
      <Route path="/advice" element={<Advice />}/>
      <Route path="/weather" element={<Weather />}/>
      <Route path="/filterData" element={<FilterData />}/>
    </Routes>
  </BrowserRouter>,
      {/* <Route path="/" element={<Sidebar />}> */}
      {/* </Route> */}
    {/* <NavMenu /> */}
{/* <FilterData/> */}
    {/* <Sidebar /> */}
    </div>
  )
}

export default App
