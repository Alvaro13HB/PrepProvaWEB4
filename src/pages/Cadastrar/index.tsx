import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { SSection } from "./styles";
import { AxiosError } from "axios";
import { apiProduto } from "../../services/data";
import { IProduto } from "../../services/data/Produto";
import Loading from "../../components/Loading";
export function Cadastrar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<IProduto>({
    nome: '',
    preco: 0,
    qtd: 0,
  })
  async function handleChange(e: IProduto) {
    setFormData((state: IProduto | undefined) => ({ ...state, ...e }))
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (formData.preco && formData.nome && formData.qtd) {
      try {
        setIsLoading(true)
        await apiProduto.store(formData);
        toast.success("Cadastro realizado com sucesso!");
        navigate('/login')
      } catch (error) {
        const err = error as AxiosError
        console.log(err.response?.data)
        toast.error("Falha ao cadastrar!");
      } finally {
        setIsLoading(false)
      }
    } else {
      toast.error("Preencha todos os campos!")
    }
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <SSection>
      <h1>Cadastrar</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <div>
          <BsFillPersonFill />
          <input type="text" name="name" id="nome" placeholder="Nome"
            onChange={(e) => handleChange({ nome: e.target.value })}
            value={formData?.nome}
          />
        </div>
        <label htmlFor="preco">Preço: </label>
        <div>
          <MdEmail />
          <input type="number" name="preco" id="preco" placeholder="Preço"
            onChange={(e) => handleChange({ preco: Number(e.target.value) })}
            value={formData?.preco}
          />
        </div>
        <label htmlFor="qtd">Quantidade: </label>
        <div>
          <FaKey />
          <input type="number" name="qtd" id="qtd" placeholder="Quantidade"
            onChange={(e) => handleChange({ qtd: Number(e.target.value) })}
            value={formData?.qtd}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </SSection>
  );
};