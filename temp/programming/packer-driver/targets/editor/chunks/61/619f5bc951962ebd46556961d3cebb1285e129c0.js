System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, resources, Scene, _dec, _class, _crd, ccclass, property, loadManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      resources = _cc.resources;
      Scene = _cc.Scene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca229P/B21K+be/7YZlTBWu", "loadManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Scene']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loadManeger", loadManeger = (_dec = ccclass('loadManeger'), _dec(_class = class loadManeger extends Component {
        // public cloudArrived = false;
        start() {
          if (this.node.name = "begin") {
            this.node.on(Node.EventType.MOUSE_DOWN, this.begin, this);
          }
        }

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
                // that.cloudArrived = true;
                that.node.parent.parent.getChildByName("begin").active = true;
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
              } else {// that.cloudArrived = true;
              }
            }, 1);
          }
        }

        begin() {
          resources.load("scene/scene", Scene, (err, Scene) => {});
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=619f5bc951962ebd46556961d3cebb1285e129c0.js.map