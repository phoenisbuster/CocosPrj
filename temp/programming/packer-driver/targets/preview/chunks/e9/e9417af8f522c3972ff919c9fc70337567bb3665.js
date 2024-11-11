System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Base, _decorator, _dec, _class, _dec2, _class3, _dec3, _class4, _dec4, _class6, _dec5, _class8, _dec6, _class9, _dec7, _class10, ccclass, property, LoadBannerREQ, LoadBannerACK, ShowBannerREQ, ShowBannerACK, DestroyBannerREQ, DestroyBannerACK, BannerAdListenerNTF;

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
      _cclegacy._RF.push({}, "a3850FFnhpK8LXjWJ/XukPq", "BannerAd", undefined);
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

      _export("LoadBannerREQ", LoadBannerREQ = (_dec = ccclass("LoadBannerREQ"), _dec(_class = class LoadBannerREQ extends Base {
        constructor() {
          super(...arguments);
          this.bannerSizeType = void 0;
          this.bannerSize = void 0;
          this.alignments = void 0;
        }

      }) || _class));

      _export("LoadBannerACK", LoadBannerACK = (_dec2 = ccclass("LoadBannerACK"), _dec2(_class3 = class LoadBannerACK extends Base {}) || _class3));

      _export("ShowBannerREQ", ShowBannerREQ = (_dec3 = ccclass("ShowBannerREQ"), _dec3(_class4 = class ShowBannerREQ extends Base {
        constructor() {
          super(...arguments);
          this.visible = void 0;
        }

      }) || _class4));

      _export("ShowBannerACK", ShowBannerACK = (_dec4 = ccclass("ShowBannerACK"), _dec4(_class6 = class ShowBannerACK extends Base {
        constructor() {
          super(...arguments);
          this.visible = void 0;
        }

      }) || _class6));

      _export("DestroyBannerREQ", DestroyBannerREQ = (_dec5 = ccclass("DestroyBannerREQ"), _dec5(_class8 = class DestroyBannerREQ extends Base {}) || _class8));

      _export("DestroyBannerACK", DestroyBannerACK = (_dec6 = ccclass("DestroyBannerACK"), _dec6(_class9 = class DestroyBannerACK extends Base {}) || _class9));

      _export("BannerAdListenerNTF", BannerAdListenerNTF = (_dec7 = ccclass("BannerAdListenerNTF"), _dec7(_class10 = class BannerAdListenerNTF extends Base {
        constructor() {
          super(...arguments);
          this.method = void 0;
          this.loadAdError = void 0;
        }

      }) || _class10));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=e9417af8f522c3972ff919c9fc70337567bb3665.js.map