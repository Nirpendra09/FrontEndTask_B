import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [usersData, setUsersData] = useState({});
  const fetchData = () => {
    axios
      .get(`https://api.codedigger.tech/auth/search-user?q=shivam`)
      .then((res) => {
        const persons = res.data;
        setUsersData(res.data.result);
        console.log(usersData);
      });
  };
  return (
    <div>
      <div className="heading">Search User</div>
      <button onClick={fetchData}> Click</button>
      {usersData.length > 0 &&
        usersData.map((item) => {
          return (
            <div>
              <div
                style={{
                  padding: 20,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    backgroundColor: "yellow",
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    marginRight: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{  textAlign: "center", position:'absolute', }}>
                    {item.name[0]}
                  </div>
                </div>
                <div style={{ alignSelf: "center" }}>{item.name}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Search;
