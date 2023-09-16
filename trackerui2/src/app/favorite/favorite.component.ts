import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface FavoriteChangedEventArgs {
  newValue: boolean
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [
    `
    .glyphicon {
    color: green;
}
    `
  ],
  styleUrls: ['./favorite.component.css'],  // won't be applied; styles will override styleUrls 
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean = false;  // Make isFavorite accessible from outside
  @Output('change') click = new EventEmitter();

  constructor(){}

  onStarClicked(){
    this.isSelected = !this.isSelected
    this.click.emit({newValue: this.isSelected});
  }
}
