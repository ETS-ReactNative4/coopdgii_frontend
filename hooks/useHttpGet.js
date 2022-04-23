import React, { useState, useEffect } from "react";

const useHttpGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({ error: false, textError: "" });
  useEffect(() => {
    const getData = async (url) => {
      setLoading(true);
      const res = await fetch(url);
      try {
        if (res.ok) {
          const resToJson = await res.json();
          setData(resToJson);
        } else {
          setData(null);
          setErr({ error: true, status: res.status, erroText: res.statusText });
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErr({ error: true, status: "failed request", error });
      }
    };

    getData(url);
  }, [url]);
  return { data, loading, err };
};

export default useHttpGet;
