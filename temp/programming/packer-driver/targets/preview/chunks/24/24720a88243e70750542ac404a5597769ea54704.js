System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, instantiate, resources, Prefab, Layers, _dec, _class, _crd, ccclass, property, diji;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      instantiate = _cc.instantiate;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      Layers = _cc.Layers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88b6ddza6xHgJ3C0peQ2cgl", "diji", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'IPhysics2DContact', 'instantiate', 'resources', 'Prefab', 'Layers', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("diji", diji = (_dec = ccclass('diji'), _dec(_class = class diji extends Component {
        constructor() {
          super(...arguments);
          this.bulletArray = [];
          this.hasEmeny = true;
          this.targetArray = null;
        }

        start() {
          var that = this;
          this.schedule(function () {
            if (this.hasEmeny) {
              console.log('createBullet');
              that.createBullet();
            }
          }, 2);
          console.log('emeny information');
          var collider = this.node.getComponent(Collider2D); // console.log(collider);

          console.log(collider);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        onLoad() {
          // director.enable = true;
          //绘制物理信息
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        }

        update(deltaTime) {
          var node = this.node;
          var y = node.position.y;
          var x = node.position.x;
          x = x + 40 * deltaTime;
          y = y - 10 * deltaTime;
          node.setPosition(x, y, 0);

          for (var i = 0; i < this.bulletArray.length; i++) {
            var bulletNode = this.bulletArray[i];
            var _y = bulletNode.position.y;
            var _x = bulletNode.position.x; // let distanceX = this.bulletArray[0].x - x;
            // let distanceY = this.bulletArray[0].y - y;
            // let cosx = 500 * distanceX

            _x = _x + 500 * deltaTime;
            _y = _y - 500 * deltaTime;
            bulletNode.setPosition(_x, _y, 0); //TODO:出屏幕后销毁
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          this.hasEmeny = true; // this.targetArray.push(otherCollider.node.position)
          // console.log("maybe a information about position",otherCollider.node.position)
          // console.log('I am emeny onBeginContact');
        }

        onEndContact(selfCollider, otherCollider, contact) {// 只在两个碰撞体结束接触时被调用一次
          // console.log('Work onEndContact');
        }

        onPreSolve(selfCollider, otherCollider, contact) {// 每次将要处理碰撞体接触逻辑时被调用
          // console.log('Work onPreSolve');
        }

        onPostSolve(selfCollider, otherCollider, contact) {
          // 每次处理完碰撞体接触逻辑时被调用
          console.log('Work onPostSolve');
        }

        createBullet() {
          // let node = new Node();
          // node.addComponent(Sprite);
          var that = this;
          resources.load("perfabs/Bullet_Pre", Prefab, (err, Prefab) => {
            if (!Prefab) {
              console.log('子弹预制体为空');
            } else {
              console.log('预制体制作完成');
              var node = instantiate(Prefab);

              if (!node) {
                console.log('没有节点');
              } else {
                // console.log(node)
                // let pos = new Vec2();
                node.layer = Layers.Enum.UI_2D;
                var x = that.node.position.x + 400;
                var y = that.node.position.x + 225; // let shit = pos.set(x,y)
                // x = shit.x - 800;                   
                // y = shit.y - 450;

                console.log(x, y);
                node.setPosition(0, 0, 0);
                that.node.addChild(node);
                that.bulletArray.push(node);
              }
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24720a88243e70750542ac404a5597769ea54704.js.map