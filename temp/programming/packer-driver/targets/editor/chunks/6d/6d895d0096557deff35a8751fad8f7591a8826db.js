System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, middleManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b672Pge4FH5bTOf97Wx25G", "middleManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("middleManeger", middleManeger = (_dec = ccclass('middleManeger'), _dec(_class = class middleManeger extends Component {
        constructor(...args) {
          super(...args);
          this.cloudArrived = false;
        }

        start() {}

        update(deltaTime) {
          if (this.node.parent.name == "left") {
            let that = this;
            this.schedule(function () {
              let x = that.node.position.x;
              let y = that.node.position.y;

              if (x < 0 && x + 50 > 0) {
                that.node.setPosition(0, y, 0);
              } else if (x < 0) {
                x = x + 50 * deltaTime;
                that.node.setPosition(x, y, 0);
              } else {
                that.cloudArrived = true;
              }
            }, 1);
          }

          if (this.node.parent.name == "right") {
            let that = this;
            this.schedule(function () {
              let x = that.node.position.x;
              let y = that.node.position.y; // if(x>0 && x-50>0){
              //     that.node.setPosition(0,y,0)
              // }else 

              if (x > 0) {
                x = x - 50 * deltaTime;
                that.node.setPosition(x, y, 0);
              } else {
                that.cloudArrived = true;
              }
            }, 1);
          }

          if (this.node.name == "next") {
            if (this.cloudArrived && this.node) {
              this.node.active = true;
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d895d0096557deff35a8751fad8f7591a8826db.js.map