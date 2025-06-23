import { TEXTS } from './resources/texts';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  TEXTS = TEXTS;
  title = 'landing-page';

  async ngOnInit() {
    await this.configService.loadConfig()
      .then(config => {
        console.log('Configuration loaded:', config);
      })
      .catch(error => {
        console.error('Failed to load configuration:', error);
      });
  }
}
