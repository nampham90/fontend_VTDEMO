"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[4782],{80126:(D,S,i)=>{i.d(S,{u:()=>T});var c=i(44556),g=i(94650),z=i(54246);let T=(()=>{class r{constructor(p){this.http=p}postAll(p){return this.http.post(c.NguonxeAnt100GetAll,p,{needSuccessInfo:!1})}postDetail(p){return this.http.post(c.NguonxeAnt100GetDetail,p,{needSuccessInfo:!1})}postCreate(p){return this.http.post(c.NguonxeAnt100Create,p,{needSuccessInfo:!1})}postUpdate(p){return this.http.post(c.NguonxeAnt100Update,p,{needSuccessInfo:!1})}postDelete(p){return this.http.post(c.NguonxeAnt100Delete,p,{needSuccessInfo:!1})}postDeleteAll(p){return this.http.post(c.NguonxeAnt100DeleteAll,p,{needSuccessInfo:!1})}postUpdateStatus(p){return this.http.post(c.NguonxeAnt100UpdateStatus,p,{needSuccessInfo:!1})}}return r.\u0275fac=function(p){return new(p||r)(g.LFG(z.q))},r.\u0275prov=g.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},74782:(D,S,i)=>{i.r(S),i.d(S,{Spch00252Module:()=>zn});var c=i(9116),g=i(36895),z=i(22155),T=i(13951),r=i(44556),x=i(22195),p=i(28746),n=i(94650),A=i(91565),J=i(63604),E=i(50007),Z=i(80126),L=i(49651),N=i(99651),F=i(47094),Q=i(50308),O=i(79213),u=i(24006),k=i(32802),P=i(5529),U=i(35656),H=i(94178),Y=i(21102),b=i(73679),C=i(36704),I=i(66616),B=i(47044),G=i(21811),K=i(35635),v=i(38231),R=i(51971),w=i(834);const W=["operationTpl"],j=["nguonxeTpl"],V=["machuyenngoaiTpl"],$=["endSoplnDate"];function q(o,s){if(1&o&&n._UZ(0,"nz-option",28),2&o){const t=s.$implicit;n.hYB("nzLabel","",t.datacd," - ",t.datanm,""),n.s9C("nzValue",t.id)}}function nn(o,s){if(1&o&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&o){const t=s.nguonxe;n.xp6(1),n.AsE("",t.datacd,"-",t.datanm,"")}}function tn(o,s){if(1&o){const t=n.EpF();n.ynx(0),n.TgZ(1,"button",33),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2).id,l=n.oxw();return n.KtG(l.transferSpch00251(a,"update"))}),n._uU(2,"C\u1eadp nh\u1eadt"),n.qZA(),n.BQk()}2&o&&(n.xp6(1),n.Q6J("disabled",!0))}function en(o,s){if(1&o){const t=n.EpF();n.TgZ(0,"button",33),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2).id,l=n.oxw();return n.KtG(l.transferSpch00251(a,"update"))}),n._uU(1,"C\u1eadp nh\u1eadt"),n.qZA()}2&o&&n.Q6J("disabled",!1)}function an(o,s){if(1&o&&(n.TgZ(0,"span",30),n.YNc(1,tn,3,1,"ng-container",31),n.YNc(2,en,2,1,"ng-template",null,32,n.W1O),n.qZA()),2&o){const t=n.MAs(3),e=n.oxw().status02;n.xp6(1),n.Q6J("ngIf",1==e)("ngIfElse",t)}}function on(o,s){if(1&o){const t=n.EpF();n.TgZ(0,"span",30)(1,"button",34),n.NdJ("click",function(){n.CHM(t);const a=n.oxw().id,l=n.oxw();return n.KtG(l.exportPDF(a))}),n._uU(2,"Xu\u1ea5t PDF"),n.qZA()()}}function ln(o,s){if(1&o&&(n.YNc(0,an,4,2,"span",29),n.YNc(1,on,3,0,"span",29)),2&o){const t=n.oxw();n.Q6J("appAuth",t.ActionCode.TimkiemchuyenngoaiUpdate),n.xp6(1),n.Q6J("appAuth",t.ActionCode.TimkiemchuyenngoaiExportPdf)}}function sn(o,s){if(1&o){const t=n.EpF();n.TgZ(0,"a",35),n.NdJ("click",function(){const l=n.CHM(t).id,h=n.oxw();return n.KtG(h.transferSpch00251(l,"link"))}),n._uU(1),n.qZA()}if(2&o){const t=s.id;n.xp6(1),n.Oqu(t)}}function pn(o,s){if(1&o){const t=n.EpF();n.TgZ(0,"button",38),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2);return n.KtG(a.add())}),n._UZ(1,"i",39),n._uU(2," Th\xeam m\u1edbi "),n.qZA()}}function rn(o,s){if(1&o){const t=n.EpF();n.TgZ(0,"button",40),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2);return n.KtG(a.allDel())}),n._UZ(1,"i",41),n._uU(2," X\xf3a "),n.qZA()}if(2&o){const t=n.oxw(2);n.Q6J("disabled",t.showDelete)}}function cn(o,s){if(1&o&&(n.YNc(0,pn,3,0,"button",36),n.YNc(1,rn,3,1,"button",37)),2&o){const t=n.oxw();n.Q6J("appAuth",t.ActionCode.TimkiemchuyenngoaiAdd),n.xp6(1),n.Q6J("appAuth",t.ActionCode.TimkiemchuyenngoaiDelete)}}const dn=function(){return{"padding-bottom":0}},y=function(){return{xs:8,sm:16,md:24}},hn=[{path:"",component:(()=>{class o extends T.H{constructor(t,e,a,l,h,m,f,d,M,fn,_n,Sn){super(t,e,a,l,M),this.webService=t,this.router=e,this.cdf=a,this.datePipe=l,this.dataService=h,this.modalSrv=m,this.nguonxeService=f,this.message=d,this.tabService=M,this.ChuyenngoaiDto=fn,this.commonService=_n,this.pdfService=Sn,this.DisplayScreenID=z.t.spch00251,this.searchParam={},this.dateFormat=r.dateFormat,this.dataList=[],this.checkedCashArray=[],this.ActionCode=x.h,this.availableOptions=[],this.pageHeaderInfo={title:"T\xecm ki\u1ebfm chuy\u1ebfn ngo\xe0i",breadcrumb:["Home","Chuy\u1ebfn","T\xecm ki\u1ebfm chuy\u1ebfn ngo\xe0i"],desc:""},this.ngaybatdau=null,this.ngayketthuc=null,this.disabledStartSoplnDate=_=>{if(!_||!this.ngayketthuc)return!1;const X=new Date(this.ngayketthuc);return _.getTime()>X.getTime()},this.disabledEndSoplnDate=_=>{if(!_||!this.ngaybatdau)return!1;const X=new Date(this.ngaybatdau);return _.getTime()<=X.getTime()},this.listnguonxe=[],this.showUpdate=!1,this.showDelete=!1}fnInit(){}destroy(){}handleStartOpenSoplnChange(t){t||this.endSoplnDate.open()}handleEndOpenSoplnChange(t){}ngOnInit(){this.fnGetAllNguonXe(),this.initTable()}reloadTable(){this.message.info("\u0110\xe3 \u0111\u01b0\u1ee3c l\xe0m m\u1edbi"),this.getDataList()}getDataList(t){this.tableLoading(!0),this.dataService.postallChuyenngoai({pageSize:this.tableConfig.pageSize,pageNum:t?.pageIndex||this.tableConfig.pageIndex,filters:this.searchParam}).pipe((0,p.x)(()=>{this.tableLoading(!1)})).subscribe(a=>{const{list:l,total:h,pageNum:m}=a;this.dataList=[...l],0==this.dataList.length&&this.modalSrv.info({nzContent:"Kh\xf4ng C\xf3 d\u1eef li\u1ec7u"}),this.tableConfig.total=h,this.tableConfig.pageIndex=m,this.tableLoading(!1),this.checkedCashArray=[...this.checkedCashArray]})}selectedChecked(t){this.checkedCashArray=[...t]}changePageSize(t){this.tableConfig.pageSize=t}tableChangeDectction(){this.dataList=[...this.dataList],this.cdf.detectChanges()}tableLoading(t){this.tableConfig.loading=t,this.tableChangeDectction()}resetForm(){this.searchParam={},this.getDataList()}add(){this.ChuyenngoaiDto.clear(),this.transfer(r.rootbase+z.t.spch00251)}allDel(){}transferSpch00251(t,e){this.ChuyenngoaiDto.mode=e,this.ChuyenngoaiDto.id=t,this.ChuyenngoaiDto.initFlg=!1,this.transfer(r.rootbase+z.t.spch00251)}fnGetAllNguonXe(){this.nguonxeService.postAll({pageSize:0,pageNum:0}).pipe().subscribe(e=>{this.listnguonxe=e})}copy(t){return`${t}`}exportPDF(t){this.modalSrv.confirm({nzTitle:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n xu\u1ea5t phi\u1ebfu kh\xf4ng ?",nzContent:"Kh\xf4ng th\u1ec3 c\u1eadp nh\u1eadt sau khi xu\u1ea5t. Nh\u1ea5n OK \u0111\u1ec3 th\u1ef1c hi\u1ec7n xu\u1ea5t pdf",nzOnOk:()=>{this.dataService.postExportDetail({id:t}).pipe().subscribe(e=>{let l="H\xf3a \u0110\u01a1n V\u1eadn Chuy\u1ec3n - "+r.doanhnghiep,m=this.fnreturnHeaderPDF(e.resHeader,e.ods),f=this.fngenerateData(e.listdetail);this.pdfService.exportPDF([["Th\xf4ng tin \u0111\u01a1n h\xe0ng","\u0110\u1ecba \u0111i\u1ec3m b\xf3c h\xe0ng","T\xean ng\u01b0\u1eddi nh\u1eadn","SDT ng\u01b0\u1eddi nh\u1eadn","\u0110\u1ecba ch\u1ec9 ng\u01b0\u1eddi nh\u1eadn","Ghi ch\xfa"]],m,f,l,this.getDate(),"T\xe0i x\u1ebf k\xfd nh\u1eadn","Kh\xe1ch h\xe0ng k\xfd nh\u1eadn"),this.fnUpdateStatus02(t),this.getDataList(),this.ChuyenngoaiDto.clear()})}})}fnreturnHeaderPDF(t,e){const f=(0,g.p6)(t.ngayvanchuyen,"dd/MM/yyyy","vi-VN","UTC+7");let d=r.headerLayout;return d[0].field="s\u1ed1 ODS:",d[0].value=e,d[1].field="T\xe0i x\u1ebf:",d[1].value=t.tentaixe,d[2].field="Bi\u1ebfn s\u1ed1 xe:",d[2].value=t.biensoxe,d[3].field="Ng\xe0y v\u1eadn chuy\u1ec3n:",d[3].value=f,d}fngenerateData(t){let e=[];for(let a of t)e.push([a.thongtindonhang,a.diadiembochang,a.tennguoinhan,a.sdtnguoinhan,a.diachinguoinhan,a.ghichu]);return e}fnUpdateStatus02(t){this.dataService.postUpdateStatus02({id:t}).pipe().subscribe(e=>{null!=e&&this.message.success("c\u1eadp nh\u1eadt th\xe0nh c\xf4ng !")})}initTable(){this.tableConfig={showCheckbox:!0,headers:[{title:"M\xe3 chuy\u1ebfn ngo\xe0i",field:"id",width:250,tdTemplate:this.machuyenngoaiTpl},{title:"Ngu\u1ed3n xe",width:300,field:"nguonxe",tdTemplate:this.nguonxeTpl},{title:"Ng\xe0y v\u1eadn chuy\u1ec3n",width:200,field:"ngayvanchuyen",pipe:"date: dd/MM/YYYY HH:mm"},{title:"Bi\u1ec3n s\u1ed1 xe",width:150,field:"biensoxe"},{title:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",width:150,field:"sdtnguonxe"},{title:"T\xean t\xe0i x\u1ebf",width:250,field:"tentaixe"},{title:"SDT t\xe0i x\u1ebf",width:200,field:"sodienthoai"},{title:"H\xe0nh \u0111\u1ed9ng",tdTemplate:this.operationTpl,width:300,fixed:!0,fixedDir:"right"}],total:0,loading:!0,pageSize:10,pageIndex:1}}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(A.Q),n.Y36(c.F0),n.Y36(n.sBO),n.Y36(g.uU),n.Y36(J.h),n.Y36(E.Sf),n.Y36(Z.u),n.Y36(L.dD),n.Y36(N.p),n.Y36(F.d),n.Y36(Q.v),n.Y36(O.j))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-spch00252"]],viewQuery:function(t,e){if(1&t&&(n.Gf(W,7),n.Gf(j,7),n.Gf(V,7),n.Gf($,5)),2&t){let a;n.iGM(a=n.CRH())&&(e.operationTpl=a.first),n.iGM(a=n.CRH())&&(e.nguonxeTpl=a.first),n.iGM(a=n.CRH())&&(e.machuyenngoaiTpl=a.first),n.iGM(a=n.CRH())&&(e.endSoplnDate=a.first)}},features:[n.qOj],decls:62,vars:146,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzHoverable","",1,"m-b-10",3,"nzBodyStyle"],["nz-form",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzFor"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["name","ngaybatdau",3,"nzDisabledDate","nzFormat","ngModel","nzPlaceHolder","ngModelChange","nzOnOpenChange"],["name","ngayketthuc",3,"nzDisabledDate","nzFormat","ngModel","nzPlaceHolder","ngModelChange","nzOnOpenChange"],["endSoplnDate",""],["nz-col","",1,"text-right","p-0","m-b-10",3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","search"],["nz-button","",1,"m-l-15",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","outline"],[3,"nzXXl","nzXl","nzLg","nzMd","nzSm","nzXs","nzErrorTip"],["name","nguonxe","nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select",3,"ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nz-input","","name","biensoxe","id","biensoxe","placeholder","",3,"ngModel","ngModelChange"],["nz-input","","name","_id","id","_id","placeholder","",3,"ngModel","maxLength","minlength","ngModelChange"],["nz-input","","name","soods","id","soods","placeholder","",3,"ngModel","ngModelChange"],[3,"tableTitle","btnTpl","reload"],[3,"checkedCashArrayFromComment","tableConfig","tableData","selectedChange","changePageSize","changePageNum"],["nguonxeTpl",""],["operationTpl",""],["machuyenngoaiTpl",""],["tableBtns",""],[3,"nzLabel","nzValue"],["class","operate-text",4,"appAuth"],[1,"operate-text"],[4,"ngIf","ngIfElse"],["SUpdate",""],["nz-button","","nzType","primary","nzGhost","",3,"disabled","click"],["nz-button","","nzType","primary","nzGhost","",3,"click"],["nz-button","","nzType","link","nzBlock","",3,"click"],["nz-button","","nzType","primary","class","m-r-8",3,"click",4,"appAuth"],["nz-button","","nzType","default",3,"disabled","click",4,"appAuth"],["nz-button","","nzType","primary",1,"m-r-8",3,"click"],["nz-icon","","nzType","plus"],["nz-button","","nzType","default",3,"disabled","click"],["nz-icon","","nzType","delete"]],template:function(t,e){if(1&t&&(n._UZ(0,"app-page-header",0),n.TgZ(1,"div",1)(2,"nz-card",2)(3,"form",3)(4,"div",4)(5,"div",5)(6,"nz-form-item")(7,"nz-form-label",6),n._uU(8,"Ng\xe0y b\u1eaft \u0111\u1ea7u"),n.qZA(),n.TgZ(9,"nz-form-control",7)(10,"nz-date-picker",8),n.NdJ("ngModelChange",function(l){return e.ngaybatdau=l})("nzOnOpenChange",function(l){return e.handleStartOpenSoplnChange(l)}),n.qZA()()()(),n.TgZ(11,"div",5)(12,"nz-form-item")(13,"nz-form-label",6),n._uU(14,"Ng\xe0y k\u1ebft th\xfac"),n.qZA(),n.TgZ(15,"nz-form-control",7)(16,"nz-date-picker",9,10),n.NdJ("ngModelChange",function(l){return e.ngayketthuc=l})("nzOnOpenChange",function(l){return e.handleEndOpenSoplnChange(l)}),n.qZA()()()(),n.TgZ(18,"div",11)(19,"button",12),n.NdJ("click",function(){return e.getDataList()}),n._UZ(20,"i",13),n._uU(21," T\xecm ki\u1ebfm "),n.qZA(),n.TgZ(22,"button",14),n.NdJ("click",function(){return e.resetForm()}),n._UZ(23,"i",15),n._uU(24," L\xe0m m\u1edbi "),n.qZA()()(),n.TgZ(25,"div",4)(26,"div",5)(27,"nz-form-item")(28,"nz-form-label",6),n._uU(29,"Ngu\u1ed3n xe"),n.qZA(),n.TgZ(30,"nz-form-control",16)(31,"nz-select",17),n.NdJ("ngModelChange",function(l){return e.searchParam.nguonxe=l}),n.YNc(32,q,1,3,"nz-option",18),n.qZA()()()(),n.TgZ(33,"div",5)(34,"nz-form-item")(35,"nz-form-label",6),n._uU(36,"Bi\u1ec3n s\u1ed1 xe"),n.qZA(),n.TgZ(37,"nz-form-control",16)(38,"input",19),n.NdJ("ngModelChange",function(l){return e.searchParam.biensoxe=l}),n.qZA()()()()(),n.TgZ(39,"div",4)(40,"div",5)(41,"nz-form-item")(42,"nz-form-label",6),n._uU(43,"M\xe3 chuy\u1ebfn ngo\xe0i"),n.qZA(),n.TgZ(44,"nz-form-control",16)(45,"input",20),n.NdJ("ngModelChange",function(l){return e.searchParam._id=l}),n.qZA()()()(),n.TgZ(46,"div",5)(47,"nz-form-item")(48,"nz-form-label",6),n._uU(49,"S\u1ed1 ODS"),n.qZA(),n.TgZ(50,"nz-form-control",16)(51,"input",21),n.NdJ("ngModelChange",function(l){return e.searchParam.soods=l}),n.qZA()()()()()()(),n.TgZ(52,"app-card-table-wrap",22),n.NdJ("reload",function(){return e.reloadTable()}),n.TgZ(53,"app-ant-table",23),n.NdJ("selectedChange",function(l){return e.selectedChecked(l)})("changePageSize",function(l){return e.changePageSize(l)})("changePageNum",function(l){return e.getDataList(l)}),n.qZA(),n.YNc(54,nn,2,2,"ng-template",null,24,n.W1O),n.YNc(56,ln,2,2,"ng-template",null,25,n.W1O),n.YNc(58,sn,2,1,"ng-template",null,26,n.W1O),n.qZA(),n.YNc(60,cn,2,2,"ng-template",null,27,n.W1O),n.qZA()),2&t){const a=n.MAs(61);n.Q6J("pageHeaderInfo",e.pageHeaderInfo),n.xp6(2),n.Q6J("nzBodyStyle",n.DdM(142,dn)),n.xp6(2),n.Q6J("nzGutter",n.DdM(143,y)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("nzDisabledDate",e.disabledStartSoplnDate)("nzFormat",e.dateFormat)("ngModel",e.ngaybatdau)("nzPlaceHolder",e.dateFormat),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("nzDisabledDate",e.disabledEndSoplnDate)("nzFormat",e.dateFormat)("ngModel",e.ngayketthuc)("nzPlaceHolder",e.dateFormat),n.xp6(2),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("nzType","primary"),n.xp6(6),n.Q6J("nzGutter",n.DdM(144,y)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("ngModel",e.searchParam.nguonxe),n.xp6(1),n.Q6J("ngForOf",e.listnguonxe),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(1),n.Q6J("ngModel",e.searchParam.biensoxe),n.xp6(1),n.Q6J("nzGutter",n.DdM(145,y)),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip","M\xe3 chuy\u1ebfn kh\xf4ng \u0111\xfang quy \u0111\u1ecbnh"),n.xp6(1),n.Q6J("ngModel",e.searchParam._id)("maxLength",24)("minlength",24),n.xp6(1),n.Q6J("nzXXl",8)("nzXl",8)("nzLg",8)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",9)("nzXl",9)("nzLg",9)("nzMd",12)("nzSm",24)("nzXs",24),n.xp6(2),n.Q6J("nzXXl",12)("nzXl",12)("nzLg",12)("nzMd",12)("nzSm",24)("nzXs",24)("nzErrorTip",""),n.xp6(1),n.Q6J("ngModel",e.searchParam.soods),n.xp6(1),n.Q6J("tableTitle","K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm")("btnTpl",a),n.xp6(1),n.Q6J("checkedCashArrayFromComment",e.checkedCashArray)("tableConfig",e.tableConfig)("tableData",e.dataList)}},dependencies:[g.sg,g.O5,u._Y,u.Fj,u.JJ,u.JL,u.wO,u.On,u.F,k.q,P.q,U.x,H.p,Y.Ls,b.t3,b.SK,C.Lr,C.Nx,C.iK,C.Fd,I.ix,B.w,G.dQ,K.Zp,v.Ip,v.Vq,R.bd,w.uw]}),o})(),data:{title:"T\xecm ki\u1ebfm chuy\u1ebfn ngo\xe0i",key:"spch00252"}}];let gn=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[c.Bz.forChild(hn),c.Bz]}),o})();var un=i(5316),mn=i(64425);let zn=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[un.m,gn,mn.Iq]}),o})()}}]);