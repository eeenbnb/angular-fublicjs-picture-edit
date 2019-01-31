#### develop memo

##### first step. npm package install.
```
npm install --no-optional --save fabric
```
`--no-optional` : Because don't use node-canvas.


##### AppComponent imports
`import { fabric } from 'fabric';`

canvas element set AppComponent HTML
```
<canvas id="canvas" width="600" height="600" #canvas></canvas>
```

```
canvas:any;

ngOnInit(){
  this.canvas = new fabric.Canvas('canvas', {
     isDrawingMode: true,
     selection: true,
     stateful: true
   });
}
```

##### AddingPicture
```
<input type="file" (change)="onChangeInput($event)"/>
```
onChangeInput method get the picture.  
Rendering to canvas.

##### Adding picture on sticker
addImage to Canvas.

##### out picture
`canvasElement.toDataURL("image/png")`
