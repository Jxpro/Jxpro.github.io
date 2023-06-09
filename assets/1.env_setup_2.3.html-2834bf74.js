import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c,a as n,b as s,d as e,e as t}from"./app-b0f2cce9.js";const o={},d=t(`<h1 id="hyperledger-fabric-开发环境搭建" tabindex="-1"><a class="header-anchor" href="#hyperledger-fabric-开发环境搭建" aria-hidden="true">#</a> HyperLedger Fabric 开发环境搭建</h1><h2 id="一、软硬件版本" tabindex="-1"><a class="header-anchor" href="#一、软硬件版本" aria-hidden="true">#</a> 一、软硬件版本</h2><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">版本</th></tr></thead><tbody><tr><td style="text-align:center;">系统版本</td><td style="text-align:center;">Ubuntu 18.04.6 LTS (GNU/Linux 4.15.0-48-generic x86_64)</td></tr><tr><td style="text-align:center;">Fabric</td><td style="text-align:center;">2.3.3</td></tr><tr><td style="text-align:center;">go</td><td style="text-align:center;">go1.16.9 linux/amd64</td></tr><tr><td style="text-align:center;">docker</td><td style="text-align:center;">20.10.10</td></tr><tr><td style="text-align:center;">docker-compose</td><td style="text-align:center;">1.29.2, build 5becea4c</td></tr></tbody></table><h2 id="二-安装-git-和-curl" tabindex="-1"><a class="header-anchor" href="#二-安装-git-和-curl" aria-hidden="true">#</a> 二. 安装 Git 和 Curl</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token function">curl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-安装-golang" tabindex="-1"><a class="header-anchor" href="#三-安装-golang" aria-hidden="true">#</a> 三. 安装 Golang</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> libtool libltdl-dev

<span class="token function">wget</span> https://studygolang.com/dl/golang/go1.17.6.linux-amd64.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-C</span> /usr/local <span class="token parameter variable">-zxf</span>  go1.17.6.linux-amd64.tar.gz

<span class="token function">vim</span> ~/.profile
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/usr/local/go
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPATH</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/go
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GOROOT</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GOPATH</span>/src/github.com/hyperledger/fabric/scripts/fabric-samples/bin
<span class="token builtin class-name">source</span> ~/.profile

<span class="token comment"># 检测安装</span>
$ go version
go version go1.16.9 linux/amd64

<span class="token comment"># 设置goproxy，以解决错误:</span>
<span class="token comment"># Get &quot;https://proxy.golang.org/github.com/golang/protobuf/@v/v1.3.2.mod&quot;: dial tcp 216.58.200.49:443: i/o timeout: exit status 1</span>
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-安装-docker" tabindex="-1"><a class="header-anchor" href="#四-安装-docker" aria-hidden="true">#</a> 四. 安装 Docker</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">docker</span> <span class="token parameter variable">--mirror</span> Aliyun

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker

<span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://1on9ula1.mirror.aliyuncs.com&quot;]
}
EOF</span>

systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-安装-docker-compose" tabindex="-1"><a class="header-anchor" href="#五-安装-docker-compose" aria-hidden="true">#</a> 五. 安装 Docker-Compose</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> python-pip

<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://get.daocloud.io/docker/compose/releases/download/v2.2.3/docker-compose-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span>-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">\`</span></span> <span class="token operator">&gt;</span> /usr/local/bin/docker-compose

<span class="token function">chmod</span> +x /usr/local/bin/docker-compose

$ <span class="token function">docker-compose</span> version
Docker Compose version v2.2.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-安装-hyperledger-fabric" tabindex="-1"><a class="header-anchor" href="#六-安装-hyperledger-fabric" aria-hidden="true">#</a> 六. 安装 Hyperledger fabric</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~

<span class="token comment"># ---------------------------------------------------</span>
<span class="token comment">#    准备阶段</span>
<span class="token comment"># ---------------------------------------------------</span>
<span class="token function">git</span> clone https://github.com/hyperledger/fabric.git
<span class="token builtin class-name">cd</span> fabric/scripts/
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> main https://github.com/hyperledger/fabric-samples.git
<span class="token comment"># 修改一下bootstrap.sh：download部分为以下内容</span>
<span class="token comment"># download() {</span>
<span class="token comment">#     echo &quot;==&gt; Done.&quot;</span>
<span class="token comment"># }</span>

<span class="token builtin class-name">cd</span> fabric-samples
<span class="token comment"># 本机下载并FTP上传以下两个文件</span>
<span class="token comment"># hyperledger-fabric-ca-linux-amd64-1.5.2.tar.gz</span>
<span class="token comment"># hyperledger-fabric-linux-amd64-2.3.3.tar.gz</span>

<span class="token comment"># 解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> hyperledger-fabric-ca-linux-amd64-1.5.2.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> hyperledger-fabric-linux-amd64-2.3.3.tar.gz

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$GOPATH</span>/src/github.com/hyperledger/
<span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/github.com/hyperledger/

<span class="token comment"># ---------------------------------------------------</span>
<span class="token comment">#    直接复制准备好的文件</span>
<span class="token comment"># ---------------------------------------------------</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> ~/fabric/ ./
<span class="token builtin class-name">cd</span> fabric/scripts/
./bootstrap.sh

<span class="token builtin class-name">cd</span> fabric-samples/test-network
./network.sh down
./network.sh up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-查看运行的fabric容器" tabindex="-1"><a class="header-anchor" href="#七-查看运行的fabric容器" aria-hidden="true">#</a> 七. 查看运行的fabric容器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">--format</span> <span class="token string">&quot;table {{.ID}}<span class="token entity" title="\\t">\\t</span>{{.Image}}<span class="token entity" title="\\t">\\t</span>{{.Names}}<span class="token entity" title="\\t">\\t</span>{{.Status}}&quot;</span>

<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">--format</span> <span class="token string">&quot;table {{.Image}}<span class="token entity" title="\\t">\\t</span>{{.Command}}<span class="token entity" title="\\t">\\t</span>{{.Names}}<span class="token entity" title="\\t">\\t</span>{{.Status}}&quot;</span>

<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">--format</span> <span class="token string">&quot;table {{.Command}}<span class="token entity" title="\\t">\\t</span>{{.Names}}<span class="token entity" title="\\t">\\t</span>{{.Status}}<span class="token entity" title="\\t">\\t</span>{{.Ports}}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八-看到这个就成功了" tabindex="-1"><a class="header-anchor" href="#八-看到这个就成功了" aria-hidden="true">#</a> 八. 看到这个就成功了！！！</h2><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223321.png" alt="sucess" tabindex="0" loading="lazy"><figcaption>sucess</figcaption></figure><hr>`,18),p={href:"https://blog.csdn.net/weixin_44142032/article/details/110230668",target:"_blank",rel:"noopener noreferrer"},u=n("h2",{id:"九、遇到的问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#九、遇到的问题","aria-hidden":"true"},"#"),s(" 九、遇到的问题")],-1),m={href:"https://www.cnblogs.com/cbkj-xd/p/11067790.html",target:"_blank",rel:"noopener noreferrer"},v=t("<p><strong>错误：</strong></p><p>运行<code>./byfn.sh up</code>时</p><p>遇到<code>Could not resolve host: nexus.hyperledger.org</code>错误</p><p><strong>原因：</strong></p><p><code>nexus.hyperledger.org</code>这个网站不再维护了</p>",5),b={href:"https://blog.csdn.net/qq_36336522/article/details/84071711",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,[n("strong",null,"错误：")],-1),g=n("p",null,[s("运行"),n("code",null,"source download-dockerimages.sh -c x86_64-1.0.0 -f x86_64-1.0.0"),s("时")],-1),h=n("p",null,"遇到错误：",-1),f=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`Cannot run peer because cannot init crypto, missing /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp folder
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),x=n("p",null,[n("strong",null,"原因：")],-1),y={href:"https://blog.csdn.net/vivian_ll/article/details/79966210",target:"_blank",rel:"noopener noreferrer"},_=t("<li>查看<code>fabric/release/linux-amd64/bin</code>文件夹，发现文件夹下无内容，也没有<code>crypto、configtxgen</code>等文件，可能原因是<code>configtxgen</code>版本不一致导致的。</li><li>尝试手动运行<code>bootstrap.1.0.0.sh</code>下载</li><li>发现同上面一样的错误<code>Could not resolve host: nexus.hyperledger.org</code></li><li>所以最后的原因还是nexus.hyperledger.org`这个网站不再维护了</li>",4),O=n("div",{style:{"text-align":"center","margin-top":"18px"}},[n("span",{style:{color:"crimson","font-size":"27px"}},"所以2.X版本才是最终解 ！！！")],-1);function w(q,H){const a=l("ExternalLinkIcon");return r(),c("div",null,[d,n("p",null,[s("参考文章："),n("a",p,[s("Hyperledger fabric 2.3基本环境安装 - linux"),e(a)])]),u,n("ol",null,[n("li",null,[n("p",null,[s("参考文章："),n("a",m,[s("Hyperledger Fabric1.4环境搭建"),e(a)])]),v]),n("li",null,[n("p",null,[s("参考文章："),n("a",b,[s("Hyperledger Fabric1.0环境搭建"),e(a)])]),k,g,h,f,x,n("ol",null,[n("li",null,[s("参考 "),n("a",y,[s("fabric部署e2e_cli单节点和first-network示例及相关错误"),e(a)]),s(" 文章")]),_])])]),O])}const G=i(o,[["render",w],["__file","1.env_setup_2.3.html.vue"]]);export{G as default};
