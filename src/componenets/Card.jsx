import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <div className="container px-5 pt-3">
        <div className="first d-flex justify-content-evenly align-items-center">
          <img src={data.picture.large} className="rounded-circle" alt="" />
          <h3>
            {data.name.title} {data.name.first} {data.name.last}
          </h3>
        </div>
        <div className="second">
          <img src="../assets/email.svg" alt="" />
          <p>{data.email}</p>
        </div>
        <div className="third">
          <img src="" alt="" />
          <p>{data.phone}</p>
        </div>
        <div className="forth">
          <img src="" alt="" />
          <p>
            {data.location.state} - {data.location.country}
          </p>
        </div>
        <div className="last text-center">
          <p>Age: {data.dob.age}</p>
          <p>
            Register Date :{new Date(data.registered.date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="button text-center mt-5">
        <button type="button" className="btn fs-2" onClick={selectUser}>
          Random User
        </button>
      </div>
    </div>
  );
};

export default Card;
