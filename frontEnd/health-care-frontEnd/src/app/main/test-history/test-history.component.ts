import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export interface Test {
  date: string;
  result: string;
  facility: string;
}

@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.component.html',
  styleUrls: ['./test-history.component.css']
})
export class TestHistoryComponent implements AfterViewInit {

  constructor() { }

  testHistory: Test[] = [
    {date: '2020-04-06', facility: 'CHUM', result: 'negative'},
    {date: '2020-04-07', facility: 'New city Gas', result: 'negative'},
    {date: '2020-05-06', facility: 'Jewish General Hospital', result: 'positive'},
  ];

  displayedColumns: string[] = ['date', 'facility', 'result'];
  dataSource = new MatTableDataSource(this.testHistory);

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
