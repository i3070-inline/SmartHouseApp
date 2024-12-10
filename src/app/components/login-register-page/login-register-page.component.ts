import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  ThemeToggleButtonElementComponent
} from '../common-ui/theme-toggle-button-element/theme-toggle-button-element.component';
import {InputElementComponent} from '../common-ui/input-element/input-element.component';

@Component({
  selector: 'app-login-register-page',
  standalone: true,
  templateUrl: './login-register-page.component.html',
  styleUrl: './login-register-page.component.scss',
  imports: [
    ThemeToggleButtonElementComponent,
    InputElementComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginRegisterPageComponent {
  //region Properties
  //
}
