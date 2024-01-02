import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HlmButtonDirective } from '../../components/ui-button-helm/src/lib/hlm-button.directive';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HlmButtonDirective, HeaderComponent],
	host: {
		class: 'text-foreground block antialiased',
	},
  template: `
    <app-header/>
    <div class="mx-auto max-w-screen-2xl">
      <router-outlet />
    </div>
  `
})
export class AppComponent {
}
