class Pawn {

  constructor(name, posX, posY) {
    this._name = name;
    this._posX = posX;
    this._posY = posY;
  }

  get posX() { return this._posX; }
  get posY() { return this._posY; }

  set posX(x) { this._posX = x; }
  set posY(y) { this._posY = y; }

  draw(display) {
    display.draw(this._posX, this._posY, "@", "goldenrod");
  }

}