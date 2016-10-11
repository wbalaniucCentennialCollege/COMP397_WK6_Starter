var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject(imageString, deathAnimString) {
            _super.call(this, shipAtlas, imageString);
            this._deathAnim = deathAnimString;
            this._initialize(imageString);
            this.start();
        }
        Object.defineProperty(GameObject.prototype, "width", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._width;
            },
            set: function (w) {
                this._width = w;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (h) {
                this._height = h;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (s) {
                this._name = s;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (p) {
                this._position = p;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "tr_corner", {
            get: function () {
                return new objects.Vector2(this.x + this.width * 0.5, this.y - this.height * 0.5);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "tl_corner", {
            get: function () {
                return new objects.Vector2(this.x - this.width * 0.5, this.y - this.height * 0.5);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "br_corner", {
            get: function () {
                return new objects.Vector2(this.x + this.width * 0.5, this.y + this.height * 0.5);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "bl_corner", {
            get: function () {
                return new objects.Vector2(this.x - this.width * 0.5, this.y + this.height * 0.5);
            },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype._initialize = function (imageString) {
            this.name = imageString;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width / 2;
            this.regY = this.height / 2;
            this.position = new objects.Vector2(this.x, this.y);
        };
        GameObject.prototype.start = function () { };
        GameObject.prototype.update = function () {
            this.x = this.position.x;
            this.y = this.position.y;
            if (this.currentAnimationFrame == shipAtlas.getNumFrames("explode") - 1) {
                currentScene.removeChild(this);
            }
        };
        GameObject.prototype.destroy = function () {
            this.gotoAndPlay(this._deathAnim);
            // currentScene.removeChild(this);
        };
        return GameObject;
    }(createjs.Sprite));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map