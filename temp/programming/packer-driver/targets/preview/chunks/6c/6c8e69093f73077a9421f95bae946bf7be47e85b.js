System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Base, _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5, _dec6, _class6, _dec7, _class8, _dec8, _class10, _dec9, _class11, ccclass, property, LoadAppOpenAdREQ, LoadAppOpenAdACK, ShowAppOpenAdREQ, ShowAppOpenAdACK, ShowAppOpenAdCompleteNTF, AppOpenAdFullScreenContentCallbackNTF, AppOpenAdLoadCallbackNTF, IsAdAvailableREQ, IsAdAvailableACK;

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
      _cclegacy._RF.push({}, "1b2e4BJmARLoYFp0UFuCx/t", "AppOpenAd", undefined);
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

      _export("LoadAppOpenAdREQ", LoadAppOpenAdREQ = (_dec = ccclass("LoadAppOpenAdREQ"), _dec(_class = class LoadAppOpenAdREQ extends Base {}) || _class));

      _export("LoadAppOpenAdACK", LoadAppOpenAdACK = (_dec2 = ccclass("LoadAppOpenAdACK"), _dec2(_class2 = class LoadAppOpenAdACK extends Base {}) || _class2));

      _export("ShowAppOpenAdREQ", ShowAppOpenAdREQ = (_dec3 = ccclass("ShowAppOpenAdREQ"), _dec3(_class3 = class ShowAppOpenAdREQ extends Base {}) || _class3));

      _export("ShowAppOpenAdACK", ShowAppOpenAdACK = (_dec4 = ccclass("ShowAppOpenAdACK"), _dec4(_class4 = class ShowAppOpenAdACK extends Base {}) || _class4));

      _export("ShowAppOpenAdCompleteNTF", ShowAppOpenAdCompleteNTF = (_dec5 = ccclass("ShowAppOpenAdCompleteNTF"), _dec5(_class5 = class ShowAppOpenAdCompleteNTF extends Base {}) || _class5));

      _export("AppOpenAdFullScreenContentCallbackNTF", AppOpenAdFullScreenContentCallbackNTF = (_dec6 = ccclass("AppOpenAdFullScreenContentCallbackNTF"), _dec6(_class6 = class AppOpenAdFullScreenContentCallbackNTF extends Base {
        constructor() {
          super(...arguments);
          this.method = void 0;
          this.adError = void 0;
        }

      }) || _class6));

      _export("AppOpenAdLoadCallbackNTF", AppOpenAdLoadCallbackNTF = (_dec7 = ccclass("AppOpenAdLoadCallbackNTF"), _dec7(_class8 = class AppOpenAdLoadCallbackNTF extends Base {
        constructor() {
          super(...arguments);
          this.method = void 0;
          this.loadAdError = void 0;
        }

      }) || _class8));

      _export("IsAdAvailableREQ", IsAdAvailableREQ = (_dec8 = ccclass("IsAdAvailableREQ"), _dec8(_class10 = class IsAdAvailableREQ extends Base {}) || _class10));

      _export("IsAdAvailableACK", IsAdAvailableACK = (_dec9 = ccclass("IsAdAvailableACK"), _dec9(_class11 = class IsAdAvailableACK extends Base {
        constructor() {
          super(...arguments);
          this.valid = false;
        }

      }) || _class11));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=6c8e69093f73077a9421f95bae946bf7be47e85b.js.map