(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1v0n":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),l=n("nOHt"),s=n("4lLG"),u=n("3bhu"),r=n("0iUn"),c=n("sLSF"),o=n("MI3g"),d=n("a7VT"),p=n("AT/M"),m=n("Tit0"),h=a.a.createElement,v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={images:e.images,index:0},n.moveLeft=n.moveLeft.bind(Object(p.a)(n)),n.moveRight=n.moveRight.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"moveLeft",value:function(){var e=this.state.index;0===e?this.setState({index:this.state.images.length-1}):this.setState({index:e-1})}},{key:"moveRight",value:function(){var e=this.state.index;e===this.state.images.length-1?this.setState({index:0}):this.setState({index:e+1})}},{key:"render",value:function(){return h("div",{className:"sculpture-photo-container"},h("img",{className:"sculpture-photo",src:this.state.images[this.state.index]}),h("div",{className:"carousal-controls-container"},h("div",{className:"carousal-control",onClick:this.moveLeft},"\u2190"),h("div",{className:"carousal-control",onClick:this.moveRight},"\u2192")))}}]),t}(a.a.Component),f=n("YFqc"),b=n.n(f),g=a.a.createElement,x=function(e){function t(e){var n,i;return Object(r.a)(this,t),(i=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={expanded:null!==(n=i.props.expanded)&&void 0!==n&&n},i.onExpand=i.onExpand.bind(Object(p.a)(i)),i}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onExpand",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){var e=this,t=this.props,n=t.currentSculpture,i=t.sculptures,a=n.price?"Available Sculptures":"Gallery",l=g("div",{className:"sculpture-nav-list"},i.map((function(t,n){return g("li",{key:n},g(b.a,{href:"/p/[id]",as:"/p/".concat(t.title)},g("a",{onClick:e.onExpand},t.title)))})));return g("nav",{role:"navigation"},g("div",{id:"menuToggle"},g("input",{type:"checkbox",id:"menuCheckbox",checked:this.state.expanded,onChange:this.onExpand}),g("span",null),g("span",null),g("span",null),g("ul",{id:"menu"},g("li",null,g(u.a,{color:"white",fontSize:"2.5em"},a)),l,g("hr",null),g("li",null,g(b.a,{href:"/",as:"/"},g("a",null,"Back to Home"))))))}}]),t}(a.a.Component),k=a.a.createElement,O=function(e){return null!==e?s.filter((function(e){return null!==e.price})):s.filter((function(e){return null===e.price}))};t.default=function(){var e,t=Object(l.useRouter)(),n=t.query.id;if("string"!==typeof n)return k("div",null);var i=[],a=!1;"_forSale"===n||"_gallery"===n?("_forSale"===n?i=O(1):"_gallery"===n&&(i=O(null)),e=i[0],a=!0):(e=s.filter((function(e){return e.title===t.query.id}))[0],i=O(e.price));var r=k("p",null,k("b",null,"Medium:")," ",e.medium," | ",k("b",null,"Dimensions:")," ",e.dimensions),c=null;return null!==e.price&&(r=k("p",null,k("b",null,"Medium:")," ",e.medium," | ",k("b",null,"Dimensions:")," ",e.dimensions," | ",k("b",null,"Price:")," ",e.price),c=k("div",null,k("p",null,"To purchase, email anita-sculpts@protonmail(dot)com"))),k("div",{className:"sculpture-page-container"},k(x,{expanded:a,currentSculpture:e,sculptures:i}),k("div",{className:"sculpture-container"},k(v,{images:e.images}),k("div",{className:"sculpture-text-container"},k(u.a,null,e.title),k("div",{className:"sculpture-body-text-container"},r,c))))}},iDY1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p/[id]",function(){return n("1v0n")}])}},[["iDY1",0,2,1,3,4]]]);