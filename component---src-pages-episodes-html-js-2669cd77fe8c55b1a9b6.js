(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9eSz":function(e,t,a){"use strict";var i=a("5NKs");t.__esModule=!0,t.default=void 0;var s,r=i(a("XEEL")),l=i(a("v06X")),o=i(a("uDP2")),d=i(a("j8BX")),n=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var g=function(e,t){(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver((function(e){e.forEach((function(e){h.forEach((function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t[0]),t[1]())}))}))}),{rootMargin:"200px"})),s).observe(e),h.push([e,t])},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",s=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",n=e.opacity?e.opacity:"1";return"<picture>"+i+s+"<img "+o+d+t+l+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+n+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=n.default.forwardRef((function(e,t){var a=e.style,i=e.onLoad,s=e.onError,r=(0,o.default)(e,["style","onLoad","onError"]);return n.default.createElement("img",(0,d.default)({},r,{onLoad:i,onError:s,ref:t,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,s=!1,r=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,s=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,s=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:s,fadeIn:r,hasNoScript:d,seenBefore:o},a.imageRef=n.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,(function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,s=e.style,r=void 0===s?{}:s,l=e.imgStyle,o=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,S=e.Tag,v="boolean"==typeof y?"lightgray":y,w=(0,d.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),E=(0,d.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(h){var I=h;return n.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},n.default.createElement(S,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&n.default.createElement(m,(0,d.default)({src:I.base64},L)),I.tracedSVG&&n.default.createElement(m,(0,d.default)({src:I.tracedSVG},L)),v&&n.default.createElement(S,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&n.default.createElement("picture",null,I.srcSetWebp&&n.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),n.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),n.default.createElement(m,{alt:a,title:t,src:I.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,d.default)({alt:a,title:t},I))}}))}if(g){var R=g,j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},r);return"inherit"===r.display&&delete j.display,n.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&n.default.createElement(m,(0,d.default)({src:R.base64},L)),R.tracedSVG&&n.default.createElement(m,(0,d.default)({src:R.tracedSVG},L)),v&&n.default.createElement(S,{title:t,style:{backgroundColor:v,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&n.default.createElement("picture",null,R.srcSetWebp&&n.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),n.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),n.default.createElement(m,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,d.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(n.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:S,sizes:v,fixed:S,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var w=y;t.default=w},V36w:function(e,t,a){"use strict";a.r(t);var i=a("qKvR"),s=(a("q1tI"),a("Wbzz")),r=a("9eSz"),l=a.n(r),o=a("Bl7J"),d=a("vrFN");t.default=function(e){var t=e.data;return Object(i.a)(o.a,null,Object(i.a)(d.a,{title:"Les épisodes de Techologie"}),Object(i.a)("div",null,Object(i.a)("h1",null,"Épisodes"),Object(i.a)("ul",{className:"episodes"},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return Object(i.a)("li",{key:t.id,className:"enlarge-link"},Object(i.a)("div",{className:"image"},Object(i.a)(l.a,{fluid:t.frontmatter.image.childImageSharp.fluid,alt:""})),Object(i.a)("div",{className:"description"},Object(i.a)("p",{class:"episode-label"},"Épisode ",t.frontmatter.episode_number),Object(i.a)("h2",null,Object(i.a)(s.Link,{to:t.fields.slug},t.frontmatter.title)),Object(i.a)("p",null,t.frontmatter.people)))})))))}}}]);
//# sourceMappingURL=component---src-pages-episodes-html-js-2669cd77fe8c55b1a9b6.js.map