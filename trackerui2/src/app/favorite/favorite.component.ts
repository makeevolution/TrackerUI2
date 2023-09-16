import { Component, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean = false;  // Make isFavorite accessible from outside
  constructor(){}
  onStarClicked(){
    this.isSelected = !this.isSelected
  }
}
