import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-input-element',
  standalone: true,
  imports: [],
  templateUrl: './input-element.component.html',
  styleUrl: './input-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputElementComponent {
  @Input() placeholder: { description: string; action: string } = {
    description: 'Description',
    action: 'Please enter description'
  };
  @Input() iconPath: string = 'assets/icons/user-icon.svg#user-icon';
  focused = signal<boolean>(false);
  notEmpty = signal<boolean>(false);
}
