import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AfficheListeService } from 'src/app/Services/Affichage/affiche-liste.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailAgentComponent } from 'src/app/Details/detail-agent/detail-agent.component';


@Component({
  selector: 'app-affiche-agent',
  templateUrl: './affiche-agent.component.html',
  styleUrls: ['./affiche-agent.component.scss']
})
export class AfficheAgentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  agent: MatTableDataSource<any[]>;

  displayedColumns: string[] = ['Nom', 'Prenom', 'Actions'];
  constructor(private agentshow: AfficheListeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.agentshow.getAllAgent().subscribe((reponse: any[]) => {
      this.agent = new MatTableDataSource(reponse);
      this.agent.sort = this.sort;
      this.agent.paginator = this.paginator;
      //console.log(this.agent);
    })
  }


  applyFilter(filterValue: string) {
    this.agent.filter = filterValue.trim().toLowerCase();
  }
  afficheDetaille(cin): void {
    console.log(cin);
    
    const dialogRef = this.dialog.open(DetailAgentComponent,{data: {cin: cin}});
    //console.log(this.cin.nativeElement.value)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  supprimer(cin) {

  }
  modifier(cin) {

  }
}
