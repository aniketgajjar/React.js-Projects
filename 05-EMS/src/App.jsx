import { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashBoard from './Components/Dashboard/EmployeeDashBoard'
import AdminDashBoard from './Components/Dashboard/AdminDashBoard'
import  { AuthContext } from './Context/AuthProvider'

const App = () => {
  
  const [user, setUser] = useState(null);
  const authdata = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null)


    // useEffect(() => {
    //   if(authdata) {
    //     const loggedInUser = localStorage.getItem("loggedInUser")
    //     if(loggedInUser) {
    //       setUser(loggedInUser.role)
    //     }
    //   }
    // }, [authdata])
    

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    } else if(authdata) {
      const employee = authdata.employees.find((e) =>  email == e.email && e.password == password)
      if(employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
      }
    } else {
      alert('Invalid info.');
    }
  }


  return (
    <>
      {!user ? <Login handleLogin = {handleLogin} /> : ''}
      {user === 'admin' && <AdminDashBoard />}
      {user === 'Employee' && <EmployeeDashBoard />}
    </>
  )
}

export default App