System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AdsData, director, RewardedAdClient, BannerSize, BannerClient, log, warn, error, BannerSizeType, BottomCenter, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, MyAdmod;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAdsData(extras) {
    _reporterNs.report("AdsData", "./AdsData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInterstitialAdClient(extras) {
    _reporterNs.report("InterstitialAdClient", "db://admob/ads/client/InterstitialAdClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardedAdClient(extras) {
    _reporterNs.report("RewardedAdClient", "db://admob/ads/client/RewardedAdClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBannerSize(extras) {
    _reporterNs.report("BannerSize", "db://admob/misc/BannerSize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBannerClient(extras) {
    _reporterNs.report("BannerClient", "db://admob/ads/client/BannerClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdError(extras) {
    _reporterNs.report("AdError", "db://admob/ads/alias/TypeAlias", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBannerSizeType(extras) {
    _reporterNs.report("BannerSizeType", "db://admob/misc/BannerSizeType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBottomCenter(extras) {
    _reporterNs.report("BottomCenter", "db://admob/misc/BannerAlignment", _context.meta, extras);
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
      log = _cc.log;
      warn = _cc.warn;
      error = _cc.error;
    }, function (_unresolved_2) {
      AdsData = _unresolved_2.AdsData;
    }, function (_unresolved_3) {
      RewardedAdClient = _unresolved_3.RewardedAdClient;
    }, function (_unresolved_4) {
      BannerSize = _unresolved_4.BannerSize;
    }, function (_unresolved_5) {
      BannerClient = _unresolved_5.BannerClient;
    }, function (_unresolved_6) {
      BannerSizeType = _unresolved_6.BannerSizeType;
    }, function (_unresolved_7) {
      BottomCenter = _unresolved_7.BottomCenter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e7f0QnRt5DnqFJblt77MwU", "MyAdmod", undefined);

      __checkObsolete__(['_decorator', 'CCString', 'Component', 'Node']);

      __checkObsolete__(['director']);

      __checkObsolete__(['log', 'warn', 'error']);

      __checkObsolete__(['native']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MyAdmod", MyAdmod = (_dec = ccclass('MyAdmod'), _dec2 = property({
        type: _crd && AdsData === void 0 ? (_reportPossibleCrUseOfAdsData({
          error: Error()
        }), AdsData) : AdsData
      }), _dec(_class = (_class2 = (_class3 = class MyAdmod extends Component {
        constructor() {
          super(...arguments);
          this.interstitialAd = void 0;
          this.rewardedAd = void 0;
          this.bannerView = void 0;

          _initializerDefineProperty(this, "adsData", _descriptor, this);
        }

        onLoad() {
          var _this$adsData;

          if (MyAdmod.instance != null && MyAdmod.instance != this) {
            this.destroy();
            return;
          }

          if (!director.isPersistRootNode(this.node)) director.addPersistRootNode(this.node);
          MyAdmod.instance = this;
          (_this$adsData = this.adsData) == null ? void 0 : _this$adsData.parseJson();
          log("MyAdmob: onLoad", this.adsData._appId, this.adsData._adUnitId_Rewarded, this.adsData._adUnitId_Banner);
        }

        start() {
          this.initializeAdsComplete();
        }

        onEnable() {}

        onDisable() {}

        initializeAdsComplete(initStatus) {
          if (initStatus === void 0) {
            initStatus = "";
          }

          warn("MyAdmob: initStatus = \"" + initStatus + "\" ");
          this.rewardedAd = new (_crd && RewardedAdClient === void 0 ? (_reportPossibleCrUseOfRewardedAdClient({
            error: Error()
          }), RewardedAdClient) : RewardedAdClient)();
          this.bannerView = new (_crd && BannerClient === void 0 ? (_reportPossibleCrUseOfBannerClient({
            error: Error()
          }), BannerClient) : BannerClient)();
          this.loadRewardedAd();
        } //=================================================== RewardAd ===================================================//

        /*
            Load RewardedAd
        */


        loadRewardedAd() {
          if (this.rewardedAd == null) {
            this.rewardedAd = new (_crd && RewardedAdClient === void 0 ? (_reportPossibleCrUseOfRewardedAdClient({
              error: Error()
            }), RewardedAdClient) : RewardedAdClient)();
          }

          var self = this;
          this.rewardedAd.load(this.adsData._adUnitId_Rewarded, {
            // Raised when the ad is estimated to have earned money.
            onEarn(rewardType, amount) {
              warn("MyAdmob: onEarn, rewardType = " + rewardType + ", amount = " + amount);
            },

            // Raised when an impression is recorded for an ad.
            onAdImpression() {
              log("MyAdmob: onAdImpression");
            },

            // Raised when a click is recorded for an ad.
            onAdClicked() {
              log("MyAdmob: onAdClicked");
            },

            // Raised when an ad opened full screen content.
            onAdShowedFullScreenContent() {
              log("MyAdmob: onAdShowedFullScreenContent");
              /*
                  Ads is fully opened
                  TODO: What your game should do when the ad is fully opened
                  Ex: Turn off sound, pause the game, ...
              */
            },

            // Raised when the ad closed full screen content.
            onAdDismissedFullScreenContent() {
              warn("MyAdmob: onAdDismissedFullScreenContent");
              /*
                  Ads is closed
                  TODO: What your game should do when the ad is closed
                  Ex: Turn on sound, resume the game, load new ads, ...
              */

              self.loadRewardedAd();
            },

            // Raised when the ad failed to open full screen content.
            onAdFailedToShowFullScreenContent(adError) {
              error("MyAdmob: onAdFailedToLoad = \"" + adError + "\" ");
              /*
                  Ads load failed
                  TODO: What your game should do when the ads load failed
                  Ex: Notify the user, load new ads, ...
              */

              self.loadRewardedAd();
            }

          });
        }
        /*
            Show RewardedAd
        */


        showRewardedAd() {
          if (this.rewardedAd == null) {
            this.rewardedAd = new (_crd && RewardedAdClient === void 0 ? (_reportPossibleCrUseOfRewardedAdClient({
              error: Error()
            }), RewardedAdClient) : RewardedAdClient)();
          }

          this.rewardedAd.show();
        }
        /*
            RewardedAd event listener
        */
        // Raised when the ad is estimated to have earned money.


        onEarn(rewardType, amount) {
          warn("MyAdmob: onEarn, rewardType = " + rewardType + ", amount = " + amount);
        } // Raised when an impression is recorded for an ad.


        onAdImpression() {
          log("MyAdmob: onAdImpression");
        } // Raised when a click is recorded for an ad.


        onAdClicked() {
          log("MyAdmob: onAdClicked");
        } // Raised when an ad opened full screen content.


        onAdShowedFullScreenContent() {
          log("MyAdmob: onAdShowedFullScreenContent");
          /*
              Ads is fully opened
              TODO: What your game should do when the ad is fully opened
              Ex: Turn off sound, pause the game, ...
          */
        } // Raised when the ad closed full screen content.


        onAdDismissedFullScreenContent() {
          warn("MyAdmob: onAdDismissedFullScreenContent");
          /*
              Ads is closed
              TODO: What your game should do when the ad is closed
              Ex: Turn on sound, resume the game, load new ads, ...
          */

          this.loadRewardedAd();
        } // Raised when the ad failed to open full screen content.


        onAdFailedToShowFullScreenContent(adError) {
          error("MyAdmob: onAdFailedToLoad = \"" + adError + "\" ");
          /*
              Ads load failed
              TODO: What your game should do when the ads load failed
              Ex: Notify the user, load new ads, ...
          */

          this.loadRewardedAd();
        } //=================================================== BannerAd ===================================================//

        /*
            Load BannerAd
        */


        loadBannerAd() {
          if (this.bannerView == null) {
            this.bannerView = new (_crd && BannerClient === void 0 ? (_reportPossibleCrUseOfBannerClient({
              error: Error()
            }), BannerClient) : BannerClient)();
          }

          var self = this;
          this.bannerView.load(this.adsData._adUnitId_Banner, {
            onAdLoaded() {
              self.bannerView.show(true);
            }

          }, {
            type: (_crd && BannerSizeType === void 0 ? (_reportPossibleCrUseOfBannerSizeType({
              error: Error()
            }), BannerSizeType) : BannerSizeType).Builtin,
            size: (_crd && BannerSize === void 0 ? (_reportPossibleCrUseOfBannerSize({
              error: Error()
            }), BannerSize) : BannerSize).BANNER,
            alignments: _crd && BottomCenter === void 0 ? (_reportPossibleCrUseOfBottomCenter({
              error: Error()
            }), BottomCenter) : BottomCenter
          });
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "adsData", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new (_crd && AdsData === void 0 ? (_reportPossibleCrUseOfAdsData({
            error: Error()
          }), AdsData) : AdsData)();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=83f25731834cf0c54c0fc5ddd568b04fc24e2979.js.map