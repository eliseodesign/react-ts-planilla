import {Routes, Route} from "react-router-dom"
import {lazy} from "react"

const LandingView = lazy (async () => await import('./landing'))
const App = lazy (async () => await import('./aplication'))

const Routing = ():JSX.Element => {
  return ( 
    <>
      <Routes>
        <Route path="/home" element={<LandingView />}></Route>
        <Route path="/app" element={<App />}></Route>
      </Routes>
    </>
   );
}
 
export default Routing;