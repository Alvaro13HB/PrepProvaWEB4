import api from "../../api";
export interface IProduto {
  id?: number
  nome?: string
  preco?: number
  qtd?: number
}

class ProdutoData {
  index() {
    return api.get<IProduto>("/produto")
  }
  store(data: IProduto) {
    return api.post("/produto", data)
  }
  destroy(id: number) {
    return api.delete(`/produto/${id}`)
  }
}
export default new ProdutoData()