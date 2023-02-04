import {Component} from "@angular/core";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html"
})

export class ProductListComponent {
  pageTitle: string = "Product List"
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  itemFilter: string = "";

  products: any[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GARDENCART01",
      "releaseDate": "01-01-2022",
      "description": "Choo choo",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png",
      "stock": 5
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "HAMMER01",
      "releaseDate": "01-02-2022",
      "description": "Bang bang",
      "price": 12.99,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png",
      "stock": 5
    },
  ]

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
}
