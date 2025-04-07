import {Component} from '@angular/core';
import { HurricaneListComponent } from "./hurricane-list.component";

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'tile-component',
  templateUrl: 'tile.component.html',
  imports: [HurricaneListComponent],
})
export class TileComponent {
  title = 'hurricane-project';

}