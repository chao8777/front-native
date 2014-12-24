define("mytest/1.0.0/singleForm",["cellula/0.4.2/cellula","cellula/0.4.2/cellula-namespace","cellula/0.4.2/cellula-class","cellula/0.4.2/cellula-util","cellula/0.4.2/cellula-events","cellula/0.4.2/cellula-cell","cellula/0.4.2/cellula-element","cellula/0.4.2/cellula-collection","fdp/1.1.0/fdp","fdp/1.1.0/fdp-namespace","fdp/1.1.0/fdp-formItem","fdp/1.1.0/async","$","fdp/1.1.0/fdp-form","fdp/1.1.0/fdp-table","fdp/1.1.0/fdp-paginator","select/1.0.0/select","select/1.0.0/selectSkin.css"],function(a,b,c){{var d=a("cellula/0.4.2/cellula"),e=a("fdp/1.1.0/fdp"),f=a("select/1.0.0/select"),g=a("$"),h=e.FormItem,i=e.Form;e.Paginator,d._util,d.Class,d.Element,d.Cell,d.Collection}g.extend({ajax:function(a){console.info||(console.info=console.log),console.info("DUMMY AJAX started.");var b="string"==typeof a.data?g.deparam(a.data):a.data;console.info(b),setTimeout(function(){"checkusername.json"==a.url&&a.success({queryForm:b,stat:"ok",errorCode:"",errorMsg:"",result:!0}),"checkusername2.json"==a.url&&a.success({queryForm:b,stat:"ok",errorCode:"",errorMsg:"",result:!0})},1e3)}});var j=h.build("UserName",{type:"input",label:"姓名",init:function(a){this._super(a),this.addRule("isChinese",function(a){return/[\u4e00-\u9fa5]+/.test(a.element.value)?!0:!1},"只能包含中文字符").addRule("legal",function(a,b){g.ajax({url:"checkusername.json",type:"POST",data:{userid:1023},success:function(a){a.result?b(!0):b(!1,"非法的用户名")},error:function(){}})}).addRule("legal2",function(a,b){g.ajax({url:"checkusername2.json",type:"POST",data:{userid:1024},success:function(a){a.result?b(!0):b(!1,"非法的用户名22222")},error:function(){}})})}}),k=h.build("Sex",{type:"radio",label:"性别",init:function(a){this._super(a)}}),l=h.build("Hobby",{required:!1,type:"checkbox",label:"爱好",init:function(a){this._super(a)}}),m=h.build("type",{type:"select",label:"类别",select:void 0,init:function(a){this._super(a);var b=this,c=!0;this.select=new f({width:100,size:3,zIndex:2,onSelect:function(){c||b.triggerValidate(),c=!1}}).apply(this.element)}}),n=h.build("Memo",{required:!1,type:"textarea",label:"备注",defaultTip:"",maxLength:void 0,init:function(a){this._super(a),this.maxLength=2*parseInt(this.element.getAttribute("data-maxlength"),10),this._bindAll("limit"),g(this.element).on("change keyup",this.limit),this.defaultTip=this.tip,this.addRule("limitWord",function(a){var b,c=a.element.value,d=c.replace(/[\u4E00-\u9FBF]/g,"BB").length;return d>this.maxLength?(b=this.tip="输入已超过"+Math.floor((d-this.maxLength)/2)+"个字。",this.setMessage("limitWord",b),!1):(b=this.tip="还可以输入"+Math.ceil((this.maxLength-d)/2)+"个字。",!0)})},limit:function(){var a=this;""==g.trim(a.element.value)&&(a.tip=a.defaultTip),a.triggerValidate()}}),o={username:new j({key:"username"}),sex:new k({key:"sex"}),hobby:new l({key:"hobby"}),type:new m({key:"type"}),memo:new n({key:"memo"})},p=i.build("ResumeForm",{type:"single",itemList:null,init:function(a){this._super(a)}}),q=new p({key:"resumeForm",itemList:o});c.exports=q});