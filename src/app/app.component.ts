import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Verificăm preferința utilizatorului pentru tema (dark/light)
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// Setează tema în funcție de preferință
    const rootElement = document.documentElement;
    console.log(rootElement)
    rootElement.classList.add(!prefersDarkScheme.matches ? "dark" : "light");
  }
}
