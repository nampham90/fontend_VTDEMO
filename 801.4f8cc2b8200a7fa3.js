"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[801],{801:(H,O,o)=>{o.r(O),o.d(O,{WebsocketModule:()=>K});var e=o(6083),v=o(6806),C=o(9019),z=o(7579),b=o(930),k=o(9751),S=o(727),y=o(4707);const A={url:"",deserializer:r=>JSON.parse(r.data),serializer:r=>JSON.stringify(r)};class x extends z.u{constructor(n,s){if(super(),this._socket=null,n instanceof k.y)this.destination=s,this.source=n;else{const c=this._config=Object.assign({},A);if(this._output=new z.x,"string"==typeof n)c.url=n;else for(const l in n)n.hasOwnProperty(l)&&(c[l]=n[l]);if(!c.WebSocketCtor&&WebSocket)c.WebSocketCtor=WebSocket;else if(!c.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new y.t}}lift(n){const s=new x(this._config,this.destination);return s.operator=n,s.source=this,s}_resetState(){this._socket=null,this.source||(this.destination=new y.t),this._output=new z.x}multiplex(n,s,c){const l=this;return new k.y(d=>{try{l.next(n())}catch(f){d.error(f)}const u=l.subscribe({next:f=>{try{c(f)&&d.next(f)}catch(p){d.error(p)}},error:f=>d.error(f),complete:()=>d.complete()});return()=>{try{l.next(s())}catch(f){d.error(f)}u.unsubscribe()}})}_connectSocket(){const{WebSocketCtor:n,protocol:s,url:c,binaryType:l}=this._config,d=this._output;let u=null;try{u=s?new n(c,s):new n(c),this._socket=u,l&&(this._socket.binaryType=l)}catch(p){return void d.error(p)}const f=new S.w0(()=>{this._socket=null,u&&1===u.readyState&&u.close()});u.onopen=p=>{const{_socket:_}=this;if(!_)return u.close(),void this._resetState();const{openObserver:P}=this._config;P&&P.next(p);const B=this.destination;this.destination=b.Lv.create(m=>{if(1===u.readyState)try{const{serializer:T}=this._config;u.send(T(m))}catch(T){this.destination.error(T)}},m=>{const{closingObserver:T}=this._config;T&&T.next(void 0),m&&m.code?u.close(m.code,m.reason):d.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }")),this._resetState()},()=>{const{closingObserver:m}=this._config;m&&m.next(void 0),u.close(),this._resetState()}),B&&B instanceof y.t&&f.add(B.subscribe(this.destination))},u.onerror=p=>{this._resetState(),d.error(p)},u.onclose=p=>{u===this._socket&&this._resetState();const{closeObserver:_}=this._config;_&&_.next(p),p.wasClean?d.complete():d.error(p)},u.onmessage=p=>{try{const{deserializer:_}=this._config;d.next(_(p))}catch(_){d.error(_)}}}_subscribe(n){const{source:s}=this;return s?s.subscribe(n):(this._socket||this._connectSocket(),this._output.subscribe(n),n.add(()=>{const{_socket:c}=this;0===this._output.observers.length&&(c&&(1===c.readyState||0===c.readyState)&&c.close(),this._resetState())}),n)}unsubscribe(){const{_socket:n}=this;n&&(1===n.readyState||0===n.readyState)&&n.close(),this._resetState(),super.unsubscribe()}}var t=o(4650),M=o(6895),a=o(4006),h=o(2802),i=o(3679),g=o(6616),W=o(7044),Z=o(1811),D=o(5635),F=o(4607),U=o(6174),J=o(8823);function w(r,n){if(1&r&&(t.ynx(0),t.TgZ(1,"div",10)(2,"span",11),t._uU(3),t.qZA()(),t.TgZ(4,"div",12),t._uU(5,"\u5df2\u8bfb"),t.qZA(),t.BQk()),2&r){const s=n.$implicit;t.xp6(3),t.Oqu(s)}}const Q=function(){return[16,16]},R=function(){return{minRows:3,maxRows:5}},N=[{path:"",component:(()=>{class r{constructor(s){this.cdr=s,this.concate=!0,this.pageHeaderInfo={title:"websocket",breadcrumb:["\u9996\u9875","\u529f\u80fd","websocket"]},this.subject=function I(r){return new x(r)}(`ws://${C.ip}:8003/webSocket`),this.result=[],this.msg=""}send(){this.subject.next(this.msg),this.msg=""}end(){this.subject.complete(),this.concate=!1}ngOnInit(){}ngAfterViewInit(){this.subject.subscribe(s=>{this.result.push(s.message),this.result=[...this.result],this.cdr.markForCheck()})}ngOnDestroy(){this.subject.complete()}}return r.\u0275fac=function(s){return new(s||r)(t.Y36(t.sBO))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-websocket"]],decls:14,vars:8,consts:[[3,"pageHeaderInfo"],[1,"normal-table-wrap"],["nz-row","",3,"nzGutter"],["nz-col","","nzFlex","300px"],["nz-input","","placeholder","\u53d1\u9001\u7684\u5185\u5bb9\u670d\u52a1\u7aef\u4f1a\u8fd4\u56de",1,"m-b-8",3,"ngModel","nzAutosize","ngModelChange"],["nz-button","","nzType","primary",3,"click"],["nz-button","","nzType","default",1,"m-l-8",3,"click"],["nz-col","","nzFlex","auto"],["nzTitle","\u6d88\u606f\u5185\u5bb9"],[4,"ngFor","ngForOf"],["nz-result-content","",1,"m-t-0","p-8","text-break","m-b-8"],["nz-typography",""],["nz-typography","","nzType","secondary",1,"sp-12","text-right","m-t-5"]],template:function(s,c){1&s&&(t._UZ(0,"app-page-header",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"textarea",4),t.NdJ("ngModelChange",function(d){return c.msg=d}),t.qZA(),t.TgZ(5,"button",5),t.NdJ("click",function(){return c.send()}),t._uU(6,"\u53d1\u9001"),t.qZA(),t.TgZ(7,"button",6),t.NdJ("click",function(){return c.end()}),t._uU(8,"\u65ad\u5f00\u8fde\u63a5"),t.qZA(),t.TgZ(9,"span"),t._uU(10),t.qZA()(),t.TgZ(11,"div",7)(12,"nz-card",8),t.YNc(13,w,6,1,"ng-container",9),t.qZA()()()()),2&s&&(t.Q6J("pageHeaderInfo",c.pageHeaderInfo),t.xp6(2),t.Q6J("nzGutter",t.DdM(6,Q)),t.xp6(2),t.Q6J("ngModel",c.msg)("nzAutosize",t.DdM(7,R)),t.xp6(6),t.hij("\u94fe\u63a5\u72b6\u6001\uff1a",c.concate,""),t.xp6(3),t.Q6J("ngForOf",c.result))},dependencies:[M.sg,a.Fj,a.JJ,a.On,h.q,i.t3,i.SK,g.ix,W.w,Z.dQ,D.Zp,D.rh,F.bd,U.HO,J.ZU],changeDetection:0}),r})(),data:{title:"ki\u1ec3m tra websocket",key:"websocket"}}];let j=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[v.Bz.forChild(N),v.Bz]}),r})(),K=(()=>{class r{}return r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[e.m,j]}),r})()},2802:(H,O,o)=>{o.d(O,{q:()=>M});var e=o(4650),v=o(9576),C=o(6806),z=o(6895),b=o(5655),k=o(4963),S=o(6287);function y(a,h){if(1&a&&(e.TgZ(0,"nz-breadcrumb-item")(1,"a"),e._uU(2),e.qZA()()),2&a){const i=h.$implicit;e.xp6(2),e.Oqu(i)}}function A(a,h){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const i=e.oxw();e.xp6(1),e.Oqu(i.pageHeaderInfo.extra)}}function E(a,h){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const i=e.oxw(2);e.xp6(1),e.Oqu(i.pageHeaderInfo.desc)}}function x(a,h){if(1&a&&(e.TgZ(0,"nz-page-header-content"),e.YNc(1,E,2,1,"ng-container",3),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",i.pageHeaderInfo.desc)}}function I(a,h){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const i=e.oxw(2);e.xp6(1),e.Oqu(i.pageHeaderInfo.footer)}}function t(a,h){if(1&a&&(e.TgZ(0,"nz-page-header-footer"),e.YNc(1,I,2,1,"ng-container",3),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",i.pageHeaderInfo.footer)}}let M=(()=>{class a{constructor(i,g){this.themesService=i,this.router=g,this.pageHeaderInfo={},this.backUrl="",this.themesOptions$=this.themesService.getThemesMode()}back(){this.router.navigateByUrl(this.backUrl)}ngOnInit(){}}return a.\u0275fac=function(i){return new(i||a)(e.Y36(v.f),e.Y36(C.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-page-header"]],inputs:{backTpl:"backTpl",pageHeaderInfo:"pageHeaderInfo",backUrl:"backUrl"},decls:7,vars:7,consts:[[1,"site-page-header",3,"nzTitle","nzBackIcon","nzGhost","nzBack"],["nz-page-header-breadcrumb",""],[4,"ngFor","ngForOf"],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(i,g){1&i&&(e.TgZ(0,"nz-page-header",0),e.NdJ("nzBack",function(){return g.back()}),e.TgZ(1,"nz-breadcrumb",1),e.YNc(2,y,3,1,"nz-breadcrumb-item",2),e.qZA(),e.TgZ(3,"nz-page-header-extra"),e.YNc(4,A,2,1,"ng-container",3),e.qZA(),e.YNc(5,x,2,1,"nz-page-header-content",4),e.YNc(6,t,2,1,"nz-page-header-footer",4),e.qZA()),2&i&&(e.Q6J("nzTitle",g.pageHeaderInfo.title)("nzBackIcon",g.backTpl?g.backTpl:null)("nzGhost",!1),e.xp6(2),e.Q6J("ngForOf",g.pageHeaderInfo.breadcrumb),e.xp6(2),e.Q6J("nzStringTemplateOutlet",g.pageHeaderInfo.extra),e.xp6(1),e.Q6J("ngIf",g.pageHeaderInfo.desc),e.xp6(1),e.Q6J("ngIf",g.pageHeaderInfo.footer))},dependencies:[z.sg,z.O5,b.$O,b.u5,b.Jp,b.$,b.A2,k.Dg,k.MO,S.f],styles:[".site-page-header[_ngcontent-%COMP%]{width:100%}.ant-advanced-search-form[_ngcontent-%COMP%]{padding:24px 24px 0;background:#fff;margin:10px auto}[nz-form-label][_ngcontent-%COMP%]{overflow:visible}.save[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),a})()}}]);