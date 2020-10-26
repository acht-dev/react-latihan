import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Detail_Statistik from '../pages/Detail_Statistik'
import Kebijakan from '../pages/Kebijakan'
import Kepegawaian from '../pages/Kepegawaian'

export default function Routes() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Kepegawaian}/>
                <Route path="/detail-statistik" component={Detail_Statistik}/>
                <Route path="/kebijakan" component={Kebijakan}/>
            </div>
        </Router>
    )
}
