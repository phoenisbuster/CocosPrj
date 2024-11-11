System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, bridge, route, InterstitialAdLoadCalLBackNTF, InterstitialFullScreenContentCallbackNTF, LoadInterstitialAdACK, LoadInterstitialAdREQ, ShowInterstitialAdACK, ShowInterstitialAdREQ, AdClient, InterstitialPaidEventNTF, js, InterstitialAdClient, module;

  _export("InterstitialAdClient", void 0);

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
      InterstitialAdLoadCalLBackNTF = _unresolved_3.InterstitialAdLoadCalLBackNTF;
      InterstitialFullScreenContentCallbackNTF = _unresolved_3.InterstitialFullScreenContentCallbackNTF;
      LoadInterstitialAdACK = _unresolved_3.LoadInterstitialAdACK;
      LoadInterstitialAdREQ = _unresolved_3.LoadInterstitialAdREQ;
      ShowInterstitialAdACK = _unresolved_3.ShowInterstitialAdACK;
      ShowInterstitialAdREQ = _unresolved_3.ShowInterstitialAdREQ;
    }, function (_unresolved_4) {
      AdClient = _unresolved_4.AdClient;
    }, function (_unresolved_5) {
      InterstitialPaidEventNTF = _unresolved_5.InterstitialPaidEventNTF;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "0133a1I+utKjZdl7GATzhls", "InterstitialAdClient", undefined);
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
       * Interstitial 广告的客户端
       * @en
       * The client of Interstitial Ad.
       */
      __checkObsolete__(['js']);

      module = "[InterstitialAdClient]";

      _export("InterstitialAdClient", InterstitialAdClient = class InterstitialAdClient extends AdClient {
        constructor(...args) {
          super(...args);

          /**
           * @zh
           * Interstitial 广告监听器，由多种类型联合
           * @en
           * Union of all the InterstitialAd listeners.
           */
          this._interstitialListener = void 0;
        }

        /**
         * @zh
         * Interstitial 广告监听器，由多种类型联合
         * @en
         * Union of all the InterstitialAd listeners.
         */
        get interstitialListener() {
          return this._interstitialListener;
        }
        /**
         * @zh
         * Interstitial 广告监听器，由多种类型联合
         * @en
         * Union of all the InterstitialAd listeners.
         */


        set interstitialListener(value) {
          if (!value) {
            route.off(js.getClassName(InterstitialFullScreenContentCallbackNTF), this.onInterstitialFullScreenContentCallback, this);
            route.off(js.getClassName(InterstitialAdLoadCalLBackNTF), this.onInterstitialAdLoadCalLBackNTF, this);
            route.off(js.getClassName(InterstitialPaidEventNTF), this.onPaidEvent, this);
          }

          this._interstitialListener = value;

          if (value) {
            route.on(js.getClassName(InterstitialFullScreenContentCallbackNTF), this.onInterstitialFullScreenContentCallback, this);
            route.on(js.getClassName(InterstitialAdLoadCalLBackNTF), this.onInterstitialAdLoadCalLBackNTF, this);
            route.on(js.getClassName(InterstitialPaidEventNTF), this.onPaidEvent, this);
          }
        }
        /**
         * @zh
         *  加载 Interstitial  广告
         * @en
         *  Load the Interstitial Ad
         * @param unitId  
         *  @zh 单元Id
         *  @en the unit id of Interstitial Ad.
         * @param interstitialListener 
         *  @zh Interstitial 监听器
         *  @en Listener for the Interstitial Ad.
         */


        load(unitId, interstitialListener) {
          this.destroy();
          log(module, `load, unitId = ${unitId}`);
          this.unitId = unitId;
          this.interstitialListener = interstitialListener;
          bridge.sendToNative(js.getClassName(LoadInterstitialAdREQ), {
            unitId: unitId
          }, js.getClassName(LoadInterstitialAdACK), ack => {
            log(module, `load, LoadInterstitialAdACK, ${ack}`);
          });
        }
        /**
         * @zh
         * 销毁 Interstitial  的监听器
         * @en
         * Destroy the listener
         */


        destroy() {
          log(module, `destroy`);
          this.interstitialListener = null;
        }
        /**
         * @zh
         * 展示 Interstitial 广告
         * 必须先 load 并且在成功后（onAdLoaded）后展示
         * @en
         * Show the Interstitial Ad.
         * Must be loaded first, and show in the onAdLoaded callback.
         * @param onComplete 
         */


        show(onComplete) {
          log(module, `show`);
          bridge.sendToNative(js.getClassName(ShowInterstitialAdREQ), {
            unitId: this.unitId
          }, js.getClassName(ShowInterstitialAdACK), ack => {
            if (onComplete) {
              onComplete();
            }
          });
        }

        onInterstitialAdLoadCalLBackNTF(ntf) {
          log(module, `onInterstitialAdLoadCalLBackNTF, ${ntf}`);

          if (this.interstitialListener) {
            let method = this.interstitialListener[ntf.method];

            if (method) {
              method(ntf.loadAdError);
            }
          }
        }

        onInterstitialFullScreenContentCallback(ntf) {
          log(module, `onInterstitialFullScreenContentCallback, ${ntf}`);
          const method = this.interstitialListener[ntf.method];

          if (method) {
            method();
          }
        }

        onPaidEvent(ntf) {
          const listener = this.interstitialListener;

          if (listener && listener.onPaidEvent) {
            listener.onPaidEvent(ntf);
          }
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=a030001060ba513ffea4b06643489d89df4a01ff.js.map