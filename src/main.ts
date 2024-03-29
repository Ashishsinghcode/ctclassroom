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
export function studenturl(){
  return "http://localhost:3000/student/";
}
export function fileurl(){
  return "http://localhost:3000/";

}
export function otpurl(){
  return "https://www.fast2sms.com/dev/bulkV2";

}

const provider = [
  {
    provide:'baseurl',useFactory:baseurl,deps:[]
  },
  {
    provide:'teacherurl',useFactory:teacherurl,deps:[]
  },
  {
    provide:'studenturl',useFactory:studenturl,deps:[]
  },
  {
    provide:'fileurl',useFactory:fileurl,deps:[]
  },
  {
    provide:'otpurl',useFactory:otpurl,deps:[]
  },
]

platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
