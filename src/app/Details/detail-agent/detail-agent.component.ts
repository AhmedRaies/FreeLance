import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OneAgent } from 'src/app/Models/Agent';
import { AfficheListeService } from 'src/app/Services/Affichage/affiche-liste.service';

export interface DialogData {
  cin: number;
}


@Component({
  selector: 'app-detail-agent',
  templateUrl: './detail-agent.component.html',
  styleUrls: ['./detail-agent.component.scss']
})
export class DetailAgentComponent implements OnInit {

  agent:OneAgent[]
  constructor(private affiche: AfficheListeService, public dialogRef: MatDialogRef<DetailAgentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.affiche.findOneAgent(this.data['cin']).subscribe((result)=>{
      this.agent=result;
      console.log(this.agent);
      
    })
  }

}
