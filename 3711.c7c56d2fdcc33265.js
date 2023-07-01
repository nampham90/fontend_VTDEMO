"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[3711],{85216:(C,f,s)=>{s.d(f,{m:()=>d});var r=s(94650);let d=(()=>{class t{constructor(){this.formRules={nonEmpty:"^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$",usernameMin:6,passwordMin:6,passwordPattern:"^[a-zA-Z0-9]{6,20}$"},this.formErrors={name:"",email:"",password:"",confirmPassword:"",accept:!1},this.errorMessages={name:{required:"Name kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng",minLength:`Name t\u1ed1i thi\u1ec3u ${this.formRules.usernameMin} k\xfd t\u1ef1`,pattern:"Must contain letters and/or numbers, no trailing spaces",namedb:"T\xean T\xe0i Kho\u1ea3n \u0111\xe3 t\u1ed3n t\u1ea1i."},text:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng."},email:{required:"Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng.",email:"\u0110\u1ecba ch\u1ec9 Email kh\xf4ng \u0111\xfang.",emaildb:"Email \u0111\xe3 t\u1ed3n t\u1ea1i."},password:{required:"Password kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng",pattern:"Password l\xe0 k\xfd t\u1ef1 \u0111\u1eb7c bi\u1ec7t, s\u1ed1, ch\u1eef hoa v\xe0 ch\u1eef th\u01b0\u1eddng",minLength:`Password t\u1ed1i thi\u1ec3u ${this.formRules.passwordMin} k\xfd t\u1ef1`},confirmPassword:{required:"Password confirmation is required",passwordMismatch:"Passwords must match"},accept:{requiredTrue:"You have to accept our Terms and Conditions"}}}}return t.\u0275fac=function(u){return new(u||t)},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},50308:(C,f,s)=>{s.d(f,{v:()=>g});var r=s(44556),d=s(94650),t=s(54246);let g=(()=>{class u{constructor(o){this.http=o}requestInit(o){return this.http.post(r.CommonAnt100RequestInt,o,{needSuccessInfo:!1})}listtaichinh(o){return this.http.post(r.CommonAnt100Listtaichinh,o,{needSuccessInfo:!1})}thongketaichinhnam(o){return this.http.post(r.CommonAnt100Thongketaichinhnam,o,{needSuccessInfo:!1})}tongchuyenhangtrongnam(o){return this.http.post(r.CommonAnt100Tongchuyenhangtrongnam,o,{needSuccessInfo:!1})}tongnoAll(o){return this.http.post(r.CommonAnt100Tongnoall,o,{needSuccessInfo:!1})}tongnoUser(o){return this.http.post(r.CommonAnt100Tongnouser,o,{needSuccessInfo:!1})}listtopdoanhthu(o){return this.http.post(r.CommonAnt100Listtopdoanhthu,o,{needSuccessInfo:!1})}listtopchiphi(o){return this.http.post(r.CommonAnt100Listtopchiphi,o,{needSuccessInfo:!1})}listtoptongcuoctungxe(o){return this.http.post(r.CommonAnt100Listtoptongcuoctungxe,o,{needSuccessInfo:!1})}Tinhtongnoxengoai(){return this.http.post(r.CommonAnt100Tongnoxengoai,{needSuccessInfo:!1})}getODS(){return this.http.post(r.CommonAnt100GetODS,{needSuccessInfo:!1})}getODT(){return this.http.post(r.CommonAnt100GetODT,{needSuccessInfo:!1})}getODC(){return this.http.post(r.CommonAnt100GetODC,{needSuccessInfo:!1})}getHDTTXN(){return this.http.post(r.CommonAnt100GetHDTTXN,{needSuccessInfo:!1})}getListSoID(o){return this.http.post(r.CommonAnt100GetListSoID,o,{needSuccessInfo:!1})}getListDichvuxecau(){return this.http.post(r.CommonAnt100GetListDichvuXeCau,{needSuccessInfo:!1})}getListDichvubocxep(){return this.http.post(r.CommonAnt100GetListDichvuBocXep,{needSuccessInfo:!1})}}return u.\u0275fac=function(o){return new(o||u)(d.LFG(t.q))},u.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},78898:(C,f,s)=>{s.d(f,{C:()=>g});var r=s(44556),d=s(94650),t=s(54246);let g=(()=>{class u{constructor(o){this.http=o}searchParams(o){return this.http.post(r.Spin00901Ant100Search,o,{needSuccessInfo:!1})}Detail(o){return this.http.post(r.Spin00901Ant100Detail,o,{needSuccessInfo:!1})}create(o){return this.http.post(r.Spin00901Ant100Add,o,{needSuccessInfo:!1})}update(o){return this.http.post(r.Spin00901Ant100Update,o,{needSuccessInfo:!1})}delete(o){return this.http.post(r.Spin00901Ant100Del,o,{needSuccessInfo:!1})}deleteAll(o){return this.http.post(r.Spin00901Ant100Alldel,o,{needSuccessInfo:!1})}}return u.\u0275fac=function(o){return new(o||u)(d.LFG(t.q))},u.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},67859:(C,f,s)=>{s.d(f,{S:()=>y});var r=s(94650),P=s(91565);let O=(()=>{class a{constructor(l){this.webService=l}mobileRule(l){return l?function _(a){return/^(0|\+?84|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(a)}(l)?null:{message:"Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ch\xednh x\xe1c"}:null}telPhoneRule(l){return l?function o(a){return/^(0\d{2,3}-?)?\d{7,8}$/.test(a)}(l)?null:{message:"Vui l\xf2ng nh\u1eadp zalo ch\xednh x\xe1c"}:null}emailRule(l){return l?function z(a){return/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(a)}(l)?null:{message:"Vui l\xf2ng nh\u1eadp emali ch\xednh x\xe1c"}:null}passwordRule(l){return l?function M(a){return/^[^\s]{6,20}$/.test(a)&&!/^\d+$/.test(a)}(l)?null:{message:"M\u1eadt kh\u1ea9u bao g\u1ed3m 6 \u0111\u1ebfn 20 ch\u1eef c\xe1i vi\u1ebft hoa v\xe0 vi\u1ebft th\u01b0\u1eddng, s\u1ed1 ho\u1eb7c c\xe1c k\xfd t\u1ef1 kh\xe1c"}:null}}return a.\u0275fac=function(l){return new(l||a)(r.LFG(P.Q))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),y=(()=>{class a{constructor(l){this.vrService=l}emailValidator(){return this.commonUtil(this.vrService.emailRule)}mobileValidator(){return this.commonUtil(this.vrService.telPhoneRule)}passwordValidator(){return this.commonUtil(this.vrService.passwordRule)}zaloValidator(){return this.commonUtil(this.vrService.telPhoneRule)}commonUtil(l){return x=>l(x.value)}}return a.\u0275fac=function(l){return new(l||a)(r.LFG(O))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},42172:(C,f,s)=>{s.d(f,{b:()=>t});var r=s(5316),d=s(94650);let t=(()=>{class g{}return g.\u0275fac=function(_){return new(_||g)},g.\u0275mod=d.oAB({type:g}),g.\u0275inj=d.cJS({imports:[r.m]}),g})()},72333:(C,f,s)=>{s.d(f,{J:()=>ot});var r=s(44556),d=s(28746),t=s(94650),g=s(24006),u=s(67859),_=s(91565),o=s(85216),z=s(49651),M=s(50007),Y=s(50308),P=s(36895),O=s(5529),y=s(94178),a=s(66616),T=s(47044),l=s(39597);const x=["operationTpl"],k=["tenkhachhangTpl"],F=["availableFlag"],Z=["tiencuocTpl"],V=["htttTpl"];function W(i,h){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"a",9),t.NdJ("click",function(){t.CHM(n);const e=t.oxw(),m=e.soID,S=e.iduser,v=e.tiencuoc,p=e.tenhang,b=e.soluong,I=e.trongluong,D=e.khoiluong,w=e.donvitinh,A=e.diadiembochang,L=e.hinhthucthanhtoan,E=e.tennguoinhan,R=e.sdtnguoinhan,N=e.diachinguoinhan,U=e.ghichu,G=t.oxw();return t.KtG(G.getItem(m,S,v,p,b,I,D,w,A,L,E,R,N,U))}),t._uU(2),t.qZA(),t.BQk()}if(2&i){const n=t.oxw().soID;t.xp6(1),t.Q6J("disabled",!0),t.xp6(1),t.Oqu(n)}}function H(i,h){if(1&i){const n=t.EpF();t.TgZ(0,"a",10),t.NdJ("click",function(){t.CHM(n);const e=t.oxw(),m=e.soID,S=e.iduser,v=e.tiencuoc,p=e.tenhang,b=e.soluong,I=e.trongluong,D=e.khoiluong,w=e.donvitinh,A=e.diadiembochang,L=e.hinhthucthanhtoan,E=e.tennguoinhan,R=e.sdtnguoinhan,N=e.diachinguoinhan,U=e.ghichu,G=t.oxw();return t.KtG(G.getItem(m,S,v,p,b,I,D,w,A,L,E,R,N,U))}),t._uU(1),t.qZA()}if(2&i){const n=t.oxw().soID;t.xp6(1),t.Oqu(n)}}function K(i,h){if(1&i&&(t.YNc(0,W,3,2,"ng-container",7),t.YNc(1,H,2,1,"ng-template",null,8,t.W1O)),2&i){const n=h.disable,c=t.MAs(2);t.Q6J("ngIf",n&&1==n)("ngIfElse",c)}}function B(i,h){1&i&&t._UZ(0,"nz-alert",11),2&i&&t.s9C("nzMessage",h.iduser.name)}function J(i,h){1&i&&(t.ynx(0),t._UZ(1,"nz-alert",13),t.BQk())}function $(i,h){1&i&&(t.ynx(0),t._UZ(1,"nz-alert",15),t.BQk())}function Q(i,h){1&i&&t._UZ(0,"nz-alert",16)}function j(i,h){if(1&i&&(t.YNc(0,$,2,0,"ng-container",7),t.YNc(1,Q,1,0,"ng-template",null,14,t.W1O)),2&i){const n=t.MAs(2),c=t.oxw().status01;t.Q6J("ngIf",0==c)("ngIfElse",n)}}function X(i,h){if(1&i&&(t.YNc(0,J,2,0,"ng-container",7),t.YNc(1,j,3,2,"ng-template",null,12,t.W1O)),2&i){const n=h.status02,c=t.MAs(2);t.Q6J("ngIf",0==n)("ngIfElse",c)}}function q(i,h){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&i){const n=h.tiencuoc;t.xp6(1),t.Oqu(t.Dn7(2,1,1e3*n,"VND",""))}}function tt(i,h){if(1&i&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&i){const n=h.hinhthucthanhtoan,c=t.oxw();t.xp6(1),t.Oqu(c.mergeHttt(n))}}let nt=(()=>{class i{constructor(n,c,e,m,S,v,p,b){this.fb=n,this.validatorsService=c,this.webService=e,this.vf=m,this.message=S,this.cdr=v,this.modalRef=p,this.commonService=b,this.dataList=[],this.dataResponse={},this.messageErrors=[],this.searchParam={},this.constHttt=r.Hinhthucthanhtoan}ngOnInit(){let n=this.obj(this.params);n.idchuyen&&"NULL"==n.idchuyen&&(this.searchParam.idchuyen=null),n.status02&&"KHONG"==n.status02&&(this.searchParam.status02=0),this.initTable(),n.listsoId&&n.listsoId.length>0&&(this.lstsoID=n.listsoId)}mergeHttt(n){let c=n+"",e="";for(let m of this.constHttt)m.value===c&&(e=m.lable);return e}obj(n){let c=JSON.stringify(n);return JSON.parse(c)}getItem(n,c,e,m,S,v,p,b,I,D,w,A,L,E){this.dataResponse={soID:n,iduser:c,tiencuoc:e,tenhang:m,soluong:S,trongluong:v,khoiluong:p,donvitinh:b,diadiembochang:I,hinhthucthanhtoan:D,tennguoinhan:w,sdtnguoinhan:A,diachinguoinhan:L,ghichu:E},this.modalRef.destroy({status:1,modalValue:this.dataResponse})}getDataList(n){this.tableConfig.loading=!0,this.commonService.getListSoID({pageSize:this.tableConfig.pageSize,pageNum:n?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,d.x)(()=>{this.tableLoading(!1)})).subscribe(e=>{const{list:m,total:S,pageNum:v}=e;if(this.dataList=[...m],this.lstsoID.length>0)for(let p=0;p<this.dataList.length;p++)this.dataList[p].disable=!!this.lstsoID.includes(this.dataList[p].soID);console.log(this.dataList),this.tableConfig.total=S,this.tableConfig.pageIndex=v,this.tableLoading(!1)})}tableChangeDectction(){this.dataList=[...this.dataList],this.cdr.detectChanges()}tableLoading(n){this.tableConfig.loading=n,this.tableChangeDectction()}changePageSize(n){this.tableConfig.pageSize=n}resetForm(){this.searchParam={},this.getDataList()}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"S\u1ed1 ID",field:"soID",width:200,tdTemplate:this.operationTpl},{title:"Tr\u1ea1ng th\xe1i",width:150,field:"trangthai",tdTemplate:this.availableFlag},{title:"Ng\u01b0\u1eddi g\u1eedi",width:200,field:"name",tdTemplate:this.tenkhachhangTpl},{title:"Ti\u1ec1n c\u01b0\u1edbc",width:180,field:"tiencuoc",tdTemplate:this.tiencuocTpl},{title:"Ng\xe0y nh\u1eadp",width:120,field:"ngaynhap"},{title:"Kho",width:150,field:"makho"},{title:"\u0110\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng",width:150,field:"diadiembochang"},{title:"T\xean h\xe0ng",width:150,field:"tenhang"},{title:"S\u1ed1 l\u01b0\u1ee3ng",width:80,field:"soluong"},{title:"Tr\u1ecdng l\u01b0\u1ee3ng",width:80,field:"trongluong"},{title:"Kh\u1ed1i l\u01b0\u1ee3ng",width:80,field:"khoiluong"},{title:"\u0110\u01a1n v\u1ecb t\xednh",width:150,field:"donvitinh"},{title:"Hinh th\u1ee9c thanh to\xe1n",width:150,field:"hinhthucthanhtoan",tdTemplate:this.htttTpl},{title:"T\xean ng\u01b0\u1eddi nh\u1eadn",width:150,field:"tennguoinhan"},{title:"S\u0110T ng\u01b0\u1eddi nh\u1eadn",width:150,field:"sdtnguoinhan"},{title:"\u0110\u1ecba ch\u1ec9 ng\u01b0\u1eddi nh\u1eadn",width:150,field:"diachinguoinhan"},{title:"Ghi ch\xfa",width:150,field:"ghichu"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(g.qu),t.Y36(u.S),t.Y36(_.Q),t.Y36(o.m),t.Y36(z.dD),t.Y36(t.sBO),t.Y36(M.Lf),t.Y36(Y.v))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-subcommonsoid"]],viewQuery:function(n,c){if(1&n&&(t.Gf(x,7),t.Gf(k,7),t.Gf(F,7),t.Gf(Z,7),t.Gf(V,7)),2&n){let e;t.iGM(e=t.CRH())&&(c.operationTpl=e.first),t.iGM(e=t.CRH())&&(c.tenkhachhangTpl=e.first),t.iGM(e=t.CRH())&&(c.availableFlag=e.first),t.iGM(e=t.CRH())&&(c.tiencuocTpl=e.first),t.iGM(e=t.CRH())&&(c.htttTpl=e.first)}},decls:12,vars:3,consts:[[3,"tableTitle","reload"],[3,"tableConfig","tableData","changePageSize","changePageNum"],["operationTpl",""],["tenkhachhangTpl",""],["availableFlag",""],["tiencuocTpl",""],["htttTpl",""],[4,"ngIf","ngIfElse"],["notdisableLink",""],["nz-button","","nzType","link",3,"disabled","click"],["nz-button","","nzType","link",3,"click"],["nzType","success",3,"nzMessage"],["statusTpl",""],["nzType","info","nzMessage","Trong kho"],["vtTpl",""],["nzType","warning","nzMessage","Ch\u1edd b\u1ed1c h\xe0ng"],["nzType","success","nzMessage","V\u1eadn chuy\u1ec3n"]],template:function(n,c){1&n&&(t.TgZ(0,"app-card-table-wrap",0),t.NdJ("reload",function(){return c.reloadTable()}),t.TgZ(1,"app-ant-table",1),t.NdJ("changePageSize",function(m){return c.changePageSize(m)})("changePageNum",function(m){return c.getDataList(m)}),t.qZA(),t.YNc(2,K,3,2,"ng-template",null,2,t.W1O),t.YNc(4,B,1,1,"ng-template",null,3,t.W1O),t.YNc(6,X,3,2,"ng-template",null,4,t.W1O),t.YNc(8,q,3,5,"ng-template",null,5,t.W1O),t.YNc(10,tt,2,1,"ng-template",null,6,t.W1O),t.qZA()),2&n&&(t.Q6J("tableTitle","Danh S\xe1ch S\u1ed1 ID"),t.xp6(1),t.Q6J("tableConfig",c.tableConfig)("tableData",c.dataList))},dependencies:[P.O5,O.q,y.p,a.ix,T.w,l.r,P.H9]}),i})();var et=s(69174);let ot=(()=>{class i{constructor(n){this.modalWrapService=n}getContentComponent(){return nt}show(n={},c){return this.modalWrapService.show(this.getContentComponent(),n,c)}}return i.\u0275fac=function(n){return new(n||i)(t.LFG(et.U))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);