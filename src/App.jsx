import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./components/Login";
import Body from "./components/Body"
import Profile from "./components/Profile"


function App() {
  

  return (
    <>

<BrowserRouter basename="/">
<Routes>
<Route path="/" element={<Body/>}>
     {/* Nested Routes */}
     <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
</Route>
</Routes>
</BrowserRouter>

    </>
  )
}

export default App
