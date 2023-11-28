import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
  provideCloudflareLoader,
  provideImgixLoader,
} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage],
  providers: [
    provideImgixLoader('http://localhost:4200/assets/'),
    /* {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        const img = config.src.split('.');
        const name = img.shift();
        const type = img.pop();
        const width = config.width;
        return `http://localhost:4200/assets/${name}-${width}w.${type}`;
      },
    } */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
