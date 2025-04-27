import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import '../styles.css';
 // (Make sure styles.css contains sidebar styles)

function Navbar({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.clear();
      sessionStorage.clear();
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>SMS</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink exact="true" to="/" activeclassname="active-link" className="sidebar-link">
          Home
        </NavLink>
        <NavLink to="/list-students" activeclassname="active-link" className="sidebar-link">
          Student List
        </NavLink>
        <NavLink to="/add-student" activeclassname="active-link" className="sidebar-link">
          Add Student
        </NavLink>
        <NavLink to="/edit-student" activeclassname="active-link" className="sidebar-link">
          Edit Student
        </NavLink>

        {user && (
          <>
            <div className="sidebar-user">
              <img src={user.photoURL || 'https://via.placeholder.com/40'} alt="Profile" className="sidebar-avatar" />
              <div className="sidebar-user-info">
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
              </div>
            </div>
            <button className="sidebar-logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
