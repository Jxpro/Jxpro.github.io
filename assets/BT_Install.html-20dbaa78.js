import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a,b as n,d as t,e as s}from"./app-07a77cc8.js";const c={},r=s(`<h1 id="docker-中安装宝塔面板" tabindex="-1"><a class="header-anchor" href="#docker-中安装宝塔面板" aria-hidden="true">#</a> Docker 中安装宝塔面板</h1><h2 id="一、软硬件版本" tabindex="-1"><a class="header-anchor" href="#一、软硬件版本" aria-hidden="true">#</a> 一、软硬件版本</h2><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">版本</th></tr></thead><tbody><tr><td style="text-align:center;">系统版本</td><td style="text-align:center;">Ubuntu 18.04.6 LTS (GNU/Linux 4.15.0-48-generic x86_64)</td></tr><tr><td style="text-align:center;">docker</td><td style="text-align:center;">20.10.10</td></tr></tbody></table><h2 id="二、安装-基于centos镜像" tabindex="-1"><a class="header-anchor" href="#二、安装-基于centos镜像" aria-hidden="true">#</a> 二、安装(基于centos镜像)</h2><p>拉取镜像，宝塔对centos7**兼容性<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>**最好 ，且centos8的docker镜像下载不了<code>step3</code>的\`screen</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull centos:7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个命名为<code>centos</code>容器并进入，命名为<code>btpanel</code></p><blockquote><p>将宿主机的<code>20，21，80，443，888，8888</code>这五个<strong>端口映射</strong>到<code>docker</code>容器中去</p><p>并将宿主机的<code>/home/www</code><strong>文件夹挂载</strong>到<code>docker</code>容器的<code>/www</code>上去</p><p><em>(注意：文件目录如果不存在。宿主机和容器会自己创建，无需手动创建)</em></p><p><em>(注意：如果报错没有权限还是自己手动创建一下)</em></p><p><code>privileged</code>表示在运行容器的时候，给容器加特权，设置容器有写文件的<strong>权限</strong></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 没有启动 vsftpd 服务</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> btpanel <span class="token parameter variable">-p</span> <span class="token number">20</span>:20 <span class="token parameter variable">-p</span> <span class="token number">21</span>:21 <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 <span class="token parameter variable">-p</span> <span class="token number">888</span>:888 <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-p</span> <span class="token number">8888</span>:8888 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">--restart</span> always <span class="token parameter variable">-v</span> /data/www:/www centos:7 /bin/bash

<span class="token comment"># 启动了的话改变一下映射端口或者关一下 vsftpd 服务</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> btpanel <span class="token parameter variable">-p</span> <span class="token number">20</span>:20 <span class="token parameter variable">-p</span> <span class="token number">210</span>:21 <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 <span class="token parameter variable">-p</span> <span class="token number">888</span>:888 <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">-p</span> <span class="token number">8888</span>:8888 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">--restart</span> always <span class="token parameter variable">-v</span> /data/www:/www centos:7 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于docker中是一个<strong>纯净版本</strong>，我们首先需要给他升级并且安装必要的软件</p><p>这里使用<code>yum update -y</code>会升级系统和内核，但是因为是纯净版本，所以升级很快</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># centos 7</span>
yum update <span class="token parameter variable">-y</span> <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> initscripts <span class="token function">screen</span> <span class="token function">wget</span> <span class="token parameter variable">-y</span>

<span class="token comment"># centos 8 下报错</span>
<span class="token comment"># No match for argument: screen</span>
<span class="token comment"># Error: Unable to find a match: screen</span>
<span class="token comment"># 所以centos 8下暂时无法安装screen包，但不影响宝塔安装</span>
yum update <span class="token parameter variable">-y</span> <span class="token operator">&amp;&amp;</span> yum <span class="token function">install</span> initscripts <span class="token function">wget</span> <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行<code>Centos</code>宝塔面板的安装命令，期间会有一个安装确认，输入<code>y</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> i.sh http://download.bt.cn/install/install_6.0.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> i.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>外网面板地址: http://119.23.209.135:8888/7d2e5682
内网面板地址: http://172.18.0.2:8888/7d2e5682
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223358.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>Tips：<strong>删除镜像</strong>后记得删除<code>/data/www</code>目录</p><h2 id="三、安装-直接使用baota镜像" tabindex="-1"><a class="header-anchor" href="#三、安装-直接使用baota镜像" aria-hidden="true">#</a> 三、安装(直接使用baota镜像)</h2>`,19),d={href:"https://github.com/pch18-docker/baota",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/pch18-docker/baota/blob/clear/Dockerfile",target:"_blank",rel:"noopener noreferrer"},v=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> btpanel <span class="token parameter variable">--net</span><span class="token operator">=</span>host <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">--restart</span> always <span class="token parameter variable">-v</span> /data/wwwroot:/wwwroot pch18/baota:lnp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li><p>登陆地址 <code>http://{{面板ip地址}}:8888</code></p></li><li><p>初始账号 <code>username</code></p></li><li><p>初始密码 <code>password</code></p></li></ul></blockquote><blockquote><p><code>pch18/baota</code>或<code>pch18/baota:latest</code>等同<code>pch18/baota:lnmp</code><code>pch18/baota:lnmp</code>为最新版本的官方纯净安装的基础上安装<code>nginx</code>,<code>mysql</code>,<code>php</code><code>pch18/baota:lnp</code> 为官方版本纯净安装的基础上安装<code>nginx</code>,<code>php</code>(不内置<code>mysql</code>,用于外置数据库的环境) <code>pch18/baota:lamp</code> 为官方版本纯净安装的基础上安装<code>apache</code>,<code>php</code><code>pch18/baota:lap</code> 为官方版本纯净安装的基础上安装<code>apache</code>,<code>php</code>(不内置<code>mysql</code>,用于外置数据库的环境) <code>pch18/baota:clear</code> 为官方版本纯净安装, 不默认安装<code>nginx</code>,<code>mysql</code>,<code>php</code>等程序</p></blockquote><h2 id="四、问题" tabindex="-1"><a class="header-anchor" href="#四、问题" aria-hidden="true">#</a> 四、问题</h2>`,4),b=s(`<li><p>Step2 出现错误</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>docker: Error response from daemon: driver failed programming external connectivity on endpoint btpanel <span class="token punctuation">(</span>daaeec405d1d7b088754e6a7fe621f9c584a10a5df294e241aa574317b757716<span class="token punctuation">)</span>: Error starting userland proxy: listen tcp4 <span class="token number">0.0</span>.0.0:21: bind: address already <span class="token keyword">in</span> use.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原因：FTP服务 ( <code>vsftpd</code> ) 默认占用21端口</p><p>解决方法：</p><ol><li>关闭并禁止自启动 <code>vsftpd</code></li><li>更改映射端口</li><li>修改 <code>vsftpd</code> 配置端口</li></ol></li>`,1),u=a("p",null,"Setp4 运行出现提示：",-1),k=a("strong",null,"5.x系列",-1),h={href:"https://www.bt.cn",target:"_blank",rel:"noopener noreferrer"},g=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> i.sh http://download.bt.cn/install/install.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> i.sh
修改为
<span class="token function">wget</span> <span class="token parameter variable">-O</span> i.sh http://download.bt.cn/install/install_6.0.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> i.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w=s(`<p>Setp4 运行出现错误</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>install.sh: line <span class="token number">1</span>: --2021-10-28: <span class="token builtin class-name">command</span> not found
install.sh: line <span class="token number">2</span>: syntax error near unexpected token <span class="token variable"><span class="token variable">\`</span><span class="token punctuation">(</span>&#39;
install.sh: line <span class="token number">2</span>: <span class="token variable">\`</span></span>Resolving download.bt.cn <span class="token punctuation">(</span>download.bt.cn<span class="token punctuation">)</span><span class="token punctuation">..</span>. <span class="token number">116.10</span>.184.143, 240e:a5:4200:89::143&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={href:"https://www.cnblogs.com/sx66/p/11887022.html",target:"_blank",rel:"noopener noreferrer"},_=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># step4 原命令</span>
<span class="token function">wget</span> <span class="token parameter variable">-o</span> i.sh https://download.bt.cn/install/install_6.0.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> i.sh

<span class="token comment"># 错误位置</span>
<span class="token parameter variable">-o</span> -<span class="token operator">&gt;</span> <span class="token parameter variable">-O</span>

<span class="token comment"># 区别</span>
-o,  --output-file<span class="token operator">=</span>FILE    将日志信息写入 FILE
-O,  --output-document<span class="token operator">=</span>FILE    将文档写入 FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=s(`<li><p><span style="color:crimson;">Error: DBUS_ERROR: Failed to connect to socket /run/dbus/system_bus_socket: No such file or directory</span></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>确定两点：
<span class="token number">1</span>. dbus是否启动？如果没启动，则：
/etc/init.d/dbus start

<span class="token number">2</span>. dbus启动了，守护进程dbus-daemon是否启动？如果没启动，则：
dbus-daemon <span class="token parameter variable">--system</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：<strong>实际上 <strong>docker 下的 centos 镜像</strong>没有</strong> dbus，但是不影响宝塔正常运行</p></li>`,1),y=s(`<h2 id="五、宝塔管理" tabindex="-1"><a class="header-anchor" href="#五、宝塔管理" aria-hidden="true">#</a> 五、宝塔管理</h2><p>直接进入容器，输入<code>bt</code>，根据提示进行操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> btpanel <span class="token function">bash</span>
bt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/new/2022-06-19-204146.png" alt="image-20220619204145165" tabindex="0" loading="lazy"><figcaption>image-20220619204145165</figcaption></figure>`,4),E={href:"https://www.xp8.net/server/392.html",target:"_blank",rel:"noopener noreferrer"},I=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看默认入口和账号密码</span>
/etc/init.d/bt default
<span class="token comment"># 停止</span>
/etc/init.d/bt stop
<span class="token comment"># 启动</span>
/etc/init.d/bt start
<span class="token comment"># 重启</span>
/etc/init.d/bt restart
<span class="token comment"># 卸载</span>
/etc/init.d/bt stop <span class="token operator">&amp;&amp;</span> <span class="token function">chkconfig</span> <span class="token parameter variable">--del</span> bt <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> /etc/init.d/bt <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /www/server/panel

<span class="token comment"># 查看当前面板端口</span>
<span class="token function">cat</span> /www/server/panel/data/port.pl
<span class="token comment"># 修改面板端口，如要改成8881（centos 6 系统）</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;8881&#39;</span> <span class="token operator">&gt;</span> /www/server/panel/data/port.pl <span class="token operator">&amp;&amp;</span> /etc/init.d/bt restart
iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-m</span> state <span class="token parameter variable">--state</span> NEW <span class="token parameter variable">-m</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">8881</span> <span class="token parameter variable">-j</span> ACCEPT
<span class="token function">service</span> iptables save
<span class="token function">service</span> iptables restart
<span class="token comment"># 修改面板端口，如要改成8881（centos 7 系统）</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;8881&#39;</span> <span class="token operator">&gt;</span> /www/server/panel/data/port.pl <span class="token operator">&amp;&amp;</span> /etc/init.d/bt restart
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8881</span>/tcp
firewall-cmd <span class="token parameter variable">--reload</span>

<span class="token comment"># 强制修改MySQL管理(root)密码，如要改成123456</span>
<span class="token builtin class-name">cd</span> /www/server/panel <span class="token operator">&amp;&amp;</span> python tools.pyc root <span class="token number">123456</span>
<span class="token comment"># 修改面板密码，如要改成123456</span>
<span class="token builtin class-name">cd</span> /www/server/panel <span class="token operator">&amp;&amp;</span> python tools.pyc panel <span class="token number">123456</span>
<span class="token comment"># 查看宝塔日志</span>
<span class="token function">cat</span> /tmp/panelBoot.pl
<span class="token comment"># 查看软件安装日志</span>
<span class="token function">cat</span> /tmp/panelExec.log
<span class="token comment"># 站点配置文件位置</span>
/www/server/panel/vhost
<span class="token comment"># 删除域名绑定面板</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /www/server/panel/data/domain.conf
<span class="token comment"># 清理登陆限制</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /www/server/panel/data/*.login
<span class="token comment"># 查看面板授权IP</span>
<span class="token function">cat</span> /www/server/panel/data/limitip.conf
<span class="token comment"># 关闭访问限制</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /www/server/panel/data/limitip.conf
<span class="token comment"># 查看许可域名</span>
<span class="token function">cat</span> /www/server/panel/data/domain.conf
<span class="token comment"># 关闭面板SSL</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /www/server/panel/data/ssl.pl <span class="token operator">&amp;&amp;</span> /etc/init.d/bt restart
<span class="token comment"># 查看面板错误日志</span>
<span class="token function">cat</span> /tmp/panelBoot
<span class="token comment"># 查看数据库错误日志</span>
<span class="token function">cat</span> /www/server/data/*.err

站点配置文件目录<span class="token punctuation">(</span>nginx<span class="token punctuation">)</span>
/www/server/panel/vhost/nginx
站点配置文件目录<span class="token punctuation">(</span>apache<span class="token punctuation">)</span>
/www/server/panel/vhost/apache
站点默认目录
/www/wwwroot
数据库备份目录
/www/backup/database
站点备份目录
/www/backup/site
站点日志
/www/wwwlogs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>系统兼容性顺序：Centos7.x &gt; Debian10 &gt; Ubuntu 20.04 &gt; Cenots8.x &gt; Ubuntu 18.04 &gt; 其它系统 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,3);function L(q,B){const e=p("ExternalLinkIcon");return o(),i("div",null,[r,a("p",null,[n("使用说明："),a("a",d,[n("https://github.com/pch18-docker/baota"),t(e)])]),a("p",null,[n("Dockerfile："),a("a",m,[n("https://github.com/pch18-docker/baota/blob/clear/Dockerfile"),t(e)])]),v,a("ol",null,[b,a("li",null,[u,a("p",null,[n("注意: "),k,n("Linux面板从2020年1月1日起终止维护，与技术支持，请考虑安装全新的7.x版本 宝塔官网: "),a("a",h,[n("https://www.bt.cn"),t(e)])]),g]),a("li",null,[w,a("p",null,[n("原因：参考文章："),a("a",f,[n("wget命令详解"),t(e)])]),_]),x]),y,a("p",null,[n("其他说明："),a("a",E,[n("宝塔linux面板重启、重置等命令"),t(e)])]),I])}const T=l(c,[["render",L],["__file","BT_Install.html.vue"]]);export{T as default};
