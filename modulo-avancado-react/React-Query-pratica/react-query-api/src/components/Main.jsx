import { useQuery } from "react-query";

export const Main = () => {
  const fetchData = async () => {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    return await response.json();
  };

  const {data, isLoading, isError, error} = useQuery("cep", fetchData);
  refetchOnWindowFocus: false,

  console.log(data);

  if(isLoading) return <p>Está carregando as informações...</p>

  if(isError) return <p>Ocorreu um erro desconhecido {error}</p>

  return (
    <ul>
      {
        <li>
          <p>{data.logradouro}</p>
          <p>{data.bairro}</p>
          <p>{data.localidade}</p>
          <p>{data.uf}</p>
        </li>
      }
    </ul>
  );
};
