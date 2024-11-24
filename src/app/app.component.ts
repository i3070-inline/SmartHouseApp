import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'SmartHouseApp';
  countValue = signal<number>(0);

  // Metodă pentru incrementare
  onCount(): void {
    this.countValue.update(val => val + 1);
    console.log(this.countValue()); // Accesăm valoarea signalului
  }

  // Pornește incrementarea automată la fiecare secundă
  startCounter(): void {
    setInterval(() => {
      this.onCount();
    }, 1000); // 1 secundă
  }

  // Ciclu de viață Angular: se execută la inițializarea componentului
  ngOnInit(): void {
    this.startCounter();
  }
}
