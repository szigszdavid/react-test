import ShoppingWebsiteMenu from './menu/ShoppingWebsiteMenu'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <ShoppingWebsiteMenu>
        <Outlet />
      </ShoppingWebsiteMenu>
    </>
  )
}

export default App
