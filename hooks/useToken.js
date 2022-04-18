import React, { useState, useEffect } from "react";

const useToken = (endPoint, data) => {
  const [datauser, setDataUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `token=${data.token}`,
    })
      .then((data) => data.json())
      .then((res) => {
        setDataUser(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endPoint]);
  return {
    datauser,
    loading,
  };
};

export default useToken;
