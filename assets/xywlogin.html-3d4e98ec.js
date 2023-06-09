const n=JSON.parse(`{"key":"v-cb500680","path":"/Development/Python/xywlogin.html","title":"Python 实现自动登录校园网","lang":"zh-CN","frontmatter":{"title":"Python 实现自动登录校园网","shortTitle":"校园网自动登录","description":"本文介绍了如何使用 Python 脚本来实现自动登录校园网，包括了代码模板、设置开机自启以及设置运行时隐藏DOS窗口等内容。","category":["Python"],"tag":["Program","Python"],"date":"2021-11-20T00:00:00.000Z","order":4,"head":[["meta",{"property":"og:url","content":"https://blog.xin127.me/Development/Python/xywlogin.html"}],["meta",{"property":"og:site_name","content":"Joker Xin's Blog"}],["meta",{"property":"og:title","content":"Python 实现自动登录校园网"}],["meta",{"property":"og:description","content":"本文介绍了如何使用 Python 脚本来实现自动登录校园网，包括了代码模板、设置开机自启以及设置运行时隐藏DOS窗口等内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Joker Xin"}],["meta",{"property":"article:tag","content":"Program"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:published_time","content":"2021-11-20T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 实现自动登录校园网\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-20T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Joker Xin\\",\\"url\\":\\"https://blog.xin127.me\\"}]}"]]},"headers":[{"level":2,"title":"一、代码模板","slug":"一、代码模板","link":"#一、代码模板","children":[]},{"level":2,"title":"二、设置开机自启","slug":"二、设置开机自启","link":"#二、设置开机自启","children":[]},{"level":2,"title":"三、运行时隐藏DOS窗口","slug":"三、运行时隐藏dos窗口","link":"#三、运行时隐藏dos窗口","children":[]}],"readingTime":{"minutes":1.06,"words":317},"filePathRelative":"Development/Python/xywlogin.md","localizedDate":"2021年11月20日","excerpt":"<h1> Python脚本实现校园网自动登录</h1>\\n<h2> 一、代码模板</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> requests\\n\\nurl <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'http://xywrz.hainanu.edu.cn/eportal/InterFace.do?method=login'</span>\\nqueryString <span class=\\"token operator\\">=</span><span class=\\"token string\\">'xxx'</span>\\n\\nrequestHeaders <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">'Accept'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'*/*'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'Accept-Encoding'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'gzip, deflate'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'Accept-Language'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'zh-CN,zh;q=0.9'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'Connection'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'keep-alive'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'Content-Length'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'890'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'Content-Type'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'application/x-www-form-urlencoded; charset=UTF-8'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'Cookie'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'xxx'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'Host'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'xywrz.hainanu.edu.cn'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'Origin'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'http://xywrz.hainanu.edu.cn'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'Referer'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'xxx'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'User-Agent'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'</span>\\n<span class=\\"token punctuation\\">}</span>\\nformData <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token string\\">'userId'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'2019xxxxxxxxxx'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'password'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'xxx'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'service'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'default'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'passwordEncrypt'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'true'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'queryString'</span><span class=\\"token punctuation\\">:</span> queryString  <span class=\\"token comment\\"># 可能发生变化</span>\\n    <span class=\\"token string\\">'operatorUserId'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">''</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">'operatorPwd'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">''</span><span class=\\"token punctuation\\">,</span>          <span class=\\"token comment\\"># 可选</span>\\n\\t<span class=\\"token string\\">'validcode'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">''</span><span class=\\"token punctuation\\">,</span>            <span class=\\"token comment\\"># 可选</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\nresponse <span class=\\"token operator\\">=</span> requests<span class=\\"token punctuation\\">.</span>post<span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">,</span> headers<span class=\\"token operator\\">=</span>requestHeaders<span class=\\"token punctuation\\">,</span> data<span class=\\"token operator\\">=</span>formData<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># print(response.status_code)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
