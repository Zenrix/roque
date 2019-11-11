class World {

  // stupid simple for now, make a box
  constructor(width, length) {
    this._width = width;
    this._length = length;
    this._state = this.generateMap();
  }

  // getters, setters
  get state() { return this._state; }
  get width() { return this._width; }
  get length() { return this._length; }

  makeBlank2dArray(width, length) {
    let arr = new Array(length);

    for(let i = 0; i < length; i++) {
      arr[i] = new Array(width);
    }

    return arr;
  }

  generateMap() {
    let arr = this.makeBlank2dArray(this._width, this._length);

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        if (!i || !j || i + 1 == arr.length || j + 1 == arr[i].length) {
          arr[i][j] = "#";
        } else {
          arr[i][j] = ".";
        }
      }
    }

    return arr;
  }

  draw(display) {
    for (var i = 0; i < this._width; i++) {
      for (var j = 0; j < this._length; j++) {
        display.draw(i, j, this._state[i][j], "gray");
        //display.draw(i, j, ".", "#666");
      }
    }
  }

}