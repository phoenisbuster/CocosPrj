System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, AdFormat;

  function getTestAdUnitId(format) {
    switch (format) {
      case AdFormat.AppOpen:
        return isAndroid() ? "ca-app-pub-3940256099942544/9257395921" : "ca-app-pub-3940256099942544/5575463023";

      case AdFormat.Banner:
        return isAndroid() ? "ca-app-pub-3940256099942544/6300978111" : "ca-app-pub-3940256099942544/2934735716";

      case AdFormat.Interstitial:
        return isAndroid() ? "ca-app-pub-3940256099942544/1033173712" : "ca-app-pub-3940256099942544/4411468910";

      case AdFormat.Rewarded:
        return isAndroid() ? "ca-app-pub-3940256099942544/5224354917" : "ca-app-pub-3940256099942544/1712485313";

      case AdFormat.RewardedInterstitial:
        return isAndroid() ? "ca-app-pub-3940256099942544/5354046379" : "ca-app-pub-3940256099942544/6978759866";

      case AdFormat.Native:
        return isAndroid() ? "ca-app-pub-3940256099942544/2247696110" : "ca-app-pub-3940256099942544/3986624511";

      default:
        throw new Error(`Unexpected format: ${format}`);
    }
  }

  function isAndroid() {
    return sys.os === sys.OS.ANDROID;
  }

  _export("getTestAdUnitId", getTestAdUnitId);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "82ff3DgPcxO9pSnl1qmYr+u", "TestUnitId", undefined);
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


      __checkObsolete__(['sys']);

      _export("AdFormat", AdFormat = /*#__PURE__*/function (AdFormat) {
        AdFormat[AdFormat["AppOpen"] = 0] = "AppOpen";
        AdFormat[AdFormat["Banner"] = 1] = "Banner";
        AdFormat[AdFormat["Interstitial"] = 2] = "Interstitial";
        AdFormat[AdFormat["Rewarded"] = 3] = "Rewarded";
        AdFormat[AdFormat["RewardedInterstitial"] = 4] = "RewardedInterstitial";
        AdFormat[AdFormat["Native"] = 5] = "Native";
        return AdFormat;
      }({}));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=57fb100295942031c0d2b77613bcba4968c9809b.js.map