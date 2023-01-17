"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[6208],{6208:(b,h,m)=>{m.r(h),m.d(h,{AdvancedModule:()=>G});var a=m(6083),T=m(9116),o=m(4006),g=m(9523),n=m(4650),C=m(8313),v=m(2017),A=m(2802),E=m(5037),z=m(6704),M=m(6616),x=m(7044),Z=m(1811),F=m(4607),l=m(8372),p=m(1884),d=m(6895),u=m(3679),X=m(5635);function J(t,s){if(1&t&&(n.ynx(0),n._uU(1),n.BQk()),2&t){const e=n.oxw().$implicit;n.xp6(1),n.Oqu(e.errors.message)}}function q(t,s){1&t&&(n.ynx(0),n._uU(1,"\u5fc5\u586b\u9879"),n.BQk())}function k(t,s){if(1&t&&(n.YNc(0,J,2,1,"ng-container",18),n.YNc(1,q,2,0,"ng-container",18)),2&t){const e=s.$implicit;n.Q6J("ngIf",e.hasError("message")),n.xp6(1),n.Q6J("ngIf",e.hasError("required"))}}const Q={provide:o.JU,multi:!0,useExisting:(0,n.Gpc)(()=>U)};let U=(()=>{class t{constructor(e){this.fb=e,this.onChange=()=>null,this.onTouched=()=>null}initForm(){this.validateForm=this.fb.group({warehouseName:[null,[o.kI.required]],warehouseDomainName:[null,[o.kI.required]],warehouseManager:[null,[o.kI.required]],approver:[null,[o.kI.required]],effectiveTime:[null,[o.kI.required]],warehouseType:[null,[o.kI.required]]})}ngOnInit(){this.initForm(),this.validateForm.valueChanges.pipe((0,l.b)(500),(0,p.x)()).subscribe(e=>{this.onChange(e)})}registerOnChange(e){this.onChange=e}registerOnTouched(e){}checkForm(){return!(0,g.r7)(this.validateForm)}setDisabledState(e){}writeValue(e){e&&this.validateForm.patchValue(e)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(o.qu))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-warehouse-manage-form"]],features:[n._Bn([Q])],decls:34,vars:73,consts:[[3,"formGroup"],["nz-row",""],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nzRequired","","nzSpan","24","nzFor","warehouseName"],[3,"nzXl","nzXXl","nzLg","nzMd","nzSm","nzErrorTip"],["nz-input","","formControlName","warehouseName","id","warehouseName"],["nzRequired","","nzSpan","24","nzFor","warehouseDomainName"],["nz-input","","formControlName","warehouseDomainName","id","warehouseDomainName"],["nzRequired","","nzSpan","24","nzRequired","","nzFor","warehouseManager"],["nz-input","","formControlName","warehouseManager","id","warehouseManager"],["nzRequired","","nzSpan","24","nzFor","approver"],["nz-input","","formControlName","approver","id","approver"],["nzRequired","","nzSpan","24","nzFor","effectiveTime"],[3,"nzLg","nzXl","nzXXl","nzMd","nzSm","nzErrorTip"],["nz-input","","formControlName","effectiveTime","id","effectiveTime"],["nzSpan","24","nzRequired","","nzFor","warehouseType"],["nz-input","","formControlName","warehouseType","id","warehouseType"],["combineTpl",""],[4,"ngIf"]],template:function(e,i){if(1&e&&(n.ynx(0,0),n.TgZ(1,"div",1)(2,"nz-form-item",2)(3,"nz-form-label",3),n._uU(4,"\u4ed3\u5e93\u540d"),n.qZA(),n.TgZ(5,"nz-form-control",4),n._UZ(6,"input",5),n.qZA()(),n.TgZ(7,"nz-form-item",2)(8,"nz-form-label",6),n._uU(9,"\u4ed3\u5e93\u57df\u540d"),n.qZA(),n.TgZ(10,"nz-form-control",4),n._UZ(11,"input",7),n.qZA()(),n.TgZ(12,"nz-form-item",2)(13,"nz-form-label",8),n._uU(14,"\u4ed3\u5e93\u7ba1\u7406\u5458"),n.qZA(),n.TgZ(15,"nz-form-control",4),n._UZ(16,"input",9),n.qZA()(),n.TgZ(17,"nz-form-item",2)(18,"nz-form-label",10),n._uU(19,"\u5ba1\u6279\u4eba"),n.qZA(),n.TgZ(20,"nz-form-control",4),n._UZ(21,"input",11),n.qZA()(),n.TgZ(22,"nz-form-item",2)(23,"nz-form-label",12),n._uU(24,"\u751f\u6548\u65e5\u671f"),n.qZA(),n.TgZ(25,"nz-form-control",13),n._UZ(26,"input",14),n.qZA()(),n.TgZ(27,"nz-form-item",2)(28,"nz-form-label",15),n._uU(29,"\u4ed3\u5e93\u7c7b\u578b"),n.qZA(),n.TgZ(30,"nz-form-control",4),n._UZ(31,"input",16),n.qZA()()(),n.BQk(),n.YNc(32,k,2,2,"ng-template",null,17,n.W1O)),2&e){const r=n.MAs(33);n.Q6J("formGroup",i.validateForm),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzXl",18)("nzXXl",18)("nzLg",18)("nzMd",24)("nzSm",24)("nzErrorTip",r),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzXl",18)("nzXXl",18)("nzLg",18)("nzMd",24)("nzSm",24)("nzErrorTip",r),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",24)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzXl",24)("nzXXl",24)("nzLg",24)("nzMd",24)("nzSm",24)("nzErrorTip",r),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzXl",18)("nzXXl",18)("nzLg",18)("nzMd",24)("nzSm",24)("nzErrorTip",r),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzLg",18)("nzXl",18)("nzXXl",18)("nzMd",24)("nzSm",24)("nzErrorTip",r),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",24)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzXl",24)("nzXXl",24)("nzLg",24)("nzMd",24)("nzSm",24)("nzErrorTip",r)}},dependencies:[d.O5,o.Fj,o.JJ,o.JL,o.sg,o.u,u.t3,u.SK,z.Nx,z.iK,z.Fd,X.Zp],styles:[".ant-form-item[_ngcontent-%COMP%]{padding:0 10px}"],changeDetection:0}),t})();function I(t,s){if(1&t&&(n.ynx(0),n._uU(1),n.BQk()),2&t){const e=n.oxw().$implicit;n.xp6(1),n.Oqu(e.errors.message)}}function S(t,s){1&t&&(n.ynx(0),n._uU(1,"\u5fc5\u586b\u9879"),n.BQk())}function D(t,s){if(1&t&&(n.YNc(0,I,2,1,"ng-container",18),n.YNc(1,S,2,0,"ng-container",18)),2&t){const e=s.$implicit;n.Q6J("ngIf",e.hasError("message")),n.xp6(1),n.Q6J("ngIf",e.hasError("required"))}}const B={provide:o.JU,multi:!0,useExisting:(0,n.Gpc)(()=>O)};let O=(()=>{class t{constructor(e){this.fb=e,this.onChange=()=>null,this.onTouched=()=>null}initForm(){this.validateForm=this.fb.group({taskName:[null,[o.kI.required]],taskDesc:[null,[o.kI.required]],executor:[null,[o.kI.required]],responsible:[null,[o.kI.required]],effectiveTime:[null,[o.kI.required]],taskType:[null,[o.kI.required]]})}checkForm(){return!(0,g.r7)(this.validateForm)}ngOnInit(){this.initForm(),this.validateForm.valueChanges.pipe((0,l.b)(500),(0,p.x)()).subscribe(e=>{this.onChange(e)})}registerOnChange(e){this.onChange=e}registerOnTouched(e){}setDisabledState(e){}writeValue(e){e&&this.validateForm.patchValue(e)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(o.qu))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-task-manage-form"]],features:[n._Bn([B])],decls:34,vars:73,consts:[[3,"formGroup"],["nz-row",""],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nzRequired","","nzSpan","24","nzFor","taskName"],[3,"nzXl","nzXXl","nzLg","nzMd","nzSm","nzErrorTip"],["nz-input","","formControlName","taskName","id","taskName"],["nzRequired","","nzSpan","24","nzFor","taskDesc"],["nz-input","","formControlName","taskDesc","id","taskDesc"],["nzSpan","24","nzRequired","","nzFor","executor"],["nz-input","","formControlName","executor","id","executor"],["nzRequired","","nzSpan","24","nzFor","responsible"],["nz-input","","formControlName","responsible","id","responsible"],["nzRequired","","nzSpan","24","nzFor","effectiveTime"],[3,"nzLg","nzXl","nzXXl","nzMd","nzSm","nzErrorTip"],["nz-input","","formControlName","effectiveTime","id","effectiveTime"],["nzSpan","24","nzRequired","","nzFor","taskType"],["nz-input","","formControlName","taskType","id","taskType"],["combineTpl",""],[4,"ngIf"]],template:function(e,i){if(1&e&&(n.ynx(0,0),n.TgZ(1,"div",1)(2,"nz-form-item",2)(3,"nz-form-label",3),n._uU(4,"\u4efb\u52a1\u540d"),n.qZA(),n.TgZ(5,"nz-form-control",4),n._UZ(6,"input",5),n.qZA()(),n.TgZ(7,"nz-form-item",2)(8,"nz-form-label",6),n._uU(9,"\u4efb\u52a1\u63cf\u8ff0"),n.qZA(),n.TgZ(10,"nz-form-control",4),n._UZ(11,"input",7),n.qZA()(),n.TgZ(12,"nz-form-item",2)(13,"nz-form-label",8),n._uU(14,"\u6267\u884c\u4eba"),n.qZA(),n.TgZ(15,"nz-form-control",4),n._UZ(16,"input",9),n.qZA()(),n.TgZ(17,"nz-form-item",2)(18,"nz-form-label",10),n._uU(19,"\u8d23\u4efb\u4eba"),n.qZA(),n.TgZ(20,"nz-form-control",4),n._UZ(21,"input",11),n.qZA()(),n.TgZ(22,"nz-form-item",2)(23,"nz-form-label",12),n._uU(24,"\u751f\u6548\u65e5\u671f"),n.qZA(),n.TgZ(25,"nz-form-control",13),n._UZ(26,"input",14),n.qZA()(),n.TgZ(27,"nz-form-item",2)(28,"nz-form-label",15),n._uU(29,"\u4efb\u52a1\u7c7b\u578b"),n.qZA(),n.TgZ(30,"nz-form-control",4),n._UZ(31,"input",16),n.qZA()()(),n.BQk(),n.YNc(32,D,2,2,"ng-template",null,17,n.W1O)),2&e){const r=n.MAs(33);n.Q6J("formGroup",i.validateForm),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzXl",18)("nzXXl",18)("nzLg",18)("nzMd",24)("nzSm",24)("nzErrorTip",r),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzXl",18)("nzXXl",18)("nzLg",18)("nzMd",24)("nzSm",24)("nzErrorTip",r),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",24)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzXl",24)("nzXXl",24)("nzLg",24)("nzMd",24)("nzSm",24)("nzErrorTip",r),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzXl",18)("nzXXl",18)("nzLg",18)("nzMd",24)("nzSm",24)("nzErrorTip",r),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzLg",18)("nzXl",18)("nzXXl",18)("nzMd",24)("nzSm",24)("nzErrorTip",r),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",24)("nzSm",24)("nzXs",24),n.xp6(3),n.Q6J("nzXl",24)("nzXXl",24)("nzLg",24)("nzMd",24)("nzSm",24)("nzErrorTip",r)}},dependencies:[d.O5,o.Fj,o.JJ,o.JL,o.sg,o.u,u.t3,u.SK,z.Nx,z.iK,z.Fd,X.Zp],styles:[".ant-form-item[_ngcontent-%COMP%]{padding:0 10px}"],changeDetection:0}),t})();var N=m(1102),_=m(269),y=m(6497);function L(t,s){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td")(8,"a",10),n.NdJ("click",function(){n.CHM(e);const r=n.oxw().$implicit,c=n.oxw();return n.KtG(c.startEdit(r.id))}),n._uU(9,"Edit"),n.qZA()(),n.BQk()}if(2&t){const e=n.oxw().$implicit;n.xp6(2),n.Oqu(e.name),n.xp6(2),n.Oqu(e.age),n.xp6(2),n.Oqu(e.address)}}function w(t,s){if(1&t){const e=n.EpF();n.TgZ(0,"td")(1,"input",11),n.NdJ("ngModelChange",function(r){n.CHM(e);const c=n.oxw().$implicit,f=n.oxw();return n.KtG(f.editCache[c.id].data.name=r)}),n.qZA()(),n.TgZ(2,"td")(3,"input",11),n.NdJ("ngModelChange",function(r){n.CHM(e);const c=n.oxw().$implicit,f=n.oxw();return n.KtG(f.editCache[c.id].data.age=r)}),n.qZA()(),n.TgZ(4,"td")(5,"input",11),n.NdJ("ngModelChange",function(r){n.CHM(e);const c=n.oxw().$implicit,f=n.oxw();return n.KtG(f.editCache[c.id].data.address=r)}),n.qZA()(),n.TgZ(6,"td")(7,"a",12),n.NdJ("click",function(){n.CHM(e);const r=n.oxw().$implicit,c=n.oxw();return n.KtG(c.saveEdit(r.id))}),n._uU(8,"Save"),n.qZA(),n.TgZ(9,"a",13),n.NdJ("nzOnConfirm",function(){n.CHM(e);const r=n.oxw().$implicit,c=n.oxw();return n.KtG(c.cancelEdit(r.id))}),n._uU(10,"Cancel"),n.qZA()()}if(2&t){const e=n.oxw().$implicit,i=n.oxw();n.xp6(1),n.Q6J("ngModel",i.editCache[e.id].data.name),n.xp6(2),n.Q6J("ngModel",i.editCache[e.id].data.age),n.xp6(2),n.Q6J("ngModel",i.editCache[e.id].data.address)}}function H(t,s){if(1&t&&(n.TgZ(0,"tr"),n.YNc(1,L,10,3,"ng-container",8),n.YNc(2,w,11,3,"ng-template",null,9,n.W1O),n.qZA()),2&t){const e=s.$implicit,i=n.MAs(3),r=n.oxw();n.xp6(1),n.Q6J("ngIf",!r.editCache[e.id].edit)("ngIfElse",i)}}let P=(()=>{class t{constructor(){this.editCache={},this.listOfData=[]}startEdit(e){this.editCache[e].edit=!0}cancelEdit(e){const i=this.listOfData.findIndex(r=>r.id===e);this.editCache[e]={data:{...this.listOfData[i]},edit:!1}}saveEdit(e){const i=this.listOfData.findIndex(r=>r.id===e);Object.assign(this.listOfData[i],this.editCache[e].data),this.editCache[e].edit=!1}updateEditCache(){this.listOfData.forEach(e=>{this.editCache[e.id]={edit:!1,data:{...e}}})}ngOnInit(){const e=[];for(let i=0;i<10;i++)e.push({id:`${i}`,name:`Edrward ${i}`,age:32,address:`London Park no. ${i}`});this.listOfData=e,this.updateEditCache()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-user-member-manage"]],decls:17,vars:3,consts:[[3,"nzFrontPagination","nzData"],["editRowTable",""],["nzWidth","25%"],["nzWidth","15%"],["nzWidth","40%"],[4,"ngFor","ngForOf"],["nz-button","","nzType","dashed",1,"add-button","with-full"],["nz-icon","","nzType","plus"],[4,"ngIf","ngIfElse"],["editTemplate",""],[3,"click"],["type","text","nz-input","",3,"ngModel","ngModelChange"],[1,"save",3,"click"],["nz-popconfirm","","nzTitle","Sure to cancel?",3,"nzOnConfirm"]],template:function(e,i){if(1&e&&(n.TgZ(0,"nz-table",0,1)(2,"thead")(3,"tr")(4,"th",2),n._uU(5,"\u6210\u5458\u59d3\u540d"),n.qZA(),n.TgZ(6,"th",3),n._uU(7,"\u5de5\u53f7"),n.qZA(),n.TgZ(8,"th",4),n._uU(9,"\u6240\u5c5e\u90e8\u95e8"),n.qZA(),n.TgZ(10,"th"),n._uU(11,"\u64cd\u4f5c"),n.qZA()()(),n.TgZ(12,"tbody"),n.YNc(13,H,4,2,"tr",5),n.qZA()(),n.TgZ(14,"button",6),n._UZ(15,"i",7),n._uU(16," \u65b0\u589e\u6210\u5458\n"),n.qZA()),2&e){const r=n.MAs(1);n.Q6J("nzFrontPagination",!1)("nzData",i.listOfData),n.xp6(13),n.Q6J("ngForOf",r.data)}},dependencies:[d.sg,d.O5,o.Fj,o.JJ,o.On,N.Ls,M.ix,x.w,Z.dQ,X.Zp,_.N8,_.Uo,_._C,_.Om,_.p0,_.$Z,y.JW],changeDetection:0}),t})();const R=["warehouseManageComponent"],Y=["taskManageComponent"],W=[{path:"",component:(()=>{class t{constructor(e,i){this.fb=e,this.message=i,this.pageHeaderInfo={title:"\u9ad8\u7ea7\u8868\u5355",desc:"\u9ad8\u7ea7\u8868\u5355\u5e38\u89c1\u4e8e\u4e00\u6b21\u6027\u8f93\u5165\u548c\u63d0\u4ea4\u5927\u6279\u91cf\u6570\u636e\u7684\u573a\u666f\u3002(\u6f14\u793a\u81ea\u5b9a\u4e49\u8868\u5355)",breadcrumb:["\u9996\u9875","\u8868\u5355\u9875","\u9ad8\u7ea7\u8868\u5355"]}}submit(){!(0,g.r7)(this.validateForm)|this.warehouseManageComponent.checkForm()|this.taskManageComponent.checkForm()||(this.message.info("\u63a7\u5236\u53f0\u6253\u5370\u51fa\u4e86\u8868\u5355\u6570\u636e"),console.log(this.validateForm.value))}ngOnInit(){this.validateForm=this.fb.group({warehouseManage:[null,[o.kI.required]],taskManage:[null,[o.kI.required]]})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(o.qu),n.Y36(C.dD))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-advanced"]],viewQuery:function(e,i){if(1&e&&(n.Gf(R,5),n.Gf(Y,5)),2&e){let r;n.iGM(r=n.CRH())&&(i.warehouseManageComponent=r.first),n.iGM(r=n.CRH())&&(i.taskManageComponent=r.first)}},decls:17,vars:5,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap","bg-color-no","p-b-50"],["nz-form","","nzLayout","vertical",3,"formGroup"],["nzTitle","\u4ed3\u5e93\u7ba1\u7406",1,"m-b-20",3,"nzBordered"],["formControlName","warehouseManage"],["warehouseManageComponent",""],["nzTitle","\u4efb\u52a1\u7ba1\u7406",1,"m-b-20",3,"nzBordered"],["formControlName","taskManage"],["taskManageComponent",""],["nzTitle","\u6210\u5458\u7ba1\u7406",3,"nzBordered"],["nz-button","","nzType","primary",1,"right",3,"click"]],template:function(e,i){1&e&&(n._UZ(0,"app-page-header",0),n.TgZ(1,"div",1)(2,"form",2)(3,"nz-card",3),n._UZ(4,"app-water-mark")(5,"app-warehouse-manage-form",4,5),n.qZA(),n.TgZ(7,"nz-card",6),n._UZ(8,"app-water-mark")(9,"app-task-manage-form",7,8),n.qZA(),n.TgZ(11,"nz-card",9),n._UZ(12,"app-water-mark")(13,"app-user-member-manage"),n.qZA()()(),n.TgZ(14,"app-footer-submit")(15,"button",10),n.NdJ("click",function(){return i.submit()}),n._uU(16,"\u63d0\u4ea4"),n.qZA()()),2&e&&(n.Q6J("pageHeaderInfo",i.pageHeaderInfo),n.xp6(2),n.Q6J("formGroup",i.validateForm),n.xp6(1),n.Q6J("nzBordered",!0),n.xp6(4),n.Q6J("nzBordered",!0),n.xp6(4),n.Q6J("nzBordered",!1))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,v.J,A.q,E.U,z.Lr,M.ix,x.w,Z.dQ,F.bd,U,O,P],styles:[".save[_ngcontent-%COMP%]{margin-right:8px}"],changeDetection:0}),t})(),data:{title:"Bi\u1ec3u m\u1eabu n\xe2ng cao",key:"advanced-form"}}];let $=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[T.Bz.forChild(W),T.Bz]}),t})(),G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[a.m,$]}),t})()},2802:(b,h,m)=>{m.d(h,{q:()=>F});var a=m(4650),T=m(9576),o=m(9116),g=m(6895),n=m(5655),C=m(4963),v=m(6287);function A(l,p){if(1&l&&(a.TgZ(0,"nz-breadcrumb-item")(1,"a"),a._uU(2),a.qZA()()),2&l){const d=p.$implicit;a.xp6(2),a.Oqu(d)}}function E(l,p){if(1&l&&(a.ynx(0),a._uU(1),a.BQk()),2&l){const d=a.oxw();a.xp6(1),a.Oqu(d.pageHeaderInfo.extra)}}function z(l,p){if(1&l&&(a.ynx(0),a._uU(1),a.BQk()),2&l){const d=a.oxw(2);a.xp6(1),a.Oqu(d.pageHeaderInfo.desc)}}function M(l,p){if(1&l&&(a.TgZ(0,"nz-page-header-content"),a.YNc(1,z,2,1,"ng-container",3),a.qZA()),2&l){const d=a.oxw();a.xp6(1),a.Q6J("nzStringTemplateOutlet",d.pageHeaderInfo.desc)}}function x(l,p){if(1&l&&(a.ynx(0),a._uU(1),a.BQk()),2&l){const d=a.oxw(2);a.xp6(1),a.Oqu(d.pageHeaderInfo.footer)}}function Z(l,p){if(1&l&&(a.TgZ(0,"nz-page-header-footer"),a.YNc(1,x,2,1,"ng-container",3),a.qZA()),2&l){const d=a.oxw();a.xp6(1),a.Q6J("nzStringTemplateOutlet",d.pageHeaderInfo.footer)}}let F=(()=>{class l{constructor(d,u){this.themesService=d,this.router=u,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return l.\u0275fac=function(d){return new(d||l)(a.Y36(T.f),a.Y36(o.F0))},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl"},decls:7,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(d,u){1&d&&(a.TgZ(0,"nz-page-header",0),a.NdJ("nzBack",function(){return u.back()}),a.TgZ(1,"nz-breadcrumb",1),a.YNc(2,A,3,1,"nz-breadcrumb-item",2),a.qZA(),a.TgZ(3,"nz-page-header-extra"),a.YNc(4,E,2,1,"ng-container",3),a.qZA(),a.YNc(5,M,2,1,"nz-page-header-content",4),a.YNc(6,Z,2,1,"nz-page-header-footer",4),a.qZA()),2&d&&(a.Q6J("nzTitle",u.pageHeaderInfo.title)("nzBackIcon",u.backTpl?u.backTpl:null)("nzGhost",!1),a.xp6(2),a.Q6J("ngForOf",u.pageHeaderInfo.breadcrumb),a.xp6(2),a.Q6J("nzStringTemplateOutlet",u.pageHeaderInfo.extra),a.xp6(1),a.Q6J("ngIf",u.pageHeaderInfo.desc),a.xp6(1),a.Q6J("ngIf",u.pageHeaderInfo.footer))},dependencies:[g.sg,g.O5,n.$O,n.u5,n.Jp,n.$,n.A2,C.Dg,C.MO,v.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),l})()}}]);