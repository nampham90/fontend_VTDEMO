"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[2450],{2450:(pt,O,l)=>{l.r(O),l.d(O,{Spch00101Module:()=>ht});var w=l(6806),R=l(2195),K=l(3951),Y=l(8877),f=l(4556),B=l(257),g=l(8746),P=l(2155),n=l(4650),y=l(1565),_=l(6895),v=l(8313),z=l(9646),h=l(4006),I=l(7859),U=l(5216),q=l(8986),C=l(7),X=l(5529),D=l(4178),Z=l(6616),A=l(7044);const V=["operationTpl"],W=["state"];function j(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"a",3),n.NdJ("click",function(){const a=n.CHM(t),o=a.id,r=a.biensoxe,c=a.tenxegoinho,p=a.trongtai,u=a.trangthai,m=n.oxw();return n.KtG(m.getItem(o,r,c,p,u))}),n._uU(1),n.qZA()}if(2&i){const t=s.biensoxe;n.xp6(1),n.Oqu(t)}}let $=(()=>{class i{constructor(t,e,a,o,r,c,p,u){this.fb=t,this.validatorsService=e,this.webService=a,this.vf=o,this.message=r,this.cdr=c,this.dataService=p,this.modalRef=u,this.roleOptions=[],this.isEdit=!1,this.dataList=[],this.biensoxe="hahah",this.dataResponse={id:"",tenxegoinho:"",biensoxe:"",trongtai:"",trangthai:!1},this.isReadonly=!1,this.messageErrors=[],this.searchParam={}}getAsyncFnData(t){return(0,z.of)(t)}getCurrentValue(){return(0,z.of)(this.dataResponse)}ngOnInit(){this.initTable()}tableChangeDectction(){this.dataList=[...this.dataList],this.cdr.detectChanges()}tableLoading(t){this.tableConfig.loading=t,this.tableChangeDectction()}changePageSize(t){this.tableConfig.pageSize=t}resetForm(){this.searchParam={},this.getDataList()}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}getDataList(t){this.tableConfig.loading=!0,this.dataService.getXes({pageSize:this.tableConfig.pageSize,pageNum:t?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,g.x)(()=>{this.tableLoading(!1)})).subscribe(a=>{const{list:o,total:r,pageNum:c}=a;this.dataList=[...o],this.tableConfig.total=r,this.tableConfig.pageIndex=c,this.tableLoading(!1)})}getItem(t,e,a,o,r){this.dataResponse={id:t,biensoxe:e,tenxegoinho:a,trongtai:o,trangthai:r},this.modalRef.destroy({status:1,modalValue:this.dataResponse})}initTable(){this.tableConfig={headers:[{title:"Bi\u1ec3n s\u1ed1",field:"biensoxe",width:180,tdTemplate:this.operationTpl},{title:"T\xean g\u1ee3i nh\u1edb",field:"tenxegoinho",width:200},{title:"Tr\u1ecdng t\u1ea3i",field:"trongtai",width:100}],total:0,showCheckbox:!1,loading:!1,pageSize:10,pageIndex:1}}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(h.qu),n.Y36(I.S),n.Y36(y.Q),n.Y36(U.m),n.Y36(v.dD),n.Y36(n.sBO),n.Y36(q.p),n.Y36(C.Lf))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-subwindowxe"]],viewQuery:function(t,e){if(1&t&&(n.Gf(V,7),n.Gf(W,7)),2&t){let a;n.iGM(a=n.CRH())&&(e.operationTpl=a.first),n.iGM(a=n.CRH())&&(e.state=a.first)}},decls:4,vars:3,consts:[[3,"tableTitle","reload"],[3,"tableConfig","tableData","changePageSize","changePageNum"],["operationTpl",""],["nz-button","","nzType","link",3,"click"]],template:function(t,e){1&t&&(n.TgZ(0,"app-card-table-wrap",0),n.NdJ("reload",function(){return e.reloadTable()}),n.TgZ(1,"app-ant-table",1),n.NdJ("changePageSize",function(o){return e.changePageSize(o)})("changePageNum",function(o){return e.getDataList(o)}),n.qZA(),n.YNc(2,j,2,1,"ng-template",null,2,n.W1O),n.qZA()),2&t&&(n.Q6J("tableTitle","Danh s\xe1ch Xe T\u1ea3i"),n.xp6(1),n.Q6J("tableConfig",e.tableConfig)("tableData",e.dataList))},dependencies:[X.q,D.p,Z.ix,A.w],changeDetection:0}),i})();var E=l(9174);let nn=(()=>{class i{constructor(t){this.modalWrapService=t}getContentComponent(){return $}show(t={},e){return this.modalWrapService.show(this.getContentComponent(),t,e)}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(E.U))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var H=l(9454);const tn=["operationTpl"],en=["availableFlag"];function an(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"a",3),n.NdJ("click",function(){const a=n.CHM(t),o=a.id,r=a.name,c=n.oxw();return n.KtG(c.getItem(o,r))}),n._uU(1),n.qZA()}if(2&i){const t=s.name;n.xp6(1),n.Oqu(t)}}let on=(()=>{class i{constructor(t,e,a,o,r,c,p,u){this.fb=t,this.validatorsService=e,this.webService=a,this.vf=o,this.message=r,this.cdr=c,this.modalRef=p,this.dataService=u,this.dataList=[],this.dataResponse={},this.messageErrors=[],this.searchParam={}}ngOnInit(){this.searchParam.phongban_id=f.idTaixe,this.initTable()}tableChangeDectction(){this.dataList=[...this.dataList],this.cdr.detectChanges()}tableLoading(t){this.tableConfig.loading=t,this.tableChangeDectction()}getDataList(t){this.tableConfig.loading=!0,this.dataService.getAccount({pageSize:this.tableConfig.pageSize,pageNum:t?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,g.x)(()=>{this.tableLoading(!1)})).subscribe(a=>{const{list:o,total:r,pageNum:c}=a;this.dataList=[...o],this.tableConfig.total=r,this.tableConfig.pageIndex=c,this.tableLoading(!1)})}changePageSize(t){this.tableConfig.pageSize=t}resetForm(){this.searchParam={},this.getDataList()}reloadTable(){this.message.info("L\xe0m m\u1edbi th\xe0nh c\xf4ng"),this.getDataList()}getItem(t,e){this.dataResponse={id:t,name:e},this.modalRef.destroy({status:1,modalValue:this.dataResponse})}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"T\xean t\xe0i x\u1ebf",field:"name",width:120,tdTemplate:this.operationTpl},{title:"Tr\u1ea1ng th\xe1i",width:150,field:"available"},{title:"Gi\u1edbi T\xednh",width:120,field:"sex",pipe:"sex"},{title:"\u0110i\u1ec7n Tho\u1ea1i",width:150,field:"dienthoai"},{title:"Email",width:200,field:"email"},{title:"\u0110\u0103ng nh\u1eadp l\u1ea7n cu\u1ed1i",width:200,field:"lastLoginTime",pipe:"date:yyyy-MM-dd HH:mm"},{title:"Ng\xe0y kh\u1edfi t\u1ea1o",width:150,field:"createdAt",pipe:"date:yyyy-MM-dd HH:mm"},{title:"Zalo",width:150,field:"zalo"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(h.qu),n.Y36(I.S),n.Y36(y.Q),n.Y36(U.m),n.Y36(v.dD),n.Y36(n.sBO),n.Y36(C.Lf),n.Y36(H.B))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-subwindowtaixe"]],viewQuery:function(t,e){if(1&t&&(n.Gf(tn,7),n.Gf(en,7)),2&t){let a;n.iGM(a=n.CRH())&&(e.operationTpl=a.first),n.iGM(a=n.CRH())&&(e.availableFlag=a.first)}},decls:4,vars:3,consts:[[3,"tableTitle","reload"],[3,"tableConfig","tableData","changePageSize","changePageNum"],["operationTpl",""],["nz-button","","nzType","link",3,"click"]],template:function(t,e){1&t&&(n.TgZ(0,"app-card-table-wrap",0),n.NdJ("reload",function(){return e.reloadTable()}),n.TgZ(1,"app-ant-table",1),n.NdJ("changePageSize",function(o){return e.changePageSize(o)})("changePageNum",function(o){return e.getDataList(o)}),n.qZA(),n.YNc(2,an,2,1,"ng-template",null,2,n.W1O),n.qZA()),2&t&&(n.Q6J("tableTitle","K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm"),n.xp6(1),n.Q6J("tableConfig",e.tableConfig)("tableData",e.dataList))},dependencies:[X.q,D.p,Z.ix,A.w]}),i})(),sn=(()=>{class i{constructor(t){this.modalWrapService=t}getContentComponent(){return on}show(t={},e){return this.modalWrapService.show(this.getContentComponent(),t,e)}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(E.U))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var ln=l(9523),S=l(3679),d=l(6704),F=l(5635),T=l(8231),G=l(834),rn=l(7096);const cn=["endSoplnDate"];function hn(i,s){if(1&i&&n._UZ(0,"nz-option",23),2&i){const t=s.$implicit;n.Q6J("nzValue",t.id)("nzLabel",t.biensoxe)}}function pn(i,s){if(1&i&&n._UZ(0,"nz-option",23),2&i){const t=s.$implicit;n.Q6J("nzValue",t.id)("nzLabel",t.name)}}function un(i,s){if(1&i&&n._UZ(0,"nz-option",23),2&i){const t=s.$implicit;n.Q6J("nzValue",t.id)("nzLabel",t.name)}}let dn=(()=>{class i{constructor(t,e,a,o,r){this.modalRef=t,this.fb=e,this.dataService=a,this.dataTaixeService=o,this.cdf=r,this.const=f,this.listXetai=[],this.listTaixe=[],this.disabledStartSoplnDate=c=>{if(!c||!this.addEditForm.value.ngayve)return!1;const p=new Date(this.addEditForm.value.ngayve);return c.getTime()>p.getTime()},this.disabledEndSoplnDate=c=>{if(!c||!this.addEditForm.value.ngaydi)return!1;const p=new Date(this.addEditForm.value.ngaydi);return c.getTime()<=p.getTime()},this.params={}}handleStartOpenSoplnChange(t){t||this.endSoplnDate.open()}handleEndOpenSoplnChange(t){}getAsyncFnData(t){return(0,z.of)(t)}getCurrentValue(){return(0,ln.r7)(this.addEditForm)?(0,z.of)(this.addEditForm.value):(0,z.of)(!1)}ngOnInit(){this.getlistXetaifree(),this.getListTaixe(),this.initForm(),Object.keys(this.params).length>0&&(this.addEditForm.patchValue(this.params),console.log(this.params))}initForm(){this.addEditForm=this.fb.group({ngaydi:[null,[h.kI.required]],ngayve:[null],biensoxe:[null,[h.kI.required]],tienxe:[0,[h.kI.required]],idtai:[null,[h.kI.required]],idphu:[null,[h.kI.required]],changduong:[null,[h.kI.required]]})}getlistXetaifree(){this.dataService.getlistXefree().pipe((0,g.x)(()=>{})).subscribe(t=>{this.listXetai=t,this.cdf.markForCheck()})}getListTaixe(){this.dataTaixeService.getAccount({pageSize:0,pageNum:0,filters:{phongban_id:this.const.idTaixe}}).pipe((0,g.x)(()=>{})).subscribe(e=>{this.listTaixe=e,this.cdf.markForCheck()})}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(C.Lf),n.Y36(h.qu),n.Y36(q.p),n.Y36(H.B),n.Y36(n.sBO))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-subwindowchuyen"]],viewQuery:function(t,e){if(1&t&&n.Gf(cn,5),2&t){let a;n.iGM(a=n.CRH())&&(e.endSoplnDate=a.first)}},decls:40,vars:41,consts:[["nz-form","",3,"formGroup"],["nzRequired","","nzFor","ngaydi",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ng\xe0y kh\u1edfi h\xe0nh",3,"nzSm","nzXs"],["name","ngaydi","id","ngaydi","formControlName","ngaydi",3,"nzDisabledDate","nzFormat","nzPlaceHolder","nzOnOpenChange"],["nzFor","ngayve",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ng\xe0y v\u1ec1",3,"nzSm","nzXs"],["name","ngayve","id","ngayve","formControlName","ngayve",3,"nzDisabledDate","nzFormat","nzPlaceHolder","nzOnOpenChange"],["endSoplnDate",""],["nzRequired","","nzFor","biensoxe",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp bi\u1ec3n s\u1ed1 xe",3,"nzSm","nzXs"],["name","biensoxe","id","biensoxe","formControlName","biensoxe","nzAllowSearch","","nzShowSearch","","nzPlaceHolder","Select"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzRequired","","nzFor","trongtai",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp ti\u1ec1n \u0111\u01b0a tr\u01b0\u1edbc",3,"nzSm","nzXs"],["name","tienxe","id","tienxe","formControlName","tienxe",3,"nzMin","nzMax","nzStep"],["nzRequired","","nzFor","idtai",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn T\xe0i ch\xednh",3,"nzSm","nzXs"],["name","idtai","id","idtai","formControlName","idtai","nzAllowSearch","","nzShowSearch","","nzPlaceHolder","Select"],["nzRequired","","nzFor","idphu",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng ch\u1ecdn T\xe0i ph\u1ee5",3,"nzSm","nzXs"],["name","idphu","id","idphu","formControlName","idphu","nzAllowSearch","","nzShowSearch","","nzPlaceHolder","Select"],["nzErrorTip","Vui l\xf2ng nh\u1eadp \u0110i\u1ec3m \u0111i - \u0111i\u1ec3m \u0111\u1ebfn",3,"nzSm","nzXs"],["nz-input","","formControlName","changduong","name","changduong","placeholder","Vui l\xf2ng nh\u1eadp \u0111i\u1ec3m \u0111i - \u0111i\u1ec3m \u0111\u1ebfn","id","changduong"],[3,"nzValue","nzLabel"]],template:function(t,e){1&t&&(n.TgZ(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),n._uU(3,"Ng\xe0y kh\u1edfi h\xe0nh"),n.qZA(),n.TgZ(4,"nz-form-control",2)(5,"nz-date-picker",3),n.NdJ("nzOnOpenChange",function(o){return e.handleStartOpenSoplnChange(o)}),n.qZA()()(),n.TgZ(6,"nz-form-item")(7,"nz-form-label",4),n._uU(8,"Ng\xe0y v\u1ec1"),n.qZA(),n.TgZ(9,"nz-form-control",5)(10,"nz-date-picker",6,7),n.NdJ("nzOnOpenChange",function(o){return e.handleEndOpenSoplnChange(o)}),n.qZA()()(),n.TgZ(12,"nz-form-item")(13,"nz-form-label",8),n._uU(14,"Bi\u1ec3n s\u1ed1 xe"),n.qZA(),n.TgZ(15,"nz-form-control",9)(16,"nz-select",10),n.YNc(17,hn,1,2,"nz-option",11),n.qZA()()(),n.TgZ(18,"nz-form-item")(19,"nz-form-label",12),n._uU(20,"Ti\u1ec1n \u0111\u01b0a tr\u01b0\u1edbc"),n.qZA(),n.TgZ(21,"nz-form-control",13),n._UZ(22,"nz-input-number",14),n.qZA()(),n.TgZ(23,"nz-form-item")(24,"nz-form-label",15),n._uU(25,"T\xe0i ch\xednh"),n.qZA(),n.TgZ(26,"nz-form-control",16)(27,"nz-select",17),n.YNc(28,pn,1,2,"nz-option",11),n.qZA()()(),n.TgZ(29,"nz-form-item")(30,"nz-form-label",18),n._uU(31,"T\xe0i ph\u1ee5"),n.qZA(),n.TgZ(32,"nz-form-control",19)(33,"nz-select",20),n.YNc(34,un,1,2,"nz-option",11),n.qZA()()(),n.TgZ(35,"nz-form-item")(36,"nz-form-label",12),n._uU(37,"\u0110i\u1ec3m \u0111i - \u0111i\u1ec3m \u0111\u1ebfn"),n.qZA(),n.TgZ(38,"nz-form-control",21),n._UZ(39,"input",22),n.qZA()()()),2&t&&(n.Q6J("formGroup",e.addEditForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzDisabledDate",e.disabledStartSoplnDate)("nzFormat",e.const.dateFormat)("nzPlaceHolder",e.const.dateFormat),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzDisabledDate",e.disabledEndSoplnDate)("nzFormat",e.const.dateFormat)("nzPlaceHolder",e.const.dateFormat),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",e.listXetai),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(1),n.Q6J("nzMin",100)("nzMax",5e4)("nzStep",100),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",e.listTaixe),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",e.listTaixe),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",18)("nzXs",24))},dependencies:[_.sg,h._Y,h.Fj,h.JJ,h.JL,h.sg,h.u,S.t3,S.SK,d.Lr,d.Nx,d.iK,d.Fd,F.Zp,T.Ip,T.Vq,G.uw,rn._V],changeDetection:0}),i})(),mn=(()=>{class i{constructor(t){this.modalWrapService=t}getContentComponent(){return dn}show(t={},e){return this.modalWrapService.show(this.getContentComponent(),t,e)}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(E.U))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var gn=l(2704),fn=l(2996),_n=l(9386),zn=l(2802),bn=l(5656),Cn=l(1102),Sn=l(1811),Tn=l(4607);const xn=["Tlbiensoxe"],wn=["Tltentai"],yn=["Tltenphu"],vn=["operationTpl"],Xn=["tienduatruocTpl"],Dn=["endSoplnDate"];function Zn(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"button",36),n.NdJ("click",function(){n.CHM(t);const a=n.oxw();return n.KtG(a.searchTaixeClick())}),n._UZ(1,"span",14),n.qZA()}2&i&&n.Q6J("nzType","primary")}function An(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"button",36),n.NdJ("click",function(){n.CHM(t);const a=n.oxw();return n.KtG(a.searchPhuxeClick())}),n._UZ(1,"span",14),n.qZA()}2&i&&n.Q6J("nzType","primary")}function En(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"button",36),n.NdJ("click",function(){n.CHM(t);const a=n.oxw();return n.KtG(a.searchBiensoxeClick())}),n._UZ(1,"span",14),n.qZA()}2&i&&n.Q6J("nzType","primary")}function Fn(i,s){if(1&i&&n._UZ(0,"nz-option",37),2&i){const t=s.$implicit;n.s9C("nzLabel",t.lable),n.s9C("nzValue",t.value)}}function Jn(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"button",42),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2).id,o=n.oxw();return n.KtG(o.edit(a))}),n._uU(1,"C\u1eadp nh\u1eadt"),n.qZA()}}function Mn(i,s){if(1&i&&(n.TgZ(0,"span",40),n.YNc(1,Jn,2,0,"button",41),n.qZA()),2&i){const t=n.oxw().showBtn;n.xp6(1),n.Q6J("ngIf",t.btnUpdate)}}function Ln(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"button",42),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2).id,o=n.oxw();return n.KtG(o.del(a))}),n._uU(1,"X\xf3a"),n.qZA()}}function Qn(i,s){if(1&i&&(n.TgZ(0,"span",40),n.YNc(1,Ln,2,0,"button",41),n.qZA()),2&i){const t=n.oxw().showBtn;n.xp6(1),n.Q6J("ngIf",t.btnDelete)}}function Nn(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"button",42),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2).id,o=n.oxw();return n.KtG(o.confirmbochang(a))}),n._uU(1,"Ho\xe0n th\xe0nh b\xf3c h\xe0ng"),n.qZA()}}function kn(i,s){if(1&i&&(n.TgZ(0,"span",40),n.YNc(1,Nn,2,0,"button",41),n.qZA()),2&i){const t=n.oxw().showBtn;n.xp6(1),n.Q6J("ngIf",t.btnConfirmbochang)}}function On(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"button",42),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2).id,o=n.oxw();return n.KtG(o.confirmtrahang(a))}),n._uU(1,"Ho\xe0n th\xe0nh tr\u1ea3 h\xe0ng"),n.qZA()}}function Yn(i,s){if(1&i&&(n.TgZ(0,"span",40),n.YNc(1,On,2,0,"button",41),n.qZA()),2&i){const t=n.oxw().showBtn;n.xp6(1),n.Q6J("ngIf",t.btnConfirmtrahang)}}function Bn(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"button",42),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2).id,o=n.oxw();return n.KtG(o.confirmchiphi(a))}),n._uU(1,"T\xednh chi ph\xed"),n.qZA()}}function Pn(i,s){if(1&i&&(n.TgZ(0,"span",40),n.YNc(1,Bn,2,0,"button",41),n.qZA()),2&i){const t=n.oxw().showBtn;n.xp6(1),n.Q6J("ngIf",t.btnConfirmchiphi)}}function In(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"button",42),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2).id,o=n.oxw();return n.KtG(o.confirmend(a))}),n._uU(1,"K\u1ebft th\xfac chuy\u1ebfn h\xe0ng"),n.qZA()}}function Un(i,s){if(1&i&&(n.TgZ(0,"span",40),n.YNc(1,In,2,0,"button",41),n.qZA()),2&i){const t=n.oxw().showBtn;n.xp6(1),n.Q6J("ngIf",t.btnConfirmend)}}function qn(i,s){if(1&i&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&i){const t=n.oxw(),e=t.tongcuoc,a=t.tongchiphi;n.xp6(1),n.AsE(" TC: ",e," | CP: ",a," ")}}function Hn(i,s){if(1&i&&(n.YNc(0,Mn,2,1,"span",38),n.YNc(1,Qn,2,1,"span",38),n.YNc(2,kn,2,1,"span",38),n.YNc(3,Yn,2,1,"span",38),n.YNc(4,Pn,2,1,"span",38),n.YNc(5,Un,2,1,"span",38),n.YNc(6,qn,2,2,"span",39)),2&i){const t=s.showBtn,e=n.oxw();n.Q6J("appAuth",e.ActionCode.ChuyenEdit),n.xp6(1),n.Q6J("appAuth",e.ActionCode.ChuyenDel),n.xp6(1),n.Q6J("appAuth",e.ActionCode.ChuyenConfirmbochang),n.xp6(1),n.Q6J("appAuth",e.ActionCode.ChuyenConfirmtrahang),n.xp6(1),n.Q6J("appAuth",e.ActionCode.ChuyenConfirmchiphi),n.xp6(1),n.Q6J("appAuth",e.ActionCode.ChuyenConfirmend),n.xp6(1),n.Q6J("ngIf",t.labelShowInfo)}}function Gn(i,s){if(1&i&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&i){const t=s.idtai;n.xp6(1),n.Oqu(t.name)}}function Rn(i,s){if(1&i&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&i){const t=s.idphu;n.xp6(1),n.Oqu(t.name)}}function Kn(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"a",43),n.NdJ("click",function(){const a=n.CHM(t),o=a.id,r=a.changduong,c=a.idtai.name,p=a.idphu.name,u=a.biensoxe,m=a.tienxe,M=a.ngaydi,L=a.ngayve,Q=a.trangthai,N=n.oxw();return n.KtG(N.getItem(o,r,c,p,u.biensoxe,m,M,L,Q))}),n.TgZ(1,"span"),n._uU(2),n.qZA()()}if(2&i){const t=s.biensoxe;n.xp6(2),n.Oqu(t.biensoxe)}}function Vn(i,s){}function Wn(i,s){if(1&i&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"currency"),n.qZA()),2&i){const t=s.tienxe;n.xp6(1),n.Oqu(n.Dn7(2,1,1e3*t,"VND",""))}}function jn(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"button",46),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2);return n.KtG(a.add())}),n._UZ(1,"i",47),n._uU(2," Th\xeam m\u1edbi "),n.qZA()}}function $n(i,s){if(1&i){const t=n.EpF();n.TgZ(0,"button",48),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2);return n.KtG(a.allDel())}),n._UZ(1,"i",49),n._uU(2," X\xf3a t\u1ea5t c\u1ea3 "),n.qZA()}}function nt(i,s){if(1&i&&(n.YNc(0,jn,3,0,"button",44),n.YNc(1,$n,3,0,"button",45)),2&i){const t=n.oxw();n.Q6J("appAuth",t.ActionCode.ChuyenAdd),n.xp6(1),n.Q6J("appAuth",t.ActionCode.DataScDelAll)}}const tt=function(){return{"padding-bottom":0}},J=function(){return{xs:8,sm:16,md:24}};class et{constructor(){this.btnUpdate=!1,this.btnDelete=!1,this.btnConfirmbochang=!1,this.btnConfirmtrahang=!1,this.btnConfirmchiphi=!1,this.btnConfirmend=!1,this.labelShowInfo=!1,this.tongcuoc=0,this.tongchiphi=0}}const it=[{path:"",component:(()=>{class i extends K.H{constructor(t,e,a,o,r,c,p,u,m,M,L,Q,N){super(t,e,a,o),this.webService=t,this.router=e,this.cdf=a,this.datePipe=o,this.message=r,this.modalService=c,this.modalTaixeService=p,this.modalChuyenService=u,this.modalChiphiService=m,this.modalSrv=M,this.deptTreeService=L,this.dataService=Q,this.chuyenDtoService=N,this.DisplayScreenID=P.t.spch00101,this.searchParam={},this.dateFormat=f.dateFormat,this.dataList=[],this.checkedCashArray=[],this.ActionCode=R.h,this.availableOptions=[],this.pageHeaderInfo={title:"Qu\u1ea3n l\xfd chuy\u1ebfn",breadcrumb:["Home","Chuy\u1ebfn","Qu\u1ea3n l\xfd chuy\u1ebfn"],desc:""},this.tainm="",this.stocktai="",this.phunm="",this.stockphu="",this.biensoxenm="",this.stockbsx="",this.listStatus=f.listTrangthaichuyen,this.btnUpdate=!1,this.btnDelete=!1,this.btnConfirmbochang=!1,this.btnConfirmtrahang=!1,this.ngaybatdau=null,this.ngayketthuc=null,this.disabledStartSoplnDate=b=>{if(!b||!this.ngayketthuc)return!1;const k=new Date(this.ngayketthuc);return b.getTime()>k.getTime()},this.disabledEndSoplnDate=b=>{if(!b||!this.ngaybatdau)return!1;const k=new Date(this.ngaybatdau);return b.getTime()<=k.getTime()}}fnInit(){this.cdf.markForCheck()}destroy(){}handleStartOpenSoplnChange(t){t||this.endSoplnDate.open()}handleEndOpenSoplnChange(t){}ngOnInit(){this.initTable(),this.deptTreeService.initDate(),this.availableOptions=[...Y.b.transformMapToArray(Y.V.available,2)]}onChange(t){console.log(t)}getDataList(t){this.tableLoading(!0),this.searchParam.ngaybatdau=this.formatDate(this.ngaybatdau),this.searchParam.ngayketthuc=this.formatDate(this.ngayketthuc),this.dataService.getChuyens({pageSize:this.tableConfig.pageSize,pageNum:t?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,g.x)(()=>{this.tableLoading(!1)})).subscribe(a=>{console.log(a);const{list:o,total:r,pageNum:c}=a;this.dataList=[...o];for(let p of this.dataList){let u=this.showBtnChuyen(p.trangthai);p.showBtn=u}0==this.dataList.length&&this.modalSrv.info({nzContent:"Kh\xf4ng C\xf3 d\u1eef li\u1ec7u"}),this.tableConfig.total=r,this.tableConfig.pageIndex=c,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}showBtnChuyen(t){let e=new et;switch(t){case 0:e.btnUpdate=!0,e.btnDelete=!0,e.btnConfirmbochang=!1,e.btnConfirmtrahang=!1,e.btnConfirmchiphi=!1,e.btnConfirmend=!1,e.labelShowInfo=!1;break;case 1:e.btnUpdate=!0,e.btnDelete=!1,e.btnConfirmbochang=!0,e.btnConfirmtrahang=!1,e.btnConfirmchiphi=!1,e.btnConfirmend=!1,e.labelShowInfo=!1;break;case 2:e.btnUpdate=!1,e.btnDelete=!1,e.btnConfirmbochang=!1,e.btnConfirmtrahang=!0,e.btnConfirmchiphi=!1,e.btnConfirmend=!1,e.labelShowInfo=!1;break;case 3:e.btnUpdate=!1,e.btnDelete=!1,e.btnConfirmbochang=!1,e.btnConfirmtrahang=!1,e.btnConfirmchiphi=!0,e.btnConfirmend=!1,e.labelShowInfo=!1;break;case 4:e.btnUpdate=!1,e.btnDelete=!1,e.btnConfirmbochang=!1,e.btnConfirmtrahang=!1,e.btnConfirmchiphi=!1,e.btnConfirmend=!0,e.labelShowInfo=!1;break;case 5:e.btnUpdate=!1,e.btnDelete=!1,e.btnConfirmbochang=!1,e.btnConfirmtrahang=!1,e.btnConfirmchiphi=!1,e.btnConfirmend=!1,e.labelShowInfo=!0}return e}confirmbochang(t){this.dataService.updateTrangthai({id:t,trangthai:2}).pipe().subscribe(a=>{1==a?(this.message.success(" Th\u1ef1c hi\u1ec7n th\xe0nh c\xf4ng !"),this.getDataList()):this.message.success(" Kh\xf4ng th\xe0nh c\xf4ng !")})}confirmtrahang(t){this.dataService.updateTrangthai({id:t,trangthai:3}).pipe().subscribe(a=>{1==a?(this.message.success(" Th\u1ef1c hi\u1ec7n th\xe0nh c\xf4ng !"),this.getDataList()):this.message.success(" Kh\xf4ng th\xe0nh c\xf4ng !")})}confirmchiphi(t){this.modalChiphiService.show({nzTitle:"Danh s\xe1ch chi ph\xed"},{idchuyen:t}).subscribe(({modalValue:e,status:a})=>{if(0===a)return;let o={id:t,trangthai:4,lstchiphi:e.items};console.log(o),this.dataService.updateTrangthai(o).pipe().subscribe(r=>{1==r?(this.getDataList(),this.message.success(" Th\u1ef1c hi\u1ec7n th\xe0nh c\xf4ng !")):this.message.success(" Kh\xf4ng th\xe0nh c\xf4ng !")})})}confirmend(t){this.dataService.updateTrangthai({id:t,trangthai:5}).pipe().subscribe(a=>{1==a?(this.getDataList(),this.message.success(" Th\u1ef1c hi\u1ec7n th\xe0nh c\xf4ng !")):this.message.success(" Kh\xf4ng th\xe0nh c\xf4ng !")})}resetForm(){this.searchParam={},this.biensoxenm="",this.tainm="",this.phunm="",this.trangthaimode=""}fnFocusOutBiensoxe(){this.searchParam.biensoxe!=this.stockbsx&&(this.biensoxenm="")}searchBiensoxeClick(){this.modalService.show({nzTitle:"Danh S\xe1ch Xe"},{showcomfirm:!1}).subscribe(t=>{if(!t||0===t.status)return;const e={...t.modalValue};this.searchParam.biensoxe=e.biensoxe,this.stockbsx=e.biensoxe,this.biensoxenm=e.tenxegoinho})}searchTaixeClick(){this.modalTaixeService.show({nzTitle:"Danh S\xe1ch T\xe0i X\u1ebf"},{showcomfirm:!1}).subscribe(t=>{if(!t||0===t.status)return;const e={...t.modalValue};this.searchParam.idtai=e.id,this.stocktai=e.id,this.tainm=e.name})}fnFocusOutTaixe(){this.searchParam.idtai!=this.stocktai&&(this.tainm="")}searchPhuxeClick(){this.modalTaixeService.show({nzTitle:"Danh S\xe1ch T\xe0i X\u1ebf"},{showcomfirm:!1}).subscribe(t=>{if(!t||0===t.status)return;const e={...t.modalValue};this.searchParam.idphu=e.id,this.stockphu=e.id,this.phunm=e.name})}fnFocusOutPhuxe(){this.searchParam.idphu!=this.stockphu&&(this.phunm="")}edit(t){this.dataService.getChuyen(t).subscribe(e=>{e.biensoxe=e.biensoxe._id,e.idphu=e.idphu._id,e.idtai=e.idtai._id,this.modalChuyenService.show({nzTitle:"C\u1eadp nh\u1eadt"},e).subscribe(({modalValue:a,status:o})=>{0!==o&&(a.id=t,this.tableLoading(!0),this.addEditData(a,"updateChuyen"))})})}del(t){this.modalSrv.confirm({nzTitle:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a n\xf3 kh\xf4ng?",nzContent:"Kh\xf4ng th\u1ec3 ph\u1ee5c h\u1ed3i sau khi x\xf3a",nzOnOk:()=>{this.tableLoading(!0),this.dataService.deleteChuyen(t).subscribe(()=>{1===this.dataList.length&&this.tableConfig.pageIndex--,this.getDataList(),this.resetForm()},e=>this.tableLoading(!1))}})}add(){this.modalChuyenService.show({nzTitle:"Th\xeam m\u1edbi"}).subscribe(t=>{!t||0===t.status||(this.tableLoading(!0),this.addEditData(t.modalValue,"createChuyen"))},t=>this.tableLoading(!1))}allDel(){}getItem(t,e,a,o,r,c,p,u,m){this.chuyenDtoService.id=t,this.chuyenDtoService.biensoxe=r,this.chuyenDtoService.changduong=e,this.chuyenDtoService.idphu=o,this.chuyenDtoService.idtai=a,this.chuyenDtoService.ngaydi=this.formatDate(p),this.chuyenDtoService.ngayve=this.formatDate(u),this.chuyenDtoService.tienxe=c,this.chuyenDtoService.trangthai=m,this.dataService.refresh(f.rootbase+P.t.spch00201)}addEditData(t,e){this.dataService[e](t).pipe((0,g.x)(()=>{this.tableLoading(!1)})).subscribe(()=>{this.getDataList()})}reloadTable(){this.message.info("\u0110\xe3 \u0111\u01b0\u1ee3c l\xe0m m\u1edbi"),this.getDataList()}tableChangeDectction(){this.dataList=[...this.dataList],this.cdf.detectChanges()}tableLoading(t){this.tableConfig.loading=t,this.tableChangeDectction()}selectedChecked(t){this.checkedCashArray=[...t]}changePageSize(t){this.tableConfig.pageSize=t}initTable(){this.tableConfig={showCheckbox:!1,headers:[{title:"Ng\xe0y kh\u1edfi h\xe0nh",field:"ngaydi",width:180,pipe:"date: dd/MM/YYYY HH:mm"},{title:"Ng\xe0y v\u1ec1",width:180,field:"ngayve",pipe:"date: dd/MM/YYYY HH:mm"},{title:"T\xe0i Ch\xednh",width:120,field:"idtai",tdTemplate:this.Tltentai},{title:"T\xe0i Ph\u1ee5",width:150,field:"idphu",tdTemplate:this.Tltenphu},{title:"Bi\u1ec3n s\u1ed1 xe",width:200,field:"biensoxe",tdTemplate:this.Tlbiensoxe},{title:"Ti\u1ec1n \u0111\u01b0a tr\u01b0\u1edbc",width:200,field:"tienxe",tdTemplate:this.tienduatruocTpl},{title:"\u0110i\u1ec3m \u0111i - \u0111i\u1ec3m \u0111\u1ebfn",width:150,field:"changduong"},{title:"H\xe0nh \u0111\u1ed9ng",tdTemplate:this.operationTpl,width:300,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(y.Q),n.Y36(w.F0),n.Y36(n.sBO),n.Y36(_.uU),n.Y36(v.dD),n.Y36(nn),n.Y36(sn),n.Y36(mn),n.Y36(gn.Z),n.Y36(C.Sf),n.Y36(B.r),n.Y36(fn.p),n.Y36(_n.$))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-spch00101"]],viewQuery:function(t,e){if(1&t&&(n.Gf(xn,7),n.Gf(wn,7),n.Gf(yn,7),n.Gf(vn,7),n.Gf(Xn,7),n.Gf(Dn,5)),2&t){let a;n.iGM(a=n.CRH())&&(e.Tlbiensoxe=a.first),n.iGM(a=n.CRH())&&(e.Tltentai=a.first),n.iGM(a=n.CRH())&&(e.Tltenphu=a.first),n.iGM(a=n.CRH())&&(e.operationTpl=a.first),n.iGM(a=n.CRH())&&(e.tienduatruocTpl=a.first),n.iGM(a=n.CRH())&&(e.endSoplnDate=a.first)}},features:[n._Bn([B.r]),n.qOj],decls:89,vars:151,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nzRequired","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzFor"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["name","ngaybatdau",3,"nzDisabledDate","nzFormat","ngModel","nzPlaceHolder","ngModelChange","nzOnOpenChange"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzFor"],["name","ngayketthuc",3,"nzDisabledDate","nzFormat","ngModel","nzPlaceHolder","ngModelChange","nzOnOpenChange"],["endSoplnDate",""],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","outline"],["nz-col","",1,"inputIcon",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nzSearch","",3,"nzAddOnAfter"],["name","idtai","type","text","nz-input","","placeholder","",3,"ngModel","ngModelChange","blur"],["suffixIconButtonTaixe",""],["nzFor","",1,"fix-inputIcon",3,"nzNoColon"],["name","idphu","type","text","nz-input","","placeholder","",3,"ngModel","ngModelChange","blur"],["suffixIconButtonPhuxe",""],["name","biensoxe","type","text","nz-input","","placeholder","",3,"ngModel","ngModelChange","blur"],["suffixIconButtonBiensoxe",""],["name","trangthai","nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select",3,"ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[3,"tableTitle","btnTpl","reload"],[3,"checkedCashArrayFromComment","tableConfig","tableData","selectedChange","changePageSize","changePageNum"],["operationTpl",""],["Tltentai",""],["Tltenphu",""],["Tlbiensoxe",""],["tienduatruocTpl",""],["tableBtns",""],["nz-button","",1,"bg-icon",3,"nzType","click"],[3,"nzLabel","nzValue"],["class","operate-text",4,"appAuth"],[4,"ngIf"],[1,"operate-text"],["nz-button","","nzType","primary","nzGhost","",3,"click",4,"ngIf"],["nz-button","","nzType","primary","nzGhost","",3,"click"],["nz-button","","nzType","link",3,"click"],["nz-button","","nzType","primary","class","m-r-8",3,"click",4,"appAuth"],["nz-button","","nzType","default",3,"click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"],["nz-button","","nzType","default",3,"click"],["nz-icon","","nzType","delete"]],template:function(t,e){if(1&t&&(n._UZ(0,"app-page-header",0),n.TgZ(1,"div",1)(2,"nz-card",2)(3,"form",3)(4,"div",4)(5,"div",5)(6,"nz-form-item")(7,"nz-form-label",6),n._uU(8,"Ng\xe0y b\u1eaft \u0111\u1ea7u"),n.qZA(),n.TgZ(9,"nz-form-control",7)(10,"nz-date-picker",8),n.NdJ("ngModelChange",function(o){return e.ngaybatdau=o})("nzOnOpenChange",function(o){return e.handleStartOpenSoplnChange(o)}),n.qZA()()()(),n.TgZ(11,"div",5)(12,"nz-form-item")(13,"nz-form-label",9),n._uU(14,"Ng\xe0y k\u1ebft th\xfac"),n.qZA(),n.TgZ(15,"nz-form-control",7)(16,"nz-date-picker",10,11),n.NdJ("ngModelChange",function(o){return e.ngayketthuc=o})("nzOnOpenChange",function(o){return e.handleEndOpenSoplnChange(o)}),n.qZA()()()(),n.TgZ(18,"div",12)(19,"button",13),n.NdJ("click",function(){return e.getDataList()}),n._UZ(20,"i",14),n._uU(21," T\xecm ki\u1ebfm "),n.qZA(),n.TgZ(22,"button",15),n.NdJ("click",function(){return e.resetForm()}),n._UZ(23,"i",16),n._uU(24," L\xe0m m\u1edbi "),n.qZA()()(),n.TgZ(25,"div",4)(26,"div",17)(27,"nz-form-item")(28,"nz-form-label",7),n._uU(29,"T\xe0i ch\xednh"),n.qZA(),n.TgZ(30,"nz-form-control",7)(31,"nz-input-group",18)(32,"input",19),n.NdJ("ngModelChange",function(o){return e.searchParam.idtai=o})("blur",function(){return e.fnFocusOutTaixe()}),n.qZA()(),n.YNc(33,Zn,2,1,"ng-template",null,20,n.W1O),n.TgZ(35,"nz-form-label",21)(36,"span")(37,"u"),n._uU(38),n.qZA()()()()()(),n.TgZ(39,"div",17)(40,"nz-form-item")(41,"nz-form-label",7),n._uU(42,"T\xe0i ph\u1ee5"),n.qZA(),n.TgZ(43,"nz-form-control",7)(44,"nz-input-group",18)(45,"input",22),n.NdJ("ngModelChange",function(o){return e.searchParam.idphu=o})("blur",function(){return e.fnFocusOutPhuxe()}),n.qZA()(),n.YNc(46,An,2,1,"ng-template",null,23,n.W1O),n.TgZ(48,"nz-form-label",21)(49,"span")(50,"u"),n._uU(51),n.qZA()()()()()()(),n.TgZ(52,"div",4)(53,"div",17)(54,"nz-form-item")(55,"nz-form-label",7),n._uU(56,"Bi\u1ec3n s\u1ed1 xe"),n.qZA(),n.TgZ(57,"nz-form-control",7)(58,"nz-input-group",18)(59,"input",24),n.NdJ("ngModelChange",function(o){return e.searchParam.biensoxe=o})("blur",function(){return e.fnFocusOutBiensoxe()}),n.qZA()(),n.YNc(60,En,2,1,"ng-template",null,25,n.W1O),n.TgZ(62,"nz-form-label",21)(63,"span")(64,"u"),n._uU(65),n.qZA()()()()()(),n.TgZ(66,"div",5)(67,"nz-form-item")(68,"nz-form-label",7),n._uU(69,"Tr\u1ea1ng th\xe1i chuy\u1ebfn h\xe0ng"),n.qZA(),n.TgZ(70,"nz-form-control",7)(71,"nz-select",26),n.NdJ("ngModelChange",function(o){return e.searchParam.trangthai=o}),n.YNc(72,Fn,1,2,"nz-option",27),n.qZA()()()()()()(),n.TgZ(73,"app-card-table-wrap",28),n.NdJ("reload",function(){return e.reloadTable()}),n.TgZ(74,"app-ant-table",29),n.NdJ("selectedChange",function(o){return e.selectedChecked(o)})("changePageSize",function(o){return e.changePageSize(o)})("changePageNum",function(o){return e.getDataList(o)}),n.qZA(),n.YNc(75,Hn,7,7,"ng-template",null,30,n.W1O),n.YNc(77,Gn,2,1,"ng-template",null,31,n.W1O),n.YNc(79,Rn,2,1,"ng-template",null,32,n.W1O),n.YNc(81,Kn,3,1,"ng-template",null,33,n.W1O),n.YNc(83,Vn,0,0,"ng-template",null,30,n.W1O),n.YNc(85,Wn,3,5,"ng-template",null,34,n.W1O),n.qZA(),n.YNc(87,nt,2,2,"ng-template",null,35,n.W1O),n.qZA()),2&t){const a=n.MAs(34),o=n.MAs(47),r=n.MAs(61),c=n.MAs(88);n.Q6J("pageHeaderInfo",e.pageHeaderInfo),n.xp6(2),n.Q6J("nzBodyStyle",n.DdM(147,tt)),n.xp6(2),n.Q6J("nzGutter",n.DdM(148,J)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("nzDisabledDate",e.disabledStartSoplnDate)("nzFormat",e.dateFormat)("ngModel",e.ngaybatdau)("nzPlaceHolder",e.dateFormat),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("nzDisabledDate",e.disabledEndSoplnDate)("nzFormat",e.dateFormat)("ngModel",e.ngayketthuc)("nzPlaceHolder",e.dateFormat),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("nzType","primary"),n.xp6(6),n.Q6J("nzGutter",n.DdM(149,J)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",10)("nzXl",10)("nzLg",10)("nzMd",10)("nzSm",20)("nzXs",24),n.xp6(1),n.Q6J("nzAddOnAfter",a),n.xp6(1),n.Q6J("ngModel",e.searchParam.idtai),n.xp6(3),n.Q6J("nzNoColon",!0),n.xp6(3),n.Oqu(e.tainm),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",10)("nzXl",10)("nzLg",10)("nzMd",10)("nzSm",20)("nzXs",24),n.xp6(1),n.Q6J("nzAddOnAfter",o),n.xp6(1),n.Q6J("ngModel",e.searchParam.idphu),n.xp6(3),n.Q6J("nzNoColon",!0),n.xp6(3),n.Oqu(e.phunm),n.xp6(1),n.Q6J("nzGutter",n.DdM(150,J)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",10)("nzXl",10)("nzLg",10)("nzMd",10)("nzSm",20)("nzXs",24),n.xp6(1),n.Q6J("nzAddOnAfter",r),n.xp6(1),n.Q6J("ngModel",e.searchParam.biensoxe),n.xp6(3),n.Q6J("nzNoColon",!0),n.xp6(3),n.Oqu(e.biensoxenm),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",10)("nzXl",10)("nzLg",10)("nzMd",10)("nzSm",20)("nzXs",24),n.xp6(1),n.Q6J("ngModel",e.searchParam.trangthai),n.xp6(1),n.Q6J("ngForOf",e.listStatus),n.xp6(1),n.Q6J("tableTitle","K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm")("btnTpl",c),n.xp6(1),n.Q6J("checkedCashArrayFromComment",e.checkedCashArray)("tableConfig",e.tableConfig)("tableData",e.dataList)}},dependencies:[_.sg,_.O5,h._Y,h.Fj,h.JJ,h.JL,h.On,h.F,zn.q,X.q,bn.x,D.p,Cn.Ls,S.t3,S.SK,d.Lr,d.Nx,d.iK,d.Fd,Z.ix,A.w,Sn.dQ,F.Zp,F.gB,T.Ip,T.Vq,Tn.bd,G.uw,_.H9],changeDetection:0}),i})(),data:{title:"Qu\u1ea3n l\xfd chuy\u1ebfn",key:"spch00101"}}];let at=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[w.Bz.forChild(it),w.Bz]}),i})();var x=l(6083);let ot=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[x.m]}),i})();var st=l(7218);let lt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[x.m]}),i})(),rt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[x.m]}),i})();var ct=l(8538);let ht=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[at,x.m,ot,lt,rt,ct.V,st.C]}),i})()}}]);