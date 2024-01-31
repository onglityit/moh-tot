import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    UserMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    UserMenuComponent
  ]
})
export class UserMenuModule { }