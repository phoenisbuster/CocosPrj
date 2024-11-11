System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Base, _decorator, _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5, _dec6, _class7, ccclass, property, LoadRewardedInterstitialAdREQ, LoadRewardedInterstitialAdACK, ShowRewardedInterstitialAdREQ, ShowRewardedInterstitialAdACK, RewardedInterstitialAdLoadCallbackNTF, OnUserEarnedRewardedInterstitialListenerNTF;

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
      _cclegacy._RF.push({}, "f35b0ZWnitHd4mL4VnNo7Th", "RewardedInterstitialAd", undefined);
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

      _export("LoadRewardedInterstitialAdREQ", LoadRewardedInterstitialAdREQ = (_dec = ccclass("LoadRewardedInterstitialAdREQ"), _dec(_class = class LoadRewardedInterstitialAdREQ extends Base {}) || _class));

      _export("LoadRewardedInterstitialAdACK", LoadRewardedInterstitialAdACK = (_dec2 = ccclass("LoadRewardedInterstitialAdACK"), _dec2(_class2 = class LoadRewardedInterstitialAdACK extends Base {}) || _class2));

      _export("ShowRewardedInterstitialAdREQ", ShowRewardedInterstitialAdREQ = (_dec3 = ccclass("ShowRewardedInterstitialAdREQ"), _dec3(_class3 = class ShowRewardedInterstitialAdREQ extends Base {}) || _class3));

      _export("ShowRewardedInterstitialAdACK", ShowRewardedInterstitialAdACK = (_dec4 = ccclass("ShowRewardedInterstitialAdACK"), _dec4(_class4 = class ShowRewardedInterstitialAdACK extends Base {}) || _class4));

      _export("RewardedInterstitialAdLoadCallbackNTF", RewardedInterstitialAdLoadCallbackNTF = (_dec5 = ccclass("RewardedInterstitialAdLoadCallbackNTF"), _dec5(_class5 = class RewardedInterstitialAdLoadCallbackNTF extends Base {
        constructor() {
          super(...arguments);
          this.method = void 0;
          this.loadAdError = void 0;
        }

      }) || _class5));

      _export("OnUserEarnedRewardedInterstitialListenerNTF", OnUserEarnedRewardedInterstitialListenerNTF = (_dec6 = ccclass("OnUserEarnedRewardedInterstitialListenerNTF"), _dec6(_class7 = class OnUserEarnedRewardedInterstitialListenerNTF extends Base {
        constructor() {
          super(...arguments);
          this.rewardType = void 0;
          this.rewardAmount = void 0;
        }

      }) || _class7));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=3da6494349f3d7dac0643156e20776e019cdbd60.js.map