/*! Built with http://stenciljs.com */
App.loadComponents("xkzlyvlq",function(e,t,c,i,o){var h=function(){function e(){this.checked=!1,this.disabled=!1}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e}),this.emitStyle()},e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.emitStyle=function(){var e=this;clearTimeout(this.styleTmr),this.styleTmr=setTimeout(function(){e.ionStyle.emit({"checkbox-disabled":e.disabled,"checkbox-checked":e.checked})})},e.prototype.onSpace=function(e){this.toggle(),e.stopPropagation(),e.preventDefault()},e.prototype.toggle=function(){this.checked=!this.checked},e.prototype.hostData=function(){return{class:{"checkbox-checked":this.checked,"checkbox-disabled":this.disabled}}},e.prototype.render=function(){var e=this,c={"checkbox-icon":!0,"checkbox-checked":this.checked};return[t("div",{c:c},t("div",{c:{"checkbox-inner":!0}})),t("button",{c:{"checkbox-cover":!0},o:{click:function(){return e.toggle()}},a:{"aria-checked":!!this.checked&&"true","aria-disabled":!!this.disabled&&"true","aria-labelledby":this.labelId,role:"checkbox"},p:{id:this.id,tabIndex:0}})]},e}();e["ION-CHECKBOX"]=h},["ION-CHECKBOX",[["checked",1,1],["disabled",1,1],["value",1]],{theme:"checkbox"},[["ionChange"],["ionStyle"]],0,[["checked","checkedChanged"],["disabled","disabledChanged"]]]);