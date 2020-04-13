import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    if (!customElements.get('app-navbar')) {
      customElements.define('app-navbar', el);
    }
  }

}
