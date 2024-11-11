System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Codec, EventTarget, log, Route, module, route;

  _export("Route", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
      log = _cc.log;
    }, function (_unresolved_) {
      Codec = _unresolved_.Codec;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "d7d2caHkbhJx7OojQtGJlDF", "Route", undefined);
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


      __checkObsolete__(['EventTarget']);

      /**
       * @zh
       * 封装 EventTarget，用于事件派发
       * @en
       * Encapsulate an event target to dispatch events from native.
       */
      __checkObsolete__(['log']);

      module = "[Route]";

      _export("Route", Route = class Route {
        constructor() {
          this.codec = void 0;
          this._eventTarget = new EventTarget();
        }

        init(codec) {
          log(module, "init");
          this.codec = codec;
          return this;
        }

        destroy() {}

        once(method, handler, thisArg) {
          log(module, "once", method);

          this._eventTarget.once(method, handler, thisArg);
        }

        off(method, response, thisArg) {
          log(module, "off", method);

          this._eventTarget.off(method, response, thisArg);
        }

        on(method, handler, thisArg) {
          log(module, "on", method);

          this._eventTarget.on(method, handler, thisArg);
        }

        dispatch(method, ack) {
          log(module, "dispatch", method);

          this._eventTarget.emit(method, ack);
        }

      });

      _export("route", route = new Route().init(new Codec()));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=ce2eceaa70f65b90f6845f8420cc08c913358565.js.map