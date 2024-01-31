import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  static readonly DEFAULT_LANGUAGE = 'en';
  static readonly LANGUAGE_STORAGE_KEY = 'curr_lang';
  constructor(
    protected translate: TranslateService,
    protected localStorage: LocalStorageService
  ) {}
  initLanguage() {
    this.translate.setDefaultLang(LanguagesService.DEFAULT_LANGUAGE);
    this.setLanguage(this.getLocalLanguage() || LanguagesService.DEFAULT_LANGUAGE);
  }
  setLanguage(language: string) {
    this.setLocalLanguage(language);
    this.translate.use(language);
  }
  getLocalLanguage(): string | null {
    return this.localStorage.get(LanguagesService.LANGUAGE_STORAGE_KEY) || null;
  }
  setLocalLanguage(language: string) {
    this.localStorage.set(LanguagesService.LANGUAGE_STORAGE_KEY, language);
  }
}
