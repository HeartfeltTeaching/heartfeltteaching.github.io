(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{zDS7:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=u("ZZ/e"),t=u("WPWp"),b=function(){function l(l,n){this.navCtrl=l,this.theme=n,this.languages=["English","Portuguese","French"]}return l.prototype.ngOnInit=function(){var l=this;this.theme.getStoredThemeName().then(function(n){l.currentTheme=n})},l.prototype.changeTheme=function(l){this.theme.setTheme(l)},l}(),i=function(){return function(){}}(),a=u("pMnS"),r=u("oBZk"),c=u("gIcY"),h=e.nb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-avatar[_ngcontent-%COMP%]{width:68px;height:68px}"]],data:{}});function p(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,11,"ion-header",[],null,null,null,r.I,r.j)),e.ob(1,49152,null,0,o.A,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,r.X,r.y)),e.ob(3,49152,null,0,o.Ab,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.C,r.d)),e.ob(5,49152,null,0,o.k,[e.h,e.k],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.zb(l,8).onClick(u)&&o),o},r.A,r.b)),e.ob(7,49152,null,0,o.f,[e.h,e.k],null,null),e.ob(8,16384,null,0,o.g,[[2,o.gb],o.Gb],null,null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,r.W,r.x)),e.ob(10,49152,null,0,o.yb,[e.h,e.k],null,null),(l()(),e.Gb(-1,0,["Settings"])),(l()(),e.pb(12,0,null,null,35,"ion-content",[],null,null,null,r.H,r.i)),e.ob(13,49152,null,0,o.t,[e.h,e.k],null,null),(l()(),e.pb(14,0,null,0,33,"ion-list",[["no-border",""]],null,null,null,r.O,r.o)),e.ob(15,49152,null,0,o.N,[e.h,e.k],null,null),(l()(),e.pb(16,0,null,0,5,"ion-list-header",[],null,null,null,r.N,r.p)),e.ob(17,49152,null,0,o.O,[e.h,e.k],null,null),(l()(),e.pb(18,0,null,0,3,"ion-text",[["color","dark"]],null,null,null,r.V,r.w)),e.ob(19,49152,null,0,o.vb,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(20,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["General"])),(l()(),e.pb(22,0,null,0,25,"ion-item",[],null,null,null,r.L,r.m)),e.ob(23,49152,null,0,o.G,[e.h,e.k],null,null),(l()(),e.pb(24,0,null,0,1,"ion-icon",[["color","primary"],["name","contrast"],["slot","start"]],null,null,null,r.J,r.k)),e.ob(25,49152,null,0,o.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.pb(26,0,null,0,2,"ion-label",[["color","primary"]],null,null,null,r.M,r.n)),e.ob(27,49152,null,0,o.M,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Gb(-1,0,["Theme"])),(l()(),e.pb(29,0,null,0,18,"ion-select",[["placeholder","Select One"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],function(l,n,u){var o=!0,t=l.component;return"ionBlur"===n&&(o=!1!==e.zb(l,30)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.zb(l,30)._handleChangeEvent(u.target.value)&&o),"ionChange"===n&&(o=!1!==t.changeTheme(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(t.currentTheme=u)&&o),o},r.T,r.t)),e.ob(30,16384,null,0,o.Kb,[e.k],null,null),e.Db(1024,null,c.c,function(l){return[l]},[o.Kb]),e.ob(32,671744,null,0,c.f,[[8,null],[8,null],[8,null],[6,c.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,c.d,null,[c.f]),e.ob(34,16384,null,0,c.e,[[4,c.d]],null,null),e.ob(35,49152,null,0,o.lb,[e.h,e.k],{placeholder:[0,"placeholder"]},null),(l()(),e.pb(36,0,null,0,2,"ion-select-option",[["value",""]],null,null,null,r.S,r.u)),e.ob(37,49152,null,0,o.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Default"])),(l()(),e.pb(39,0,null,0,2,"ion-select-option",[["value","autumn"]],null,null,null,r.S,r.u)),e.ob(40,49152,null,0,o.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Autumn"])),(l()(),e.pb(42,0,null,0,2,"ion-select-option",[["value","night"]],null,null,null,r.S,r.u)),e.ob(43,49152,null,0,o.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Dark"])),(l()(),e.pb(45,0,null,0,2,"ion-select-option",[["value","neon"]],null,null,null,r.S,r.u)),e.ob(46,49152,null,0,o.mb,[e.h,e.k],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Neon"]))],function(l,n){var u=n.component;l(n,19,0,"dark"),l(n,25,0,"primary","contrast"),l(n,27,0,"primary"),l(n,32,0,u.currentTheme),l(n,35,0,"Select One"),l(n,37,0,""),l(n,40,0,"autumn"),l(n,43,0,"night"),l(n,46,0,"neon")},function(l,n){l(n,29,0,e.zb(n,34).ngClassUntouched,e.zb(n,34).ngClassTouched,e.zb(n,34).ngClassPristine,e.zb(n,34).ngClassDirty,e.zb(n,34).ngClassValid,e.zb(n,34).ngClassInvalid,e.zb(n,34).ngClassPending)})}function s(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-settings",[],null,null,null,p,h)),e.ob(1,114688,null,0,b,[o.Gb,t.a],null,null)],function(l,n){l(n,1,0)},null)}var g=e.lb("app-settings",b,s,{},{},[]),d=u("Ip0R"),m=u("ZYCi");u.d(n,"SettingsPageModuleNgFactory",function(){return k});var k=e.mb(i,[],function(l){return e.wb([e.xb(512,e.j,e.bb,[[8,[a.a,g]],[3,e.j],e.x]),e.xb(4608,d.m,d.l,[e.u,[2,d.t]]),e.xb(4608,c.i,c.i,[]),e.xb(4608,o.b,o.b,[e.z,e.g]),e.xb(4608,o.Fb,o.Fb,[o.b,e.j,e.q,d.c]),e.xb(4608,o.Ib,o.Ib,[o.b,e.j,e.q,d.c]),e.xb(1073742336,d.b,d.b,[]),e.xb(1073742336,c.h,c.h,[]),e.xb(1073742336,c.b,c.b,[]),e.xb(1073742336,o.Cb,o.Cb,[]),e.xb(1073742336,m.o,m.o,[[2,m.u],[2,m.m]]),e.xb(1073742336,i,i,[]),e.xb(1024,m.k,function(){return[[{path:"",component:b}]]},[])])})}}]);