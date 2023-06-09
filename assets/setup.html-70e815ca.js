import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,e as a}from"./app-07a77cc8.js";const i={},l=a(`<h1 id="阿里云linux服务器安装docker" tabindex="-1"><a class="header-anchor" href="#阿里云linux服务器安装docker" aria-hidden="true">#</a> 阿里云Linux服务器安装Docker</h1><h2 id="一、使用官方安装脚本自动安装-仅适用于公网环境" tabindex="-1"><a class="header-anchor" href="#一、使用官方安装脚本自动安装-仅适用于公网环境" aria-hidden="true">#</a> 一、使用官方安装脚本自动安装 （仅适用于公网环境）</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">docker</span> <span class="token parameter variable">--mirror</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、安装校验" tabindex="-1"><a class="header-anchor" href="#二、安装校验" aria-hidden="true">#</a> 二、安装校验</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@iZwz91577x7sn2pgjejf5kZ:~<span class="token comment"># docker version</span>
Client: Docker Engine - Community
 Version:           <span class="token number">20.10</span>.12
 API version:       <span class="token number">1.41</span>
 Go version:        go1.16.12
 Git commit:        e91ed57
 Built:             Mon Dec <span class="token number">13</span> <span class="token number">11</span>:45:33 <span class="token number">2021</span>
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      <span class="token boolean">true</span>

Server: Docker Engine - Community
 Engine:
  Version:          <span class="token number">20.10</span>.12
  API version:      <span class="token number">1.41</span> <span class="token punctuation">(</span>minimum version <span class="token number">1.12</span><span class="token punctuation">)</span>
  Go version:       go1.16.12
  Git commit:       459d0df
  Built:            Mon Dec <span class="token number">13</span> <span class="token number">11</span>:43:42 <span class="token number">2021</span>
  OS/Arch:          linux/amd64
  Experimental:     <span class="token boolean">false</span>
 containerd:
  Version:          <span class="token number">1.4</span>.12
  GitCommit:        7b11cfaabd73bb80907dd23182b9347b4245eb5d
 runc:
  Version:          <span class="token number">1.0</span>.2
  GitCommit:        v1.0.2-0-g52b36a2
 docker-init:
  Version:          <span class="token number">0.19</span>.0
  GitCommit:        de40ad0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、配置镜像加速器" tabindex="-1"><a class="header-anchor" href="#三、配置镜像加速器" aria-hidden="true">#</a> 三、配置镜像加速器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker

<span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://1on9ula1.mirror.aliyuncs.com&quot;]
}
EOF</span>

systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=[l];function d(c,t){return s(),e("div",null,r)}const m=n(i,[["render",d],["__file","setup.html.vue"]]);export{m as default};
