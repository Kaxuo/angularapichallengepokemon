import { Component, OnInit } from "@angular/core";
import { NumbersService } from "../../services/numbers.service";
import { tap } from "rxjs/operators";
import { element } from 'protractor';

@Component({
  selector: "app-guessing-page",
  templateUrl: "./guessing-page.component.html",
  styleUrls: ["./guessing-page.component.scss"],
})
export class GuessingPageComponent implements OnInit {
  message: string = "";

  constructor(private gameService: NumbersService) {}

  ngOnInit(): void {}

  onClick() {
    this.gameService
      .game()
      .pipe(tap(element => this.message = element.message ))
      .subscribe();
  }
}
