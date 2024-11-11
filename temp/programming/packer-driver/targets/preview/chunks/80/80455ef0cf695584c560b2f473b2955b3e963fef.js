System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, ClientEventManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a0b1bHA1PtOaqymcNamKFGU", "ClientEventManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ClientEventManager", ClientEventManager = (_dec = ccclass('ClientEventManager'), _dec(_class = (_class2 = class ClientEventManager {
        static on(evt, cb, obj) {
          if (this.event_mapping.has(evt)) {
            var a = this.event_mapping.get(evt);
            a.set(obj.uuid, cb);
            this.event_mapping.set(evt, a);
          } else {
            var _a = new Map();

            _a.set(obj.uuid, cb);

            this.event_mapping.set(evt, _a);
          }
        }

        static off(evt, callback, obj) {
          if (callback === void 0) {
            callback = null;
          }

          if (this.event_mapping.has(evt)) {
            var a = this.event_mapping.get(evt);

            if (a.has(obj.uuid)) {
              if (callback) a.delete(obj.uuid);
            }

            this.event_mapping.set(evt, a);
          }
        }

        static fire(evt, args1, args2, args3, args4, args5) {
          if (args1 === void 0) {
            args1 = null;
          }

          if (args2 === void 0) {
            args2 = null;
          }

          if (args3 === void 0) {
            args3 = null;
          }

          if (args4 === void 0) {
            args4 = null;
          }

          if (args5 === void 0) {
            args5 = null;
          }

          if (this.event_mapping.has(evt)) {
            this.event_mapping.get(evt).forEach(cb => {
              if (cb) cb(args1, args2, args3, args4, args5);
            });
          }
        }

      }, _class2.event_mapping = new Map(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=80455ef0cf695584c560b2f473b2955b3e963fef.js.map