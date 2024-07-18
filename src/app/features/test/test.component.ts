import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  private dark:boolean = true;
  constructor(public themeService: ThemeService) {

  }

  switchTheme() {
    this.dark == true ? this.themeService.switchTheme("theme-md-dark-indigo") : this.themeService.switchTheme("theme-md-light-indigo") ;
    this.dark = !this.dark;
  }
}
