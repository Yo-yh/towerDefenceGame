System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, SpriteFrame, resources, _dec, _class, _crd, ccclass, property, pao;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8f66oyEjZOnLxBtCNLLol1", "pao", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'resources', 'sp', 'spriteAssembler']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("pao", pao = (_dec = ccclass('pao'), _dec(_class = class pao extends Component {
        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, event => {
            console.log('Mouse down');
            var node = new Node('infoBox');
            node.addComponent(Sprite); // node.getComponent(Sprite).spriteFrame = new SpriteFrame(url.raw("resources/game/wenzikuang"))

            node.parent = this.node;
            node.setPosition(0, 0, 0);
            resources.load('wenzikuang', SpriteFrame, (err, spriteFrame) => {
              node.getComponent(Sprite).spriteFrame = spriteFrame;
              console.log('文字框创建成功');
            });
          }, this);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b43e4791df88063b4f5b0598396e9ccbe6bb7e05.js.map