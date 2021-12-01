import { FormaPagamento } from "./forma-pagamento";
import { ItemVenda } from "./item-venda";
import { Usuario } from "./usuario";

export interface Venda {

    usuarioId?: number;
    usuario?: Usuario;
    formaPagamentoId?: number;
    formaPagamento?: FormaPagamento;
    itens?: ItemVenda[];


}
