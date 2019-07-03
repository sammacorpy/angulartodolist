import { Service1Service } from './service1.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoviewComponent } from './todoview/todoview.component';
import { XyzPipe } from './xyz.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoviewComponent,
    XyzPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
