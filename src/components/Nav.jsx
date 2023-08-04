import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import AddUserModal from "./AddUserModal";
const Nav = (props) => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  return (
    <>
      <AddUserModal
        show={showAddUserModal}
        handleClose={() => setShowAddUserModal(false)}
      />
      <nav
        className={`d-flex 
      ${user ? `justify-content-between` : `justify-content-center`} p-3 `}
      >
        {user && <div>Hi {user.name}</div>}
        {user ? (
          <div className="gap-20 d-flex">
            <button
              className="btn btn-primary"
              onClick={() => setShowAddUserModal(true)}
            >
              Add User
            </button>
            <button className="btn btn-primary" onClick={() => logout()}>
              Logout
            </button>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </nav>
    </>
  );
};

export default Nav;
