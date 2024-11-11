System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, bridge, route, AppOpenAdLoadCallbackNTF, AppOpenAdFullScreenContentCallbackNTF, ShowAppOpenAdCompleteNTF, LoadAppOpenAdREQ, LoadAppOpenAdACK, IsAdAvailableREQ, IsAdAvailableACK, ShowAppOpenAdREQ, ShowAppOpenAdACK, AdClient, AppOpenPaidEventNTF, js, AppOpenAdClient, module;

  _export("AppOpenAdClient", void 0);

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
      route = _unresolved_2.route;
    }, function (_unresolved_3) {
      AppOpenAdLoadCallbackNTF = _unresolved_3.AppOpenAdLoadCallbackNTF;
      AppOpenAdFullScreenContentCallbackNTF = _unresolved_3.AppOpenAdFullScreenContentCallbackNTF;
      ShowAppOpenAdCompleteNTF = _unresolved_3.ShowAppOpenAdCompleteNTF;
      LoadAppOpenAdREQ = _unresolved_3.LoadAppOpenAdREQ;
      LoadAppOpenAdACK = _unresolved_3.LoadAppOpenAdACK;
      IsAdAvailableREQ = _unresolved_3.IsAdAvailableREQ;
      IsAdAvailableACK = _unresolved_3.IsAdAvailableACK;
      ShowAppOpenAdREQ = _unresolved_3.ShowAppOpenAdREQ;
      ShowAppOpenAdACK = _unresolved_3.ShowAppOpenAdACK;
    }, function (_unresolved_4) {
      AdClient = _unresolved_4.AdClient;
    }, function (_unresolved_5) {
      AppOpenPaidEventNTF = _unresolved_5.AppOpenPaidEventNTF;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "de391JGZ7RFmILooPgf1Zbb", "AppOpenAdClient", undefined);
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
       * 开屏广告的 TS 端实现
       * @en
       * Implementing of app open ad.
       */
      __checkObsolete__(['js']);

      module = "[AppOpenAdClient]";

      _export("AppOpenAdClient", AppOpenAdClient = class AppOpenAdClient extends AdClient {
        constructor() {
          super(...arguments);

          /**
           * @zh
           * 开屏广告的事件接收器，多个类型的联合
           * @en
           * The listener of app open ad.
           */
          this._appOpenAdListener = void 0;
        }

        /**
         * @zh
         * 开屏广告的事件接收器，多个类型的联合
         * @en
         * The listener of app open ad.
         */
        set appOpenAdListener(value) {
          if (this._appOpenAdListener) {
            route.off(js.getClassName(AppOpenAdLoadCallbackNTF), this.onAppOpenAdLoadCallbackNTF, this);
            route.off(js.getClassName(AppOpenPaidEventNTF), this.onPaidEvent, this);
            route.off(js.getClassName(AppOpenAdFullScreenContentCallbackNTF), this.onFullScreenContentCallbackNTF, this);
            route.off(js.getClassName(ShowAppOpenAdCompleteNTF), this.onShowCompleteNTF, this);
          }

          this._appOpenAdListener = value;

          if (value) {
            route.on(js.getClassName(AppOpenAdLoadCallbackNTF), this.onAppOpenAdLoadCallbackNTF, this);
            route.on(js.getClassName(AppOpenPaidEventNTF), this.onPaidEvent, this);
            route.on(js.getClassName(AppOpenAdFullScreenContentCallbackNTF), this.onFullScreenContentCallbackNTF, this);
            route.on(js.getClassName(ShowAppOpenAdCompleteNTF), this.onShowCompleteNTF, this);
          }
        }
        /**
         * @zh
         * 开屏广告的事件接收器，多个类型的联合
         * @en
         * The listener of app open ad.
         */


        get appOpenAdListener() {
          return this._appOpenAdListener;
        }
        /**
         * @zh
         * 加载开屏广告
         * @en
         * load app open ad.
         * @param unitId 
         *  @zh 开屏广告的单元 Id
         *  @en the unit id of app open ad
         * @param appOpenAdListener 
         *  @zh 开屏广告监听器
         *  @en listener for app open ad
         */


        loadAd(unitId, appOpenAdListener) {
          this.appOpenAdListener = appOpenAdListener;
          this.unitId = unitId;
          bridge.sendToNative(js.getClassName(LoadAppOpenAdREQ), {
            unitId: unitId
          }, js.getClassName(LoadAppOpenAdACK), ack => {}, this);
        }
        /**
         * @zh
         * 开屏广告是否有效
         * 要从回调中去判断是否有效，在安卓上，消息是来自其他线程的，因此是异步的。
         * @en
         * whether the app open ad is valid.
         * @param onComplete 
         * @param thisArg 
         */


        isValid(onComplete, thisArg) {
          bridge.sendToNative(js.getClassName(IsAdAvailableREQ), {
            unitId: this.unitId
          }, js.getClassName(IsAdAvailableACK), ack => {
            log(module, "isValid", ack.valid);

            if (onComplete && thisArg) {
              onComplete.call(thisArg, ack.valid);
            }
          });
        }
        /**
         * @zh
         *  显示开屏广告
         * @en
         *  Show app open ad.
         * @param onComplete 
         *  @zh 展示结束
         *  @en whether the show process is complete
         */


        show(onComplete) {
          bridge.sendToNative(js.getClassName(ShowAppOpenAdREQ), {
            unitId: this.unitId
          }, js.getClassName(ShowAppOpenAdACK), ack => {
            log(module, "showAdIfAvailable", ack);

            if (onComplete) {
              onComplete();
            }
          });
        }
        /**
         * @zh
         * 销毁开屏广告
         * 安卓中没有手动销毁的方法，这里的销毁是事件回调
         * @en
         * Destroy the app open ad
         * Note that there is no 'destroy' method on the app open ad.
         * Simply deregister all callbacks.
         */


        destroy() {
          this.appOpenAdListener = null;
        }

        onAppOpenAdLoadCallbackNTF(ntf) {
          if (this.appOpenAdListener) {
            var method = this.appOpenAdListener[ntf.method];

            if (method) {
              method(ntf.loadAdError);
            }
          }
        }

        onFullScreenContentCallbackNTF(ntf) {
          if (ntf && ntf.method && this.appOpenAdListener) {
            var method = this.appOpenAdListener[ntf.method];

            if (method) {
              method(ntf.adError);
            }
          }
        }

        onShowCompleteNTF(ntf) {
          var c = this.appOpenAdListener;

          if (c && c.onShowAdComplete) {
            c.onShowAdComplete(ntf.unitId);
          }
        }

        onPaidEvent(ntf) {
          var listener = this.appOpenAdListener;

          if (listener && listener.onPaidEvent) {
            listener.onPaidEvent(ntf);
          }
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=e28ae58134b9090c0a883fd09b8dba7370d1e8ae.js.map