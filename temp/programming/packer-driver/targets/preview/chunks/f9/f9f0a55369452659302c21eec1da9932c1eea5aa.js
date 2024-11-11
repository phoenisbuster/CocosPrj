System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, _decorator, CCBoolean, CCString, Enum, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, AdsPlatform, AdsData;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      JsonAsset = _cc.JsonAsset;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCString = _cc.CCString;
      Enum = _cc.Enum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd159J2SlhN4Lj0aLSSvbxy", "AdsData", undefined);

      __checkObsolete__(['JsonAsset']);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCString', 'Component', 'Enum', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      AdsPlatform = /*#__PURE__*/function (AdsPlatform) {
        AdsPlatform[AdsPlatform["NONE"] = 0] = "NONE";
        AdsPlatform[AdsPlatform["ANDROID"] = 1] = "ANDROID";
        AdsPlatform[AdsPlatform["IOS"] = 2] = "IOS";
        return AdsPlatform;
      }(AdsPlatform || {});

      _export("AdsData", AdsData = (_dec = ccclass('AdsData'), _dec2 = property({
        type: CCBoolean,
        displayName: "Using Json Asset"
      }), _dec3 = property({
        type: JsonAsset,
        displayName: "Ads Data Json Format",
        visible: function visible() {
          return this.usingJson;
        }
      }), _dec4 = property({
        type: Enum(AdsPlatform),
        displayName: "Platform",
        visible: function visible() {
          return !this.usingJson;
        }
      }), _dec5 = property({
        type: CCString,
        displayName: "App ID",
        visible: function visible() {
          return !this.usingJson;
        }
      }), _dec6 = property({
        type: CCString,
        displayName: "Interstitial Ad Unit ID",
        visible: function visible() {
          return !this.usingJson;
        }
      }), _dec7 = property({
        type: CCString,
        displayName: "Rewarded Ad Unit ID",
        visible: function visible() {
          return !this.usingJson;
        }
      }), _dec8 = property({
        type: CCString,
        displayName: "Banner Ad Unit ID",
        visible: function visible() {
          return !this.usingJson;
        }
      }), _dec(_class = (_class2 = class AdsData {
        constructor() {
          _initializerDefineProperty(this, "usingJson", _descriptor, this);

          _initializerDefineProperty(this, "adsDataJson", _descriptor2, this);

          _initializerDefineProperty(this, "platform", _descriptor3, this);

          _initializerDefineProperty(this, "_appId", _descriptor4, this);

          _initializerDefineProperty(this, "_adUnitId_Interstitial", _descriptor5, this);

          _initializerDefineProperty(this, "_adUnitId_Rewarded", _descriptor6, this);

          _initializerDefineProperty(this, "_adUnitId_Banner", _descriptor7, this);

          this._data = null;
        }

        parseJson() {
          console.log("parseJson", this.adsDataJson.json);

          if (this.usingJson && this.adsDataJson) {
            this._data = this.adsDataJson.json;
            this._appId = this.adsDataJson.json.appId;
            this._adUnitId_Interstitial = this.adsDataJson.json.interstitialAdUnitId;
            this._adUnitId_Rewarded = this.adsDataJson.json.rewardedAdUnitId;
            this._adUnitId_Banner = this.adsDataJson.json.bannerAdUnitId;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "usingJson", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "adsDataJson", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "platform", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return AdsPlatform.NONE;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_appId", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_adUnitId_Interstitial", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_adUnitId_Rewarded", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_adUnitId_Banner", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9f0a55369452659302c21eec1da9932c1eea5aa.js.map