import { useNavigate, Outlet } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()

  const goToAuthPage = () => {
    navigate("/todo")
  }
  return (
    <>
      <header>
        <button onClick={goToAuthPage}>Logout</button>
      </header>
      <Outlet />
    </>
  )
}

export default Header
