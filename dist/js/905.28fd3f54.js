"use strict";(self["webpackChunkfinal"]=self["webpackChunkfinal"]||[]).push([[905],{3803:function(e,l,a){a.d(l,{A:function(){return m}});var s=a(6768);const t={class:"my-5"},r=(0,s.Lk)("ul",{class:"progressbar list-unstyled d-flex justify-content-between"},[(0,s.Lk)("li",{class:"active"},"查看購物明細"),(0,s.Lk)("li",null,"填寫訂單資料"),(0,s.Lk)("li",null,"確認訂單完成")],-1),o=[r];function d(e,l){return(0,s.uX)(),(0,s.CE)("div",t,o)}var c=a(1241);const i={},n=(0,c.A)(i,[["render",d]]);var m=n},2905:function(e,l,a){a.r(l),a.d(l,{default:function(){return W}});var s=a(6768),t=a(4232),r=a(5130);const o={class:"container"},d={class:"row my-5"},c=(0,s.Lk)("i",{class:"bi bi-caret-left-fill mr-2"},null,-1),i={class:"col-md-6"},n=(0,s.Lk)("h3",{class:"my-3"},"訂單明細",-1),m={class:"px-3"},u={class:"table text-center"},f=(0,s.Lk)("td",{class:"align-middle text-center",width:"30"},null,-1),k={class:"align-middle",width:"100"},b=["src","alt"],p={class:"align-middle"},L={class:"align-middle",width:"100"},h={class:"align-middle text-end"},v={class:"table mt-3"},g={key:0},y=(0,s.Lk)("td",{colspan:"5",class:"text-end text-primary"},"已套用優惠券",-1),x=[y],C={class:"h5"},V=(0,s.Lk)("td",{colspan:"4",class:"text-end"},[(0,s.Lk)("strong",null,"共計")],-1),F={class:"text-end"},_={class:"col-md-6"},q=(0,s.Lk)("h3",{class:"my-3"},"顧客資訊",-1),w={class:"mb-3"},E=(0,s.Lk)("label",{for:"email",class:"form-label"},"Email",-1),$={class:"mb-3"},U=(0,s.Lk)("label",{for:"name",class:"form-label"},"收件人姓名",-1),X={class:"mb-3"},A=(0,s.Lk)("label",{for:"tel",class:"form-label"},"收件人電話",-1),B={class:"mb-3"},I=(0,s.Lk)("label",{for:"address",class:"form-label"},"收件人地址",-1),O={class:"mb-3"},P=(0,s.Lk)("label",{for:"message",class:"form-label"},"備註",-1),S=(0,s.Lk)("div",{class:"text-end"},[(0,s.Lk)("button",{class:"btn btn-primary"},"送出訂單")],-1);function j(e,l,a,y,j,J){const K=(0,s.g2)("ProgressBar"),M=(0,s.g2)("router-link"),Q=(0,s.g2)("v-field"),W=(0,s.g2)("ErrorMessage"),z=(0,s.g2)("v-form");return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.bF)(K),(0,s.Lk)("div",d,[(0,s.bF)(M,{to:"/cart",class:"h5 back-to-cart"},{default:(0,s.k6)((()=>[c,(0,s.eW)("返回購物車清單 ")])),_:1}),(0,s.Lk)("div",i,[n,(0,s.Lk)("div",m,[(0,s.Lk)("table",u,[(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(j.cart.carts,(l=>((0,s.uX)(),(0,s.CE)("tr",{key:l.id},[f,(0,s.Lk)("td",k,[(0,s.Lk)("img",{src:l.product.imageUrl,width:"100%",alt:l.product.title},null,8,b)]),(0,s.Lk)("td",p,(0,t.v_)(l.product.title),1),(0,s.Lk)("td",L,(0,t.v_)(l.qty)+" "+(0,t.v_)(l.product.unit),1),(0,s.Lk)("td",h,"$"+(0,t.v_)(e.$filters.currency(l.final_total)),1)])))),128))])]),(0,s.Lk)("table",v,[(0,s.Lk)("tbody",null,[j.cart.final_total!==j.cart.total?((0,s.uX)(),(0,s.CE)("tr",g,x)):(0,s.Q3)("",!0),(0,s.Lk)("tr",C,[V,(0,s.Lk)("td",F,[(0,s.Lk)("strong",null,"$"+(0,t.v_)(e.$filters.currency(j.cart.final_total)),1)])])])])])]),(0,s.Lk)("div",_,[q,(0,s.bF)(z,{onSubmit:J.createOrder},{default:(0,s.k6)((({errors:e})=>[(0,s.Lk)("div",w,[E,(0,s.bF)(Q,{modelValue:j.form.user.email,"onUpdate:modelValue":l[0]||(l[0]=e=>j.form.user.email=e),class:(0,t.C4)([{"is-invalid":e["email"]},"form-control"]),rules:"required",name:"email",type:"email",id:"email",placeholder:"請輸入Email"},null,8,["modelValue","class"]),(0,s.bF)(W,{name:"email",class:"invalid-feedback"})]),(0,s.Lk)("div",$,[U,(0,s.bF)(Q,{modelValue:j.form.user.name,"onUpdate:modelValue":l[1]||(l[1]=e=>j.form.user.name=e),class:(0,t.C4)([{"is-invalid":e["姓名"]},"form-control"]),rules:"required",name:"姓名",type:"text",id:"name",placeholder:"請輸入姓名"},null,8,["modelValue","class"]),(0,s.bF)(W,{name:"姓名",class:"invalid-feedback"})]),(0,s.Lk)("div",X,[A,(0,s.bF)(Q,{modelValue:j.form.user.tel,"onUpdate:modelValue":l[2]||(l[2]=e=>j.form.user.tel=e),class:(0,t.C4)([{"is-invalid":e["電話"]},"form-control"]),rules:"required",name:"電話",type:"tel",id:"tel",placeholder:"請輸入電話"},null,8,["modelValue","class"]),(0,s.bF)(W,{name:"電話",class:"invalid-feedback"})]),(0,s.Lk)("div",B,[I,(0,s.bF)(Q,{modelValue:j.form.user.address,"onUpdate:modelValue":l[3]||(l[3]=e=>j.form.user.address=e),class:(0,t.C4)([{"is-invalid":e["地址"]},"form-control"]),rules:"required",name:"地址",type:"text",id:"address",placeholder:"請輸入地址"},null,8,["modelValue","class"]),(0,s.bF)(W,{name:"地址",class:"invalid-feedback"})]),(0,s.Lk)("div",O,[P,(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":l[4]||(l[4]=e=>j.form.message=e),type:"text",class:"form-control",id:"message",cols:"30",rows:"10"},null,512),[[r.Jo,j.form.message]])]),S])),_:1},8,["onSubmit"])])])])}a(4114);var J=a(3803),K={components:{ProgressBar:J.A},data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{carts:[],total:0,final_total:0}}},methods:{createOrder(){const e="https://vue3-course-api.hexschool.io/api/qq-api/order";this.$http.post(e,{data:this.form}).then((e=>{console.log("建立訂單",e),e.data.success&&(this.form={user:{name:"",email:"",tel:"",address:""},message:""},this.emitter.emit("resetCart"),this.$router.push(`/checkout/${e.data.orderId}`))}))},getCart(){const e="https://vue3-course-api.hexschool.io/api/qq-api/cart";this.$http.get(e).then((e=>{this.cart=e.data.data,console.log("取得購物車",this.cart)}))}},created(){this.getCart()}},M=a(1241);const Q=(0,M.A)(K,[["render",j]]);var W=Q}}]);
//# sourceMappingURL=905.28fd3f54.js.map