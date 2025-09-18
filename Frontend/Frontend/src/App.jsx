import React from 'react'
import Dashboard from "./Components/Dashboard"
import {Routes,Route} from "react-router"
import Physics from './Pages/Physics'
import Chemistry from './Pages/Chemistry'
import Maths from './Pages/Maths'

import SimList from './Pages/SimList'
import SimViewer from './Pages/SimViewer'
import Subjective from "./Pages/Subjective"
import DesmosPage from './Pages/DesmosPage'
import AIAnalysisPage from './Pages/AIAnalysisPage'
import TimedQuizPage from './Pages/TimedQuizPage'

const App = () => {
  return (
   <Routes>
        <Route path="/" element={<Dashboard />} />
         <Route path="/physics" element={<Physics/>}/>
        <Route path="/chemistry" element={<Chemistry/>}/>
        <Route path="/mathematics" element={<Maths/>}/>
        <Route path="/subjective" element={<Subjective/>}/>
      
        <Route path="/:subject/:classId" element={<SimList />} />
         <Route path="/subjective/:classId" element={<AIAnalysisPage />} />
        <Route path="/:subject/:class/:simulationId" element={<SimViewer />} />
        <Route path="/analytics" element={<DesmosPage/>}/>
         <Route path="/timed-quiz" element={<TimedQuizPage />} />

           
             
           



    </Routes>
  )
}

export default App
