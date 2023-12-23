import Nav from '../components/UI/Nav/Nav'
import { useNavigate } from "react-router-dom";
import './Home.css'
const HomePage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div className='Home'>
      <Nav/>
      <button style={{'backgroundColor': 'black', 'outlineColor': 'white'}} onClick={handleClick}>Refresh Page</button>
      <br/> 
    </div>
  )
}

export default HomePage