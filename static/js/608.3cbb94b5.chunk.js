"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[608],{4608:function(s,e,t){t.r(e),t.d(e,{default:function(){return ds}});var i=t(5671),o=t(3144),n=t(136),r=t(1129),a=t(2791),l="Profile_profileContainer__GK-ND",u=t(9439),d=t(5987),c="ProfileInfo_profileInfoContainer__9v5Ik",h="ProfileInfo_profileInfoBlock__goYeC",f="ProfileInfo_avatarBlock__21pru",p="ProfileInfo_mainAva__1uJJU",m="ProfileInfo_profileBlock__5piPY",v="ProfileInfo_profileStatus__jnFRU",_="ProfileInfo_profileDataForm__O8l5p",j="ProfileInfo_buttonEditProfile__2LsHa",x=t(184),k=function(s){(0,n.Z)(t,s);var e=(0,r.Z)(t);function t(){var s;(0,i.Z)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(s=e.call.apply(e,[this].concat(n))).state={editMode:!1,status:s.props.status},s.activateEditeMode=function(){s.setState({editMode:!0})},s.deactivateEditeMode=function(){s.setState({editMode:!1}),s.props.updateStatus(s.state.status)},s.onStatusChange=function(e){s.setState({status:e.currentTarget.value})},s}return(0,o.Z)(t,[{key:"componentDidUpdate",value:function(s,e,t){s.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return(0,x.jsxs)("div",{children:[!this.state.editMode&&(0,x.jsx)("div",{children:(0,x.jsx)("span",{onDoubleClick:this.activateEditeMode,children:this.props.status?this.props.status:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})}),this.state.editMode&&(0,x.jsx)("div",{children:(0,x.jsx)("input",{onChange:this.onStatusChange,value:this.state.status,onBlur:this.deactivateEditeMode,autoFocus:!0})})]})}}]),t}(a.Component),P=k,g=t(4353),N=t(2994),b=function(s){var e=s.profile;return(0,x.jsxs)("form",{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full Name"}),": ",(0,N.Gr)("Full name","fullname",[],N.II)]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),(0,x.jsx)("div",{}),(0,x.jsx)("button",{onClick:function(){},children:"save"})]})},y=t(7017),M=t(4410),C=(t(6072),t(4136)),S=function(){return(0,x.jsx)(y.Z,{children:(0,x.jsx)(M.Z,{onChange:function(s){s.target.files[0]&&(0,C.Ju)(s.target.files[0])},children:(0,x.jsx)("div",{style:{color:"white",cursor:"pointer"},children:"+ Add image"})})})},w=["profile","isOwner","savePhoto"],I=function(s){var e=s.profile,t=s.isOwner,i=(s.savePhoto,(0,d.Z)(s,w)),o=(0,a.useState)(!1),n=(0,u.Z)(o,2),r=n[0],l=n[1];return(0,x.jsx)("div",{className:c,children:(0,x.jsxs)("div",{className:h,children:[(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)(S,{}),(0,x.jsx)("img",{src:(null===e||void 0===e?void 0:e.photos.large)||g,className:p})]}),(0,x.jsxs)("div",{className:m,children:[(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)("div",{children:"Status:"}),(0,x.jsx)(P,{status:i.status,updateStatus:i.updateStatus})]}),r?(0,x.jsx)("div",{className:_,children:(0,x.jsx)(b,{profile:e})}):(0,x.jsx)("div",{className:_,children:(0,x.jsx)(A,{goToEditMode:function(){return l(!0)},profile:e,isOwner:t})})]})]})})},A=function(s){var e=s.profile,t=s.isOwner,i=s.goToEditMode;return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full Name"}),": ",e.fullName]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),(0,x.jsx)("div",{}),t&&(0,x.jsx)("button",{onClick:i,className:j,children:"edit"})]})},Z="MyPosts_myPostContainer__3vuVZ",F="MyPosts_addForm__CwT0C",D="MyPosts_formContainer__Vqz3M",J="MyPosts_textArea__M7vK7",B="MyPosts_addPostButton__Lcz4a",E="MyPosts_messageBlock__4JDWJ",L="MyPosts_item__ydHH-",T="MyPosts_paginationBlock__3AASw",U="MyPosts_pagination__NnNu+",O="Post_postContainer__jxQ-s",V="Post_avaBlock__8rQEc",z="Post_ava__wjWVP",G="Post_textBlock__UkJVG",K="Post_name__Xr5Bj",H="Post_message__Qy6Nf",Q="Post_like__wVdVD",q=t(6060),R=function(s){return(0,x.jsxs)("div",{className:O,children:[(0,x.jsx)("div",{className:V,children:(0,x.jsx)("img",{src:s.img,alt:"avatar",className:z})}),(0,x.jsxs)("div",{className:G,children:[(0,x.jsx)("div",{className:K,children:s.name}),(0,x.jsx)("div",{className:H,children:s.post})]}),(0,x.jsx)("img",{src:q,alt:"likePNG",className:Q,onClick:function(){return s.addLike(s.p.id)}})," ",s.likesCount]})},W=t(6139),Y=t(704),$=t(5304),X=t(4415),ss=a.memo((function(s){for(var e=(0,a.useState)(1),t=(0,u.Z)(e,2),i=t[0],o=t[1],n=s.state.postData,r=Math.ceil(n.length/5),l=[],d=1;d<r+1;d++)l.push(d);var c=function(s){if(1===s)return n.slice(0,5);if(s>1){var e=5*s-5,t=5*s;return n.slice(e,t)}}(i),h=c.map((function(e){return(0,x.jsx)("div",{children:(0,x.jsx)(R,{img:e.avatar,name:e.name,post:e.message,likesCount:e.likesCount,buttonName:"Like",addLike:s.addLike,p:e})},e.id)})),f=l.map((function(s,e){var t=i===s?{color:"rgb(211, 181, 91)"}:{};return(0,x.jsx)("span",{className:U,style:t,onClick:function(){return o(s)},children:s},e)}));return(0,x.jsxs)("div",{className:Z,children:[(0,x.jsx)("div",{className:F,children:(0,x.jsx)(ts,{onSubmit:function(e){s.addPost(e.newMessageBody)}})}),(0,x.jsx)("div",{className:E,children:(0,x.jsx)("div",{className:L,children:h})}),(0,x.jsx)("div",{className:T,children:f})]})})),es=(0,$.D)(10),ts=(0,Y.Z)({form:"profileAddMessageForm"})((function(s){var e=(0,X.TL)();return(0,x.jsxs)("form",{onSubmit:s.handleSubmit,className:D,children:[(0,x.jsx)(W.Z,{component:N.Kx,name:"newMessageBody",placeholder:"Enter your message",className:J,validate:[$.C,es],onKeyDown:function(s){13===s.keyCode&&e((0,C.Pi)(s.currentTarget.value))}}),(0,x.jsx)("button",{className:B,children:"AddPost"})]})})),is=t(8687),os=(0,is.$j)((function(s){return{state:s.profile}}),(function(s){return{addPost:function(e){s((0,C.Pi)(e))},addLike:function(e){s((0,C.dE)(e))}}}))(ss),ns=t(4945),rs=function(s){return s.profile?(0,x.jsxs)("div",{className:l,children:[(0,x.jsx)(I,{profile:s.profile,status:s.status,updateStatus:s.updateStatus,isOwner:s.isOwner,savePhoto:s.savePhoto}),(0,x.jsx)(os,{})]}):(0,x.jsx)(ns.Z,{color:"#b70000",size:50})},as=t(9271),ls=t(7781),us=function(s){(0,n.Z)(t,s);var e=(0,r.Z)(t);function t(){return(0,i.Z)(this,t),e.apply(this,arguments)}return(0,o.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.setUserProfileThunk(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,t){this.props.match.params.userId!==s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,x.jsx)(rs,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto})}}]),t}(a.Component),ds=(0,ls.qC)((0,is.$j)((function(s){return{profile:s.profile.profile,status:s.profile.status,authorizedUserId:s.auth.id,isAuth:s.auth.isAuth}}),{setUserProfileThunk:C.TE,getStatus:C.lR,updateStatus:C.Nf,savePhoto:C.Ju}),as.EN)(us)},6060:function(s,e,t){s.exports=t.p+"static/media/like.3bd2642bff63c07e1428.png"}}]);
//# sourceMappingURL=608.3cbb94b5.chunk.js.map