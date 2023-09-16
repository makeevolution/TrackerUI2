import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post={
    isFavorite: true
  }
  title = 'angular trackerui2';

  onFavoriteChanged(isFavorite: string) {
    console.log("Favorite changed: ", isFavorite)
  }
}
