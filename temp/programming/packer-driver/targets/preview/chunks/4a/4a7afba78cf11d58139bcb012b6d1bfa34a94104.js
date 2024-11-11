System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, bridge, DestroyBannerACK, DestroyNativeAdREQ, LoadNativeAdACK, LoadNativeAdREQ, NativeAdListenerNTF, NativeLoadedNTF, AdClient, route, NativePaidEventNTF, js, NativeAdClient, module;

  _export("NativeAdClient", void 0);

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
      DestroyBannerACK = _unresolved_2.DestroyBannerACK;
    }, function (_unresolved_3) {
      DestroyNativeAdREQ = _unresolved_3.DestroyNativeAdREQ;
      LoadNativeAdACK = _unresolved_3.LoadNativeAdACK;
      LoadNativeAdREQ = _unresolved_3.LoadNativeAdREQ;
      NativeAdListenerNTF = _unresolved_3.NativeAdListenerNTF;
      NativeLoadedNTF = _unresolved_3.NativeLoadedNTF;
    }, function (_unresolved_4) {
      AdClient = _unresolved_4.AdClient;
    }, function (_unresolved_5) {
      route = _unresolved_5.route;
    }, function (_unresolved_6) {
      NativePaidEventNTF = _unresolved_6.NativePaidEventNTF;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2051einid9F8YRS5orUMZnQ", "NativeAdClient", undefined);
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
       * 原生广告客户端
       * 由于不可销毁，通常来说游戏不会用到
       * 提供两种类型，请查看 NativeAdTemplateSize
       * @en
       * native ad client
       * Two types are supported, please check NativeAdTemplateSize for more details
       */
      __checkObsolete__(['js']);

      module = "[NativeAdClient]";

      _export("NativeAdClient", NativeAdClient = class NativeAdClient extends AdClient {
        constructor() {
          super(...arguments);

          /**
           * @zh
           * 原生广告的监听器
           * @en
           * Listener for the native ad
           */
          this._nativeAdListener = void 0;
        }

        /**
         * @zh
         * 原生广告的监听器
         * @en
         * Listener for the native ad
         */
        get nativeAdListener() {
          return this._nativeAdListener;
        }
        /**
         * @zh
         * 原生广告的监听器
         * @en
         * Listener for the native ad
         */


        set nativeAdListener(value) {
          if (this._nativeAdListener) {
            route.off(js.getClassName(NativeLoadedNTF), this.onNativeLoadedNTF, this);
            route.off(js.getClassName(NativeAdListenerNTF), this.onNativeAdListenerNTF, this);
            route.off(js.getClassName(NativePaidEventNTF), this.onPaidEvent, this);
          }

          this._nativeAdListener = value;

          if (this._nativeAdListener) {
            route.on(js.getClassName(NativeLoadedNTF), this.onNativeLoadedNTF, this);
            route.on(js.getClassName(NativeAdListenerNTF), this.onNativeAdListenerNTF, this);
            route.on(js.getClassName(NativePaidEventNTF), this.onPaidEvent, this);
          }
        }
        /**
         * @zh
         * 加载原生广告
         * @en
         * Load native ad.
         * @param unitId 
         *  @zh 单元Id
         *  @en The unit id
         * @param size 
         *  @zh 广告的大小
         *  @en The ad size
         * @param nativeListener 
         *  @zh 监听器
         *  @en The listener
         */


        load(unitId, size, nativeListener) {
          log(module, "load", "unitId = " + unitId);
          this.nativeAdListener = nativeListener;
          var req = new LoadNativeAdREQ(unitId);
          req.size = size;
          bridge.sendToNative(js.getClassName(LoadNativeAdREQ), req, js.getClassName(LoadNativeAdACK), ack => {
            log(module, "load", "LoadNativeAdACK: " + ack);
          }, this);
        }
        /**
         * @zh
         * 销毁原生广告
         * @en
         * Destroy the native ad
         */


        destroy() {
          log(module, "destroy");
          this.nativeAdListener = null;
          bridge.sendToNative(js.getClassName(DestroyNativeAdREQ), {
            unitId: this.unitId
          }, js.getClassName(DestroyBannerACK), ack => {
            log(module, "destroy", "DestroyNativeAdACK = " + ack);
          });
        }

        onNativeLoadedNTF(ntf) {
          if (this.nativeAdListener) {
            var listener = this.nativeAdListener;

            if (listener && listener.onNativeAdLoaded) {
              listener.onNativeAdLoaded();
            }
          }
        }

        onNativeAdListenerNTF(ntf) {
          var method = this.nativeAdListener[ntf.method];

          if (method) {
            method(ntf.loadAdError);
          }
        }

        onPaidEvent(ntf) {
          var paid = this.nativeAdListener;

          if (paid && paid.onPaidEvent) {
            paid.onPaidEvent(ntf);
          }
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=4a7afba78cf11d58139bcb012b6d1bfa34a94104.js.map