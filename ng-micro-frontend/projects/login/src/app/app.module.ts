import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DbService } from 'db';
import { JwtModule, JwtService } from 'jwt';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule
  ],
  providers: [DbService, JwtService, { provide: APP_BASE_HREF, useValue: '/' }],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})

export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    if (!customElements.get('app-login')) {
      customElements.define('app-login', el);
    }
  }
}
