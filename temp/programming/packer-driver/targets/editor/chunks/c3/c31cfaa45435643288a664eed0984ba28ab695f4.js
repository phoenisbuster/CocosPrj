System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Base, _decorator, _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5, _dec6, _class7, ccclass, property, LoadInterstitialAdREQ, LoadInterstitialAdACK, ShowInterstitialAdREQ, ShowInterstitialAdACK, InterstitialAdLoadCalLBackNTF, InterstitialFullScreenContentCallbackNTF;

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
      _cclegacy._RF.push({}, "351a6cGhWdHlaZa5uq/AsZ8", "InterstitailAd", undefined);
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

      _export("LoadInterstitialAdREQ", LoadInterstitialAdREQ = (_dec = ccclass("LoadInterstitialAdREQ"), _dec(_class = class LoadInterstitialAdREQ extends Base {}) || _class));

      _export("LoadInterstitialAdACK", LoadInterstitialAdACK = (_dec2 = ccclass("LoadInterstitialAdACK"), _dec2(_class2 = class LoadInterstitialAdACK extends Base {}) || _class2));

      _export("ShowInterstitialAdREQ", ShowInterstitialAdREQ = (_dec3 = ccclass("ShowInterstitialAdREQ"), _dec3(_class3 = class ShowInterstitialAdREQ extends Base {}) || _class3));

      _export("ShowInterstitialAdACK", ShowInterstitialAdACK = (_dec4 = ccclass("ShowInterstitialAdACK"), _dec4(_class4 = class ShowInterstitialAdACK extends Base {}) || _class4));

      _export("InterstitialAdLoadCalLBackNTF", InterstitialAdLoadCalLBackNTF = (_dec5 = ccclass("InterstitialAdLoadCalLBackNTF"), _dec5(_class5 = class InterstitialAdLoadCalLBackNTF extends Base {
        constructor(...args) {
          super(...args);
          this.method = void 0;
          this.loadAdError = void 0;
        }

      }) || _class5));

      _export("InterstitialFullScreenContentCallbackNTF", InterstitialFullScreenContentCallbackNTF = (_dec6 = ccclass("InterstitialFullScreenContentCallbackNTF"), _dec6(_class7 = class InterstitialFullScreenContentCallbackNTF extends Base {
        constructor(...args) {
          super(...args);
          this.method = void 0;
          this.loadAdError = void 0;
        }

      }) || _class7));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=c31cfaa45435643288a664eed0984ba28ab695f4.js.map