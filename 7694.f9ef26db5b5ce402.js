"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[7694],{22155:(Z,x,i)=>{i.d(x,{t:()=>m});var m=(()=>{return(z=m||(m={})).Demo="/default/dashboard/demo",z.Analysis="/default/dashboard/analysis",z.Monitor="/default/dashboard/monitor",z.Workbench="/default/dashboard/workbench",z.spxe00101="xe/spxe00101",z.spch00101="chuyen/spch00101",z.spch00201="chuyen/spch00201",z.spch00251="chuyen/spch00251",z.spch00252="chuyen/spch00252",z.spch00253="chuyen/spch00253",z.spch00254="chuyen/spch00254",z.spch00255="chuyen/spch00255",z.spkh00101="khachhang/spkh00101",z.spkh00201="khachhang/spkh00201",m;var z})()},91565:(Z,x,i)=>{i.d(x,{Q:()=>u});var m=i(15861),z=i(80529),b=i(44556),T=i(94650),S=i(54246);let u=(()=>{class n{constructor(d,l){this.http=d,this.httpt=l,this.urlApi="https://fakestoreapi.com/",this.provincesApi=b.tinhthanhApi,this.httpOptions={headers:new z.WM({"Content-Type":"application/json"})}}GetCallProvinces(d,l){var c=this;return(0,m.Z)(function*(){let p=c.httpt.get(c.provincesApi);return p.subscribe({next:g=>(d?.(g),!0),error:g=>(l?.(),!1),complete:()=>{}}),p})()}GetCallCommonWs(d,l,c){var p=this;return(0,m.Z)(function*(){let g=p.httpt.get(p.urlApi+d,{observe:"response"});return g.subscribe({next:r=>(l?.(r),!0),error:r=>(c?.(),!1),complete:()=>{}}),g})()}PostCallCommonWs(d,l,c,p){var g=this;return(0,m.Z)(function*(){let r=g.http.post(d,l,{needSuccessInfo:!1});return r.subscribe({next:_=>(c?.(_),!0),error:_=>(p?.(),!1),complete:()=>{}}),r})()}GetCallWs(d,l,c){var p=this;return(0,m.Z)(function*(){let g=p.http.get(d,{observe:"response"});return g.subscribe({next:r=>(l?.(r),!0),error:r=>(c?.(),!1),complete:()=>{}}),g})()}PostCallWs(d,l,c,p){var g=this;return(0,m.Z)(function*(){let r=g.http.post(d,l,{needSuccessInfo:!1});return r.subscribe({next:_=>(c?.(_),!0),error:_=>(p?.(),!1),complete:()=>{}}),r})()}PutCallWs(d,l,c,p){var g=this;return(0,m.Z)(function*(){let r=g.http.put(d,l,{needSuccessInfo:!0});return r.subscribe({next:_=>(c?.(_),!0),error:_=>(p?.(),!1),complete:()=>{}}),r})()}DeleteCallWs(d,l,c,p){var g=this;return(0,m.Z)(function*(){let r=g.http.delete(d,l,{needSuccessInfo:!0});return r.subscribe({next:_=>(c?.(_),!0),error:_=>(p?.(),!1),complete:()=>{}}),r})()}}return n.\u0275fac=function(d){return new(d||n)(T.LFG(S.q),T.LFG(z.eN))},n.\u0275prov=T.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},80126:(Z,x,i)=>{i.d(x,{u:()=>T});var m=i(44556),z=i(94650),b=i(54246);let T=(()=>{class S{constructor(n){this.http=n}postAll(n){return this.http.post(m.NguonxeAnt100GetAll,n,{needSuccessInfo:!1})}postDetail(n){return this.http.post(m.NguonxeAnt100GetDetail,n,{needSuccessInfo:!1})}postCreate(n){return this.http.post(m.NguonxeAnt100Create,n,{needSuccessInfo:!1})}postUpdate(n){return this.http.post(m.NguonxeAnt100Update,n,{needSuccessInfo:!1})}postDelete(n){return this.http.post(m.NguonxeAnt100Delete,n,{needSuccessInfo:!1})}postDeleteAll(n){return this.http.post(m.NguonxeAnt100DeleteAll,n,{needSuccessInfo:!1})}postUpdateStatus(n){return this.http.post(m.NguonxeAnt100UpdateStatus,n,{needSuccessInfo:!1})}}return S.\u0275fac=function(n){return new(n||S)(z.LFG(b.q))},S.\u0275prov=z.Yz7({token:S,factory:S.\u0275fac,providedIn:"root"}),S})()},67859:(Z,x,i)=>{i.d(x,{S:()=>g});var m=i(94650),c=i(91565);let p=(()=>{class r{constructor(f){this.webService=f}mobileRule(f){return f?function u(r){return/^(0|\+?84|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(r)}(f)?null:{message:"Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ch\xednh x\xe1c"}:null}telPhoneRule(f){return f?function n(r){return/^(0\d{2,3}-?)?\d{7,8}$/.test(r)}(f)?null:{message:"Vui l\xf2ng nh\u1eadp zalo ch\xednh x\xe1c"}:null}emailRule(f){return f?function C(r){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(r)}(f)?null:{message:"Vui l\xf2ng nh\u1eadp emali ch\xednh x\xe1c"}:null}passwordRule(f){return f?function d(r){return/^[^\s]{6,20}$/.test(r)&&!/^\d+$/.test(r)}(f)?null:{message:"M\u1eadt kh\u1ea9u bao g\u1ed3m 6 \u0111\u1ebfn 20 ch\u1eef c\xe1i vi\u1ebft hoa v\xe0 vi\u1ebft th\u01b0\u1eddng, s\u1ed1 ho\u1eb7c c\xe1c k\xfd t\u1ef1 kh\xe1c"}:null}}return r.\u0275fac=function(f){return new(f||r)(m.LFG(c.Q))},r.\u0275prov=m.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),g=(()=>{class r{constructor(f){this.vrService=f}emailValidator(){return this.commonUtil(this.vrService.emailRule)}mobileValidator(){return this.commonUtil(this.vrService.telPhoneRule)}passwordValidator(){return this.commonUtil(this.vrService.passwordRule)}zaloValidator(){return this.commonUtil(this.vrService.telPhoneRule)}commonUtil(f){return M=>f(M.value)}}return r.\u0275fac=function(f){return new(f||r)(m.LFG(p))},r.\u0275prov=m.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},57694:(Z,x,i)=>{i.r(x),i.d(x,{Spch00251Module:()=>Pn});var m=i(9116),z=i(22155),b=i(13951),T=i(44556),S=i(22195),u=i(24006),n=i(94650),C=i(91565),d=i(36895),l=i(99651),c=i(49651),p=i(49523),g=i(39646),r=i(28746),_=i(50007),f=i(67859),M=i(69454),N=i(85726),E=i(73679),X=i(36704),y=i(35635),F=i(38231),Q=i(48521);function U(e,s){1&e&&(n.ynx(0),n.TgZ(1,"nz-form-item")(2,"nz-form-label",33),n._uU(3,"S\u1ed1 th\u1ee9 t\u1ef1"),n.qZA(),n.TgZ(4,"nz-form-control",3),n._UZ(5,"input",34),n.qZA()(),n.BQk()),2&e&&(n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("readOnly",!0))}function w(e,s){if(1&e&&n._UZ(0,"nz-option",35),2&e){const t=s.$implicit;n.Q6J("nzValue",t.id)("nzLabel",t.name)}}const O=function(){return{minRows:2,maxRows:6}};let B=(()=>{class e{constructor(t,o,a,h,A){this.modalRef=t,this.fb=o,this.cdf=a,this.validatorsService=h,this.dataKhachhangService=A,this.const=T,this.listKh=[],this.tiencuocMode=0,this.tiencuocxengoaiMode=0,this.editForm=!1}changeTiencuoc(t){this.tiencuocMode=t}changeTiencuocxengoai(t){this.tiencuocxengoaiMode=t}getAsyncFnData(t){return(0,g.of)(t)}getCurrentValue(){return(0,p.r7)(this.addEditForm)?(this.addEditForm.value.tiencuoc=this.tiencuocMode,this.addEditForm.value.tiencuocxengoai=this.tiencuocxengoaiMode,(0,g.of)(this.addEditForm.value)):(0,g.of)(!1)}ngOnInit(){this.getListKh(),this.initForm(),Object.keys(this.params).length>0&&(this.editForm=!0,this.setFormStatusByType("enable"),this.addEditForm.patchValue(this.params),this.tiencuocMode=this.params.tiencuoc,this.tiencuocxengoaiMode=this.params.tiencuocxengoai,console.log(this.params))}initForm(){this.addEditForm=this.fb.group({stt:[null],thongtindonhang:[null,[u.kI.required]],diadiembochang:[null,[u.kI.required]],htttxengoai:["1",[u.kI.required]],idkhachhang:["",[u.kI.required]],htttkhachhang:["1",[u.kI.required]],tennguoinhan:[null,[u.kI.required]],sdtnguoinhan:[null,[u.kI.required,this.validatorsService.mobileValidator()]],diachinguoinhan:[null,[u.kI.required]],status02:["1",[u.kI.required]],ghichu:[null]})}setFormStatusByType(t){this.addEditForm.get("stt")?.[t]()}getListKh(){this.dataKhachhangService.getAccount({pageSize:0,pageNum:0,filters:{phongban_id:this.const.idKhachhang}}).pipe((0,r.x)(()=>{})).subscribe(o=>{this.listKh=o,this.cdf.markForCheck()})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(_.Lf),n.Y36(u.qu),n.Y36(n.sBO),n.Y36(f.S),n.Y36(M.B))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-subwindowctchuyenngoai"]],decls:77,vars:55,consts:[["nz-form","",3,"formGroup"],[4,"ngIf"],["nzRequired","","nzFor","thongtindonhang",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ...",3,"nzSm","nzXs"],["nz-input","","formControlName","thongtindonhang","name","thongtindonhang","placeholder","Vui l\xf2ng nh\u1eadp ...","id","thongtindonhang"],["nzRequired","","nzFor","diadiembochang",3,"nzSm","nzXs"],["nz-input","","formControlName","diadiembochang","name","diadiembochang","placeholder","Vui l\xf2ng nh\u1eadp ...","id","diadiembochang"],["nzRequired","","nzFor","tiencuoc",3,"nzSm","nzXs"],[3,"Amount","changeAmount"],["nzRequired","","nzFor","tiencuocxengoai",3,"nzSm","nzXs"],["nzRequired","","nzFor","htttxengoai",3,"nzSm","nzXs"],["nzErrorTip","",3,"nzSm","nzXs"],["formControlName","htttxengoai"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","2"],["nzRequired","","nzFor","idkhachhang",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn",3,"nzSm","nzXs"],["name","idkhachhang","id","idkhachhang","formControlName","idkhachhang","nzAllowClear","","nzShowSearch","","nzPlaceHolder","Select"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzRequired","","nzFor","htttkhachhang",3,"nzSm","nzXs"],["formControlName","htttkhachhang"],["nz-radio","","nzValue","3"],["nzRequired","","nzFor","tennguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","tennguoinhan","name","tennguoinhan","placeholder","Vui l\xf2ng nh\u1eadp ...","id","tennguoinhan"],["nzRequired","","nzFor","sdtnguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","sdtnguoinhan","name","sdtnguoinhan","placeholder","Vui l\xf2ng nh\u1eadp ...","id","sdtnguoinhan"],["nzRequired","","nzFor","diachinguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","diachinguoinhan","name","diachinguoinhan","placeholder","Vui l\xf2ng nh\u1eadp ...","id","diachinguoinhan"],["nzRequired","","nzFor","status02",3,"nzSm","nzXs"],["formControlName","status02"],["nz-radio","","nzValue","0"],["nzFor","ghichu",3,"nzSm","nzXs"],["nz-input","","formControlName","ghichu","placeholder","M\u1ed1t s\u1ed1 ghi ch\xfa v\u1ec1 chi ti\u1ebft \u0111\u01a1n h\xe0ng.",3,"nzAutosize"],["nzRequired","","nzFor","stt",3,"nzSm","nzXs"],["nz-input","","formControlName","stt","name","stt","placeholder","","id","stt",3,"readOnly"],[3,"nzValue","nzLabel"]],template:function(t,o){1&t&&(n.TgZ(0,"form",0),n.YNc(1,U,6,5,"ng-container",1),n.TgZ(2,"nz-form-item")(3,"nz-form-label",2),n._uU(4,"Th\xf4ng tin \u0111\u01a1n h\xe0ng"),n.qZA(),n.TgZ(5,"nz-form-control",3),n._UZ(6,"input",4),n.qZA()(),n.TgZ(7,"nz-form-item")(8,"nz-form-label",5),n._uU(9,"\u0110\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng"),n.qZA(),n.TgZ(10,"nz-form-control",3),n._UZ(11,"input",6),n.qZA()(),n.TgZ(12,"nz-form-item")(13,"nz-form-label",7),n._uU(14,"Ti\u1ec1n c\u01b0\u1edbc"),n.qZA(),n.TgZ(15,"nz-form-control",3)(16,"app-input-currency",8),n.NdJ("changeAmount",function(h){return o.changeTiencuoc(h)}),n.qZA()()(),n.TgZ(17,"nz-form-item")(18,"nz-form-label",9),n._uU(19,"Ti\u1ec1n c\u01b0\u1edbc xe ngo\xe0i"),n.qZA(),n.TgZ(20,"nz-form-control",3)(21,"app-input-currency",8),n.NdJ("changeAmount",function(h){return o.changeTiencuocxengoai(h)}),n.qZA()()(),n.TgZ(22,"nz-form-item")(23,"nz-form-label",10),n._uU(24,"HTTT Xe ngo\xe0i"),n.qZA(),n.TgZ(25,"nz-form-control",11)(26,"nz-radio-group",12)(27,"label",13),n._uU(28,"Tr\u1ef1c ti\u1ebfp"),n.qZA(),n.TgZ(29,"label",14),n._uU(30,"Ghi n\u1ee3"),n.qZA()()()(),n.TgZ(31,"nz-form-item")(32,"nz-form-label",15),n._uU(33,"Id Kh\xe1ch h\xe0ng"),n.qZA(),n.TgZ(34,"nz-form-control",16)(35,"nz-select",17),n.YNc(36,w,1,2,"nz-option",18),n.qZA()()(),n.TgZ(37,"nz-form-item")(38,"nz-form-label",19),n._uU(39,"HTTT Kh\xe1ch h\xe0ng"),n.qZA(),n.TgZ(40,"nz-form-control",11)(41,"nz-radio-group",20)(42,"label",13),n._uU(43,"Tr\u1ef1c ti\u1ebfp"),n.qZA(),n.TgZ(44,"label",14),n._uU(45,"Ghi n\u1ee3"),n.qZA(),n.TgZ(46,"label",21),n._uU(47,"Khi nh\u1eadn h\xe0ng"),n.qZA()()()(),n.TgZ(48,"nz-form-item")(49,"nz-form-label",22),n._uU(50,"T\xean ng\u01b0\u1eddi nh\u1eadn"),n.qZA(),n.TgZ(51,"nz-form-control",3),n._UZ(52,"input",23),n.qZA()(),n.TgZ(53,"nz-form-item")(54,"nz-form-label",24),n._uU(55,"SDT ng\u01b0\u1eddi nh\u1eadn"),n.qZA(),n.TgZ(56,"nz-form-control",3),n._UZ(57,"input",25),n.qZA()(),n.TgZ(58,"nz-form-item")(59,"nz-form-label",26),n._uU(60,"\u0110\u1ecba ch\u1ec9 ng\u01b0\u1eddi nh\u1eadn"),n.qZA(),n.TgZ(61,"nz-form-control",3),n._UZ(62,"input",27),n.qZA()(),n.TgZ(63,"nz-form-item")(64,"nz-form-label",28),n._uU(65,"Thu h\u1ed3i bi\xean lai"),n.qZA(),n.TgZ(66,"nz-form-control",11)(67,"nz-radio-group",29)(68,"label",13),n._uU(69,"C\xf3"),n.qZA(),n.TgZ(70,"label",30),n._uU(71,"Kh\xf4ng"),n.qZA()()()(),n.TgZ(72,"nz-form-item")(73,"nz-form-label",31),n._uU(74,"Ghi ch\xfa"),n.qZA(),n.TgZ(75,"nz-form-control",11),n._UZ(76,"textarea",32),n.qZA()()()),2&t&&(n.Q6J("formGroup",o.addEditForm),n.xp6(1),n.Q6J("ngIf",o.editForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("Amount",o.tiencuocMode),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("Amount",o.tiencuocxengoaiMode),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(7),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",o.listKh),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(9),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(7),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzAutosize",n.DdM(54,O)))},dependencies:[d.sg,d.O5,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,N.e,E.t3,E.SK,X.Lr,X.Nx,X.iK,X.Fd,y.Zp,y.rh,F.Ip,F.Vq,Q.Of,Q.Dg]}),e})();var k=i(69174);let q=(()=>{class e{constructor(t){this.modalWrapService=t}getContentComponent(){return B}show(t={},o){return this.modalWrapService.show(this.getContentComponent(),t,o)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(k.U))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=i(80126),P=i(63604),G=i(47094),R=i(32802),Y=i(5529),H=i(35656),V=i(94178),W=i(21102),K=i(66616),$=i(47044),j=i(21811),nn=i(51971),tn=i(834);const en=["operationTpl"],on=["tiencuocTpl"],an=["tiencuocxengoaiTpl"],rn=["thongtindonhangTpl"],sn=["diadiembochangTpl"],ln=["ghichuTpl"],hn=["htttkhachhangTpl"],un=["htttxengoaiTpl"],cn=["sdtnguoinhanTpl"],pn=["tennguoinhanTpl"],mn=["diachinguoinhanTpl"];function dn(e,s){1&e&&(n.ynx(0),n.TgZ(1,"span",39),n._uU(2,"Quay l\u1ea1i"),n.qZA(),n.BQk())}function gn(e,s){if(1&e&&n.YNc(0,dn,3,0,"ng-container",38),2&e){const t=n.oxw();n.Q6J("ngIf",t.showreturnBack)}}function zn(e,s){if(1&e&&n._UZ(0,"nz-option",40),2&e){const t=s.$implicit;n.hYB("nzLabel","",t.datacd," - ",t.datanm,""),n.s9C("nzValue",t.id)}}function fn(e,s){if(1&e&&(n.ynx(0),n._uU(1),n.BQk()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Oqu(t.errors.message)}}function _n(e,s){1&e&&(n.ynx(0),n._uU(1,"Ph\u1ea7n b\u1eaft bu\u1ed9c"),n.BQk())}function Tn(e,s){if(1&e&&(n.YNc(0,fn,2,1,"ng-container",38),n.YNc(1,_n,2,0,"ng-container",38)),2&e){const t=s.$implicit;n.Q6J("ngIf",t.hasError("message")),n.xp6(1),n.Q6J("ngIf",t.hasError("required"))}}function Sn(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"span",42)(1,"button",43),n.NdJ("click",function(){n.CHM(t);const a=n.oxw().stt,h=n.oxw();return n.KtG(h.edit(a))}),n._uU(2,"C\u1eadp nh\u1eadt"),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("disabled",t.btnUpdate)}}function xn(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"span",42)(1,"button",43),n.NdJ("click",function(){n.CHM(t);const a=n.oxw().stt,h=n.oxw();return n.KtG(h.del(a))}),n._uU(2,"X\xf3a"),n.qZA()()}if(2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("disabled",t.btnDelete)}}function bn(e,s){if(1&e&&(n.YNc(0,Sn,3,1,"span",41),n.YNc(1,xn,3,1,"span",41)),2&e){const t=n.oxw();n.Q6J("appAuth",t.ActionCode.ChuyenngoaiEdit),n.xp6(1),n.Q6J("appAuth",t.ActionCode.ChuyenngoaiDel)}}function Cn(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"currency"),n.qZA()),2&e){const t=s.tiencuoc;n.xp6(1),n.Oqu(n.Dn7(2,1,1e3*t,"VND",""))}}function An(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"currency"),n.qZA()),2&e){const t=s.tiencuocxengoai;n.xp6(1),n.Oqu(n.Dn7(2,1,1e3*t,"VND",""))}}function Xn(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=s.thongtindonhang;n.xp6(1),n.Oqu(t)}}function vn(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=s.diadiembochang;n.xp6(1),n.Oqu(t)}}function Zn(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=s.ghichu;n.xp6(1),n.Oqu(t)}}function En(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=s.htttkhachhang,o=n.oxw();n.xp6(1),n.Oqu(o.mergeHttt(t))}}function yn(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=s.htttxengoai,o=n.oxw();n.xp6(1),n.Oqu(o.mergeHttt(t))}}function Fn(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=s.sdtnguoinhan;n.xp6(1),n.Oqu(t)}}function Dn(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=s.tennguoinhan;n.xp6(1),n.Oqu(t)}}function Mn(e,s){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=s.diachinguoinhan;n.xp6(1),n.Oqu(t)}}function Jn(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"button",46),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2);return n.KtG(a.add())}),n._UZ(1,"i",47),n._uU(2," Th\xeam m\u1edbi "),n.qZA()}if(2&e){const t=n.oxw(2);n.Q6J("disabled",t.btnNew)}}function Qn(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"button",48),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2);return n.KtG(a.allDel())}),n._UZ(1,"i",49),n._uU(2," X\xf3a t\u1ea5t c\u1ea3 "),n.qZA()}if(2&e){const t=n.oxw(2);n.Q6J("disabled",t.btnDeleteAll)}}function Ln(e,s){if(1&e&&(n.YNc(0,Jn,3,1,"button",44),n.YNc(1,Qn,3,1,"button",45)),2&e){const t=n.oxw();n.Q6J("appAuth",t.ActionCode.ChuyenngoaiAdd),n.xp6(1),n.Q6J("appAuth",t.ActionCode.DataScDelAll)}}function Nn(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"span",42)(1,"button",46),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(3);return n.KtG(a.fnBtnConfirm())}),n._UZ(2,"i",50),n._uU(3," Confirm "),n.qZA()()}if(2&e){const t=n.oxw(3);n.xp6(1),n.Q6J("disabled",!t.btnConfirm)("disabled",!t.headerForm.valid)}}function Un(e,s){if(1&e&&(n.ynx(0),n.YNc(1,Nn,4,2,"span",41),n.BQk()),2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("appAuth",t.ActionCode.ConfirmChuyenngoai)}}function wn(e,s){if(1&e&&n.YNc(0,Un,2,1,"ng-container",38),2&e){const t=n.oxw();n.Q6J("ngIf",t.showConfirm)}}const On=function(){return{"padding-bottom":0}},D=function(){return{xs:8,sm:16,md:24}},Bn=function(){return{minRows:2,maxRows:6}},kn=[{path:"",component:(()=>{class e extends b.H{constructor(t,o,a,h,A,v,J,Gn,Rn,Yn,Hn,Vn){super(t,o,a,h,A),this.webService=t,this.router=o,this.cdf=a,this.datePipe=h,this.tabService=A,this.message=v,this.subwinCtChuyenngoaiService=J,this.modalSrv=Gn,this.nguonxeService=Rn,this.dataService=Yn,this.chuyenngoaiDto=Hn,this.fb=Vn,this.DisplayScreenID=z.t.spch00251,this.searchParam={},this.dateFormat=T.dateFormat,this.dataList=[],this.checkedCashArray=[],this.ActionCode=S.h,this.availableOptions=[],this.pageHeaderInfo={title:"Qu\u1ea3n l\xfd chuy\u1ebfn ngo\xe0i",breadcrumb:["Home","Chuy\u1ebfn","Qu\u1ea3n l\xfd chuy\u1ebfn ngo\xe0i"],desc:""},this.ngaynhap=null,this.ngayvanchuyen=null,this.ngaydukiengiaohang=null,this.listnguonxe=[],this.biensoxe="",this.tentaixe="",this.sodienthoai="",this.ghichu="",this.listdetail=[],this.disabledidchuyenngoai=!0,this.disabledsdtnguonxe=!0,this.showConfirm=!1,this.btnConfirm=!0,this.btnNew=!0,this.btnDelete=!0,this.btnDeleteAll=!0,this.btnUpdate=!0,this.showreturnBack=!1}fnInit(){}destroy(){}ngOnInit(){this.initTable(),this.headerForm=this.createForm(),this.showBtnConfirm(),this.fnGetAllNguonXe(),!0===this.chuyenngoaiDto.initFlg&&(this.btnNew=!1,this.btnDelete=!1,this.btnDeleteAll=!1,this.btnUpdate=!1,this.showreturnBack=!1),"link"==this.chuyenngoaiDto.mode&&!1===this.chuyenngoaiDto.initFlg&&(this.tableLoading(!0),this.dataService.postDetail({id:this.chuyenngoaiDto.id}).pipe().subscribe(t=>{this.listdetail=[...t.listdetail];let o=1;for(let a of this.listdetail)a.stt=o,o++;this.getDataList(),this.headerForm.patchValue(t.resHeader),this.showreturnBack=!0}),this.chuyenngoaiDto.mode="",this.chuyenngoaiDto.initFlg=!0),"update"==this.chuyenngoaiDto.mode&&!1===this.chuyenngoaiDto.initFlg&&(this.tableLoading(!0),this.dataService.postDetail({id:this.chuyenngoaiDto.id}).pipe().subscribe(t=>{this.listdetail=[...t.listdetail];let o=1;for(let a of this.listdetail)a.stt=o,o++;this.getDataList(),this.headerForm.patchValue(t.resHeader),this.showBtnConfirm(),this.btnDelete=!1,this.btnDeleteAll=!0,this.btnNew=!1,this.btnUpdate=!1,this.showreturnBack=!0}))}fnGetAllNguonXe(){this.nguonxeService.postAll({pageSize:0,pageNum:0}).pipe().subscribe(o=>{this.listnguonxe=o})}fnBtnConfirm(){if(this.headerForm.value.id&&""==this.chuyenngoaiDto.id&&24==this.headerForm.value.id.length)this.chuyenngoaiDto.clear(),this.headerForm.reset();else{let t={},o="",a="",h="";!1===this.chuyenngoaiDto.initFlg&&"update"==this.chuyenngoaiDto.mode?(h="update",o="B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n c\u1eadp nh\u1eadt !",a="D\u1eef li\u1ec7u s\u1ebd \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt sau khi nh\u1ea5n OK",t={spch00251Header:this.headerForm.value,spch00251Listdetail:this.dataList,mode:"update"}):(h="create",o="B\u1ea1n ch\u1eafc ch\u1eafn d\u1eef li\u1ec7u b\u1ea1n t\u1ea1o \u0111\xe3 \u0111\xfang ch\u01b0a !",a="Nh\u1ea5n ok \u0111\u1ec3 ho\xe0n th\xe0nh c\xf4ng vi\u1ec7c !",t={spch00251Header:this.headerForm.value,spch00251Listdetail:this.dataList,mode:"create"}),this.modalSrv.confirm({nzTitle:o,nzContent:a,nzOnOk:()=>{this.dataService.postCreate(t).pipe().subscribe(A=>{this.tableLoading(!0),this.listdetail=A.reslistdetail;let v=1;for(let J of this.listdetail)J.stt=v,v++;this.headerForm.patchValue(A.resspch00251Header),this.getDataList(),this.chuyenngoaiDto.initFlg=!1,this.chuyenngoaiDto.mode="update",this.chuyenngoaiDto.listdetail=A.reslistdetail,this.message.success("create"==h?"\u0110\u0103ng k\xfd th\xe0nh c\xf4ng !":"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng !")})}})}}createForm(){return this.fb.group({id:[""],nguonxe:[null,[u.kI.required]],sdtnguonxe:["",[u.kI.required]],ngaynhap:[this.getDate(),[u.kI.required]],ngayvanchuyen:[null,[u.kI.required]],ngaydukiengiaohang:[null],biensoxe:[null,[u.kI.required]],tentaixe:[null,[u.kI.required]],sodienthoai:[null,[u.kI.required]],ghichu:[""]})}submitForm(){console.log("submit",this.headerForm.value)}fnChangeNguonXe(t){this.nguonxeService.postDetail({id:t}).pipe().subscribe(a=>{this.headerForm.patchValue({sdtnguonxe:a.sodienthoai})})}reloadTable(){this.message.info("\u0110\xe3 \u0111\u01b0\u1ee3c l\xe0m m\u1edbi"),this.getDataList()}getDataList(t){this.tableLoading(!0),this.listdetail.length>0?(this.dataList=[...this.listdetail],this.tableLoading(!1)):this.tableLoading(!1)}selectedChecked(t){this.checkedCashArray=[...t]}changePageSize(t){this.tableConfig.pageSize=t}tableChangeDectction(){this.dataList=[...this.dataList],this.cdf.detectChanges()}tableLoading(t){this.tableConfig.loading=t,this.tableChangeDectction()}add(){this.subwinCtChuyenngoaiService.show({nzTitle:"Th\xeam m\u1edbi"}).subscribe(t=>{!t||0===t.status||(this.tableLoading(!0),this.mergeDetail(t.modalValue),this.addListDetail(),this.getDataList(),this.showBtnConfirm())},t=>this.tableLoading(!1))}edit(t){let o;for(let a of this.dataList)a.stt===t&&(o=a);this.subwinCtChuyenngoaiService.show({nzTitle:"C\u1eadp nh\u1eadt"},o).subscribe(({modalValue:a,status:h})=>{0!==h&&(this.tableLoading(!0),a.stt=t,this.mergeUpdateList(a),this.getDataList(),this.message.info("Click Confirm \u0111\u1ec3 ho\xe0n th\xe0nh c\u1eadp nh\u1eadt "))})}del(t){this.modalSrv.confirm({nzTitle:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a n\xf3 kh\xf4ng?",nzContent:"Kh\xf4ng th\u1ec3 ph\u1ee5c h\u1ed3i sau khi x\xf3a",nzOnOk:()=>{this.tableLoading(!0),this.listdetail=this.listdetail.filter(o=>o.stt!==t),this.dataList=[...this.listdetail],this.showBtnConfirm(),this.tableLoading(!1)}})}showBtnConfirm(){this.showConfirm=this.dataList.length>0}allDel(){}addListDetail(){this.ctchuyenngoai&&(this.listdetail=this.listdetail.concat(this.ctchuyenngoai))}mergeDetail(t){let o=0,a=this.listdetail.length;if(0==a)o=1;else{let h=this.listdetail[a-1].stt;h&&h>0&&(o=h+1)}return this.ctchuyenngoai=t,this.ctchuyenngoai.stt=o,this.ctchuyenngoai}mergeUpdateList(t){for(let o of this.listdetail)o.stt==t.stt&&(o.thongtindonhang=t.thongtindonhang,o.diadiembochang=t.diadiembochang,o.ghichu=t.ghichu,o.idkhachhang=t.idkhachhang,o.htttkhachhang=t.htttkhachhang,o.htttxengoai=t.htttxengoai,o.sdtnguoinhan=t.sdtnguoinhan,o.tennguoinhan=t.tennguoinhan,o.diachinguoinhan=t.diachinguoinhan,o.tiencuoc=t.tiencuoc,o.status02=t.status02,o.tiencuocxengoai=t.tiencuocxengoai)}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"STT",field:"stt",width:80},{title:"Th\xf4ng tin \u0111\u01a1n h\xe0ng",field:"thongtindonhang",width:280,tdTemplate:this.thongtindonhangTpl},{title:"\u0110\u1ecba \u0111i\u1ec3m b\u1ed1c h\xe0ng",width:280,field:"diadiembochang",tdTemplate:this.diadiembochangTpl},{title:"Ti\u1ec1n c\u01b0\u1edbc",width:120,field:"tiencuoc",tdTemplate:this.tiencuocTpl},{title:"Ti\u1ec1n thu\xea xe ngo\xe0i",width:250,field:"tiencuocxengoai",tdTemplate:this.tiencuocxengoaiTpl},{title:"HTTT xe ngo\xe0i",width:200,field:"htttxengoai",tdTemplate:this.htttxengoaiTpl},{title:"HTTT kh\xe1ch h\xe0ng",width:200,field:"htttkhachhang",tdTemplate:this.htttkhachhangTpl},{title:"T\xean ng\u01b0\u1eddi nh\u1eadn",width:150,field:"tennguoinhan",tdTemplate:this.tennguoinhanTpl},{title:"SDT ng\u01b0\u1eddi nh\u1eadn",width:150,field:"sdtnguoinhan",tdTemplate:this.sdtnguoinhanTpl},{title:"\u0110ia ch\u1ec9 ng\u01b0\u1eddi nh\u1eadn",width:230,field:"diachinguoinhan",tdTemplate:this.diachinguoinhanTpl},{title:"Ghi ch\xfa",width:350,field:"ghichu",tdTemplate:this.ghichuTpl},{title:"H\xe0nh \u0111\u1ed9ng",tdTemplate:this.operationTpl,width:300,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(C.Q),n.Y36(m.F0),n.Y36(n.sBO),n.Y36(d.uU),n.Y36(l.p),n.Y36(c.dD),n.Y36(q),n.Y36(_.Sf),n.Y36(I.u),n.Y36(P.h),n.Y36(G.d),n.Y36(u.qu))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-spch00251"]],viewQuery:function(t,o){if(1&t&&(n.Gf(en,7),n.Gf(on,7),n.Gf(an,7),n.Gf(rn,7),n.Gf(sn,7),n.Gf(ln,7),n.Gf(hn,7),n.Gf(un,7),n.Gf(cn,7),n.Gf(pn,7),n.Gf(mn,7)),2&t){let a;n.iGM(a=n.CRH())&&(o.operationTpl=a.first),n.iGM(a=n.CRH())&&(o.tiencuocTpl=a.first),n.iGM(a=n.CRH())&&(o.tiencuocxengoaiTpl=a.first),n.iGM(a=n.CRH())&&(o.thongtindonhangTpl=a.first),n.iGM(a=n.CRH())&&(o.diadiembochangTpl=a.first),n.iGM(a=n.CRH())&&(o.ghichuTpl=a.first),n.iGM(a=n.CRH())&&(o.htttkhachhangTpl=a.first),n.iGM(a=n.CRH())&&(o.htttxengoaiTpl=a.first),n.iGM(a=n.CRH())&&(o.sdtnguoinhanTpl=a.first),n.iGM(a=n.CRH())&&(o.tennguoinhanTpl=a.first),n.iGM(a=n.CRH())&&(o.diachinguoinhanTpl=a.first)}},features:[n.qOj],decls:101,vars:219,consts:[[3,"backTpl","backUrl","pageHeaderInfo"],["backTpl",""],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form","",3,"formGroup","ngSubmit"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nzRequired","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzFor"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nz-input","","name","id","formControlName","id","placeholder","M\xe3 chuy\u1ebfn ngo\xe0i","readonly","",3,"disabled"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzErrorTip"],["name","nguonxe","nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select","formControlName","nguonxe",3,"ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nz-input","","name","sdtnguonxe","id","sdtnguonxe","formControlName","sdtnguonxe","placeholder","","readonly","",3,"disabled"],["name","ngaynhap","formControlName","ngaynhap",3,"nzFormat","nzPlaceHolder"],["name","ngayvanchuyen","formControlName","ngayvanchuyen",3,"nzFormat","nzPlaceHolder"],["name","ngaydukiengiaohang","formControlName","ngaydukiengiaohang",3,"nzFormat","nzPlaceHolder"],["nz-input","","name","biensoxe","formControlName","biensoxe","placeholder","Bi\u1ec3n s\u1ed1 xe"],["nz-input","","name","tentaixe","formControlName","tentaixe","placeholder","T\xean t\xe0i x\xea"],["nz-input","","name","sodienthoai","formControlName","sodienthoai","placeholder","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i t\xe0i x\u1ebf"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzFor"],["nz-input","","name","ghichu","formControlName","ghichu","placeholder","Ghi ch\xfa",3,"nzAutosize"],["combineTpl",""],[3,"tableTitle","btnTpl","btnConfirm","reload"],[3,"checkedCashArrayFromComment","tableConfig","tableData","selectedChange","changePageSize","changePageNum"],["operationTpl",""],["tiencuocTpl",""],["tiencuocxengoaiTpl",""],["thongtindonhangTpl",""],["diadiembochangTpl",""],["ghichuTpl",""],["htttkhachhangTpl",""],["htttxengoaiTpl",""],["sdtnguoinhanTpl",""],["tennguoinhanTpl",""],["diachinguoinhanTpl",""],["tableBtns",""],["tableConfirm",""],[4,"ngIf"],["nz-icon","","nzType","arrow-left","nzTheme","outline"],[3,"nzLabel","nzValue"],["class","operate-text",4,"appAuth"],[1,"operate-text"],["nz-button","","nzType","primary","nzGhost","",3,"disabled","click"],["nz-button","","nzType","primary","class","m-r-8",3,"disabled","click",4,"appAuth"],["nz-button","","nzType","default",3,"disabled","click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"disabled","click"],["nz-icon","","nzType","plus"],["nz-button","","nzType","default",3,"disabled","click"],["nz-icon","","nzType","delete"],["nz-icon","","nzType","caret-right"]],template:function(t,o){if(1&t&&(n._UZ(0,"app-page-header",0),n.YNc(1,gn,1,1,"ng-template",null,1,n.W1O),n.TgZ(3,"div",2)(4,"nz-card",3)(5,"form",4),n.NdJ("ngSubmit",function(){return o.submitForm()}),n.TgZ(6,"div",5)(7,"div",6)(8,"nz-form-item")(9,"nz-form-label",7),n._uU(10,"M\xe3 chuy\u1ebfn ngo\xe0i"),n.qZA(),n.TgZ(11,"nz-form-control",8),n._UZ(12,"input",9),n.qZA()()(),n.TgZ(13,"div",6)(14,"nz-form-item")(15,"nz-form-label",7),n._uU(16,"Ngu\u1ed3n xe"),n.qZA(),n.TgZ(17,"nz-form-control",10)(18,"nz-select",11),n.NdJ("ngModelChange",function(h){return o.fnChangeNguonXe(h)}),n.YNc(19,zn,1,3,"nz-option",12),n.qZA()()()(),n.TgZ(20,"div",6)(21,"nz-form-item")(22,"nz-form-label",7),n._uU(23,"SDT ngu\u1ed3n xe"),n.qZA(),n.TgZ(24,"nz-form-control",8),n._UZ(25,"input",13),n.qZA()()()(),n.TgZ(26,"div",5)(27,"div",6)(28,"nz-form-item")(29,"nz-form-label",7),n._uU(30,"Ng\xe0y nh\u1eadp"),n.qZA(),n.TgZ(31,"nz-form-control",10),n._UZ(32,"nz-date-picker",14),n.qZA()()(),n.TgZ(33,"div",6)(34,"nz-form-item")(35,"nz-form-label",7),n._uU(36,"Ng\xe0y v\u1eadn chuy\u1ec3n"),n.qZA(),n.TgZ(37,"nz-form-control",10),n._UZ(38,"nz-date-picker",15),n.qZA()()(),n.TgZ(39,"div",6)(40,"nz-form-item")(41,"nz-form-label",7),n._uU(42,"Ng\xe0y d\u1ef1 ki\u1ebfn GH"),n.qZA(),n.TgZ(43,"nz-form-control",10),n._UZ(44,"nz-date-picker",16),n.qZA()()()(),n.TgZ(45,"div",5)(46,"div",6)(47,"nz-form-item")(48,"nz-form-label",7),n._uU(49,"Bi\u1ec3n s\u1ed1 xe"),n.qZA(),n.TgZ(50,"nz-form-control",10),n._UZ(51,"input",17),n.qZA()()(),n.TgZ(52,"div",6)(53,"nz-form-item")(54,"nz-form-label",7),n._uU(55,"T\xean t\xe0i x\u1ebf"),n.qZA(),n.TgZ(56,"nz-form-control",10),n._UZ(57,"input",18),n.qZA()()(),n.TgZ(58,"div",6)(59,"nz-form-item")(60,"nz-form-label",7),n._uU(61,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),n.qZA(),n.TgZ(62,"nz-form-control",10),n._UZ(63,"input",19),n.qZA()()()(),n.TgZ(64,"div",5)(65,"div",6)(66,"nz-form-item")(67,"nz-form-label",20),n._uU(68,"Ghi ch\xfa"),n.qZA(),n.TgZ(69,"nz-form-control",10),n._UZ(70,"textarea",21),n.qZA()()()()(),n.YNc(71,Tn,2,2,"ng-template",null,22,n.W1O),n.qZA(),n.TgZ(73,"app-card-table-wrap",23),n.NdJ("reload",function(){return o.reloadTable()}),n.TgZ(74,"app-ant-table",24),n.NdJ("selectedChange",function(h){return o.selectedChecked(h)})("changePageSize",function(h){return o.changePageSize(h)})("changePageNum",function(h){return o.getDataList(h)}),n.qZA(),n.YNc(75,bn,2,2,"ng-template",null,25,n.W1O),n.YNc(77,Cn,3,5,"ng-template",null,26,n.W1O),n.YNc(79,An,3,5,"ng-template",null,27,n.W1O),n.YNc(81,Xn,2,1,"ng-template",null,28,n.W1O),n.YNc(83,vn,2,1,"ng-template",null,29,n.W1O),n.YNc(85,Zn,2,1,"ng-template",null,30,n.W1O),n.YNc(87,En,2,1,"ng-template",null,31,n.W1O),n.YNc(89,yn,2,1,"ng-template",null,32,n.W1O),n.YNc(91,Fn,2,1,"ng-template",null,33,n.W1O),n.YNc(93,Dn,2,1,"ng-template",null,34,n.W1O),n.YNc(95,Mn,2,1,"ng-template",null,35,n.W1O),n.qZA(),n.YNc(97,Ln,2,2,"ng-template",null,36,n.W1O),n.YNc(99,wn,1,1,"ng-template",null,37,n.W1O),n.qZA()),2&t){const a=n.MAs(2),h=n.MAs(72),A=n.MAs(98),v=n.MAs(100);n.Q6J("backTpl",a)("backUrl","/default/chuyen/spch00252")("pageHeaderInfo",o.pageHeaderInfo),n.xp6(4),n.Q6J("nzBodyStyle",n.DdM(213,On)),n.xp6(1),n.Q6J("formGroup",o.headerForm),n.xp6(1),n.Q6J("nzGutter",n.DdM(214,D)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("disabled",!0),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",h),n.xp6(2),n.Q6J("ngForOf",o.listnguonxe),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("disabled",!0),n.xp6(1),n.Q6J("nzGutter",n.DdM(215,D)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",h),n.xp6(1),n.Q6J("nzFormat",o.dateFormat)("nzPlaceHolder",o.dateFormat),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",h),n.xp6(1),n.Q6J("nzFormat",o.dateFormat)("nzPlaceHolder",o.dateFormat),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",h),n.xp6(1),n.Q6J("nzFormat",o.dateFormat)("nzPlaceHolder",o.dateFormat),n.xp6(1),n.Q6J("nzGutter",n.DdM(216,D)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",h),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",h),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",h),n.xp6(2),n.Q6J("nzGutter",n.DdM(217,D)),n.xp6(1),n.Q6J("nzXXl",24)("nzXl",24)("nzLg",24)("nzMd",24)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",3)("nzXl",3)("nzLg",3)("nzMd",6)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",h),n.xp6(1),n.Q6J("nzAutosize",n.DdM(218,Bn)),n.xp6(3),n.Q6J("tableTitle","Chi ti\u1ebft \u0111\u01a1n h\xe0ng")("btnTpl",A)("btnConfirm",v),n.xp6(1),n.Q6J("checkedCashArrayFromComment",o.checkedCashArray)("tableConfig",o.tableConfig)("tableData",o.dataList)}},dependencies:[d.sg,d.O5,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,R.q,Y.q,H.x,V.p,W.Ls,E.t3,E.SK,X.Lr,X.Nx,X.iK,X.Fd,K.ix,$.w,j.dQ,y.Zp,y.rh,F.Ip,F.Vq,nn.bd,tn.uw,d.H9]}),e})(),data:{title:"Qu\u1ea3n l\xfd chuy\u1ebfn ngo\xe0i",key:"spch00251"}}];let qn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[m.Bz.forChild(kn),m.Bz]}),e})();var L=i(5316);let In=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[L.m]}),e})(),Pn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[qn,L.m,In]}),e})()},13951:(Z,x,i)=>{i.d(x,{H:()=>n});var m=i(91565),z=i(44556),b=i(36895),T=i(94650),S=i(9116),u=i(99651);let n=(()=>{class C{constructor(l,c,p,g,r){this.webService=l,this.router=c,this.cdf=p,this.datePipe=g,this.tabService=r,this.formItemNm={},this.list=[],this.title="nam pham",this.constHttt=z.Hinhthucthanhtoan}ngOnDestroy(){this.destroy()}ngOnInit(){this.setFormItemNm()}setFormItemNm(){this.webService.PostCallWs(z.Ant100PostUrlParams,{url:this.router.url},c=>{this.list=c,this.list.forEach(p=>{this.formItemNm[p.stt]=p.title1}),this.fnInit()})}getDate(){return this.datePipe.transform(new Date,"yyyy/MM/dd")+""}formatDate(l){return null==l||""==l?"":this.datePipe.transform(l,"yyyy/MM/dd")+""}displayVND(l){return(0,b.xG)(1e3*l,"vi-VN","\u0111","symbol-narrow","1.0-0")}transfer(l){let c=this.tabService.findIndex(l);-1==c||this.tabService.delTab(this.tabService.getTabArray()[c],c),this.router.navigate([l])}mergeHttt(l){let c=l+"",p="";for(let g of this.constHttt)g.value===c&&(p=g.lable);return p}}return C.\u0275fac=function(l){return new(l||C)(T.Y36(m.Q),T.Y36(S.F0),T.Y36(T.sBO),T.Y36(b.uU),T.Y36(u.p))},C.\u0275cmp=T.Xpm({type:C,selectors:[["app-base"]],features:[T._Bn([b.uU])],decls:0,vars:0,template:function(l,c){},encapsulation:2}),C})()}}]);