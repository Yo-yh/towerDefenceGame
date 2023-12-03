System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, infoManeger, _dec, _class, _class2, _descriptor, _crd, ccclass, property, selectToolManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinfoManeger(extras) {
    _reporterNs.report("infoManeger", "./infoManeger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      find = _cc.find;
    }, function (_unresolved_2) {
      infoManeger = _unresolved_2.infoManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c772fUcHlO0JkJwKwUQtoq", "selectToolManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'resources', 'SpriteFrame', 'Layers', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("selectToolManeger", selectToolManeger = (_dec = ccclass('selectToolManeger'), _dec(_class = (_class2 = class selectToolManeger extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tooltype", _descriptor, this);
        }

        start() {
          this.node.on(Node.EventType.MOUSE_UP, event => {
            find("Canvas/infobox").getComponent(_crd && infoManeger === void 0 ? (_reportPossibleCrUseOfinfoManeger({
              error: Error()
            }), infoManeger) : infoManeger).setInfoBox(this.tooltype); //判断是否已经存在文字框，避免重复创建文字框组件;
            // if (find("Canvas/infobox").getChildByName('infoBoxsub')){
            //     //TODO：当当前显示的内容为其他道具时，需要动态渲染文字框内的内容。
            //     //TODO: 当前显示的内容为本道具时，销毁文字框。
            //     console.log('文字框节点已存在，正在销毁')
            //     find("Canvas/infobox").getChildByName('infoBoxsub').destroy();
            // }else{
            //     console.log('Mouse down');
            //     let node = new Node('infoBoxsub');
            //     node.addComponent(Sprite);
            //     // node.getComponent(Sprite).spriteFrame = new SpriteFrame(url.raw("resources/game/wenzikuang"))
            //     node.setPosition(0,10,0);
            //     resources.load('wenzikuang/spriteFrame',SpriteFrame,(_err,spriteFrame)=>{
            //         node.getComponent(Sprite).spriteFrame = spriteFrame;
            //         //在cocos3x版本中，layer默认为default，node.layer = Layers.Enum.UI_2D；
            //         //2d摄像头可见的是UI_2D和UI_3D
            //         node.layer = Layers.Enum.UI_2D;
            //         console.log(node);
            //         console.log('文字框创建成功');
            //     })
            //     // director.getScene().addChild(node);
            //     // node.parent=this.node.parent.parent;
            //     node.parent = find("Canvas/infobox")
            //     // this.node.addChild(node);
            // }
          }, this);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tooltype", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=79f36377fca1c458a31fe5bc1398ac486d812eff.js.map