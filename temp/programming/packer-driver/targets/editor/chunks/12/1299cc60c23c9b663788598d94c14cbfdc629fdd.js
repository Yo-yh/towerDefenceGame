System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, PhysicsSystem2D, Contact2DType, _dec, _class, _crd, ccclass, property, canvas;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2795+mymVB9rRjInsAY8i6", "canvas", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'director', 'PhysicsSystem2D', 'Contact2DType', 'Collider2D', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("canvas", canvas = (_dec = ccclass('canvas'), _dec(_class = class canvas extends Component {
        start() {
          const uiTransform = this.node.getComponent(UITransform);
          uiTransform.setAnchorPoint(0, 0);

          if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        update(deltaTime) {}

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          console.log('onBeginContact');
        }

        onEndContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体结束接触时被调用一次
          console.log('onEndContact');
        }

        onPreSolve(selfCollider, otherCollider, contact) {
          // 每次将要处理碰撞体接触逻辑时被调用
          console.log('onPreSolve');
        }

        onPostSolve(selfCollider, otherCollider, contact) {
          // 每次处理完碰撞体接触逻辑时被调用
          console.log('onPostSolve');
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1299cc60c23c9b663788598d94c14cbfdc629fdd.js.map