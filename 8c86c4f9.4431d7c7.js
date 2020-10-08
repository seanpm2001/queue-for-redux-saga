(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{98:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"rightToc",(function(){return d})),t.d(a,"metadata",(function(){return g})),t.d(a,"default",(function(){return c}));var u=t(1),s=t(6),n=(t(0),t(110)),r={id:"getQueuedSagas",title:"getQueuedSagas",sidebar_label:"getQueuedSagas",hide_title:!0},d=[{value:"Usage",id:"usage",children:[{value:"Example with 'redux-saga-tester'",id:"example-with-redux-saga-tester",children:[]}]}],g={id:"api/getQueuedSagas",title:"getQueuedSagas",description:"# `getQueuedSagas`",source:"@site/docs/api/getQueuedSagas.md",permalink:"/queue-for-redux-saga/docs/api/getQueuedSagas",sidebar_label:"getQueuedSagas",sidebar:"docs",previous:{title:"setSagaRunner",permalink:"/queue-for-redux-saga/docs/api/setSagaRunner"},next:{title:"clearQueuedSagas",permalink:"/queue-for-redux-saga/docs/api/clearQueuedSagas"}},i={rightToc:d,metadata:g},o="wrapper";function c(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(n.b)(o,Object(u.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"getqueuedsagas"},Object(n.b)("inlineCode",{parentName:"h1"},"getQueuedSagas")),Object(n.b)("p",null,"Returns an array of queued Sagas.",Object(n.b)("br",{parentName:"p"}),"\n","Useful for writing Unit Tests."),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)("h3",{id:"example-with-redux-saga-tester"},"Example with 'redux-saga-tester'"),Object(n.b)("pre",null,Object(n.b)("code",Object(u.a)({parentName:"pre"},{className:"language-ts"}),"import SagaTester from 'redux-saga-tester';\nimport { getQueuedSagas, QueuedSaga } from '@vmw/queue-for-redux-saga';\n\nconst sagaTester = new SagaTester({\n  initialState,\n  reducers: rootReducer,\n});\n\nconst queuedSagas: QueuedSaga[] = getQueuedSagas();\nif (queuedSagas.length) {\n  sagaTester.start(runQueuedSagas, queuedSagas);\n}\n\nfunction* runQueuedSagas(queuedSagas: QueuedSaga[]) {\n  yield all(\n    queuedSagas.map((qSaga: QueuedSaga) => call(qSaga.saga, ...qSaga.args))\n  );\n}\n")))}c.isMDXComponent=!0}}]);