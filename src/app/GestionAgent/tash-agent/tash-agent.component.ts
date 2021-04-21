import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AfficheListeService } from 'src/app/Services/Affichage/affiche-liste.service';

@Component({
  selector: 'app-tash-agent',
  templateUrl: './tash-agent.component.html',
  styleUrls: ['./tash-agent.component.scss']
})
export class TashAgentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  agent: MatTableDataSource<any[]>;

  displayedColumns: string[] = ['Nom', 'Prenom', 'Actions'];
  constructor(private agentshow: AfficheListeService) { }

  ngOnInit(): void {
    this.agentshow.getDeletedAgents().subscribe((reponse: any[]) => {
      this.agent = new MatTableDataSource(reponse);
      this.agent.sort = this.sort;
      this.agent.paginator = this.paginator;
      //console.log(this.agent);
    })
  }


  applyFilter(filterValue: string) {
    this.agent.filter = filterValue.trim().toLowerCase();
  }

}
