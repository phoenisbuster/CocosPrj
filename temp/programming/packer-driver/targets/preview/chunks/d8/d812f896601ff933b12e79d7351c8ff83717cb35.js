System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, AdClient, LoadRewardedInterstitialAdACK, LoadRewardedInterstitialAdREQ, OnUserEarnedRewardedInterstitialListenerNTF, RewardedInterstitialAdLoadCallbackNTF, ShowRewardedInterstitialAdACK, ShowRewardedInterstitialAdREQ, bridge, route, RewardedInterstitialPaidEventNTF, js, RewardedInterstitialAdClient, module;

  _export("RewardedInterstitialAdClient", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
      js = _cc.js;
    }, function (_unresolved_) {
      AdClient = _unresolved_.AdClient;
    }, function (_unresolved_2) {
      LoadRewardedInterstitialAdACK = _unresolved_2.LoadRewardedInterstitialAdACK;
      LoadRewardedInterstitialAdREQ = _unresolved_2.LoadRewardedInterstitialAdREQ;
      OnUserEarnedRewardedInterstitialListenerNTF = _unresolved_2.OnUserEarnedRewardedInterstitialListenerNTF;
      RewardedInterstitialAdLoadCallbackNTF = _unresolved_2.RewardedInterstitialAdLoadCallbackNTF;
      ShowRewardedInterstitialAdACK = _unresolved_2.ShowRewardedInterstitialAdACK;
      ShowRewardedInterstitialAdREQ = _unresolved_2.ShowRewardedInterstitialAdREQ;
    }, function (_unresolved_3) {
      bridge = _unresolved_3.bridge;
    }, function (_unresolved_4) {
      route = _unresolved_4.route;
    }, function (_unresolved_5) {
      RewardedInterstitialPaidEventNTF = _unresolved_5.RewardedInterstitialPaidEventNTF;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "bcd464DuS9EHZFqL+Wv7Zc9", "RewardedInterstitialAdClient", undefined);
      /*
       Copyright (c) 2023-2024 Xiamen Yaji Software Co., Ltd.
      
       https://www.cocos.com/
      
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated documentation files (the "Software"), to deal
       in the Software without restriction, including without limitation the rights to
       use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
       of the Software, and to permit persons to whom the Software is furnished to do so,
       subject to the following conditions:
      
       The above copyright notice and this permission notice shall be included in
       all copies or substantial portions of the Software.
      
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */


      __checkObsolete__(['log']);

      /**
       * @zh
       * 插页式激励广告的广告客户端
       * https://developers.google.com/admob/android/rewarded-interstitial?hl=zh-cn
       * 
       * @en
       * The RewardedInterstitial Ad Client
       */
      __checkObsolete__(['js']);

      module = "[RewardedInterstitialAdClient]";

      _export("RewardedInterstitialAdClient", RewardedInterstitialAdClient = class RewardedInterstitialAdClient extends AdClient {
        constructor() {
          super(...arguments);

          /**
           * @zh
           * 监听器的联合
           * @en
           * The union of all listeners
           */
          this._rewardedInterstitialListener = void 0;
        }

        /**
         * @zh
         * 监听器的联合
         * @en
         * The union of all listeners
         */
        set rewardedInterstitialListener(value) {
          if (this._rewardedInterstitialListener) {
            route.off(js.getClassName(RewardedInterstitialAdLoadCallbackNTF), this.onRewardedInterstitialAdLoadCallbackNTF, this);
            route.off(js.getClassName(OnUserEarnedRewardedInterstitialListenerNTF), this.onOnUserEarnedRewardListenerNTF, this);
            route.off(js.getClassName(RewardedInterstitialPaidEventNTF), this.onPaidEvent, this);
          }

          this._rewardedInterstitialListener = value;

          if (this._rewardedInterstitialListener) {
            route.on(js.getClassName(RewardedInterstitialAdLoadCallbackNTF), this.onRewardedInterstitialAdLoadCallbackNTF, this);
            route.on(js.getClassName(OnUserEarnedRewardedInterstitialListenerNTF), this.onOnUserEarnedRewardListenerNTF, this);
            route.on(js.getClassName(RewardedInterstitialPaidEventNTF), this.onPaidEvent, this);
          }
        }
        /**
         * @zh
         * 监听器的联合
         * @en
         * The union of all listeners
         */


        get rewardedInterstitialListener() {
          return this._rewardedInterstitialListener;
        }
        /**
         * @zh
         * 加载 
         * @param unitId 
         * @param listener 
         */


        load(unitId, listener) {
          this.destroy();
          this.unitId = unitId;
          this.rewardedInterstitialListener = listener;
          bridge.sendToNative(js.getClassName(LoadRewardedInterstitialAdREQ), {
            unitId: unitId
          }, js.getClassName(LoadRewardedInterstitialAdACK), ack => {}, this);
        }
        /**
         * @zh
         * 销毁插页式激励广告注册的事件
         * @en
         * Deregister all registered event listeners
         */


        destroy() {
          this.rewardedInterstitialListener = null;
        }
        /**
         * @zh
         * 展示已加载插页式激励广告
         * @en
         * Show the loaded RewardedInterstitial Ad.
         */


        show() {
          bridge.sendToNative(js.getClassName(ShowRewardedInterstitialAdREQ), {
            unitId: this.unitId
          }, js.getClassName(ShowRewardedInterstitialAdACK), ack => {}, this);
        }

        onRewardedInterstitialAdLoadCallbackNTF(ntf) {
          log(module, "onRewardedInterstitialAdLoadCallbackNTF", ntf.method);
          var method = this.rewardedInterstitialListener[ntf.method];

          if (method) {
            method(ntf.loadAdError);
          }
        }

        onOnUserEarnedRewardListenerNTF(ntf) {
          log(module, "onOnUserEarnedRewardListenerNTF");

          if (this.rewardedInterstitialListener) {
            var onEarn = this.rewardedInterstitialListener;

            if (onEarn && onEarn.onEarn) {
              onEarn.onEarn(ntf.rewardType, ntf.rewardAmount);
            }
          }
        }

        onPaidEvent(ntf) {
          var paid = this.rewardedInterstitialListener;

          if (paid && paid.onPaidEvent) {
            paid.onPaidEvent(ntf);
          }
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=d812f896601ff933b12e79d7351c8ff83717cb35.js.map