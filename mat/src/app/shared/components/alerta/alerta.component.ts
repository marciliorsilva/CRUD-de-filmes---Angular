import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dio-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  titulo = 'Sucesso';
  descricao = 'Seu registro foi cadastrado com sucesso!';
  btnSucesso = 'Ok';
  btnCancel = "Cancelar";
  corBtn = "primary";
  possuirBtnFechar = false;

  constructor(public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
