"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[6905],{23317:(_,g,o)=>{o.d(g,{R:()=>t});var i=o(44556),a=o(94650),z=o(54246),u=o(9116);let t=(()=>{class n{constructor(c,C){this.http=c,this.router=C}getlists(c){return this.http.post(i.ChiphichuyenAnt100GetAll,c,{needSuccessInfo:!1})}getDetail(c){return this.http.get(`${i.ChiphichuyenAnt100Get}/${c}/`)}create(c){return this.http.post(i.ChiphichuyenAnt100Create,c,{needSuccessInfo:!1})}update(c){return this.http.put(i.ChiphichuyenAnt100Update,c)}updateList(c){return this.http.post(i.ChiphichuyenAnt100UpdateList,c,{needSuccessInfo:!1})}delete(c){return this.http.post(i.ChiphichuyenAnt100Delete,{ids:c},{needSuccessInfo:!0})}delates(){}}return n.\u0275fac=function(c){return new(c||n)(a.LFG(z.q),a.LFG(u.F0))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},42996:(_,g,o)=>{o.d(g,{p:()=>l});var i=o(49523),a=o(44556),z=o(68602),u=o(94650),t=o(54246),n=o(9116);let l=(()=>{class c{constructor(h,E){this.http=h,this.router=E}getChuyens(h){return this.http.post(a.ChuyenAnt100GetAll,h,{needSuccessInfo:!1})}getChuyen(h){return this.http.get(`${a.ChuyenAnt100Get}/${h}/`)}createChuyen(h){return this.http.post(a.ChuyenAnt100Create,h,{needSuccessInfo:!1})}updateChuyen(h){return this.http.put(a.ChuyenAnt100Update,h)}updateTrangthai(h){return this.http.post(a.ChuyenAnt100UpdateTrangthai,h,{needSuccessInfo:!1})}hoanthanhchuyenhang(h){return this.http.post(a.ChuyenAnt100Hoanthanhchuyenhang,h,{needSuccessInfo:!1})}deleteChuyen(h){return this.http.post(a.ChuyenAnt100Delete,{ids:h},{needSuccessInfo:!0})}delateChuyens(){}searchParams(h){return this.http.post(a.ChuyenAnt100SearchParams,h,{needSuccessInfo:!1})}refresh(h){const E=h,S=(0,i.Ve)(E),f=this.router.parseUrl(E).queryParams;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{z.E.deleteRouteSnapshot(this.getPathKey(E)),this.router.navigate([S],{queryParams:f})})}getPathKey(h){const E=(0,i.KK)(h),S=this.router.parseUrl(h).queryParams;let f="";return Object.keys(S).length>0&&(f=JSON.stringify(this.router.parseUrl(h).queryParams)),E+f}}return c.\u0275fac=function(h){return new(h||c)(u.LFG(t.q),u.LFG(n.F0))},c.\u0275prov=u.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},69386:(_,g,o)=>{o.d(g,{$:()=>z});var i=o(94650),a=o(42996);let z=(()=>{class u{constructor(n){this.dataService=n,this.initFlg=!0,this.soODT="",this.id="",this.ngaydi="",this.ngayve="",this.tienxe=0,this.biensoxe="",this.idtai="",this.idphu="",this.changduong="",this.trangthai=0}clear(){this.initFlg=!0,this.soODT="",this.id="",this.ngaydi="",this.ngayve="",this.tienxe=0,this.biensoxe="",this.idtai="",this.idphu="",this.changduong="",this.trangthai=0}}return u.\u0275fac=function(n){return new(n||u)(i.LFG(a.p))},u.\u0275prov=i.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},65078:(_,g,o)=>{o.d(g,{$:()=>u});var i=o(44556),a=o(94650),z=o(54246);let u=(()=>{class t{constructor(l){this.http=l}getlists(l){return this.http.post(i.PhieunhaphangAnt100GetAll,l,{needSuccessInfo:!1})}getDetail(l){return this.http.get(`${i.PhieunhaphangAnt100Get}/${l}/`)}getDetailsoID(l){return this.http.post(i.PhieunhaphangAnt100GetsoID,{soID:l},{needSuccessInfo:!1})}create(l){return this.http.post(i.PhieunhaphangAnt100Create,l,{needSuccessInfo:!1})}update(l){return this.http.put(i.PhieunhaphangAnt100Update,l)}delete(l){return this.http.post(i.PhieunhaphangAnt100Delete,{ids:l},{needSuccessInfo:!0})}ExportDataPDFChuyen(l){return this.http.post(i.PhieunhaphangAnt100ExportData,{id:l},{needSuccessInfo:!0})}delates(){}}return t.\u0275fac=function(l){return new(l||t)(a.LFG(z.q))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},22704:(_,g,o)=>{o.d(g,{Z:()=>p});var i=o(24006),a=o(44556),z=o(49523),u=o(39646),t=o(94650),n=o(50007),l=o(78898),c=o(36895),C=o(73679),h=o(36704),E=o(35635),S=o(37096),f=o(40269);const A=["Tlsotien"],D=["Tlghichu"],Z=["Tfooter"],x=["Ttilte"];function y(s,r){if(1&s){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",7)(2,"td")(3,"nz-form-item")(4,"nz-form-control",8),t._UZ(5,"input",9),t.qZA()()(),t.TgZ(6,"td")(7,"nz-form-item")(8,"nz-form-control",10)(9,"nz-input-number",11),t.NdJ("ngModelChange",function(m){t.CHM(e);const v=t.oxw();return t.KtG(v.fnTongchiphi(m))}),t.qZA()()()(),t.TgZ(10,"td")(11,"nz-form-item")(12,"nz-form-control",10),t._UZ(13,"textarea",12),t.qZA()()()(),t.BQk()}if(2&s){const e=r.index,d=t.oxw();t.xp6(1),t.Q6J("formGroupName",e),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(4),t.Q6J("nzSm",18)("nzXs",24),t.xp6(1),t.Q6J("nzMin",0)("nzMax",1e4)("nzStep",100)("nzDisabled",d.showInfo),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(1),t.Q6J("disabled",d.showInfo)}}const T=function(){return{"font-weight":"bold"}};function F(s,r){if(1&s&&(t.TgZ(0,"div"),t._uU(1," T\u1ed5ng chi ph\xed: "),t.TgZ(2,"span",13),t._uU(3),t.ALo(4,"currency"),t.qZA()()),2&s){const e=t.oxw();t.xp6(2),t.Q6J("ngStyle",t.DdM(6,T)),t.xp6(1),t.Oqu(t.Dn7(4,2,1e3*e.tongchiphi,"VND",""))}}const M=function(){return{color:"red"}};function P(s,r){if(1&s&&(t.TgZ(0,"div")(1,"span",13)(2,"i"),t._uU(3,"L\u01b0u \xfd: ki\u1ec3m tra th\xf4ng tin ch\xednh x\xe1c tr\u01b0\u1edbc khi x\xe1c nh\u1eadn. "),t.qZA()(),t.TgZ(4,"span",13),t._uU(5),t.ALo(6,"currency"),t.qZA()()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.DdM(7,M)),t.xp6(3),t.Q6J("ngStyle",t.DdM(8,T)),t.xp6(1),t.hij(" T\u1ed5ng chi ph\xed: ",t.Dn7(6,3,1e3*e.tongchiphi,"VND",""),"")}}let U=(()=>{class s{constructor(e,d,m,v,J){this.modalRef=e,this.fb=d,this.cdf=m,this.modalSrv=v,this.spin00901Service=J,this.dataList=[],this.data=[],this.const=a,this.lstchiphi=[],this.tongchiphi=0,this.showInfo=!1,this.searchParam={},this.data.push({tenchiphi:"T\xean chi ph\xed",sotien:"S\u1ed1 ti\u1ec1n",ghichu:"Ghi ch\xfa"})}fnAddlistchiphi(e){for(let d of e)this.lstchiphi.push({idchuyen:"",tenchiphi:d.datacd,sotien:0,ghichu:""})}getAsyncFnData(e){return(0,u.of)(e)}getCurrentValue(){return(0,z.r7)(this.addEditForm)?(0,u.of)(this.addEditForm.value):(0,u.of)(!1)}createItem(e){return this.fb.group({tenchiphi:[e.tenchiphi,[i.kI.required]],sotien:[e.sotien,[i.kI.required]],ghichu:[e.ghichu]})}getControls(){return this.addEditForm.get("items").controls}ngOnInit(){this.addEditForm=this.fb.group({items:this.fb.array([])}),null!=this.params.status&&5==this.params.status&&(this.showInfo=!0),null!=this.params.listcp&&this.params.listcp.length>0?(this.lstchiphi=this.params.listcp,this.createForm(),this.cdf.detectChanges()):(this.searchParam.rcdkbn=a.tmt050lstchiphi,this.spin00901Service.searchParams({pageSize:0,pageNum:0,filters:this.searchParam}).subscribe(d=>{this.fnAddlistchiphi(d),this.createForm(),this.cdf.detectChanges()}))}createForm(){for(let e of this.lstchiphi)this.items=this.addEditForm.get("items"),this.items.push(this.createItem(e));this.fnTinhchiphi()}fnTongchiphi(e){this.fnTinhchiphi()}fnTinhchiphi(){this.tongchiphi=0;for(let e of this.addEditForm.value.items)this.tongchiphi=this.tongchiphi+e.sotien}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(n.Lf),t.Y36(i.qu),t.Y36(t.sBO),t.Y36(n.Sf),t.Y36(l.C))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-subwindowchiphi"]],viewQuery:function(e,d){if(1&e&&(t.Gf(A,7),t.Gf(D,7),t.Gf(Z,7),t.Gf(x,7)),2&e){let m;t.iGM(m=t.CRH())&&(d.Tlsotien=m.first),t.iGM(m=t.CRH())&&(d.Tlghichu=m.first),t.iGM(m=t.CRH())&&(d.Tfooter=m.first),t.iGM(m=t.CRH())&&(d.Ttilte=m.first)}},decls:16,vars:9,consts:[["nz-form","",3,"formGroup"],[3,"nzSize","nzTemplateMode","nzFooter","nzTitle"],[3,"nzWidth"],["formArrayName","items"],[4,"ngFor","ngForOf"],["Tfooter",""],["Ttilte",""],[3,"formGroupName"],["nzErrorTip","",3,"nzSm","nzXs"],["nz-input","","id","tenchiphi","name","tenchiphi","formControlName","tenchiphi","readonly",""],["nzErrorTip","Vui l\xf2ng nh\u1eadp ti\u1ec1n \u0111\u01b0a tr\u01b0\u1edbc",3,"nzSm","nzXs"],["id","sotien","name","sotien","formControlName","sotien",3,"nzMin","nzMax","nzStep","nzDisabled","ngModelChange"],["nz-input","","id","ghichu","name","ghichu","formControlName","ghichu","nzAutosize","",3,"disabled"],[3,"ngStyle"]],template:function(e,d){if(1&e&&(t.TgZ(0,"form",0)(1,"nz-table",1)(2,"thead")(3,"tr")(4,"th",2),t._uU(5,"T\xean Ch\xed Ph\xed"),t.qZA(),t.TgZ(6,"th",2),t._uU(7,"S\u1ed1 ti\u1ec1n"),t.qZA(),t.TgZ(8,"th",2),t._uU(9,"Ghi ch\xfa"),t.qZA()()(),t.TgZ(10,"tbody",3),t.YNc(11,y,14,12,"ng-container",4),t.qZA()(),t.YNc(12,F,5,7,"ng-template",null,5,t.W1O),t.YNc(14,P,7,9,"ng-template",null,6,t.W1O),t.qZA()),2&e){const m=t.MAs(13),v=t.MAs(15);t.Q6J("formGroup",d.addEditForm),t.xp6(1),t.Q6J("nzSize","small")("nzTemplateMode",!0)("nzFooter",m)("nzTitle",v),t.xp6(3),t.Q6J("nzWidth","80px"),t.xp6(2),t.Q6J("nzWidth","50px"),t.xp6(2),t.Q6J("nzWidth","150px"),t.xp6(3),t.Q6J("ngForOf",d.getControls())}},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,i.x0,i.CE,c.sg,c.PC,C.t3,C.SK,h.Lr,h.Nx,h.Fd,E.Zp,E.rh,S._V,f.N8,f.Uo,f._C,f.Om,f.p0,f.$Z,c.H9],changeDetection:0}),s})();var I=o(69174);let p=(()=>{class s{constructor(e){this.modalWrapService=e}getContentComponent(){return U}show(e={},d){return this.modalWrapService.show(this.getContentComponent(),e,d)}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(I.U))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},8538:(_,g,o)=>{o.d(g,{V:()=>u});var i=o(5316),a=o(24006),z=o(94650);let u=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=z.oAB({type:t}),t.\u0275inj=z.cJS({imports:[a.u5,a.UX,i.m]}),t})()},27097:(_,g,o)=>{o.d(g,{o:()=>I});var i=o(24006),a=o(44556),z=o(49523),u=o(39646),t=o(28746),n=o(94650),l=o(50007),c=o(69454),C=o(78898),h=o(36895),E=o(73679),S=o(36704),f=o(35635),A=o(38231),D=o(48521),Z=o(37096);const x=function(){return{background:"#555555"}};function y(p,s){1&p&&(n.ynx(0),n.TgZ(1,"nz-form-item")(2,"nz-form-label",40),n._uU(3,"M\xe3 Phi\u1ebfu Nh\u1eadp"),n.qZA(),n.TgZ(4,"nz-form-control",13),n._UZ(5,"input",41),n.qZA()(),n.BQk()),2&p&&(n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("readonly",!0)("ngStyle",n.DdM(6,x)))}function T(p,s){if(1&p&&n._UZ(0,"nz-option",42),2&p){const r=s.$implicit;n.Q6J("nzValue",r.id)("nzLabel",r.name)}}function F(p,s){if(1&p&&n._UZ(0,"nz-option",42),2&p){const r=s.$implicit;n.Q6J("nzValue",r.value)("nzLabel",r.lable)}}const M=function(){return{minRows:2,maxRows:6}};let P=(()=>{class p{constructor(r,e,d,m,v){this.modalRef=r,this.fb=e,this.cdf=d,this.dataKhachhangService=m,this.spin00901Service=v,this.isEdit=!1,this.const=a,this.listKh=[],this.tenkhachhang="",this.listdonvitinh=[],this.params={}}ngOnInit(){this.getListKh(),this.getListDonvitinh(),this.initForm(),Object.keys(this.params).length>0&&(this.isEdit=!0,this.addEditForm.patchValue(this.params))}getAsyncFnData(r){return(0,u.of)(r)}getCurrentValue(){return(0,z.r7)(this.addEditForm)?(this.addEditForm.value.tenkhachhang=this.tenkhachhang,(0,u.of)(this.addEditForm.value)):(0,u.of)(!1)}initForm(){this.addEditForm=this.fb.group({id:[null],iduser:[null,[i.kI.required]],tenhang:[null,[i.kI.required]],tiencuoc:[0,[i.kI.required]],soluong:[null,[i.kI.required]],trongluong:[null],khoiluong:[null],donvitinh:[null,[i.kI.required]],diadiembochang:[null,[i.kI.required]],hinhthucthanhtoan:["1",[i.kI.required]],lotrinh:["0",[i.kI.required]],tennguoinhan:[null,[i.kI.required]],sdtnguoinhan:[null,[i.kI.required]],diachinguoinhan:[null,[i.kI.required]],ghichu:[null]})}changeKH(r){for(let e of this.listKh)if(e.id==r){this.tenkhachhang=e.name;break}}getListKh(){this.dataKhachhangService.getAccount({pageSize:0,pageNum:0,filters:{phongban_id:this.const.idKhachhang}}).pipe((0,t.x)(()=>{})).subscribe(e=>{this.listKh=e,this.cdf.markForCheck()})}getListDonvitinh(){this.spin00901Service.searchParams({pageSize:0,pageNum:0,filters:{rcdkbn:this.const.tmt050lstdonvitinh}}).subscribe(e=>{this.fnAddlstDonvitinh(e)})}fnAddlstDonvitinh(r){for(let e of r)this.listdonvitinh.push({value:e.datacd,lable:e.datanm})}}return p.\u0275fac=function(r){return new(r||p)(n.Y36(l.Lf),n.Y36(i.qu),n.Y36(n.sBO),n.Y36(c.B),n.Y36(C.C))},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-subwindowproduct"]],decls:84,vars:74,consts:[["nz-form","",3,"formGroup"],[4,"ngIf"],["nzRequired","","nzFor","iduser",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn T\xe0i ph\u1ee5",3,"nzSm","nzXs"],["name","iduser","id","iduser","formControlName","iduser","nzAllowClear","","nzShowSearch","","nzPlaceHolder","Select",3,"ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzRequired","","nzFor","tenhang",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp t\xean h\xe0ng",3,"nzSm","nzXs"],["nz-input","","formControlName","tenhang","name","tenhang","placeholder","","id","tenhang"],["nzRequired","","nzFor","soluong",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng",3,"nzSm","nzXs"],["name","soluong","id","soluong","formControlName","soluong",3,"nzMin","nzMax","nzStep"],["nzRequired","","nzFor","trongluong",3,"nzSm","nzXs"],["nzErrorTip","",3,"nzSm","nzXs"],["name","trongluong","id","trongluong","formControlName","trongluong",3,"nzMin","nzMax","nzStep"],["nzRequired","","nzFor","khoiluong",3,"nzSm","nzXs"],["name","khoiluong","id","khoiluong","formControlName","khoiluong",3,"nzMin","nzMax","nzStep"],["nzRequired","","nzFor","donvitinh",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn \u0111\u01a1n v\u1ecb t\xednh",3,"nzSm","nzXs"],["name","donvitinh","id","donvitinh","formControlName","donvitinh","nzAllowClear","","nzShowSearch","","nzPlaceHolder","Select"],["nzRequired","","nzFor","trongtai",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ti\u1ec1n c\u01b0\u1edbc",3,"nzSm","nzXs"],["name","tiencuoc","id","tiencuoc","formControlName","tiencuoc",3,"nzMin","nzMax","nzStep"],["nzErrorTip","Vui l\xf2ng nh\u1eadp \u0111\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng",3,"nzSm","nzXs"],["nz-input","","formControlName","diadiembochang","name","diadiembochang","placeholder","","id","diadiembochang"],["formControlName","hinhthucthanhtoan"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","2"],["nz-radio","","nzValue","3"],["formControlName","lotrinh"],["nz-radio","","nzValue","0"],["nzRequired","","nzFor","tennguoinhan",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp t\xean ng\u01b0\u1eddi nh\u1eadn",3,"nzSm","nzXs"],["nz-input","","formControlName","tennguoinhan","name","tennguoinhan","placeholder","","id","tennguoinhan"],["nzRequired","","nzFor","sdtnguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","sdtnguoinhan","name","sdtnguoinhan","placeholder","","id","sdtnguoinhan"],["nzRequired","","nzFor","diachinguoinhan",3,"nzSm","nzXs"],["nz-input","","formControlName","diachinguoinhan","name","diachinguoinhan","placeholder","","id","diachinguoinhan"],["nzFor","ghichu",3,"nzSm","nzXs"],["nz-input","","formControlName","ghichu","placeholder","M\u1ed1t s\u1ed1 ghi ch\xfa v\u1ec1 th\xf4ng tin \u0111\u01a1n h\xe0ng.",3,"nzAutosize"],["nzRequired","","nzFor","id",3,"nzSm","nzXs"],["nz-input","","formControlName","id","name","id","placeholder","","id","id",3,"readonly","ngStyle"],[3,"nzValue","nzLabel"]],template:function(r,e){1&r&&(n.TgZ(0,"form",0),n.YNc(1,y,6,7,"ng-container",1),n.TgZ(2,"nz-form-item")(3,"nz-form-label",2),n._uU(4,"Id Kh\xe1ch h\xe0ng"),n.qZA(),n.TgZ(5,"nz-form-control",3)(6,"nz-select",4),n.NdJ("ngModelChange",function(m){return e.changeKH(m)}),n.YNc(7,T,1,2,"nz-option",5),n.qZA()()(),n.TgZ(8,"nz-form-item")(9,"nz-form-label",6),n._uU(10,"T\xean h\xe0ng"),n.qZA(),n.TgZ(11,"nz-form-control",7),n._UZ(12,"input",8),n.qZA()(),n.TgZ(13,"nz-form-item")(14,"nz-form-label",9),n._uU(15,"S\u1ed1 l\u01b0\u1ee3ng"),n.qZA(),n.TgZ(16,"nz-form-control",10),n._UZ(17,"nz-input-number",11),n.qZA()(),n.TgZ(18,"nz-form-item")(19,"nz-form-label",12),n._uU(20,"Tr\u1ecdng l\u01b0\u1ee3ng"),n.qZA(),n.TgZ(21,"nz-form-control",13),n._UZ(22,"nz-input-number",14),n.qZA()(),n.TgZ(23,"nz-form-item")(24,"nz-form-label",15),n._uU(25,"Kh\u1ed1i l\u01b0\u1ee3ng"),n.qZA(),n.TgZ(26,"nz-form-control",13),n._UZ(27,"nz-input-number",16),n.qZA()(),n.TgZ(28,"nz-form-item")(29,"nz-form-label",17),n._uU(30,"\u0110\u01a1n v\u1ecb t\xednh"),n.qZA(),n.TgZ(31,"nz-form-control",18)(32,"nz-select",19),n.YNc(33,F,1,2,"nz-option",5),n.qZA()()(),n.TgZ(34,"nz-form-item")(35,"nz-form-label",20),n._uU(36,"Ti\u1ec1n c\u01b0\u1edbc"),n.qZA(),n.TgZ(37,"nz-form-control",21),n._UZ(38,"nz-input-number",22),n.qZA()(),n.TgZ(39,"nz-form-item")(40,"nz-form-label",20),n._uU(41,"\u0110\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng"),n.qZA(),n.TgZ(42,"nz-form-control",23),n._UZ(43,"input",24),n.qZA()(),n.TgZ(44,"nz-form-item")(45,"nz-form-label",20),n._uU(46,"H\xecnh th\u1ee9c thanh to\xe1n"),n.qZA(),n.TgZ(47,"nz-form-control",13)(48,"nz-radio-group",25)(49,"label",26),n._uU(50,"Tr\u1ef1c ti\u1ebfp"),n.qZA(),n.TgZ(51,"label",27),n._uU(52,"Ghi n\u1ee3"),n.qZA(),n.TgZ(53,"label",28),n._uU(54,"Khi nh\u1eadn h\xe0ng"),n.qZA()()()(),n.TgZ(55,"nz-form-item")(56,"nz-form-label",20),n._uU(57,"L\u1ed9 tr\xecnh"),n.qZA(),n.TgZ(58,"nz-form-control",13)(59,"nz-radio-group",29)(60,"label",30),n._uU(61,"H\xe0ng \u0111i"),n.qZA(),n.TgZ(62,"label",26),n._uU(63,"H\xe0ng v\u1ec1"),n.qZA()()()(),n.TgZ(64,"nz-form-item")(65,"nz-form-label",31),n._uU(66,"T\xean ng\u01b0\u1eddi Nh\u1eadn"),n.qZA(),n.TgZ(67,"nz-form-control",32),n._UZ(68,"input",33),n.qZA()(),n.TgZ(69,"nz-form-item")(70,"nz-form-label",34),n._uU(71,"SDT ng\u01b0\u1eddi Nh\u1eadn"),n.qZA(),n.TgZ(72,"nz-form-control",32),n._UZ(73,"input",35),n.qZA()(),n.TgZ(74,"nz-form-item")(75,"nz-form-label",36),n._uU(76,"\u0110\u1ecba ch\u1ec9 ng\u01b0\u1eddi Nh\u1eadn"),n.qZA(),n.TgZ(77,"nz-form-control",32),n._UZ(78,"input",37),n.qZA()(),n.TgZ(79,"nz-form-item")(80,"nz-form-label",38),n._uU(81,"Ghi ch\xfa"),n.qZA(),n.TgZ(82,"nz-form-control",13),n._UZ(83,"textarea",39),n.qZA()()()),2&r&&(n.Q6J("formGroup",e.addEditForm),n.xp6(1),n.Q6J("ngIf",e.isEdit),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",e.listKh),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",0)("nzMax",1e4)("nzStep",1),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",0)("nzMax",100)("nzStep",.001),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",0)("nzMax",100)("nzStep",.001),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",e.listdonvitinh),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",0)("nzMax",5e4)("nzStep",100),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(9),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(7),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzAutosize",n.DdM(73,M)))},dependencies:[h.sg,h.O5,h.PC,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,E.t3,E.SK,S.Lr,S.Nx,S.iK,S.Fd,f.Zp,f.rh,A.Ip,A.Vq,D.Of,D.Dg,Z._V]}),p})();var U=o(69174);let I=(()=>{class p{constructor(r){this.modalWrapService=r}getContentComponent(){return P}show(r={},e){return this.modalWrapService.show(this.getContentComponent(),r,e)}}return p.\u0275fac=function(r){return new(r||p)(n.LFG(U.U))},p.\u0275prov=n.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},41227:(_,g,o)=>{o.d(g,{j:()=>z});var i=o(5316),a=o(94650);let z=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=a.oAB({type:u}),u.\u0275inj=a.cJS({imports:[i.m]}),u})()}}]);