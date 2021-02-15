import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UiScrollModule } from "ngx-ui-scroll";

import { HelloComponent } from "./hello.component";

@NgModule({
  imports: [BrowserModule, FormsModule, UiScrollModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
