import {ChangeDetectionStrategy, Component} from "@angular/core";
import {
  ThemeToggleButtonElementComponent
} from "../common-ui/theme-toggle-button-element/theme-toggle-button-element.component";
import {InputElementComponent} from "../common-ui/input-element/input-element.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: "app-login-register-page",
  standalone: true,
  templateUrl: "./login-register-page.component.html",
  styleUrl: "./login-register-page.component.scss",
  imports: [
    ThemeToggleButtonElementComponent,
    InputElementComponent,
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginRegisterPageComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl<string | null>(null, [Validators.required, Validators.minLength(3)])
  });
  get usernameControl(): FormControl {
    return this.loginForm.get("username") as FormControl;
  }
  get userNames(): string {
    return this.loginForm.value.username;
  }
  onSubmit() {
    this.loginForm.markAllAsTouched();
    this.loginForm.updateValueAndValidity();
    console.log(this.loginForm.value.username);
  }
  getControl(username: string) {
    return undefined;
  }
}

