import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  isHotFood: boolean = false;
  isSnackFood: boolean = false;
  isCoffee: boolean = false;
  isIceCream: boolean = false;


  hotFoods: Array<any> = [
    {
    "id": 1,
    "title": "Burger",
    "description": "Beef Cheese Burger",
    "url": "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg",
  },
  {
    "id": 2,
    "title": "Zinger",
    "description": "Cheese Zinger Sandwich",
    "url": "https://izzycooking.com/wp-content/uploads/2021/03/Zinger-Burger-thumbnail.jpg",
  },
  {
    "id": 3,
    "title": "Twister",
    "description": "Chicken Twister Sandwich",
    "url": "https://assets.change.org/photos/2/zo/po/KazoPoranuNrDDA-800x450-noPad.jpg?1556911414",
  },
  {
    "id": 4,
    "title": "Shawrma",
    "description": "Beef Shawrma Sandwich",
    "url": "https://media-cdn.tripadvisor.com/media/photo-s/10/87/24/20/shawarma-sandwich.jpg",
  },
  {
    "id": 5,
    "title": "Shawrma",
    "description": "Chicken Shawrma Sandwich",
    "url": "https://uae24x7.com/wp-content/uploads/2021/11/cc.png",
  },
  {
    "id": 6,
    "title": "Escalope",
    "description": "Escalope Chicken Sandwich",
    "url": "https://trustedveal.com/wp-content/uploads/2019/07/cov-recipes-cutlet-sandwich.jpg",
  },
  ];
  snackFoods: Array<any> = [
    {
    "id": 1,
    "title": "Snickers",
    "description": "Chocolate bar 50G",
    "url": "https://d145dj1pf6foch.cloudfront.net/catalog/product/cache/2375564f3f871780f5ea892336b7888c/1/0/105014-v001-1_3.jpg",
  },
  {
    "id": 2,
    "title": "Dolsi Chips",
    "description": "Dolsi Chips Peanut Gold 40G",
    "url": "https://cdnprod.mafretailproxy.com/sys-master-root/h93/hee/9054547705886/215685_main.jpg_480Wx480H",
  },
  {
    "id": 3,
    "title": "Red Bull",
    "description": "Red Bull Energy 250ML",
    "url": "https://images.chickadvisor.com/item/35219/375/i/red-bull-energy-drink.jpg",
  },
  {
    "id": 4,
    "title": "Gandour Cookies",
    "description": "Gandour Cookies Chocolate 156G",
    "url": "https://cdnprod.mafretailproxy.com/sys-master-root/hcd/h31/17365794750494/327691_main.jpg_480Wx480H",
  },
  {
    "id": 5,
    "title": "Mixed Nuts",
    "description": "Castania Mixed Nuts 100G",
    "url": "https://cdnprod.mafretailproxy.com/sys-master-root/hf0/ha1/13724171927582/812706_main.jpg_1700Wx1700H",
  },
  {
    "id": 6,
    "title": "Pepsi",
    "description": "Pepsi Can 330ML",
    "url": "https://cdnprod.mafretailproxy.com/sys-master-root/h52/hce/27150215217182/13191_main.jpg_480Wx480H",
  },
  ];
  Coffee: Array<any> = [
    {
    "id": 1,
    "title": "Cafe Latte",
    "description": "Italian Vibe",
    "url": "https://i0.wp.com/culture-crunch.com/wp-content/uploads/2020/01/rghy.jpg?fit=630%2C462&ssl=1",
  },
  {
    "id": 2,
    "title": "Cappuccino",
    "description": "Italian Vibe",
    "url": "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/cappuccino-2029-e80b7c6d318c7862df2c4c8623a11f99@1x.jpg",
  },
  {
    "id": 3,
    "title": "Cafe Moccha",
    "description": "Italian Vibe",
    "url": "https://home-delivery.nearbyshop.in/images/thumbnails/500/500/detailed/27/Untitled_design__7_.png",
  },
  {
    "id": 4,
    "title": "Affogato",
    "description": "Italian Vibe",
    "url": "https://www.thespruceeats.com/thmb/68fCSNbj5S4MFZPNFimHJbQY9co=/1500x1000/filters:fill(auto,1)/affogato-4776668-hero-08-40d7a68d12ba46f48eaea3c43aba715c.jpg",
  },
  {
    "id": 5,
    "title": "Flat White",
    "description": "Italian Vibe",
    "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-d8ada0f.jpg?quality=90&resize=440,400",
  },
  {
    "id": 6,
    "title": "Americano",
    "description": "Italian Vibe",
    "url": "https://lemeilleurcafe.fr/wp-content/uploads/2021/09/americano-recette-1024x682.jpg",
  },
  ];
  iceCreams: Array<any> = [
    {
    "id": 1,
    "title": "Dolsi Kashta",
    "description": "Dolsi Kashta",
    "url": "https://twentyfoursevenapi.weevi.com/content/uploads/ekomproducts/5287000004190.jpg",
  },
  {
    "id": 2,
    "title": "Dolsi Venetto",
    "description": "Dolsi Venetto",
    "url": "https://twentyfoursevenapi.weevi.com/content/uploads/ekomproducts/5287000004244-1.jpg",
  },
  {
    "id": 3,
    "title": "Dolsi Vegas",
    "description": "Italian Vibe",
    "url": "https://twentyfoursevenapi.weevi.com/content/uploads/ekomproducts/5287000004299.jpg",
  },
  {
    "id": 4,
    "title": "Dolsi Locco",
    "description": "Italian Vibe",
    "url": "https://twentyfoursevenapi.weevi.com/content/uploads/ekomproducts/5287000004312.jpg",
  },
  {
    "id": 5,
    "title": "Dolsi Sandwich",
    "description": "Dolsi MaxiBon Vanilla & Chocolate",
    "url": "https://twentyfoursevenapi.weevi.com/content/uploads/ekomproducts/289~5287000004268.jpg",
  },
  {
    "id": 6,
    "title": "Banana Split",
    "description": "Banana Split",
    "url": "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=contain%2Cgravity=auto%2Cheight=675%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=1200/wp-content/uploads/banana-split-day.jpg",
  },
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

  viewSubCategories(type: string){
    switch(type){
      case 'hotfood':{
        this.isHotFood = true;
        this.isSnackFood = false;
        this.isCoffee = false;
        this.isIceCream = false;
        break;
      }
      case 'snackfood':{
        this.isHotFood = false;
        this.isSnackFood = true;
        this.isCoffee = false;
        this.isIceCream = false;
        break;
      }
      case 'coffee':{
        this.isHotFood = false;
        this.isSnackFood = false;
        this.isCoffee = true;
        this.isIceCream = false;
        break;
      }
      case 'icecream':{
        this.isHotFood = false;
        this.isSnackFood = false;
        this.isCoffee = false;
        this.isIceCream = true;
        break;
      }
    }
  }

  collapseNavBar() {
  var x = document.getElementById("myTopNav") as HTMLElement;
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}


}
