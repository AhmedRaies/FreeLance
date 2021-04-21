import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OneAgent } from 'src/app/Models/Agent';
import { Result } from 'src/app/Models/Result';
import { AjoutItemService } from 'src/app/Services/Ajout/ajout-item.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajout-agent',
  templateUrl: './ajout-agent.component.html',
  styleUrls: ['./ajout-agent.component.scss']
})
export class AjoutAgentComponent implements OnInit {

  Formulaire = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    nom: new FormControl('', [
      Validators.required
    ]),
    prenom: new FormControl('', [
      Validators.required
    ]),
    cin: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8),
      Validators.pattern("^[0-9]*$")
    ]),
  });

  constructor(private ajout: AjoutItemService ,private dialog: MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  get f() {

    return this.Formulaire.controls;

  }
  openDialog(templateRef) {
    let dialogRef = this.dialog.open(templateRef, {
     width: '300px'
   });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  formSubmit(templateRef) {
    //console.log(this.Formulaire);
    var agent = new OneAgent(this.f.email.value, this.f.nom.value, this.f.prenom.value, this.f.cin.value, true)
    this.ajout.addAgent(agent).subscribe((res:Result) => {
      console.log(res.status);
      if(res.status=="Error"){
        this.openDialog(templateRef)
      }
      else{
        this.openSnackBar("Compte ajouté avec succés !","Cancel");
      }
      
    }
    );
  }




}
