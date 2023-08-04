import React from "react";

const AddUserForm = (props) => {
  const { userInfo, setUserInfo, handleSubmit } = props;
  return (
    <div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          value={userInfo.email}
          type="email"
          required
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          value={userInfo.password}
          required
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, password: e.target.value }))
          }
        />
      </div>

      <button
        type="button"
        className="btn btn-primary d-block mx-auto mt-3"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default AddUserForm;
