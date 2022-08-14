import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children }) => {
  const { myUser } = useUserContext()
  if (myUser) {
    return children

  }
  else
    return <Navigate to="/"></Navigate>

};
export default PrivateRoute;
