import { Component, OnInit } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-eid",
  templateUrl: "./eid.component.html",
  styleUrls: ["./eid.component.scss"],
})
export class EidComponent implements OnInit {
  faCoffee = faCoffee;
  id: string = "ibfkhcnbphgbmefnjmbcgbbdfkifkajl";
  message: string = "Starting point";
  dataID;
  image: string = "";

  constructor() {}

  ngOnInit(): void {
    console.log("lmao");
  }

  check() {
    chrome.runtime.sendMessage(this.id, {}, (response) => {
      if (JSON.stringify(response) === "{}") {
        this.message =
          "You are not logged in from the extension , please use the extension and your code pin to log in !";
      } else {
        this.message = "You are logged in from the extension ! Good work";
        this.dataID = response.key.data;
        this.image = 'data:image/jpg;base64,' + response.key.data.PHOTO_FILE;
        console.log(this.image);
      }
    });
  }
}
