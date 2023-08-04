import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddUserForm from "./AddUserForm";
import { useDispatch } from "react-redux";
import { usersListActions } from "../redux/features/usersListSlice/usersListSlice";
const initialvalues = { email: "", password: "" };
const AddUserModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(initialvalues);
  const validate = () => {};
  const handleSubmit = () => {
    dispatch(
      usersListActions?.addUser({
        email: userInfo.email,
        password: userInfo.password,
      })
    );
    setUserInfo(initialvalues);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddUserForm
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          handleSubmit={handleSubmit}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddUserModal;
