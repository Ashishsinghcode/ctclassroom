import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export function baseurl(){
  return "http://localhost:3000/ct/";
}
export function teacherurl(){
  return "http://localhost:3000/teacher/";
}
export function fileurl(){
  return "http://localhost:3000/";

}

const provider = [
  {
    provide:'baseurl',useFactory:baseurl,deps:[]
  },
  {
    provide:'teacherurl',useFactory:teacherurl,deps:[]
  },
  {
    provide:'fileurl',useFactory:fileurl,deps:[]
  }
]

platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
