"use strict";(self.webpackChunkng_ant_admin=self.webpackChunkng_ant_admin||[]).push([[5617],{91565:(M,p,e)=>{e.d(p,{Q:()=>c});var a=e(15861),h=e(80529),f=e(44556),d=e(94650),v=e(54246);let c=(()=>{class t{constructor(r,s){this.http=r,this.httpt=s,this.urlApi="https://fakestoreapi.com/",this.provincesApi=f.tinhthanhApi,this.httpOptions={headers:new h.WM({"Content-Type":"application/json"})}}GetCallProvinces(r,s){var n=this;return(0,a.Z)(function*(){let o=n.httpt.get(n.provincesApi);return o.subscribe({next:i=>(r?.(i),!0),error:i=>(s?.(),!1),complete:()=>{}}),o})()}GetCallCommonWs(r,s,n){var o=this;return(0,a.Z)(function*(){let i=o.httpt.get(o.urlApi+r,{observe:"response"});return i.subscribe({next:l=>(s?.(l),!0),error:l=>(n?.(),!1),complete:()=>{}}),i})()}PostCallCommonWs(r,s,n,o){var i=this;return(0,a.Z)(function*(){let l=i.http.post(r,s,{needSuccessInfo:!1});return l.subscribe({next:u=>(n?.(u),!0),error:u=>(o?.(),!1),complete:()=>{}}),l})()}GetCallWs(r,s,n){var o=this;return(0,a.Z)(function*(){let i=o.http.get(r,{observe:"response"});return i.subscribe({next:l=>(s?.(l),!0),error:l=>(n?.(),!1),complete:()=>{}}),i})()}PostCallWs(r,s,n,o){var i=this;return(0,a.Z)(function*(){let l=i.http.post(r,s,{needSuccessInfo:!1});return l.subscribe({next:u=>(n?.(u),!0),error:u=>(o?.(),!1),complete:()=>{}}),l})()}PutCallWs(r,s,n,o){var i=this;return(0,a.Z)(function*(){let l=i.http.put(r,s,{needSuccessInfo:!0});return l.subscribe({next:u=>(n?.(u),!0),error:u=>(o?.(),!1),complete:()=>{}}),l})()}DeleteCallWs(r,s,n,o){var i=this;return(0,a.Z)(function*(){let l=i.http.delete(r,s,{needSuccessInfo:!0});return l.subscribe({next:u=>(n?.(u),!0),error:u=>(o?.(),!1),complete:()=>{}}),l})()}}return t.\u0275fac=function(r){return new(r||t)(d.LFG(v.q),d.LFG(h.eN))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},55617:(M,p,e)=>{e.r(p),e.d(p,{DashboardModule:()=>c});var a=e(9116),h=e(94650);const f=[{path:"analysis",loadChildren:()=>Promise.all([e.e(8592),e.e(6996)]).then(e.bind(e,66996)).then(t=>t.AnalysisModule)},{path:"monitor",loadChildren:()=>e.e(9845).then(e.bind(e,39845)).then(t=>t.MonitorModule)},{path:"workbench",loadChildren:()=>e.e(7905).then(e.bind(e,27905)).then(t=>t.WorkbenchModule)},{path:"demo",loadChildren:()=>Promise.all([e.e(8592),e.e(3910)]).then(e.bind(e,63910)).then(t=>t.DemoModule)},{path:"",redirectTo:"analysis",pathMatch:"full"}];let d=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[a.Bz.forChild(f),a.Bz]}),t})();var v=e(91565);let c=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({providers:[v.Q],imports:[d]}),t})()}}]);