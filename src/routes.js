import React from 'react'
import { BrowserRouter, Route  } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'

class Router extends React.Component {
    render(){
        return <BrowserRouter>
                <div>
                    <Navbar />
                    <Route exact path={'/'} component={Home} />
                </div>
            </BrowserRouter>
    }
}

export default Router