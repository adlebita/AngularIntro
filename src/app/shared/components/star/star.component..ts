import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges{
  @Input() public rating: number;
  public cropWidth: number;
  @Output() public ratingClicked : EventEmitter<string>;

  constructor() {
    this.rating = 0;
    this.cropWidth = 75;
    this.ratingClicked = new EventEmitter<string>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * 75/5;
  }

  onRatingClicked($event: any){
    this.ratingClicked.emit($event);
  }
}
