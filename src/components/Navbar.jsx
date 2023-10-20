import travelLogo from '../assets/world100.png';

const Navbar = () => {
    return (
        <nav>
        <a href="#">
          <img src={travelLogo} className="logo" alt="Planet Earth Spinning" />
        </a>
        <h1>My Travel Log</h1>
      </nav>
    )
}

export default Navbar;