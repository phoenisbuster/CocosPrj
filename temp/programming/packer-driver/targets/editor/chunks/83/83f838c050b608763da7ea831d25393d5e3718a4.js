System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Base, _decorator, _dec, _class, _dec2, _class3, _dec3, _class4, _dec4, _class5, _dec5, _class7, _dec6, _class8, ccclass, property, NativeAdTemplateSize, LoadNativeAdREQ, LoadNativeAdACK, NativeLoadedNTF, NativeAdListenerNTF, DestroyNativeAdREQ, DestroyNativeAdACK;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_) {
      Base = _unresolved_.Base;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "7b7c2Gl5W9GoreLVP8oHwTY", "NativeAd", undefined);
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


      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NativeAdTemplateSize", NativeAdTemplateSize = /*#__PURE__*/function (NativeAdTemplateSize) {
        NativeAdTemplateSize["Small"] = "small";
        NativeAdTemplateSize["Medium"] = "medium";
        return NativeAdTemplateSize;
      }({}));

      _export("LoadNativeAdREQ", LoadNativeAdREQ = (_dec = ccclass("LoadNativeAdREQ"), _dec(_class = class LoadNativeAdREQ extends Base {
        constructor(...args) {
          super(...args);
          this.size = NativeAdTemplateSize.Small;
        }

      }) || _class));

      _export("LoadNativeAdACK", LoadNativeAdACK = (_dec2 = ccclass("LoadNativeAdACK"), _dec2(_class3 = class LoadNativeAdACK extends Base {}) || _class3));

      _export("NativeLoadedNTF", NativeLoadedNTF = (_dec3 = ccclass("NativeLoadedNTF"), _dec3(_class4 = class NativeLoadedNTF extends Base {}) || _class4));

      _export("NativeAdListenerNTF", NativeAdListenerNTF = (_dec4 = ccclass("NativeAdListenerNTF"), _dec4(_class5 = class NativeAdListenerNTF extends Base {
        constructor(...args) {
          super(...args);
          this.method = void 0;
          this.loadAdError = void 0;
        }

      }) || _class5));

      _export("DestroyNativeAdREQ", DestroyNativeAdREQ = (_dec5 = ccclass("DestroyNativeAdREQ"), _dec5(_class7 = class DestroyNativeAdREQ extends Base {}) || _class7));

      _export("DestroyNativeAdACK", DestroyNativeAdACK = (_dec6 = ccclass("DestroyNativeAdACK"), _dec6(_class8 = class DestroyNativeAdACK extends Base {}) || _class8));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=83f838c050b608763da7ea831d25393d5e3718a4.js.map