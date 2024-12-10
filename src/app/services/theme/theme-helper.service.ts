import {Injectable} from '@angular/core';
import {Theme} from '../../commons/enums/shared-enums';


@Injectable({
	providedIn: 'root'
})
export class ThemeHelperService {
	//region Methods
	getPreferencesTheme(): Theme {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.DARK : Theme.LIGHT;
	}
	setTheme(theme: Theme) {
		document.body.setAttribute('data-theme', theme)
	}
	//
}
