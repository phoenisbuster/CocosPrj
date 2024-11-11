System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, Node, Tween, tween, Vec3, CCFloat, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Bird;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Input = _cc.Input;
      input = _cc.input;
      Node = _cc.Node;
      Tween = _cc.Tween;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      CCFloat = _cc.CCFloat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18f52EPzKFFo4gFROYa3OUU", "Bird", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Input', 'input', 'Node', 'Tween', 'tween', 'Vec3']);

      __checkObsolete__(['CCFloat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bird", Bird = (_dec = ccclass('Bird'), _dec2 = property(CCFloat), _dec3 = property(CCFloat), _dec4 = property(CCFloat), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = class Bird extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gravity", _descriptor, this);

          // Lực rơi xuống của bird
          _initializerDefineProperty(this, "flyForce", _descriptor2, this);

          // Lực bay lên khi touch vào màn hình
          _initializerDefineProperty(this, "maxRotation", _descriptor3, this);

          // Góc xoay tối đa khi rơi xuống
          _initializerDefineProperty(this, "touchRange", _descriptor4, this);

          this.velocity = 0;
          // Vận tốc của bird
          this.isPlayDownTween = false;
          // Kiểm tra trạng thái touch
          this.groundCollision = void 0;
          this.isStartGame = false;
          this.onGameOver = null;
        }

        RestartBird(_groundCollision) {
          this.touchRange.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.touchRange.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.position = new Vec3(0, 0, 0);
          this.groundCollision = _groundCollision;
        }

        onTouchEnd(event) {}

        onTouchStart(event) {
          const target = event.target;
          this.Jump();
        }

        SetStartSignal(value, _onGameOver) {
          this.isStartGame = value;
          this.onGameOver = _onGameOver;
        }

        Jump() {
          // Khi người chơi chạm vào màn hình, set vận tốc lên giá trị của flyForce
          this.velocity = this.flyForce;
          this.isPlayDownTween = false;
          Tween.stopAllByTarget(this.node);
          tween(this.node).to(0.1, {
            angle: 25
          }, {
            easing: 'linear'
          }).start();
        }

        update(deltaTime) {
          if (!this.isStartGame) return; // Cập nhật vận tốc theo trọng lực

          this.velocity += this.gravity * deltaTime; // Cập nhật vị trí bird theo vận tốc

          let newPosition = this.node.position;
          newPosition.y += this.velocity * deltaTime;
          this.node.setPosition(newPosition); // Xử lý xoay bird theo chiều rơi và bay

          if (this.velocity < 0) {
            if (!this.isPlayDownTween) {
              Tween.stopAllByTarget(this.node);
              tween(this.node).to(1.5, {
                angle: -75
              }, {
                easing: 'linear'
              }).start();
              this.isPlayDownTween = true;
            }
          }

          if (this.node.position.y < -this.groundCollision) this.onGameOver && this.onGameOver();
        }

        onDestroy() {
          // Hủy sự kiện touch khi node bị hủy
          this.node.scene.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gravity", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "flyForce", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 15;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxRotation", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -45;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "touchRange", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44d4da9ca316d8206b58074ada48e3dd33e45045.js.map