(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1b8i":function(e,t,n){"use strict";var r=n("s8DI"),c=n("da4L"),a=n("ERkP");t.a=function useTimedMessages(e,t){var n=Object(a.useState)(function(){return e}),u=Object(r.a)(n,2),i=u[0],o=u[1],s=Object(a.useRef)(t),f=Object(a.useRef)(null);return Object(a.useEffect)(function(){if(t){if(e!==i){var n=i.length;if(0===e.length&&n>0)o([]);else{if(s.current!==t||n===e.length)return s.current=t,void o(e);var r=function pushMessage(){return o(e.slice(0,n+1))},a=e[n];if(!(Date.now()-a.createdAt>6e4||Object(c.h)(a)||Object(c.i)(a)))return f.current=window.setTimeout(function(){f.current=null,r()},600),function(){f.current&&window.clearTimeout(f.current)};r()}}}else i.length>0&&o([])},[e,i,t]),i}},"6fy/":function(e,t,n){"use strict";var r=n("kXeL"),c=n.n(r),a=n("LVcX"),u=n("ERkP"),i=n("Tr4L"),o=n("uDfI");t.a=function useUserResolution(){var e=Object(i.a)().t,t=Object(o.c)(function(e){return e.session.endUser});return Object(u.useMemo)(function(){return{id:t.id,name:Object(a.a)(e("user.self"),["name"],t),avatar:Object(a.a)(c.a,["socialProfile","avatar"],t),email:Object(a.a)(null,["socialProfile","email"],t)}},[t,e])}},"6rzO":function(e,t,n){"use strict";var r=n("WwEg"),c=n("s8DI"),a=n("0B8E"),u=n("ERkP");t.a=function usePasteFiles(e){var t=e.inputRef,n=Object(u.useState)([]),i=Object(c.a)(n,2),o=i[0],s=i[1],f=Object(u.useState)(null),l=Object(c.a)(f,2),b=l[0],O=l[1],v=Object(u.useCallback)(function(e){if(e.clipboardData&&e.clipboardData.files){var t=Object(r.a)(e.clipboardData.files);t.length&&s(Object(a.a)([].concat(Object(r.a)(o),Object(r.a)(t)))),t.length&&O(e.clipboardData.getData("Text"))}},[o]);return Object(u.useEffect)(function(){t&&(t.current.onpaste=v)},[t,v]),{pastedTextFromFiles:b,pastedFiles:o,clearFiles:function clearFiles(){s([]),O(null)}}}},"8Epr":function(e,t,n){"use strict";var r=n("SFoa"),c=n("LVcX"),a=n("uDfI"),u=n("Nlet"),i=n("EQxi");t.a=function useResolvePrivacy(){var e=Object(a.c)(function(e){return Object(c.a)({},["embed","configuration","dataProtection"])(e)}),t=Object(u.c)().locale,n=function resolvePolicy(){if(!e.policies)return{};var n=Object(r.h)(),a=e.default||"en",u=n?Object(r.e)():t||a,i=n?e.policies[a]:e.policies[u]||{};return Object(c.a)(i,[u])(e.policies)}(),o=n.privacyPolicyLink,s=n.privacyPolicyLinkText,f=n.privacyPolicyAlwaysOn,l=!o||!s||!(void 0!==f&&f);return{privacyPolicyLink:Object(i.d)(o),privacyPolicyLinkText:s,noPolicy:l}}},"97O6":function(e,t){e.exports="data:image/png;base64,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"},FJN1:function(e,t,n){"use strict";n.d(t,"a",function(){return useChatTakeoverStyles});var r=n("uDfI"),c=n("6wvX");function useChatTakeoverStyles(){var e=Object(c.a)();return!!Object(r.c)(function(e){return e.view.isChatTakeover})&&!e}},Gxm1:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var r=n("QtlZ"),c=n("LVcX"),a=n("0lfv"),u=n("CYoe"),i=function markTime(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();r.a.dispatch(Object(u.c)(e,t))},o=function measureTime(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),n=Object(c.a)(null,["metrics","timeByName",e],r.a.getState());return n?(r.a.dispatch(Object(u.a)(e)),t-n):(Object(a.n)({type:"warn",data:['Tried to measure "'.concat(e,'" without mark')]}),null)}},NCI6:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("mj2O"),c=n.n(r),a=n("7SM1"),u=n("7oto"),i=function(){var e=Object(a.a)(c.a.mark(function _callee(){var e,t,n,r,a=arguments;return c.a.wrap(function _callee$(c){for(;;)switch(c.prev=c.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",c.next=3,Object(u.a)({topic:"access-host-window",message:{key:"location"}});case 3:return t=c.sent,n=t.data,r=void 0===n?{}:n,c.abrupt("return","https://drift.com?utm_source=".concat(r.host,"&utm_medium=web-widget&utm_campaign=widget-referral&utm_content=").concat(e));case 7:case"end":return c.stop()}},_callee)}));return function getDriftUrl(){return e.apply(this,arguments)}}()},"P+wr":function(e,t,n){"use strict";var r=n("mj2O"),c=n.n(r),a=n("7SM1"),u=n("s8DI"),i=n("UXBQ"),o=n("K7i0"),s=n("LVcX"),f=n("ERkP"),l=n("uDfI"),b=n("vwUF");t.a=function useAttachmentUpload(e){var t=e.onAttachmentUploadComplete,n=e.activeConversation,r=Object(l.b)(),O=Object(f.useState)(b.b.NONE),v=Object(u.a)(O,2),j=v[0],d=v[1],p=Object(l.c)(function(e){return Object(s.a)(!1,["embed","configuration","theme"],e)}).allowEndUserFileUpload,g=Object(f.useCallback)(function(){var e=Object(a.a)(c.a.mark(function _callee(e){var a,u,s,f;return c.a.wrap(function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(p){c.next=2;break}return c.abrupt("return");case 2:if(j!==b.b.ERROR){c.next=4;break}return c.abrupt("return");case 4:return d(b.b.PENDING),a=e.filter(function(e){return e.size<b.a.DEFAULT}).map(function(e){return Object(i.b)(e,n)}),c.prev=6,c.next=9,Promise.all(a);case 9:u=c.sent,s=u.map(function(e){return e.data}),f=s.map(function(e){return e.id}),r(Object(o.e)({attachments:s})),t(f),d(b.b.NONE),c.next=20;break;case 17:c.prev=17,c.t0=c.catch(6),d(b.b.ERROR);case 20:case"end":return c.stop()}},_callee,null,[[6,17]])}));return function(t){return e.apply(this,arguments)}}(),[n,p,j,r,t]);return{attachmentState:j,uploadAttachments:g,resetAttachmentState:function resetAttachmentState(){d(b.b.NONE)}}}},UAQ6:function(e,t,n){"use strict";var r=n("LVcX"),c=n("uDfI");t.a=function useEmbedLocale(){return Object(c.c)(function(e){return Object(r.a)("en",["embed","configuration","locale"],e)})}},Vk0e:function(e,t,n){"use strict";var r=n("mj2O"),c=n.n(r),a=n("7SM1"),u=n("s8DI"),i=n("TDUE"),o=n("ERkP"),s=n("uDfI"),f=n("gG69");t.a=function useTrackImpressionOnce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.c.LIVE_CHAT,t=Object(o.useState)(!1),n=Object(u.a)(t,2),r=n[0],l=n[1],b=Object(s.c)(function(e){return e.view}).chatOpen;Object(o.useEffect)(function(){!function(){var t=Object(a.a)(c.a.mark(function _callee(){var t;return c.a.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:if(!b||r){n.next=5;break}return n.next=3,Object(i.d)(e);case 3:t=n.sent,l(t);case 5:case"end":return n.stop()}},_callee)}));return function trackImpression(){return t.apply(this,arguments)}}()()},[r,b,e])}},ey6Y:function(e,t,n){"use strict";var r=n("58kB"),c=n("Tr4L");t.a=function useMeetingRecipients(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(c.a)().t,a=Object(r.a)(e).recipient;return a.id?t.length?n("meeting.recipients",{name:a.name,others:t.length}):"".concat(a.name):""}},fJpD:function(e,t,n){"use strict";var r=n("da4L"),c=n("LVcX"),a=n("ERkP"),u=n("uDfI");t.a=function useMeetingMessageInfo(e){var t=Object(u.c)(function(t){var n=t.conversations.activeConversation;return Object(c.a)(null,["messages",n,e],t.conversations)});return Object(a.useMemo)(function(){var e=Object(r.a)(t,"appointmentInfo"),n=function getMeetingRecipients(e){return Object(r.a)(e,"presentSchedule")||Object(r.a)(e,"scheduleMeetingWith")}(t),a=Array.isArray(n)&&n.length>1;return{shouldPresentSchedulingCard:!!Object(r.a)(t,"presentSchedule"),shouldPresentConfirmationCard:!!e,additionalAgents:Object(r.a)(t,"additionalAgents")||Object(c.a)([],["additionalAgents"],e),meetingRecipientAgents:a?n:[n],isCompanyMeeting:a,meetingType:Object(r.a)(t,"meetingType"),orgMeetingType:Object(r.a)(t,"meetingSlug"),meetingSource:Object(r.a)(t,"meetingSource"),isFromBotFlow:Object(r.e)(t,"interactionId"),schedulingAgentId:Object(r.a)(t,"bookedByUserId")||Object(r.a)(t,"offerSchedule"),appointmentInfo:Object(r.a)(t,"appointmentInfo")}},[t])}},fJrp:function(e,t,n){"use strict";var r=n("ERkP");t.a=function usePrevious(e){var t=Object(r.useRef)();return Object(r.useEffect)(function(){t.current=e},[e]),t.current}},fL0f:function(e,t,n){"use strict";var r=n("LVcX"),c=n("uDfI");t.a=function useEmbedThemeProperties(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(c.c)(function(e){return Object(r.a)({},["embed","configuration","theme"],e)});return e.map(function(e){return t[e]})}},fpJs:function(e,t,n){"use strict";var r=n("uDfI"),c=n("8Epr"),a=function showBrandingSelector(e){return e.embed.configuration.showBranding||!1};t.a=function useHasFooter(){var e=Object(r.c)(a),t=Object(c.a)().noPolicy;return e||!t}},fw6E:function(e,t,n){"use strict";var r=n("SFoa"),c=n("g6eD"),a=n("ERkP"),u=n("uDfI");t.a=function useConversationHistoryToggle(){var e=Object(u.b)(),t=Object(u.c)(function(e){return Object(r.f)(e.embed,"conversationHistoryEnabled",!0)}),n=Object(u.c)(function(e){return e.view.conversationHistoryOpen});return{onToggleConversationHistory:Object(a.useCallback)(function(t){e(Object(c.h)({conversationHistoryOpen:t}))},[e]),conversationHistoryOpen:n,conversationHistoryEnabled:t}}},gRD2:function(e,t,n){"use strict";var r=n("mj2O"),c=n.n(r),a=n("7SM1"),u=n("mssF"),i=n("K7i0"),o=n("xwTo"),s=n("LVcX"),f=n("ERkP"),l=n("uDfI"),b=n("0lfv");t.a=function useFetchActiveConverationMessages(){var e=Object(l.b)(),t=Object(l.c)(o.a),n=Object(l.c)(o.c);return{fetchMessages:Object(f.useCallback)(function(){var r=Object(a.a)(c.a.mark(function _callee(r){var a,o,f,l,O,v;return c.a.wrap(function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(a=r.limit,o=void 0===a?30:a,f=r.from,l=void 0===f?null:f,!n){c.next=3;break}return c.abrupt("return");case 3:return c.prev=3,c.next=6,Object(u.d)({conversationId:t,limit:o,from:l});case 6:return O=c.sent,v=O.data,e(Object(i.j)({messages:v.data,hasMoreMessages:Object(s.a)(!1,["pagination","more"],v),nextPageMessageId:Object(s.a)(null,["pagination","next"],v),conversationId:t})),c.abrupt("return",v);case 12:c.prev=12,c.t0=c.catch(3),Object(b.f)("Failed to fetch messages",c.t0);case 15:case"end":return c.stop()}},_callee,null,[[3,12]])}));return function(e){return r.apply(this,arguments)}}(),[t,e,n])}}},hhdZ:function(e,t,n){"use strict";var r=n("da4L"),c=n("LVcX"),a=n("i9gz"),u=n("TbSn"),i=n("uDfI");t.a=function useLastMessage(e){var t=Object(i.c)(function(t){return Object(c.a)(null,["conversations","conversations",e,"lastMessage"],t)}),n=Object(i.c)(function(t){var n=Object(c.a)({},["conversations","messages",e],t);if(!Object(a.a)(n)){var i=Object(r.n)(n);if(i.length)return Object(u.a)(i)}return null});return t||n||{}}},jITz:function(e,t,n){"use strict";var r=n("s8DI"),c=n("ERkP"),a=n("0lfv");t.a=function useKeyPress(e){var t=e.ref,n=e.targetKey,u=e.onKeyDown,i=void 0===u?function(){}:u,o=e.onKeyUp,s=void 0===o?function(){}:o,f=Object(c.useState)(!1),l=Object(r.a)(f,2),b=l[0],O=l[1],v=Object(c.useCallback)(function(e){e.key===n&&(O(!0),i(e))},[n,i]),j=Object(c.useCallback)(function(e){e.key===n&&(O(!1),s(e))},[n,s]);return Object(c.useEffect)(function(){var e=Object(a.m)(t)?window:t.current;return e.addEventListener("keydown",v),e.addEventListener("keyup",j),function(){e.removeEventListener("keydown",v),e.removeEventListener("keyup",j)}},[v,t,j]),b}},nvPd:function(e,t,n){"use strict";var r=n("s8DI"),c=n("ERkP");t.a=function useInputValue(e){var t=Object(c.useState)(e),n=Object(r.a)(t,2),a=n[0],u=n[1];return{value:a,onChange:Object(c.useCallback)(function(e){u(e.currentTarget.value)},[])}}},o3t1:function(e,t,n){"use strict";var r=n("s8DI"),c=n("ERkP"),a=n("0lfv"),u=n("6wvX");t.a=function useOnHover(){var e=Object(u.a)(),t=Object(c.useState)(!1),n=Object(r.a)(t,2),i=n[0],o=n[1];return Object(c.useMemo)(function(){return e?{}:{hoverProps:{onMouseOver:function onMouseOver(){return o(!0)},onMouseOut:function onMouseOut(){return o(!1)},onFocus:a.o,onBlur:a.o},isHovered:i}},[e,i])}},tLIi:function(e,t,n){"use strict";var r=n("da4L"),c=n("LVcX"),a=n("i9gz"),u=n("TbSn"),i=n("uDfI");t.a=function useLastAgentMessage(){var e=Object(i.c)(function(e){return e.conversations}).activeConversation,t=Object(i.c)(function(t){return Object(c.a)(null,["conversations","conversations",e,"lastAgentMessage"],t)}),n=Object(i.c)(function(t){var n=Object(c.a)({},["conversations","messages",e],t);if(Object(a.a)(n))return{};var i=Object(r.n)(n).filter(function(e){return"USER"===Object(c.a)(null,["authorType"],e)});return i.length?Object(u.a)(i):void 0});return t||n||{}}},uQkC:function(e,t,n){"use strict";var r=n("qwiD"),c=n("ERkP"),a=n("uDfI"),u=n("7VeV");t.a=function useTypingIndicators(e){var t=e.activeConversationId,n=Object(a.b)(),i=Object(c.useRef)(),o=Object(a.c)(function(e){return e.session.endUser.type}),s=Object(a.c)(function(e){return e.session.endUser.id}),f=Object(c.useCallback)(function(e){n(Object(r.e)("chat","user","typing:".concat(e),{userId:s,userType:o,conversationId:t,participants:[]}))},[t,n,s,o]),l=Object(c.useMemo)(function(){return Object(u.throttle)(5e3,!1,function(){return f("started")})},[f]);return{sendTypingStarted:function sendTypingStarted(){l(),i.current&&window.clearTimeout(i.current),i.current=window.setTimeout(function(){return f("finished")},5e3)},sendTypingFinished:function sendTypingFinished(){i.current&&(window.clearTimeout(i.current),i.current=null),f("finished")}}}},vLHT:function(e,t,n){"use strict";var r=n("fTFZ"),c=n("xwTo"),a=n("da4L"),u=n("i9gz"),i=n("TbSn"),o=n("kNJ0"),s=n("ERkP"),f=n("uDfI");t.a=function useComposerState(){var e=Object(f.c)(c.d),t=Object(f.c)(c.e);return Object(s.useMemo)(function(){if(e)return r.a.UNAVAILABLE;if(Object(u.a)(t))return r.a.AVAILABLE;var n=Object(i.a)(t),c=Object(o.a)(-2,t),s=Object(a.f)(c)&&Object(a.h)(n);return Object(a.f)(n)||s||Object(a.i)(n)?r.a.UNAVAILABLE_BUTTONS:Object(a.k)(n)||Object(a.k)(c)&&Object(a.h)(n)?r.a.AVAILABLE_BUTTONS:r.a.AVAILABLE},[e,t])}},vwUF:function(e,t,n){"use strict";var r,c;n.d(t,"b",function(){return r}),n.d(t,"a",function(){return c}),function(e){e.NONE="NONE",e.PENDING="PENDING",e.ERROR="ERROR",e.SIZE_ERROR="SIZE_ERROR"}(r||(r={})),function(e){e[e.DEFAULT=26214400]="DEFAULT"}(c||(c={}))},xNFZ:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n("Hvhg"),c=n("+f1A"),a=n("Jstd"),u=n("4pou"),i=n("l6A5"),o=n("rAc1"),s=n("0lfv"),f=Object(i.a)(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(o.a)(t)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Object(c.f)();return function getRandomIds(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(Object(s.m)(e))return[];var c=e.filter(function(e){return!e.bot});if(t.length){var i=c.filter(function(e){return!Object(a.a)(function(t){return t===e.id},t)});i.length&&(c=i)}var o=c.filter(function(e){return!!e.avatarUrl});if(o.length&&(c=o),!c.length)return e[0].id;var f=Object(s.g)(c.length,n);return r>c.length&&(r=c.length),f+r>c.length&&(f=c.length-r),Object(u.a)(function(e){return c[f+e].id},r)}(Object(r.e)([],["configuration","team"]),Object(r.e)([],["configuration","doNotDisturbUsers"]),t.sessionStarted,e)})},"xqp/":function(e,t,n){"use strict";var r=n("ERkP"),c=n("7VeV");t.a=function useScroll(e,t){var n=Object(r.useRef)(),a=Object(r.useMemo)(function(){return Object(c.throttle)(250,!1,function(e){n.current&&n.current(e)})},[n]);Object(r.useEffect)(function(){n.current=e},[e]),Object(r.useEffect)(function(){var e=t.current;if(e)return e.addEventListener("scroll",a),function(){e&&e.removeEventListener("scroll",a)}},[t,a])}},y0on:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("0lfv"),c=function getNewMessageAriaLabel(e,t){return Object(r.m)(t)?null:"Chat message".concat(e?" from "+e:"",': "').concat(t,'"')}}}]);