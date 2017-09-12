/*! Built with http://stenciljs.com */
App.loadComponents("duz4cvh3",function(t,o,e,i,n){function r(t,o,e){var i={};return e.split(" ").reduce(function(e,i){return e[i]=!0,t&&(e[i+"-"+t]=!0,o&&(e[i+"-"+o]=!0,e[i+"-"+t+"-"+o]=!0)),e},i)}var p=function(t,o){var e=new t,i=new t;return i.addElement(o.querySelector(".popover-backdrop")),i.fromTo("opacity",.01,.08),e.addElement(o).easing("ease").duration(100).add(i)},s=function(t,o){var e=new t,i=new t;i.addElement(o.querySelector(".popover-backdrop"));var n=new t;return n.addElement(o.querySelector(".popover-wrapper")),n.fromTo("opacity",.99,0),i.fromTo("opacity",.08,0),e.addElement(o).easing("ease").duration(500).add(i).add(n)},h=function(){function t(){this.positioned=!1,this.componentProps={},this.enableBackdropDismiss=!0,this.showBackdrop=!0}return t.prototype.present=function(){var t=this;return new Promise(function(o){t._present(o)})},t.prototype.positionPopover=function(){var t=d[this.mode];console.debug("Position popover",this.el,this.ev,t);var o=this.el.querySelector(".popover-content"),e=this.el.querySelector(".popover-arrow");this.ev||(e.style.display="none");var i={y:"top",x:"left"},n={width:o.getBoundingClientRect().width,height:o.getBoundingClientRect().height},r={width:window.screen.width,height:window.screen.height},p=this.ev&&this.ev.target&&this.ev.target.getBoundingClientRect(),s={top:p&&"top"in p?p.top:r.height/2-n.height/2,left:p&&"left"in p?p.left:r.width/2-n.width/2,width:p&&p.width||0,height:p&&p.height||0};t.centerTarget&&(s.left=p&&"left"in p?p.left:r.width/2);var h=e.getBoundingClientRect(),a={width:h.width,height:h.height},l={top:s.top+s.height,left:s.left+s.width/2-a.width/2},c={top:s.top+s.height+(a.height-1),left:s.left};t.centerTarget&&(c.left=s.left+s.width/2-n.width/2),c.left<t.padding?c.left=t.padding:n.width+t.padding+c.left>r.width&&(c.left=r.width-n.width-t.padding,i.x="right"),this.showFromBottom(s,n,r)?(this.el.className=this.el.className+" popover-bottom",i.y="bottom",c.top=s.top-n.height,t.showArrow&&(l.top=s.top-(a.height+1),c.top=s.top-n.height-(a.height-1))):this.exceedsViewport(s,n,r)&&(o.style.bottom=t.padding+t.unit),e.style.top=l.top+"px",e.style.left=l.left+"px",o.style.top=c.top+"px",o.style.left=c.left+"px",o.style.transformOrigin=i.y+" "+i.x,this.positioned=!0},t.prototype.showFromBottom=function(t,o,e){return t.top+t.height+o.height>e.height&&t.top-o.height>0},t.prototype.exceedsViewport=function(t,o,e){return t.top+t.height+o.height>e.height},t.prototype._present=function(t){var o=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionPopoverWillPresent.emit({popover:this});var e=this.enterAnimation;e||(e=p),this.animationCtrl.create(e,this.el).then(function(e){o.animation=e,e.onFinish(function(e){e.destroy(),o.ionViewDidEnter(),o.positionPopover(),t()}).play()})},t.prototype.dismiss=function(){var t=this;return this.animation&&(this.animation.destroy(),this.animation=null),new Promise(function(o){t.ionPopoverWillDismiss.emit({popover:t});var e=t.exitAnimation;e||(e=s),t.animationCtrl.create(e,t.el).then(function(e){t.animation=e,e.onFinish(function(e){e.destroy(),t.ionPopoverDidDismiss.emit({popover:t}),i.dom.write(function(){t.el.parentNode.removeChild(t.el)}),o()}).play()})})},t.prototype.componentDidunload=function(){this.ionPopoverDidUnload.emit({popover:this})},t.prototype.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),this.dismiss()},t.prototype.componentDidLoad=function(){this.ionPopoverDidLoad.emit({popover:this})},t.prototype.ionViewDidEnter=function(){this.ionPopoverDidPresent.emit({popover:this})},t.prototype.backdropClick=function(){this.enableBackdropDismiss&&this.dismiss()},t.prototype.render=function(){var t=this.component,e=r(this.mode,this.color,"popover-wrapper"),i=this.positioned?{opacity:"1"}:{};return[o("ion-backdrop",{c:{"popover-backdrop":!0},o:{click:this.backdropClick.bind(this)}}),o("div",{c:e,s:i},o("div",{c:{"popover-arrow":!0}}),o("div",{c:{"popover-content":!0}},o("div",{c:{"popover-viewport":!0}},o(t,{p:this.componentProps,c:this.cssClass}))))]},t}(),d={ios:{padding:2,unit:"%",showArrow:!0,centerTarget:!0},md:{padding:12,unit:"px",showArrow:!1,centerTarget:!1},wp:{padding:12,unit:"px",showArrow:!1,centerTarget:!1}},a=function(){function t(){this.ids=0,this.popoverResolves={},this.popovers=[]}return t.prototype.create=function(t){var o=this,e=document.createElement("ion-popover"),i=this.ids++;return e.id="popover-"+i,e.style.zIndex=(1e4+i).toString(),Object.assign(e,t),(document.querySelector("ion-app")||document.body).appendChild(e),new Promise(function(t){o.popoverResolves[e.id]=t})},t.prototype.viewDidLoad=function(t){var o=t.detail.popover,e=this.popoverResolves[o.id];e&&(e(o),delete this.popoverResolves[o.id])},t.prototype.willPresent=function(t){this.popovers.push(t.detail.popover)},t.prototype.willDismiss=function(t){var o=this.popovers.indexOf(t.detail.popover);o>-1&&this.popovers.splice(o,1)},t.prototype.escapeKeyUp=function(){var t=this.popovers[this.popovers.length-1];t&&t.dismiss()},t}();t["ION-POPOVER"]=h,t["ION-POPOVER-CONTROLLER"]=a},["ION-POPOVER",[["animationCtrl",4,0,"ion-animation-controller"],["component",1],["componentProps",1],["config",3,0,"config"],["cssClass",1],["el",7],["enableBackdropDismiss",1,1],["enterAnimation",1],["ev",1],["exitAnimation",1],["id",1],["positioned",5],["showBackdrop",1,1]],{theme:"popover"},[["ionPopoverDidDismiss"],["ionPopoverDidLoad"],["ionPopoverDidPresent"],["ionPopoverDidUnload"],["ionPopoverWillDismiss"],["ionPopoverWillPresent"]]],["ION-POPOVER-CONTROLLER",[["create",6]]]);