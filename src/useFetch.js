import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setErro] = useState(null);

  useEffect(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error(
              "Nao foi possivel buscar os dados para esse cidade..."
            );
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setErro(null);
        })
        .catch((erro) => {
          setErro(erro.message);
          setIsPending(false);
        });
  }, [url]);
  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
