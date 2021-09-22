import { useState,useEffect } from "react";

const useFetch = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource')
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null)
        })
        .catch(err => {
          // console.log(err.message)
          setError(err.message)
        })
    }, 4000);
  }, []);
}
 
export default useFetch;