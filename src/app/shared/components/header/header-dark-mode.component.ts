import { Component, inject } from '@angular/core';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { HlmMenuComponent, HlmMenuImports } from '@spartan-ng/ui-menu-helm';
import { HlmButtonDirective } from '../../../../../components/ui-button-helm/src/lib/hlm-button.directive';
import { HlmIconComponent } from '../../../../../components/ui-icon-helm/src/lib/hlm-icon.component';
import { AsyncPipe } from '@angular/common';
import { provideIcons } from '@ng-icons/core';
import { radixMoon } from '@ng-icons/radix-icons';
import { DarkMode, DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header-dark-mode',
  standalone: true,
	imports: [BrnMenuTriggerDirective, HlmMenuImports, HlmButtonDirective, HlmIconComponent, AsyncPipe, HlmMenuComponent],
	providers: [provideIcons({ radixMoon })],
  template: `
    <button size="sm" variant="ghost" align="end" [brnMenuTriggerFor]="theme" hlmBtn>
			<hlm-icon name="radixMoon" size="sm" />
			<span class="sr-only">Open menu to change theme</span>
		</button>
		<ng-template #theme>
			<hlm-menu class="w-40">
				<button hlmMenuItemCheckbox [checked]="(theme$ | async) === 'light'" (click)="setTheme('light')">
					<hlm-menu-item-check />
					Light
				</button>
				<button hlmMenuItemCheckbox [checked]="(theme$ | async) === 'dark'" (click)="setTheme('dark')">
					<hlm-menu-item-check />
					Dark
				</button>
				<button hlmMenuItemCheckbox [checked]="(theme$ | async) === 'system'" (click)="setTheme('system')">
					<hlm-menu-item-check />
					System
				</button>
			</hlm-menu>
		</ng-template>
  `
})
export class HeaderDarkModeComponent {
	private _darkModeService = inject(DarkModeService);
	theme$ = this._darkModeService.darkMode$;
	public setTheme(theme: DarkMode) {
		this._darkModeService.setDarkMode(theme);
	}

}
