import {Component, OnDestroy, OnInit} from "@angular/core";
import {IProduct} from "./Interfaces/IProduct";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy{
  private _productFilter: string = ""

  pageTitle: string = "Product List"
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "G-CART-01",
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
      "productCode": "H-01",
      "releaseDate": "01-02-2022",
      "description": "Bang bang",
      "price": 12.99,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png",
      "stock": 5
    },
  ]

  filteredProducts: IProduct[] = this.products;

  filterProducts(): void{
    this.filteredProducts = this.products
      .filter(p => p.productName.toLowerCase()
      .includes(this._productFilter.toLowerCase()));
  }

  get productFilter(): string{
    return this._productFilter;
  }

  set productFilter(value: string){
    this._productFilter = value;
    this.filterProducts();
  }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    // Place to put **initialization logic** for a component.
    // The constructor is best used to initialise component's members/properties.
    // In terms of loading order:
    // Component is created, calls constructor -> component added to the DOM -> ngOnInit is then called.
  }

  ngOnDestroy(){
    // Best place to unsubscribe from streams.
    // Clean up logic.
    // The component is still part of the DOM when this lifecycle hook is invoked. The component is removed from the
    // DOM after completion of this method.
  }

  onRatingClicked($event: string) {
    console.log($event + ">.<");
    this.pageTitle = $event;
  }
}
