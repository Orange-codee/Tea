"use strict";(self["webpackChunkfinal"]=self["webpackChunkfinal"]||[]).push([[387],{4193:function(e,t,l){l.d(t,{A:function(){return v}});var a=l(6768),r=l(5130),s=l(4232);const d={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},o={class:"page-item"},i=(0,a.Lk)("span",{"aria-hidden":"true"},"«",-1),u=[i],p=["onClick"],c={class:"page-item"},k=(0,a.Lk)("span",{"aria-hidden":"true"},"»",-1),h=[k];function L(e,t,l,i,k,L){return(0,a.uX)(),(0,a.CE)("nav",d,[(0,a.Lk)("ul",n,[(0,a.Lk)("li",o,[(0,a.Lk)("a",{onClick:t[0]||(t[0]=(0,r.D$)((e=>L.updatePage(l.pages.current_page-1)),["prevent"])),class:(0,s.C4)([{disabled:!l.pages.has_pre},"page-link"]),href:"#","aria-label":"Previous"},u,2)]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.pages.total_pages,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e,class:"page-item"},[(0,a.Lk)("a",{onClick:(0,r.D$)((t=>L.updatePage(e)),["prevent"]),class:(0,s.C4)([{active:l.pages.current_page==e},"page-link"]),href:"#"},(0,s.v_)(e),11,p)])))),128)),(0,a.Lk)("li",c,[(0,a.Lk)("a",{onClick:t[1]||(t[1]=(0,r.D$)((e=>L.updatePage(l.pages.current_page+1)),["prevent"])),class:(0,s.C4)([{disabled:!l.pages.has_next},"page-link"]),href:"#","aria-label":"Next"},h,2)])])])}var m={props:["pages"],methods:{updatePage(e){this.$emit("emit-pages",e),console.log(typeof e)}}},g=l(1241);const b=(0,g.A)(m,[["render",L]]);var v=b},3768:function(e,t,l){l.r(t),l.d(t,{default:function(){return ae}});var a=l(6768),r=l(4232),s=l(5130);const d={class:"table mt-4"},n=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"購買時間"),(0,a.Lk)("th",null,"Email"),(0,a.Lk)("th",null,"訂單內容"),(0,a.Lk)("th",null,"訂單備註"),(0,a.Lk)("th",null,"應付金額"),(0,a.Lk)("th",null,"是否付款"),(0,a.Lk)("th",null,"編輯")])],-1),o={class:"list-unstyled"},i={class:"form-check form-switch"},u=["onUpdate:modelValue","onChange","id"],p=["for"],c={key:0,class:"text-success"},k={key:1},h={class:"btn-group"},L=["onClick"],m=["onClick"];function g(e,t,l,g,b,v){const f=(0,a.g2)("Pagination"),_=(0,a.g2)("OrderModal"),y=(0,a.g2)("DelModal");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("table",d,[n,(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(b.orders,(t=>((0,a.uX)(),(0,a.CE)(a.FK,{key:t.id},[b.orders.length?((0,a.uX)(),(0,a.CE)("tr",{key:0,class:(0,r.C4)({"text-secondary":!t.is_paid})},[(0,a.Lk)("td",null,(0,r.v_)(e.$filters.date(t.create_at)),1),(0,a.Lk)("td",null,(0,r.v_)(t.user.email),1),(0,a.Lk)("td",null,[(0,a.Lk)("ul",o,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.products,((e,t)=>((0,a.uX)(),(0,a.CE)("li",{key:t},[(0,a.eW)((0,r.v_)(e.product.title),1),(0,a.Lk)("span",null," 數量："+(0,r.v_)(e.qty)+(0,r.v_)(e.product.unit),1)])))),128))])]),(0,a.Lk)("td",null,(0,r.v_)(t.message),1),(0,a.Lk)("td",null,(0,r.v_)(e.$filters.currency(t.total)),1),(0,a.Lk)("td",null,[(0,a.Lk)("div",i,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":e=>t.is_paid=e,onChange:e=>v.updatePaid(t),class:"form-check-input",type:"checkbox",id:`paidSwitch${t.id}`},null,40,u),[[s.lH,t.is_paid]]),(0,a.Lk)("label",{class:"form-check-label",for:`paidSwitch${t.id}`},[t.is_paid?((0,a.uX)(),(0,a.CE)("span",c,"已付款")):((0,a.uX)(),(0,a.CE)("span",k,"未付款"))],8,p)])]),(0,a.Lk)("td",null,[(0,a.Lk)("div",h,[(0,a.Lk)("button",{onClick:e=>v.openModal(t),class:"btn btn-outline-primary btn-sm"},"檢視",8,L),(0,a.Lk)("button",{onClick:e=>v.openDelModal(t),class:"btn btn-outline-danger btn-sm"}," 刪除 ",8,m)])])],2)):(0,a.Q3)("",!0)],64)))),128))])]),(0,a.bF)(f,{pages:b.pagination,onEmitPages:v.getOrders},null,8,["pages","onEmitPages"]),(0,a.bF)(_,{ref:"orderModal",order:b.tempOrder,onUpdateOrder:v.updatePaid},null,8,["order","onUpdateOrder"]),(0,a.bF)(y,{ref:"delModal",item:b.tempOrder,onDelProduct:v.delOrder},null,8,["item","onDelProduct"])],64)}var b=l(4193);const v={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},_={class:"modal-content border-0"},y=(0,a.Lk)("div",{class:"modal-header bg-dark text-white"},[(0,a.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a.Lk)("span",null,"訂單")]),(0,a.Lk)("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),C={class:"modal-body"},O={class:"row"},$={class:"col-sm-4"},M=(0,a.Lk)("h3",null,"用戶資料",-1),E={class:"table"},x=(0,a.Lk)("th",{style:{width:"100px"}},"姓名",-1),X=(0,a.Lk)("th",null,"Email",-1),P=(0,a.Lk)("th",null,"電話",-1),w=(0,a.Lk)("th",null,"地址",-1),D={class:"col-sm-8"},F=(0,a.Lk)("h3",null,"訂單細節",-1),q={class:"table"},A=(0,a.Lk)("th",{style:{width:"100px"}},"訂單編號",-1),K=(0,a.Lk)("th",null,"下單時間",-1),I=(0,a.Lk)("th",null,"付款時間",-1),S={key:0},U={key:1},j=(0,a.Lk)("th",null,"付款狀態",-1),V={key:0,class:"text-success"},H={key:1,class:"text-muted"},N=(0,a.Lk)("th",null,"總金額",-1),Q=(0,a.Lk)("h3",null,"選購商品",-1),W={class:"table"},z={class:"modal-footer"},B=(0,a.Lk)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function G(e,t,l,s,d,n){return(0,a.uX)(),(0,a.CE)("div",v,[(0,a.Lk)("div",f,[(0,a.Lk)("div",_,[y,(0,a.Lk)("div",C,[(0,a.Lk)("div",O,[(0,a.Lk)("div",$,[M,(0,a.Lk)("table",E,[(0,a.Lk)("tbody",null,[(0,a.Lk)("tr",null,[x,(0,a.Lk)("td",null,(0,r.v_)(d.tempOrder.user.name),1)]),(0,a.Lk)("tr",null,[X,(0,a.Lk)("td",null,(0,r.v_)(d.tempOrder.user.email),1)]),(0,a.Lk)("tr",null,[P,(0,a.Lk)("td",null,(0,r.v_)(d.tempOrder.user.tel),1)]),(0,a.Lk)("tr",null,[w,(0,a.Lk)("td",null,(0,r.v_)(d.tempOrder.user.address),1)])])])]),(0,a.Lk)("div",D,[F,(0,a.Lk)("table",q,[(0,a.Lk)("tbody",null,[(0,a.Lk)("tr",null,[A,(0,a.Lk)("td",null,(0,r.v_)(d.tempOrder.id),1)]),(0,a.Lk)("tr",null,[K,(0,a.Lk)("td",null,(0,r.v_)(e.$filters.date(d.tempOrder.create_at)),1)]),(0,a.Lk)("tr",null,[I,d.tempOrder.paid_date?((0,a.uX)(),(0,a.CE)("td",S,(0,r.v_)(e.$filters.date(d.tempOrder.paid_date)),1)):((0,a.uX)(),(0,a.CE)("td",U,"無"))]),(0,a.Lk)("tr",null,[j,(0,a.Lk)("td",null,[d.tempOrder.is_paid?((0,a.uX)(),(0,a.CE)("strong",V,"已付款")):((0,a.uX)(),(0,a.CE)("span",H,"未付款"))])]),(0,a.Lk)("tr",null,[N,(0,a.Lk)("td",null,(0,r.v_)(e.$filters.currency(d.tempOrder.total)),1)])])]),Q,(0,a.Lk)("table",W,[(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(d.tempOrder.products,(t=>((0,a.uX)(),(0,a.CE)("tr",{key:t.id},[(0,a.Lk)("th",null,(0,r.v_)(t.product.title),1),(0,a.Lk)("td",null,(0,r.v_)(t.qty)+"/"+(0,r.v_)(t.product.unit),1),(0,a.Lk)("td",null,(0,r.v_)(e.$filters.currency(t.final_total)),1)])))),128))])])])])]),(0,a.Lk)("div",z,[B,(0,a.Lk)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=t=>e.$emit("update-order",d.tempOrder))}," 確認 ")])])])],512)}var J=l(3286),R={props:{order:{type:Object,default(){return{}}}},watch:{order(){this.tempOrder=this.order}},data(){return{modal:"",tempOrder:{products:{},user:{}}}},emits:["update-order"],mixins:[J.A]},T=l(1241);const Y=(0,T.A)(R,[["render",G]]);var Z=Y,ee=l(6356),te={components:{Pagination:b.A,OrderModal:Z,DelModal:ee.A},data(){return{orders:[],pagination:{},tempOrder:{}}},methods:{getOrders(e=1){const t=`https://vue3-course-api.hexschool.io/api/qq-api/admin/orders?page=${e}`;this.$http.get(t).then((e=>{console.log("取得訂單列表",e),e.data.success&&(this.orders=e.data.orders,this.pagination=e.data.pagination)}))},openModal(e){this.tempOrder={...e},this.$refs.orderModal.showModal()},updatePaid(e){const t=`https://vue3-course-api.hexschool.io/api/qq-api/admin/order/${e.id}`,l={is_paid:e.is_paid};console.log("paid",l),this.$http.put(t,{data:l}).then((e=>{console.log("更新付款狀態",e),this.$httpMessageState(e,"更新付款狀態");const t=this.pagination.current_page;this.getOrders(t)})),this.$refs.orderModal.hideModal()},openDelModal(e){this.tempOrder={...e},this.$refs.delModal.showModal()},delOrder(e){const t=`https://vue3-course-api.hexschool.io/api/qq-api/admin/order/${e.id}`;this.$http.delete(t).then((e=>{console.log("刪除訂單",e),this.$httpMessageState(e,"刪除訂單");const t=this.pagination.current_page;this.getOrders(t)})),this.$refs.delModal.hideModal()}},created(){this.getOrders()}};const le=(0,T.A)(te,[["render",g]]);var ae=le}}]);
//# sourceMappingURL=387.7e3e8769.js.map