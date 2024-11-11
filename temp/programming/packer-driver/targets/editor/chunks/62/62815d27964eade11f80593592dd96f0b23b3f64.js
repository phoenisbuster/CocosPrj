System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Label, Node, CCFloat, UITransform, Vec3, Bird, PipeSpawnControl, GroundController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _class3, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBird(extras) {
    _reporterNs.report("Bird", "./Bird", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPipeSpawnControl(extras) {
    _reporterNs.report("PipeSpawnControl", "./PipeSpawnControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroundController(extras) {
    _reporterNs.report("GroundController", "./GroundController", _context.meta, extras);
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
      director = _cc.director;
      Label = _cc.Label;
      Node = _cc.Node;
      CCFloat = _cc.CCFloat;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Bird = _unresolved_2.Bird;
    }, function (_unresolved_3) {
      PipeSpawnControl = _unresolved_3.PipeSpawnControl;
    }, function (_unresolved_4) {
      GroundController = _unresolved_4.GroundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52ee6ZvodxChLRFShU3+J53", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Canvas', 'Component', 'director', 'Label', 'Node', 'CCFloat', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property({
        type: _crd && Bird === void 0 ? (_reportPossibleCrUseOfBird({
          error: Error()
        }), Bird) : Bird
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: _crd && GroundController === void 0 ? (_reportPossibleCrUseOfGroundController({
          error: Error()
        }), GroundController) : GroundController
      }), _dec5 = property({
        type: _crd && PipeSpawnControl === void 0 ? (_reportPossibleCrUseOfPipeSpawnControl({
          error: Error()
        }), PipeSpawnControl) : PipeSpawnControl
      }), _dec6 = property({
        type: _crd && PipeSpawnControl === void 0 ? (_reportPossibleCrUseOfPipeSpawnControl({
          error: Error()
        }), PipeSpawnControl) : PipeSpawnControl
      }), _dec7 = property({
        type: _crd && PipeSpawnControl === void 0 ? (_reportPossibleCrUseOfPipeSpawnControl({
          error: Error()
        }), PipeSpawnControl) : PipeSpawnControl
      }), _dec8 = property(CCFloat), _dec9 = property(CCFloat), _dec10 = property(CCFloat), _dec11 = property({
        type: Label
      }), _dec12 = property({
        type: Label
      }), _dec13 = property({
        type: Node
      }), _dec14 = property({
        type: Node
      }), _dec15 = property({
        type: Node
      }), _dec(_class = (_class2 = (_class3 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bird", _descriptor, this);

          _initializerDefineProperty(this, "canvas", _descriptor2, this);

          _initializerDefineProperty(this, "groundController", _descriptor3, this);

          _initializerDefineProperty(this, "ground1", _descriptor4, this);

          _initializerDefineProperty(this, "ground2", _descriptor5, this);

          _initializerDefineProperty(this, "ground3", _descriptor6, this);

          _initializerDefineProperty(this, "timeCountStartGame", _descriptor7, this);

          _initializerDefineProperty(this, "screenHeight", _descriptor8, this);

          _initializerDefineProperty(this, "screenWidth", _descriptor9, this);

          _initializerDefineProperty(this, "overScoreLabel", _descriptor10, this);

          _initializerDefineProperty(this, "inGameScoreLabel", _descriptor11, this);

          _initializerDefineProperty(this, "gameOverPopup", _descriptor12, this);

          _initializerDefineProperty(this, "inGamePopup", _descriptor13, this);

          _initializerDefineProperty(this, "startGamePopup", _descriptor14, this);

          this.currentScore = void 0;
        }

        static Instance() {
          if (GameController.instance == null) GameController.instance = new GameController();
          return GameController.instance;
        }

        onLoad() {
          if (GameController.instance != null && GameController.instance != this) {
            this.destroy(); // Nếu đã có instance, hủy node mới

            return;
          }

          GameController.instance = this;
          this.screenHeight = this.canvas.getComponent(UITransform).height;
          this.screenWidth = this.canvas.getComponent(UITransform).width;
          this.groundController.node.position = new Vec3(0, -(GameController.Instance().screenHeight / 2), 0);
          this.groundController.node.position = new Vec3(-(GameController.Instance().screenWidth / 2), 0, 0);
        }

        GameOver() {
          this.bird.SetStartSignal(false, null);
          director.pause();
          this.gameOverPopup.active = true;
          this.overScoreLabel.string = this.currentScore.toString();
          this.inGamePopup.active = false;
        }

        RestartGame() {
          if (!this.gameOverPopup.active) return;
          director.resume();
          this.inGamePopup.active = true;
          this.groundController.RestartGround(true);
          this.ground1.RestartPipe();
          this.ground2.RestartPipe();
          this.ground3.RestartPipe();
          this.bird.SetStartSignal(true, this.GameOver.bind(this));
          this.bird.RestartBird(this.getGroundCollision());
          this.currentScore = 0;
          this.inGameScoreLabel.string = this.currentScore.toString();
          this.gameOverPopup.active = false;
        }

        StartGame() {
          this.startGamePopup.active = false;
          this.inGamePopup.active = true;
          this.gameOverPopup.active = false;
          this.groundController.RestartGround(true);
          this.ground1.RestartPipe();
          this.ground2.RestartPipe();
          this.ground3.RestartPipe();
          this.bird.SetStartSignal(true, this.GameOver.bind(this));
          this.bird.RestartBird(this.getGroundCollision());
          this.currentScore = 0;
          this.inGameScoreLabel.string = this.currentScore.toString();
          this.gameOverPopup.active = false;
        }

        getGroundCollision() {
          const canvasUITransform = this.canvas.getComponent(UITransform);
          const groundUITransform = this.ground1.getComponent(UITransform);
          const birdUiTransform = this.bird.getComponent(UITransform);
          return canvasUITransform.height / 2 - groundUITransform.height - birdUiTransform.height / 2;
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bird", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "groundController", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ground1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ground2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ground3", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "timeCountStartGame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "screenHeight", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "screenWidth", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "overScoreLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "inGameScoreLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "gameOverPopup", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "inGamePopup", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "startGamePopup", [_dec15], {
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
//# sourceMappingURL=62815d27964eade11f80593592dd96f0b23b3f64.js.map