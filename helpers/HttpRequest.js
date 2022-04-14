const Httphelper = () => {
  const request = async (endpoint, options) => {
    const defaultHeader = {
      accepts: "application/x-www-form-urlencoded",
    };

    return fetch(endpoint);
  };

  const get = (endpoint) => {};
  const post = (endpoint, data) => {};

  return {
    get,
    post,
  };
};

export default Httphelper;
