"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[4151],{22155:(T,x,a)=>{a.d(x,{t:()=>h});var h=(()=>{return(l=h||(h={})).Demo="/default/dashboard/demo",l.Analysis="/default/dashboard/analysis",l.Monitor="/default/dashboard/monitor",l.Workbench="/default/dashboard/workbench",l.spxe00101="xe/spxe00101",l.spch00101="chuyen/spch00101",l.spch00201="chuyen/spch00201",l.spch00251="chuyen/spch00251",l.spch00252="chuyen/spch00252",l.spch00253="chuyen/spch00253",l.spch00254="chuyen/spch00254",l.spch00255="chuyen/spch00255",l.spkh00101="khachhang/spkh00101",l.spkh00201="khachhang/spkh00201",l.mbtx00101="mobile/mbtx00101",l.mbtx00201="mobile/mbtx00201",l.mbtx00301="mobile/mbtx00301",h;var l})()},91565:(T,x,a)=>{a.d(x,{Q:()=>E});var h=a(15861),l=a(80529),C=a(44556),f=a(94650),_=a(54246);let E=(()=>{class t{constructor(m,r){this.http=m,this.httpt=r,this.urlApi="https://fakestoreapi.com/",this.provincesApi=C.tinhthanhApi,this.httpOptions={headers:new l.WM({"Content-Type":"application/json"})}}GetCallProvinces(m,r){var o=this;return(0,h.Z)(function*(){let i=o.httpt.get(o.provincesApi);return i.subscribe({next:c=>(m?.(c),!0),error:c=>(r?.(),!1),complete:()=>{}}),i})()}GetCallCommonWs(m,r,o){var i=this;return(0,h.Z)(function*(){let c=i.httpt.get(i.urlApi+m,{observe:"response"});return c.subscribe({next:p=>(r?.(p),!0),error:p=>(o?.(),!1),complete:()=>{}}),c})()}PostCallCommonWs(m,r,o,i){var c=this;return(0,h.Z)(function*(){let p=c.http.post(m,r,{needSuccessInfo:!1});return p.subscribe({next:g=>(o?.(g),!0),error:g=>(i?.(),!1),complete:()=>{}}),p})()}GetCallWs(m,r,o){var i=this;return(0,h.Z)(function*(){let c=i.http.get(m,{observe:"response"});return c.subscribe({next:p=>(r?.(p),!0),error:p=>(o?.(),!1),complete:()=>{}}),c})()}PostCallWs(m,r,o,i){var c=this;return(0,h.Z)(function*(){let p=c.http.post(m,r,{needSuccessInfo:!1});return p.subscribe({next:g=>(o?.(g),!0),error:g=>(i?.(),!1),complete:()=>{}}),p})()}PutCallWs(m,r,o,i){var c=this;return(0,h.Z)(function*(){let p=c.http.put(m,r,{needSuccessInfo:!0});return p.subscribe({next:g=>(o?.(g),!0),error:g=>(i?.(),!1),complete:()=>{}}),p})()}DeleteCallWs(m,r,o,i){var c=this;return(0,h.Z)(function*(){let p=c.http.delete(m,r,{needSuccessInfo:!0});return p.subscribe({next:g=>(o?.(g),!0),error:g=>(i?.(),!1),complete:()=>{}}),p})()}}return t.\u0275fac=function(m){return new(m||t)(f.LFG(_.q),f.LFG(l.eN))},t.\u0275prov=f.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},80126:(T,x,a)=>{a.d(x,{u:()=>f});var h=a(44556),l=a(94650),C=a(54246);let f=(()=>{class _{constructor(t){this.http=t}postAll(t){return this.http.post(h.NguonxeAnt100GetAll,t,{needSuccessInfo:!1})}postDetail(t){return this.http.post(h.NguonxeAnt100GetDetail,t,{needSuccessInfo:!1})}postCreate(t){return this.http.post(h.NguonxeAnt100Create,t,{needSuccessInfo:!1})}postUpdate(t){return this.http.post(h.NguonxeAnt100Update,t,{needSuccessInfo:!1})}postDelete(t){return this.http.post(h.NguonxeAnt100Delete,t,{needSuccessInfo:!1})}postDeleteAll(t){return this.http.post(h.NguonxeAnt100DeleteAll,t,{needSuccessInfo:!1})}postUpdateStatus(t){return this.http.post(h.NguonxeAnt100UpdateStatus,t,{needSuccessInfo:!1})}}return _.\u0275fac=function(t){return new(t||_)(l.LFG(C.q))},_.\u0275prov=l.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},13951:(T,x,a)=>{a.d(x,{H:()=>t});var h=a(91565),l=a(44556),C=a(36895),f=a(94650),_=a(9116),E=a(99651);let t=(()=>{class v{constructor(r,o,i,c,p){this.webService=r,this.router=o,this.cdf=i,this.datePipe=c,this.tabService=p,this.formItemNm={},this.list=[],this.title="nam pham",this.constHttt=l.Hinhthucthanhtoan}ngOnDestroy(){this.destroy()}ngOnInit(){this.setFormItemNm()}setFormItemNm(){this.webService.PostCallWs(l.Ant100PostUrlParams,{url:this.router.url},o=>{this.list=o,this.list.forEach(i=>{this.formItemNm[i.stt]=i.title1}),this.fnInit()})}getDate(){return this.datePipe.transform(new Date,"yyyy/MM/dd")+""}formatDate(r){return null==r||""==r?"":this.datePipe.transform(r,"yyyy/MM/dd")+""}displayVND(r){return(0,C.xG)(1e3*r,"vi-VN","\u0111","symbol-narrow","1.0-0")}displayOD(r){return r.slice(-5)+"-"+r.substring(0,r.length-5)}transfer(r){let o=this.tabService.findIndex(r);-1==o||this.tabService.delTab(this.tabService.getTabArray()[o],o),this.router.navigate([r])}mergeHttt(r){let o=r+"",i="";for(let c of this.constHttt)c.value===o&&(i=c.lable);return i}}return v.\u0275fac=function(r){return new(r||v)(f.Y36(h.Q),f.Y36(_.F0),f.Y36(f.sBO),f.Y36(C.uU),f.Y36(E.p))},v.\u0275cmp=f.Xpm({type:v,selectors:[["app-base"]],features:[f._Bn([C.uU])],decls:0,vars:0,template:function(r,o){},encapsulation:2}),v})()},54151:(T,x,a)=>{a.r(x),a.d(x,{NguonxeModule:()=>rt});var h=a(36895),l=a(9116),C=a(13951),f=a(22155),_=a(22195),E=a(28746),t=a(94650),v=a(91565),m=a(49651),r=a(80126),o=a(24006),i=a(49523),c=a(39646),p=a(50007),g=a(73679),b=a(36704),A=a(35635);function Z(e,d){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.errors.message)}}function F(e,d){1&e&&(t.ynx(0),t._uU(1,"Ph\u1ea7n b\u1eaft bu\u1ed9c"),t.BQk())}function P(e,d){if(1&e&&(t.YNc(0,Z,2,1,"ng-container",17),t.YNc(1,F,2,0,"ng-container",17)),2&e){const n=d.$implicit;t.Q6J("ngIf",n.hasError("message")),t.xp6(1),t.Q6J("ngIf",n.hasError("required"))}}const S=function(){return{minRows:2,maxRows:6}};let L=(()=>{class e{constructor(n,s){this.modalRef=n,this.fb=s,this.params={}}getAsyncFnData(n){return(0,c.of)(n)}getCurrentValue(){return(0,i.r7)(this.addEditForm)?(0,c.of)(this.addEditForm.value):(0,c.of)(!1)}ngOnInit(){this.initForm(),Object.keys(this.params).length>0&&this.addEditForm.patchValue(this.params)}initForm(){this.addEditForm=this.fb.group({datacd:[null,[o.kI.required]],datanm:[null,[o.kI.required]],sodienthoai:[null,[o.kI.required]],diachi:[null],thongtinthanhtoan1:[null],thongtinthanhtoan2:[null]})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.Lf),t.Y36(o.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-nguonxe-modal"]],decls:33,vars:32,consts:[["nz-form","",3,"formGroup"],["nzRequired","","nzFor","datacd",3,"nzSm","nzXs"],[3,"nzSm","nzXs","nzErrorTip"],["nz-input","","formControlName","datacd","name","datacd","placeholder","Vui l\xf2ng nh\u1eadp ID ngu\u1ed3n xe","id","datacd"],["nzFor","datanm",3,"nzSm","nzXs"],["nz-input","","formControlName","datanm","name","datanm","placeholder","Vui l\xf2ng nh\u1eadp m\xf4 t\u1ea3","id","datanm"],["nzRequired","","nzFor","sodienthoai",3,"nzSm","nzXs"],["nz-input","","formControlName","sodienthoai","name","sodienthoai","maxlength","12","id","sodienthoai","placeholder","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"],["nzRequired","","nzFor","diachi",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nz-input","","formControlName","diachi","name","diachi","maxlength","255","id","diachi","placeholder","\u0110\u1ecba ch\u1ec9"],["nzFor","thongtinthanhtoan1",3,"nzSm","nzXs"],["nzErrorTip","",3,"nzSm","nzXs"],["nz-input","","formControlName","thongtinthanhtoan1","placeholder","Nh\u1eadp th\xf4ng tin thanh to\xe1n b\xean v\u1eadn chuy\u1ec3n.",3,"nzAutosize"],["nzFor","thongtinthanhtoan2",3,"nzSm","nzXs"],["nz-input","","formControlName","thongtinthanhtoan2","placeholder","Nh\u1eadp th\xf4ng tin thanh to\xe1n b\xean v\u1eadn chuy\u1ec3n.",3,"nzAutosize"],["combineTpl",""],[4,"ngIf"]],template:function(n,s){if(1&n&&(t.TgZ(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),t._uU(3,"ID Ngu\u1ed3n xe"),t.qZA(),t.TgZ(4,"nz-form-control",2),t._UZ(5,"input",3),t.qZA()(),t.TgZ(6,"nz-form-item")(7,"nz-form-label",4),t._uU(8,"T\xean ngu\u1ed3n xe"),t.qZA(),t.TgZ(9,"nz-form-control",2),t._UZ(10,"input",5),t.qZA()(),t.TgZ(11,"nz-form-item")(12,"nz-form-label",6),t._uU(13,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),t.qZA(),t.TgZ(14,"nz-form-control",2),t._UZ(15,"input",7),t.qZA()(),t.TgZ(16,"nz-form-item")(17,"nz-form-label",8),t._uU(18,"\u0110\u1ecba ch\u1ec9"),t.qZA(),t.TgZ(19,"nz-form-control",9),t._UZ(20,"input",10),t.qZA()(),t.TgZ(21,"nz-form-item")(22,"nz-form-label",11),t._uU(23,"Th\xf4ng tin thanh to\xe1n 1"),t.qZA(),t.TgZ(24,"nz-form-control",12),t._UZ(25,"textarea",13),t.qZA()(),t.TgZ(26,"nz-form-item")(27,"nz-form-label",14),t._uU(28,"Th\xf4ng tin thanh to\xe1n 2"),t.qZA(),t.TgZ(29,"nz-form-control",12),t._UZ(30,"textarea",15),t.qZA()()(),t.YNc(31,P,2,2,"ng-template",null,16,t.W1O)),2&n){const u=t.MAs(32);t.Q6J("formGroup",s.addEditForm),t.xp6(2),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24)("nzErrorTip",u),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24)("nzErrorTip",u),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24)("nzErrorTip",u),t.xp6(3),t.Q6J("nzSm",4)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24),t.xp6(3),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24),t.xp6(1),t.Q6J("nzAutosize",t.DdM(30,S)),t.xp6(2),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",18)("nzXs",24),t.xp6(1),t.Q6J("nzAutosize",t.DdM(31,S))}},dependencies:[h.O5,o._Y,o.Fj,o.JJ,o.JL,o.nD,o.sg,o.u,g.t3,g.SK,b.Lr,b.Nx,b.iK,b.Fd,A.Zp,A.rh],changeDetection:0}),e})();var J=a(69174);let O=(()=>{class e{constructor(n){this.modalWrapService=n}getContentComponent(){return L}show(n={},s){return this.modalWrapService.show(this.getContentComponent(),n,s)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(J.U))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var X=a(99651),I=a(32802),Q=a(5529),B=a(35656),U=a(94178),W=a(21102),Y=a(66616),R=a(47044),G=a(21811),H=a(51971);const K=["pageHeaderContent"],k=["operationTpl"];function j(e,d){if(1&e){const n=t.EpF();t.TgZ(0,"span",18)(1,"button",19),t.NdJ("click",function(){t.CHM(n);const u=t.oxw().id,z=t.oxw();return t.KtG(z.edit(u))}),t._uU(2,"C\u1eadp nh\u1eadt"),t.qZA()()}}function w(e,d){if(1&e){const n=t.EpF();t.TgZ(0,"span",18)(1,"button",19),t.NdJ("click",function(){t.CHM(n);const u=t.oxw().id,z=t.oxw();return t.KtG(z.del(u))}),t._uU(2,"X\xf3a"),t.qZA()()}}function V(e,d){if(1&e&&(t.YNc(0,j,3,0,"span",17),t.YNc(1,w,3,0,"span",17)),2&e){const n=t.oxw();t.Q6J("appAuth",n.ActionCode.Nguonxeupdate),t.xp6(1),t.Q6J("appAuth",n.ActionCode.Nguonxedel)}}function $(e,d){if(1&e){const n=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(n);const u=t.oxw(2);return t.KtG(u.add())}),t._UZ(1,"i",22),t._uU(2," Th\xeam m\u1edbi "),t.qZA()}}function q(e,d){if(1&e&&t.YNc(0,$,3,0,"button",20),2&e){const n=t.oxw();t.Q6J("appAuth",n.ActionCode.Nguonxeadd)}}const tt=function(){return{"padding-bottom":0}},nt=function(){return{xs:8,sm:16,md:24}},et=[{path:"",component:(()=>{class e extends C.H{constructor(n,s,u,z,N,D,it,st,y){super(n,s,u,z,y),this.webService=n,this.router=s,this.cdf=u,this.datePipe=z,this.message=N,this.dataService=D,this.modalService=it,this.modalSrv=st,this.tabService=y,this.DisplayScreenID=f.t.spxe00101,this.pageHeaderInfo={title:"",breadcrumb:[],desc:""},this.searchParam={},this.dataList=[],this.checkedCashArray=[],this.ActionCode=_.h,this.pageHeaderInfo={title:"",breadcrumb:["Home","Qu\u1ea3n l\xfd H\u1ec7 th\u1ed1ng","Qu\u1ea3n l\xfd ngu\u1ed3n xe"],desc:this.pageHeaderContent},this.cdf.markForCheck()}fnInit(){}destroy(){}getDataList(n){this.tableConfig.loading=!0,this.dataService.postAll({pageSize:this.tableConfig.pageSize,pageNum:n?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,E.x)(()=>{this.tableLoading(!1)})).subscribe(u=>{const{list:z,total:N,pageNum:D}=u;this.dataList=[...z],this.tableConfig.total=N,this.tableConfig.pageIndex=D,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}tableLoading(n){this.tableConfig.loading=n,this.tableChangeDectction()}tableChangeDectction(){this.dataList=[...this.dataList],this.cdf.detectChanges()}changePageSize(n){this.tableConfig.pageSize=n}resetForm(){this.searchParam={},this.getDataList()}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}add(){this.modalService.show({nzTitle:"Th\xeam m\u1edbi"}).subscribe(n=>{!n||0===n.status||(this.tableLoading(!0),this.addEditData(n.modalValue,"postCreate"))})}addEditData(n,s){this.dataService[s](n).pipe((0,E.x)(()=>{this.tableLoading(!1)})).subscribe(()=>{this.message.info("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng"),this.getDataList()})}edit(n){this.dataService.postDetail({id:n}).subscribe(s=>{this.modalService.show({nzTitle:"C\u1eadp Nh\u1eadt"},s).subscribe(({modalValue:u,status:z})=>{0!==z&&(u.id=n,this.tableLoading(!0),this.addEditData(u,"postUpdate"))})})}del(n){this.modalSrv.confirm({nzTitle:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a kh\xf4ng ?",nzContent:"Kh\xf4ng th\u1ec3 kh\xf4i ph\u1ee5c sau khi x\xf3a",nzOnOk:()=>{this.tableLoading(!0),this.dataService.postDelete({id:n}).subscribe(()=>{1===this.dataList.length&&this.tableConfig.pageIndex--,this.getDataList()},s=>this.tableLoading(!1))}})}ngOnInit(){this.initTable()}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"ID ngu\u1ed3n xe",field:"datacd",width:150},{title:"T\xean ngu\u1ed3n xe",width:300,field:"datanm"},{title:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",width:200,field:"sodienthoai"},{title:"\u0110\u1ecba ch\u1ec9",width:200,field:"diachi"},{title:"Th\xf4ng tin thanh to\xe1n 1",width:500,field:"thongtinthanhtoan1"},{title:"Th\xf4ng tin thanh to\xe1n 1",width:500,field:"thongtinthanhtoan2"},{title:"V\u1eadn h\xe0nh",tdTemplate:this.operationTpl,width:280,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v.Q),t.Y36(l.F0),t.Y36(t.sBO),t.Y36(h.uU),t.Y36(m.dD),t.Y36(r.u),t.Y36(O),t.Y36(p.Sf),t.Y36(X.p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-nguonxe"]],viewQuery:function(n,s){if(1&n&&(t.Gf(K,5),t.Gf(k,7)),2&n){let u;t.iGM(u=t.CRH())&&(s.pageHeaderContent=u.first),t.iGM(u=t.CRH())&&(s.operationTpl=u.first)}},features:[t.qOj],decls:25,vars:29,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],[3,"nzFor"],["nz-input","","name","datacd","placeholder","Vui l\xf2ng nh\u1eadp ngu\u1ed3n xe",3,"ngModel","ngModelChange"],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","outline"],[3,"tableTitle","btnTpl","reload"],[3,"tableConfig","tableData","changePageSize","changePageNum"],["operationTpl",""],["tableBtns",""],["class","operate-text",4,"appAuth"],[1,"operate-text"],["nz-button","","nzType","primary","nzGhost","",3,"click"],["nz-button","","nzType","primary","class","m-r-8",3,"click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"]],template:function(n,s){if(1&n&&(t._UZ(0,"app-page-header",0),t.TgZ(1,"div",1)(2,"nz-card",2)(3,"form",3)(4,"div",4)(5,"div",5)(6,"nz-form-item")(7,"nz-form-label",6),t._uU(8,"T\xean ngu\u1ed3n xe"),t.qZA(),t.TgZ(9,"nz-form-control")(10,"input",7),t.NdJ("ngModelChange",function(z){return s.searchParam.datacd=z}),t.qZA()()()(),t._UZ(11,"div",5),t.TgZ(12,"div",8)(13,"button",9),t.NdJ("click",function(){return s.getDataList()}),t._UZ(14,"i",10),t._uU(15," T\xecm ki\u1ebfm "),t.qZA(),t.TgZ(16,"button",11),t.NdJ("click",function(){return s.resetForm()}),t._UZ(17,"i",12),t._uU(18," C\xe0i l\u1ea1i "),t.qZA()()()()(),t.TgZ(19,"app-card-table-wrap",13),t.NdJ("reload",function(){return s.reloadTable()}),t.TgZ(20,"app-ant-table",14),t.NdJ("changePageSize",function(z){return s.changePageSize(z)})("changePageNum",function(z){return s.getDataList(z)}),t.qZA(),t.YNc(21,V,2,2,"ng-template",null,15,t.W1O),t.qZA()(),t.YNc(23,q,1,1,"ng-template",null,16,t.W1O)),2&n){const u=t.MAs(24);t.Q6J("pageHeaderInfo",s.pageHeaderInfo),t.xp6(2),t.Q6J("nzBodyStyle",t.DdM(27,tt)),t.xp6(2),t.Q6J("nzGutter",t.DdM(28,nt)),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(5),t.Q6J("ngModel",s.searchParam.datacd),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(1),t.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),t.xp6(1),t.Q6J("nzType","primary"),t.xp6(6),t.Q6J("tableTitle","Danh s\xe1ch ngu\u1ed3n xe")("btnTpl",u),t.xp6(1),t.Q6J("tableConfig",s.tableConfig)("tableData",s.dataList)}},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.On,o.F,I.q,Q.q,B.x,U.p,W.Ls,g.t3,g.SK,b.Lr,b.Nx,b.iK,b.Fd,Y.ix,R.w,G.dQ,A.Zp,H.bd],changeDetection:0}),e})(),data:{title:"Qu\u1ea3n l\xfd ngu\u1ed3n xe",key:"quanlynguonxe"}}];let ot=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(et),l.Bz]}),e})();var M=a(5316);let at=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[M.m]}),e})(),rt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[M.m,h.ez,ot,at]}),e})()}}]);