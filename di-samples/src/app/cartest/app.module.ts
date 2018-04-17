import {AppComponent, CarComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";


@NgModule({
  declarations: [AppComponent, CarComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
