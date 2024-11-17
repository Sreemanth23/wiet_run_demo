System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, AudioSource, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0c43eZ3s6NDaJ2vSe1wZhYL", "AudioManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AudioManager = exports('AudioManager', (_dec = ccclass("AudioManager"), _dec2 = property(AudioClip), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioManager, _Component);
        function AudioManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "clips", _descriptor, _assertThisInitialized(_this));
          _this.audioSource_ = new AudioSource();
          return _this;
        }
        var _proto = AudioManager.prototype;
        /*Note
          0 - coin Sound
          1 - button click
          2 - GameOver
          3 - die
          4 - Jump
          6 -obstacle
          6 - next Level
          */
        _proto.playAudio = function playAudio(audioName) {
          this.audioSource_.playOneShot(this.clips[audioName], 1);
        };
        return AudioManager;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "clips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Camara.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "9db95+q/SxA0JYzbXl/bn52", "Camara", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Camara = exports('Camara', (_dec = ccclass("Camara"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Camara, _Component);
        function Camara() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Player_Node", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topBar", _descriptor2, _assertThisInitialized(_this));
          _this.gameOver = false;
          return _this;
        }
        var _proto = Camara.prototype;
        _proto.update = function update(deltaTime) {
          if (!this.gameOver && this.Player_Node.position.x >= 0 && this.Player_Node.position.x <= 18240) {
            var targetPosition = this.Player_Node.getPosition();
            targetPosition.y = Math.min(Math.max(targetPosition.y, 0), 220);
            var currentPosition = this.node.getPosition();
            currentPosition.lerp(targetPosition, 0.1);
            this.node.setPosition(currentPosition);
            this.topBar.setPosition(currentPosition);
          }
        };
        return Camara;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Player_Node", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "topBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ColliderManger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameManager.ts', './PlayerControl.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Collider2D, Contact2DType, UIOpacity, Sprite, Color, BoxCollider2D, RigidBody2D, Component, GameManager, PlayerControl, AudioManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      Color = module.Color;
      BoxCollider2D = module.BoxCollider2D;
      RigidBody2D = module.RigidBody2D;
      Component = module.Component;
    }, function (module) {
      GameManager = module.GameManager;
    }, function (module) {
      PlayerControl = module.PlayerControl;
    }, function (module) {
      AudioManager = module.AudioManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "54dd4TTBJBKurzutIKN/A6o", "ColliderManger", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ColliderManger = exports('ColliderManger', (_dec = ccclass("ColliderManger"), _dec2 = property(GameManager), _dec3 = property(AudioManager), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ColliderManger, _Component);
        function ColliderManger() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "gameManager", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "audioManager", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Health", _descriptor3, _assertThisInitialized(_this));
          _this.healthCount = 5;
          return _this;
        }
        var _proto = ColliderManger.prototype;
        _proto.start = function start() {
          var collider = this.node.getComponent(Collider2D);
          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        };
        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          var other_Collider = otherCollider.node;
          switch (other_Collider.name) {
            case "coin":
              this.handleCoinCollision(other_Collider);
              break;
            case "Saw":
              this.handleSawCollision(selfCollider);
              break;
            case "Base":
              this.handleBaseCollision();
              break;
          }
        };
        _proto.handleCoinCollision = function handleCoinCollision(other_Collider) {
          if (other_Collider.getComponent(UIOpacity).opacity == 255) {
            this.audioManager.playAudio(0);
            other_Collider.getComponent(UIOpacity).opacity = 0;
            this.gameManager.coinCount++;
          }
        };
        _proto.handleSawCollision = function handleSawCollision(selfCollider) {
          var _this2 = this;
          this.audioManager.playAudio(5);
          this.Health.children[this.healthCount - 1].getComponent(Sprite).color = Color.WHITE;
          this.schedule(function () {
            if (_this2.node.getComponent(UIOpacity).opacity == 255) {
              _this2.node.getComponent(UIOpacity).opacity = 0;
            }
            _this2.scheduleOnce(function () {
              _this2.node.getComponent(UIOpacity).opacity = 255;
            }, 0.2);
          }, 0.5, 2, 0);
          this.healthCount--;
          if (this.healthCount == 0) {
            selfCollider.enabled = false;
            this.audioManager.playAudio(3);
            this.gameManager.gameOver();
          }
        };
        _proto.handleBaseCollision = function handleBaseCollision() {
          this.node.getComponent(PlayerControl).onTheGround = true;
        };
        _proto.onEndContact = function onEndContact(selfCollider, otherCollider, contact) {
          var other_Collider = otherCollider.node;
          if (other_Collider.name == "WallColliderEnd") {
            var otherCollider_parent = other_Collider.parent;
            if (otherCollider_parent.getSiblingIndex() == 1) {
              otherCollider_parent.children[2].getComponent(BoxCollider2D).group = 2;
              otherCollider_parent.children[2].getComponent(RigidBody2D).group = 2;
              otherCollider_parent.children[2].getComponent(Sprite).enabled = true;
              this.gameManager.activeBG = true;
            }
          }
        };
        return ColliderManger;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Health", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ObjectPool.ts', './Camara.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Label, Node, PhysicsSystem2D, director, BoxCollider2D, RigidBody2D, Sprite, Vec3, Component, ObjectPool, Camara, AudioManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Label = module.Label;
      Node = module.Node;
      PhysicsSystem2D = module.PhysicsSystem2D;
      director = module.director;
      BoxCollider2D = module.BoxCollider2D;
      RigidBody2D = module.RigidBody2D;
      Sprite = module.Sprite;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      ObjectPool = module.ObjectPool;
    }, function (module) {
      Camara = module.Camara;
    }, function (module) {
      AudioManager = module.AudioManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "69e0c+Eh8FKZ78YT45ScQWC", "GameManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameManager = exports('GameManager', (_dec = ccclass("GameManager"), _dec2 = property(AudioManager), _dec3 = property(Prefab), _dec4 = property(ObjectPool), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameManager, _Component);
        function GameManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "audioManager", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "base", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "objectPool", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "groundObjects", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "trees", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scores", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "camera", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameOverScreen", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nextLevelScreen", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "player_Node", _descriptor10, _assertThisInitialized(_this));
          _this.platformCount = 0;
          _this.count = 0;
          _this.coinCount = 0;
          _this.activeBG = false;
          return _this;
        }
        var _proto = GameManager.prototype;
        _proto.onLoad = function onLoad() {
          PhysicsSystem2D.instance.enable = true;
          director.preloadScene("MainScean");
          director.preloadScene("MainMenu");
          this.objectPool.prefabObjects = [this.base, this.groundObjects[0], this.groundObjects[1], this.groundObjects[2], this.groundObjects[3], this.trees[0], this.trees[1], this.trees[2]];
          this.objectPool.initPool(); // Call initPool to set up the pools
          for (var i = 0; i < 3; i++) {
            this.generateBg();
            if (i == 0) {
              this.node.children[i].children[2].getComponent(BoxCollider2D).group = 2;
              this.node.children[i].children[2].getComponent(RigidBody2D).group = 2;
              this.node.children[i].children[2].getComponent(Sprite).enabled = true;
            }
          }
        };
        _proto.generateBg = function generateBg() {
          var basePosition = new Vec3(this.platformCount * 1917, 0);
          this.createObject(this.base, this.node, basePosition);
          if (this.count >= 3) {
            this.count = 2;
          }
          this.generateTrees(this.node.children[this.count].children[1].getChildByName("ObjectsPlacement"));
          this.generateObjects(this.node.children[this.count].children[1].getChildByName("ObjectsPlacement"));
          if (this.platformCount <= 3) {
            this.count++;
          }
          this.platformCount++;
        };
        _proto.createObject = function createObject(prefab, parent, position) {
          this.objectPool.addPool(prefab, parent, position);
        };
        _proto.resetGame = function resetGame() {
          this.objectPool.reset();
        };
        _proto.generateBaseFromPool = function generateBaseFromPool() {
          this.node.children[0].children[2].getComponent(BoxCollider2D).group = 0;
          this.node.children[0].children[2].getComponent(RigidBody2D).group = 0;
          this.node.children[0].children[2].getComponent(Sprite).enabled = false;
          this.node.children[0].children[1].getChildByName("ObjectsPlacement").destroyAllChildren();
          this.objectPool.returnToPool(this.node.children[0]);
          this.generateBg();
          this.activeBG = false;
        };
        _proto.generateTrees = function generateTrees(bg) {
          var randomTree = this.trees[Math.floor(Math.random() * this.trees.length)];
          this.createObject(randomTree, bg, new Vec3(0, 0, 0));
        };
        _proto.generateObjects = function generateObjects(bg) {
          var _this2 = this;
          var objectMappings = {
            0: [{
              object: this.groundObjects[1],
              position: new Vec3(0, -80.66, 0)
            }, {
              object: this.groundObjects[2],
              position: new Vec3(0, -106.406, 0)
            }],
            1: [{
              object: this.groundObjects[0],
              position: new Vec3(0, -129.224, 0)
            }, {
              object: this.groundObjects[2],
              position: new Vec3(0, -106.406, 0)
            }],
            2: [{
              object: this.groundObjects[3],
              position: new Vec3(0, -143.582, 0)
            }, {
              object: this.groundObjects[1],
              position: new Vec3(0, -80.66, 0)
            }]
          };
          var randomNumber = Math.floor(Math.random() * 3);
          objectMappings[randomNumber].forEach(function (mapping) {
            _this2.createObject(mapping.object, bg, mapping.position);
          });
        };
        _proto.gameOver = function gameOver() {
          this.audioManager.playAudio(3);
          this.camera.getComponent(Camara).gameOver = true;
          this.camera.setPosition(0, 0, 0);
          this.gameOverScreen.active = true;
          this.gameOverScreen.children[3].getComponent(Label).string = "SCORE : " + this.coinCount.toString();
        };
        _proto.update = function update(deltaTime) {
          this.scores.string = this.coinCount.toString();
          if (this.activeBG) {
            this.generateBaseFromPool();
          }
          if (this.player_Node.position.x >= 19000) {
            this.audioManager.playAudio(6);
            this.nextRound();
          }
        };
        _proto.nextRound = function nextRound() {
          this.nextLevelScreen.active = true;
          this.camera.getComponent(Camara).gameOver = true;
          this.camera.setPosition(0, 0, 0);
        };
        _proto.restart = function restart() {
          this.audioManager.playAudio(1);
          director.loadScene("MainScean");
        };
        _proto.home = function home() {
          this.audioManager.playAudio(1);
          director.loadScene("MainMenu");
        };
        return GameManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "base", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "objectPool", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "groundObjects", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "trees", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scores", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameOverScreen", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nextLevelScreen", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "player_Node", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './AudioManager.ts', './Camara.ts', './ColliderManger.ts', './GameManager.ts', './MainMenu.ts', './ObjectPool.ts', './PlayerControl.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "381b6znWCNMKZYswYkprenD", "MainMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MainMenu = exports('MainMenu', (_dec = ccclass("MainMenu"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainMenu, _Component);
        function MainMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Instructions", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MainMenu.prototype;
        _proto.onLoad = function onLoad() {
          director.preloadScene("MainScean");
        };
        _proto.play = function play() {
          director.loadScene("MainScean");
        };
        _proto.help = function help() {
          this.Instructions.active = true;
        };
        _proto.close = function close() {
          this.Instructions.active = false;
        };
        return MainMenu;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Instructions", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ObjectPool.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, NodePool, instantiate, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "9fad2wlHlBNApQ6JBpaAzj6", "ObjectPool", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ObjectPool = exports('ObjectPool', (_dec = ccclass("ObjectPool"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ObjectPool, _Component);
        function ObjectPool() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.prefabObjects = [];
          _this.pools = {};
          return _this;
        }
        var _proto = ObjectPool.prototype;
        _proto.initPool = function initPool() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.prefabObjects), _step; !(_step = _iterator()).done;) {
            var prefab = _step.value;
            var pool = new NodePool();
            this.pools[prefab.name] = pool;
            var initCount = 3;
            for (var i = 0; i < initCount; i++) {
              var createObject = instantiate(prefab);
              pool.put(createObject);
            }
          }
        };
        _proto.addPool = function addPool(prefab, parentNode, position) {
          var prefabName = prefab.name;
          if (!this.pools[prefabName]) {
            console.error("Pool for prefab " + prefabName + " does not exist.");
            return;
          }
          var createObject;
          if (this.pools[prefabName].size() > 0) {
            createObject = this.pools[prefabName].get();
          } else {
            createObject = instantiate(prefab);
          }
          parentNode.addChild(createObject);
          createObject.setPosition(position);
          createObject.active = true;
        };
        _proto.returnToPool = function returnToPool(object) {
          var prefabName = object.name;
          object.active = false;
          object.parent = null;
          this.pools[prefabName].put(object);
        };
        _proto.reset = function reset() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.prefabObjects), _step2; !(_step2 = _iterator2()).done;) {
            var prefab = _step2.value;
            var pool = this.pools[prefab.name];
            if (pool) {
              pool.clear();
            }
          }
        };
        return ObjectPool;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayerControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, RigidBody2D, input, Input, KeyCode, v2, Animation, Vec2, Component, AudioManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RigidBody2D = module.RigidBody2D;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      v2 = module.v2;
      Animation = module.Animation;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      AudioManager = module.AudioManager;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "60cc1of8/ZIZoYWFrY6FAYH", "PlayerControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PlayerControl = exports('PlayerControl', (_dec = ccclass("PlayerControl"), _dec2 = property(AudioManager), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerControl, _Component);
        function PlayerControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "audioManager", _descriptor, _assertThisInitialized(_this));
          _this.rigidBody = null;
          _this.direction = 0;
          _this.onTheGround = false;
          _this.velocityX = 20;
          _this.walkForce = 150;
          _this.jumpForce = 12000;
          return _this;
        }
        var _proto = PlayerControl.prototype;
        _proto.start = function start() {
          this.rigidBody = this.node.getComponent(RigidBody2D);
          input.on(Input.EventType.KEY_DOWN, this.onKeyPressed, this);
          input.on(Input.EventType.KEY_UP, this.onKeyReleased, this);
        };
        _proto.onKeyPressed = function onKeyPressed(event) {
          var key_code = event.keyCode;
          switch (key_code) {
            case KeyCode.ARROW_LEFT:
              this.direction = -1;
              break;
            case KeyCode.ARROW_RIGHT:
              this.direction = 1;
              break;
            case KeyCode.ARROW_UP:
              if (this.onTheGround) {
                this.audioManager.playAudio(4);
                this.rigidBody.applyForceToCenter(v2(0, this.jumpForce), true);
                this.onTheGround = false;
              }
              break;
          }
        };
        _proto.update = function update(dt) {
          if (this.direction > 0 && this.rigidBody.linearVelocity.x < this.velocityX || this.direction < 0 && this.rigidBody.linearVelocity.x > -this.velocityX) {
            this.rigidBody.applyForceToCenter(v2(this.direction * this.walkForce, 0), true);
          }
          if (this.direction < 0) {
            this.node.children[0].setScale(-1, 1);
            this.node.children[0].getComponent(Animation).crossFade("run");
          }
          if (this.direction > 0) {
            this.node.children[0].setScale(1, 1);
            this.node.children[0].getComponent(Animation).crossFade("run");
          }
          if (this.direction == 0) {
            this.node.children[0].getComponent(Animation).crossFade("idealBlink");
          }
        };
        _proto.onKeyReleased = function onKeyReleased(event) {
          var key_code = event.keyCode;
          switch (key_code) {
            case KeyCode.ARROW_LEFT:
              this.direction = 0;
              this.rigidBody.applyForceToCenter(Vec2.ZERO, false);
              this.node.getComponent(RigidBody2D).linearVelocity = new Vec2(1, 0);
              break;
            case KeyCode.ARROW_RIGHT:
              this.direction = 0;
              this.rigidBody.applyForceToCenter(Vec2.ZERO, false);
              this.node.getComponent(RigidBody2D).linearVelocity = new Vec2(-1, 0);
              break;
          }
        };
        return PlayerControl;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});