"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[3910],{22155:(y,f,r)=>{r.d(f,{t:()=>p});var p=(()=>{return(u=p||(p={})).Demo="/default/dashboard/demo",u.Analysis="/default/dashboard/analysis",u.Monitor="/default/dashboard/monitor",u.Workbench="/default/dashboard/workbench",u.spxe00101="xe/spxe00101",u.spch00101="chuyen/spch00101",u.spch00201="chuyen/spch00201",u.spch00251="chuyen/spch00251",u.spch00252="chuyen/spch00252",u.spch00253="chuyen/spch00253",u.spch00254="chuyen/spch00254",u.spch00255="chuyen/spch00255",u.spkh00101="khachhang/spkh00101",u.spkh00201="khachhang/spkh00201",p;var u})()},63910:(y,f,r)=>{r.r(f),r.d(f,{DemoModule:()=>A});var p=r(5316),u=r(9116),v=r(13951),h=r(22155),e=r(94650),D=r(91565),b=r(36895),g=r(99651),N=r(89653),s=r(24006),a=r(35635);let c=(()=>{class n{constructor(t,o){this.elementRef=t,this.decimalPipe=o,this.lastValid="",this.el=this.elementRef.nativeElement,this.setRegex()}regexString(t){return`^(\\d${t?`{0,${t}}`:"+"}(\\.\\d{0,2})?|\\.\\d{0,2})$`}setRegex(t){this.digitRegex=new RegExp(this.regexString(t),"g")}set maxDigits(t){this.setRegex(t)}ngOnInit(){this.el.value=this.decimalPipe.transform(this.el.value,"1.0-0")}onFocus(t){this.el.value=t.replace(/[^0-9.]+/g,""),this.el.select()}onBlur(t){this.el.value=this.decimalPipe.transform(t,"1.0-0")}onUndo(t){this.el.value=""}onInput(t){const o=(t.target.value.match(this.digitRegex)||[]).join("");(o||!t.target.value)&&(this.lastValid=o),this.el.value=o||this.lastValid}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(b.JJ))},n.\u0275dir=e.lG2({type:n,selectors:[["","numberInput",""]],hostBindings:function(t,o){1&t&&e.NdJ("focus",function(i){return o.onFocus(i.target.value)})("blur",function(i){return o.onBlur(i.target.value)})("keydown.control.z",function(i){return o.onUndo(i.target.value)})("input",function(i){return o.onInput(i)})},inputs:{maxDigits:"maxDigits"}}),n})();class d{}let _=(()=>{class n{constructor(t,o){this.cdr=t,this.decimalPipe=o,this.changeNumber=new e.vpe}set Number(t){this._number=this.decimalPipe.transform(t,"1.0-0")}get Number(){return this.inputChangeDectction(),this._number}inputChangeDectction(){this.cdr.markForCheck()}ngOnInit(){}onQueryParamsChange(t){this.changeNumber.emit(t.target.value.replace(/[^0-9.]+/g,""))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(b.JJ))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-input-number"]],inputs:{Number:"Number"},outputs:{changeNumber:"changeNumber"},features:[e._Bn([{provide:d,useExisting:n}])],decls:1,vars:1,consts:[["nz-input","","type","text","autocomplete","off","numberInput","","maxDigits","9",1,"form-control",3,"ngModel","ngModelChange","blur"]],template:function(t,o){1&t&&(e.TgZ(0,"input",0),e.NdJ("ngModelChange",function(i){return o._number=i})("blur",function(i){return o.onQueryParamsChange(i)}),e.qZA()),2&t&&e.Q6J("ngModel",o._number)},dependencies:[s.Fj,s.JJ,s.On,a.Zp,c]}),n})();var C=r(85726);const I=[{path:"",component:(()=>{class n extends v.H{constructor(t,o,l,i,M,T){super(t,o,l,i,M),this.webService=t,this.router=o,this.cdf=l,this.datePipe=i,this.tabService=M,this.store=T,this.DisplayScreenID=h.t.Demo,this.amountMode=1e3,this.numberMode=1e3}changeAmount(t){this.amountMode=t}changeNumber(t){this.numberMode=t}fnInit(){console.log("nam pham"),this.cdf.markForCheck()}destroy(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(D.Q),e.Y36(u.F0),e.Y36(e.sBO),e.Y36(b.uU),e.Y36(g.p),e.Y36(N.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-demo"]],features:[e.qOj],decls:9,vars:6,consts:[[3,"Amount","changeAmount"],[3,"Number","changeNumber"]],template:function(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1),e.qZA(),e._UZ(2,"div"),e.TgZ(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"app-input-currency",0),e.NdJ("changeAmount",function(i){return o.changeAmount(i)}),e.qZA(),e._uU(6),e.TgZ(7,"app-input-number",1),e.NdJ("changeNumber",function(i){return o.changeNumber(i)}),e.qZA(),e._uU(8)),2&t&&(e.xp6(1),e.hij("nam pham word : ",o.formItemNm[2],""),e.xp6(3),e.hij(" Title: ",o.title,""),e.xp6(1),e.Q6J("Amount",o.amountMode),e.xp6(1),e.hij("\n",o.amountMode,"\n"),e.xp6(1),e.Q6J("Number",o.numberMode),e.xp6(1),e.hij("\n",o.numberMode,""))},dependencies:[_,C.e],changeDetection:0}),n})(),data:{title:"Trang Demo",key:"demo"}}];let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(I),u.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[D.Q],imports:[p.m,P]}),n})()},13951:(y,f,r)=>{r.d(f,{H:()=>b});var p=r(91565),u=r(44556),v=r(36895),h=r(94650),e=r(9116),D=r(99651);let b=(()=>{class g{constructor(s,a,c,d,_){this.webService=s,this.router=a,this.cdf=c,this.datePipe=d,this.tabService=_,this.formItemNm={},this.list=[],this.title="nam pham",this.constHttt=u.Hinhthucthanhtoan}ngOnDestroy(){this.destroy()}ngOnInit(){this.setFormItemNm()}setFormItemNm(){this.webService.PostCallWs(u.Ant100PostUrlParams,{url:this.router.url},a=>{this.list=a,this.list.forEach(c=>{this.formItemNm[c.stt]=c.title1}),this.fnInit()})}getDate(){return this.datePipe.transform(new Date,"yyyy/MM/dd")+""}formatDate(s){return null==s||""==s?"":this.datePipe.transform(s,"yyyy/MM/dd")+""}displayVND(s){return(0,v.xG)(1e3*s,"vi-VN","\u0111","symbol-narrow","1.0-0")}transfer(s){let a=this.tabService.findIndex(s);-1==a||this.tabService.delTab(this.tabService.getTabArray()[a],a),this.router.navigate([s])}mergeHttt(s){let a=s+"",c="";for(let d of this.constHttt)d.value===a&&(c=d.lable);return c}}return g.\u0275fac=function(s){return new(s||g)(h.Y36(p.Q),h.Y36(e.F0),h.Y36(h.sBO),h.Y36(v.uU),h.Y36(D.p))},g.\u0275cmp=h.Xpm({type:g,selectors:[["app-base"]],features:[h._Bn([v.uU])],decls:0,vars:0,template:function(s,a){},encapsulation:2}),g})()}}]);