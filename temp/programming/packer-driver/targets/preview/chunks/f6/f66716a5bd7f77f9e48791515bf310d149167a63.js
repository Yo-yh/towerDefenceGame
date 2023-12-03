System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, SpriteFrame, resources, Layers, Vec2, _dec, _class, _crd, ccclass, property, pao;

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
      Layers = _cc.Layers;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8f66oyEjZOnLxBtCNLLol1", "pao", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'resources', 'director', 'Layers', 'Scene', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("pao", pao = (_dec = ccclass('pao'), _dec(_class = class pao extends Component {
        start() {
          //TODO：需要将该点击监听独立为一个函数，被多个道具节点所调用。
          this.node.on(Node.EventType.MOUSE_UP, event => {
            //判断是否已经存在文字框，避免重复创建文字框组件;
            if (this.node.parent.parent.getChildByName('infoBox')) {
              //TODO：当当前显示的内容为其他道具时，需要动态渲染文字框内的内容。
              //TODO: 当前显示的内容为本道具时，销毁文字框。
              console.log('文字框节点已存在，正在销毁');
              this.node.parent.parent.getChildByName('infoBox').destroy();
            } else {
              console.log('Mouse down');
              var node = new Node('infoBox');
              node.addComponent(Sprite); // node.getComponent(Sprite).spriteFrame = new SpriteFrame(url.raw("resources/game/wenzikuang"))

              node.setPosition(-500, 10, 0);
              resources.load('wenzikuang/spriteFrame', SpriteFrame, (_err, spriteFrame) => {
                node.getComponent(Sprite).spriteFrame = spriteFrame; //在cocos3x版本中，layer默认为default，node.layer = Layers.Enum.UI_2D；
                //2d摄像头可见的是UI_2D和UI_3D

                node.layer = Layers.Enum.UI_2D;
                console.log(node);
                console.log('文字框创建成功');
              }); // director.getScene().addChild(node);
              // this.node.addChild(node);
            }
          }, this);
          this.node.on(Node.EventType.TOUCH_MOVE, event => {
            console.log('正在拖动');

            if (this.node.parent.parent.parent.getChildByName('pao1')) {
              // console.log('炮节点已存在，正在移动')
              //event.touch._point获得的鼠标位置是相对画布左下角的，而当前的锚点是在正中心
              //TODO：增加防抖操作
              console.log(event.touch._point.x); //触摸点的世界坐标

              var pos = new Vec2(event.getLocationX(), event.getLocationY()); //转换为UI作表

              pos = this.node.convertToNodeSpaceAR(pos);
              var x = event.touch._point['x'] - 450;
              var y = event.touch._point['y'] - 800;
              this.node.parent.parent.parent.getChildByName('pao1').setPosition(x, y, 0); // this.node.parent.parent.getChildByName('pao1').destroy();
            } else {
              //TODO:同时使用多个炮的时候可能会造成冲突
              var node = new Node('pao1');
              node.addComponent(Sprite);
              resources.load('pao/spriteFrame', SpriteFrame, (_err, spriteFrame) => {
                node.getComponent(Sprite).spriteFrame = spriteFrame; //在cocos3x版本中，layer默认为default，node.layer = Layers.Enum.UI_2D；
                //2d摄像头可见的是UI_2D和UI_3D

                node.layer = Layers.Enum.UI_2D; // node.setPosition(event.touch.point.x)
                // console.log(node);
                // console.log(event.touch._point.x);

                console.log('炮创建成功');
              }); //放在战斗组，目前还没定义战斗组，所有放在顶层；

              node.parent = this.node.parent.parent.parent;
              var _x = event.touch._point['x'];
              var _y = event.touch._point['y'];
              node.setPosition(_x, _y, 0);
            }
          }, this);
        }

        onload() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f66716a5bd7f77f9e48791515bf310d149167a63.js.map