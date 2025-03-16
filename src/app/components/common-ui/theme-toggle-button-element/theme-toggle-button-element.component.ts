import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {ThemeHelperService} from '../../../services/theme/theme-helper.service';
import {TitleCasePipe} from '@angular/common';
import {Theme} from '../../../commons/enums/shared-enums';

@Component({
  selector: 'app-theme-toggle-button-element',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './theme-toggle-button-element.component.html',
  styleUrl: './theme-toggle-button-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleButtonElementComponent {
  themeService = inject(ThemeHelperService);
  currentTheme = signal<Theme>(this.themeService.getPreferencesTheme());
  toggleChangeTheme() {
    this.currentTheme.update(theme =>
      theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    );
    this.themeService.setTheme(this.currentTheme() as Theme);
  }
}
