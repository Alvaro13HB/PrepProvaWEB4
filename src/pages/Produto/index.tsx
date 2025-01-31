import { SSection } from "./styles";
import { dados } from "../../services/dados";

export function Produto() {
    return(
        <SSection>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                {dados.map(item => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.preco}</td>
                        <td>{item.qtd}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </SSection>
    )
}