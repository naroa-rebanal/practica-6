import client, {
    removeAuthorizationHeader,
    setAuthorizationHeader,
  } from '../../api/client';
  import storage from '../../utils/storage';
  
const headers = 'Content-Type: application/json';

  export const login = ({remember, ...credentials }) => {    
    return client.post('/api/auth/login', credentials, headers).then(({ accessToken }) => {
      setAuthorizationHeader(accessToken);
      if(remember){
        storage.set('auth', accessToken);
      }
    });
  };
  
  export const logout = () => {
    return Promise.resolve().then(() => {
      removeAuthorizationHeader();
      storage.remove('auth');
    });
  };
  