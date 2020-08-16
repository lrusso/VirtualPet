# Virtual Pet

Virtual Pet developed in JavaScript.

![alt screenshot](https://raw.githubusercontent.com/lrusso/VirtualPet/master/VirtualPet.png)

## Web:

https://lrusso.github.io/VirtualPet/VirtualPet.htm

## Note - How to patch spritesheets for WebGL

*  Installing the repository (https://github.com/sporadic-labs/tile-extruder):

```
npm install --global tile-extruder
```

* Patching the spritesheet:

```
tile-extruder --tileWidth 32 --tileHeight 32 --input ./originalSpritesheet.png --output ./patchedSpritesheet.png
```

* Updating the spritesheet code:

```diff
-this.load.spritesheet("dog", dogSprite, 32, 32, 30);
+this.load.spritesheet("dog", dogSprite, 32, 32, 30, 1, 2);
```
