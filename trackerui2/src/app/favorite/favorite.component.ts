import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface FavoriteChangedEventArgs {
  newValue: boolean
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean = false;  // Make isFavorite accessible from outside
  @Output() change = new EventEmitter();

  constructor(){}

  onStarClicked(){
    this.isSelected = !this.isSelected
    this.change.emit({newValue: this.isSelected});
  }
}
