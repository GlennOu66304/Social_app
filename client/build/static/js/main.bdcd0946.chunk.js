(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,s,t){},101:function(e,s,t){},102:function(e,s,t){},103:function(e,s,t){},104:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),n=t(47),r=t.n(n),i=t(4),l=t(32),o=t(18),j=function(e,s){switch(s.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:s.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:s.payload};case"FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{user:Object(o.a)(Object(o.a)({},e.user),{},{followings:[].concat(Object(l.a)(e.user.followings),[s.payload])})});case"UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{user:Object(o.a)(Object(o.a)({},e.user),{},{followings:e.user.followings.filter((function(e){return e!==s.payload}))})});default:return e}},d=t(0),u={user:{_id:"60c41de459a6986f7deaee08",username:"jane",email:"889@gmail.com",profilePicture:"/person/1.jpeg",coverPicture:"",isAdmin:!1,followers:[],followings:[1,2]},isFetching:!1,error:!1},b=Object(a.createContext)(u),m=function(e){var s=e.children,t=Object(a.useReducer)(j,u),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(d.jsx)(b.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:s})},p=(t(60),t(118)),h=t(119),O=t(120),x=t(121),f=t(17);function g(){var e=Object(a.useContext)(b).user,s="https://8.210.83.206:8800/images/";return Object(d.jsxs)("div",{className:"topbarContainer",children:[Object(d.jsx)("div",{className:"topbarLeft",children:Object(d.jsx)(f.b,{to:"/",style:{textDecoration:"none"},children:Object(d.jsx)("span",{className:"logo",children:"Lama Social"})})}),Object(d.jsx)("div",{className:"topbarCenter",children:Object(d.jsxs)("div",{className:"searchBar",children:[Object(d.jsx)(p.a,{className:"searchIcon"}),Object(d.jsx)("input",{placeholder:"Search for friend, video ,post",className:"searchInput"})]})}),Object(d.jsxs)("div",{className:"topbarRight",children:[Object(d.jsxs)("div",{className:"topbarLinks",children:[Object(d.jsx)("span",{className:"topbarLink",children:"Homepage"}),Object(d.jsx)("span",{className:"topbarLink",children:"Timeline"})]}),Object(d.jsxs)("div",{className:"topbarIcons",children:[Object(d.jsxs)("div",{className:"topbarIconItem",children:[Object(d.jsx)(h.a,{}),Object(d.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(d.jsxs)("div",{className:"topbarIconItem",children:[Object(d.jsx)(O.a,{}),Object(d.jsx)("span",{className:"topbarIconBadge",children:"2"})]}),Object(d.jsxs)("div",{className:"topbarIconItem",children:[Object(d.jsx)(x.a,{}),Object(d.jsx)("span",{className:"topbarIconBadge",children:"3"})]})]}),Object(d.jsx)(f.b,{to:"/profile/".concat(e.username),children:Object(d.jsx)("img",{src:e.profilePicture?s+e.profilePicture:s+"person/noAvatar.png",alt:"",className:"topbarImg"})})]})]})}t(70);var v=t(122),N=t(123),I=t(124),w=t(125),L=t(126),y=t(127),k=t(128),C=t(129);t(71);function F(e){var s=e.user;return Object(d.jsxs)("li",{className:"sidebarFriend",children:[Object(d.jsx)("img",{className:"sidebarFriendImg",src:"https://8.210.83.206:8800/images/"+s.profilePicture,alt:""}),Object(d.jsx)("span",{className:"sidebarFriendName",children:s.username})]})}var P=[{id:1,profilePicture:"person/1.jpeg",username:"Safak Kocaoglu"},{id:2,profilePicture:"person/2.jpeg",username:"Janell Shrum"},{id:3,profilePicture:"person/3.jpeg",username:"Alex Durden"},{id:4,profilePicture:"person/4.jpeg",username:"Dora Hawks"},{id:5,profilePicture:"person/5.jpeg",username:"Thomas Holden"},{id:6,profilePicture:"person/6.jpeg",username:"Shirley Beauchamp"},{id:7,profilePicture:"person/7.jpeg",username:"Travis Bennett"},{id:8,profilePicture:"person/8.jpeg",username:"Kristen Thomas"},{id:9,profilePicture:"person/9.jpeg",username:"Gary Duty"},{id:10,profilePicture:"person/10.jpeg",username:"Safak Kocaoglu"}];function S(){return Object(d.jsx)("div",{className:"sideBar",children:Object(d.jsxs)("div",{className:"sidebarWrapper",children:[Object(d.jsxs)("ul",{className:"sidebarList",children:[Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(v.a,{className:"sidebarIcon"}),Object(d.jsx)("span",{className:"sidebarListItemText",children:"Feed"})]}),Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(O.a,{className:"sidebarIcon"}),Object(d.jsx)("span",{className:"sidebarListItemText",children:"Chats"})]}),Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(N.a,{className:"sidebarIcon"}),Object(d.jsx)("span",{className:"sidebarListItemText",children:"Videos"})]}),Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(I.a,{className:"sidebarIcon"}),Object(d.jsx)("span",{className:"sidebarListItemText",children:"Groups"})]}),Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(w.a,{className:"sidebarIcon"}),Object(d.jsx)("span",{className:"sidebarListItemText",children:"Bookmarks"})]}),Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(L.a,{className:"sidebarIcon"}),Object(d.jsx)("span",{className:"sidebarListItemText",children:"Questions"})]}),Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(y.a,{className:"sidebarIcon"}),Object(d.jsx)("span",{className:"sidebarListItemText",children:"Jobs"})]}),Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(k.a,{className:"sidebarIcon"}),Object(d.jsx)("span",{className:"sidebarListItemText",children:"Events"})]}),Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(C.a,{className:"sidebarIcon"}),Object(d.jsx)("span",{className:"sidebarListItemText",children:"Courses"})]})]}),Object(d.jsx)("button",{className:"sidebarButton",children:"show more"}),Object(d.jsx)("hr",{className:"sidebarHr"}),Object(d.jsx)("ul",{className:"sidebarFriendList",children:P.map((function(e){return Object(d.jsx)(F,{user:e},e.id)}))})]})})}var T=t(3),R=t.n(T),B=t(7),_=(t(73),t(130)),U=t(11),D=t.n(U),A=t(31);function E(e){var s=e.post,t=Object(a.useState)(s.likes.length),c=Object(i.a)(t,2),n=c[0],r=c[1],l=Object(a.useState)(!1),o=Object(i.a)(l,2),j=o[0],u=o[1],m=Object(a.useState)({}),p=Object(i.a)(m,2),h=p[0],O=p[1],x="https://8.210.83.206:8800/images/",g=Object(a.useContext)(b).user,v=D.a.create({baseURL:"https://8.210.83.206:8800/api"});Object(a.useEffect)((function(){u(s.likes.includes(g._id))}),[g._id,s.likes]),Object(a.useEffect)((function(){(function(){var e=Object(B.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/users?userId=".concat(s.userId));case 2:t=e.sent,O(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s.userId]);return Object(d.jsx)("div",{className:"post",children:Object(d.jsxs)("div",{className:"postWrapper",children:[Object(d.jsxs)("div",{className:"postTop",children:[Object(d.jsxs)("div",{className:"postTopLeft",children:[Object(d.jsxs)(f.b,{to:"profile/".concat(h.username),children:[" ",Object(d.jsx)("img",{className:"postProfileImg",src:h.profilePicture?x+h.profilePicture:x+"person/noAvatar.png",alt:""})]}),Object(d.jsx)("span",{className:"postUserName",children:h.username}),Object(d.jsx)("span",{className:"postDate",children:Object(A.a)(s.createdAt)})]}),Object(d.jsx)("div",{className:"postTopRight",children:Object(d.jsx)(_.a,{})})]}),Object(d.jsxs)("div",{className:"postCenter",children:[Object(d.jsx)("span",{className:"postText",children:null===s||void 0===s?void 0:s.desc}),Object(d.jsx)("img",{className:"postImg",src:x+s.img,alt:""})]}),Object(d.jsxs)("div",{className:"postBottom",children:[Object(d.jsxs)("div",{className:"postBottomLeft",children:[Object(d.jsx)("img",{className:"likeIcon",src:"".concat(x,"like.png"),alt:"",onClick:function(){try{v.put("/posts/"+s._id+"/like",{userId:g._id})}catch(e){}r(j?n-1:n+1),u(!j)}}),Object(d.jsx)("img",{className:"likeIcon",src:"".concat(x,"heart.png"),alt:""}),Object(d.jsxs)("span",{className:"postLikeCounter",children:[n," people like it"]})]}),Object(d.jsx)("div",{className:"postBottomRight",children:Object(d.jsxs)("span",{className:"postCommentText",children:[s.comment," comments"]})})]})]})})}t(92);var W=t(131),J=t(132),G=t(133),q=t(134),K=t(135);function M(){var e=Object(a.useContext)(b).user,s="https://8.210.83.206:8800/images/",t=Object(a.useRef)(),c=Object(a.useState)(null),n=Object(i.a)(c,2),r=n[0],l=n[1],o=D.a.create({baseURL:"https://8.210.83.206:8800/api"}),j=function(){var s=Object(B.a)(R.a.mark((function s(a){var c,n,i;return R.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.preventDefault(),c={userId:e._id,desc:t.current.value},!r){s.next=16;break}return n=new FormData,i=Date.now()+r.name,n.append("name",i),n.append("file",r),c.img=i,s.prev=8,s.next=11,o.post("/upload",n);case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(8),console.log(s.t0);case 16:return s.prev=16,s.next=19,o.post("/posts",c);case 19:window.location.reload(),s.next=24;break;case 22:s.prev=22,s.t1=s.catch(16);case 24:case"end":return s.stop()}}),s,null,[[8,13],[16,22]])})));return function(e){return s.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"share",children:Object(d.jsxs)("div",{className:"shareWrapper",children:[Object(d.jsxs)("div",{className:"shareTop",children:[Object(d.jsx)("img",{className:"shareProfileImg",src:e.profilePicture?s+e.profilePicture:s+"/person/noAvatar.png",alt:""}),Object(d.jsx)("input",{className:"shareInput",placeholder:"what's in your mind "+e.username+"?",ref:t})]}),Object(d.jsx)("hr",{className:"shareHr"}),r&&Object(d.jsxs)("div",{className:"shareImgContainer",children:[Object(d.jsx)("img",{className:"shareImg",src:URL.createObjectURL(r),alt:""}),Object(d.jsx)(W.a,{className:"shareCancelImg",onClick:function(){return l(null)}})]}),Object(d.jsxs)("form",{className:"shareBottom",onSubmit:j,children:[Object(d.jsxs)("div",{className:"shareOptions",children:[Object(d.jsxs)("label",{htmlFor:"file",className:"shareOption",children:[Object(d.jsx)(J.a,{htmlColor:"tomato",className:"shareIcon"}),Object(d.jsx)("span",{className:"shareOptionText",children:"Photo or Video"}),Object(d.jsx)("input",{style:{display:"none"},type:"file",id:"file",accept:".png,.jpeg,.jpg",onChange:function(e){return l(e.target.files[0])}})]}),Object(d.jsxs)("div",{className:"shareOption",children:[Object(d.jsx)(G.a,{htmlColor:"blue",className:"shareIcon"}),Object(d.jsx)("span",{className:"shareOptionText",children:"Tags"})]}),Object(d.jsxs)("div",{className:"shareOption",children:[Object(d.jsx)(q.a,{htmlColor:"green",className:"shareIcon"}),Object(d.jsx)("span",{className:"shareOptionText",children:"Locations"})]}),Object(d.jsxs)("div",{className:"shareOption",children:[Object(d.jsx)(K.a,{htmlColor:"goldenrod",className:"shareIcon"}),Object(d.jsx)("span",{className:"shareOptionText",children:"Feelings"})]})]}),Object(d.jsx)("button",{className:"shareButton",type:"submit",children:"share"})]})]})})}t(93);function H(e){var s=e.username,t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],r=c[1],l=Object(a.useContext)(b).user,o=D.a.create({baseURL:"https://8.210.83.206:8800/api"});return Object(a.useEffect)((function(){(function(){var e=Object(B.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=6;break}return e.next=3,o.get("/posts/profile/"+s);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,o.get("posts/timeline/"+l._id);case 8:e.t0=e.sent;case 9:t=e.t0,r(t.data.sort((function(e,s){return new Date(s.createdAt)-new Date(e.createdAt)})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s,l._id]),Object(d.jsx)("div",{className:"feed",children:Object(d.jsxs)("div",{className:"feedContainer",children:[(!s||s===l.username)&&Object(d.jsx)(M,{}),n.map((function(e){return Object(d.jsx)(E,{post:e},e._id)}))]})})}t(94);function V(e){var s=e.user;return Object(d.jsxs)("li",{className:"rightbarFriend",children:[Object(d.jsxs)("div",{className:"rightbarProfileImgContainer",children:[Object(d.jsx)("img",{className:"rightbarFriendImg",src:"https://8.210.83.206:8800/images/"+s.profilePicture,alt:""}),Object(d.jsx)("span",{className:"rightbarOnline"})]}),Object(d.jsx)("span",{className:"rightbarUserName",children:s.username})]})}t(95);var X=t(136),Z=t(137);function z(e){var s=e.user,t="https://8.210.83.206:8800/images/",c=Object(a.useState)([]),n=Object(i.a)(c,2),r=n[0],l=n[1],o=Object(a.useContext)(b),j=o.user,u=o.dispatch,m=Object(a.useState)(j.followings.includes(null===s||void 0===s?void 0:s.id)),p=Object(i.a)(m,2),h=p[0],O=p[1],x=D.a.create({baseURL:"https://8.210.83.206:8800/api"});Object(a.useEffect)((function(){O(j.followings.includes(null===s||void 0===s?void 0:s.id))}),[j,s]),Object(a.useEffect)((function(){(function(){var e=Object(B.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/users/friends/"+s._id);case 3:t=e.sent,l(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[s]);var g=function(){var e=Object(B.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!h){e.next=7;break}return e.next=4,x.put("/users/"+s._id+"/unfollow",{userId:j._id});case 4:u({type:"UNFOLLOW",payload:s._id}),e.next=10;break;case 7:return e.next=9,x.put("/users/"+s._id+"/follow",{userId:j._id});case 9:u({type:"FOLLOW",payload:s._id});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:O(!h);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),v=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"birthdayContainer",children:[Object(d.jsx)("img",{className:"birthdayImg",src:t+"gift.png",alt:""}),Object(d.jsxs)("span",{className:"birthdayText",children:[Object(d.jsx)("b",{children:"Pola Foster"})," and",Object(d.jsx)("b",{children:" 3 other friends"}),"  have a birthday today."]})]}),Object(d.jsx)("img",{className:"rightbarAd",src:t+"ad.png",alt:""}),Object(d.jsx)("h4",{className:"rightbarTitle",children:"Online Frineds"}),Object(d.jsx)("ul",{className:"rightbarFriendList",children:P.map((function(e){return Object(d.jsx)(V,{user:e},e.id)}))})]})},N=function(){var e="https://8.210.83.206:8800/images/";return Object(d.jsxs)(d.Fragment,{children:[s.username!==j&&Object(d.jsxs)("button",{className:"rightbarFollowButton",onClick:g,children:[h?"unfollow":"Follow",h?Object(d.jsx)(X.a,{}):Object(d.jsx)(Z.a,{})]}),Object(d.jsx)("h4",{className:"rightbarTitle",children:" User Information"}),Object(d.jsxs)("div",{className:"rightbarInfo",children:[Object(d.jsxs)("div",{className:"rightbarInfoItem",children:[Object(d.jsx)("span",{className:"rightbarInfoKey",children:"City:"}),Object(d.jsx)("span",{className:"rightbarInfovalue",children:s.city})]}),Object(d.jsxs)("div",{className:"rightbarInfoItem",children:[Object(d.jsx)("span",{className:"rightbarInfoKey",children:"From:"}),Object(d.jsx)("span",{className:"rightbarInfovalue",children:s.from})]}),Object(d.jsxs)("div",{className:"rightbarInfoItem",children:[Object(d.jsx)("span",{className:"rightbarInfoKey",children:"Relationship:"}),Object(d.jsx)("span",{className:"rightbarInfovalue",children:1===s.relationship?"Single":2===s.relationship?"Married":""})]})]}),Object(d.jsx)("h4",{className:"rightbarTitle",children:" User Friends"}),Object(d.jsx)("div",{className:"rightbarFollowings",children:r.map((function(s){return Object(d.jsx)(f.b,{to:"/profile/"+s.username,style:{textDecoration:"none"},children:Object(d.jsxs)("div",{className:"rightbarfollowing",children:[Object(d.jsx)("img",{src:s.profilePicture?e+s.profilePicture:e+"person/noAvatar.png",alt:"",className:"rightbarFollowingImg"}),Object(d.jsxs)("span",{className:"rightbarFollowingName",children:[" ",s.username]})]})})}))})]})};return Object(d.jsx)("div",{className:"rightBar",children:Object(d.jsx)("div",{className:"rightBarWrapper",children:s?Object(d.jsx)(N,{}):Object(d.jsx)(v,{})})})}t(96);function Q(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsxs)("div",{className:"homeContainer",children:[Object(d.jsx)(S,{}),Object(d.jsx)(H,{}),Object(d.jsx)(z,{})]})]})}t(97);var Y=function(){var e=Object(B.a)(R.a.mark((function e(s,t){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOGIN_START"}),e.prev=1,e.next=4,D.a.post("auth/login",s);case 4:a=e.sent,t({type:"LOGIN_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"LOGIN_FAILURE",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(s,t){return e.apply(this,arguments)}}(),$=t(138);function ee(){var e=Object(a.useRef)(),s=Object(a.useRef)(),t=Object(a.useContext)(b),c=t.user,n=t.isFetching,r=t.dispatch;return console.log(c),Object(d.jsx)("div",{className:"login",children:Object(d.jsxs)("div",{className:"loginWrapper",children:[Object(d.jsxs)("div",{className:"loginLeft",children:[Object(d.jsx)("h3",{className:"loginLogo",children:"Lama Social"}),Object(d.jsx)("span",{className:"loginDesc",children:" Connect with the friends and world around you on Lamasocial"})]}),Object(d.jsx)("div",{className:"loginRight",children:Object(d.jsxs)("form",{action:"",className:"loginBox",onSubmit:function(t){t.preventDefault(),Y({email:e.current.value,password:s.current.value},r)},children:[Object(d.jsx)("input",{placeholder:"Email",required:!0,type:"email",className:"loginInput",ref:e}),Object(d.jsx)("input",{placeholder:"password",required:!0,minLength:6,className:"loginInput",type:"password",ref:s}),Object(d.jsx)("button",{className:"loginButton",children:n?Object(d.jsx)($.a,{color:"inherit",size:"20px"}):"Login"}),Object(d.jsx)("span",{className:"loginForget",children:"Forgot Password?"}),Object(d.jsx)("button",{className:"loginRegisterbutton",children:n?Object(d.jsx)($.a,{color:"inherit",size:"20px"}):"Create an account"})]})})]})})}t(98);var se=t(5);function te(){var e=Object(a.useRef)(),s=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=Object(se.f)(),r=D.a.create({baseURL:"https://8.210.83.206:8800/api"}),i=function(){var a=Object(B.a)(R.a.mark((function a(i){var l;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i.preventDefault(),c.current.value===t.current.value){a.next=5;break}t.current.setCustomValidity("password don't match"),a.next=15;break;case 5:return l={username:e.current.value,email:s.current.value,password:t.current.value},a.prev=6,a.next=9,r.post("auth/register",l);case 9:n.push("/login"),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(6),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[6,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"login",children:Object(d.jsxs)("div",{className:"loginWrapper",children:[Object(d.jsxs)("div",{className:"loginLeft",children:[Object(d.jsx)("h3",{className:"loginLogo",children:"Lama Social"}),Object(d.jsx)("span",{className:"loginDesc",children:" Connect with the friends and world around you on Lamasocial"})]}),Object(d.jsx)("div",{className:"loginRight",children:Object(d.jsxs)("form",{className:"loginBox",onSubmit:i,children:[Object(d.jsx)("input",{placeholder:"Username",required:!0,className:"loginInput",ref:e}),Object(d.jsx)("input",{placeholder:"Email",required:!0,type:"email",className:"loginInput",ref:s}),Object(d.jsx)("input",{placeholder:"Password",required:!0,type:"password",minLength:"6",className:"loginInput",ref:t}),Object(d.jsx)("input",{placeholder:"Password Again",required:!0,type:"password",className:"loginInput",ref:c}),Object(d.jsx)("button",{className:"loginButton",type:"submit",children:"Sign Up"}),Object(d.jsx)("button",{className:"loginRegisterbutton",children:"Login to Account"})]})})]})})}t(99);function ae(){var e="https://8.210.83.206:8800/images/",s=Object(a.useState)({}),t=Object(i.a)(s,2),c=t[0],n=t[1],r=Object(se.g)().username,l=D.a.create({baseURL:"https://8.210.83.206:8800/api"});return Object(a.useEffect)((function(){(function(){var e=Object(B.a)(R.a.mark((function e(){var s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("/users/?username=".concat(r));case 2:s=e.sent,n(s.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsx)(S,{}),Object(d.jsxs)("div",{className:"profileRight",children:[Object(d.jsxs)("div",{className:"profileRightTop",children:[Object(d.jsxs)("div",{className:"profileCover",children:[Object(d.jsx)("img",{className:"profileCoverImg",src:c.coverPicture?e+c.coverPicture:e+"person/noCover.png",alt:""}),Object(d.jsx)("img",{className:"profileUserImg",src:c.profilePicture?e+c.profilePicture:e+"person/noAvatar.png",alt:""})]}),Object(d.jsxs)("div",{className:"profileInfo",children:[Object(d.jsx)("h4",{className:"profileInfoName",children:c.username}),Object(d.jsx)("span",{className:"profileInfoDesc",children:c.desc})]})]}),Object(d.jsxs)("div",{className:"profileRightBottom",children:[Object(d.jsx)(H,{username:r}),Object(d.jsx)(z,{user:c})]})]})]})]})}t(100),t(101);function ce(e){var s=e.conversation,t=e.currentUser,c=Object(a.useState)(null),n=Object(i.a)(c,2),r=n[0],l=n[1],o="https://8.210.83.206:8800/images/";return Object(a.useEffect)((function(){var e=s.members.find((function(e){return e!==t._id}));(function(){var s=Object(B.a)(R.a.mark((function s(){var t;return R.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,D()("/users?userId="+e);case 3:t=s.sent,console.log(t),l(t.data),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),console.log(s.t0);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})));return function(){return s.apply(this,arguments)}})()()}),[t,s]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"conversation",children:[Object(d.jsx)("img",{src:(null===r||void 0===r?void 0:r.profilePicture)?o+r.profilePicture:o+"person/noAvatar.png",alt:"",className:"conversationImg"}),Object(d.jsx)("span",{className:"conversationName",children:null===r||void 0===r?void 0:r.username})]})})}t(102);function ne(e){var s=e.message,t=e.own;return Object(d.jsxs)("div",{className:t?"message own":"message",children:[Object(d.jsxs)("div",{className:"messageTop",children:[Object(d.jsx)("img",{src:"http://imagebed1.oss-cn-hongkong.aliyuncs.com/uPic/ZJ4rX3.jpg",alt:"",className:"messageImg"}),Object(d.jsx)("p",{className:"messageText",children:s.text})]}),Object(d.jsx)("div",{className:"messageBottom",children:Object(A.a)(s.createdAt)})]})}t(103);function re(){return Object(d.jsxs)("div",{className:"chatOnline",children:[Object(d.jsxs)("div",{className:"chatOnlineFriend",children:[Object(d.jsxs)("div",{className:"chatOnlineImgContainer",children:[Object(d.jsx)("img",{className:"chatOnlineImg",src:"http://imagebed1.oss-cn-hongkong.aliyuncs.com/uPic/ZJ4rX3.jpg",alt:""}),Object(d.jsx)("div",{className:"chatOnlineBadge"})]}),Object(d.jsx)("span",{className:"chatOnlineName",children:"John Doe"})]}),Object(d.jsxs)("div",{className:"chatOnlineFriend",children:[Object(d.jsxs)("div",{className:"chatOnlineImgContainer",children:[Object(d.jsx)("img",{className:"chatOnlineImg",src:"http://imagebed1.oss-cn-hongkong.aliyuncs.com/uPic/ZJ4rX3.jpg",alt:""}),Object(d.jsx)("div",{className:"chatOnlineBadge"})]}),Object(d.jsx)("span",{className:"chatOnlineName",children:"John Doe"})]}),Object(d.jsxs)("div",{className:"chatOnlineFriend",children:[Object(d.jsxs)("div",{className:"chatOnlineImgContainer",children:[Object(d.jsx)("img",{className:"chatOnlineImg",src:"http://imagebed1.oss-cn-hongkong.aliyuncs.com/uPic/ZJ4rX3.jpg",alt:""}),Object(d.jsx)("div",{className:"chatOnlineBadge"})]}),Object(d.jsx)("span",{className:"chatOnlineName",children:"John Doe"})]})]})}function ie(){var e=Object(a.useState)([]),s=Object(i.a)(e,2),t=s[0],c=s[1],n=Object(a.useContext)(b).user,r=Object(a.useState)(null),o=Object(i.a)(r,2),j=o[0],u=o[1],m=Object(a.useState)([]),p=Object(i.a)(m,2),h=p[0],O=p[1],x=Object(a.useState)([]),f=Object(i.a)(x,2),v=f[0],N=f[1],I=Object(a.useRef)(),w=D.a.create({baseURL:"https://8.210.83.206:8800/api"});Object(a.useEffect)((function(){(function(){var e=Object(B.a)(R.a.mark((function e(){var s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/conversation/"+n._id);case 2:s=e.sent,c(s.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n._id]),Object(a.useEffect)((function(){(function(){var e=Object(B.a)(R.a.mark((function e(){var s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/message/"+(null===j||void 0===j?void 0:j._id));case 3:s=e.sent,O(s.data),console.log(s),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[j]),Object(a.useEffect)((function(){var e;null===(e=I.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[h]),console.log(n),console.log(j);var L=function(){var e=Object(B.a)(R.a.mark((function e(s){var t,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),t={sender:n._id,conversationId:j._id,text:v},e.prev=2,e.next=5,w.post("/message",t);case 5:a=e.sent,O([].concat(Object(l.a)(h),[a.data])),N(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(s){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsxs)("div",{className:"messenger",children:[Object(d.jsx)("div",{className:"chatMenu",children:Object(d.jsxs)("div",{className:"chatMenuWrapper",children:[Object(d.jsx)("input",{className:"chatMenuInput",placeholder:"search for friends"}),t.map((function(e){return Object(d.jsx)("div",{onClick:function(){return u(e)},children:Object(d.jsx)(ce,{conversation:e,currentUser:n},e._id)})}))]})}),Object(d.jsx)("div",{className:"chatBox",children:Object(d.jsx)("div",{className:"chatBoxWrapper",children:j?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"chatBoxTop",children:h.map((function(e){return Object(d.jsx)("div",{ref:I,children:Object(d.jsx)(ne,{message:e,own:e.sender===n._id},e._id)})}))}),Object(d.jsxs)("div",{className:"chatBoxBottom",children:[Object(d.jsx)("textarea",{placeholder:"write something......",className:"chatMessageInput",onChange:function(e){return N(e.target.value)}}),Object(d.jsx)("button",{type:"text",className:"chatSubmitbutton",onClick:L,children:"Send"})]})]}):Object(d.jsx)("span",{className:"noConversationText",children:"open a conversation to start a chat"})})}),Object(d.jsx)("div",{className:"chatOnline",children:Object(d.jsx)("div",{className:"chatOnlineWrapper",children:Object(d.jsx)(re,{})})})]})]})}var le=function(){var e=Object(a.useContext)(b).user;return Object(d.jsx)(f.a,{children:Object(d.jsxs)(se.c,{children:[Object(d.jsx)(se.a,{exact:!0,path:"/",children:e?Object(d.jsx)(Q,{}):Object(d.jsx)(te,{})}),Object(d.jsx)(se.a,{path:"/login",children:Object(d.jsx)(ee,{})}),Object(d.jsx)(se.a,{path:"/register",children:Object(d.jsx)(te,{})}),Object(d.jsx)(se.a,{path:"/messenger",children:Object(d.jsx)(ie,{})}),Object(d.jsx)(se.a,{path:"/profile/:username",children:Object(d.jsx)(ae,{})})]})})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{children:Object(d.jsx)(le,{})})}),document.getElementById("root"))},60:function(e,s,t){},70:function(e,s,t){},71:function(e,s,t){},73:function(e,s,t){},92:function(e,s,t){},93:function(e,s,t){},94:function(e,s,t){},95:function(e,s,t){},96:function(e,s,t){},97:function(e,s,t){},98:function(e,s,t){},99:function(e,s,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.bdcd0946.chunk.js.map