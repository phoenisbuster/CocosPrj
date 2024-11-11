System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Codec;

  _export("Codec", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5fc3csE8LBMtJ0kAlIAJVfi", "Codec", undefined);
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

      /**
       * @zh
       * 协议解析的接口
       * @en
       * Interface to parse protocols.
       */


      /**
       * @zh
       * 协议解析器
       * @en
       * codec to parse JSON
       */
      _export("Codec", Codec = class Codec {
        decode(content) {
          return JSON.parse(content);
        }

        encode(t) {
          return JSON.stringify(t);
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=3a8ea00eedab2f293e9bc8698ad931693573dc2b.js.map