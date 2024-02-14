
import { useEffect, useState } from "react";
import { makeRequestByAxios } from "../MakeRequestByAxios";

const useFetch = (url)=>{
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const res = await makeRequestByAxios.get(url);

           setData(res.data.data)
          } catch (err) {
            setError(true)
          }

          setLoading(false)
        };
      
        fetchData();
      }, [url]);
      return {data, error, loading}
}


export default useFetch;