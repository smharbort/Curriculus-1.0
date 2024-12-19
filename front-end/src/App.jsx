// IMPORT PACKAGES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// IMPORT STYLES
import GlobalStyles from "./styled/GlobalStyles"

// IMPORT PAGES
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={ <HomePage /> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App