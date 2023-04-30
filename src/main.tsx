import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter} from "react-router-dom"

import {EmployeeProvider} from "./shared/context/EmployeeContext"
import {ComponentProvider} from "./shared/context/ToolContext"
import App from "./App"
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

    <BrowserRouter>
      <EmployeeProvider>
        <ComponentProvider>
          <App/>
        </ComponentProvider>
      </EmployeeProvider>
    </BrowserRouter>

)
