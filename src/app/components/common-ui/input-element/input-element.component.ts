import {ChangeDetectionStrategy, Component, computed, forwardRef, input, signal} from "@angular/core";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {typeInput} from "../../../commons/enums/shared-types";

@Component({
  selector: "app-input-element",
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: "./input-element.component.html",
  styleUrls: ["./input-element.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputElementComponent),
      multi: true
    }
  ]
})
export class InputElementComponent implements ControlValueAccessor {
  //region Members
  placeholder = input<{ description: string | null, action: string | null }>({description: null, action: null});
  iconPath = input<string | null>(null);
  inputType = input<typeInput>("text");
  eyeIconIsVisible = input<boolean>(false);
  showFloatedPlaceholder = input<boolean>(true);
  autocomplete = input<"on" | "off">("on");
  inputErrorHint = input<string | null>(null);
  focused = signal<boolean>(false);
  value = signal<string | null>(null);
  empty = computed(() => this.value() === "" || this.value() === null);
  inputTypeSignal = signal<typeInput>(this.inputType());
  //endregion
  //region Methods
  onBlur = (): void => {
    this.onTouched();
    this.focused.set(false);
  };
  onFocus = (): void => {
    this.focused.set(true);
  };
  togglePasswordVisibility() {
    if (this.inputTypeSignal() === "password") {
      this.inputTypeSignal.set(this.inputType());
      return;
    }
    this.inputTypeSignal.set("password");
  }
  onValueChange(value: string | null) {
    this.value.set(value);
    this.onChange(value);
  }
  onTouched: () => void = () => {
  };
  onChange: (value: string | null) => void = () => {
  };
  //endregion
  //region Overrides
  writeValue(value: string | null): void {
    this.value.set(value);
  }
  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
