"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[5262],{5262:(P,l,n)=>{n.r(l),n.d(l,{RippleModule:()=>k});var p=n(3238),s=n(6083),d=n(2851),c=n(6806),t=n(4650),g=n(4006),b=n(2802),h=n(8213),u=n(4607),f=n(7096);const C=[{path:"",component:(()=>{class a{constructor(){this.pageHeaderInfo={title:"\u6c34\u6ce2\u7eb9",breadcrumb:["\u9996\u9875","\u529f\u80fd","\u6c34\u6ce2\u7eb9"]},this.centered=!1,this.disabled=!1,this.unbounded=!1,this.radius=0,this.color="red"}ngOnInit(){}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-ripple"]],decls:15,vars:14,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nz-checkbox","",3,"ngModel","ngModelChange"],[3,"ngModel","nzMin","ngModelChange"],[1,"m-t-8",3,"colorPicker","colorPickerChange"],["matRipple","",1,"center","m-t-10","hand-model",2,"height","400px","box-shadow","inset 0 0 5px rgba(0, 0, 0, 0.2)",3,"matRippleCentered","matRippleDisabled","matRippleUnbounded","matRippleRadius","matRippleColor"],[1,"sp-28"]],template:function(r,e){1&r&&(t._UZ(0,"app-page-header",0),t.TgZ(1,"div",1)(2,"nz-card")(3,"div")(4,"label",2),t.NdJ("ngModelChange",function(o){return e.centered=o}),t._uU(5,"centered"),t.qZA(),t.TgZ(6,"label",2),t.NdJ("ngModelChange",function(o){return e.disabled=o}),t._uU(7,"disabled"),t.qZA(),t.TgZ(8,"label",2),t.NdJ("ngModelChange",function(o){return e.unbounded=o}),t._uU(9,"unbounded"),t.qZA(),t.TgZ(10,"nz-input-number",3),t.NdJ("ngModelChange",function(o){return e.radius=o}),t.qZA(),t.TgZ(11,"input",4),t.NdJ("colorPickerChange",function(o){return e.color=o}),t.qZA()(),t.TgZ(12,"div",5)(13,"span",6),t._uU(14,"\u70b9\u51fb"),t.qZA()()()()),2&r&&(t.Q6J("pageHeaderInfo",e.pageHeaderInfo),t.xp6(4),t.Q6J("ngModel",e.centered),t.xp6(2),t.Q6J("ngModel",e.disabled),t.xp6(2),t.Q6J("ngModel",e.unbounded),t.xp6(2),t.Q6J("ngModel",e.radius)("nzMin",0),t.xp6(1),t.Udp("background",e.color),t.Q6J("colorPicker",e.color),t.xp6(1),t.Q6J("matRippleCentered",e.centered)("matRippleDisabled",e.disabled)("matRippleUnbounded",e.unbounded)("matRippleRadius",e.radius)("matRippleColor",e.color))},dependencies:[g.JJ,g.On,b.q,h.Ie,u.bd,f._V,p.wG,d.Kk],styles:["[_nghost-%COMP%]     .mat-ripple{overflow:hidden;position:relative}[_nghost-%COMP%]     .mat-ripple:not(:empty){transform:translateZ(0)}[_nghost-%COMP%]     .mat-ripple.mat-ripple-unbounded{overflow:visible}[_nghost-%COMP%]     .mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);transform:scale(0)}[_nghost-%COMP%]     .cdk-high-contrast-active .mat-ripple-element{display:none}[_nghost-%COMP%]     .mat-ripple-element{background-color:#0000001a}[_nghost-%COMP%]     .mat-button .mat-ripple-element, [_nghost-%COMP%]     .mat-icon-button .mat-ripple-element, [_nghost-%COMP%]     .mat-stroked-button .mat-ripple-element{opacity:.1;background-color:currentColor}[_nghost-%COMP%]     .mat-flat-button.mat-primary .mat-ripple-element, [_nghost-%COMP%]     .mat-raised-button.mat-primary .mat-ripple-element, [_nghost-%COMP%]     .mat-fab.mat-primary .mat-ripple-element, [_nghost-%COMP%]     .mat-mini-fab.mat-primary .mat-ripple-element{background-color:#ffffff1a}[_nghost-%COMP%]     .mat-flat-button.mat-accent .mat-ripple-element, [_nghost-%COMP%]     .mat-raised-button.mat-accent .mat-ripple-element, [_nghost-%COMP%]     .mat-fab.mat-accent .mat-ripple-element, [_nghost-%COMP%]     .mat-mini-fab.mat-accent .mat-ripple-element{background-color:#ffffff1a}[_nghost-%COMP%]     .mat-flat-button.mat-warn .mat-ripple-element, [_nghost-%COMP%]     .mat-raised-button.mat-warn .mat-ripple-element, [_nghost-%COMP%]     .mat-fab.mat-warn .mat-ripple-element, [_nghost-%COMP%]     .mat-mini-fab.mat-warn .mat-ripple-element{background-color:#ffffff1a}[_nghost-%COMP%]     .mat-checkbox .mat-ripple-element{background-color:#000}[_nghost-%COMP%]     .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element, [_nghost-%COMP%]     .mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element{background:#3f51b5}[_nghost-%COMP%]     .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element, [_nghost-%COMP%]     .mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element{background:#ff4081}[_nghost-%COMP%]     .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element, [_nghost-%COMP%]     .mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element{background:#f44336}[_nghost-%COMP%]     .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element{background-color:#ffffff1a}[_nghost-%COMP%]     .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element{background-color:#ffffff1a}[_nghost-%COMP%]     .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element{background-color:#ffffff1a}[_nghost-%COMP%]     .mat-form-field-ripple{background-color:#000000de}[_nghost-%COMP%]     .mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}[_nghost-%COMP%]     .mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}[_nghost-%COMP%]     .mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}[_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-ripple, [_nghost-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}[_nghost-%COMP%]     .mat-radio-button.mat-primary .mat-radio-inner-circle, [_nghost-%COMP%]     .mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), [_nghost-%COMP%]     .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple, [_nghost-%COMP%]     .mat-radio-button.mat-primary:active .mat-radio-persistent-ripple{background-color:#3f51b5}[_nghost-%COMP%]     .mat-radio-button.mat-accent .mat-radio-inner-circle, [_nghost-%COMP%]     .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), [_nghost-%COMP%]     .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple, [_nghost-%COMP%]     .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple{background-color:#ff4081}[_nghost-%COMP%]     .mat-radio-button.mat-warn .mat-radio-inner-circle, [_nghost-%COMP%]     .mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), [_nghost-%COMP%]     .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple, [_nghost-%COMP%]     .mat-radio-button.mat-warn:active .mat-radio-persistent-ripple{background-color:#f44336}[_nghost-%COMP%]     .mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, [_nghost-%COMP%]     .mat-radio-button.mat-radio-disabled .mat-radio-inner-circle{background-color:#00000061}[_nghost-%COMP%]     .mat-radio-button .mat-ripple-element{background-color:#000}[_nghost-%COMP%]     .mat-slide-toggle.mat-checked .mat-ripple-element{background-color:#ff4081}[_nghost-%COMP%]     .mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element{background-color:#3f51b5}[_nghost-%COMP%]     .mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element{background-color:#f44336}[_nghost-%COMP%]     .mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:#000}[_nghost-%COMP%]     .mat-tab-group.mat-background-primary>.mat-tab-header .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-group.mat-background-primary>.mat-tab-link-container .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-group.mat-background-primary>.mat-tab-header-pagination .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-nav-bar.mat-background-primary>.mat-tab-header .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-nav-bar.mat-background-primary>.mat-tab-link-container .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-nav-bar.mat-background-primary>.mat-tab-header-pagination .mat-ripple-element{background-color:#fff;opacity:.12}[_nghost-%COMP%]     .mat-tab-group.mat-background-accent>.mat-tab-header .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-group.mat-background-accent>.mat-tab-link-container .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-group.mat-background-accent>.mat-tab-header-pagination .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-nav-bar.mat-background-accent>.mat-tab-header .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-nav-bar.mat-background-accent>.mat-tab-link-container .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-nav-bar.mat-background-accent>.mat-tab-header-pagination .mat-ripple-element{background-color:#fff;opacity:.12}[_nghost-%COMP%]     .mat-tab-group.mat-background-warn>.mat-tab-header .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-group.mat-background-warn>.mat-tab-link-container .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-group.mat-background-warn>.mat-tab-header-pagination .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-nav-bar.mat-background-warn>.mat-tab-header .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-nav-bar.mat-background-warn>.mat-tab-link-container .mat-ripple-element, [_nghost-%COMP%]     .mat-tab-nav-bar.mat-background-warn>.mat-tab-header-pagination .mat-ripple-element{background-color:#fff;opacity:.12}[_nghost-%COMP%]     .mat-toolbar .mat-form-field-underline, [_nghost-%COMP%]     .mat-toolbar .mat-form-field-ripple, [_nghost-%COMP%]     .mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.example-ripple-checkbox[_ngcontent-%COMP%]{margin:6px 12px 6px 0}.example-ripple-form-field[_ngcontent-%COMP%]{margin:0 12px 0 0}"],changeDetection:0}),a})(),data:{title:"n\u01b0\u1edbc g\u1ee3n s\xf3ng",key:"ripple"}}];let M=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.Bz.forChild(C),c.Bz]}),a})(),k=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[s.m,p.si,d.e4,M]}),a})()}}]);