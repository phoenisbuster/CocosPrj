System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AdClient, BannerAdListenerNTF, ShowBannerREQ, LoadBannerREQ, LoadBannerACK, DestroyBannerREQ, DestroyBannerACK, log, js, bridge, route, BannerSize, BottomCenter, BannerPaidEventNTF, BannerSizeType, BannerClient, module;

  _export("BannerClient", void 0);

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
      BannerAdListenerNTF = _unresolved_2.BannerAdListenerNTF;
      ShowBannerREQ = _unresolved_2.ShowBannerREQ;
      LoadBannerREQ = _unresolved_2.LoadBannerREQ;
      LoadBannerACK = _unresolved_2.LoadBannerACK;
      DestroyBannerREQ = _unresolved_2.DestroyBannerREQ;
      DestroyBannerACK = _unresolved_2.DestroyBannerACK;
    }, function (_unresolved_3) {
      bridge = _unresolved_3.bridge;
    }, function (_unresolved_4) {
      route = _unresolved_4.route;
    }, function (_unresolved_5) {
      BannerSize = _unresolved_5.BannerSize;
    }, function (_unresolved_6) {
      BottomCenter = _unresolved_6.BottomCenter;
    }, function (_unresolved_7) {
      BannerPaidEventNTF = _unresolved_7.BannerPaidEventNTF;
    }, function (_unresolved_8) {
      BannerSizeType = _unresolved_8.BannerSizeType;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "67876+xkzJIO6gfVziSiyV8", "BannerClient", undefined);
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


      __checkObsolete__(['log', 'js']);

      /**
       * @zh
       * 横幅的客户端
       * @en
       * TS client for Banner ad.
       */
      module = "[BannerClient]";

      _export("BannerClient", BannerClient = class BannerClient extends AdClient {
        constructor() {
          super(...arguments);

          /**
           * @zh
           * Banner 的事件监听器，由多种监听器联合
           * @en
           * Union of all banner events listener
           */
          this._adListener = null;
        }

        /**
         * @zh
         * Banner 的事件监听器，由多种监听器联合
         * @en
         * Union of all banner events listener
         */
        get adListener() {
          return this._adListener;
        }
        /**
         * @zh
         * Banner 的事件监听器，由多种监听器联合
         * @en
         * Union of all banner events listener
         */


        set adListener(v) {
          if (this._adListener) {
            route.off(js.getClassName(BannerAdListenerNTF), this.onAdListenerEvent, this);
            route.off(js.getClassName(BannerPaidEventNTF), this.onPaidEvent, this);
          }

          this._adListener = v;

          if (this._adListener) {
            route.on(js.getClassName(BannerAdListenerNTF), this.onAdListenerEvent, this);
            route.on(js.getClassName(BannerPaidEventNTF), this.onPaidEvent, this);
          }
        }
        /**
         * @zh
         * 展示横幅
         * @en
         * Show banner 
         * @param visible 
         *  @zh 横幅的可见性
         *  @en Visibility of the banner
         */


        show(visible) {
          var req = new ShowBannerREQ(this.unitId);
          req.visible = visible;
          bridge.sendToNative(js.getClassName(ShowBannerREQ), req);
        }
        /**
         * @zh
         * 加载横幅
         * 加载后会自动展示
         * @en
         * Load the banner 
         * The banner will be visible automatically
         * @param unitId 
         * @param adListener 
         * @param opt 
         */


        load(unitId, adListener, opt) {
          this.adListener = adListener;
          this.unitId = unitId;
          bridge.sendToNative(js.getClassName(LoadBannerREQ), {
            unitId: unitId,
            bannerSize: opt != null && opt.size ? opt == null ? void 0 : opt.size : BannerSize.BANNER,
            alignments: opt != null && opt.alignments ? opt == null ? void 0 : opt.alignments : BottomCenter,
            bannerSizeType: opt != null && opt.type ? opt == null ? void 0 : opt.type : BannerSizeType.Builtin
          }, js.getClassName(LoadBannerACK), response => {}, this);
        }
        /**
         * @zh
         * 销毁横幅广告
         * @en
         * Destroy the banner id
         */


        destroy() {
          log(module, "destroy", this.unitId);
          var req = new DestroyBannerREQ(this.unitId);
          this.adListener = null;
          bridge.sendToNative(js.getClassName(DestroyBannerREQ), req, js.getClassName(DestroyBannerACK), response => {});
        }

        onAdListenerEvent(ntf) {
          if (this.adListener) {
            var method = this.adListener[ntf.method];

            if (method && typeof method == "function") {
              method(ntf.loadAdError);
            }
          }
        }

        onPaidEvent(ntf) {
          var listener = this.adListener;

          if (listener && listener.onPaidEvent) {
            listener.onPaidEvent(ntf);
          }
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=5188f048b7c6a2fdea5d3cb16bcc9a9a1e8088e6.js.map