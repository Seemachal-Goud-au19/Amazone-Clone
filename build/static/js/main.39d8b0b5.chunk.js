(this.webpackJsonpreactlive=this.webpackJsonpreactlive||[]).push([[0],{24:function(e,a,t){e.exports=t(44)},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(19),r=t.n(c),m=(t(29),t(30),t(8)),i=t(2),s=t(4),o=(t(31),t(20)),u=t.n(o),d=t(22),E=t.n(d),p=Object(n.createContext)(),g=function(e){var a=e.reducer,t=e.initialState,c=e.children;return l.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},c)},_=function(){return Object(n.useContext)(p)},h=function(){var e=_(),a=Object(s.a)(e,2),t=a[0].basket;a[1];return l.a.createElement("nav",{className:"header"},l.a.createElement(m.b,{to:"/"},l.a.createElement("img",{src:"http://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:"amazon_logo",className:"header_logo"})),l.a.createElement("div",{className:"header_search"},l.a.createElement("input",{className:"header_searchInput"}),l.a.createElement(u.a,{className:"header_searchIcon"})),l.a.createElement("div",{className:"header_nav"},l.a.createElement(m.b,{to:"/",className:"header_link"},l.a.createElement("div",{className:"header_option"},l.a.createElement("span",{className:"header_optionLineOne"},"simachal"),l.a.createElement("span",{className:"header_optionLineTwo"},"sign in"))),l.a.createElement(m.b,{to:"/",className:"header_link"},l.a.createElement("div",{className:"header_option"},l.a.createElement("span",{className:"header_optionLineOne"},"Returns"),l.a.createElement("span",{className:"header_optionLineTwo"},"& orders"))),l.a.createElement(m.b,{to:"/",className:"header_link"},l.a.createElement("div",{className:"header_option"},l.a.createElement("span",{className:"header_optionLineOne"},"Yours"),l.a.createElement("span",{className:"header_optionLineTwo"},"Prime"))),l.a.createElement(m.b,{to:"/checkout",className:"header_link"},l.a.createElement("div",{className:"header_optionBasket"},l.a.createElement(E.a,null),l.a.createElement("span",{className:"header_optionLineTwo header_basketCount"},null===t||void 0===t?void 0:t.length)))))},b=(t(38),t(39),function(e){var a=e.id,t=e.title,n=e.price,c=e.rating,r=e.image,m=_(),i=Object(s.a)(m,2),o=i[0].basket,u=i[1];console.log(o);return l.a.createElement("div",{className:"product"},l.a.createElement("div",{iv:!0,className:"product_Info"},l.a.createElement("p",null,t),l.a.createElement("p",{className:"product_price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,n)),l.a.createElement("div",{className:"product_rating"},Array(c).fill().map((function(e){return l.a.createElement("p",null,"\u2b50")})))),l.a.createElement("img",{src:r,alt:"gadget"}),l.a.createElement("button",{onClick:function(){u({type:"ADD_TO_BASKET",item:{id:a,title:t,price:n,rating:c,image:r}})}},"Add to basket"))}),v=function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("img",{className:"home_image",src:"https://m.media-amazon.com/images/I/71-4+6068OL._SX3000_.jpg",alt:"amazonprime"}),l.a.createElement("div",{className:"home_row"},l.a.createElement(b,{id:"966",title:"Bluetooth",price:896,rating:5,image:"https://m.media-amazon.com/images/I/519Jdmsh+yL._AC_UL320_.jpg"}),l.a.createElement(b,{id:"967",title:"wretcher",price:896,rating:5,image:"\thttps://m.media-amazon.com/images/I/61qA3nU0FZL._AC_UL320_.jpg"})),l.a.createElement("div",{className:"home_row"},l.a.createElement(b,{id:"968",title:"Watch",price:896,rating:5,image:"https://m.media-amazon.com/images/I/61xzuXWWozS._AC_UL320_.jpg"}),l.a.createElement(b,{id:"969",title:"Pad",price:896,rating:5,image:"https://m.media-amazon.com/images/I/51GvkrMzQyL._AC_UL320_.jpg"}),l.a.createElement(b,{id:"970",title:"Mobile",price:896,rating:5,image:"https://m.media-amazon.com/images/I/41hN0FP7mOL._AC_UL320_.jpg"})),l.a.createElement("div",{className:"home_row"},l.a.createElement(b,{id:"971",title:"Tool Box",price:896,rating:3,image:"https://m.media-amazon.com/images/I/61sygDYhK2L._AC_UL320_.jpg"})))},N=(t(40),t(41),function(e){var a=e.id,t=e.title,n=e.price,c=e.rating,r=e.image,m=_(),i=Object(s.a)(m,2),o=(i[0].basket,i[1]);return l.a.createElement("div",{className:"basket_Product"},l.a.createElement("img",{className:"basketproduct_Image",src:r,alt:t}),l.a.createElement("div",{className:"basket_productInfo"},l.a.createElement("p",{className:"basket_producttitle"},t),l.a.createElement("p",{className:"basketproduct_price"},l.a.createElement("small",null,"$"),l.a.createElement("strong",null,n)),l.a.createElement("div",{className:"basketproduct_rating"},Array(c).fill().map((function(e){return l.a.createElement("p",null,"\u2b50")}))),l.a.createElement("button",{onClick:function(){o({type:"REMOVE_FROM_BASKET",id:a})}},"Remove")))}),f=t(6);t(42);function k(){var e=_(),a=Object(s.a)(e,1)[0],t=a.basket,n=(a.dipatch,function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)}(t));return console.log(n),l.a.createElement("div",{className:"subtotal"},l.a.createElement("p",null,"SubTotal(",t.length,"):$",n),l.a.createElement("button",null,"Proceed to Checkout"))}function L(){var e=_(),a=Object(s.a)(e,2),t=a[0].basket;a[1];return l.a.createElement("div",{className:"basket"},l.a.createElement("div",{className:"basket_left"},l.a.createElement("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Dec21/Rs1Deal/HUB_PC.jpg",alt:"add",className:"basket_add"}),0==t.length?l.a.createElement("div",null,l.a.createElement("h2",null,"Your basket is empty,Click Add button to add  your list")):l.a.createElement("div",null,l.a.createElement("h2",null,"Your basket "),t.map((function(e){var a=e.id,t=e.title,n=e.price,c=e.rating,r=e.image;return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{id:a,title:t,price:n,rating:c,image:r}))})))),l.a.createElement("div",{className:"basket_right"},t.length>0&&l.a.createElement("div",null,l.a.createElement(k,null))))}var O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(v,null))}),l.a.createElement(i.a,{path:"/checkout",element:l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(L,null))}))))},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),c(e),r(e)}))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,{initialState:{basket:[]},reducer:function(e,a){switch(console.log(a),a.type){case"ADD_TO_BASKET":return{basket:[].concat(Object(f.a)(e.basket),[a.item])};case"REMOVE_FROM_BASKET":return{basket:e.basket.filter((function(e){return e.id!=a.id}))};default:return{state:e}}}},l.a.createElement(O,null))),document.getElementById("root")),A()}},[[24,1,2]]]);
//# sourceMappingURL=main.39d8b0b5.chunk.js.map