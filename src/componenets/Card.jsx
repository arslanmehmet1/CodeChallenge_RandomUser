import React, { useState, useEffect } from "react";
import axios from "axios";
import emailicon from "../assets/email.svg";
import phoneicon from "../assets/phone.svg";
import locationicon from "../assets/location.svg";

const Card = () => {
  const url = "https://randomuser.me/api/";
  const [data, setData] = useState({});

  const getUserInfo = async () => {
    try {
      const { data } = await axios(url);
      setData(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const selectUser = () => {
    getUserInfo();
  };

  console.log(data);
  // const {
  //   email,
  //   cell,
  //   location: { state },
  //   location: { country },
  //   name: { title, first, last },
  //   picture: { large },
  //   registered: { date },
  // } = data;

  return (
    <div className="main">
      <div className="card">
        <img
          src={data?.picture?.large}
          className="card-img-top rounded"
          alt="user pic."
        />
        <div className="card-body name">
          <h2 className="card-title">
            {data?.name?.title} {data?.name?.first} {data?.name?.last}
          </h2>
        </div>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item mail">
            <img src={emailicon} alt="" width="10%" className="me-5" />
            {data?.email}
          </li>
          <li className="list-group-item tel">
            <img src={phoneicon} alt="" width="10%" className="me-5" />
            {data.phone}
          </li>
          <li className="list-group-item address">
            <img src={locationicon} alt="" width="10%" className="me-5" />
            {data?.location?.state} - {data?.location?.country}
          </li>
          <li className="list-group-item text-center age">
            Age: {data?.dob?.age} <br />
            Register Date :
            {new Date(data?.registered?.date).toLocaleDateString()}
          </li>
        </ul>
      </div>

      <div className="button text-center mt-2">
        <button type="button" className="btn fs-3" onClick={selectUser}>
          Random User
        </button>
      </div>
    </div>
  );
};

export default Card;
