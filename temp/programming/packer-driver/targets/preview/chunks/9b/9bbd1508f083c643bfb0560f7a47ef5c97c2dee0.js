System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Base, _decorator, _dec, _class, _dec2, _class3, _dec3, _class4, _dec4, _class5, _dec5, _class6, _dec6, _class7, _dec7, _class8, ccclass, property, PaidEventNTF, BannerPaidEventNTF, InterstitialPaidEventNTF, NativePaidEventNTF, AppOpenPaidEventNTF, RewardedPaidEventNTF, RewardedInterstitialPaidEventNTF;

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
      _cclegacy._RF.push({}, "e2d81qcvaVBva080tOWZBU/", "PaidEventNTF", undefined);
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

      _export("PaidEventNTF", PaidEventNTF = (_dec = ccclass("PaidEventNTF"), _dec(_class = class PaidEventNTF extends Base {
        constructor() {
          super(...arguments);
          this.valueMicros = void 0;
          this.currencyCode = void 0;
          this.precision = void 0;
          this.adSourceName = void 0;
          this.adSourceId = void 0;
          this.adSourceInstanceName = void 0;
          this.adSourceInstanceId = void 0;
          this.mediationGroupName = void 0;
          this.mediationABTestName = void 0;
          this.mediationABTestVariant = void 0;
        }

      }) || _class));

      _export("BannerPaidEventNTF", BannerPaidEventNTF = (_dec2 = ccclass("BannerPaidEventNTF"), _dec2(_class3 = class BannerPaidEventNTF extends PaidEventNTF {}) || _class3));

      _export("InterstitialPaidEventNTF", InterstitialPaidEventNTF = (_dec3 = ccclass("InterstitialPaidEventNTF"), _dec3(_class4 = class InterstitialPaidEventNTF extends PaidEventNTF {}) || _class4));

      _export("NativePaidEventNTF", NativePaidEventNTF = (_dec4 = ccclass("NativePaidEventNTF"), _dec4(_class5 = class NativePaidEventNTF extends PaidEventNTF {}) || _class5));

      _export("AppOpenPaidEventNTF", AppOpenPaidEventNTF = (_dec5 = ccclass("AppOpenPaidEventNTF"), _dec5(_class6 = class AppOpenPaidEventNTF extends PaidEventNTF {}) || _class6));

      _export("RewardedPaidEventNTF", RewardedPaidEventNTF = (_dec6 = ccclass("RewardedPaidEventNTF"), _dec6(_class7 = class RewardedPaidEventNTF extends PaidEventNTF {}) || _class7));

      _export("RewardedInterstitialPaidEventNTF", RewardedInterstitialPaidEventNTF = (_dec7 = ccclass("RewardedInterstitialPaidEventNTF"), _dec7(_class8 = class RewardedInterstitialPaidEventNTF extends PaidEventNTF {}) || _class8));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=9bbd1508f083c643bfb0560f7a47ef5c97c2dee0.js.map