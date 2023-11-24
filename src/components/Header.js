import { logout } from '../store/authSlice';
import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
const Header = () => {
  const dispatch=useDispatch();
  const auth = useSelector((store)=>store.auth.isAuthenticated)
  const handleLogOut=()=>{
dispatch(logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth&&<nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
