import {BrowserRouter} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import Router from "./pages/Router"


function App() {
  return (
   <BrowserRouter>
   <div className="App">
    <ChakraProvider>
      <Router />
    </ChakraProvider>
   </div>
   </BrowserRouter>
  )
}

export default App;
