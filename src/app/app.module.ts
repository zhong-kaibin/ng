import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzNoAnimationModule} from 'ng-zorro-antd/core/no-animation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconDefinition} from '@ant-design/icons-angular';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {HttpClientModule} from '@angular/common/http';
import {AccountBookFill, AlertFill, AlertOutline, WindowsFill} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill, WindowsFill];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzNoAnimationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
