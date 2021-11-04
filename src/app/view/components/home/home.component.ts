import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit  {

  displayedColumns: string[] = ['id', 'date', 'assets', 'payout', 'value','profit'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  selected!: Date | null;
}


export interface PeriodicElement {
  id: number;
  date: string;
  assets: string;
  payout: number;
  value: number;
  profit: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, date: '04/11/2021', assets: 'EUR/USD', payout: 87, value: 20.00, profit: 17.40},
  {id: 2, date: '04/11/2021', assets: 'EUR/USD', payout: 87, value: 20.00, profit: 17.40},
  {id: 3, date: '04/11/2021', assets: 'EUR/USD', payout: 87, value: 20.00, profit: 17.40},
  {id: 4, date: '04/11/2021', assets: 'EUR/USD', payout: 87, value: 20.00, profit: 17.40},

];
