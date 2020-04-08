import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { DbService } from 'db';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [DbService, { provide: APP_BASE_HREF, useValue: '/' }],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})

export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    if (!customElements.get('app-edituser')) {
      customElements.define('app-edituser', el);
    }
  }

}
