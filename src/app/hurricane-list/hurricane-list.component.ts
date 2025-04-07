import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HurricaneStats } from '../hurricane-stats.interface';
import { TableActions } from '../enums/table-actions.enum';
import { MatTableModule } from '@angular/material/table';

const ELEMENT_DATA: HurricaneStats[] = [
  { name: 'IAN', dateOfLandfall: 'September 28, 2022', categoryAtLandfall: 'Category 4', maximumSustainedWinds: '155 mph',
    estimatedDamage: '$122 billion', fatalities: '161', stormSurge: '15 feet', windGusts: '161 mph', notes: ''},
];

@Component({
  selector: 'hurricane-list',
  imports: [MatTableModule],
  templateUrl: './hurricane-list.component.html',
  styleUrls: ['./hurricane-list.component.css']
})
export class HurricaneListComponent {
  displayedColumns: string[] = ['name', 'dateOfLandfall', 'categoryAtLandfall', 'maximumSustainedWinds', 'estimatedDamage'];
  dataSource = ELEMENT_DATA;
}
