"use strict";(self["webpackChunkfinal"]=self["webpackChunkfinal"]||[]).push([[167],{2167:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var i=a(6768),r=a(5130),s=a(4232);const n={class:"container"},l={class:"row mt-4 mb-4"},o={class:"col-lg-3"},c={class:"list-group writing-list-group bg-3 rounded-0"},d={class:"list-group-item bg-3 rounded-0"},g=["onClick"],u={class:"col-lg-9"},p={class:"my-1"},h={key:0,class:"fs-4 Serif-TC fw-bolder nature-1"},k={key:1,class:"fs-4 Serif-TC fw-bolder nature-1"},C={class:"row"},f=["onClick"],v={class:"card rounded-0 h-100 w-100"},m={class:"position-relative"},b=["src","alt"],w={class:"border border-white position-absolute top-50 start-50 translate-middle px-2 py-1"},L={class:"Serif-TC fs-3 fw-bolder text-white text-nowrap mb-0"},P={class:"card-body d-flex justify-content-between align-items-baseline pt-3 pb-2"},y={class:"fs-5"},x=["onClick"],E={"aria-label":"Page navigation example "},$={class:"pagination justify-content-center"},X=(0,i.Lk)("span",{"aria-hidden":"true"},"«",-1),D=[X],T=(0,i.Lk)("span",{"aria-hidden":"true"},"«",-1),S=[T],_={class:"page-item d-flex rounded-0"},q=["onClick"],F=(0,i.Lk)("span",{"aria-hidden":"true"},"»",-1),K=[F],j=(0,i.Lk)("span",{"aria-hidden":"true"},"»",-1),I=[j];function M(e,t,a,X,T,F){const j=(0,i.g2)("LoadingComponent");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(j,{active:T.isLoading},null,8,["active"]),(0,i.Lk)("div",n,[(0,i.Lk)("div",l,[(0,i.Lk)("div",o,[(0,i.Lk)("ul",c,[(0,i.Lk)("li",d,[(0,i.Lk)("a",{onClick:t[0]||(t[0]=(0,r.D$)((e=>F.selectedCategories("")),["prevent"])),href:"#",class:(0,s.C4)(["writing-list-group-item fs-5 Serif-TC fw-bolder nature-1 text-decoration-none",{"a-active":""===T.selectedCategory}])},"全部",2)]),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(T.categories,((e,t)=>((0,i.uX)(),(0,i.CE)("li",{key:"category"+t,class:"list-group-item bg-3 rounded-0"},[(0,i.Lk)("a",{onClick:(0,r.D$)((t=>F.selectedCategories(e)),["prevent"]),class:(0,s.C4)([{"a-active":T.selectedCategory===e},"writing-list-group-item fs-5 Serif-TC fw-bolder nature-1 text-decoration-none"]),href:"#"},(0,s.v_)(e),11,g)])))),128))])]),(0,i.Lk)("div",u,[(0,i.Lk)("section",p,[""===T.selectedCategory?((0,i.uX)(),(0,i.CE)("h3",h," 茶藝用品 / 全部 ")):((0,i.uX)(),(0,i.CE)("h3",k,"茶藝用品 / "+(0,s.v_)(T.selectedCategory),1))]),(0,i.Lk)("div",C,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(F.filterPageData,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"col-lg-4 col-md-6 mb-3"},[(0,i.Lk)("a",{onClick:(0,r.D$)((t=>F.getProduct(e.id)),["prevent"]),href:"#",class:"text-decoration-none"},[(0,i.Lk)("div",v,[(0,i.Lk)("div",m,[(0,i.Lk)("img",{src:e.imageUrl,class:"card-img-top rounded-0 objfit",style:{height:"30vh"},alt:e.title},null,8,b),(0,i.Lk)("span",w,[(0,i.Lk)("h2",L,(0,s.v_)(e.title),1)])]),(0,i.Lk)("div",P,[(0,i.Lk)("p",y,"$"+(0,s.v_)(e.price),1),(0,i.Lk)("button",{onClick:(0,r.D$)((t=>F.addToCart(e)),["stop","prevent"]),type:"button",class:"btn fs-5 brown-2 p-0 card-link"}," 加入購物車 ",8,x)])])],8,f)])))),128))]),(0,i.Lk)("nav",E,[(0,i.Lk)("ul",$,[(0,i.Lk)("li",{class:(0,s.C4)(["page-item",{disabled:1===T.currentPage}])},[1===T.currentPage?((0,i.uX)(),(0,i.CE)("a",{key:0,tabindex:"-1",onClick:t[1]||(t[1]=(0,r.D$)((e=>F.switchPage(T.currentPage-1)),["prevent"])),class:"page-link nature-1 writing-page-group-item rounded-0",href:"#","aria-label":"Previous"},D)):((0,i.uX)(),(0,i.CE)("a",{key:1,onClick:t[2]||(t[2]=(0,r.D$)((e=>F.switchPage(T.currentPage-1)),["prevent"])),class:"page-link nature-1 writing-page-group-item rounded-0",href:"#","aria-label":"Previous"},S))],2),(0,i.Lk)("li",_,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(Math.ceil(F.filtercategories.length/T.limit),((e,t)=>((0,i.uX)(),(0,i.CE)("a",{onClick:(0,r.D$)((t=>F.switchPage(e)),["prevent"]),key:"page"+t,class:(0,s.C4)(["page-link nature-1 writing-page-group-item rounded-0",{"bg-2":T.currentPage===e,"text-white":T.currentPage===e}]),href:"#"},(0,s.v_)(e),11,q)))),128))]),(0,i.Lk)("li",{class:(0,s.C4)(["page-item rounded-0",{disabled:T.currentPage===Math.ceil(F.filtercategories.length/T.limit)}])},[T.currentPage===Math.ceil(F.filtercategories.length/T.limit)?((0,i.uX)(),(0,i.CE)("a",{key:0,tabindex:"-1",onClick:t[3]||(t[3]=(0,r.D$)((e=>F.switchPage(T.currentPage+1)),["prevent"])),class:"page-link nature-1 writing-page-group-item rounded-0",href:"#","aria-label":"Next"},K)):((0,i.uX)(),(0,i.CE)("a",{key:1,onClick:t[4]||(t[4]=(0,r.D$)((e=>F.switchPage(T.currentPage+1)),["prevent"])),class:"page-link nature-1 writing-page-group-item rounded-0",href:"#","aria-label":"Next"},I))],2)])])])])])],64)}a(4114),a(7642),a(8004),a(3853),a(5876),a(2475),a(5024),a(1698);var N={data(){return{pagination:{},products:[],categories:[],selectedCategory:"",isLoading:!1,limit:6,currentPage:1}},methods:{getProducts(){const e="https://vue3-course-api.hexschool.io/api/qq-api/products/all";this.$http.get(e).then((e=>{console.log("產品列表",e),this.pagination=e.data.pagination,this.products=e.data.products,this.getCategories()}))},getCategories(){const e=new Set;this.products.forEach((t=>{e.add(t.category)})),this.categories=[...e]},selectedCategories(e){this.selectedCategory=e,this.currentPage=1},switchPage(e=1){this.currentPage=e,console.log(this.currentPage)},addToCart(e){const t="https://vue3-course-api.hexschool.io/api/qq-api/cart",a={product_id:e.id,qty:1};this.$http.post(t,{data:a}).then((e=>{console.log("addToCart",e),this.emitter.emit("resetCart")}))},getProduct(e){this.$router.push(`/products/${e}`)}},computed:{filtercategories(){return this.selectedCategory?this.products.filter((e=>e.category.match(this.selectedCategory))):this.products},filterPageData(){return this.filtercategories.slice(this.currentPage*this.limit-this.limit,this.currentPage*this.limit)}},created(){this.getProducts()}},A=a(1241);const U=(0,A.A)(N,[["render",M]]);var z=U}}]);
//# sourceMappingURL=167.51cba4f8.js.map