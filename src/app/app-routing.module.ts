import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: 'tabs/homePage', pathMatch: 'full' },
    {
      path: 'homePage',
      loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
    },
    {
      path: 'message-us',
      loadChildren: () => import('./pages/message-us/message-us.module').then((m) => m.MessageUsModule),
    },
    { path: 'feed', loadChildren: () => import('./pages/feed/feed.module').then((m) => m.FeedModule) },
    {
      path: 'not-found',
      loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'tabs/homePage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
