import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as o,a as s,b as n,d as e,e as t}from"./app-07a77cc8.js";const p={},c=t(`<h1 id="ubuntu下配置ftp" tabindex="-1"><a class="header-anchor" href="#ubuntu下配置ftp" aria-hidden="true">#</a> Ubuntu下配置FTP</h1><h2 id="一、ftp工作原理" tabindex="-1"><a class="header-anchor" href="#一、ftp工作原理" aria-hidden="true">#</a> 一、FTP工作原理</h2><h3 id="_1-1-ftp工作原理介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-ftp工作原理介绍" aria-hidden="true">#</a> 1.1 FTP工作原理介绍</h3><p>FTP的工作方式的C/S模式(客户端/服务器模式)，采用TCP面向连接的可靠传输协议，利用端口20来传输数据，端口21来传输客户端和服务器之间控制命令。</p><h3 id="_1-2-两种模式-从服务器角度" tabindex="-1"><a class="header-anchor" href="#_1-2-两种模式-从服务器角度" aria-hidden="true">#</a> 1.2 两种模式:从服务器角度</h3><ul><li><strong>主动(PORT style)</strong>: 服务器主动连接 命令(控制) :客户端:随机port -服务器: 21/tcp 数据:客户端:随机port &lt;--服务器: 20/tcp</li><li><strong>被动(PASV style)</strong>: 客户端主动连接 命令(控制) :客户端:随机port ---服务器: 21/tcp 数据:客户端:随机port -&gt;-服务器:随机port /tcp</li></ul><h3 id="_1-3-ftp服务状态码" tabindex="-1"><a class="header-anchor" href="#_1-3-ftp服务状态码" aria-hidden="true">#</a> 1.3 FTP服务状态码</h3><blockquote><p>1XX: 信息 125: 数据连接打开</p><p>2YY：成功类状态 200: 命令OK 230:登录成功</p><p>3XX ：补充类 331：用户名OK</p><p>4XX： 客户端错误 425：不能打开数据连接</p><p>5XX：服务器错误 500：不能登陆</p></blockquote><h2 id="二、安装" tabindex="-1"><a class="header-anchor" href="#二、安装" aria-hidden="true">#</a> 二、安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 系统版本</span>
<span class="token comment"># Ubuntu 18.04.6 LTS (GNU/Linux 4.15.0-48-generic x86_64)</span>

<span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> <span class="token function">install</span> vsftpd <span class="token parameter variable">-y</span>

$ vsftpd <span class="token parameter variable">-v</span>
vsftpd: version <span class="token number">3.0</span>.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-vsftpd允许三种认证模式登录ftp服务器" tabindex="-1"><a class="header-anchor" href="#_1-1-vsftpd允许三种认证模式登录ftp服务器" aria-hidden="true">#</a> 1.1 vsftpd允许三种认证模式登录FTP服务器</h3><ul><li><strong>匿名模式</strong>：<strong>最不安全</strong>的FTP的登录模式，只需填入anonymous用户名，按下回车就可以登录。</li><li><strong>本地用户模式</strong>：通过linux本地操作系统的用户名密码来登录的模式，相对安全，但是如果系统的用户被截获密码泄露，攻击者可以利用该账号密码登录ftp服务器从而造成一系列破坏，可能会威胁到整个服务器。</li><li><strong>虚拟用户模式</strong>：<strong>推荐</strong>的模式，其工作原理是单独设置FTP的用户文件信息，创建相关的数据库，虚拟出可以登录的FTP的用户信息，实际不存在，只能在FTP服务程序下使用。</li></ul><h3 id="_1-2-配置本地用户模式" tabindex="-1"><a class="header-anchor" href="#_1-2-配置本地用户模式" aria-hidden="true">#</a> 1.2 配置本地用户模式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#备份配置文件</span>
<span class="token function">cp</span> /etc/vsftpd.conf /etc/vsftpd.conf.bak

<span class="token comment">#修改配置文件</span>
<span class="token function">vim</span> /etc/vsftpd.conf
<span class="token comment">#取消注释以下内容注释</span>
<span class="token assign-left variable">write_enable</span><span class="token operator">=</span>YES

<span class="token comment">#删除root,Ubuntu下root用户不能ftp登陆</span>
<span class="token function">vim</span> /etc/ftpusers

<span class="token comment">#重启ftp服务</span>
systemctl restart vsftpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-配置虚拟用户模式" tabindex="-1"><a class="header-anchor" href="#_1-3-配置虚拟用户模式" aria-hidden="true">#</a> 1.3 配置虚拟用户模式</h3><p>默认缺少<code>db_load</code>，且测试环境安全性要求不高，<strong>暂时不采用</strong></p><p>参考文章：</p>`,17),d={href:"https://zhuanlan.zhihu.com/p/367086919",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/kaikai136412162/article/details/94318822",target:"_blank",rel:"noopener noreferrer"},u=s("h3",{id:"_1-4-登录",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-4-登录","aria-hidden":"true"},"#"),n(" 1.4 登录")],-1),b=s("p",null,"此时应该能够使用之前创建的jokerxin登录FTP服务器，现在可以上传和下载文件到您的内容。这些文件将保存在ftpuser用户的主目录中（/home/ftpuser）。配置文件已禁用匿名使用，因此登录的唯一方法是使用服务器上的工作帐户。",-1),m=s("h2",{id:"三、问题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#三、问题","aria-hidden":"true"},"#"),n(" 三、问题")],-1),h=t(`<li><p><strong>Ubuntu下root用户不能ftp登陆</strong></p><p>一般情况下,由于种种原因ftp是不让root用户远程登陆；但只要你修改以个文件就可以登陆了：注释掉 /etc/ftpusers 中的root，最后重启 vsftpd ( service vsftpd restart ).</p></li><li><p>前 vsftpd.conf 配置:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">listen</span><span class="token operator">=</span>NO
<span class="token assign-left variable">listen_ipv6</span><span class="token operator">=</span>YES
<span class="token assign-left variable">anonymous_enable</span><span class="token operator">=</span>NO
<span class="token assign-left variable">local_enable</span><span class="token operator">=</span>YES
<span class="token assign-left variable">write_enable</span><span class="token operator">=</span>YES
<span class="token assign-left variable">local_umask</span><span class="token operator">=</span>022
<span class="token assign-left variable">dirmessage_enable</span><span class="token operator">=</span>YES
<span class="token assign-left variable">use_localtime</span><span class="token operator">=</span>YES
<span class="token assign-left variable">xferlog_enable</span><span class="token operator">=</span>YES
<span class="token assign-left variable">connect_from_port_20</span><span class="token operator">=</span>YES
<span class="token assign-left variable">chroot_local_user</span><span class="token operator">=</span>YES
<span class="token assign-left variable">secure_chroot_dir</span><span class="token operator">=</span>/var/run/vsftpd/empty
<span class="token assign-left variable">pam_service_name</span><span class="token operator">=</span>vsftpd
<span class="token assign-left variable">rsa_cert_file</span><span class="token operator">=</span>/etc/ssl/certs/ssl-cert-snakeoil.pem
<span class="token assign-left variable">rsa_private_key_file</span><span class="token operator">=</span>/etc/ssl/private/ssl-cert-snakeoil.key
<span class="token assign-left variable">ssl_enable</span><span class="token operator">=</span>NO
<span class="token assign-left variable">pasv_enable</span><span class="token operator">=</span>Yes
<span class="token assign-left variable">pasv_min_port</span><span class="token operator">=</span><span class="token number">10000</span>
<span class="token assign-left variable">pasv_max_port</span><span class="token operator">=</span><span class="token number">10100</span>
<span class="token assign-left variable">allow_writeable_chroot</span><span class="token operator">=</span>YES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>550 Permission denied</strong></p><p>因为vsftpd.conf配置文件后修改后未重启服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以下命令无法重新加载配置文件</span>
systemctl <span class="token builtin class-name">enable</span> vsftpd
systemctl start vsftpd

<span class="token comment"># 需要执行以下命令</span>
systemctl restart vsftpd
<span class="token comment">#或者</span>
systemctl reload vsftpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),f=s("p",null,"被动模式可以连接服务器，但不能列出目录",-1),_=s("p",null,"参考：",-1),k={href:"https://blog.csdn.net/weixin_39581571/article/details/111221908",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.modb.pro/db/159559",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.php.cn/linux-464387.html",target:"_blank",rel:"noopener noreferrer"};function P(T,F){const a=i("ExternalLinkIcon");return r(),o("div",null,[c,s("ul",null,[s("li",null,[s("a",d,[n("关于ubuntu18.04vsftpd和ftp的搭建"),e(a)])]),s("li",null,[s("a",v,[n("ubuntu 18.04 搭建ftp服务器"),e(a)])])]),u,b,m,s("ol",null,[h,s("li",null,[f,_,s("p",null,[s("a",k,[n("ftp主动和被动模式_FTP的两种连接方式"),e(a)])]),s("p",null,[s("a",g,[n("云服务器ftp被动和主动模式都连接失败"),e(a)])]),s("p",null,[s("a",x,[n("ftp主动模式与被动模式——为什么连接不上FTP服务器"),e(a)])])])])])}const E=l(p,[["render",P],["__file","FTP_configure.html.vue"]]);export{E as default};
