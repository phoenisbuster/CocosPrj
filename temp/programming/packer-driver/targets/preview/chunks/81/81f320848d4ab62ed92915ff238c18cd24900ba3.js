System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, math, Node, UITransform, Vec3, GameController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, PipeSpawnControl;

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
      math = _cc.math;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.GameController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c363bwj/f5KN7GxzTdMUerH", "PipeSpawnControl", undefined);

      __checkObsolete__(['_decorator', 'Canvas', 'Component', 'director', 'math', 'Node', 'random', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PipeSpawnControl", PipeSpawnControl = (_dec = ccclass('PipeSpawnControl'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class PipeSpawnControl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "topPipe", _descriptor, this);

          _initializerDefineProperty(this, "bottomPipe", _descriptor2, this);

          _initializerDefineProperty(this, "screenHeight", _descriptor3, this);

          _initializerDefineProperty(this, "pipeHeightConfig", _descriptor4, this);

          _initializerDefineProperty(this, "horizonPositionConfig", _descriptor5, this);

          _initializerDefineProperty(this, "topPipeCollision", _descriptor6, this);

          _initializerDefineProperty(this, "bottomPipeCollision", _descriptor7, this);

          _initializerDefineProperty(this, "birdHeight", _descriptor8, this);
        }

        SetPipeSize() {
          var tempCount = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().canvas.getComponent(UITransform).height / 2 - (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().bird.getComponent(UITransform).height / 2;
          this.topPipe.getComponent(UITransform).height = this.pipeHeightConfig / 2 + math.randomRange(0, this.pipeHeightConfig / 2);
          this.topPipeCollision = tempCount - this.topPipe.getComponent(UITransform).height;
          this.bottomPipe.getComponent(UITransform).height = this.pipeHeightConfig / 2 + math.randomRange(0, this.pipeHeightConfig / 2);
          this.bottomPipeCollision = -(tempCount - this.bottomPipe.getComponent(UITransform).height);
        }

        SetPipePostion() {
          this.topPipe.setPosition(new Vec3(this.horizonPositionConfig, this.screenHeight, 0));
          this.bottomPipe.setPosition(new Vec3(this.horizonPositionConfig, 0, 0));
        }

        ReSpawnPipe() {
          if ((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().groundController.currentTimeCount <= 0) {
            this.topPipe.active = true;
            this.bottomPipe.active = true;
          }

          if (!this.topPipe.active || !this.bottomPipe) return;
          this.SetPipePostion();
          this.SetPipeSize();
        }

        RestartPipe() {
          this.topPipe.active = false;
          this.bottomPipe.active = false;
        }

        start() {
          this.screenHeight = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().canvas.getComponent(UITransform).height;
          this.birdHeight = (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).Instance().bird.getComponent(UITransform).height;
          this.pipeHeightConfig = this.screenHeight / 2 - this.birdHeight;
          this.horizonPositionConfig = this.node.getComponent(UITransform).width / 2;
          this.SetPipeSize();
          this.SetPipePostion();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "topPipe", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bottomPipe", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "screenHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pipeHeightConfig", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "horizonPositionConfig", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "topPipeCollision", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bottomPipeCollision", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "birdHeight", [property], {
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
//# sourceMappingURL=81f320848d4ab62ed92915ff238c18cd24900ba3.js.map