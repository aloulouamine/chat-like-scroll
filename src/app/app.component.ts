import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  VERSION,
  ViewChildren
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { delay } from "rxjs/operators";
import { IDatasource } from "ngx-ui-scroll";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChildren("listItems") listItems: QueryList<ElementRef>;
  name = "Angular " + VERSION.major;
  source$ = new BehaviorSubject(
    Array.from({ length: 100 }).map((_, i) => `Item #${i}`)
  ).pipe(delay(0));

  ds: IDatasource = {
    get: (index, count, callback) => {
      console.log("index", index, "count", count, "callback", callback);
      const data = [];
      for (let i = index; i <= index + count - 1; i++) {
        data.push({ id: i, text: "! item #" + i });
      }
      callback(data);
    }
  };
}
