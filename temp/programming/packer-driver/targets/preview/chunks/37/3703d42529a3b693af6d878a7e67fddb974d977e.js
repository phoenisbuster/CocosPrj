System.register(["cc", "cc/env", "__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, NATIVE, native, route, VersionREQ, ExtensionVersion, js, Bridge, module, bridge;

  _export("Bridge", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
      native = _cc.native;
      js = _cc.js;
    }, function (_ccEnv) {
      NATIVE = _ccEnv.NATIVE;
    }, function (_unresolved_) {
      route = _unresolved_.route;
    }, function (_unresolved_2) {
      VersionREQ = _unresolved_2.VersionREQ;
    }, function (_unresolved_3) {
      ExtensionVersion = _unresolved_3.ExtensionVersion;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "9fa2b+aj71GBKZ5Ae4Zxwy/", "Bridge", undefined);
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

      __checkObsolete__(['native']);

      /**
       * @zh
       * 桥接原生和 TS 
       * @en
       * Bridge connect native to ts
       */
      __checkObsolete__(['js']);

      module = "[Bridge]";

      _export("Bridge", Bridge = class Bridge {
        constructor() {
          this.onNative = (arg0, arg1) => {
            log(module, "onNative method: " + arg0 + " | content: " + arg1); //te.instance.dispatch(arg0, Route.instance.codec.decode(arg1));            

            var ack = route.codec.decode(arg1);
            route.dispatch(arg0, ack);
          };
        }

        init() {
          log(module, "init");
          this.overwriteCallback();
          var engineVersion = "cocos-" + ExtensionVersion;
          console.log(module, "init", "report engineVersion: " + engineVersion + ".");
          this.sendToNative(js.getClassName(VersionREQ), new VersionREQ('', engineVersion), null, null);
          return this;
        }

        destroy() {
          log(module, "destroy");
        }

        overwriteCallback() {
          log(module, "overwriteCallback");

          if (NATIVE) {
            native.bridge.onNative = this.onNative;
          }
        }

        sendToNative(arg0, req, responseMethod, onResponse, thisArg) {
          log(module, "sendToNative", "method = " + arg0 + ", req.unitId = " + req.unitId);

          if (onResponse) {
            route.once(responseMethod, onResponse, thisArg);
          }

          if (NATIVE) {
            native.bridge.sendToNative(arg0, route.codec.encode(req));
          }
        }

      });

      _export("bridge", bridge = new Bridge().init());

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=3703d42529a3b693af6d878a7e67fddb974d977e.js.map