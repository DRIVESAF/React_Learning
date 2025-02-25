import "./style.css"

const NavBar =({Children}) =>{
  return (
    <div className="nav-bar">
      <div className="left">{Children[0]}</div>
      <div className="center">{Children[1]}</div>
      <div className="right">{Children[2]}</div>
    </div>
  )
}

export default NavBar