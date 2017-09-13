/*! Built with http://stenciljs.com */
App.loadComponents("pbdepqdg",function(t,e,i,n,s){var o=function(){function t(){this._init=!1,this._isPane=!1,this.isOpen=!1,this.isAnimating=!1,this.isRightSide=!1,this.side="start",this.persistent=!1}return t.prototype.swipeEnabledChange=function(t){this.swipeEnable(t)},t.prototype.componentDidLoad=function(){var t=this;if(this._backdropElm=this.el.querySelector(".menu-backdrop"),this._init=!0,this.content&&(this.content.tagName?this._cntElm=this.content:"string"==typeof this.content&&(this._cntElm=document.querySelector(this.content))),!this._cntElm||!this._cntElm.tagName)return console.error('Menu: must have a "content" element to listen for drag events on.');this._cntElm.classList.add("menu-content"),this._cntElm.classList.add("menu-content-"+this.type);var e=this.enabled;!0!==e&&void 0!==e||(e=!this._ctrl.getMenus().some(function(e){return e.side===t.side&&e.enabled})),this._ctrl._register(this),this.enable(e)},t.prototype.hostData=function(){return{attrs:{role:"navigation",side:this.side,type:this.type},class:{"menu-enabled":this.enabled}}},t.prototype.render=function(){return this.type||(this.type=this.config.get("menuType","overlay")),[e("div",{c:{"menu-inner":!0}},e(0,0)),e("ion-gesture",{p:{gestureName:"menu-swipe",gesturePriority:10,type:"pan",direction:"x",threshold:5,attachTo:"body",disableScroll:!0,block:this._activeBlock},c:{"menu-backdrop":!0}})]},t.prototype.onBackdropClick=function(t){t.preventDefault(),t.stopPropagation(),this._ctrl.close()},t.prototype._getType=function(){return this._type||(this._type=this._ctrl.create(this.type,this),!1===this.config.getBoolean("animate")&&this._type.ani.duration(0)),this._type},t.prototype.setOpen=function(t,e){var i=this;return void 0===e&&(e=!0),t===this.isOpen||!this._canOpen()||this.isAnimating?Promise.resolve(this.isOpen):new Promise(function(n){i._before(),i._getType().setOpen(t,e,function(){i._after(t),n(i.isOpen)})})},t.prototype._forceClosing=function(){var t=this;this.isAnimating=!0,this._getType().setOpen(!1,!1,function(){t._after(!1)})},t.prototype.canSwipe=function(){return this.swipeEnabled&&!this.isAnimating&&this._canOpen()},t.prototype._swipeBeforeStart=function(){this.canSwipe()&&this._before()},t.prototype._swipeStart=function(){this.isAnimating&&this._getType().setProgressStart(this.isOpen)},t.prototype._swipeProgress=function(t){this.isAnimating&&(this._getType().setProgessStep(t),this.ionDrag.emit({menu:this}))},t.prototype._swipeEnd=function(t,e,i,n){var s=this;if(this.isAnimating){var o=this.isRightSide,r=!this.isOpen?o?t:e:o?e:t;this._getType().setProgressEnd(r,i,n,function(t){console.debug("menu, swipeEnd",s.side),s._after(t)})}},t.prototype._before=function(){this.el.classList.add("show-menu"),this._backdropElm.classList.add("show-backdrop"),this.resize(),this.isAnimating=!0},t.prototype._after=function(t){var e=this;this.isOpen=t,this.isAnimating=!1,this._backdropClick(t),t?(this._activeBlock=r,n.dom.write(function(){e._cntElm.classList.add("menu-content-open")}),this.ionOpen.emit({menu:this})):(this._activeBlock=null,n.dom.write(function(){e._cntElm.classList.remove("menu-content-open"),e._cntElm.classList.remove("show-menu"),e._backdropElm.classList.remove("show-menu")}),this.ionClose.emit({menu:this}))},t.prototype.open=function(){return this.setOpen(!0)},t.prototype.close=function(){return this.setOpen(!1)},t.prototype.resize=function(){},t.prototype.toggle=function(){return this.setOpen(!this.isOpen)},t.prototype._canOpen=function(){return this.enabled&&!this._isPane},t.prototype._updateState=function(){!this._canOpen()&&this.isOpen&&this._forceClosing(),this.enabled&&this._ctrl&&this._ctrl._setActiveMenu(this),this._init&&(this.isOpen||this._isPane&&this.enabled)&&this.resize()},t.prototype.enable=function(t){return this.enabled=t,this._updateState(),this},t.prototype.initPane=function(){return!1},t.prototype.paneChanged=function(t){this._isPane=t,this._updateState()},t.prototype.swipeEnable=function(t){return this.swipeEnabled=t,this._updateState(),this},t.prototype.getMenuElement=function(){return this.el.querySelector(".menu-inner")},t.prototype.getContentElement=function(){return this._cntElm},t.prototype.getBackdropElement=function(){return this._backdropElm},t.prototype.width=function(){return this.getMenuElement().offsetWidth},t.prototype.getMenuController=function(){return this._ctrl},t.prototype._backdropClick=function(t){var e=this.onBackdropClick.bind(this);t&&!this._unregBdClick?(this._unregBdClick=n.addListener(this._cntElm,"click",e,{capture:!0}),this._unregCntClick=n.addListener(this._cntElm,"click",e,{capture:!0})):!t&&this._unregBdClick&&(this._unregBdClick(),this._unregCntClick(),this._unregBdClick=this._unregCntClick=null)},t.prototype.componentDidunload=function(){this._backdropClick(!1),this._ctrl._unregister(this),this._type&&this._type.destroy(),this._ctrl=this._type=this._cntElm=this._backdropElm=null},t}(),r="goback-swipe";t["ION-MENU"]=o},["ION-MENU",[["config",3,0,"config"],["content",1],["el",7],["enabled",1,1],["id",1],["isAnimating",1,1],["isOpen",1,1],["maxEdgeStart",1,2],["persistent",1,1],["side",1],["swipeEnabled",1,1],["type",1]],{theme:"menu"},[["ionClose"],["ionDrag"],["ionOpen"]],0,[["swipeEnabled","swipeEnabledChange"]]]);