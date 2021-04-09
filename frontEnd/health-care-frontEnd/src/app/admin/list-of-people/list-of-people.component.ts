import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export interface List{
  name: string;
  date_of_birth:string;
}

@Component({
  selector: 'app-list-of-people',
  templateUrl: './list-of-people.component.html',
  styleUrls: ['./list-of-people.component.css']
})
export class ListOfPeopleComponent implements AfterViewInit  {

  constructor() { }


  listOfPeople: List[] = [
    {name: '2020-04-06', date_of_birth: 'CHUM'},

  ];

  displayedColumns: string[] = ['First Name', 'Last Name','date of birth','Medicare Number'];
  dataSource = new MatTableDataSource(this.listOfPeople);


  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
