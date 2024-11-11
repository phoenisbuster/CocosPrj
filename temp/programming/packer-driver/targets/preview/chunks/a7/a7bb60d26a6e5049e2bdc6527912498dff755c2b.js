System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, Vec3, Enum, CCFloat, GameController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, EEndground, GroundController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      Enum = _cc.Enum;
      CCFloat = _cc.CCFloat;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.GameController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39a56wMHWJHubY07BooGYPn", "GroundController", undefined);

      __checkObsolete__(['_decorator', 'Canvas', 'Component', 'Node', 'UITransform', 'Vec3', 'Enum', 'CCFloat']);

      // import { GameController } from './GameController';
      ({
        ccclass,
        property
      } = _decorator);

      EEndground = /*#__PURE__*/function (EEndground) {
        EEndground[EEndground["none"] = 0] = "none";
        EEndground[EEndground["ground1"] = 1] = "ground1";
        EEndground[EEndground["ground2"] = 2] = "ground2";
        EEndground[EEndground["ground3"] = 3] = "ground3";
        return EEndground;
      }(EEndground || {});

      _export("GroundController", GroundController = (_dec = ccclass('GroundController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: CCFloat
      }), _dec6 = property(CCFloat), _dec7 = property(CCFloat), _dec8 = property(CCFloat), _dec9 = property({
        type: Enum(EEndground)
      }), _dec10 = property({
        type: Enum(EEndground)
      }), _dec(_class = (_class2 = class GroundController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Ground1", _descriptor, this);

          _initializerDefineProperty(this, "Ground2", _descriptor2, this);

          _initializerDefineProperty(this, "Ground3", _descriptor3, this);

          _initializerDefineProperty(this, "groundSpeed", _descriptor4, this);

          this.currentEndGround = void 0;
          this.groundWidth = void 0;
          this.ground1Vec = void 0;
          this.ground2Vec = void 0;
          this.ground3Vec = void 0;

          /// bottom pipe = chiều cao màn hình / 2 sau đó "trừ" chiều cao của bottom height sau đó "trừ" (chiều cao của bird / 2) ====> là khoảng gới hạn dưới mà bird có thể bay ==> ví dụ giưới hạn là -45 thì khi bird > -45 sẽ là va chạm.
          /// top pipe tương tự như vậy nhưng là số dương
          _initializerDefineProperty(this, "positionDetectCollision", _descriptor5, this);

          _initializerDefineProperty(this, "positionEndDetectCollision", _descriptor6, this);

          _initializerDefineProperty(this, "currentTimeCount", _descriptor7, this);

          _initializerDefineProperty(this, "lastGroundSccoreCheck", _descriptor8, this);

          _initializerDefineProperty(this, "currentGroundSccoreCheck", _descriptor9, this);

          this.isStartGame = false;
        }

        start() {
          this.RestartGround(false);
        }

        RestartGround(value) {
          this.groundWidth = this.Ground1.getComponent(UITransform).width;
          this.ground1Vec = new Vec3(0, -((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().screenHeight / 2), 0);
          this.ground2Vec = new Vec3(this.groundWidth, -((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().screenHeight / 2), 0);
          this.ground3Vec = new Vec3(this.groundWidth * 2, -((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().screenHeight / 2), 0);
          this.currentEndGround = EEndground.ground3;
          this.positionDetectCollision = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().canvas.getComponent(UITransform).width / 2 - this.groundWidth / 2 + (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().bird.getComponent(UITransform).width;
          this.positionEndDetectCollision = this.positionDetectCollision - ((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().bird.getComponent(UITransform).width * 2 - 20);
          this.GroundPositionChanges();
          this.currentTimeCount = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().timeCountStartGame;
          this.isStartGame = value;
        }

        update(deltaTime) {
          if (!this.isStartGame) return;
          this.RunGround(deltaTime);

          if (this.currentTimeCount >= 0) {
            this.currentTimeCount -= deltaTime;
          } else {
            this.CheckBirdCollisionWidthPipe();
          }

          this.CheckScore();
          this.CheckGroundReturn();
          this.GroundPositionChanges();
        }

        CheckScore() {
          if (this.ground1Vec.x < this.positionDetectCollision - (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().bird.getComponent(UITransform).width && this.ground1Vec.x > 0 && this.currentGroundSccoreCheck != EEndground.ground1) {
            if (!(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground1.topPipe.active) return;
            this.currentGroundSccoreCheck = EEndground.ground1;
            this.PlusSocre();
          }

          if (this.ground2Vec.x < this.positionDetectCollision - (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().bird.getComponent(UITransform).width && this.ground2Vec.x > 0 && this.currentGroundSccoreCheck != EEndground.ground2) {
            if (!(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground2.topPipe.active) return;
            this.currentGroundSccoreCheck = EEndground.ground2;
            this.PlusSocre();
          }

          if (this.ground3Vec.x < this.positionDetectCollision - (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().bird.getComponent(UITransform).width && this.ground3Vec.x > 0 && this.currentGroundSccoreCheck != EEndground.ground3) {
            if (!(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground3.topPipe.active) return;
            this.currentGroundSccoreCheck = EEndground.ground3;
            this.PlusSocre();
          }
        }

        CheckBirdCollisionWidthPipe() {
          if (this.ground1Vec.x < this.positionDetectCollision && this.ground1Vec.x > this.positionEndDetectCollision) {
            if (!(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground1.topPipe.active) return;
            var currentBirdPosition = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().bird.node.position;
            if (currentBirdPosition.y > (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground1.topPipeCollision || currentBirdPosition.y < (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground1.bottomPipeCollision) (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().GameOver();
          }

          if (this.ground2Vec.x < this.positionDetectCollision && this.ground2Vec.x > this.positionEndDetectCollision) {
            if (!(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground2.topPipe.active) return;
            var _currentBirdPosition = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().bird.node.position;
            if (_currentBirdPosition.y > (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground2.topPipeCollision || _currentBirdPosition.y < (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground2.bottomPipeCollision) (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().GameOver();
          }

          if (this.ground3Vec.x < this.positionDetectCollision && this.ground3Vec.x > this.positionEndDetectCollision) {
            if (!(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground3.topPipe.active) return;
            var _currentBirdPosition2 = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().bird.node.position;
            if (_currentBirdPosition2.y > (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground3.topPipeCollision || _currentBirdPosition2.y < (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground3.bottomPipeCollision) (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().GameOver();
          }
        }

        PlusSocre() {
          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().currentScore += 1;
          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().inGameScoreLabel.string = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().currentScore.toString();
        }

        RunGround(deltaTime) {
          this.ground1Vec.x -= deltaTime * this.groundSpeed;
          this.ground2Vec.x -= deltaTime * this.groundSpeed;
          this.ground3Vec.x -= deltaTime * this.groundSpeed;
        }

        GroundPositionChanges() {
          this.Ground1.setPosition(this.ground1Vec);
          this.Ground2.setPosition(this.ground2Vec);
          this.Ground3.setPosition(this.ground3Vec);
        }

        CheckGroundReturn() {
          var getVec = this.GetEndGround();

          if (this.ground1Vec.x < -(0 + this.groundWidth)) {
            this.ground1Vec.x = getVec.x + this.groundWidth;
            this.currentEndGround = EEndground.ground1;
            (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground1.ReSpawnPipe();
          }

          if (this.ground2Vec.x < -(0 + this.groundWidth)) {
            this.ground2Vec.x = getVec.x + this.groundWidth;
            this.currentEndGround = EEndground.ground2;
            (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground2.ReSpawnPipe();
          }

          if (this.ground3Vec.x < -(0 + this.groundWidth)) {
            this.ground3Vec.x = getVec.x + this.groundWidth;
            this.currentEndGround = EEndground.ground3;
            (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).Instance().ground3.ReSpawnPipe();
          }
        }

        GetEndGround() {
          switch (this.currentEndGround) {
            case EEndground.ground1:
              return this.ground1Vec;

            case EEndground.ground2:
              return this.ground2Vec;

            case EEndground.ground3:
              return this.ground3Vec;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Ground1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Ground2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Ground3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "groundSpeed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "positionDetectCollision", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "positionEndDetectCollision", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "currentTimeCount", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lastGroundSccoreCheck", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EEndground.none;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "currentGroundSccoreCheck", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EEndground.none;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7bb60d26a6e5049e2bdc6527912498dff755c2b.js.map