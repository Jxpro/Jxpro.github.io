import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e}from"./app-07a77cc8.js";const t={},i=e(`<h1 id="git设置代理" tabindex="-1"><a class="header-anchor" href="#git设置代理" aria-hidden="true">#</a> Git设置代理</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 为 git 设置全局代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy http://127.0.0.1:7890
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy https://127.0.0.1:7890

<span class="token comment"># 取消设置代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy

<span class="token comment"># 查看设置代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--get</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--get</span> https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[i];function r(p,o){return n(),s("div",null,l)}const m=a(t,[["render",r],["__file","proxy.html.vue"]]);export{m as default};
