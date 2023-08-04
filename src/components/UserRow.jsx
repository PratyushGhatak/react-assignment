import React, { useEffect, useState } from "react";
import { usersListActions } from "../redux/features/usersListSlice/usersListSlice";
import { useDispatch } from "react-redux";

const UserRow = (props) => {
  const { email, password, id } = props;
  const dispatch = useDispatch();
  const [localInfo, setLocalInfo] = useState({
    localEmail: "",
    localPassword: "",
  });
  useEffect(() => {
    setLocalInfo({ localEmail: email, localPassword: password });
  }, [email, password]);

  const [canEdit, setCanEdit] = useState(false);
  const handleClick = () => {
    if (!canEdit) {
      setCanEdit(true);
    } else {
      dispatch(
        usersListActions.editUser({
          email: localInfo.localEmail,
          password: localInfo.localPassword,
          id,
        })
      );
      setCanEdit(false);
    }
  };
  return (
    <div className="d-flex">
      <input
        className="w-100 text-center"
        disabled={!canEdit}
        value={localInfo.localEmail}
        onChange={(e) =>
          setLocalInfo((prev) => ({ ...prev, localEmail: e.target.value }))
        }
      />
      <input
        className="w-100 text-center"
        disabled={!canEdit}
        value={localInfo.localPassword}
        onChange={(e) =>
          setLocalInfo((prev) => ({ ...prev, localPassword: e.target.value }))
        }
      />
      <button
        className={` d-block ms-3 btn btn-${canEdit ? `success` : `primary`}`}
        onClick={(e) => handleClick(e)}
      >
        {canEdit ? "Save" : "Edit"}
      </button>
      <button
        className=" d-block ms-3 btn btn-danger"
        onClick={() => dispatch(usersListActions.deleteUser(id))}
      >
        delete
      </button>
    </div>
  );
};

export default UserRow;
