"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[6258],{67859:(x,v,a)=>{a.d(v,{S:()=>Z});var u=a(94650),A=a(91565);let E=(()=>{class l{constructor(h){this.webService=h}mobileRule(h){return h?function S(l){return/^(0|\+?84|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(l)}(h)?null:{message:"Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ch\xednh x\xe1c"}:null}telPhoneRule(h){return h?function T(l){return/^(0\d{2,3}-?)?\d{7,8}$/.test(l)}(h)?null:{message:"Vui l\xf2ng nh\u1eadp zalo ch\xednh x\xe1c"}:null}emailRule(h){return h?function b(l){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(l)}(h)?null:{message:"Vui l\xf2ng nh\u1eadp emali ch\xednh x\xe1c"}:null}passwordRule(h){return h?function k(l){return/^[^\s]{6,20}$/.test(l)&&!/^\d+$/.test(l)}(h)?null:{message:"M\u1eadt kh\u1ea9u bao g\u1ed3m 6 \u0111\u1ebfn 20 ch\u1eef c\xe1i vi\u1ebft hoa v\xe0 vi\u1ebft th\u01b0\u1eddng, s\u1ed1 ho\u1eb7c c\xe1c k\xfd t\u1ef1 kh\xe1c"}:null}}return l.\u0275fac=function(h){return new(h||l)(u.LFG(A.Q))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),Z=(()=>{class l{constructor(h){this.vrService=h}emailValidator(){return this.commonUtil(this.vrService.emailRule)}mobileValidator(){return this.commonUtil(this.vrService.telPhoneRule)}passwordValidator(){return this.commonUtil(this.vrService.passwordRule)}zaloValidator(){return this.commonUtil(this.vrService.telPhoneRule)}commonUtil(h){return C=>h(C.value)}}return l.\u0275fac=function(h){return new(h||l)(u.LFG(E))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},76258:(x,v,a)=>{a.r(v),a.d(v,{Spkh00101Module:()=>Zt});var u=a(36895),d=a(9116),z=a(22155),_=a(22195),m=a(13951),S=a(28746),T=a(44556),b=a(78877),k=a(88176),t=a(94650),A=a(91565),E=a(35568),Z=a(49651),l=a(57087),c=a(24006),h=a(49523),C=a(39646),w=a(50007),L=a(67859),y=a(73679),f=a(36704),F=a(35635);function J(e,r){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.errors.message)}}function N(e,r){1&e&&(t.ynx(0),t._uU(1,"Ph\u1ea7n b\u1eaft bu\u1ed9c"),t.BQk())}function D(e,r){if(1&e&&(t.YNc(0,J,2,1,"ng-container",12),t.YNc(1,N,2,0,"ng-container",12)),2&e){const n=r.$implicit;t.Q6J("ngIf",n.hasError("message")),t.xp6(1),t.Q6J("ngIf",n.hasError("required"))}}let O=(()=>{class e{constructor(n,i,o,s){this.modalRef=n,this.fb=i,this.cdf=o,this.validatorsService=s}ngOnInit(){this.initForm(),Object.keys(this.params).length>0&&this.addEditForm.patchValue(this.params)}getAsyncFnData(n){return(0,C.of)(n)}getCurrentValue(){return(0,h.r7)(this.addEditForm)?(0,C.of)(this.addEditForm.value):(0,C.of)(!1)}get f(){return this.addEditForm.controls}initForm(){this.addEditForm=this.fb.group({makhachhang:[null,[c.kI.required]],name:[null,[c.kI.required]],dienthoai:[null,[this.validatorsService.mobileValidator()]],diachi:[null],groupid:[null]})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(w.Lf),t.Y36(c.qu),t.Y36(t.sBO),t.Y36(L.S))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-subwindowkhachhang"]],features:[t._Bn([k.z])],decls:28,vars:26,consts:[["nz-form","",3,"formGroup"],["nzRequired","","nzFor","makhachhang",3,"nzSm","nzXs"],[3,"nzSm","nzXs","nzErrorTip"],["nz-input","","formControlName","makhachhang","id","makhachhang","placeholder","M\xe3 kh\xe1ch h\xe0ng"],["nzRequired","","nzFor","name",3,"nzSm","nzXs"],["nz-input","","formControlName","name","id","name","placeholder","T\xean t\xe0i kho\u1ea3n"],["nzRequired","","nzFor","mobile",3,"nzSm","nzXs"],["nz-input","","formControlName","dienthoai","maxlength","11","id","mobile","placeholder","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"],["nz-input","","formControlName","diachi","maxlength","255","id","diachi","placeholder","\u0110\u1ecba ch\u1ec9"],["nzRequired","","nzFor","groupid",3,"nzSm","nzXs"],["nz-input","","formControlName","groupid","maxlength","20","id","groupid","placeholder","Group id"],["combineTpl",""],[4,"ngIf"]],template:function(n,i){if(1&n&&(t.TgZ(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),t._uU(3,"M\xe3 Kh\xe1ch H\xe0ng"),t.qZA(),t.TgZ(4,"nz-form-control",2),t._UZ(5,"input",3),t.qZA()(),t.TgZ(6,"nz-form-item")(7,"nz-form-label",4),t._uU(8,"T\xean t\xe0i kho\u1ea3n"),t.qZA(),t.TgZ(9,"nz-form-control",2),t._UZ(10,"input",5),t.qZA()(),t.TgZ(11,"nz-form-item")(12,"nz-form-label",6),t._uU(13,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),t.qZA(),t.TgZ(14,"nz-form-control",2),t._UZ(15,"input",7),t.qZA()(),t.TgZ(16,"nz-form-item")(17,"nz-form-label",6),t._uU(18,"\u0110\u1ecba ch\u1ec9"),t.qZA(),t.TgZ(19,"nz-form-control",2),t._UZ(20,"input",8),t.qZA()(),t.TgZ(21,"nz-form-item")(22,"nz-form-label",9),t._uU(23,"Group Id"),t.qZA(),t.TgZ(24,"nz-form-control",2),t._UZ(25,"input",10),t.qZA()()(),t.YNc(26,D,2,2,"ng-template",null,11,t.W1O)),2&n){const o=t.MAs(27);t.Q6J("formGroup",i.addEditForm),t.xp6(2),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24)("nzErrorTip",o),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24)("nzErrorTip",o),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24)("nzErrorTip",o),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24)("nzErrorTip",o),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24)("nzErrorTip",o)}},dependencies:[u.O5,c._Y,c.Fj,c.JJ,c.JL,c.nD,c.sg,c.u,y.t3,y.SK,f.Lr,f.Nx,f.iK,f.Fd,F.Zp],changeDetection:0}),e})();var X=a(69174);let Y=(()=>{class e{constructor(n){this.modalWrapService=n}getContentComponent(){return O}show(n={},i){return this.modalWrapService.show(this.getContentComponent(),n,i)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(X.U))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var P=a(60976),G=a(68602);let Q=(()=>{class e{constructor(n){this.router=n}static isEmpty(n){return"null"==(n+="")||""==n||"undefined"==n||null==n||null==n||0==n.length}refresh(n){const i=n,o=(0,h.Ve)(i),s=this.router.parseUrl(i).queryParams;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{G.E.deleteRouteSnapshot(this.getPathKey(i)),this.router.navigate([o],{queryParams:s})})}getPathKey(n){const i=(0,h.KK)(n),o=this.router.parseUrl(n).queryParams;let s="";return Object.keys(o).length>0&&(s=JSON.stringify(this.router.parseUrl(n).queryParams)),i+s}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(d.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=a(79610),K=a(99651),R=a(32802),B=a(5529),H=a(35656),V=a(94178),W=a(21102),$=a(66616),j=a(47044),q=a(21811),tt=a(51971);const nt=["operationTpl"],et=["linkidTpl"],ot=["sotienno"],it=["tenhangTpl"],at=["soluongTpl"],rt=["khoiluongTpl"],lt=["trongluongTpl"],st=["tiencuocTpl"],ht=["ghichuTpl"];function ct(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.showVideo())}),t._UZ(1,"span",25),t._uU(2,"H\u01b0\u1edbng d\u1eabn "),t.qZA()}2&e&&t.Q6J("nzSize","large")}function ut(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"span",27)(1,"button",28),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().id,s=t.oxw();return t.KtG(s.edit(o))}),t._uU(2,"C\u1eadp nh\u1eadt"),t.qZA()()}}function pt(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2),s=o.id,p=o.sotienno,g=t.oxw();return t.KtG(g.tattoan(s,p))}),t._uU(1,"T\u1ea5t to\xe1n"),t.qZA()}}function dt(e,r){if(1&e&&(t.TgZ(0,"span",27),t.YNc(1,pt,2,0,"button",29),t.qZA()),2&e){const n=t.oxw().sotienno;t.xp6(1),t.Q6J("ngIf",n>0)}}function mt(e,r){if(1&e&&(t.YNc(0,ut,3,0,"span",26),t.YNc(1,dt,2,1,"span",26)),2&e){const n=t.oxw();t.Q6J("appAuth",n.ActionCode.KhachhangEdit),t.xp6(1),t.Q6J("appAuth",n.ActionCode.KhachhangTattoan)}}function gt(e,r){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=r.makhachhang;t.xp6(1),t.Oqu(n)}}function ft(e,r){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&e){const n=r.sotienno;t.xp6(1),t.Oqu(t.Dn7(2,1,1e3*n,"VND",""))}}function zt(e,r){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=r.idphieunhaphang;t.xp6(1),t.Oqu(n.tenhang)}}function St(e,r){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=r.idphieunhaphang;t.xp6(1),t.Oqu(n.soluong)}}function Tt(e,r){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=r.idphieunhaphang;t.xp6(1),t.Oqu(n.khoiluong)}}function vt(e,r){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=r.idphieunhaphang;t.xp6(1),t.Oqu(n.trongluong)}}function Ct(e,r){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&e){const n=r.idphieunhaphang;t.xp6(1),t.Oqu(t.xi3(2,1,1e3*n.tiencuoc,"VND"))}}const _t=function(){return{"padding-bottom":0}},bt=function(){return{xs:8,sm:16,md:24}},kt=[{path:"",component:(()=>{class e extends m.H{constructor(n,i,o,s,p,g,xt,wt,Ft,Mt,Ut,Lt,U){super(n,i,o,s,U,p),this.webService=n,this.router=i,this.cdf=o,this.datePipe=s,this.modalVideoyoutube=p,this.message=g,this.dataService=xt,this.modalService=wt,this.modalSrv=Ft,this.dtoKhService=Mt,this.ultilityService=Ut,this.nhatkykhService=Lt,this.tabService=U,this.searchParam={},this.dateFormat=T.dateFormat,this.dataList=[],this.checkedCashArray=[],this.ActionCode=_.h,this.phongban_id=T.idKhachhang,this.DisplayScreenID=z.t.spkh00101,this.availableOptions=[],this.pageHeaderInfo={title:"C\xf4ng N\u1ee3 Kh\xe1ch h\xe0ng",breadcrumb:["Home","Kh\xe1ch H\xe0ng","Qu\u1ea3n l\xfd c\xf4ng n\u1ee3"]}}fnInit(){this.cdf.markForCheck()}destroy(){}getDataList(n){this.tableLoading(!0),this.searchParam.phongban_id=this.phongban_id,this.dataService.getlists({pageSize:this.tableConfig.pageSize,pageNum:n?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,S.x)(()=>{this.tableLoading(!1)})).subscribe(o=>{const{list:s,total:p,pageNum:g}=o;this.dataList=[...s],this.tableConfig.total=p,this.tableConfig.pageIndex=g,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}searchName(n){this.tableLoading(!0),this.dataService.searchParams({pageSize:this.tableConfig.pageSize,pageNum:1,filters:n.target.value}).pipe((0,S.x)(()=>{this.tableLoading(!1)})).subscribe(o=>{const{list:s,total:p,pageNum:g}=o;this.dataList=[...s],this.tableConfig.total=p,this.tableConfig.pageIndex=g,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}edit(n){this.dataService.getDetail(n).subscribe(i=>{this.modalService.show({nzTitle:"C\u1eadp nh\u1eadt"},i).subscribe(({modalValue:o,status:s})=>{0!==s&&(o.id=n,this.tableLoading(!0),this.editData(o))})})}editData(n){this.dataService.update(n).pipe((0,S.x)(()=>{this.tableLoading(!1)})).subscribe(()=>{this.getDataList()})}resetForm(){this.searchParam={}}ngOnInit(){this.initTable(),this.availableOptions=[...b.b.transformMapToArray(b.V.available,2)]}reloadTable(){this.message.info("\u0110\xe3 \u0111\u01b0\u1ee3c l\xe0m m\u1edbi"),this.getDataList()}tableChangeDectction(){this.dataList=[...this.dataList],this.cdf.detectChanges()}tableLoading(n){this.tableConfig.loading=n,this.tableChangeDectction()}selectedChecked(n){this.checkedCashArray=[...n]}changePageSize(n){this.tableConfig.pageSize=n}tattoan(n,i){this.modalSrv.confirm({nzTitle:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n t\u1ea5t to\xe1n kh\xf4ng?",nzContent:"Nh\u1ea5n OK \u0111\u1ec3 ho\xe0n th\xe0nh vi\u1ec7c t\u1ea5t to\xe1n",nzOnOk:()=>{this.tableLoading(!0),this.nhatkykhService.tatToan({iduser:n,sotientra:i}).subscribe(()=>{1===this.dataList.length&&this.tableConfig.pageIndex--,this.getDataList(),this.resetForm()},s=>this.tableLoading(!1))}})}getItem(n,i,o,s,p){this.dataService.getDetail(n).pipe().subscribe(g=>{this.dtoKhService.kbnflg=!0,this.dtoKhService.id=n,this.dtoKhService.sotienno=g.sotienno,this.dtoKhService.name=o,this.dtoKhService.diachi=s,this.dtoKhService.dienthoai=p,this.transfer(T.rootbase+z.t.spkh00201)})}initTable(){this.tableConfig={showCheckbox:!1,showExpand:!0,headers:[{title:"M\xe3 kh\xe1ch h\xe0ng",field:"makhachhang",width:180,tdTemplate:this.linkidTpl},{title:"T\xean kh\xe1ch h\xe0ng",width:180,field:"name"},{title:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",width:120,field:"dienthoai"},{title:"\u0110\u1ecba ch\u1ec9",width:150,field:"diachi"},{title:"GroupId",width:150,field:"groupid"},{title:"S\u1ed1 ti\u1ec1n n\u1ee3",width:100,field:"sotienno",tdTemplate:this.sotienno},{title:"H\xe0nh \u0111\u1ed9ng",tdTemplate:this.operationTpl,width:250,fixed:!0,fixedDir:"right"}],headersChild:[{title:"T\xean h\xe0ng",field:"tenhang",width:220,tdTemplate:this.tenhangTpl},{title:"S\u1ed1 l\u01b0\u1ee3ng",width:80,field:"soluong",tdTemplate:this.soluongTpl},{title:"Kh\u1ed1i l\u01b0\u1ee3ng",width:80,field:"khoiluong",tdTemplate:this.khoiluongTpl},{title:"Tr\u1ecdng l\u01b0\u1ee3ng",field:"trongluong",width:80,tdTemplate:this.trongluongTpl},{title:"Ti\u1ec1n c\u01b0\u1edbc",width:120,field:"tiencuoc",tdTemplate:this.tiencuocTpl},{title:"Ghi ch\xfa",width:150,field:"ghichu"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(A.Q),t.Y36(d.F0),t.Y36(t.sBO),t.Y36(u.uU),t.Y36(E.L),t.Y36(Z.dD),t.Y36(l.T),t.Y36(Y),t.Y36(w.Sf),t.Y36(P.k),t.Y36(Q),t.Y36(I.t),t.Y36(K.p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-spkh00101"]],viewQuery:function(n,i){if(1&n&&(t.Gf(nt,7),t.Gf(et,7),t.Gf(ot,7),t.Gf(it,7),t.Gf(at,7),t.Gf(rt,7),t.Gf(lt,7),t.Gf(st,7),t.Gf(ht,7)),2&n){let o;t.iGM(o=t.CRH())&&(i.operationTpl=o.first),t.iGM(o=t.CRH())&&(i.linkidTpl=o.first),t.iGM(o=t.CRH())&&(i.sotienno=o.first),t.iGM(o=t.CRH())&&(i.tenhangTpl=o.first),t.iGM(o=t.CRH())&&(i.soluongTpl=o.first),t.iGM(o=t.CRH())&&(i.khoiluongTpl=o.first),t.iGM(o=t.CRH())&&(i.trongluongTpl=o.first),t.iGM(o=t.CRH())&&(i.tiencuocTpl=o.first),t.iGM(o=t.CRH())&&(i.ghichuTpl=o.first)}},features:[t._Bn([k.z]),t.qOj],decls:39,vars:30,consts:[[3,"pageHeaderInfo","extraTpl"],["huongdanTpl",""],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],[3,"nzFor"],["nz-input","","name","text","placeholder","search name",3,"ngModel","ngModelChange","keyup.enter"],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","outline"],[3,"tableTitle","reload"],[3,"checkedCashArrayFromComment","tableConfig","tableData","selectedChange","changePageSize","changePageNum"],["operationTpl",""],["linkidTpl",""],["sotienno",""],["tenhangTpl",""],["soluongTpl",""],["khoiluongTpl",""],["trongluongTpl",""],["tiencuocTpl",""],["nz-button","","nzType","primary","nzShape","round",3,"nzSize","click"],["nz-icon","","nzType","star","nzTheme","outline"],["class","operate-text",4,"appAuth"],[1,"operate-text"],["nz-button","","nzType","primary","nzGhost","",3,"click"],["nz-button","","nzType","primary","nzGhost","",3,"click",4,"ngIf"]],template:function(n,i){if(1&n&&(t._UZ(0,"app-page-header",0),t.YNc(1,ct,3,1,"ng-template",null,1,t.W1O),t.TgZ(3,"div",2)(4,"nz-card",3)(5,"form",4)(6,"div",5)(7,"div",6)(8,"nz-form-item")(9,"nz-form-label",7),t._uU(10,"T\xean kh\xe1ch h\xe0ng"),t.qZA(),t.TgZ(11,"nz-form-control")(12,"input",8),t.NdJ("ngModelChange",function(s){return i.searchParam.name=s})("keyup.enter",function(s){return i.searchName(s)}),t.qZA()()()(),t._UZ(13,"div",6),t.TgZ(14,"div",9)(15,"button",10),t.NdJ("click",function(){return i.getDataList()}),t._UZ(16,"i",11),t._uU(17,"T\xecm ki\u1ebfm"),t.qZA(),t.TgZ(18,"button",12),t.NdJ("click",function(){return i.resetForm()}),t._UZ(19,"i",13),t._uU(20,"L\xe0m m\u1edbi"),t.qZA()()()()(),t.TgZ(21,"app-card-table-wrap",14),t.NdJ("reload",function(){return i.reloadTable()}),t.TgZ(22,"app-ant-table",15),t.NdJ("selectedChange",function(s){return i.selectedChecked(s)})("changePageSize",function(s){return i.changePageSize(s)})("changePageNum",function(s){return i.getDataList(s)}),t.qZA(),t.YNc(23,mt,2,2,"ng-template",null,16,t.W1O),t.YNc(25,gt,2,1,"ng-template",null,17,t.W1O),t.YNc(27,ft,3,5,"ng-template",null,18,t.W1O),t.qZA()(),t.YNc(29,zt,2,1,"ng-template",null,19,t.W1O),t.YNc(31,St,2,1,"ng-template",null,20,t.W1O),t.YNc(33,Tt,2,1,"ng-template",null,21,t.W1O),t.YNc(35,vt,2,1,"ng-template",null,22,t.W1O),t.YNc(37,Ct,3,4,"ng-template",null,23,t.W1O)),2&n){const o=t.MAs(2);t.Q6J("pageHeaderInfo",i.pageHeaderInfo)("extraTpl",o),t.xp6(4),t.Q6J("nzBodyStyle",t.DdM(28,_t)),t.xp6(2),t.Q6J("nzGutter",t.DdM(29,bt)),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(5),t.Q6J("ngModel",i.searchParam.name),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(1),t.Q6J("nzType","primary"),t.xp6(6),t.Q6J("tableTitle","K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm"),t.xp6(1),t.Q6J("checkedCashArrayFromComment",i.checkedCashArray)("tableConfig",i.tableConfig)("tableData",i.dataList)}},dependencies:[u.O5,c._Y,c.Fj,c.JJ,c.JL,c.On,c.F,R.q,B.q,H.x,V.p,W.Ls,y.t3,y.SK,f.Lr,f.Nx,f.iK,f.Fd,$.ix,j.w,q.dQ,F.Zp,tt.bd,u.H9],changeDetection:0}),e})(),data:{title:"C\xf4ng n\u1ee3 kh\xe1ch h\xe0ng",key:"spkh00101"}}];let yt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(kt),d.Bz]}),e})();var M=a(5316);let At=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[M.m]}),e})();var Et=a(30804);let Zt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,yt,At,M.m,Et.A]}),e})()},30804:(x,v,a)=>{a.d(v,{A:()=>_});var u=a(5316),d=a(13458),z=a(94650);let _=(()=>{class m{}return m.\u0275fac=function(T){return new(T||m)},m.\u0275mod=z.oAB({type:m}),m.\u0275inj=z.cJS({imports:[u.m,d.e]}),m})()}}]);