import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { DbService } from 'db';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { createCustomElement, NgElementConfig } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DbService, { provide: APP_BASE_HREF, useValue: '/' }],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})

export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const config: NgElementConfig = { injector: this.injector };
    const el = createCustomElement(AppComponent, config);
    if (!customElements.get('app-adduser')) {
      customElements.define('app-adduser', el);
    }
  }

}
