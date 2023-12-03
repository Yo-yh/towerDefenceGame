System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, resources, Prefab, instantiate, Layers, find, _dec, _class, _crd, ccclass, property, createFengManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Layers = _cc.Layers;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14658IFmYFBOqbs6Hj3EVLC", "createFengManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Prefab', 'instantiate', 'Layers', 'find', 'random']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("createFengManeger", createFengManeger = (_dec = ccclass('createFengManeger'), _dec(_class = class createFengManeger extends Component {
        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, this.addFeng, this);
        }

        update(deltaTime) {}

        addFeng() {
          this.createFeng();
        }

        createFeng() {
          let that = this;

          if (this.node.parent.name == "createComponent") {
            resources.load("perfabs/FengYiPerfabs", Prefab, (err, Prefab) => {
              if (!Prefab) {// console.log('子弹预制体为空')
              } else {
                let node = instantiate(Prefab);
                node.layer = Layers.Enum.UI_2D;
                let num = this.randomNum(-50, 50);
                node.setPosition(0, -num, 0);
                node.parent = find("Canvas/FengBox");
              }
            });
          }

          if (this.node.parent.name == "createComponentR") {
            resources.load("perfabs/FengYiPerfabs", Prefab, (err, Prefab) => {
              if (!Prefab) {// console.log('子弹预制体为空')
              } else {
                let node = instantiate(Prefab);
                node.layer = Layers.Enum.UI_2D;
                node.setScale(-1, 1, 1);
                let num = this.randomNum(-50, 50);
                node.setPosition(100, -num, 0);
                node.parent = find("Canvas/FengBox");
              }
            });
          }
        }

        randomNum(lower, upper) {
          return Math.floor(Math.random() * (upper - lower)) + lower;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dc6a18d3bebe367f0121acae4e15986d014191e1.js.map