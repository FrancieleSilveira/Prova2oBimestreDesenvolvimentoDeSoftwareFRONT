import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPagamento } from 'src/app/models/forma-pagamento';
import { ItemVenda } from 'src/app/models/item-venda';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar-venda',
  templateUrl: './cadastrar-venda.component.html',
  styleUrls: ['./cadastrar-venda.component.css']
})
export class CadastrarVendaComponent implements OnInit {

    cliente!: Usuario;
    formaPgtoId!: number;
    formaPgto!: FormaPagamento;
    itens!: ItemVenda[];
    

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
