(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{97:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return u})),n.d(a,"rightToc",(function(){return c})),n.d(a,"metadata",(function(){return s})),n.d(a,"default",(function(){return l}));var t=n(1),r=n(6),i=(n(0),n(110)),u={id:"runSaga",title:"runSaga",sidebar_label:"runSaga",hide_title:!0},c=[{value:"Parameters",id:"parameters",children:[{value:"<code>saga</code>",id:"saga",children:[]},{value:"<code>...args</code>",id:"args",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Basic Example",id:"basic-example",children:[]}]}],s={id:"api/runSaga",title:"runSaga",description:"# `runSaga`",source:"@site/docs/api/runSaga.md",permalink:"/queue-for-redux-saga/docs/api/runSaga",sidebar_label:"runSaga",sidebar:"docs",previous:{title:"configureSagaStore",permalink:"/queue-for-redux-saga/docs/api/configureSagaStore"},next:{title:"setSagaRunner",permalink:"/queue-for-redux-saga/docs/api/setSagaRunner"}},o={rightToc:c,metadata:s},d="wrapper";function l(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(t.a)({},o,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"runsaga"},Object(i.b)("inlineCode",{parentName:"h1"},"runSaga")),Object(i.b)("p",null,"Runs a saga, or adds it to the queued sagas to be run, once the Redux Store\nhas been configured with a sagaMiddleware instance."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Before ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"/queue-for-redux-saga/docs/api/setSagaRunner"}),Object(i.b)("inlineCode",{parentName:"a"},"setSagaRunner"))," is called, ",Object(i.b)("inlineCode",{parentName:"li"},"runSaga")," will queue the Saga."),Object(i.b)("li",{parentName:"ul"},"When ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"/queue-for-redux-saga/docs/api/setSagaRunner"}),Object(i.b)("inlineCode",{parentName:"a"},"setSagaRunner"))," is called all queued Sagas will be run."),Object(i.b)("li",{parentName:"ul"},"After ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"/queue-for-redux-saga/docs/api/setSagaRunner"}),Object(i.b)("inlineCode",{parentName:"a"},"setSagaRunner"))," is called, ",Object(i.b)("inlineCode",{parentName:"li"},"runSaga")," delegates to the runner.\nThe runner is an object with a run function, which is usually the ",Object(i.b)("a",{href:"https://redux-saga.js.org/docs/api/",target:"_blank"},"run")," function of the sagaMiddleware instance used to configure the Redux Store.")),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("h3",{id:"saga"},Object(i.b)("inlineCode",{parentName:"h3"},"saga")),Object(i.b)("p",null,"The Saga generator function to be run."),Object(i.b)("h3",{id:"args"},Object(i.b)("inlineCode",{parentName:"h3"},"...args")),Object(i.b)("p",null,"Optional - Arguments to be passed to the Saga."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"basic-example"},"Basic Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import { runSaga } from '@vmw/queue-for-redux-saga';\n\nrunSaga(function* loadSomethingWatch() {\n  yield takeEvery(LOAD_SOMETHING, loadSomethingWorker);\n});\n\n...\n")))}l.isMDXComponent=!0}}]);