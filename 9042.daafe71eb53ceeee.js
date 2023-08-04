"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[9042],{85216:(y,m,a)=>{a.d(m,{m:()=>u});var d=a(94650);let u=(()=>{class h{constructor(){this.formRules={nonEmpty:"^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$",usernameMin:6,passwordMin:6,passwordPattern:"^[a-zA-Z0-9]{6,20}$"},this.formErrors={name:"",email:"",password:"",confirmPassword:"",accept:!1},this.errorMessages={name:{required:"Name kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng",minLength:`Name t\u1ed1i thi\u1ec3u ${this.formRules.usernameMin} k\xfd t\u1ef1`,pattern:"Must contain letters and/or numbers, no trailing spaces",namedb:"T\xean T\xe0i Kho\u1ea3n \u0111\xe3 t\u1ed3n t\u1ea1i."},text:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng."},email:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng.",email:"\u0110\u1ecba ch\u1ec9 Email kh\xf4ng \u0111\xfang.",emaildb:"Email \u0111\xe3 t\u1ed3n t\u1ea1i."},password:{required:"Password kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng",pattern:"Password l\xe0 k\xfd t\u1ef1 \u0111\u1eb7c bi\u1ec7t, s\u1ed1, ch\u1eef hoa v\xe0 ch\u1eef th\u01b0\u1eddng",minLength:`Password t\u1ed1i thi\u1ec3u ${this.formRules.passwordMin} k\xfd t\u1ef1`},confirmPassword:{required:"Password confirmation is required",passwordMismatch:"Passwords must match"},accept:{requiredTrue:"You have to accept our Terms and Conditions"}}}}return h.\u0275fac=function(p){return new(p||h)},h.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},67859:(y,m,a)=>{a.d(m,{S:()=>X});var d=a(94650),M=a(91565);let b=(()=>{class r{constructor(s){this.webService=s}mobileRule(s){return s?function f(r){return/^(0|\+?84|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(r)}(s)?null:{message:"Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ch\xednh x\xe1c"}:null}telPhoneRule(s){return s?function n(r){return/^(0\d{2,3}-?)?\d{7,8}$/.test(r)}(s)?null:{message:"Vui l\xf2ng nh\u1eadp zalo ch\xednh x\xe1c"}:null}emailRule(s){return s?function k(r){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(r)}(s)?null:{message:"Vui l\xf2ng nh\u1eadp emali ch\xednh x\xe1c"}:null}passwordRule(s){return s?function S(r){return/^[^\s]{6,20}$/.test(r)&&!/^\d+$/.test(r)}(s)?null:{message:"M\u1eadt kh\u1ea9u bao g\u1ed3m 6 \u0111\u1ebfn 20 ch\u1eef c\xe1i vi\u1ebft hoa v\xe0 vi\u1ebft th\u01b0\u1eddng, s\u1ed1 ho\u1eb7c c\xe1c k\xfd t\u1ef1 kh\xe1c"}:null}}return r.\u0275fac=function(s){return new(s||r)(d.LFG(M.Q))},r.\u0275prov=d.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),X=(()=>{class r{constructor(s){this.vrService=s}emailValidator(){return this.commonUtil(this.vrService.emailRule)}mobileValidator(){return this.commonUtil(this.vrService.telPhoneRule)}passwordValidator(){return this.commonUtil(this.vrService.passwordRule)}zaloValidator(){return this.commonUtil(this.vrService.telPhoneRule)}commonUtil(s){return D=>s(D.value)}}return r.\u0275fac=function(s){return new(s||r)(d.LFG(b))},r.\u0275prov=d.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},11076:(y,m,a)=>{a.r(m),a.d(m,{Spkh00301Module:()=>dn});var d=a(9116),u=a(22155),h=a(13951),g=a(44556),p=a(22195),f=a(28746),n=a(94650),k=a(91565),S=a(36895),w=a(99651),M=a(35568),b=a(49651),X=a(94267),r=a(54246);let z=(()=>{class e{constructor(t){this.http=t}search(t){return this.http.post(g.Spkh00301Ant100Search,t,{needSuccessInfo:!1})}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(r.q))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var s=a(24006),D=a(32802),P=a(5529),Z=a(94178),E=a(21102),A=a(73679),C=a(36704),F=a(66616),I=a(47044),J=a(21811),O=a(35635),H=a(51971),Q=a(834),U=a(39597),x=a(64425);const R=["operationTpl"],Y=["linkTpl"],G=["tenkhachhangTpl"],B=["trangthaiTpl"],V=["tiencuocTpl"],$=["endSoplnDate"];function K(e,l){if(1&e){const t=n.EpF();n.TgZ(0,"button",24),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.showVideo())}),n._UZ(1,"span",25),n._uU(2),n.qZA()}if(2&e){const t=n.oxw();n.Q6J("nzSize","large"),n.xp6(2),n.hij("",t.formItemNm[4]," ")}}function W(e,l){}function j(e,l){if(1&e){const t=n.EpF();n.ynx(0),n.TgZ(1,"app-card-table-wrap",26),n.NdJ("reload",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.reloadTable())}),n.TgZ(2,"app-ant-table",27),n.NdJ("selectedChange",function(i){n.CHM(t);const c=n.oxw();return n.KtG(c.selectedChecked(i))})("changePageSize",function(i){n.CHM(t);const c=n.oxw();return n.KtG(c.changePageSize(i))})("changePageNum",function(i){n.CHM(t);const c=n.oxw();return n.KtG(c.getDataList(i))}),n.qZA()(),n.YNc(3,W,0,0,"ng-template",null,28,n.W1O),n.BQk()}if(2&e){const t=n.MAs(4),o=n.oxw();n.xp6(1),n.Q6J("tableTitle",o.formItemNm[8])("btnTpl",t),n.xp6(1),n.Q6J("checkedCashArrayFromComment",o.checkedCashArray)("tableConfig",o.tableConfig)("tableData",o.dataList)}}function q(e,l){if(1&e&&(n.TgZ(0,"span")(1,"a",29),n._uU(2),n.qZA()(),n.TgZ(3,"button",30),n._UZ(4,"span",31),n.qZA()),2&e){const t=l.soHDTTCN,o=n.oxw();n.xp6(2),n.Oqu(t),n.xp6(1),n.Q6J("cdkCopyToClipboard",o.copy(t))}}function nn(e,l){1&e&&n._UZ(0,"nz-alert",32),2&e&&n.s9C("nzMessage",l.idkhachhang.name)}function tn(e,l){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"currency"),n.qZA()),2&e){const t=l.tongcuoc;n.xp6(1),n.Oqu(n.Dn7(2,1,1e3*t,"VND",""))}}function en(e,l){1&e&&(n.ynx(0),n._UZ(1,"nz-alert",35),n.BQk())}function an(e,l){1&e&&n._UZ(0,"nz-alert",36)}function on(e,l){if(1&e&&(n.YNc(0,en,2,0,"ng-container",33),n.YNc(1,an,1,0,"ng-template",null,34,n.W1O)),2&e){const t=l.status01,o=n.MAs(2);n.Q6J("ngIf",0==t)("ngIfElse",o)}}const rn=function(){return{"padding-bottom":0}},L=function(){return{xs:8,sm:16,md:24}},sn=[{path:"",component:(()=>{class e extends h.H{constructor(t,o,i,c,_,v,pn,mn,un){super(t,o,i,c,_,v),this.webService=t,this.router=o,this.cdf=i,this.datePipe=c,this.tabService=_,this.modalVideoyoutube=v,this.message=pn,this.spin00251subkhachhangService=mn,this.spkh00301Service=un,this.DisplayScreenID=u.t.spkh00301,this.pageHeaderInfo={title:"",breadcrumb:["","",""]},this.searchParam={},this.dateFormat=g.dateFormat,this.dataList=[],this.checkedCashArray=[],this.ActionCode=p.h,this.usernm="",this.stockuser="",this.checkOptionStatus=[{label:"Ch\u1edd thanh to\xe1n",value:0,checked:!1},{label:"\u0110\xe3 th\xe1nh to\xe1n",value:1,checked:!1}],this.ngaybatdau=null,this.ngayketthuc=null,this.disabledStartSoplnDate=T=>{if(!T||!this.ngayketthuc)return!1;const N=new Date(this.ngayketthuc);return T.getTime()>N.getTime()},this.disabledEndSoplnDate=T=>{if(!T||!this.ngaybatdau)return!1;const N=new Date(this.ngaybatdau);return T.getTime()<=N.getTime()}}fnInit(){this.pageHeaderInfo={title:this.formItemNm[3],breadcrumb:[this.formItemNm[1],this.formItemNm[2],this.formItemNm[3]],desc:""},this.initTable()}destroy(){}handleStartOpenSoplnChange(t){t||this.endSoplnDate.open()}handleEndOpenSoplnChange(t){}changeStatus01(){}getDataList(t){this.tableLoading(!0),this.searchParam.ngaybatdau=this.formatDate(this.ngaybatdau),this.searchParam.ngayketthuc=this.formatDate(this.ngayketthuc),this.spkh00301Service.search({pageSize:this.tableConfig.pageSize,pageNum:t?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,f.x)(()=>{this.tableLoading(!1)})).subscribe(i=>{const{list:c,total:_,pageNum:v}=i;this.dataList=[...c],this.tableConfig.total=_,this.tableConfig.pageIndex=v,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}resetForm(){this.searchParam={},this.usernm=""}reloadTable(){this.message.info("\u0110\xe3 \u0111\u01b0\u1ee3c l\xe0m m\u1edbi"),this.getDataList()}tableChangeDectction(){this.dataList=[...this.dataList],this.cdf.detectChanges()}tableLoading(t){this.tableConfig.loading=t,this.tableChangeDectction()}selectedChecked(t){this.checkedCashArray=[...t]}changePageSize(t){this.tableConfig.pageSize=t}copy(t){return`${t}`}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"S\u1ed1 ID",field:"soID",width:200},{title:"S\u1ed1 HDTTCN",field:"soHDTTCN",width:220,tdTemplate:this.linkTpl},{title:"Ng\xe0y ph\xe1t h\xe0nh",field:"ngayphathanh",width:180,pipe:"date: dd/MM/yyyy:HH:ss"},{title:"Ng\xe0y thanh to\xe1n",field:"ngaythanhtoan",width:180,pipe:"date: dd/MM/yyyy:HH:ss"},{title:"Tr\u1ea1ng th\xe1i",width:180,field:"trangthai",tdTemplate:this.trangthaiTpl},{title:"V\u1eadn h\xe0nh",tdTemplate:this.operationTpl,width:250,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(k.Q),n.Y36(d.F0),n.Y36(n.sBO),n.Y36(S.uU),n.Y36(w.p),n.Y36(M.L),n.Y36(b.dD),n.Y36(X.a),n.Y36(z))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-spkh00301"]],viewQuery:function(t,o){if(1&t&&(n.Gf(R,7),n.Gf(Y,7),n.Gf(G,7),n.Gf(B,7),n.Gf(V,7),n.Gf($,5)),2&t){let i;n.iGM(i=n.CRH())&&(o.operationTpl=i.first),n.iGM(i=n.CRH())&&(o.linkTpl=i.first),n.iGM(i=n.CRH())&&(o.tenkhachhangTpl=i.first),n.iGM(i=n.CRH())&&(o.trangthaiTpl=i.first),n.iGM(i=n.CRH())&&(o.tiencuocTpl=i.first),n.iGM(i=n.CRH())&&(o.endSoplnDate=i.first)}},features:[n.qOj],decls:43,vars:80,consts:[[3,"pageHeaderInfo","extraTpl"],["huongdanTpl",""],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzFor"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["name","ngaybatdau",3,"nzDisabledDate","nzFormat","ngModel","nzPlaceHolder","ngModelChange","nzOnOpenChange"],["name","ngayketthuc",3,"nzDisabledDate","nzFormat","ngModel","nzPlaceHolder","ngModelChange","nzOnOpenChange"],["endSoplnDate",""],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","outline"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzErrorTip"],["nz-input","","name","soHDTTCN","id","soHDTTCN","placeholder","",3,"ngModel","ngModelChange"],[4,"ngIf"],["linkTpl",""],["tenkhachhangTpl",""],["tiencuocTpl",""],["trangthaiTpl",""],["nz-button","","nzType","primary","nzShape","round",3,"nzSize","click"],["nz-icon","","nzType","star","nzTheme","outline"],[3,"tableTitle","btnTpl","reload"],[3,"checkedCashArrayFromComment","tableConfig","tableData","selectedChange","changePageSize","changePageNum"],["tableBtns",""],["nz-button","","nzType","link"],["nz-button","","nzType","default","nzShape","circle",3,"cdkCopyToClipboard"],["nz-icon","","nzType","copy"],["nzType","success",3,"nzMessage"],[4,"ngIf","ngIfElse"],["statusTpl",""],["nzType","warning","nzMessage","Ph\xe1t h\xe0nh"],["nzType","success","nzMessage","Thanh to\xe1n"]],template:function(t,o){if(1&t&&(n._UZ(0,"app-page-header",0),n.YNc(1,K,3,2,"ng-template",null,1,n.W1O),n.TgZ(3,"div",2)(4,"nz-card",3)(5,"form",4)(6,"div",5)(7,"div",6)(8,"nz-form-item")(9,"nz-form-label",7),n._uU(10,"Ng\xe0y b\u1eaft \u0111\u1ea7u"),n.qZA(),n.TgZ(11,"nz-form-control",8)(12,"nz-date-picker",9),n.NdJ("ngModelChange",function(c){return o.ngaybatdau=c})("nzOnOpenChange",function(c){return o.handleStartOpenSoplnChange(c)}),n.qZA()()()(),n.TgZ(13,"div",6)(14,"nz-form-item")(15,"nz-form-label",7),n._uU(16,"Ng\xe0y k\u1ebft th\xfac"),n.qZA(),n.TgZ(17,"nz-form-control",8)(18,"nz-date-picker",10,11),n.NdJ("ngModelChange",function(c){return o.ngayketthuc=c})("nzOnOpenChange",function(c){return o.handleEndOpenSoplnChange(c)}),n.qZA()()()(),n.TgZ(20,"div",12)(21,"button",13),n.NdJ("click",function(){return o.getDataList()}),n._UZ(22,"i",14),n._uU(23," T\xecm ki\u1ebfm "),n.qZA(),n.TgZ(24,"button",15),n.NdJ("click",function(){return o.resetForm()}),n._UZ(25,"i",16),n._uU(26," L\xe0m m\u1edbi "),n.qZA()()(),n.TgZ(27,"div",5)(28,"div",6)(29,"nz-form-item")(30,"nz-form-label",7),n._uU(31,"S\u1ed1 HDTTCN"),n.qZA(),n.TgZ(32,"nz-form-control",17)(33,"input",18),n.NdJ("ngModelChange",function(c){return o.searchParam.soHDTTCN=c}),n.qZA()()()()()()(),n.YNc(34,j,5,5,"ng-container",19),n.YNc(35,q,5,2,"ng-template",null,20,n.W1O),n.YNc(37,nn,1,1,"ng-template",null,21,n.W1O),n.YNc(39,tn,3,5,"ng-template",null,22,n.W1O),n.YNc(41,on,3,2,"ng-template",null,23,n.W1O),n.qZA()),2&t){const i=n.MAs(2);n.Q6J("pageHeaderInfo",o.pageHeaderInfo)("extraTpl",i),n.xp6(4),n.Q6J("nzBodyStyle",n.DdM(77,rn)),n.xp6(2),n.Q6J("nzGutter",n.DdM(78,L)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("nzDisabledDate",o.disabledStartSoplnDate)("nzFormat",o.dateFormat)("ngModel",o.ngaybatdau)("nzPlaceHolder",o.dateFormat),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("nzDisabledDate",o.disabledEndSoplnDate)("nzFormat",o.dateFormat)("ngModel",o.ngayketthuc)("nzPlaceHolder",o.dateFormat),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("nzType","primary"),n.xp6(6),n.Q6J("nzGutter",n.DdM(79,L)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",""),n.xp6(1),n.Q6J("ngModel",o.searchParam.soHDTTCN),n.xp6(1),n.Q6J("ngIf",o.tableConfig)}},dependencies:[S.O5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,D.q,P.q,Z.p,E.Ls,A.t3,A.SK,C.Lr,C.Nx,C.iK,C.Fd,F.ix,I.w,J.dQ,O.Zp,H.bd,Q.uw,U.r,x.i3,S.H9]}),e})(),data:{title:"T\xecm ki\u1ebfm c\xf4ng n\u1ee3",key:"spkh00301"}}];let ln=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.Bz.forChild(sn),d.Bz]}),e})();var cn=a(5316),hn=a(30804);let dn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[cn.m,ln,hn.A,x.Iq]}),e})()},30804:(y,m,a)=>{a.d(m,{A:()=>g});var d=a(5316),u=a(13458),h=a(94650);let g=(()=>{class p{}return p.\u0275fac=function(n){return new(n||p)},p.\u0275mod=h.oAB({type:p}),p.\u0275inj=h.cJS({imports:[d.m,u.e]}),p})()}}]);