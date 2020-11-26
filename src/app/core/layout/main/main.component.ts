import { Component } from '@angular/core';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'spy-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedIn = faLinkedin;
}
