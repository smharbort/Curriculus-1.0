// IMPORT PACKAGES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// IMPORT STYLES
import GlobalStyles from "./styled/GlobalStyles"

// IMPORT PAGES
import Testing from "./pages/Testing"

function App() {

  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          {/* Test Routes Below */}
          <Route path="/" element={ <Testing /> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App