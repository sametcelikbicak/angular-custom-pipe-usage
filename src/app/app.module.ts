import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CustomDatePipe],
  bootstrap: [AppComponent],
  providers: [CustomDatePipe]
})
export class AppModule {}
