"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[4895],{84895:(v,g,t)=>{t.r(g),t.d(g,{BaseModule:()=>U});var e=t(5316),f=t(9116),l=t(24006),p=t(49523),n=t(94650),c=t(36895),T=t(32802),h=t(5037),_=t(73679),s=t(36704),C=t(66616),Z=t(47044),B=t(21811),x=t(35635),F=t(38231),o=t(51971),m=t(48521),r=t(834),i=t(37096);const A=["dragTpl"];function b(a,z){if(1&a&&n._UZ(0,"nz-option",35),2&a){const u=z.$implicit;n.Q6J("nzLabel",u.label)("nzValue",u.value)}}function O(a,z){if(1&a&&(n.TgZ(0,"nz-select",33),n.YNc(1,b,1,2,"nz-option",34),n.qZA()),2&a){const u=n.oxw();n.xp6(1),n.Q6J("ngForOf",u.listOfOption)}}const S=[{path:"",component:(()=>{class a{constructor(u){this.fb=u,this.pageHeaderInfo={title:"\u57fa\u7840\u8868\u5355",desc:"\u8868\u5355\u9875\u7528\u4e8e\u5411\u7528\u6237\u6536\u96c6\u6216\u9a8c\u8bc1\u4fe1\u606f\uff0c\u57fa\u7840\u8868\u5355\u5e38\u89c1\u4e8e\u6570\u636e\u9879\u8f83\u5c11\u7684\u8868\u5355\u573a\u666f\u3002",breadcrumb:["\u9996\u9875","\u8868\u5355\u9875","\u57fa\u7840\u8868\u5355"]},this.listOfOption=[{label:"\u540c\u4e8b\u7532",value:"\u540c\u4e8b\u7532"},{label:"\u540c\u4e8b\u4e59",value:"\u540c\u4e8b\u4e59"},{label:"\u540c\u4e8b\u4e19",value:"\u540c\u4e8b\u4e19"}]}submitForm(){!(0,p.r7)(this.validateForm)||console.log(this.validateForm.value)}initForm(){this.validateForm=this.fb.group({title:[null,[l.kI.required]],date:[null,[l.kI.required]],desc:[null,[l.kI.required]],standard:[null,[l.kI.required]],client:[null],invitedCommenter:[null],weights:[null],isPublic:[null]})}ngOnInit(){this.initForm()}}return a.\u0275fac=function(u){return new(u||a)(n.Y36(l.qu))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-base"]],viewQuery:function(u,d){if(1&u&&n.Gf(A,7),2&u){let E;n.iGM(E=n.CRH())&&(d.dragTpl=E.first)}},decls:59,vars:39,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nz-form","",1,"form-wrap",3,"formGroup","ngSubmit"],["nzRequired","","nzFor","title",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u8f93\u5165\u6807\u9898",3,"nzSm","nzXs"],["nz-input","","formControlName","title","id","title","placeholder","\u7ed9\u76ee\u6807\u8d77\u4e2a\u540d\u5b57"],["nzFor","date","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u9009\u62e9\u8d77\u6b62\u65e5\u671f",3,"nzSm","nzXs"],["formControlName","date",1,"with-full"],["nzRequired","","nzFor","desc",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u8f93\u5165\u76ee\u6807\u63cf\u8ff0",3,"nzSm","nzXs"],["rows","4","formControlName","desc","nz-input","","id","desc","placeholder","\u8bf7\u8f93\u5165\u4f60\u7684\u9636\u6bb5\u6027\u5de5\u4f5c\u76ee\u6807"],["nzRequired","","nzFor","standard",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u8f93\u5165\u8861\u91cf\u6807\u51c6",3,"nzSm","nzXs"],["rows","4","formControlName","standard","nz-input","","id","standard","placeholder","\u8bf7\u8f93\u5165\u8861\u91cf\u6807\u51c6"],["nzFor","client","nzTooltipTitle","\u76ee\u6807\u7684\u670d\u52a1\u5bf9\u8c61",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nz-input","","formControlName","client","id","client","placeholder","\u8bf7\u63cf\u8ff0\u4f60\u670d\u52a1\u7684\u5ba2\u6237\uff0c\u5185\u90e8\u5ba2\u6237\u76f4\u63a5@\u59d3\u540d/\u5de5\u53f7"],["nzFor","invitedCommenter",3,"nzSm","nzXs"],["nz-input","","formControlName","invitedCommenter","id","invitedCommenter","placeholder","\u8bf7\u76f4\u63a5@\u59d3\u540d/\u5de5\u53f7\uff0c\u6700\u591a\u53ef\u9080\u8bf75\u4eba"],["nzFor","weights",3,"nzSm","nzXs"],["formControlName","weights","id","weights",3,"nzStep","nzPlaceHolder"],["nzFor","public",3,"nzSm","nzXs"],["nz-row","","nzExtra","\u5ba2\u6237\u3001\u9080\u8bc4\u4eba\u9ed8\u8ba4\u88ab\u5206\u4eab",3,"nzSm","nzXs"],["formControlName","isPublic","id","public"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","2"],["nz-radio","","nzValue","3"],["class","m-t-5","nzMode","tags","nzPlaceHolder","Please select",4,"ngIf"],["nz-row",""],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary"],["nz-button","","nzType","default",1,"m-l-10"],["nzMode","tags","nzPlaceHolder","Please select",1,"m-t-5"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue"]],template:function(u,d){1&u&&(n._UZ(0,"app-page-header",0),n.TgZ(1,"div",1)(2,"nz-card"),n._UZ(3,"app-water-mark"),n.TgZ(4,"form",2),n.NdJ("ngSubmit",function(){return d.submitForm()}),n.TgZ(5,"nz-form-item")(6,"nz-form-label",3),n._uU(7,"\u6807\u9898"),n.qZA(),n.TgZ(8,"nz-form-control",4),n._UZ(9,"input",5),n.qZA()(),n.TgZ(10,"nz-form-item")(11,"nz-form-label",6),n._uU(12,"\u8d77\u6b62\u65e5\u671f"),n.qZA(),n.TgZ(13,"nz-form-control",7),n._UZ(14,"nz-range-picker",8),n.qZA()(),n.TgZ(15,"nz-form-item")(16,"nz-form-label",9),n._uU(17,"\u76ee\u6807\u63cf\u8ff0"),n.qZA(),n.TgZ(18,"nz-form-control",10),n._UZ(19,"textarea",11),n.qZA()(),n.TgZ(20,"nz-form-item")(21,"nz-form-label",12),n._uU(22,"\u8861\u91cf\u6807\u51c6"),n.qZA(),n.TgZ(23,"nz-form-control",13),n._UZ(24,"textarea",14),n.qZA()(),n.TgZ(25,"nz-form-item")(26,"nz-form-label",15),n._uU(27,"\u5ba2\u6237"),n.qZA(),n.TgZ(28,"nz-form-control",16),n._UZ(29,"input",17),n.qZA()(),n.TgZ(30,"nz-form-item")(31,"nz-form-label",18),n._uU(32,"\u9080\u8bc4\u4eba"),n.qZA(),n.TgZ(33,"nz-form-control",16),n._UZ(34,"input",19),n.qZA()(),n.TgZ(35,"nz-form-item")(36,"nz-form-label",20),n._uU(37,"\u6743\u91cd"),n.qZA(),n.TgZ(38,"nz-form-control",16),n._UZ(39,"nz-input-number",21),n._uU(40," % "),n.qZA()(),n.TgZ(41,"nz-form-item")(42,"nz-form-label",22),n._uU(43,"\u76ee\u6807\u516c\u5f00"),n.qZA(),n.TgZ(44,"nz-form-control",23)(45,"nz-radio-group",24)(46,"label",25),n._uU(47,"\u516c\u5f00"),n.qZA(),n.TgZ(48,"label",26),n._uU(49,"\u90e8\u5206\u516c\u5f00"),n.qZA(),n.TgZ(50,"label",27),n._uU(51,"\u4e0d\u516c\u5f00"),n.qZA()(),n.YNc(52,O,2,1,"nz-select",28),n.qZA()(),n.TgZ(53,"nz-form-item",29)(54,"nz-form-control",30)(55,"button",31),n._uU(56,"\u63d0\u4ea4"),n.qZA(),n.TgZ(57,"button",32),n._uU(58,"\u4fdd\u5b58"),n.qZA()()()()()()),2&u&&(n.Q6J("pageHeaderInfo",d.pageHeaderInfo),n.xp6(4),n.Q6J("formGroup",d.validateForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(1),n.Q6J("nzStep",1)("nzPlaceHolder","\u8bf7\u8f93\u5165"),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(8),n.Q6J("ngIf","2"===d.validateForm.get("isPublic").value),n.xp6(2),n.Q6J("nzSpan",14)("nzOffset",6))},dependencies:[c.sg,c.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,T.q,h.U,_.t3,_.SK,s.Lr,s.Nx,s.iK,s.Fd,C.ix,Z.w,B.dQ,x.Zp,F.Ip,F.Vq,o.bd,m.Of,m.Dg,r.uw,r.wS,i._V],styles:[".phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}"],changeDetection:0}),a})(),data:{title:"h\xecnh th\u1ee9c c\u01a1 b\u1ea3n",key:"base-form"}}];let P=(()=>{class a{}return a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[f.Bz.forChild(S),f.Bz]}),a})(),U=(()=>{class a{}return a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[e.m,P]}),a})()},32802:(v,g,t)=>{t.d(g,{q:()=>F});var e=t(94650),f=t(29576),l=t(9116),p=t(36895),n=t(45655),c=t(94963),T=t(66287);function h(o,m){if(1&o&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&o){const r=m.$implicit;e.xp6(2),e.Oqu(r)}}function _(o,m){1&o&&e.GkF(0)}function s(o,m){if(1&o&&(e.TgZ(0,"nz-page-header-extra"),e.YNc(1,_,1,0,"ng-container",4),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",r.extraTpl)}}function C(o,m){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const r=e.oxw(2);e.xp6(1),e.Oqu(r.pageHeaderInfo.desc)}}function Z(o,m){if(1&o&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,C,2,1,"ng-container",5),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",r.pageHeaderInfo.desc)}}function B(o,m){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const r=e.oxw(2);e.xp6(1),e.Oqu(r.pageHeaderInfo.footer)}}function x(o,m){if(1&o&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,B,2,1,"ng-container",5),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",r.pageHeaderInfo.footer)}}let F=(()=>{class o{constructor(r,i){this.themesService=r,this.router=i,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(f.f),e.Y36(l.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl",extraTpl:"extraTpl"},decls:6,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[4,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"]],template:function(r,i){1&r&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return i.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,h,3,1,"nz-breadcrumb-item",2),e.qZA(),e.YNc(3,s,2,1,"nz-page-header-extra",3),e.YNc(4,Z,2,1,"nz-page-header-content",3),e.YNc(5,x,2,1,"nz-page-header-footer",3),e.qZA()),2&r&&(e.Q6J("nzTitle",i.pageHeaderInfo.title)("nzBackIcon",i.backTpl?i.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",i.pageHeaderInfo.breadcrumb),e.xp6(1),e.Q6J("ngIf",i.extraTpl),e.xp6(1),e.Q6J("ngIf",i.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",i.pageHeaderInfo.footer))},dependencies:[p.sg,p.O5,p.tP,n.$O,n.u5,n.Jp,n.$,n.A2,c.Dg,c.MO,T.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),o})()}}]);