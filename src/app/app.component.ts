import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { fabric } from 'fabric';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild("preview")previewElement:ElementRef;
  @ViewChild("canvas")canvasElement:ElementRef;
  canvas:any;
  assetsList:any = [
    "./assets/img/twitter_logo.png",
    "./assets/img/unko.png",
    "./assets/img/emoji100.png",
    "./assets/img/baby.png",
    "./assets/img/kinniku.png"
  ];

  ngOnInit(){
    this.canvas = new fabric.Canvas('canvas', {
       isDrawingMode: false,
       selection: true,
       stateful: true
     });
  }

  onChangeInput(e){
    let file = e.target.files[0];
    let reader = new FileReader();

    if(file.type.indexOf("image") < 0){
      console.log("error")
      return false;
    }

    reader.onload = ((file)=> {
      return (e)=> {
        let image = new Image;
        image.onload = ()=>{
          let fabricImage = new fabric.Image(image);

          fabricImage.set({
            selectable: false,
            width:  fabricImage.width,
            height: fabricImage.height
          });

          this.canvas.setWidth(fabricImage.width);
          this.canvas.setHeight(fabricImage.height);
          this.canvas.clear();

          this.canvas.add(fabricImage);
        };
        image.src = e.target.result;
      };
    })(file);

    reader.readAsDataURL(file);
  }

  addSticker(i){
    let image = new Image;
    image.onload = ()=>{
      let fabricImage = new fabric.Image(image);

      fabricImage.set({
        selectable: true,
        width:  fabricImage.width,
        height: fabricImage.height
      });

      this.canvas.add(fabricImage);
    };
    image.src = this.assetsList[i];
  }

  canvasToImg(){
    this.previewElement.nativeElement.src = this.canvasElement.nativeElement.toDataURL("image/png");
  }

}
