System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, GlobalLivingClass, SanShePao, _dec, _class, _crd, ccclass, property, combatConfigManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b395yu0ZZNBJKdTY9gRk5p", "combatConfigManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("combatConfigManeger", combatConfigManeger = (_dec = ccclass('combatConfigManeger'), _dec(_class = class combatConfigManeger {
        start() {}

        update(deltaTime) {}

      }) || _class));

      GlobalLivingClass = class GlobalLivingClass {
        constructor(LivingValue, DefendValue, HarmValue, AttackSpeed, CostPower, GradeValue, LivingType) {
          this.LivingValue = void 0;
          this.DefendValue = void 0;
          this.HarmValue = void 0;
          this.AttackSpeed = void 0;
          this.CostPower = void 0;
          this.GradeValue = void 0;
          this.LivingType = void 0;
          this.LivingValue = LivingValue;
          this.DefendValue = DefendValue;
          this.HarmValue = HarmValue;
          this.AttackSpeed = AttackSpeed;
          this.CostPower = CostPower;
          this.GradeValue = GradeValue;
          this.LivingType = LivingType;
        }

      };
      SanShePao = class SanShePao extends GlobalLivingClass {
        constructor() {
          super(500);
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c70a139661c9eaf196365e4078f7668d862652f3.js.map