import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userimg from "../assets/images/userr.jpg"
import { getCurrentUserDetail, isLoggedIn } from "../Auth";

const Profile = () => {
  
  const [user, setUser] = useState(getCurrentUserDetail())
  // const [currentUser, setCurrentUser] = useState(null)
  const [login, setLogin] = useState(isLoggedIn())
  useEffect(() => {
      setUser(getCurrentUserDetail())
      setLogin(isLoggedIn())
  }, [])
  // const [data, setData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // })

  
  const { firstName, lastName, email } = user;

  return (
    <Fragment>
      <Fragment>
      <h2 className="mt-5 ml-5">My Profile</h2>
      <div className="row justify-content-around mt-5 user-info">
        <div className="col-12 col-md-3">
          <figure className="avatar avatar-profile">
            <img className="rounded-circle img-fluid" src={userimg} alt="" />
          </figure>
          <Link
            to="/"
            id="edit_profile"
            className="btn btn-primary btn-block my-5"
          >
            Edit Profile
          </Link>
        </div>

        <div className="col-12 col-md-5">
          <h4>Full Name</h4>
          <p>{`${firstName} ${lastName}`}</p>

          <h4>Email Address</h4>
          <p>{email}</p>

          <Link to="/" className="btn btn-danger btn-block mr-8">
            My rating and reviews
          </Link>

          <Link to="/update-password" className="btn btn-primary btn-block">
            Change Password
          </Link>
        </div>
      </div>
      </Fragment>
    </Fragment>
  );
};

export default Profile;
