import React, { useEffect, useState } from "react";

function usePost(url, user, pass) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datainfo, setDataInfo] = useState(null);

  useEffect(() => {
    console.log("se enviaron datos, y no has escrito nada");
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `usuario=${user}&clave=${pass}`,
    })
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData);
        setDataInfo(responseData["success"]);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {
    data,
    loading,
    error,
    datainfo,
  };
}

export default usePost;
