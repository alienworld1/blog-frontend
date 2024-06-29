import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../UserContext';

function Logout({ logoutFunction }) {
  const navigate = useNavigate();
  const { logoutUser } = useContext(UserContext);

  useEffect(() => {
    logoutFunction().then(() => {
      logoutUser();
      navigate('/');
    });
  }, [navigate, logoutFunction, logoutUser]);

  return null;
}

Logout.propTypes = {
  logoutFunction: PropTypes.func,
};

export default Logout;
