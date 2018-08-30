import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TreeModule} from 'primeng/tree';
import {TreeComponent} from './components/tree/tree.component';
import {NodeService} from './services/node.service';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TreeModule
  ],
  providers: [
    NodeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
