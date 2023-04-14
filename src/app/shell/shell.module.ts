import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { I18nModule } from '@app/i18n';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header/header.component';
import { UserModalComponent } from './modal/user-modal/user-modal.component';

@NgModule({
  imports: [CommonModule, TranslateModule, IonicModule, I18nModule, RouterModule],
  declarations: [ShellComponent, HeaderComponent, UserModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShellModule {}
