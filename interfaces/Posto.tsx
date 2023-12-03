interface Posto {
  id: number;
  name: string;
  localizacaoX: number;
  localizacaoY: number;
  endereco: {
    id: number;
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
  };
  combustiveis: Array<{
    id: number;
    tipo: string;
    preco: number;
  }>;
  upVotes: number;
  downVotes: number;
}

export default Posto;