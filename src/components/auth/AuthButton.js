import { logout } from '../auth/service';
import { useAuth } from './context';

function AuthButton({  }) {
  const { isLogged, handleLogout: onLogout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return  (
    <button className='logBtn' onClick={handleLogoutClick}>
      Logout
    </button>
  );
}

export default AuthButton;
