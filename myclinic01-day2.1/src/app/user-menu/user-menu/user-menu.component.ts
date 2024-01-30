import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LanguagesService } from '../../services/language.service';
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {
  selectedLanguage: any = localStorage.getItem('curr_lang');
  get selectedLang() {
    return this.selectedLanguage;
  }
  constructor(
    private translate: TranslateService,
    private languagesService: LanguagesService,
  ) {
    this.selectedLanguage = translate.currentLang;
    this.translate.onLangChange.subscribe((languageObject: LangChangeEvent) => {
      this.selectedLanguage = languageObject.lang;
    });
  }
  setLanguage(selectedLanguage: any) {
    this.languagesService.setLanguage(selectedLanguage);
  }
}

