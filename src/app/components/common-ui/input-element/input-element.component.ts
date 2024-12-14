import {ChangeDetectionStrategy, Component, Input, OnChanges, signal, SimpleChanges} from "@angular/core";
import {NgIf} from "@angular/common";

@Component({
  selector: "app-input-element",
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: "./input-element.component.html",
  styleUrl: "./input-element.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputElementComponent implements OnChanges {
  //region Inputs
  @Input() placeholder: { description: string; action: string } = {
    description: "Description",
    action: "Please enter description"
  };
  @Input() iconPath: string = "assets/icons/user-icon.svg#user-icon";
  @Input() typeInput: string = "text";
  //endregion
  //region Signals
  focused = signal<boolean>(false);
  notEmpty = signal<boolean>(false);
  inputType = signal<string>(this.typeInput);
  //endregion
  //region Methods
  togglePassword() {
    this.inputType.set(
      this.inputType() === "password" ? "text" : "password")
  }
  //endregion
  //region Overrides
  ngOnChanges(changes: SimpleChanges): void {
    this.placeholder = changes["placeholder"] ? changes["placeholder"].currentValue ?? this.placeholder : this.placeholder;
    this.iconPath = changes["iconPath"] ? changes["iconPath"].currentValue ?? this.iconPath : this.iconPath;
    this.typeInput = changes["typeInput"] ? changes["typeInput"].currentValue ?? this.typeInput : this.typeInput;
    this.inputType.set(this.typeInput);
  }
  //endregion
}
