"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[6999],{6999:(P,p,g)=>{g.r(p),g.d(p,{ImgPreviewModule:()=>a});var e=g(6083),m=g(9116),r=g(4650),c=g(9355),i=g(2802),d=g(6616),l=g(7044),_=g(1811),s=g(6903);function u(n,t){1&n&&r._UZ(0,"img",5)}function f(n,t){1&n&&r._UZ(0,"img",6)}const h=[{path:"",component:(()=>{class n{constructor(o){this.nzImageService=o,this.pageHeaderInfo={title:"\u56fe\u7247\u9884\u89c8",breadcrumb:["\u9996\u9875","\u529f\u80fd","\u56fe\u7247\u9884\u89c8"]}}onClick(){this.nzImageService.preview([{src:"https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg",width:"200px",height:"200px",alt:"ng-zorro"},{src:"https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg",width:"200px",height:"200px",alt:"angular"}],{nzZoom:1.5,nzRotate:0})}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)(r.Y36(c.x8))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-img-preview"]],decls:9,vars:1,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nz-image","","width","200px","nzSrc","https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png","alt","",4,"nzSpaceItem"],["nz-image","","width","200px","nzSrc","https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg","alt","",4,"nzSpaceItem"],["nz-button","","nzType","primary",1,"m-t-8",3,"click"],["nz-image","","width","200px","nzSrc","https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png","alt",""],["nz-image","","width","200px","nzSrc","https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg","alt",""]],template:function(o,v){1&o&&(r._UZ(0,"app-page-header",0),r.TgZ(1,"div",1)(2,"nz-image-group")(3,"nz-space"),r.YNc(4,u,1,0,"img",2),r.YNc(5,f,1,0,"img",3),r.qZA()(),r._UZ(6,"br"),r.TgZ(7,"button",4),r.NdJ("click",function(){return v.onClick()}),r._uU(8,"\u65e0\u56fe\u9884\u89c8"),r.qZA()()),2&o&&r.Q6J("pageHeaderInfo",v.pageHeaderInfo)},dependencies:[i.q,c.Ie,c.I7,d.ix,l.w,_.dQ,s.NU,s.$1],styles:["img[_ngcontent-%COMP%]{max-width:200px}"],changeDetection:0}),n})(),data:{title:"Xem tr\u01b0\u1edbc h\xecnh \u1ea3nh",key:"img-preview"}}];let z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[m.Bz.forChild(h),m.Bz]}),n})(),a=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[e.m,z]}),n})()},2802:(P,p,g)=>{g.d(p,{q:()=>z});var e=g(4650),m=g(9576),r=g(9116),c=g(6895),i=g(5655),d=g(4963),l=g(6287);function _(a,n){if(1&a&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&a){const t=n.$implicit;e.xp6(2),e.Oqu(t)}}function s(a,n){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const t=e.oxw();e.xp6(1),e.Oqu(t.pageHeaderInfo.extra)}}function u(a,n){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const t=e.oxw(2);e.xp6(1),e.Oqu(t.pageHeaderInfo.desc)}}function f(a,n){if(1&a&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,u,2,1,"ng-container",3),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",t.pageHeaderInfo.desc)}}function I(a,n){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const t=e.oxw(2);e.xp6(1),e.Oqu(t.pageHeaderInfo.footer)}}function h(a,n){if(1&a&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,I,2,1,"ng-container",3),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",t.pageHeaderInfo.footer)}}let z=(()=>{class a{constructor(t,o){this.themesService=t,this.router=o,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(m.f),e.Y36(r.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl"},decls:7,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(t,o){1&t&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return o.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,_,3,1,"nz-breadcrumb-item",2),e.qZA(),e.TgZ(3,"nz-page-header-extra"),e.YNc(4,s,2,1,"ng-container",3),e.qZA(),e.YNc(5,f,2,1,"nz-page-header-content",4),e.YNc(6,h,2,1,"nz-page-header-footer",4),e.qZA()),2&t&&(e.Q6J("nzTitle",o.pageHeaderInfo.title)("nzBackIcon",o.backTpl?o.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",o.pageHeaderInfo.breadcrumb),e.xp6(2),e.Q6J("nzStringTemplateOutlet",o.pageHeaderInfo.extra),e.xp6(1),e.Q6J("ngIf",o.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",o.pageHeaderInfo.footer))},dependencies:[c.sg,c.O5,i.$O,i.u5,i.Jp,i.$,i.A2,d.Dg,d.MO,l.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),a})()}}]);