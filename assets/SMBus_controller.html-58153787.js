import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,e as s}from"./app-b0f2cce9.js";const i={},l=s(`<h1 id="vmware-下-安装-ubuntu-报-smbus-错误" tabindex="-1"><a class="header-anchor" href="#vmware-下-安装-ubuntu-报-smbus-错误" aria-hidden="true">#</a> VMware 下 安装 Ubuntu 报 SMBus 错误</h1><p>如果能进入终端则切换到root用户，如果不能则在VMware进入界面时按下shift进入GNU GRUB界面，依次选择：</p><ol><li>Advanced options for Ubuntu</li><li>Ubuntu，with Linux （recovery mode）</li><li>root</li></ol><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223153.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223159.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223236.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>查找报错的模块</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 对只读文件修改</span>
<span class="token function">mount</span> <span class="token parameter variable">-o</span> remount,rw /

<span class="token comment"># 此处根据报错内容不同，输入内容也不同</span>
<span class="token comment"># 比如我的错误为i2c_piix4 Host SMBus controller not enabled，那么我搜索piix4</span>
<span class="token comment"># 返回i2c_piix4   24576   0</span>
<span class="token comment"># 那么报错的根源就在i2c_piix4</span>
lsmod <span class="token operator">|</span> <span class="token function">grep</span> piix4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>禁用报错的模块</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> + /etc/modprobe.d/blacklist.conf

//用vi打开并跳转到最后一行
//新建一行并插入以下内容 <span class="token punctuation">(</span> i2c_piix4为刚才查询获得的 <span class="token punctuation">)</span>
//保存并退出

blacklist i2c_piix4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新生成引导文件，如果不进行该操作直接重启还是会报错</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>update-initramfs  <span class="token parameter variable">-u</span>  <span class="token parameter variable">-k</span>  all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),t=[l];function c(r,d){return e(),a("div",null,t)}const p=n(i,[["render",c],["__file","SMBus_controller.html.vue"]]);export{p as default};
