const PostData = (endPoint, data) => {
  return fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: `usuario=${data.ids}&clave=${data.pass}`,
  }).then((data) => data.json());
};

export default PostData;
