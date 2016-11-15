import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'kendoui',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [    
        '../../../../node_modules/@telerik/kendo-theme-default/dist/all.css',
        './kendoui.scss'
    ],

  template: require('./kendoui.html')
})


export class Kendoui {

    title = 'app works!';
    private baseImageUrl: string = "http://demos.telerik.com/kendo-ui/content/web/panelbar/";
// Sandbox

    private baseSportsIconUrl: string = "http://demos.telerik.com/kendo-ui/content/shared/icons/sports/";
    private baseIconUrl: string = "http://demos.telerik.com/kendo-ui/content/shared/icons/16/";

    private sportsIconUrl(imageName: string): string {
        return this.baseSportsIconUrl + imageName + ".png";
    }

    private iconUrl(imageName: string): string {
        return this.baseIconUrl + imageName + ".png";
    }


   // Drag Drop BIG
 public colorsA: Array<string> = ['Violet', 'Magenta', 'Purple', 'SlateBlue'];
    public colorsB: Array<string> = ['SteelBlue', 'CornflowerBlue', 'RoyalBlue', 'MediumBlue'];
    public colorsC: Array<string> = ['LimeGreen', 'SeaGreen', 'Green', 'OliveDrab'];
    public colorsD: Array<string> = ['LightSalmon', 'Salmon', 'IndianRed', 'FireBrick'];

    public palettes: Array<any> = null;

    constructor() {
        this.palettes = [{ data: this.colorsA, name: "Palette A" },
            { data: this.colorsB, name: "Palette B" },
            { data: this.colorsC, name: "Palette C" },
            { data: this.colorsD, name: "Palette D" }
        ];
    }



// Drag Drop
    public items: string[] = ['alpha', 'beta', 'gamma', 'delta', 'eta', 'theta'];

     public activeStyle: any = {
         'background-color': '#C5E1A5', 'display': 'inline-block',
         'width': '60px', 'height': '40px', 'cursor': 'move', 'margin': '2px', 'padding': '5px',
         'border': '2px dashed black'
     };
     public demoItemStyle: any = {
         'background-color': '#C5CAE9', 'display': 'inline-block',
         'width': '60px', 'height': '40px', 'cursor': 'move', 'margin': '2px', 'padding': '5px'
     };



//Images
     private imageUrl(imageName: string) :string {
        return this.baseImageUrl + imageName + ".jpg";
    }

    
  onButtonClick() {
    alert('Hello from Kendo UI!');
    
  }


    uploadSaveUrl: string = "";
  uploadRemoveUrl: string = "";




   private gridData: any[] = [{
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18.0000,
        "Discontinued": true
    }, {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19.0000,
        "Discontinued": false
    }, {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitPrice": 10.0000,
        "Discontinued": false
    }, {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitPrice": 22.0000,
        "Discontinued": false
    }, {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitPrice": 21.3500,
        "Discontinued": false
    }, {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitPrice": 25.0000,
        "Discontinued": false
    }];



    
}