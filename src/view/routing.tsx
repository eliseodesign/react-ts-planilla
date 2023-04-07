import {Routes, Route} from "react-router-dom"
import {lazy} from "react"

const LandingView = lazy (async () => await import('./landing'))

const Routing = ():JSX.Element => {
  return ( 
    <>
      <Routes>
        <Route path="/Home" element={<LandingView />}></Route>
      </Routes>
    </>
   );
}
 
export default Routing;