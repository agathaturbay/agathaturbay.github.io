import { Component, Input, OnInit } from '@angular/core';
import { I18nService } from '@app/i18n';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { TextFieldTypes } from '@ionic/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() type = 'icon';
  @Input() itemClass = '';

  constructor(
    private alertController: AlertController,
    private translateService: TranslateService,
    private i18nService: I18nService
  ) {}

  ngOnInit() {}

  setLanguage(language: string) {
    this.i18nService.language = language;
    console.log(this.i18nService.language);
  }

  get currentLanguage(): string {
    console.log(this.i18nService.language);
    return this.i18nService.language;
  }

  get languages(): string[] {
    console.log(this.i18nService.supportedLanguages);
    return this.i18nService.supportedLanguages;
  }

  async changeLanguage() {
    const alertController = await this.alertController.create({
      header: this.translateService.instant('Mudar idioma'),
      inputs: this.i18nService.supportedLanguages.map((language) => ({
        type: 'radio' as TextFieldTypes,
        name: language,
        label: language,
        value: language,
        checked: language === this.i18nService.language,
      })),
      buttons: [
        {
          text: this.translateService.instant('Cancelar'),
          role: 'cancel',
        },
        {
          text: this.translateService.instant('Ok'),
          handler: (language) => {
            this.i18nService.language = language;
          },
        },
      ],
    });
    alertController.present();
  }
}
