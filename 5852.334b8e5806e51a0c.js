"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[5852],{5852:(N,s,t)=>{t.r(s),t.d(s,{LoginFormModule:()=>b});var d=t(6083),l=t(9116),i=t(4006),h=t(8746),z=t(9523),n=t(4650),v=t(6648),x=t(5592),C=t(6742),S=t(1655),E=t(7927),A=t(3458),F=t(6895),p=t(3679),g=t(6704),M=t(6616),Z=t(7044),y=t(1811),c=t(5635),f=t(7830),O=t(8213);function T(o,a){1&o&&(n.ynx(0),n.TgZ(1,"nz-form-item")(2,"nz-form-control",14)(3,"nz-input-group",15),n._UZ(4,"input",16),n.qZA()()(),n.TgZ(5,"nz-form-item")(6,"nz-form-control",17)(7,"nz-input-group",18),n._UZ(8,"input",19),n.qZA()()(),n.BQk()),2&o&&(n.xp6(3),n.Q6J("nzSize","large"),n.xp6(1),n.Q6J("placeholder","Email"),n.xp6(3),n.Q6J("nzSize","large"),n.xp6(1),n.Q6J("placeholder","M\u1eadt Kh\u1ea9u"))}function I(o,a){1&o&&(n.ynx(0),n.TgZ(1,"nz-form-item")(2,"nz-form-control",20)(3,"nz-input-group",21),n._UZ(4,"input",22),n.qZA()()(),n.TgZ(5,"nz-form-item")(6,"nz-form-control",17)(7,"nz-input-group",18),n._UZ(8,"input",23),n.qZA()()(),n.BQk()),2&o&&(n.xp6(3),n.Q6J("nzSize","large"),n.xp6(4),n.Q6J("nzSize","large"),n.xp6(1),n.Q6J("placeholder","M\u1eadt Kh\u1ea9u"))}const P=[{path:"",data:{key:"login-form",shouldDetach:"no"},component:(()=>{class o{constructor(e,r,u,m,w,D,L,Q){this.fb=e,this.loginInOutService=r,this.menuService=u,this.dataService=m,this.spinService=w,this.windowServe=D,this.userInfoService=L,this.router=Q,this.loginaccount=!0,this.logintaixe=!1}submitForm(){if(!(0,z.r7)(this.validateForm))return;this.spinService.setCurrentGlobalSpinStore(!0);let e=this.validateForm.getRawValue();1==this.logintaixe&&(e.MODE="mobile"),this.dataService.login(e).pipe((0,h.x)(()=>{this.spinService.setCurrentGlobalSpinStore(!1)})).subscribe(r=>{this.loginInOutService.loginIn(r).then(()=>{this.router.navigateByUrl(e.MODE&&"mobile"==e.MODE?"mobile":"default/dashboard/analysis")}).finally(()=>{this.spinService.setCurrentGlobalSpinStore(!1)})})}ngOnInit(){this.fnInitForm()}fnInitForm(){this.validateForm=this.fb.group(1==this.loginaccount?{email:[null,[i.kI.required]],password:[null,[i.kI.required]],sodienthoai:[null],passwordtaixe:[null]}:{email:[null],password:[null],sodienthoai:[null,[i.kI.required]],passwordtaixe:[null,[i.kI.required]]})}changeTabs(e){1==e?(this.loginaccount=!1,this.logintaixe=!0,this.fnInitForm()):(this.loginaccount=!0,this.logintaixe=!1,this.fnInitForm())}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(i.qu),n.Y36(v.S),n.Y36(x.D),n.Y36(C.r),n.Y36(S.a),n.Y36(E.u),n.Y36(A.$),n.Y36(l.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login-form"]],decls:21,vars:7,consts:[[1,"login-form-wrap"],["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],[3,"nzAnimated","nzSelectedIndexChange"],["nzTitle","Login Account"],[4,"ngIf"],["nzTitle","\u0110\u0103ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"],["nz-row","",1,"login-form-margin"],["nz-col","",3,"nzSpan"],["nz-checkbox","","formControlName","remember"],[1,"login-form-forgot"],["nz-button","","nzSize","large",1,"login-form-button","login-form-margin",3,"nzType"],[1,"other-way"],[1,"other-login"],["routerLink","/login/register-form"],["nzErrorTip","Email"],["nzPrefixIcon","user",1,"example-input",3,"nzSize"],["type","text","nz-input","","formControlName","email","placeholder","email",3,"placeholder"],["nzErrorTip","M\u1eadt Kh\u1ea9u"],["nzPrefixIcon","lock",1,"example-input",3,"nzSize"],["autocomplete","on","type","password","nz-input","","formControlName","password","placeholder","M\u1eadt Kh\u1ea9u",3,"placeholder"],["nzErrorTip","Vui l\xf2ng nh\u1eadp t\xean c\u1ee7a b\u1ea1n !"],["nzPrefixIcon","mobile",3,"nzSize"],["autocomplete","on","type","text","nz-input","","formControlName","sodienthoai","placeholder","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"],["autocomplete","on","type","password","nz-input","","formControlName","passwordtaixe","placeholder","M\u1eadt Kh\u1ea9u",3,"placeholder"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0)(1,"form",1),n.NdJ("ngSubmit",function(){return r.submitForm()}),n.TgZ(2,"nz-tabset",2),n.NdJ("nzSelectedIndexChange",function(m){return r.changeTabs(m)}),n.TgZ(3,"nz-tab",3),n.YNc(4,T,9,4,"ng-container",4),n.qZA(),n.TgZ(5,"nz-tab",5),n.YNc(6,I,9,3,"ng-container",4),n.qZA()(),n.TgZ(7,"div",6)(8,"div",7)(9,"label",8)(10,"span"),n._uU(11,"\u0110\u0103ng nh\u1eadp t\u1ef1 \u0111\u1ed9ng"),n.qZA()()(),n.TgZ(12,"div",7)(13,"a",9),n._uU(14,"Qu\xean m\u1eadt kh\u1ea9u"),n.qZA()()(),n.TgZ(15,"button",10),n._uU(16,"\u0110\u0103ng Nh\u1eadp"),n.qZA(),n.TgZ(17,"div",11),n._UZ(18,"div",12),n.TgZ(19,"a",13),n._uU(20,"\u0110\u0103ng k\xfd"),n.qZA()()()()),2&e&&(n.xp6(1),n.Q6J("formGroup",r.validateForm),n.xp6(1),n.Q6J("nzAnimated",!1),n.xp6(2),n.Q6J("ngIf",r.loginaccount),n.xp6(2),n.Q6J("ngIf",r.logintaixe),n.xp6(2),n.Q6J("nzSpan",12),n.xp6(4),n.Q6J("nzSpan",12),n.xp6(3),n.Q6J("nzType","primary"))},dependencies:[F.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,p.t3,p.SK,g.Lr,g.Nx,g.Fd,M.ix,Z.w,y.dQ,c.Zp,c.gB,f.xH,f.xw,O.Ie,l.yS],styles:[".login-form-wrap[_ngcontent-%COMP%]{width:400px;padding:40px;border:1px solid white;border-radius:5px;margin:0 auto}@media screen and (max-width: 375px){.login-form-wrap[_ngcontent-%COMP%]{padding:0 15px}}.login-form-wrap[_ngcontent-%COMP%]   .login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-wrap[_ngcontent-%COMP%]   .login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-wrap[_ngcontent-%COMP%]   .login-form-forgot[_ngcontent-%COMP%]:hover{color:#1890ff}.login-form-wrap[_ngcontent-%COMP%]   .login-form-button[_ngcontent-%COMP%]{width:100%}.login-form-wrap[_ngcontent-%COMP%]   .other-login[_ngcontent-%COMP%]{width:200px;display:flex;justify-content:space-between}.login-form-wrap[_ngcontent-%COMP%]   .other-login[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px}.login-form-wrap[_ngcontent-%COMP%]   .other-login[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#1890ff;cursor:pointer}.login-form-wrap[_ngcontent-%COMP%]   .other-way[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0}),o})()}];let J=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.Bz.forChild(P),l.Bz]}),o})(),b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[d.m,J]}),o})()}}]);