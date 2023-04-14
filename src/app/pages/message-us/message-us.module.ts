import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageUsComponent } from './message-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MessageUsRoutingModule } from './message-us-routing.module';
import { I18nModule } from '@app/i18n';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MessageUsComponent],
  imports: [
    CommonModule,
    MessageUsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    I18nModule,
    TranslateModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MessageUsModule {}
