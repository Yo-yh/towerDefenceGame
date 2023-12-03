System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, error, resources, Prefab, instantiate, Layers, find, GlobalLivingClass, SanShePao, ZhuiZongDan, GuangZiJian, EmenyNormal, EmenyQuickAttack, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, combatConfigManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      error = _cc.error;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Layers = _cc.Layers;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b395yu0ZZNBJKdTY9gRk5p", "combatConfigManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'error', 'resources', 'Prefab', 'instantiate', 'Layers', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("combatConfigManeger", combatConfigManeger = (_dec = ccclass('combatConfigManeger'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec(_class = (_class2 = class combatConfigManeger extends Component {
        constructor(...args) {
          super(...args);
          this.RoundEmenyConfig = new Array(10);

          _initializerDefineProperty(this, "EmenyNormal", _descriptor, this);

          _initializerDefineProperty(this, "EmenyQuickAttack", _descriptor2, this);

          _initializerDefineProperty(this, "roundTime", _descriptor3, this);
        }

        start() {
          find("Canvas/EmenyBox").active = true;
          console.log("全局配置，正在生成");
          this.roundTime = 1;
          this.InitialRoundEmenyConfig();
          this.schedule(function () {
            // 这里的 this 指向 component
            this.createSingleRoundEmeny(this.roundTime);
          }, 5);
        }

        update(deltaTime) {}

        InitialRoundEmenyConfig() {
          //配置每轮的飞机信息
          this.RoundEmenyConfig[0] = [2, 0, 0];
          this.RoundEmenyConfig[1] = [2, 1, 0];
          this.RoundEmenyConfig[2] = [2, 2, 3];
          this.RoundEmenyConfig[3] = [3, 1, 5];
          this.RoundEmenyConfig[4] = [4, 2, 5];
          this.RoundEmenyConfig[5] = [4, 2, 10];
          this.RoundEmenyConfig[6] = [5, 3, 7];
          this.RoundEmenyConfig[7] = [7, 2, 8];
          this.RoundEmenyConfig[8] = [7, 4, 10];
          this.RoundEmenyConfig[9] = [8, 8, 13];
        }

        createSingleRoundEmeny(currentRound) {
          let that = this; // for(let i=0;i<this.RoundEmenyConfig[currentRound-1][0];i++){
          //     let node = instantiate(this.EmenyNormal)
          //     node.layer = Layers.Enum.UI_2D;
          //     node.parent = find("Canvas/EmenyBox");
          //     node.setPosition(0,0,0);
          //     node.active = true;
          // }
          // for(let i=0;i<this.RoundEmenyConfig[currentRound-1][1];i++){
          //     let node = instantiate(this.EmenyQuickAttack)
          //     node.layer = Layers.Enum.UI_2D;
          //     node.setPosition(0,0,0);
          //     node.parent = find("Canvas/EmenyBox");
          // }

          resources.load("perfabs/Emeny1Perfabs", Prefab, (err, Prefab) => {
            if (!Prefab) {} else {
              for (let i = 0; i < that.RoundEmenyConfig[currentRound - 1][0]; i++) {
                let node = instantiate(Prefab);
                node.layer = Layers.Enum.UI_2D;
                node.setPosition(0, 0, 0);
                node.parent = find("Canvas/EmenyBox");
                node.active = true;
              } // let node = instantiate(Prefab);
              // node.layer = Layers.Enum.UI_2D;
              // node.setPosition(0,0,0);
              // node.parent = find("Canvas/EmenyBox");

            }
          });
          resources.load("perfabs/Emeny1Perfabs", Prefab, (err, Prefab) => {
            if (!Prefab) {} else {
              for (let i = 0; i < that.RoundEmenyConfig[currentRound - 1][0]; i++) {
                let node = instantiate(Prefab);
                node.layer = Layers.Enum.UI_2D;
                node.setPosition(0, 0, 0);
                node.parent = find("Canvas/EmenyBox");
                node.active = true;
              } // let node = instantiate(Prefab);
              // node.layer = Layers.Enum.UI_2D;
              // node.setPosition(0,0,0);
              // node.parent = find("Canvas/EmenyBox");

            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "EmenyNormal", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "EmenyQuickAttack", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roundTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      GlobalLivingClass = class GlobalLivingClass {
        constructor(LivingValue, DefendValue, HarmValue, AttackSpeed, CostPower, GradeValue, LivingType, UpdateCost) {
          this.LivingValue = void 0;
          this.DefendValue = void 0;
          this.HarmValue = void 0;
          this.AttackSpeed = void 0;
          this.CostPower = void 0;
          this.GradeValue = void 0;
          this.LivingType = void 0;
          this.UpdateCost = void 0;
          this.LivingValue = LivingValue;
          this.DefendValue = DefendValue;
          this.HarmValue = HarmValue;
          this.AttackSpeed = AttackSpeed;
          this.CostPower = CostPower;
          this.GradeValue = GradeValue;
          this.LivingType = LivingType;
          this.UpdateCost = UpdateCost;
        }

      };
      SanShePao = class SanShePao extends GlobalLivingClass {
        constructor() {
          //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型
          super(500, 0.05, 60, 3, 0.03, 1, 1, 60);
        }

        updateManeger() {
          if (this.GradeValue == 10) {
            error("已满级，不要偏心哦");
            return;
          } else {
            //提升生命值的5%
            this.LivingValue += this.LivingValue * 0.05; //提升防御值的5%

            this.DefendValue += this.DefendValue * 0.05; //提升伤害值的6%

            this.HarmValue += this.HarmValue * 0.06; //等级+1

            this.GradeValue += 1;
          }
        } //获取生命属性信息：生命值、防御值、伤害值、等级、升级损耗


        getLivingProperty() {
          let LivingPropertyObject = {
            "LivingValue": this.LivingValue,
            "DefendValue": this.DefendValue,
            "HarmValue": this.HarmValue,
            "GradeVale": this.GradeValue
          };
          return LivingPropertyObject;
        }

        getUpdateFrontInfo() {
          return this.UpdateCost;
        }

        getCreateFrontInfo() {
          return this.CostPower;
        }

      };
      ZhuiZongDan = class ZhuiZongDan extends GlobalLivingClass {
        constructor() {
          //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型;升级损耗
          super(600, 0.1, 80, 5, 0.05, 1, 2, 80);
        }

        updateManeger() {
          if (this.GradeValue == 10) {
            error("已满级，不要偏心哦");
            return;
          } else {
            //提升生命值的5%
            this.LivingValue += this.LivingValue * 0.03; //提升防御值的5%

            this.DefendValue += this.DefendValue * 0.04; //提升伤害值的6%

            this.HarmValue += this.HarmValue * 0.05; //等级+1

            this.GradeValue += 1;
          }
        } //获取生命属性信息：生命值、防御值、伤害值、等级


        getLivingProperty() {
          let LivingPropertyObject = {
            "LivingValue": this.LivingValue,
            "DefendValue": this.DefendValue,
            "HarmValue": this.HarmValue,
            "GradeVale": this.GradeValue
          };
          return LivingPropertyObject;
        }

        getUpdateFrontInfo() {
          return this.UpdateCost;
        }

        getCreateFrontInfo() {
          return this.CostPower;
        }

      };
      GuangZiJian = class GuangZiJian extends GlobalLivingClass {
        constructor() {
          //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型;升级损耗
          super(400, 0.3, 100, 2, 0.08, 1, 3, 100);
        }

        updateManeger() {
          if (this.GradeValue == 10) {
            error("已满级，不要偏心哦");
            return;
          } else {
            //提升生命值的5%
            this.LivingValue += this.LivingValue * 0.05; //提升防御值的5%

            this.DefendValue += this.DefendValue * 0.03; //提升伤害值的6%

            this.HarmValue += this.HarmValue * 0.05; //等级+1

            this.GradeValue += 1;
          }
        } //获取生命属性信息：生命值、防御值、伤害值、等级


        getLivingProperty() {
          let LivingPropertyObject = {
            "LivingValue": this.LivingValue,
            "DefendValue": this.DefendValue,
            "HarmValue": this.HarmValue,
            "GradeVale": this.GradeValue
          };
          return LivingPropertyObject;
        }

        getUpdateFrontInfo() {
          return this.UpdateCost;
        }

        getCreateFrontInfo() {
          return this.CostPower;
        }

      };
      EmenyNormal = class EmenyNormal extends GlobalLivingClass {
        constructor() {
          super(500, 0.08, 80, 4, 0, 1, 11, 0);
          this.forwardSpeed = void 0;
          this.forwardSpeed = 100;
        }

        updateManeger(roundTime) {
          let LivingUpdateRange = [0.01, 0.03];
          let DefendUpdateRange = [0.03, 0.1];
          let HarmUpdateRange = [0.05, 0.1];
          let LivingUpdateValue;
          let DefendUpdateValue;
          let HarmUpdateValue;
          let minRound = 2;
          let maxRound = 8;

          if (roundTime < minRound) {
            LivingUpdateValue = LivingUpdateRange[1];
            DefendUpdateValue = DefendUpdateRange[1];
            HarmUpdateValue = HarmUpdateRange[1];
          } else if (roundTime > maxRound) {
            LivingUpdateValue = LivingUpdateRange[0];
            DefendUpdateValue = DefendUpdateRange[0];
            HarmUpdateValue = HarmUpdateRange[0];
          } else {
            let livingRange = LivingUpdateRange[1] - LivingUpdateRange[0];
            let defendRange = DefendUpdateRange[1] - DefendUpdateRange[0];
            let harmRange = HarmUpdateRange[1] - HarmUpdateRange[0];
            let ratio = (roundTime - minRound) / (maxRound - minRound);
            LivingUpdateValue = ratio * livingRange + LivingUpdateRange[0];
            DefendUpdateValue = ratio * defendRange + DefendUpdateRange[0];
            HarmUpdateValue = ratio * harmRange + HarmUpdateRange[0];
          }

          this.LivingValue += this.LivingValue * LivingUpdateValue;
          this.DefendValue += this.DefendValue * DefendUpdateValue;
          this.HarmValue += this.HarmValue * HarmUpdateValue; //等级+1

          this.GradeValue += 1;
        }

      };
      EmenyQuickAttack = class EmenyQuickAttack extends GlobalLivingClass {
        constructor() {
          super(500, 0.05, 200, 0, 0, 1, 12, 0);
          this.forwardSpeed = void 0;
          this.forwardSpeed = 400;
        }

        updateManeger() {
          //每次调用就会直接增加
          this.HarmValue += 50;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b49449c8c41b834486b0f1260de52feab27b0341.js.map