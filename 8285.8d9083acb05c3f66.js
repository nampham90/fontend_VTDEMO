"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[8285],{48285:(F,m,a)=>{a.r(m),a.d(m,{DownloadModule:()=>c});var e=a(5316),_=a(9116),h=a(82722),s=a(89019),p=a(94327),f=a.n(p),n=a(94650),D=a(54246);let z=(()=>{class t{constructor(d){this.http=d}fileStreamDownload(d){return this.http.downZip("/file/download/document",d,{needSuccessInfo:!1})}}return t.\u0275fac=function(d){return new(d||t)(n.LFG(D.q))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var T=a(88176),v=a(32802),E=a(66616),C=a(47044),b=a(21811),x=a(51971);const l=[{path:"",component:(()=>{class t{constructor(d,u){this.downloadService=d,this.destroy$=u,this.pageHeaderInfo={title:"\u6587\u4ef6\u4e0b\u8f7d",breadcrumb:["\u9996\u9875","\u529f\u80fd","\u6587\u4ef6\u4e0b\u8f7d"],desc:"\u5404\u79cd\u6587\u4ef6\u4e0b\u8f7d"}}ngOnInit(){}fileStreamDownload(){this.downloadService.fileStreamDownload({downloadUrl:`http://${s.ip}/api/file/\u56fe\u7eb8\u5b9e\u9645\u6750\u6599\u91cf\u5bfc\u5165\u6a21\u677f.xlsx`}).pipe((0,h.R)(this.destroy$)).subscribe(u=>{const g=new Blob([u],{type:"text/plain;charset=utf-8"});f().saveAs(g,"\u6750\u6599\u5e93\u5bfc\u5165\u6a21\u677f.xlsx")})}}return t.\u0275fac=function(d){return new(d||t)(n.Y36(z),n.Y36(T.z))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-download"]],decls:14,vars:1,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nzTitle","\u6839\u636e\u540e\u53f0\u63a5\u53e3\u6587\u4ef6\u6d41\u4e0b\u8f7d",1,"m-b-10"],["nz-button","","nzType","primary",3,"click"],["nzTitle","\u6839\u636e\u6587\u4ef6\u5730\u5740\u4e0b\u8f7d\u6587\u4ef6",1,"m-b-10"],["nzTitle","base64\u6d41\u4e0b\u8f7d",1,"m-b-10"],["nzTitle","\u56fe\u7247Url\u4e0b\u8f7d,\u5982\u679c\u6709\u8de8\u57df\u95ee\u9898\uff0c\u9700\u8981\u5904\u7406\u56fe\u7247\u8de8\u57df",1,"m-b-10"]],template:function(d,u){1&d&&(n._UZ(0,"app-page-header",0),n.TgZ(1,"div",1)(2,"nz-card",2)(3,"button",3),n.NdJ("click",function(){return u.fileStreamDownload()}),n._uU(4,"\u6587\u4ef6\u6d41\u4e0b\u8f7d"),n.qZA()(),n.TgZ(5,"nz-card",4)(6,"button",3),n.NdJ("click",function(){return u.fileStreamDownload()}),n._uU(7,"\u6587\u4ef6\u5730\u5740\u4e0b\u8f7d"),n.qZA()(),n.TgZ(8,"nz-card",5)(9,"button",3),n.NdJ("click",function(){return u.fileStreamDownload()}),n._uU(10,"base64\u6d41\u4e0b\u8f7d"),n.qZA()(),n.TgZ(11,"nz-card",6)(12,"button",3),n.NdJ("click",function(){return u.fileStreamDownload()}),n._uU(13,"\u56fe\u7247Url\u4e0b\u8f7d"),n.qZA()()()),2&d&&n.Q6J("pageHeaderInfo",u.pageHeaderInfo)},dependencies:[v.q,E.ix,C.w,b.dQ,x.bd],changeDetection:0}),t})(),data:{title:"t\u1eadp tin t\u1ea3i v\u1ec1",key:"download"}}];let r=(()=>{class t{}return t.\u0275fac=function(d){return new(d||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[_.Bz.forChild(l),_.Bz]}),t})(),c=(()=>{class t{}return t.\u0275fac=function(d){return new(d||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[e.m,r]}),t})()},32802:(F,m,a)=>{a.d(m,{q:()=>x});var e=a(94650),_=a(29576),h=a(9116),s=a(36895),p=a(45655),f=a(94963),n=a(66287);function D(o,l){if(1&o&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&o){const r=l.$implicit;e.xp6(2),e.Oqu(r)}}function z(o,l){1&o&&e.GkF(0)}function T(o,l){if(1&o&&(e.TgZ(0,"nz-page-header-extra"),e.YNc(1,z,1,0,"ng-container",4),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",r.extraTpl)}}function v(o,l){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const r=e.oxw(2);e.xp6(1),e.Oqu(r.pageHeaderInfo.desc)}}function E(o,l){if(1&o&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,v,2,1,"ng-container",5),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",r.pageHeaderInfo.desc)}}function C(o,l){if(1&o&&(e.ynx(0),e._uU(1),e.BQk()),2&o){const r=e.oxw(2);e.xp6(1),e.Oqu(r.pageHeaderInfo.footer)}}function b(o,l){if(1&o&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,C,2,1,"ng-container",5),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",r.pageHeaderInfo.footer)}}let x=(()=>{class o{constructor(r,c){this.themesService=r,this.router=c,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(_.f),e.Y36(h.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl",extraTpl:"extraTpl"},decls:6,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"ngIf"],[4,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"]],template:function(r,c){1&r&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return c.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,D,3,1,"nz-breadcrumb-item",2),e.qZA(),e.YNc(3,T,2,1,"nz-page-header-extra",3),e.YNc(4,E,2,1,"nz-page-header-content",3),e.YNc(5,b,2,1,"nz-page-header-footer",3),e.qZA()),2&r&&(e.Q6J("nzTitle",c.pageHeaderInfo.title)("nzBackIcon",c.backTpl?c.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",c.pageHeaderInfo.breadcrumb),e.xp6(1),e.Q6J("ngIf",c.extraTpl),e.xp6(1),e.Q6J("ngIf",c.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",c.pageHeaderInfo.footer))},dependencies:[s.sg,s.O5,s.tP,p.$O,p.u5,p.Jp,p.$,p.A2,f.Dg,f.MO,n.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),o})()}}]);