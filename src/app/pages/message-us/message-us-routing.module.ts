import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageUsComponent } from './message-us.component';

const routes: Routes = [{ path: '', component: MessageUsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageUsRoutingModule {}
