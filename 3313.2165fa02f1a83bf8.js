"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[3313],{3313:(S,T,u)=>{u.r(T),u.d(T,{StepModule:()=>N});var e=u(4080),x=u(6083),F=u(6806),n=u(4650),d=u(6616),E=u(7044),C=u(1811),h=u(9194),_=u(6174);let D=(()=>{class o{constructor(){this.stepDirection="horizontal",this.next=new n.vpe}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-step-three"]],inputs:{stepDirection:"stepDirection"},outputs:{next:"next"},decls:17,vars:2,consts:[["nzStatus","success","nzTitle","Th\u1ef1c Hi\u1ec7n Th\xe0nh c\xf4ng ","nzSubTitle","D\u1ef1 ki\u1ebfn \u200b\u200bs\u1ebd \u0111\u1ebfn trong v\xf2ng hai gi\u1edd"],["nz-result-extra",""],["nz-button","","nzType","primary",3,"click"],["nz-button",""],["nz-result-content","",1,"desc-bg","center"],[1,"determine-wrap","p-b-0"],[1,"m-t-20","p-0"],["nzTitle","T\xe0i kho\u1ea3n thanh to\xe1n"],["nzTitle","Nh\u1eefng t\xe0i kho\u1ea3n c\xf3 th\u1ec3 nh\u1eadn \u0111\u01b0\u1ee3c"],["nzTitle","T\xean ng\u01b0\u1eddi nh\u1eadn"],["nzTitle","S\u1ed1 ti\u1ec1n chuy\u1ec3n kho\u1ea3n"]],template:function(t,a){1&t&&(n.TgZ(0,"nz-result",0)(1,"div",1)(2,"button",2),n.NdJ("click",function(){return a.next.emit()}),n._uU(3,"\u0111\u1ebfn l\u01b0\u1ee3t"),n.qZA(),n.TgZ(4,"button",3),n._uU(5,"Xem h\xf3a \u0111\u01a1n"),n.qZA()()(),n.TgZ(6,"div",4)(7,"div",5)(8,"nz-descriptions",6)(9,"nz-descriptions-item",7),n._uU(10,"ant-design@alipay.com"),n.qZA(),n.TgZ(11,"nz-descriptions-item",8),n._uU(12,"nampham@example.com"),n.qZA(),n.TgZ(13,"nz-descriptions-item",9),n._uU(14,"Nam Pham"),n.qZA(),n.TgZ(15,"nz-descriptions-item",10),n._uU(16,"$500"),n.qZA()()()()),2&t&&(n.xp6(6),n.ekj("p-l-16","vertical"===a.stepDirection))},dependencies:[d.ix,E.w,C.dQ,h.R7,h.uj,_.ml,_.HO,_.ey],styles:[".desc-bg[_ngcontent-%COMP%]{max-width:560px;height:220px;margin:-30px auto 0;padding:0 0 0 40px}[_nghost-%COMP%]     td.ant-descriptions-item{display:flex}.determine-wrap[_ngcontent-%COMP%]{margin:0 auto;max-width:500px}"],changeDetection:0}),o})();var i=u(4006),Z=u(9523),f=u(3679),g=u(6704),r=u(5635),c=u(8231),p=u(2577),m=u(8823);function B(o,s){1&o&&(n.TgZ(0,"nz-select",22),n._UZ(1,"nz-option",23)(2,"nz-option",24),n.qZA())}let v=(()=>{class o{constructor(t){this.fb=t,this.stepDirection="horizontal",this.next=new n.vpe}goNext(){!(0,Z.r7)(this.validateForm)||this.next.emit()}initForm(){this.validateForm=this.fb.group({paymentAccount:[null,[i.kI.required]],payWay:["zhifubao"],payWayNo:[null,[i.kI.required]],payeeName:[null,[i.kI.required]],amount:[null,[i.kI.required]]})}ngOnInit(){this.initForm()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(i.qu))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-step-one"]],inputs:{stepDirection:"stepDirection"},outputs:{next:"next"},decls:43,vars:25,consts:[["nz-form","",1,"form-wrap","p-b-0","center-row",3,"formGroup"],["nzRequired","","nzFor","title",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u8f93\u5165\u4ed8\u6b3e\u8d26\u6237",3,"nzSm","nzXs"],["formControlName","paymentAccount"],["nzValue","ant-design@alipay.com","nzLabel","ant-design@alipay.com"],["nzRequired","","nzFor","a",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u8f93\u5165\u6536\u6b3e\u8d26\u6237",3,"nzSm","nzXs"],[3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","payWayNo","id","'payWayNo'","nz-input",""],["nzRequired","","nzFor","payeeName",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u8f93\u5165\u6536\u6b3e\u4eba\u59d3\u540d",3,"nzSm","nzXs"],["nz-input","","formControlName","payeeName","id","payeeName","placeholder","\u6536\u6b3e\u4eba\u59d3\u540d"],["nzErrorTip","\u8bf7\u8f93\u5165\u6536\u6b3e\u91d1\u989d",3,"nzSm","nzXs"],["nzPrefix","\uffe5"],["formControlName","amount","type","number","nz-input",""],["nz-row",""],["nz-col","",3,"nzSpan"],[3,"nzSm","nzXs"],["nz-button","","nzType","primary",3,"click"],[1,"desc-wrap"],["nz-typography","","nzType","secondary"],["formControlName","payWay",1,"phone-select"],["nzLabel","\u652f\u4ed8\u5b9d","nzValue","zhifubao"],["nzLabel","\u94f6\u884c\u5361","nzValue","bankcard"]],template:function(t,a){if(1&t&&(n.TgZ(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),n._uU(3,"\u4ed8\u6b3e\u8d26\u6237"),n.qZA(),n.TgZ(4,"nz-form-control",2)(5,"nz-select",3),n._UZ(6,"nz-option",4),n.qZA()()(),n.TgZ(7,"nz-form-item")(8,"nz-form-label",5),n._uU(9,"\u6536\u6b3e\u8d26\u6237"),n.qZA(),n.TgZ(10,"nz-form-control",6)(11,"nz-input-group",7),n.YNc(12,B,3,0,"ng-template",null,8,n.W1O),n._UZ(14,"input",9),n.qZA()()(),n.TgZ(15,"nz-form-item")(16,"nz-form-label",10),n._uU(17,"\u6536\u6b3e\u4eba\u59d3\u540d"),n.qZA(),n.TgZ(18,"nz-form-control",11),n._UZ(19,"input",12),n.qZA()(),n.TgZ(20,"nz-form-item")(21,"nz-form-label",5),n._uU(22,"\u6536\u6b3e\u91d1\u989d"),n.qZA(),n.TgZ(23,"nz-form-control",13)(24,"nz-input-group",14),n._UZ(25,"input",15),n.qZA()()(),n.TgZ(26,"nz-form-item",16),n._UZ(27,"div",17),n.TgZ(28,"nz-form-control",18)(29,"button",19),n.NdJ("click",function(){return a.goNext()}),n._uU(30,"\u4e0b\u4e00\u6b65"),n.qZA()()()(),n._UZ(31,"nz-divider"),n.TgZ(32,"section",20)(33,"h3",21),n._uU(34,"\u8bf4\u660e"),n.qZA(),n.TgZ(35,"h4",21),n._uU(36,"\u8f6c\u8d26\u5230\u652f\u4ed8\u5b9d\u8d26\u6237"),n.qZA(),n.TgZ(37,"p",21),n._uU(38,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002"),n.qZA(),n.TgZ(39,"h4",21),n._uU(40,"\u8f6c\u8d26\u5230\u94f6\u884c\u5361"),n.qZA(),n.TgZ(41,"p",21),n._uU(42,"\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002\u5982\u679c\u9700\u8981\uff0c\u8fd9\u91cc\u53ef\u4ee5\u653e\u4e00\u4e9b\u5173\u4e8e\u4ea7\u54c1\u7684\u5e38\u89c1\u95ee\u9898\u8bf4\u660e\u3002"),n.qZA()()),2&t){const l=n.MAs(13);n.ekj("p-0","vertical"===a.stepDirection),n.Q6J("formGroup",a.validateForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(4),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(1),n.Q6J("nzAddOnBefore",l),n.xp6(5),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(4),n.Q6J("nzSpan",6),n.xp6(1),n.Q6J("nzSm",14)("nzXs",24),n.xp6(4),n.ekj("p-0","vertical"===a.stepDirection)}},dependencies:[i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,f.t3,f.SK,g.Lr,g.Nx,g.iK,g.Fd,d.ix,E.w,C.dQ,r.Zp,r.gB,r.ke,c.Ip,c.Vq,p.g,m.ZU],styles:[".form-wrap[_ngcontent-%COMP%]{max-width:785px}.desc-wrap[_ngcontent-%COMP%]{padding:0 56px;color:#00000073}.desc-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.desc-wrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px}"],changeDetection:0}),o})();var y=u(9597);let A=(()=>{class o{constructor(t){this.fb=t,this.next=new n.vpe,this.previous=new n.vpe}submit(){!(0,Z.r7)(this.validateForm)||this.next.emit()}initForm(){this.validateForm=this.fb.group({password:[null,[i.kI.required]]})}ngOnInit(){this.initForm()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(i.qu))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-step-two"]],outputs:{next:"next",previous:"previous"},decls:25,vars:7,consts:[[1,"determine-wrap","p-b-0"],["nzType","info","nzCloseable","","nzMessage","\u786e\u8ba4\u8f6c\u8d26\u540e\uff0c\u8d44\u91d1\u5c06\u76f4\u63a5\u6253\u5165\u5bf9\u65b9\u8d26\u6237\uff0c\u65e0\u6cd5\u9000\u56de\u3002"],[1,"m-t-20"],["nzTitle","\u4ed8\u6b3e\u8d26\u6237"],["nzTitle","\u6536\u6b3e\u8d26\u6237"],["nzTitle","\u6536\u6b3e\u4eba\u59d3\u540d"],["nzTitle","\u8f6c\u8d26\u91d1\u989d"],[3,"formGroup"],["nzRequired","","nzFor","password",3,"nzSm","nzXs"],["nzErrorTip","\u652f\u4ed8\u5bc6\u7801",3,"nzSm","nzXs"],["type","password","formControlName","password","nz-input",""],["nz-row",""],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary",3,"click"],["nz-button","","nzType","default",1,"m-l-10",3,"click"]],template:function(t,a){1&t&&(n.TgZ(0,"div",0),n._UZ(1,"nz-alert",1),n.TgZ(2,"nz-descriptions",2)(3,"nz-descriptions-item",3),n._uU(4,"ant-design@alipay.com"),n.qZA(),n.TgZ(5,"nz-descriptions-item",4),n._uU(6,"test@example.com"),n.qZA(),n.TgZ(7,"nz-descriptions-item",5),n._uU(8,"Alex"),n.qZA(),n.TgZ(9,"nz-descriptions-item",6),n._uU(10,"500\u5143"),n.qZA()(),n._UZ(11,"nz-divider"),n.TgZ(12,"form",7)(13,"nz-form-item")(14,"nz-form-label",8),n._uU(15,"\u652f\u4ed8\u5bc6\u7801"),n.qZA(),n.TgZ(16,"nz-form-control",9)(17,"nz-input-group"),n._UZ(18,"input",10),n.qZA()()(),n.TgZ(19,"nz-form-item",11)(20,"nz-form-control",12)(21,"button",13),n.NdJ("click",function(){return a.submit()}),n._uU(22,"\u63d0\u4ea4"),n.qZA(),n.TgZ(23,"button",14),n.NdJ("click",function(){return a.previous.emit()}),n._uU(24,"\u4e0a\u4e00\u6b65"),n.qZA()()()()()),2&t&&(n.xp6(12),n.Q6J("formGroup",a.validateForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(4),n.Q6J("nzSpan",14)("nzOffset",6))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,f.t3,f.SK,g.Nx,g.iK,g.Fd,d.ix,E.w,C.dQ,r.Zp,r.gB,p.g,h.R7,h.uj,y.r],styles:[".determine-wrap[_ngcontent-%COMP%]{margin:0 auto;max-width:500px}[_nghost-%COMP%]     td.ant-descriptions-item{display:flex}"],changeDetection:0}),o})();var b=u(2289),P=u(2802),U=u(5037),M=u(4607),O=u(2223);function w(o,s){}var z=(()=>{return(o=z||(z={}))[o.One=0]="One",o[o.Two=1]="Two",o[o.Three=2]="Three",z;var o})();const I=[{path:"",component:(()=>{class o{constructor(t,a,l){this.fb=t,this.breakpointObserver=a,this.cdr=l,this.stepDirection="horizontal",this.pageHeaderInfo={title:"\u5206\u6b65\u8868\u5355",desc:"\u5c06\u4e00\u4e2a\u5197\u957f\u6216\u7528\u6237\u4e0d\u719f\u6089\u7684\u8868\u5355\u4efb\u52a1\u5206\u6210\u591a\u4e2a\u6b65\u9aa4\uff0c\u6307\u5bfc\u7528\u6237\u5b8c\u6210\u3002\uff08\u6f14\u793acdk\u4f20\u9001\u70b9\uff09",breadcrumb:["\u9996\u9875","\u8868\u5355\u9875","\u5206\u6b65\u8868\u5355"]},this.currentStep=1,this.stepComponentArray=[v,A,D]}go(t,a,l){this.currentStep=l,a.destroy(),this.goStep(t)}initComponent(t){t instanceof n.UuU&&(t.instance instanceof v&&(t.instance.stepDirection=this.stepDirection,t.instance.next.subscribe(()=>{this.go(z.Two,t,this.currentStep+1)})),t.instance instanceof A&&(t.instance.previous.subscribe(()=>{this.go(z.One,t,this.currentStep-1)}),t.instance.next.subscribe(()=>{this.go(z.Three,t,this.currentStep+1)})),t.instance instanceof D&&(t.instance.stepDirection=this.stepDirection,t.instance.next.subscribe(()=>{this.go(z.One,t,1)})))}ngOnInit(){this.breakpointObserver.observe(["(max-width: 770px)"]).subscribe(t=>{let a=t.matches?"vertical":"horizontal";a!==this.stepDirection&&(this.stepDirection=a,this.cdr.markForCheck())})}goStep(t){this.componentPortal=new e.C5(this.stepComponentArray[t]),this.selectedPortal=this.componentPortal}ngAfterViewInit(){this.goStep(z.One)}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(i.qu),n.Y36(b.Yg),n.Y36(n.sBO))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-step"]],decls:12,vars:6,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],[1,"page-wrap"],[1,"step-wrap"],[3,"nzDirection","nzCurrent"],["nzTitle","\u586b\u5199\u8f6c\u8d26\u4fe1\u606f"],["nzTitle","\u786e\u8ba4\u8f6c\u8d26\u4fe1\u606f"],["nzTitle","\u5b8c\u6210"],[3,"cdkPortalOutlet","attached"]],template:function(t,a){1&t&&(n._UZ(0,"app-page-header",0),n.TgZ(1,"div",1)(2,"nz-card")(3,"section",2),n._UZ(4,"app-water-mark"),n.TgZ(5,"section",3)(6,"nz-steps",4),n._UZ(7,"nz-step",5)(8,"nz-step",6)(9,"nz-step",7),n.qZA()(),n.TgZ(10,"section"),n.YNc(11,w,0,0,"ng-template",8),n.NdJ("attached",function(Q){return a.initComponent(Q)}),n.qZA()()()()),2&t&&(n.Q6J("pageHeaderInfo",a.pageHeaderInfo),n.xp6(3),n.ekj("p-0","vertical"===a.stepDirection),n.xp6(3),n.Q6J("nzDirection",a.stepDirection)("nzCurrent",a.currentStep-1),n.xp6(5),n.Q6J("cdkPortalOutlet",a.selectedPortal))},dependencies:[P.q,U.U,M.bd,O.iy,O.$W,e.Pl],styles:[".page-wrap[_ngcontent-%COMP%]{padding:24px}.page-wrap[_ngcontent-%COMP%]   .step-wrap[_ngcontent-%COMP%]{max-width:750px;margin:16px auto}.page-wrap[_ngcontent-%COMP%]   .form-wrap[_ngcontent-%COMP%]{max-width:785px}.page-wrap[_ngcontent-%COMP%]   .determine-wrap[_ngcontent-%COMP%]{margin:0 auto;max-width:500px}"],changeDetection:0}),o})(),data:{title:"bi\u1ec3u m\u1eabu t\u1eebng b\u01b0\u1edbc",key:"step-form"}}];let J=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[F.Bz.forChild(I),F.Bz]}),o})(),N=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[x.m,J,e.eL]}),o})()},2802:(S,T,u)=>{u.d(T,{q:()=>g});var e=u(4650),x=u(9576),F=u(6806),n=u(6895),d=u(5655),E=u(4963),C=u(6287);function h(r,c){if(1&r&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&r){const p=c.$implicit;e.xp6(2),e.Oqu(p)}}function _(r,c){if(1&r&&(e.ynx(0),e._uU(1),e.BQk()),2&r){const p=e.oxw();e.xp6(1),e.Oqu(p.pageHeaderInfo.extra)}}function D(r,c){if(1&r&&(e.ynx(0),e._uU(1),e.BQk()),2&r){const p=e.oxw(2);e.xp6(1),e.Oqu(p.pageHeaderInfo.desc)}}function i(r,c){if(1&r&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,D,2,1,"ng-container",3),e.qZA()),2&r){const p=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",p.pageHeaderInfo.desc)}}function Z(r,c){if(1&r&&(e.ynx(0),e._uU(1),e.BQk()),2&r){const p=e.oxw(2);e.xp6(1),e.Oqu(p.pageHeaderInfo.footer)}}function f(r,c){if(1&r&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,Z,2,1,"ng-container",3),e.qZA()),2&r){const p=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",p.pageHeaderInfo.footer)}}let g=(()=>{class r{constructor(p,m){this.themesService=p,this.router=m,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return r.\u0275fac=function(p){return new(p||r)(e.Y36(x.f),e.Y36(F.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl"},decls:7,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(p,m){1&p&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return m.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,h,3,1,"nz-breadcrumb-item",2),e.qZA(),e.TgZ(3,"nz-page-header-extra"),e.YNc(4,_,2,1,"ng-container",3),e.qZA(),e.YNc(5,i,2,1,"nz-page-header-content",4),e.YNc(6,f,2,1,"nz-page-header-footer",4),e.qZA()),2&p&&(e.Q6J("nzTitle",m.pageHeaderInfo.title)("nzBackIcon",m.backTpl?m.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",m.pageHeaderInfo.breadcrumb),e.xp6(2),e.Q6J("nzStringTemplateOutlet",m.pageHeaderInfo.extra),e.xp6(1),e.Q6J("ngIf",m.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",m.pageHeaderInfo.footer))},dependencies:[n.sg,n.O5,d.$O,d.u5,d.Jp,d.$,d.A2,E.Dg,E.MO,C.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),r})()}}]);