import React, { useEffect, useState } from "react";
import axios from "axios";
function DataFetching() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      setPost(res.data);
    });
  }, []);
  return (
    <div>
      <ul>
        {post.map((po) => {
          <li key={po.id}>{po.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default DataFetching;
