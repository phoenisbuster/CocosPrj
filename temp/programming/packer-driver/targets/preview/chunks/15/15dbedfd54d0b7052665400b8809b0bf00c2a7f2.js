System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, bridge, LoadRewardedAdACK, LoadRewardedAdREQ, OnUserEarnedRewardListenerNTF, RewardedAdLoadCallbackNTF, RewardedFullScreenContentCallbackNTF, ShowRewardedAdACK, ShowRewardedAdREQ, AdClient, route, RewardedPaidEventNTF, js, RewardedAdClient, module;

  _export("RewardedAdClient", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
      js = _cc.js;
    }, function (_unresolved_) {
      bridge = _unresolved_.bridge;
    }, function (_unresolved_2) {
      LoadRewardedAdACK = _unresolved_2.LoadRewardedAdACK;
      LoadRewardedAdREQ = _unresolved_2.LoadRewardedAdREQ;
      OnUserEarnedRewardListenerNTF = _unresolved_2.OnUserEarnedRewardListenerNTF;
      RewardedAdLoadCallbackNTF = _unresolved_2.RewardedAdLoadCallbackNTF;
      RewardedFullScreenContentCallbackNTF = _unresolved_2.RewardedFullScreenContentCallbackNTF;
      ShowRewardedAdACK = _unresolved_2.ShowRewardedAdACK;
      ShowRewardedAdREQ = _unresolved_2.ShowRewardedAdREQ;
    }, function (_unresolved_3) {
      AdClient = _unresolved_3.AdClient;
    }, function (_unresolved_4) {
      route = _unresolved_4.route;
    }, function (_unresolved_5) {
      RewardedPaidEventNTF = _unresolved_5.RewardedPaidEventNTF;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "9c823kMEqhG354V3pAi+6bv", "RewardedAdClient", undefined);
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
       * 激励广告 Rewarded Ad 客户端
       * @en
       * The rewarded ad client
       */
      __checkObsolete__(['js']);

      module = "[RewardedAdClient]";

      _export("RewardedAdClient", RewardedAdClient = class RewardedAdClient extends AdClient {
        constructor() {
          super(...arguments);

          /**
           * @zh
           * 激励广告监听器的联合类型
           * @en
           * Union of listeners for rewarded ad.
           */
          this._rewardedListener = void 0;
        }

        /**
         * @zh
         * 激励广告监听器的联合类型
         * @en
         * Union of listeners for rewarded ad.
         */
        set rewardedListener(value) {
          if (this._rewardedListener) {
            route.off(js.getClassName(RewardedAdLoadCallbackNTF), this.onRewardedAdLoadCallbackNTF, this);
            route.off(js.getClassName(RewardedFullScreenContentCallbackNTF), this.onFullScreenContentCallback, this);
            route.off(js.getClassName(OnUserEarnedRewardListenerNTF), this.onOnUserEarnedRewardListenerNTF, this);
            route.off(js.getClassName(RewardedPaidEventNTF), this.onPaidEvent, this);
          }

          this._rewardedListener = value;

          if (this._rewardedListener) {
            route.on(js.getClassName(RewardedAdLoadCallbackNTF), this.onRewardedAdLoadCallbackNTF, this);
            route.on(js.getClassName(RewardedFullScreenContentCallbackNTF), this.onFullScreenContentCallback, this);
            route.on(js.getClassName(OnUserEarnedRewardListenerNTF), this.onOnUserEarnedRewardListenerNTF, this);
            route.on(js.getClassName(RewardedPaidEventNTF), this.onPaidEvent, this);
          }
        }
        /**
         * @zh
         * 激励广告监听器的联合类型
         * @en
         * Union of listeners for rewarded ad.
         */


        get rewardedListener() {
          return this._rewardedListener;
        }
        /**
         * @zh
         * 加载记录广告
         * @en
         * Load the rewarded ad
         * @param unitId 
         *  @zh 单元 Id
         *  @en the unit id
         * @param rewardedListener 
         *  @zh 监听器
         *  @en The rewarded ad listener
         */


        load(unitId, rewardedListener) {
          log(module, "load, unitId = " + unitId);
          this.unitId = unitId;
          this.rewardedListener = rewardedListener;
          bridge.sendToNative(js.getClassName(LoadRewardedAdREQ), {
            unitId: unitId
          }, js.getClassName(LoadRewardedAdACK), ack => {
            log(module, "LoadRewardedAdACK, " + ack);
          }, this);
        }
        /**
         * @zh
         * 销毁事件监听
         * @en
         * Deregister ad listener
         */


        destroy() {
          log(module, "destroy");
          this.rewardedListener = null;
        }
        /**
         * @zh
         * 展示激励广告
         * @en
         * Show the rewarded ad.
         */


        show() {
          log(module, "show");
          bridge.sendToNative(js.getClassName(ShowRewardedAdREQ), {
            unitId: this.unitId
          }, js.getClassName(ShowRewardedAdACK), ack => {
            log(module, "ShowRewardedAdREQ, " + ack);
          }, this);
        }

        onRewardedAdLoadCallbackNTF(ntf) {
          log(module, "onRewardedAdLoadCallbackNTF");

          if (this.rewardedListener) {
            var method = this.rewardedListener[ntf.method];

            if (method) {
              method();
            }
          }
        }

        onFullScreenContentCallback(ntf) {
          log(module, "onFullScreenContentCallback");

          if (this.rewardedListener) {
            var method = this.rewardedListener[ntf.method];

            if (method) {
              method(ntf.adError);
            }
          }
        }

        onOnUserEarnedRewardListenerNTF(ntf) {
          log(module, "onOnUserEarnedRewardListenerNTF");

          if (this.rewardedListener) {
            var onUserEarnedRewardListener = this.rewardedListener;

            if (onUserEarnedRewardListener && onUserEarnedRewardListener.onEarn) {
              onUserEarnedRewardListener.onEarn(ntf.rewardType, ntf.rewardAmount);
            }
          }
        }

        onPaidEvent(ntf) {
          var paid = this.rewardedListener;

          if (paid && paid.onPaidEvent) {
            paid.onPaidEvent(ntf);
          }
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=15dbedfd54d0b7052665400b8809b0bf00c2a7f2.js.map