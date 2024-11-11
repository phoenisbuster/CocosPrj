System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, BannerAlignment, BottomCenter, TopCenter;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "22c7dg+reFL/bvh46PA4/ED", "BannerAlignment", undefined);

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
       * @en
       * Defines the RelativeLayout of Android in Typescript. 
       * See RelativeLayout.java for more details. 
       */
      _export("BannerAlignment", BannerAlignment = /*#__PURE__*/function (BannerAlignment) {
        BannerAlignment["ALIGN_LEFT"] = "ALIGN_LEFT";
        BannerAlignment["ALIGN_TOP"] = "ALIGN_TOP";
        BannerAlignment["ALIGN_RIGHT"] = "ALIGN_RIGHT";
        BannerAlignment["ALIGN_BOTTOM"] = "ALIGN_BOTTOM";
        BannerAlignment["CENTER_HORIZONTAL"] = "CENTER_HORIZONTAL";
        BannerAlignment["CENTER_VERTICAL"] = "CENTER_VERTICAL";
        BannerAlignment["ALIGN_PARENT_BOTTOM"] = "ALIGN_PARENT_BOTTOM";
        return BannerAlignment;
      }({}));
      /**
       * @en
       * Put the banner at bottom-center of the screen
       */


      _export("BottomCenter", BottomCenter = [BannerAlignment.ALIGN_PARENT_BOTTOM, BannerAlignment.CENTER_HORIZONTAL]);
      /**
       * @en
       * Put the banner at the top-center of the screen.
       */


      _export("TopCenter", TopCenter = [BannerAlignment.ALIGN_TOP, BannerAlignment.CENTER_HORIZONTAL]);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=f1ba29ff5cec56a1ad346d23baadcd97d0510271.js.map