import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.translate.addLangs(["PT", "EN"]);
    this.translate.setDefaultLang("PT");
  }

  public switchLang(lang: string): void {
    this.translate.use(lang);
  }

  public getFlag(lang: string): string {
    switch (lang) {
      case 'en':
        return '/assets/flags/en.png';
      case 'pt':
        return '/assets/flags/pt.png';
      default:
        return '/assets/flags/en.png';
    }
  }
}
