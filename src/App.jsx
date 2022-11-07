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
function App() {

  return (
    <div >
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sidebar />}>
      </Route>
    </Routes>
  </BrowserRouter>,
    {/* <NavMenu /> */}
        {/* <Quiz /> */}
        {/* <Temp /> */}
        {/* <Advice /> */}
        {/* <Weather /> */}
{/* <FilterData/> */}
    {/* <Sidebar /> */}
    </div>
  )
}

export default App
