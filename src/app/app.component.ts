import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TabDataVanishing';
  background: ThemePalette = 'primary';
  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }
}
