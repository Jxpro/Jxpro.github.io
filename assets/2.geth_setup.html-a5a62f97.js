import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as i,a as n,b as s,d as t,e as a}from"./app-07a77cc8.js";const c={},r=a(`<h1 id="geth部署私链测试网络" tabindex="-1"><a class="header-anchor" href="#geth部署私链测试网络" aria-hidden="true">#</a> Geth部署私链测试网络</h1><h2 id="一、克隆仓库" tabindex="-1"><a class="header-anchor" href="#一、克隆仓库" aria-hidden="true">#</a> 一、克隆仓库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/ethereum/go-ethereum.git
<span class="token punctuation">..</span>.

$ <span class="token builtin class-name">cd</span> go-ethereum
$ <span class="token function">ls</span>
accounts      cmd        COPYING         Dockerfile.alltools  ethstats  interfaces.go  Makefile  oss-fuzz.sh  rpc          trie
appveyor.yml  common     COPYING.LESSER  docs                 event     internal       metrics   p2p          SECURITY.md
AUTHORS       consensus  core            eth                  go.mod    les            miner     params       signer
build         console    crypto          ethclient            go.sum    light          mobile    README.md    swarm
circle.yml    contracts  Dockerfile      ethdb                graphql   log            <span class="token function">node</span>      rlp          tests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、安装geth" tabindex="-1"><a class="header-anchor" href="#二、安装geth" aria-hidden="true">#</a> 二、安装Geth</h2><p>切换到稳定版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找指定版本</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token string">&quot;v1.9.*&quot;</span>
<span class="token comment">#切换到指定版本</span>
<span class="token function">git</span> checkout v1.9.25

<span class="token comment"># 安装完后切回主分支</span>
<span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">make</span> geth
<span class="token comment"># 输出过程摘录，完整输出见文末</span>
<span class="token function">env</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on go run build/ci.go <span class="token function">install</span> ./cmd/geth
go: downloading gopkg.in/yaml.v2 v2.4.0
<span class="token punctuation">..</span>.
internal/unsafeheader
internal/cpu
<span class="token punctuation">..</span>.
Done building.
Run <span class="token string">&quot;./build/bin/geth&quot;</span> to launch geth.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可能遇到的错误</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">make</span> geth
build/env.sh go run build/ci.go <span class="token function">install</span> ./cmd/geth
<span class="token builtin class-name">:</span> not foundh: <span class="token number">2</span>: build/env.sh:
build/env.sh: <span class="token number">3</span>: set: Illegal option -
Makefile:15: recipe <span class="token keyword">for</span> target <span class="token string">&#39;geth&#39;</span> failed
make:*** <span class="token punctuation">[</span>geth<span class="token punctuation">]</span> Error <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决办法</strong>：</p><p>在<code>go-ethereum</code>目录下，打开<code>build/env.sh</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> build/env.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>:set <span class="token assign-left variable">ff</span><span class="token operator">=</span>unix
:wq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="直接下载安装" tabindex="-1"><a class="header-anchor" href="#直接下载安装" aria-hidden="true">#</a> 直接下载安装：</h3>`,16),u={href:"https://geth.ethereum.org/downloads/",target:"_blank",rel:"noopener noreferrer"},d=a(`<h2 id="三、测试安装" tabindex="-1"><a class="header-anchor" href="#三、测试安装" aria-hidden="true">#</a> 三、测试安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 推荐将 ./build/bin/geth 对应目录加入环境变量</span>

$ geth version
Geth
Version: <span class="token number">1.10</span>.13-unstable
Git Commit: 347c37b362dbcf1cd986a5b0000a9d67667f6bee
Git Commit Date: <span class="token number">20211123</span>
Architecture: amd64
Go Version: go1.16.9
Operating System: linux
<span class="token assign-left variable">GOPATH</span><span class="token operator">=</span>/root/go
<span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/usr/local/go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、启动客户端" tabindex="-1"><a class="header-anchor" href="#四、启动客户端" aria-hidden="true">#</a> 四、启动客户端</h2><p>启动客户端，连接<strong>以太坊主网</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>geth <span class="token parameter variable">--datadir</span> ./data

<span class="token comment"># 输出摘录</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.121<span class="token punctuation">]</span> Starting Geth on Ethereum mainnet<span class="token punctuation">..</span>.
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.121<span class="token punctuation">]</span> Bumping default cache on mainnet         <span class="token assign-left variable">provided</span><span class="token operator">=</span><span class="token number">1024</span> <span class="token assign-left variable">updated</span><span class="token operator">=</span><span class="token number">4096</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.125<span class="token punctuation">]</span> Maximum peer count                       <span class="token assign-left variable">ETH</span><span class="token operator">=</span><span class="token number">50</span> <span class="token assign-left variable">LES</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">50</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.125<span class="token punctuation">]</span> Smartcard socket not found, disabling    <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;stat /run/pcscd/pcscd.comm: no such file or directory&quot;</span>
WARN <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.128<span class="token punctuation">]</span> Sanitizing cache to Go&#39;s GC limits       <span class="token assign-left variable">provided</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token assign-left variable">updated</span><span class="token operator">=</span><span class="token number">664</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.128<span class="token punctuation">]</span> Set global gas cap                       <span class="token assign-left variable">cap</span><span class="token operator">=</span><span class="token number">50,000</span>,000
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.128<span class="token punctuation">]</span> Allocated trie memory caches             <span class="token assign-left variable">clean</span><span class="token operator">=</span><span class="token number">99</span>.00MiB <span class="token assign-left variable">dirty</span><span class="token operator">=</span><span class="token number">166</span>.00MiB
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.128<span class="token punctuation">]</span> Allocated cache and <span class="token function">file</span> handles         <span class="token assign-left variable">database</span><span class="token operator">=</span>/root/go-ethereum/data/geth/chaindata <span class="token assign-left variable">cache</span><span class="token operator">=</span><span class="token number">332</span>.00MiB <span class="token assign-left variable">handles</span><span class="token operator">=</span><span class="token number">32767</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.154<span class="token punctuation">]</span> Opened ancient database                  <span class="token assign-left variable">database</span><span class="token operator">=</span>/root/go-ethereum/data/geth/chaindata/ancient <span class="token assign-left variable">readonly</span><span class="token operator">=</span>false
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.154<span class="token punctuation">]</span> Writing default main-net genesis block
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.423<span class="token punctuation">]</span> Persisted trie from memory database      <span class="token assign-left variable">nodes</span><span class="token operator">=</span><span class="token number">12356</span> <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">1</span>.78MiB <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">64</span>.108422ms <span class="token assign-left variable">gcnodes</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">gcsize</span><span class="token operator">=</span><span class="token number">0</span>.00B <span class="token assign-left variable">gctime</span><span class="token operator">=</span>0s <span class="token assign-left variable">livenodes</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">livesize</span><span class="token operator">=</span><span class="token number">0</span>.00B
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.424<span class="token punctuation">]</span> Initialised chain configuration          <span class="token assign-left variable">config</span><span class="token operator">=</span><span class="token string">&quot;{ChainID: 1 Homestead: 1150000 DAO: 1920000 DAOSupport: true EIP150: 2463000 EIP155: 2675000 EIP158: 2675000 Byzantium: 4370000 Constantinople: 7280000 Petersburg: 7280000 Istanbul: 9069000, Muir Glacier: 9200000, Berlin: 12244000, London: 12965000, Arrow Glacier: 13773000, Engine: ethash}&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.424<span class="token punctuation">]</span> Disk storage enabled <span class="token keyword">for</span> ethash caches   <span class="token assign-left variable">dir</span><span class="token operator">=</span>/root/go-ethereum/data/geth/ethash <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">3</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.424<span class="token punctuation">]</span> Disk storage enabled <span class="token keyword">for</span> ethash DAGs     <span class="token assign-left variable">dir</span><span class="token operator">=</span>/root/.ethash                      <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">2</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.424<span class="token punctuation">]</span> Initialising Ethereum protocol           <span class="token assign-left variable">network</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">dbversion</span><span class="token operator">=</span><span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.430<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> header          <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span>d4e567<span class="token punctuation">..</span>cb8fa3 <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">17,179</span>,869,184 <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.430<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> full block      <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span>d4e567<span class="token punctuation">..</span>cb8fa3 <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">17,179</span>,869,184 <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.430<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> fast block      <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span>d4e567<span class="token punctuation">..</span>cb8fa3 <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">17,179</span>,869,184 <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
WARN <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.430<span class="token punctuation">]</span> Failed to load snapshot, regenerating    <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;missing or corrupted snapshot&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.430<span class="token punctuation">]</span> Rebuilding state snapshot
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.431<span class="token punctuation">]</span> Regenerated <span class="token builtin class-name">local</span> transaction journal    <span class="token assign-left variable">transactions</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">accounts</span><span class="token operator">=</span><span class="token number">0</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.431<span class="token punctuation">]</span> Gasprice oracle is ignoring threshold <span class="token builtin class-name">set</span> <span class="token assign-left variable">threshold</span><span class="token operator">=</span><span class="token number">2</span>
WARN <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.431<span class="token punctuation">]</span> Error reading unclean <span class="token function">shutdown</span> markers   <span class="token assign-left variable">error</span><span class="token operator">=</span><span class="token string">&quot;leveldb: not found&quot;</span>

INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.431<span class="token punctuation">]</span> Starting peer-to-peer <span class="token function">node</span>               <span class="token assign-left variable">instance</span><span class="token operator">=</span>Geth/v1.10.13-unstable-347c37b3-20211123/linux-amd64/go1.16.9
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.445<span class="token punctuation">]</span> New <span class="token builtin class-name">local</span> <span class="token function">node</span> record                    <span class="token assign-left variable">seq</span><span class="token operator">=</span><span class="token number">1,637</span>,671,887,444 <span class="token assign-left variable">id</span><span class="token operator">=</span>c0b757529cd58dc4 <span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1 <span class="token assign-left variable">udp</span><span class="token operator">=</span><span class="token number">30303</span> <span class="token assign-left variable">tcp</span><span class="token operator">=</span><span class="token number">30303</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.446<span class="token punctuation">]</span> IPC endpoint opened                      <span class="token assign-left variable">url</span><span class="token operator">=</span>/root/go-ethereum/data/geth.ipc
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.448<span class="token punctuation">]</span> Resuming state snapshot generation       <span class="token assign-left variable">root</span><span class="token operator">=</span>d7f897<span class="token punctuation">..</span>0f0544 <span class="token assign-left variable">accounts</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">slots</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">storage</span><span class="token operator">=</span><span class="token number">0</span>.00B <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">17</span>.302ms
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.487<span class="token punctuation">]</span> Started P2P networking                   <span class="token assign-left variable">self</span><span class="token operator">=</span>enode://1ef3dbd125852677e05c315f44aaba0b8ce72a28ce88454b0a140211a0c0fe7409530a2ca03fd8ba2d3125138ef729c687ff828bf51484c561c7da48c280d460@127.0.0.1:30303
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:27.657<span class="token punctuation">]</span> Generated state snapshot                 <span class="token assign-left variable">accounts</span><span class="token operator">=</span><span class="token number">8893</span> <span class="token assign-left variable">slots</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">storage</span><span class="token operator">=</span><span class="token number">409</span>.64KiB <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">226</span>.745ms
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:29.922<span class="token punctuation">]</span> New <span class="token builtin class-name">local</span> <span class="token function">node</span> record                    <span class="token assign-left variable">seq</span><span class="token operator">=</span><span class="token number">1,637</span>,671,887,445 <span class="token assign-left variable">id</span><span class="token operator">=</span>c0b757529cd58dc4 <span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">119.23</span>.209.135 <span class="token assign-left variable">udp</span><span class="token operator">=</span><span class="token number">30303</span> <span class="token assign-left variable">tcp</span><span class="token operator">=</span><span class="token number">30303</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:38.023<span class="token punctuation">]</span> Looking <span class="token keyword">for</span> peers                        <span class="token assign-left variable">peercount</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">tried</span><span class="token operator">=</span><span class="token number">13</span> <span class="token assign-left variable">static</span><span class="token operator">=</span><span class="token number">0</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:43.142<span class="token punctuation">]</span> Block synchronisation started

WARN <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:43.142<span class="token punctuation">]</span> Enabling snapshot <span class="token function">sync</span> prototype
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:48.528<span class="token punctuation">]</span> Looking <span class="token keyword">for</span> peers                        <span class="token assign-left variable">peercount</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">tried</span><span class="token operator">=</span><span class="token number">22</span> <span class="token assign-left variable">static</span><span class="token operator">=</span><span class="token number">0</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:58.977<span class="token punctuation">]</span> Looking <span class="token keyword">for</span> peers                        <span class="token assign-left variable">peercount</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">tried</span><span class="token operator">=</span><span class="token number">29</span> <span class="token assign-left variable">static</span><span class="token operator">=</span><span class="token number">0</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:59.111<span class="token punctuation">]</span> Imported new block headers               <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">192</span> <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">943</span>.217ms <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">192</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span><span class="token number">723899</span><span class="token punctuation">..</span><span class="token number">123390</span> <span class="token assign-left variable">age</span><span class="token operator">=</span>6y4mo3w
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:59.112<span class="token punctuation">]</span> Downloader queue stats                   <span class="token assign-left variable">receiptTasks</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">blockTasks</span><span class="token operator">=</span><span class="token number">189</span> <span class="token assign-left variable">itemSize</span><span class="token operator">=</span><span class="token number">111</span>.09B <span class="token assign-left variable">throttle</span><span class="token operator">=</span><span class="token number">8192</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:59.112<span class="token punctuation">]</span> Wrote genesis to ancients
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:51:59.146<span class="token punctuation">]</span> Imported new block receipts              <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">2</span>   <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">33</span>.862ms  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">2</span>   <span class="token assign-left variable">hash</span><span class="token operator">=</span>b495a1<span class="token punctuation">..</span>4698c9 <span class="token assign-left variable">age</span><span class="token operator">=</span>6y4mo3w  <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">926</span>.00B
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:03.062<span class="token punctuation">]</span> State <span class="token function">sync</span> <span class="token keyword">in</span> progress                   <span class="token assign-left variable">synced</span><span class="token operator">=</span>+Inf% <span class="token assign-left variable">state</span><span class="token operator">=</span><span class="token number">46</span>.54KiB <span class="token assign-left variable">accounts</span><span class="token operator">=</span><span class="token number">0</span>@0.00B <span class="token assign-left variable">slots</span><span class="token operator">=</span><span class="token number">221</span>@46.54KiB <span class="token assign-left variable">codes</span><span class="token operator">=</span><span class="token number">0</span>@0.00B <span class="token assign-left variable">eta</span><span class="token operator">=</span>-9.530s
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:03.661<span class="token punctuation">]</span> Imported new block headers               <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">192</span> <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">22</span>.627ms  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">384</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span>d3d5d5<span class="token punctuation">..</span>c79cf3 <span class="token assign-left variable">age</span><span class="token operator">=</span>6y4mo3w
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:03.669<span class="token punctuation">]</span> Imported new block receipts              <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>   <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">30</span>.635ms  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">3</span>   <span class="token assign-left variable">hash</span><span class="token operator">=</span>3d6122<span class="token punctuation">..</span>8cf741 <span class="token assign-left variable">age</span><span class="token operator">=</span>6y4mo3w  <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">632</span>.00B
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:09.022<span class="token punctuation">]</span> Looking <span class="token keyword">for</span> peers                        <span class="token assign-left variable">peercount</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">tried</span><span class="token operator">=</span><span class="token number">20</span> <span class="token assign-left variable">static</span><span class="token operator">=</span><span class="token number">0</span>

^CINFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.327<span class="token punctuation">]</span> Got interrupt, shutting down<span class="token punctuation">..</span>.
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.327<span class="token punctuation">]</span> IPC endpoint closed                      <span class="token assign-left variable">url</span><span class="token operator">=</span>/root/go-ethereum/data/geth.ipc
WARN <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.328<span class="token punctuation">]</span> Rewinding blockchain                     <span class="token assign-left variable">target</span><span class="token operator">=</span><span class="token number">0</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.338<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> header          <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token assign-left variable">hash</span><span class="token operator">=</span>d4e567<span class="token punctuation">..</span>cb8fa3 <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">17,179</span>,869,184 <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.338<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> full block      <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token assign-left variable">hash</span><span class="token operator">=</span>d4e567<span class="token punctuation">..</span>cb8fa3 <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">17,179</span>,869,184 <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.338<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> fast block      <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token assign-left variable">hash</span><span class="token operator">=</span>d4e567<span class="token punctuation">..</span>cb8fa3 <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">17,179</span>,869,184 <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.338<span class="token punctuation">]</span> Loaded last fast-sync pivot marker       <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">13,670</span>,875
WARN <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.338<span class="token punctuation">]</span> Rolled back chain segment                <span class="token assign-left variable">header</span><span class="token operator">=</span><span class="token number">384</span>-<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token assign-left variable">fast</span><span class="token operator">=</span><span class="token number">3</span>-<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token assign-left variable">block</span><span class="token operator">=</span><span class="token number">0</span>-<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token assign-left variable">reason</span><span class="token operator">=</span><span class="token string">&quot;syncing canceled (requested)&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.339<span class="token punctuation">]</span> State <span class="token function">sync</span> <span class="token keyword">in</span> progress                   <span class="token assign-left variable">synced</span><span class="token operator">=</span>+Inf% <span class="token assign-left variable">state</span><span class="token operator">=</span><span class="token number">52</span>.97KiB <span class="token assign-left variable">accounts</span><span class="token operator">=</span><span class="token number">0</span>@0.00B <span class="token assign-left variable">slots</span><span class="token operator">=</span><span class="token number">221</span>@46.54KiB <span class="token assign-left variable">codes</span><span class="token operator">=</span><span class="token number">1</span>@6.42KiB <span class="token assign-left variable">eta</span><span class="token operator">=</span>-17.806s

WARN <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.339<span class="token punctuation">]</span> Synchronisation failed, dropping peer    <span class="token assign-left variable">peer</span><span class="token operator">=</span>83f472d81bfee4930e85212f1f1b95e3f81888166c249066c65771116bd79fea <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;retrieved hash chain is invalid: syncing canceled (requested)&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.339<span class="token punctuation">]</span> Ethereum protocol stopped
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.340<span class="token punctuation">]</span> Transaction pool stopped
ERROR<span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.340<span class="token punctuation">]</span> Failed to journal state snapshot         <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;snapshot [0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544] missing&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.340<span class="token punctuation">]</span> Writing clean trie cache to disk         <span class="token assign-left variable">path</span><span class="token operator">=</span>/root/go-ethereum/data/geth/triecache <span class="token assign-left variable">threads</span><span class="token operator">=</span><span class="token number">1</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.362<span class="token punctuation">]</span> Persisted the clean trie cache           <span class="token assign-left variable">path</span><span class="token operator">=</span>/root/go-ethereum/data/geth/triecache <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">22</span>.364ms
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">20</span>:52:11.362<span class="token punctuation">]</span> Blockchain stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、部署测试私链" tabindex="-1"><a class="header-anchor" href="#五、部署测试私链" aria-hidden="true">#</a> 五、部署测试私链</h2><p>直接部署，启动，并进行交互（<strong>推荐</strong>）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>geth <span class="token parameter variable">--datadir</span> ./devtest <span class="token parameter variable">--dev</span> console

<span class="token comment"># 输出摘录</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.026<span class="token punctuation">]</span> Starting Geth <span class="token keyword">in</span> ephemeral dev mode<span class="token punctuation">..</span>.
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.029<span class="token punctuation">]</span> Maximum peer count                       <span class="token assign-left variable">ETH</span><span class="token operator">=</span><span class="token number">50</span> <span class="token assign-left variable">LES</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">50</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.029<span class="token punctuation">]</span> Smartcard socket not found, disabling    <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;stat /run/pcscd/pcscd.comm: no such file or directory&quot;</span>
WARN <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.032<span class="token punctuation">]</span> Sanitizing cache to Go&#39;s GC limits       <span class="token assign-left variable">provided</span><span class="token operator">=</span><span class="token number">1024</span> <span class="token assign-left variable">updated</span><span class="token operator">=</span><span class="token number">664</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.033<span class="token punctuation">]</span> Set global gas cap                       <span class="token assign-left variable">cap</span><span class="token operator">=</span><span class="token number">50,000</span>,000
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.298<span class="token punctuation">]</span> Using developer account                  <span class="token assign-left variable">address</span><span class="token operator">=</span>0x8DD63Ad2EA49Dff3CF423b71381A3c355d653C85
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.298<span class="token punctuation">]</span> Allocated cache and <span class="token function">file</span> handles         <span class="token assign-left variable">database</span><span class="token operator">=</span>/root/go-ethereum/devtest/geth/chaindata <span class="token assign-left variable">cache</span><span class="token operator">=</span><span class="token number">332</span>.00MiB <span class="token assign-left variable">handles</span><span class="token operator">=</span><span class="token number">32767</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.321<span class="token punctuation">]</span> Opened ancient database                  <span class="token assign-left variable">database</span><span class="token operator">=</span>/root/go-ethereum/devtest/geth/chaindata/ancient <span class="token assign-left variable">readonly</span><span class="token operator">=</span>false
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.321<span class="token punctuation">]</span> Freezer shutting down
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.322<span class="token punctuation">]</span> Allocated trie memory caches             <span class="token assign-left variable">clean</span><span class="token operator">=</span><span class="token number">99</span>.00MiB <span class="token assign-left variable">dirty</span><span class="token operator">=</span><span class="token number">166</span>.00MiB
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.322<span class="token punctuation">]</span> Allocated cache and <span class="token function">file</span> handles         <span class="token assign-left variable">database</span><span class="token operator">=</span>/root/go-ethereum/devtest/geth/chaindata <span class="token assign-left variable">cache</span><span class="token operator">=</span><span class="token number">332</span>.00MiB <span class="token assign-left variable">handles</span><span class="token operator">=</span><span class="token number">32767</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.384<span class="token punctuation">]</span> Opened ancient database                  <span class="token assign-left variable">database</span><span class="token operator">=</span>/root/go-ethereum/devtest/geth/chaindata/ancient <span class="token assign-left variable">readonly</span><span class="token operator">=</span>false
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.384<span class="token punctuation">]</span> Writing custom genesis block
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.385<span class="token punctuation">]</span> Persisted trie from memory database      <span class="token assign-left variable">nodes</span><span class="token operator">=</span><span class="token number">12</span> <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">1</span>.82KiB <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token string">&quot;109.24µs&quot;</span> <span class="token assign-left variable">gcnodes</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">gcsize</span><span class="token operator">=</span><span class="token number">0</span>.00B <span class="token assign-left variable">gctime</span><span class="token operator">=</span>0s <span class="token assign-left variable">livenodes</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">livesize</span><span class="token operator">=</span><span class="token number">0</span>.00B
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.385<span class="token punctuation">]</span> Initialised chain configuration          <span class="token assign-left variable">config</span><span class="token operator">=</span><span class="token string">&quot;{ChainID: 1337 Homestead: 0 DAO: &lt;nil&gt; DAOSupport: false EIP150: 0 EIP155: 0 EIP158: 0 Byzantium: 0 Constantinople: 0 Petersburg: 0 Istanbul: 0, Muir Glacier: 0, Berlin: 0, London: 0, Arrow Glacier: &lt;nil&gt;, Engine: clique}&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.385<span class="token punctuation">]</span> Initialising Ethereum protocol           <span class="token assign-left variable">network</span><span class="token operator">=</span><span class="token number">1337</span> <span class="token assign-left variable">dbversion</span><span class="token operator">=</span><span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.386<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> header          <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span>a0a7c0<span class="token punctuation">..</span>729dfa <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.386<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> full block      <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span>a0a7c0<span class="token punctuation">..</span>729dfa <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.386<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> fast block      <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span>a0a7c0<span class="token punctuation">..</span>729dfa <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
WARN <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.386<span class="token punctuation">]</span> Failed to load snapshot, regenerating    <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;missing or corrupted snapshot&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.386<span class="token punctuation">]</span> Rebuilding state snapshot
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.387<span class="token punctuation">]</span> Regenerated <span class="token builtin class-name">local</span> transaction journal    <span class="token assign-left variable">transactions</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">accounts</span><span class="token operator">=</span><span class="token number">0</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.387<span class="token punctuation">]</span> Gasprice oracle is ignoring threshold <span class="token builtin class-name">set</span> <span class="token assign-left variable">threshold</span><span class="token operator">=</span><span class="token number">2</span>
WARN <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.387<span class="token punctuation">]</span> Error reading unclean <span class="token function">shutdown</span> markers   <span class="token assign-left variable">error</span><span class="token operator">=</span><span class="token string">&quot;leveldb: not found&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.387<span class="token punctuation">]</span> Starting peer-to-peer <span class="token function">node</span>               <span class="token assign-left variable">instance</span><span class="token operator">=</span>Geth/v1.10.13-unstable-7322b259-20211124/linux-amd64/go1.16.9
WARN <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.387<span class="token punctuation">]</span> P2P server will be useless, neither dialing nor listening
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.388<span class="token punctuation">]</span> Resuming state snapshot generation       <span class="token assign-left variable">root</span><span class="token operator">=</span>d95b8b<span class="token punctuation">..</span>c823f6 <span class="token assign-left variable">accounts</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">slots</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">storage</span><span class="token operator">=</span><span class="token number">0</span>.00B <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">1</span>.819ms
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.389<span class="token punctuation">]</span> Generated state snapshot                 <span class="token assign-left variable">accounts</span><span class="token operator">=</span><span class="token number">10</span> <span class="token assign-left variable">slots</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">storage</span><span class="token operator">=</span><span class="token number">412</span>.00B <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">2</span>.257ms
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.389<span class="token punctuation">]</span> Stored checkpoint snapshot to disk       <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span>a0a7c0<span class="token punctuation">..</span>729dfa
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.401<span class="token punctuation">]</span> IPC endpoint opened                      <span class="token assign-left variable">url</span><span class="token operator">=</span>/root/go-ethereum/devtest/geth.ipc
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.402<span class="token punctuation">]</span> Transaction pool price threshold updated <span class="token assign-left variable">price</span><span class="token operator">=</span><span class="token number">1,000</span>,000,000
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.402<span class="token punctuation">]</span> Transaction pool price threshold updated <span class="token assign-left variable">price</span><span class="token operator">=</span><span class="token number">1</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.402<span class="token punctuation">]</span> Etherbase automatically configured       <span class="token assign-left variable">address</span><span class="token operator">=</span>0x8DD63Ad2EA49Dff3CF423b71381A3c355d653C85
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.404<span class="token punctuation">]</span> New <span class="token builtin class-name">local</span> <span class="token function">node</span> record                    <span class="token assign-left variable">seq</span><span class="token operator">=</span><span class="token number">1,637</span>,714,772,401 <span class="token assign-left variable">id</span><span class="token operator">=</span>dccd53e5f082d349 <span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1 <span class="token assign-left variable">udp</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">tcp</span><span class="token operator">=</span><span class="token number">0</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.405<span class="token punctuation">]</span> Started P2P networking                   <span class="token assign-left variable">self</span><span class="token operator">=</span>enode://7bea999ff64bec0868ae588c5369e476a4e7062771145950e149d46c0bd3850b440ad9398093cd366963c2bd7c142ac9a846af3eca6b393e9380f6da593623cb@127.0.0.1:0
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.405<span class="token punctuation">]</span> Commit new mining work                   <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">sealhash</span><span class="token operator">=</span>b73ff4<span class="token punctuation">..</span>f40f98 <span class="token assign-left variable">uncles</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">txs</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">gas</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">fees</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token string">&quot;84.106µs&quot;</span>
WARN <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:12.405<span class="token punctuation">]</span> Block sealing failed                     <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;sealing paused while waiting for transactions&quot;</span>
Welcome to the Geth JavaScript console<span class="token operator">!</span>

instance: Geth/v1.10.13-unstable-7322b259-20211124/linux-amd64/go1.16.9
coinbase: 0x8dd63ad2ea49dff3cf423b71381a3c355d653c85
at block: <span class="token number">0</span> <span class="token punctuation">(</span>Thu Jan 01 <span class="token number">1970</span> 08:00:00 GMT+0800 <span class="token punctuation">(</span>CST<span class="token punctuation">))</span>
 datadir: /root/go-ethereum/devtest
 modules: admin:1.0 clique:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

To exit, press ctrl-d or <span class="token builtin class-name">type</span> <span class="token builtin class-name">exit</span>
<span class="token operator">&gt;</span> eth.accounts
<span class="token punctuation">[</span><span class="token string">&quot;0x8dd63ad2ea49dff3cf423b71381a3c355d653c85&quot;</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span> INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:19.360<span class="token punctuation">]</span> IPC endpoint closed                      <span class="token assign-left variable">url</span><span class="token operator">=</span>/root/go-ethereum/devtest/geth.ipc
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:19.360<span class="token punctuation">]</span> Ethereum protocol stopped
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:19.360<span class="token punctuation">]</span> Transaction pool stopped
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:19.360<span class="token punctuation">]</span> Writing snapshot state to disk           <span class="token assign-left variable">root</span><span class="token operator">=</span>d95b8b<span class="token punctuation">..</span>c823f6
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:19.360<span class="token punctuation">]</span> Persisted trie from memory database      <span class="token assign-left variable">nodes</span><span class="token operator">=</span><span class="token number">0</span>  <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">0</span>.00B   <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token string">&quot;5.182µs&quot;</span>  <span class="token assign-left variable">gcnodes</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">gcsize</span><span class="token operator">=</span><span class="token number">0</span>.00B <span class="token assign-left variable">gctime</span><span class="token operator">=</span>0s <span class="token assign-left variable">livenodes</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">livesize</span><span class="token operator">=</span><span class="token number">0</span>.00B
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:19.361<span class="token punctuation">]</span> Writing clean trie cache to disk         <span class="token assign-left variable">path</span><span class="token operator">=</span>/root/go-ethereum/devtest/geth/triecache <span class="token assign-left variable">threads</span><span class="token operator">=</span><span class="token number">1</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:19.362<span class="token punctuation">]</span> Persisted the clean trie cache           <span class="token assign-left variable">path</span><span class="token operator">=</span>/root/go-ethereum/devtest/geth/triecache <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token string">&quot;992.027µs&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:46:19.362<span class="token punctuation">]</span> Blockchain stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、部署自定义私链" tabindex="-1"><a class="header-anchor" href="#六、部署自定义私链" aria-hidden="true">#</a> 六、部署自定义私链</h2><p>新建<code>testChan</code>目录，用于存放测试数据：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> testChain
<span class="token builtin class-name">cd</span> testChain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建<code>genesis.json</code>文件，表示网络的创世状态：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;chainId&quot;</span><span class="token operator">:</span> <span class="token number">689</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;difficulty&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gasLimit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2100000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;alloc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;0xb8152CcB7F54deFc9e4AbE55605037c7D6214BE4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6897186000000000000000000&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),b={href:"https://learnblockchain.cn/books/geth/part1/genesis.html",target:"_blank",rel:"noopener noreferrer"},m=a(`<p><strong>初始化</strong>私链：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>geth <span class="token parameter variable">--datadir</span> <span class="token builtin class-name">.</span> init genesis.json

<span class="token comment"># 输出摘录</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.421<span class="token punctuation">]</span> Maximum peer count                       <span class="token assign-left variable">ETH</span><span class="token operator">=</span><span class="token number">50</span> <span class="token assign-left variable">LES</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">50</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.421<span class="token punctuation">]</span> Smartcard socket not found, disabling    <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;stat /run/pcscd/pcscd.comm: no such file or directory&quot;</span>
WARN <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.423<span class="token punctuation">]</span> Sanitizing cache to Go&#39;s GC limits       <span class="token assign-left variable">provided</span><span class="token operator">=</span><span class="token number">1024</span> <span class="token assign-left variable">updated</span><span class="token operator">=</span><span class="token number">664</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.423<span class="token punctuation">]</span> Set global gas cap                       <span class="token assign-left variable">cap</span><span class="token operator">=</span><span class="token number">50,000</span>,000
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.423<span class="token punctuation">]</span> Allocated cache and <span class="token function">file</span> handles         <span class="token assign-left variable">database</span><span class="token operator">=</span>/root/go-ethereum/testChain/geth/chaindata <span class="token assign-left variable">cache</span><span class="token operator">=</span><span class="token number">16</span>.00MiB <span class="token assign-left variable">handles</span><span class="token operator">=</span><span class="token number">16</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.437<span class="token punctuation">]</span> Writing custom genesis block
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.437<span class="token punctuation">]</span> Persisted trie from memory database      <span class="token assign-left variable">nodes</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">150</span>.00B <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token string">&quot;45.77µs&quot;</span> <span class="token assign-left variable">gcnodes</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">gcsize</span><span class="token operator">=</span><span class="token number">0</span>.00B <span class="token assign-left variable">gctime</span><span class="token operator">=</span>0s <span class="token assign-left variable">livenodes</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">livesize</span><span class="token operator">=</span><span class="token number">0</span>.00B
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.453<span class="token punctuation">]</span> Successfully wrote genesis state         <span class="token assign-left variable">database</span><span class="token operator">=</span>chaindata <span class="token assign-left variable">hash</span><span class="token operator">=</span>4c5cc4<span class="token punctuation">..</span>48a8b9
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.453<span class="token punctuation">]</span> Allocated cache and <span class="token function">file</span> handles         <span class="token assign-left variable">database</span><span class="token operator">=</span>/root/go-ethereum/testChain/geth/lightchaindata <span class="token assign-left variable">cache</span><span class="token operator">=</span><span class="token number">16</span>.00MiB <span class="token assign-left variable">handles</span><span class="token operator">=</span><span class="token number">16</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.463<span class="token punctuation">]</span> Writing custom genesis block
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.463<span class="token punctuation">]</span> Persisted trie from memory database      <span class="token assign-left variable">nodes</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">150</span>.00B <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token string">&quot;46.704µs&quot;</span> <span class="token assign-left variable">gcnodes</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">gcsize</span><span class="token operator">=</span><span class="token number">0</span>.00B <span class="token assign-left variable">gctime</span><span class="token operator">=</span>0s <span class="token assign-left variable">livenodes</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">livesize</span><span class="token operator">=</span><span class="token number">0</span>.00B
INFO <span class="token punctuation">[</span><span class="token number">11</span>-23<span class="token operator">|</span><span class="token number">23</span>:50:40.464<span class="token punctuation">]</span> Successfully wrote genesis state         <span class="token assign-left variable">database</span><span class="token operator">=</span>lightchaindata <span class="token assign-left variable">hash</span><span class="token operator">=</span>4c5cc4<span class="token punctuation">..</span>48a8b9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动</strong>私链：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>geth <span class="token parameter variable">--datadir</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">--networkid</span> <span class="token number">689</span> <span class="token parameter variable">--http</span> <span class="token parameter variable">--http.addr</span> <span class="token number">0.0</span>.0.0 <span class="token parameter variable">--nodiscover</span> --allow-insecure-unlock console <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>output.log

<span class="token comment"># 输出摘录</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.926<span class="token punctuation">]</span> Maximum peer count                       <span class="token assign-left variable">ETH</span><span class="token operator">=</span><span class="token number">50</span> <span class="token assign-left variable">LES</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token number">50</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.927<span class="token punctuation">]</span> Smartcard socket not found, disabling    <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;stat /run/pcscd/pcscd.comm: no such file or directory&quot;</span>
WARN <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.929<span class="token punctuation">]</span> Sanitizing cache to Go&#39;s GC limits       <span class="token assign-left variable">provided</span><span class="token operator">=</span><span class="token number">1024</span> <span class="token assign-left variable">updated</span><span class="token operator">=</span><span class="token number">664</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.929<span class="token punctuation">]</span> Snap <span class="token function">sync</span> requested, enabling <span class="token parameter variable">--snapshot</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.929<span class="token punctuation">]</span> Set global gas cap                       <span class="token assign-left variable">cap</span><span class="token operator">=</span><span class="token number">50,000</span>,000
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.929<span class="token punctuation">]</span> Allocated trie memory caches             <span class="token assign-left variable">clean</span><span class="token operator">=</span><span class="token number">99</span>.00MiB <span class="token assign-left variable">dirty</span><span class="token operator">=</span><span class="token number">166</span>.00MiB
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.929<span class="token punctuation">]</span> Allocated cache and <span class="token function">file</span> handles         <span class="token assign-left variable">database</span><span class="token operator">=</span>/root/go-ethereum/testChain/geth/chaindata <span class="token assign-left variable">cache</span><span class="token operator">=</span><span class="token number">332</span>.00MiB <span class="token assign-left variable">handles</span><span class="token operator">=</span><span class="token number">32767</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.960<span class="token punctuation">]</span> Opened ancient database                  <span class="token assign-left variable">database</span><span class="token operator">=</span>/root/go-ethereum/testChain/geth/chaindata/ancient <span class="token assign-left variable">readonly</span><span class="token operator">=</span>false
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.961<span class="token punctuation">]</span> Initialised chain configuration          <span class="token assign-left variable">config</span><span class="token operator">=</span><span class="token string">&quot;{ChainID: 689 Homestead: &lt;nil&gt; DAO: &lt;nil&gt; DAOSupport: false EIP150: &lt;nil&gt; EIP155: &lt;nil&gt; EIP158: &lt;nil&gt; Byzantium: &lt;nil&gt; Constantinople: &lt;nil&gt; Petersburg: &lt;nil&gt; Istanbul: &lt;nil&gt;, Muir Glacier: &lt;nil&gt;, Berlin: &lt;nil&gt;, London: &lt;nil&gt;, Arrow Glacier: &lt;nil&gt;, Engine: unknown}&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.961<span class="token punctuation">]</span> Disk storage enabled <span class="token keyword">for</span> ethash caches   <span class="token assign-left variable">dir</span><span class="token operator">=</span>/root/go-ethereum/testChain/geth/ethash <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">3</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.961<span class="token punctuation">]</span> Disk storage enabled <span class="token keyword">for</span> ethash DAGs     <span class="token assign-left variable">dir</span><span class="token operator">=</span>/root/.ethash                           <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">2</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.961<span class="token punctuation">]</span> Initialising Ethereum protocol           <span class="token assign-left variable">network</span><span class="token operator">=</span><span class="token number">689</span> <span class="token assign-left variable">dbversion</span><span class="token operator">=</span><span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.963<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> header          <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span>4c5cc4<span class="token punctuation">..</span>48a8b9 <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">2000</span> <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.963<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> full block      <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span>4c5cc4<span class="token punctuation">..</span>48a8b9 <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">2000</span> <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.963<span class="token punctuation">]</span> Loaded <span class="token function">most</span> recent <span class="token builtin class-name">local</span> fast block      <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">hash</span><span class="token operator">=</span>4c5cc4<span class="token punctuation">..</span>48a8b9 <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token number">2000</span> <span class="token assign-left variable">age</span><span class="token operator">=</span>52y7mo3w
WARN <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.963<span class="token punctuation">]</span> Failed to load snapshot, regenerating    <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;missing or corrupted snapshot&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.963<span class="token punctuation">]</span> Rebuilding state snapshot
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.964<span class="token punctuation">]</span> Regenerated <span class="token builtin class-name">local</span> transaction journal    <span class="token assign-left variable">transactions</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">accounts</span><span class="token operator">=</span><span class="token number">0</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.964<span class="token punctuation">]</span> Gasprice oracle is ignoring threshold <span class="token builtin class-name">set</span> <span class="token assign-left variable">threshold</span><span class="token operator">=</span><span class="token number">2</span>
WARN <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.964<span class="token punctuation">]</span> Error reading unclean <span class="token function">shutdown</span> markers   <span class="token assign-left variable">error</span><span class="token operator">=</span><span class="token string">&quot;leveldb: not found&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.965<span class="token punctuation">]</span> Starting peer-to-peer <span class="token function">node</span>               <span class="token assign-left variable">instance</span><span class="token operator">=</span>Geth/v1.10.13-unstable-347c37b3-20211123/linux-amd64/go1.16.9
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.966<span class="token punctuation">]</span> Resuming state snapshot generation       <span class="token assign-left variable">root</span><span class="token operator">=</span>c0494c<span class="token punctuation">..</span>19152e <span class="token assign-left variable">accounts</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">slots</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">storage</span><span class="token operator">=</span><span class="token number">0</span>.00B <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">2</span>.650ms
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.966<span class="token punctuation">]</span> Generated state snapshot                 <span class="token assign-left variable">accounts</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">slots</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">storage</span><span class="token operator">=</span><span class="token number">49</span>.00B <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token number">3</span>.122ms
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.978<span class="token punctuation">]</span> New <span class="token builtin class-name">local</span> <span class="token function">node</span> record                    <span class="token assign-left variable">seq</span><span class="token operator">=</span><span class="token number">1,637</span>,683,871,977 <span class="token assign-left variable">id</span><span class="token operator">=</span>7818561120f976ae <span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1 <span class="token assign-left variable">udp</span><span class="token operator">=</span><span class="token number">30303</span> <span class="token assign-left variable">tcp</span><span class="token operator">=</span><span class="token number">30303</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.980<span class="token punctuation">]</span> IPC endpoint opened                      <span class="token assign-left variable">url</span><span class="token operator">=</span>/root/go-ethereum/testChain/geth.ipc
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:11.981<span class="token punctuation">]</span> Started P2P networking                   <span class="token assign-left variable">self</span><span class="token operator">=</span>enode://d425f111d8d46021152573c649b265693f053b2975d1dc657e7a049fa8675609afcf431a539edea24ac271db168351061f2a0465c2f6ed2de67d768195bd4a3f@127.0.0.1:30303
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:13.105<span class="token punctuation">]</span> New <span class="token builtin class-name">local</span> <span class="token function">node</span> record                    <span class="token assign-left variable">seq</span><span class="token operator">=</span><span class="token number">1,637</span>,683,871,978 <span class="token assign-left variable">id</span><span class="token operator">=</span>7818561120f976ae <span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">119.23</span>.209.135 <span class="token assign-left variable">udp</span><span class="token operator">=</span><span class="token number">30303</span> <span class="token assign-left variable">tcp</span><span class="token operator">=</span><span class="token number">30303</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:58.255<span class="token punctuation">]</span> Looking <span class="token keyword">for</span> peers                        <span class="token assign-left variable">peercount</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">tried</span><span class="token operator">=</span><span class="token number">48</span> <span class="token assign-left variable">static</span><span class="token operator">=</span><span class="token number">0</span>
ERROR<span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:58.436<span class="token punctuation">]</span> Snapshot extension registration failed   <span class="token assign-left variable">peer</span><span class="token operator">=</span>a6c868a1 <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;peer connected on snap without compatible eth support&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:58.489<span class="token punctuation">]</span> Looking <span class="token keyword">for</span> peers                        <span class="token assign-left variable">peercount</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">tried</span><span class="token operator">=</span><span class="token number">42</span> <span class="token assign-left variable">static</span><span class="token operator">=</span><span class="token number">0</span>

^CINFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:59.563<span class="token punctuation">]</span> Got interrupt, shutting down<span class="token punctuation">..</span>.
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:59.563<span class="token punctuation">]</span> IPC endpoint closed                      <span class="token assign-left variable">url</span><span class="token operator">=</span>/root/go-ethereum/testChain/geth.ipc
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:59.563<span class="token punctuation">]</span> Ethereum protocol stopped
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:59.563<span class="token punctuation">]</span> Transaction pool stopped
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:59.563<span class="token punctuation">]</span> Writing snapshot state to disk           <span class="token assign-left variable">root</span><span class="token operator">=</span>c0494c<span class="token punctuation">..</span>19152e
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:59.563<span class="token punctuation">]</span> Persisted trie from memory database      <span class="token assign-left variable">nodes</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token number">0</span>.00B <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token string">&quot;5.661µs&quot;</span> <span class="token assign-left variable">gcnodes</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">gcsize</span><span class="token operator">=</span><span class="token number">0</span>.00B <span class="token assign-left variable">gctime</span><span class="token operator">=</span>0s <span class="token assign-left variable">livenodes</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">livesize</span><span class="token operator">=</span><span class="token number">0</span>.00B
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:59.564<span class="token punctuation">]</span> Writing clean trie cache to disk         <span class="token assign-left variable">path</span><span class="token operator">=</span>/root/go-ethereum/testChain/geth/triecache <span class="token assign-left variable">threads</span><span class="token operator">=</span><span class="token number">1</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:59.564<span class="token punctuation">]</span> Persisted the clean trie cache           <span class="token assign-left variable">path</span><span class="token operator">=</span>/root/go-ethereum/testChain/geth/triecache <span class="token assign-left variable">elapsed</span><span class="token operator">=</span><span class="token string">&quot;567.262µs&quot;</span>
INFO <span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>00:11:59.564<span class="token punctuation">]</span> Blockchain stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存在的<strong>错误</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ERROR<span class="token punctuation">[</span><span class="token number">11</span>-24<span class="token operator">|</span>08:39:58.084<span class="token punctuation">]</span> Snapshot extension registration failed   <span class="token assign-left variable">peer</span><span class="token operator">=</span>a6c868a1 <span class="token assign-left variable">err</span><span class="token operator">=</span><span class="token string">&quot;peer connected on snap without compatible eth support&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决方法<strong>未知</strong></p><h2 id="七、完整安装过程输出" tabindex="-1"><a class="header-anchor" href="#七、完整安装过程输出" aria-hidden="true">#</a> 七、完整安装过程输出</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">env</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on go run build/ci.go <span class="token function">install</span> ./cmd/geth
go: downloading github.com/cespare/cp v0.1.0
go: downloading github.com/Azure/azure-storage-blob-go v0.7.0
go: downloading golang.org/x/crypto v0.0.0-20210322153248-0c34fe9e7dc2
go: downloading github.com/Azure/azure-pipeline-go v0.2.2
go: downloading github.com/mattn/go-ieproxy v0.0.0-20190702010315-6dee0af9227d
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> /usr/local/go/bin/go build <span class="token parameter variable">-ldflags</span> <span class="token parameter variable">-X</span> <span class="token assign-left variable">main.gitCommit</span><span class="token operator">=</span>347c37b362dbcf1cd986a5b0000a9d67667f6bee <span class="token parameter variable">-X</span> <span class="token assign-left variable">main.gitDate</span><span class="token operator">=</span><span class="token number">20211123</span> <span class="token parameter variable">-extldflags</span> -Wl,-z,stack-size<span class="token operator">=</span>0x800000 <span class="token parameter variable">-trimpath</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-o</span> /root/go-ethereum/build/bin/geth ./cmd/geth
go: downloading github.com/jedisct1/go-minisign v0.0.0-20190909160543-45766022959e
go: downloading github.com/naoina/toml v0.1.2-0.20170918210437-9fafd6967416
go: downloading gopkg.in/urfave/cli.v1 v1.20.0
go: downloading github.com/deckarep/golang-set v0.0.0-20180603214616-504e848d77ea
go: downloading github.com/google/uuid v1.1.5
go: downloading github.com/rjeczalik/notify v0.9.1
go: downloading github.com/gballet/go-libpcsclite v0.0.0-20190607065134-2772fd86a8ff
go: downloading github.com/status-im/keycard-go v0.0.0-20190316090335-8537d3370df4
go: downloading github.com/golang/protobuf v1.4.3
go: downloading github.com/karalabe/usb v0.0.0-20211005121534-4c5740d64559
go: downloading github.com/shirou/gopsutil v3.21.4-0.20210419000835-c7a38de76ee5+incompatible
go: downloading golang.org/x/sys v0.0.0-20210816183151-1e6c022a8912
go: downloading github.com/edsrzf/mmap-go v1.0.0
go: downloading github.com/hashicorp/golang-lru v0.5.5-0.20210104140557-80c98217689d
go: downloading github.com/holiman/uint256 v1.2.0
go: downloading github.com/dop251/goja v0.0.0-20211011172007-d99e4b8cbf48
go: downloading github.com/mattn/go-colorable v0.1.8
go: downloading github.com/peterh/liner v1.1.1-0.20190123174540-a2c9a5303de7
go: downloading github.com/golang/snappy v0.0.4
go: downloading github.com/olekukonko/tablewriter v0.0.5
go: downloading github.com/prometheus/tsdb v0.7.1
go: downloading github.com/VictoriaMetrics/fastcache v1.6.0
go: downloading github.com/holiman/bloomfilter/v2 v2.0.3
go: downloading gopkg.in/olebedev/go-duktape.v3 v3.0.0-20200619000410-60c24ae608a6
go: downloading github.com/fjl/memsize v0.0.0-20190710130421-bcb5799ab5e5
go: downloading github.com/hashicorp/go-bexpr v0.1.10
go: downloading github.com/mattn/go-isatty v0.0.12
go: downloading github.com/tyler-smith/go-bip39 v1.0.1-0.20181017060643-dbb3b84ba2ef
go: downloading github.com/go-stack/stack v1.8.0
go: downloading github.com/rs/cors v1.7.0
go: downloading github.com/gorilla/websocket v1.4.2
go: downloading github.com/naoina/go-stringutil v0.1.0
go: downloading google.golang.org/protobuf v1.23.0
go: downloading github.com/graph-gophers/graphql-go v0.0.0-20201113091052-beb923fada29
go: downloading github.com/influxdata/influxdb-client-go/v2 v2.4.0
go: downloading github.com/influxdata/influxdb v1.8.3
go: downloading github.com/syndtr/goleveldb v1.0.1-0.20210819022825-2ae1ddf74ef7
go: downloading github.com/huin/goupnp v1.0.2
go: downloading github.com/jackpal/go-nat-pmp v1.0.2-0.20160603034137-1fa385a6f458
go: downloading github.com/dlclark/regexp2 v1.4.1-0.20201116162257-a2a8dda75c91
go: downloading github.com/fatih/color v1.7.0
go: downloading github.com/mattn/go-runewidth v0.0.9
go: downloading github.com/pkg/errors v0.9.1
go: downloading github.com/cespare/xxhash v1.1.0
go: downloading github.com/cespare/xxhash/v2 v2.1.1
go: downloading golang.org/x/sync v0.0.0-20210220032951-036812b2e83c
go: downloading golang.org/x/time v0.0.0-20210220033141-f8bda1e9f3ba
go: downloading github.com/mitchellh/pointerstructure v1.2.0
go: downloading github.com/tklauser/go-sysconf v0.3.5
go: downloading github.com/go-sourcemap/sourcemap v2.1.3+incompatible
go: downloading github.com/mitchellh/mapstructure v1.4.1
go: downloading github.com/tklauser/numcpus v0.2.2
go: downloading github.com/opentracing/opentracing-go v1.1.0
go: downloading github.com/influxdata/line-protocol v0.0.0-20210311194329-9aa0e372d097
go: downloading github.com/deepmap/oapi-codegen v1.8.2
go: downloading gopkg.in/yaml.v2 v2.4.0
internal/unsafeheader
internal/cpu
internal/bytealg
runtime/internal/atomic
runtime/internal/sys
runtime/internal/math
runtime
internal/reflectlite
errors
internal/race
sync/atomic
<span class="token function">sync</span>
io
unicode
unicode/utf8
bytes
strings
bufio
encoding
math/bits
math
strconv
reflect
encoding/binary
encoding/base64
<span class="token function">sort</span>
internal/fmtsort
internal/oserror
syscall
internal/syscall/unix
<span class="token function">time</span>
internal/poll
internal/syscall/execenv
internal/testlog
path
io/fs
os
<span class="token function">fmt</span>
unicode/utf16
encoding/json
context
database/sql/driver
encoding/hex
math/rand
math/big
github.com/ethereum/go-ethereum/common/hexutil
<span class="token builtin class-name">hash</span>
crypto
golang.org/x/crypto/sha3
path/filepath
io/ioutil
regexp/syntax
regexp
runtime/debug
github.com/ethereum/go-ethereum/common
container/heap
crypto/internal/subtle
crypto/subtle
crypto/cipher
crypto/aes
crypto/elliptic
crypto/internal/randutil
crypto/sha512
encoding/asn1
vendor/golang.org/x/crypto/cryptobyte/asn1
vendor/golang.org/x/crypto/cryptobyte
crypto/ecdsa
github.com/ethereum/go-ethereum/common/math
crypto/rand
runtime/cgo
github.com/ethereum/go-ethereum/crypto/secp256k1
github.com/ethereum/go-ethereum/rlp
github.com/ethereum/go-ethereum/crypto
github.com/ethereum/go-ethereum/params
github.com/ethereum/go-ethereum/core/types
github.com/ethereum/go-ethereum
github.com/ethereum/go-ethereum/common/mclock
github.com/ethereum/go-ethereum/event
github.com/ethereum/go-ethereum/accounts
github.com/go-stack/stack
log
vendor/golang.org/x/net/dns/dnsmessage
internal/nettrace
internal/singleflight
net
log/syslog
github.com/ethereum/go-ethereum/log
container/list
github.com/deckarep/golang-set
net/url
os/exec
github.com/shirou/gopsutil/internal/common
github.com/tklauser/numcpus
golang.org/x/sys/internal/unsafeheader
golang.org/x/sys/unix
github.com/tklauser/go-sysconf
github.com/shirou/gopsutil/cpu
compress/flate
hash/crc32
compress/gzip
text/tabwriter
runtime/pprof
github.com/ethereum/go-ethereum/metrics
github.com/ethereum/go-ethereum/p2p/netutil
crypto/sha1
crypto/des
crypto/ed25519/internal/edwards25519
crypto/ed25519
crypto/hmac
crypto/md5
crypto/rc4
crypto/rsa
crypto/sha256
crypto/dsa
crypto/x509/pkix
encoding/pem
crypto/x509
vendor/golang.org/x/crypto/internal/subtle
vendor/golang.org/x/crypto/chacha20
vendor/golang.org/x/crypto/poly1305
vendor/golang.org/x/sys/cpu
vendor/golang.org/x/crypto/chacha20poly1305
vendor/golang.org/x/crypto/curve25519
vendor/golang.org/x/crypto/hkdf
crypto/tls
vendor/golang.org/x/text/transform
vendor/golang.org/x/text/unicode/bidi
vendor/golang.org/x/text/secure/bidirule
vendor/golang.org/x/text/unicode/norm
vendor/golang.org/x/net/idna
net/textproto
vendor/golang.org/x/net/http/httpguts
vendor/golang.org/x/net/http/httpproxy
vendor/golang.org/x/net/http2/hpack
mime
mime/quotedprintable
mime/multipart
net/http/httptrace
net/http/internal
net/http
github.com/gorilla/websocket
github.com/ethereum/go-ethereum/rpc
github.com/ethereum/go-ethereum/signer/core/apitypes
github.com/ethereum/go-ethereum/accounts/external
github.com/google/uuid
github.com/rjeczalik/notify
golang.org/x/crypto/pbkdf2
golang.org/x/crypto/scrypt
github.com/ethereum/go-ethereum/accounts/keystore
github.com/gballet/go-libpcsclite
github.com/status-im/keycard-go/derivationpath
golang.org/x/text/transform
golang.org/x/text/unicode/norm
github.com/ethereum/go-ethereum/accounts/scwallet
hash/fnv
google.golang.org/protobuf/internal/detrand
google.golang.org/protobuf/internal/errors
google.golang.org/protobuf/encoding/protowire
google.golang.org/protobuf/internal/pragma
google.golang.org/protobuf/reflect/protoreflect
google.golang.org/protobuf/reflect/protoregistry
google.golang.org/protobuf/internal/encoding/messageset
google.golang.org/protobuf/internal/flags
go/token
google.golang.org/protobuf/internal/strs
google.golang.org/protobuf/internal/encoding/text
google.golang.org/protobuf/internal/fieldnum
google.golang.org/protobuf/internal/mapsort
google.golang.org/protobuf/internal/set
google.golang.org/protobuf/internal/fieldsort
google.golang.org/protobuf/runtime/protoiface
google.golang.org/protobuf/proto
google.golang.org/protobuf/encoding/prototext
google.golang.org/protobuf/internal/descfmt
google.golang.org/protobuf/internal/descopts
google.golang.org/protobuf/internal/encoding/defval
google.golang.org/protobuf/internal/filedesc
google.golang.org/protobuf/internal/encoding/tag
google.golang.org/protobuf/internal/genname
google.golang.org/protobuf/internal/impl
google.golang.org/protobuf/internal/filetype
google.golang.org/protobuf/internal/version
google.golang.org/protobuf/runtime/protoimpl
github.com/golang/protobuf/proto
google.golang.org/protobuf/types/descriptorpb
github.com/golang/protobuf/protoc-gen-go/descriptor
github.com/ethereum/go-ethereum/accounts/usbwallet/trezor
github.com/karalabe/usb
github.com/ethereum/go-ethereum/accounts/usbwallet
flag
github.com/ethereum/go-ethereum/common/fdlimit
github.com/cespare/xxhash/v2
github.com/golang/snappy
github.com/VictoriaMetrics/fastcache
github.com/ethereum/go-ethereum/common/prque
github.com/ethereum/go-ethereum/ethdb
github.com/syndtr/goleveldb/leveldb/util
github.com/syndtr/goleveldb/leveldb/cache
github.com/syndtr/goleveldb/leveldb/comparer
github.com/syndtr/goleveldb/leveldb/storage
github.com/syndtr/goleveldb/leveldb/errors
github.com/syndtr/goleveldb/leveldb/filter
github.com/syndtr/goleveldb/leveldb/iterator
github.com/syndtr/goleveldb/leveldb/journal
github.com/syndtr/goleveldb/leveldb/memdb
github.com/syndtr/goleveldb/leveldb/opt
github.com/syndtr/goleveldb/leveldb/table
github.com/syndtr/goleveldb/leveldb
github.com/ethereum/go-ethereum/ethdb/leveldb
github.com/ethereum/go-ethereum/ethdb/memorydb
encoding/csv
github.com/mattn/go-runewidth
github.com/olekukonko/tablewriter
github.com/pkg/errors
github.com/prometheus/tsdb/fileutil
github.com/ethereum/go-ethereum/core/rawdb
encoding/gob
github.com/holiman/bloomfilter/v2
github.com/ethereum/go-ethereum/trie
github.com/ethereum/go-ethereum/core/state/snapshot
github.com/hashicorp/golang-lru/simplelru
github.com/hashicorp/golang-lru
github.com/ethereum/go-ethereum/core/state
github.com/ethereum/go-ethereum/consensus
github.com/ethereum/go-ethereum/consensus/misc
github.com/ethereum/go-ethereum/consensus/clique
github.com/edsrzf/mmap-go
github.com/ethereum/go-ethereum/common/bitutil
github.com/holiman/uint256
github.com/ethereum/go-ethereum/consensus/ethash
container/ring
os/signal
github.com/peterh/liner
github.com/ethereum/go-ethereum/console/prompt
github.com/ethereum/go-ethereum/core/bloombits
golang.org/x/sys/cpu
github.com/ethereum/go-ethereum/crypto/blake2b
github.com/ethereum/go-ethereum/crypto/bls12381
github.com/ethereum/go-ethereum/crypto/bn256/cloudflare
github.com/ethereum/go-ethereum/crypto/bn256
golang.org/x/crypto/ripemd160
github.com/ethereum/go-ethereum/core/vm
github.com/ethereum/go-ethereum/internal/syncx
github.com/ethereum/go-ethereum/core
github.com/ethereum/go-ethereum/core/forkid
github.com/ethereum/go-ethereum/core/state/pruner
github.com/ethereum/go-ethereum/p2p/enr
github.com/ethereum/go-ethereum/p2p/enode
github.com/ethereum/go-ethereum/p2p/discover/v4wire
golang.org/x/crypto/hkdf
github.com/ethereum/go-ethereum/p2p/discover/v5wire
github.com/ethereum/go-ethereum/p2p/discover
encoding/xml
golang.org/x/sync/errgroup
github.com/huin/goupnp/httpu
github.com/huin/goupnp/scpd
github.com/huin/goupnp/soap
github.com/huin/goupnp/ssdp
github.com/huin/goupnp
github.com/huin/goupnp/dcps/internetgateway1
github.com/huin/goupnp/dcps/internetgateway2
github.com/jackpal/go-nat-pmp
github.com/ethereum/go-ethereum/p2p/nat
github.com/ethereum/go-ethereum/crypto/ecies
github.com/ethereum/go-ethereum/p2p/rlpx
github.com/ethereum/go-ethereum/p2p
github.com/ethereum/go-ethereum/p2p/tracker
github.com/ethereum/go-ethereum/eth/protocols/eth
github.com/ethereum/go-ethereum/light
github.com/ethereum/go-ethereum/p2p/msgrate
github.com/ethereum/go-ethereum/eth/protocols/snap
github.com/ethereum/go-ethereum/eth/downloader
github.com/ethereum/go-ethereum/eth/gasprice
github.com/ethereum/go-ethereum/miner
expvar
github.com/ethereum/go-ethereum/metrics/prometheus
github.com/ethereum/go-ethereum/metrics/exp
github.com/fjl/memsize
html
text/template/parse
text/template
html/template
github.com/fjl/memsize/memsizeui
github.com/mitchellh/mapstructure
github.com/mitchellh/pointerstructure
github.com/hashicorp/go-bexpr/grammar
github.com/hashicorp/go-bexpr
github.com/mattn/go-isatty
github.com/mattn/go-colorable
gopkg.in/urfave/cli.v1
internal/profile
runtime/trace
net/http/pprof
os/user
github.com/ethereum/go-ethereum/internal/debug
github.com/rs/cors
github.com/ethereum/go-ethereum/node
github.com/ethereum/go-ethereum/eth/ethconfig
github.com/ethereum/go-ethereum/eth/fetcher
github.com/ethereum/go-ethereum/eth/filters
github.com/davecgh/go-spew/spew
github.com/ethereum/go-ethereum/accounts/abi
github.com/tyler-smith/go-bip39/wordlists
github.com/tyler-smith/go-bip39
github.com/ethereum/go-ethereum/internal/ethapi
encoding/base32
golang.org/x/sync/singleflight
golang.org/x/time/rate
github.com/ethereum/go-ethereum/p2p/dnsdisc
github.com/ethereum/go-ethereum/eth
github.com/ethereum/go-ethereum/eth/tracers
go/scanner
go/ast
go/parser
go/printer
go/format
github.com/ethereum/go-ethereum/accounts/abi/bind
github.com/ethereum/go-ethereum/accounts/abi/bind/backends
github.com/ethereum/go-ethereum/contracts/checkpointoracle/contract
github.com/ethereum/go-ethereum/ethclient
github.com/ethereum/go-ethereum/contracts/checkpointoracle
github.com/ethereum/go-ethereum/les/checkpointoracle
github.com/ethereum/go-ethereum/les/downloader
github.com/ethereum/go-ethereum/les/fetcher
github.com/ethereum/go-ethereum/les/flowcontrol
github.com/ethereum/go-ethereum/les/utils
github.com/ethereum/go-ethereum/les/vflux
github.com/ethereum/go-ethereum/p2p/nodestate
github.com/ethereum/go-ethereum/les/vflux/client
github.com/ethereum/go-ethereum/les/vflux/server
internal/sysinfo
testing
github.com/ethereum/go-ethereum/les
github.com/ethereum/go-ethereum/ethstats
github.com/graph-gophers/graphql-go/errors
text/scanner
github.com/graph-gophers/graphql-go/internal/common
github.com/graph-gophers/graphql-go/internal/schema
github.com/graph-gophers/graphql-go/internal/exec/packer
github.com/graph-gophers/graphql-go/introspection
github.com/graph-gophers/graphql-go/internal/exec/resolvable
github.com/graph-gophers/graphql-go/internal/query
github.com/graph-gophers/graphql-go/internal/exec/selected
github.com/graph-gophers/graphql-go/log
github.com/opentracing/opentracing-go/log
github.com/opentracing/opentracing-go
github.com/opentracing/opentracing-go/ext
github.com/graph-gophers/graphql-go/trace
github.com/graph-gophers/graphql-go/internal/exec
github.com/graph-gophers/graphql-go/internal/validation
github.com/graph-gophers/graphql-go
github.com/ethereum/go-ethereum/graphql
github.com/ethereum/go-ethereum/internal/flags
github.com/influxdata/influxdb-client-go/v2/internal/http
github.com/influxdata/influxdb-client-go/v2/log
github.com/influxdata/influxdb-client-go/v2/internal/log
github.com/influxdata/influxdb-client-go/v2/api/http
github.com/influxdata/influxdb-client-go/v2/api/query
github.com/influxdata/line-protocol
github.com/influxdata/influxdb-client-go/v2/api/write
github.com/deepmap/oapi-codegen/pkg/types
github.com/deepmap/oapi-codegen/pkg/runtime
gopkg.in/yaml.v2
github.com/influxdata/influxdb-client-go/v2/domain
github.com/influxdata/influxdb-client-go/v2/internal/gzip
github.com/influxdata/influxdb-client-go/v2/internal/write
net/http/cookiejar
golang.org/x/net/publicsuffix
github.com/influxdata/influxdb-client-go/v2/api
github.com/influxdata/influxdb-client-go/v2
github.com/influxdata/influxdb/pkg/escape
github.com/influxdata/influxdb/models
github.com/influxdata/influxdb/client
github.com/ethereum/go-ethereum/metrics/influxdb
github.com/shirou/gopsutil/mem
github.com/ethereum/go-ethereum/cmd/utils
github.com/dlclark/regexp2/syntax
github.com/dlclark/regexp2
github.com/go-sourcemap/sourcemap/internal/base64vlq
github.com/go-sourcemap/sourcemap
github.com/dop251/goja/file
github.com/dop251/goja/token
github.com/dop251/goja/unistring
github.com/dop251/goja/ast
github.com/dop251/goja/ftoa/internal/fast
github.com/dop251/goja/ftoa
github.com/dop251/goja/parser
golang.org/x/text/internal/tag
golang.org/x/text/internal/language
golang.org/x/text/internal/language/compact
golang.org/x/text/language
golang.org/x/text/internal
golang.org/x/text/cases
golang.org/x/text/internal/colltab
golang.org/x/text/collate
hash/maphash
github.com/dop251/goja
github.com/fatih/color
github.com/ethereum/go-ethereum/internal/jsre
github.com/ethereum/go-ethereum/internal/jsre/deps
github.com/ethereum/go-ethereum/internal/web3ext
github.com/ethereum/go-ethereum/console
github.com/ethereum/go-ethereum/eth/catalyst
github.com/ethereum/go-ethereum/eth/tracers/js/internal/tracers
gopkg.in/olebedev/go-duktape.v3
github.com/ethereum/go-ethereum/eth/tracers/js
github.com/ethereum/go-ethereum/eth/tracers/native
golang.org/x/crypto/ed25519
github.com/jedisct1/go-minisign
github.com/naoina/go-stringutil
github.com/naoina/toml/ast
github.com/naoina/toml
github.com/ethereum/go-ethereum/cmd/geth
Done building.
Run <span class="token string">&quot;./build/bin/geth&quot;</span> to launch geth.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function v(k,g){const e=p("ExternalLinkIcon");return l(),i("div",null,[r,n("p",null,[n("a",u,[s("https://geth.ethereum.org/downloads/"),t(e)])]),d,n("blockquote",null,[n("p",null,[s("参数及说明："),n("a",b,[s("以太坊创世区块"),t(e)])])]),m])}const y=o(c,[["render",v],["__file","2.geth_setup.html.vue"]]);export{y as default};
