(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{rJsh:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),a=t("ZZ/e"),o=function(l,n,t,e){return new(t||(t=Promise))(function(a,o){function i(l){try{u(e.next(l))}catch(n){o(n)}}function r(l){try{u(e.throw(l))}catch(n){o(n)}}function u(l){l.done?a(l.value):new t(function(n){n(l.value)}).then(i,r)}u((e=e.apply(l,n||[])).next())})},i=function(l,n){var t,e,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,e&&(a=2&o[0]?e.return:o[0]?e.throw||((a=e.return)&&a.call(e),0):e.next)&&!(a=a.call(e,o[1])).done)return a;switch(e=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,e=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(l,i)}catch(r){o=[6,r],e=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},r=function(){function l(l,n){this.route=l,this.alertController=n,this.colorVariants=[],this.sizeVariants=[],this.slidesOptions={zoom:{toggle:!1}}}return Object.defineProperty(l.prototype,"isShell",{get:function(){return!(!this.details||!this.details.isShell)},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){var l=this;this.route.data.subscribe(function(n){n.data.state.subscribe(function(n){l.details=n,l.colorVariants=l.details.colorVariants.map(function(l){return{name:l.name,type:"radio",label:l.name,value:l.value,checked:l.default}}),l.sizeVariants=l.details.sizeVariants.map(function(l){return{name:l.name,type:"radio",label:l.name,value:l.value,checked:l.default}})},function(l){})},function(l){})},l.prototype.openColorChooser=function(){return o(this,void 0,void 0,function(){return i(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"Color",inputs:this.colorVariants,cssClass:"variant-alert color-chooser",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"OK",handler:function(){console.log("Confirm Ok")}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},l.prototype.openSizeChooser=function(){return o(this,void 0,void 0,function(){return i(this,function(l){switch(l.label){case 0:return[4,this.alertController.create({header:"Size",inputs:this.sizeVariants,cssClass:"variant-alert size-chooser",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"OK",handler:function(l){console.log("Selected Value",l)}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},l}(),u=t("/pNQ"),s=function(){function l(l){this.fashionService=l}return l.prototype.resolve=function(){var l=this.fashionService.getDetailsDataSource();return this.fashionService.getDetailsStore(l)},l}(),c=s,d=function(){return function(){}}(),p=t("pMnS"),g=t("oBZk"),b=t("6LEC"),h=t("Ip0R"),m=t("2gss"),f=t("M4wD"),C=t("B7gC"),O=t("TAV1"),P=t("zK/y"),x=t("ZYCi"),M=e.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-fair-margin);--page-background:var(--app-background);--page-swiper-pagination-space:30px;--page-swiper-pagination-height:18px;--page-pagination-bullet-size:10px;--page-options-gutter:calc(var(--page-margin) / 2);--page-related-items-gutter:calc(var(--page-margin) / 2);--page-color:#cb328f}.fashion-details-content[_ngcontent-%COMP%]{--background:var(--page-background)}.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]{--bullet-background:var(--ion-color-dark-tint);--bullet-background-active:var(--ion-color-dark-tint);height:100%;width:100%}.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .details-slides[_ngcontent-%COMP%]   .slide-inner-row[_ngcontent-%COMP%]{height:100%;width:100%;padding:0;padding-bottom:var(--page-swiper-pagination-space)}.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .showcase-image[_ngcontent-%COMP%]{width:100%}.fashion-details-content[_ngcontent-%COMP%]   .slider-row[_ngcontent-%COMP%]   .showcase-image.centered-image[_ngcontent-%COMP%]{background-size:auto;background-position:center}.fashion-details-content[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]{padding:var(--page-margin) var(--page-margin) 0}.fashion-details-content[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]   .details-name[_ngcontent-%COMP%]{font-size:18px;font-weight:500;margin:0 0 5px}.fashion-details-content[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]   .details-brand[_ngcontent-%COMP%]{display:block;text-transform:uppercase;font-size:14px;font-weight:400;margin:0 0 var(--page-margin)}.fashion-details-content[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]   .details-price[_ngcontent-%COMP%]{font-size:18px;font-weight:500;margin:0;color:var(--page-color);display:inline-block}.fashion-details-content[_ngcontent-%COMP%]   .description-wrapper[_ngcontent-%COMP%]   .details-sale-price[_ngcontent-%COMP%]{color:var(--ion-color-medium-shade);text-decoration:line-through;display:inline-block;margin-left:var(--page-margin);font-size:14px}.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]{--ion-grid-column-padding:var(--page-options-gutter);padding-top:0;padding-left:calc(var(--page-margin) - var(--page-options-gutter));padding-right:calc(var(--page-margin) - var(--page-options-gutter));padding-bottom:calc(var(--page-margin) * 2)}.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .aux-action-col[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-top:0;padding-bottom:0}.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .aux-action-col[_ngcontent-%COMP%]   .size-chart-btn[_ngcontent-%COMP%]{margin:0;height:25px}.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .main-call-to-action-col[_ngcontent-%COMP%]{padding-bottom:0}.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .select-variant-btn[_ngcontent-%COMP%]{margin:0}.fashion-details-content[_ngcontent-%COMP%]   .details-purchase-options-row[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]{margin:0;margin-top:var(--page-margin)}.fashion-details-content[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:var(--ion-color-dark-tint);margin:0;margin-bottom:calc(var(--page-margin)/ 2)}.fashion-details-content[_ngcontent-%COMP%]   .details-description-wrapper[_ngcontent-%COMP%]{padding-top:0;padding-left:var(--page-margin);padding-right:var(--page-margin);padding-bottom:calc(var(--page-margin) * 2)}.fashion-details-content[_ngcontent-%COMP%]   .details-description-wrapper[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%]{margin:0;line-height:1.3;font-size:14px;color:var(--ion-color-medium-shade)}.fashion-details-content[_ngcontent-%COMP%]   .detail-alt-title[_ngcontent-%COMP%]{text-align:center;font-size:18px;font-weight:400;text-transform:uppercase;color:var(--ion-color-dark-shade);margin:0;margin-bottom:var(--page-margin)}.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]{padding-top:0;padding-left:var(--page-margin);padding-right:var(--page-margin);padding-bottom:calc(var(--page-margin) * 2)}.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]{margin-bottom:calc(var(--page-margin) * 2)}.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]:nth-child(odd){padding-right:var(--page-related-items-gutter)}.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]:nth-child(even){padding-left:var(--page-related-items-gutter)}.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-image-wrapper[_ngcontent-%COMP%]{border:1px solid var(--ion-color-light-shade)}.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-image-wrapper[_ngcontent-%COMP%]   .image-anchor[_ngcontent-%COMP%]{display:block}.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-details-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:5px 5px 0}.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]{margin:0;margin-bottom:calc(var(--page-margin)/ 2);font-size:14px;font-weight:400;text-align:center;min-width:90%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%]{color:var(--ion-color-dark-tint);display:block;text-decoration:none}.fashion-details-content[_ngcontent-%COMP%]   .related-products-wrapper[_ngcontent-%COMP%]   .related-products-list[_ngcontent-%COMP%]   .related-product-item[_ngcontent-%COMP%]   .item-sale-price[_ngcontent-%COMP%]{display:block;font-weight:400;color:var(--page-color);font-size:16px;text-align:center;min-width:30%}[_nghost-%COMP%]     .details-slides .swiper-pagination{height:var(--page-swiper-pagination-height);line-height:1;bottom:calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height))/ 2)}[_nghost-%COMP%]     .details-slides .swiper-pagination .swiper-pagination-bullet{width:var(--page-pagination-bullet-size);height:var(--page-pagination-bullet-size)}  .variant-alert{--select-alert-color:#000;--select-alert-background:#FFF;--select-alert-margin:16px;--select-alert-color:var(--ion-color-lightest);--select-alert-background:var(--ion-color-primary);--select-alert-margin:var(--app-fair-margin)}  .variant-alert .alert-head{padding-top:calc((var(--select-alert-margin)/ 4) * 3);padding-bottom:calc((var(--select-alert-margin)/ 4) * 3);-webkit-padding-start:var(--select-alert-margin);padding-inline-start:var(--select-alert-margin);-webkit-padding-end:var(--select-alert-margin);padding-inline-end:var(--select-alert-margin)}  .variant-alert .alert-title{color:var(--select-alert-color)}  .variant-alert .alert-head,   .variant-alert .alert-message{background-color:var(--select-alert-background)}  .variant-alert .alert-wrapper.sc-ion-alert-ios .alert-title{margin:0}  .variant-alert .alert-wrapper.sc-ion-alert-md .alert-title{font-size:18px;font-weight:400}  .variant-alert .alert-wrapper.sc-ion-alert-md .alert-button{--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}  .variant-alert .alert-message{display:none}"],["[_nghost-%COMP%]{--shell-color:#cb328f;--shell-color-rgb:203,50,143}app-image-shell.showcase-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb), .10);--image-shell-spinner-color:rgba(var(--shell-color-rgb), .25)}.details-name[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-animation-background:rgba(var(--shell-color-rgb), .25);--text-shell-animation-color:rgba(var(--shell-color-rgb), .35);--text-shell-line-height:18px;max-width:60%}.details-name[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.details-brand[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-animation-background:rgba(var(--shell-color-rgb), .20);--text-shell-animation-color:rgba(var(--shell-color-rgb), .30);--text-shell-line-height:14px;max-width:40%}.details-brand[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.details-price[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-animation-background:rgba(var(--shell-color-rgb), .10);--text-shell-animation-color:rgba(var(--shell-color-rgb), .20);--text-shell-line-height:18px;width:50px}.details-price[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{width:inherit}.details-sale-price[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-animation-background:rgba(var(--shell-color-rgb), .10);--text-shell-animation-color:rgba(var(--shell-color-rgb), .20);--text-shell-line-height:18px;width:50px}.details-sale-price[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{width:inherit}.details-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-animation-background:rgba(var(--shell-color-rgb), .10);--text-shell-animation-color:rgba(var(--shell-color-rgb), .20);--text-shell-line-height:14px}.details-description.product-code[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{max-width:40%}.details-description.product-code[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}app-image-shell.related-product-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb), .10);--image-shell-spinner-color:rgba(var(--shell-color-rgb), .25)}.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-animation-background:rgba(var(--shell-color-rgb), .25);--text-shell-animation-color:rgba(var(--shell-color-rgb), .35);--text-shell-line-height:14px}.item-sale-price[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-animation-background:rgba(var(--shell-color-rgb), .20);--text-shell-animation-color:rgba(var(--shell-color-rgb), .30);--text-shell-line-height:16px}"],[""],[""]],data:{}});function v(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,10,"ion-slide",[["class",""]],null,null,null,g.Hb,g.L)),e.pb(1,49152,null,0,a.pb,[e.h,e.k],null,null),(l()(),e.qb(2,0,null,0,8,"ion-row",[["class","slide-inner-row"]],null,null,null,g.Bb,g.F)),e.pb(3,49152,null,0,a.ib,[e.h,e.k],null,null),(l()(),e.qb(4,0,null,0,6,"app-image-shell",[["animation","spinner"],["class","showcase-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"mode",0]],null,null,b.b,b.a)),e.pb(5,278528,null,0,h.k,[e.s,e.t,e.k,e.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Db(6,{"centered-image":0,"fill-image":1}),e.pb(7,49152,null,0,m.a,[e.B],{mode:[0,"mode"],src:[1,"src"]},null),(l()(),e.qb(8,0,null,0,2,"app-aspect-ratio",[],[[4,"padding",null]],null,null,f.b,f.a)),e.pb(9,49152,null,0,C.a,[],{ratio:[0,"ratio"]},null),e.Db(10,{w:0,h:1})],function(l,n){var t=l(n,6,0,"square"===n.context.$implicit.type,"fill"===n.context.$implicit.type);l(n,5,0,"showcase-image",t),l(n,7,0,"cover",n.context.$implicit.source);var e=l(n,10,0,64,50);l(n,9,0,e)},function(l,n){l(n,4,0,e.Ab(n,7).imageLoaded,e.Ab(n,7).backgroundImage,e.Ab(n,7).mode),l(n,8,0,e.Ab(n,9).ratioPadding)})}function _(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,17,"ion-col",[["class","related-product-item"],["size","6"]],null,null,null,g.hb,g.l)),e.pb(1,49152,null,0,a.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(2,0,null,0,6,"div",[["class","item-image-wrapper"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,5,"a",[["class","image-anchor"]],null,null,null,null,null)),(l()(),e.qb(4,0,null,null,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,f.b,f.a)),e.pb(5,49152,null,0,C.a,[],{ratio:[0,"ratio"]},null),e.Db(6,{w:0,h:1}),(l()(),e.qb(7,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","related-product-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"mode",0]],null,null,b.b,b.a)),e.pb(8,49152,null,0,m.a,[e.B],{src:[0,"src"],alt:[1,"alt"]},null),(l()(),e.qb(9,0,null,0,8,"div",[["class","item-details-wrapper"]],null,null,null,null,null)),(l()(),e.qb(10,0,null,null,3,"h4",[["class","item-name"]],null,null,null,null,null)),(l()(),e.qb(11,0,null,null,2,"a",[["class","name-anchor"]],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,1,"app-text-shell",[["animation","gradient"]],[[2,"text-loaded",null]],null,null,O.b,O.a)),e.pb(13,49152,null,0,P.a,[],{data:[0,"data"]},null),(l()(),e.qb(14,0,null,null,3,"span",[["class","item-sale-price"]],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,2,"app-text-shell",[["animation","gradient"]],[[2,"text-loaded",null]],null,null,O.b,O.a)),e.pb(16,49152,null,0,P.a,[],{data:[0,"data"]},null),e.Eb(17,1)],function(l,n){l(n,1,0,"6");var t=l(n,6,0,3,4);l(n,5,0,t),l(n,8,0,n.context.$implicit.image,"related image"),l(n,13,0,n.context.$implicit.name);var a=e.Jb(n,16,0,l(n,17,0,e.Ab(n.parent.parent,0),n.context.$implicit.salePrice));l(n,16,0,a)},function(l,n){l(n,4,0,e.Ab(n,5).ratioPadding),l(n,7,0,e.Ab(n,8).imageLoaded,e.Ab(n,8).backgroundImage,e.Ab(n,8).mode),l(n,12,0,e.Ab(n,13).textLoaded),l(n,15,0,e.Ab(n,16).textLoaded)})}function w(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,6,"div",[["class","related-products-wrapper"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"h3",[["class","detail-alt-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Why Don't you try?"])),(l()(),e.qb(3,0,null,null,3,"ion-row",[["class","related-products-list"]],null,null,null,g.Bb,g.F)),e.pb(4,49152,null,0,a.ib,[e.h,e.k],null,null),(l()(),e.hb(16777216,null,0,1,null,_)),e.pb(6,278528,null,0,h.l,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,6,0,null==t.details?null:t.details.relatedProducts)},null)}function k(l){return e.Kb(0,[e.Cb(0,h.d,[e.u]),(l()(),e.qb(1,0,null,null,11,"ion-header",[],null,null,null,g.kb,g.o)),e.pb(2,49152,null,0,a.B,[e.h,e.k],null,null),(l()(),e.qb(3,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,g.Rb,g.V)),e.pb(4,49152,null,0,a.Bb,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.qb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,g.ab,g.e)),e.pb(6,49152,null,0,a.l,[e.h,e.k],null,null),(l()(),e.qb(7,0,null,0,2,"ion-back-button",[["defaultHref","app/categories/fashion"]],null,[[null,"click"]],function(l,n,t){var a=!0;return"click"===n&&(a=!1!==e.Ab(l,9).onClick(t)&&a),a},g.X,g.b)),e.pb(8,49152,null,0,a.g,[e.h,e.k],{defaultHref:[0,"defaultHref"]},null),e.pb(9,16384,null,0,a.h,[[2,a.hb],a.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),e.qb(10,0,null,0,2,"ion-title",[],null,null,null,g.Pb,g.T)),e.pb(11,49152,null,0,a.zb,[e.h,e.k],null,null),(l()(),e.Ib(-1,0,["Fashion Details"])),(l()(),e.qb(13,0,null,null,64,"ion-content",[["class","fashion-details-content"]],null,null,null,g.ib,g.m)),e.pb(14,49152,null,0,a.u,[e.h,e.k],null,null),(l()(),e.qb(15,0,null,0,5,"ion-row",[["class","slider-row"]],null,null,null,g.Bb,g.F)),e.pb(16,49152,null,0,a.ib,[e.h,e.k],null,null),(l()(),e.qb(17,0,null,0,3,"ion-slides",[["class","details-slides"],["pager","true"]],null,null,null,g.Ib,g.M)),e.pb(18,49152,null,0,a.qb,[e.h,e.k],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),e.hb(16777216,null,0,1,null,v)),e.pb(20,278528,null,0,h.l,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(21,0,null,0,14,"div",[["class","description-wrapper"]],null,null,null,null,null)),(l()(),e.qb(22,0,null,null,2,"h3",[["class","details-name"]],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,1,"app-text-shell",[["animation","gradient"]],[[2,"text-loaded",null]],null,null,O.b,O.a)),e.pb(24,49152,null,0,P.a,[],{data:[0,"data"]},null),(l()(),e.qb(25,0,null,null,2,"span",[["class","details-brand"]],null,null,null,null,null)),(l()(),e.qb(26,0,null,null,1,"app-text-shell",[["animation","gradient"]],[[2,"text-loaded",null]],null,null,O.b,O.a)),e.pb(27,49152,null,0,P.a,[],{data:[0,"data"]},null),(l()(),e.qb(28,0,null,null,3,"span",[["class","details-price"]],null,null,null,null,null)),(l()(),e.qb(29,0,null,null,2,"app-text-shell",[["animation","gradient"]],[[2,"text-loaded",null]],null,null,O.b,O.a)),e.pb(30,49152,null,0,P.a,[],{data:[0,"data"]},null),e.Eb(31,1),(l()(),e.qb(32,0,null,null,3,"span",[["class","details-sale-price"]],null,null,null,null,null)),(l()(),e.qb(33,0,null,null,2,"app-text-shell",[["animation","gradient"]],[[2,"text-loaded",null]],null,null,O.b,O.a)),e.pb(34,49152,null,0,P.a,[],{data:[0,"data"]},null),e.Eb(35,1),(l()(),e.qb(36,0,null,0,21,"ion-row",[["class","details-purchase-options-row"]],null,null,null,g.Bb,g.F)),e.pb(37,49152,null,0,a.ib,[e.h,e.k],null,null),(l()(),e.qb(38,0,null,0,4,"ion-col",[["class","aux-action-col"],["size","12"]],null,null,null,g.hb,g.l)),e.pb(39,49152,null,0,a.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(40,0,null,0,2,"ion-button",[["class","size-chart-btn"],["color","medium"],["fill","clear"],["size","small"]],null,null,null,g.Z,g.d)),e.pb(41,49152,null,0,a.k,[e.h,e.k],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),e.Ib(-1,0,["Size Chart"])),(l()(),e.qb(43,0,null,0,4,"ion-col",[["size","6"]],null,null,null,g.hb,g.l)),e.pb(44,49152,null,0,a.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(45,0,null,0,2,"ion-button",[["class","select-variant-btn"],["color","medium"],["expand","block"],["fill","outline"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openColorChooser()&&e),e},g.Z,g.d)),e.pb(46,49152,null,0,a.k,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),e.Ib(-1,0,["Color"])),(l()(),e.qb(48,0,null,0,4,"ion-col",[["size","6"]],null,null,null,g.hb,g.l)),e.pb(49,49152,null,0,a.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(50,0,null,0,2,"ion-button",[["class","select-variant-btn"],["color","medium"],["expand","block"],["fill","outline"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openSizeChooser()&&e),e},g.Z,g.d)),e.pb(51,49152,null,0,a.k,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),e.Ib(-1,0,["Size"])),(l()(),e.qb(53,0,null,0,4,"ion-col",[["class","main-call-to-action-col"],["size","12"]],null,null,null,g.hb,g.l)),e.pb(54,49152,null,0,a.t,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(55,0,null,0,2,"ion-button",[["class","add-to-cart-btn"],["color","dark"],["expand","block"],["fill","solid"]],null,null,null,g.Z,g.d)),e.pb(56,49152,null,0,a.k,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),e.Ib(-1,0,["Add to cart"])),(l()(),e.qb(58,0,null,0,5,"div",[["class","details-description-wrapper"]],null,null,null,null,null)),(l()(),e.qb(59,0,null,null,1,"h3",[["class","detail-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["About me"])),(l()(),e.qb(61,0,null,null,2,"p",[["class","details-description"]],null,null,null,null,null)),(l()(),e.qb(62,0,null,null,1,"app-text-shell",[["animation","gradient"],["lines","5"]],[[2,"text-loaded",null]],null,null,O.b,O.a)),e.pb(63,49152,null,0,P.a,[],{data:[0,"data"]},null),(l()(),e.qb(64,0,null,0,5,"div",[["class","details-description-wrapper"]],null,null,null,null,null)),(l()(),e.qb(65,0,null,null,1,"h3",[["class","detail-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Looking after me"])),(l()(),e.qb(67,0,null,null,2,"p",[["class","details-description"]],null,null,null,null,null)),(l()(),e.qb(68,0,null,null,1,"app-text-shell",[["animation","gradient"],["lines","3"]],[[2,"text-loaded",null]],null,null,O.b,O.a)),e.pb(69,49152,null,0,P.a,[],{data:[0,"data"]},null),(l()(),e.qb(70,0,null,0,5,"div",[["class","details-description-wrapper"]],null,null,null,null,null)),(l()(),e.qb(71,0,null,null,1,"h3",[["class","detail-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Product code"])),(l()(),e.qb(73,0,null,null,2,"span",[["class","details-description product-code"]],null,null,null,null,null)),(l()(),e.qb(74,0,null,null,1,"app-text-shell",[["animation","gradient"]],[[2,"text-loaded",null]],null,null,O.b,O.a)),e.pb(75,49152,null,0,P.a,[],{data:[0,"data"]},null),(l()(),e.hb(16777216,null,0,1,null,w)),e.pb(77,16384,null,0,h.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,4,0,"primary"),l(n,8,0,"app/categories/fashion"),l(n,9,0,"app/categories/fashion"),l(n,18,0,t.slidesOptions,"true"),l(n,20,0,null==t.details?null:t.details.showcaseImages),l(n,24,0,null==t.details?null:t.details.name),l(n,27,0,null==t.details?null:t.details.brand);var a=e.Jb(n,30,0,l(n,31,0,e.Ab(n,0),null==t.details?null:t.details.price));l(n,30,0,a);var o=e.Jb(n,34,0,l(n,35,0,e.Ab(n,0),null==t.details?null:t.details.salePrice));l(n,34,0,o),l(n,39,0,"12"),l(n,41,0,"medium","clear","small"),l(n,44,0,"6"),l(n,46,0,"medium","block","outline"),l(n,49,0,"6"),l(n,51,0,"medium","block","outline"),l(n,54,0,"12"),l(n,56,0,"dark","block","solid"),l(n,63,0,null==t.details?null:t.details.description),l(n,69,0,null==t.details?null:t.details.careInstructions),l(n,75,0,null==t.details?null:t.details.upc),l(n,77,0,(null==t.details?null:t.details.relatedProducts)&&t.details.relatedProducts.length>0)},function(l,n){l(n,23,0,e.Ab(n,24).textLoaded),l(n,26,0,e.Ab(n,27).textLoaded),l(n,29,0,e.Ab(n,30).textLoaded),l(n,33,0,e.Ab(n,34).textLoaded),l(n,62,0,e.Ab(n,63).textLoaded),l(n,68,0,e.Ab(n,69).textLoaded),l(n,74,0,e.Ab(n,75).textLoaded)})}function y(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-fashion-details",[],[[2,"is-shell",null]],null,null,k,M)),e.pb(1,114688,null,0,r,[x.a,a.a],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,e.Ab(n,1).isShell)})}var q=e.mb("app-fashion-details",r,y,{},{},[]),z=t("gIcY"),A=t("t/Na"),I=t("ZpN7"),S=t("Kt/9"),L=t("j1ZV");t.d(n,"FashionDetailsPageModuleNgFactory",function(){return F});var F=e.nb(d,[],function(l){return e.xb([e.yb(512,e.j,e.bb,[[8,[p.a,q]],[3,e.j],e.x]),e.yb(4608,h.o,h.n,[e.u,[2,h.x]]),e.yb(4608,z.t,z.t,[]),e.yb(4608,a.b,a.b,[e.z,e.g]),e.yb(4608,a.Hb,a.Hb,[a.b,e.j,e.q,h.e]),e.yb(4608,a.Jb,a.Jb,[a.b,e.j,e.q,h.e]),e.yb(4608,A.h,A.n,[h.e,e.B,A.l]),e.yb(4608,A.o,A.o,[A.h,A.m]),e.yb(5120,A.a,function(l){return[l]},[A.o]),e.yb(4608,A.k,A.k,[]),e.yb(6144,A.i,null,[A.k]),e.yb(4608,A.g,A.g,[A.i]),e.yb(6144,A.b,null,[A.g]),e.yb(4608,A.f,A.j,[A.b,e.q]),e.yb(4608,A.c,A.c,[A.f]),e.yb(5120,e.d,function(l,n,t,e,o){return[a.Pb(l,n),I.b(t),a.Pb(e,o)]},[a.Ob,h.e,S.a,a.Ob,h.e]),e.yb(4608,u.a,u.a,[A.c]),e.yb(4608,s,s,[u.a]),e.yb(1073742336,h.c,h.c,[]),e.yb(1073742336,z.r,z.r,[]),e.yb(1073742336,z.h,z.h,[]),e.yb(1073742336,a.Db,a.Db,[]),e.yb(1073742336,x.p,x.p,[[2,x.v],[2,x.m]]),e.yb(1073742336,A.e,A.e,[]),e.yb(1073742336,A.d,A.d,[]),e.yb(1073742336,I.a,I.a,[]),e.yb(1073742336,L.a,L.a,[]),e.yb(1073742336,d,d,[]),e.yb(256,A.l,"XSRF-TOKEN",[]),e.yb(256,A.m,"X-XSRF-TOKEN",[]),e.yb(256,a.Ob,void 0,[]),e.yb(1024,x.k,function(){return[[{path:"",component:r,resolve:{data:c}}]]},[])])})}}]);