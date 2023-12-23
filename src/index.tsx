import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.ts'

import App from './App.tsx'
import MapPage from './components/Map/Map.tsx'
import HomePage from './pages/HomePage.tsx'
import Counter from './components/Counter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={HomePage}/>
                <Route path="/map" Component={MapPage} />
                <Route path="/app" Component={App} />
                <Route path="/counter" Component={Counter} />
            </Routes>   
        </BrowserRouter>
    </Provider>
    
)
