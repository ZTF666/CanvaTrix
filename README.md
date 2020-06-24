# CanvaTrix

Turn your <strong><</strong>canvas<strong>/></strong> into a fancy Matrix like screen.

This is just a readaptation/tweaked version of this code found here : [Original Code](http://cssdeck.com/labs/the-matrix) .

# How To Use This

## NPM installation

```npm

npm i canvatrix

```

## Import

```javascript
import { ZTF } from "canvatrix";

ZTF(YOUR_CANVAS_ID).matrix(SPEED, CANVAS_WIDTH, CANVAS_HEIGHT);
```

## Notice

<p>Make sure your canvas width and height values are the same as the ones put in the call of the function </p>
<p>Example</p>

```html
...
..
.
<canvas id="test" width="1000" height="50"></canvas>
. 
.. 
... 
.. 
.
<script>
  ZTF("#test").matrix(50, 1000, 50);
</script>
... 
.. 
.
```
