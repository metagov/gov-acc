---
type: resource
title: "{title}"
source: "{source}"
description: "{description}"
author:
<%* tR += meta.authors && meta.authors.length ? meta.authors.map(a => `  - "${a.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`).join('\n') : ''; %>
published: "{published}"
indexed: "{indexed}"
uuid: "<%* function generateUUID() { let dt = new Date().getTime(); return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { let r = (dt+Math.random()*16)%16|0; dt=Math.floor(dt/16); return (c==='x'?r:(r&0x3|0x8)).toString(16); }); } tR += generateUUID(); %>"
problems: []
solutions: []
---
