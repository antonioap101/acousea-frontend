import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {hasFlag} from "country-flag-icons";

export interface Language {
  code: string;
  label: string;
  flagUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly FLAG_URL = 'https://purecatamphetamine.github.io/country-flag-icons/1x1/';

  private languages: Language[] = [
    { code: 'us', label: 'English', flagUrl: `${this.FLAG_URL}US.svg` },
    { code: 'es', label: 'Español', flagUrl: `${this.FLAG_URL}ES.svg` },
  ];
  private currentLanguage = 'us';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  getAvailableLanguages() {
    return this.languages;
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  getFlagUrl(code: string): string {
    if (hasFlag(code.toUpperCase())) {
      const url= `${this.FLAG_URL}${code.toUpperCase()}.svg`;
      // console.log(`Flag for country code ${code} found at ${url}`);
      return url;
    }
    console.error(`Flag for country code ${code} not found`);
    return '';
  }
}
