System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Base, _decorator, _dec, _class, _dec2, _class2, _dec3, _class4, _dec4, _class5, _dec5, _class6, _dec6, _class8, _dec7, _class10, ccclass, property, LoadRewardedAdREQ, LoadRewardedAdACK, ShowRewardedAdREQ, ShowRewardedAdACK, OnUserEarnedRewardListenerNTF, RewardedAdLoadCallbackNTF, RewardedFullScreenContentCallbackNTF;

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
      _cclegacy._RF.push({}, "a19d623UwdAurbcHSnuSt4c", "RewardedAd", undefined);
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

      _export("LoadRewardedAdREQ", LoadRewardedAdREQ = (_dec = ccclass("LoadRewardedAdREQ"), _dec(_class = class LoadRewardedAdREQ extends Base {}) || _class));

      _export("LoadRewardedAdACK", LoadRewardedAdACK = (_dec2 = ccclass("LoadRewardedAdACK"), _dec2(_class2 = class LoadRewardedAdACK extends Base {
        constructor(...args) {
          super(...args);
          this.method = void 0;
          this.loadAdError = void 0;
        }

      }) || _class2));

      _export("ShowRewardedAdREQ", ShowRewardedAdREQ = (_dec3 = ccclass("ShowRewardedAdREQ"), _dec3(_class4 = class ShowRewardedAdREQ extends Base {}) || _class4));

      _export("ShowRewardedAdACK", ShowRewardedAdACK = (_dec4 = ccclass("ShowRewardedAdACK"), _dec4(_class5 = class ShowRewardedAdACK extends Base {}) || _class5));

      _export("OnUserEarnedRewardListenerNTF", OnUserEarnedRewardListenerNTF = (_dec5 = ccclass("OnUserEarnedRewardListenerNTF"), _dec5(_class6 = class OnUserEarnedRewardListenerNTF extends Base {
        constructor(...args) {
          super(...args);
          this.rewardType = void 0;
          this.rewardAmount = void 0;
        }

      }) || _class6));

      _export("RewardedAdLoadCallbackNTF", RewardedAdLoadCallbackNTF = (_dec6 = ccclass("RewardedAdLoadCallbackNTF"), _dec6(_class8 = class RewardedAdLoadCallbackNTF extends Base {
        constructor(...args) {
          super(...args);
          this.method = void 0;
          this.loadAdError = void 0;
        }

      }) || _class8));

      _export("RewardedFullScreenContentCallbackNTF", RewardedFullScreenContentCallbackNTF = (_dec7 = ccclass("RewardedFullScreenContentCallbackNTF"), _dec7(_class10 = class RewardedFullScreenContentCallbackNTF extends Base {
        constructor(...args) {
          super(...args);
          this.method = void 0;
          this.adError = void 0;
        }

      }) || _class10));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=26aa99b97815c718f8c740729353db93d91debb0.js.map