import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as p,a as n,b as s,d as e,e as t}from"./app-07a77cc8.js";const c={},r=n("h1",{id:"fabric案例-test-network",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fabric案例-test-network","aria-hidden":"true"},"#"),s(" Fabric案例 - test-network")],-1),d={id:"一、network-sh-命令帮助",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#一、network-sh-命令帮助","aria-hidden":"true"},"#",-1),v={href:"http://network.sh",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./network.sh <span class="token parameter variable">-h</span>

<span class="token comment"># 输出结果</span>
Usage:
  network.sh <span class="token operator">&lt;</span>Mode<span class="token operator">&gt;</span> <span class="token punctuation">[</span>Flags<span class="token punctuation">]</span>
    Modes:
      up - Bring up Fabric orderer and peer nodes. No channel is created
      up createChannel - Bring up fabric network with one channel
      createChannel - Create and <span class="token function">join</span> a channel after the network is created
      deployCC - Deploy a chaincode to a channel <span class="token punctuation">(</span>defaults to asset-transfer-basic<span class="token punctuation">)</span>
      down - Bring down the network

    Flags:
    Used with network.sh up, network.sh createChannel:
    <span class="token parameter variable">-ca</span> <span class="token operator">&lt;</span>use CAs<span class="token operator">&gt;</span> -  Use Certificate Authorities to generate network crypto material
    <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>channel name<span class="token operator">&gt;</span> - Name of channel to create <span class="token punctuation">(</span>defaults to <span class="token string">&quot;mychannel&quot;</span><span class="token punctuation">)</span>
    <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>dbtype<span class="token operator">&gt;</span> - Peer state database to deploy: goleveldb <span class="token punctuation">(</span>default<span class="token punctuation">)</span> or couchdb
    <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>max retry<span class="token operator">&gt;</span> - CLI <span class="token builtin class-name">times</span> out after certain number of attempts <span class="token punctuation">(</span>defaults to <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>delay<span class="token operator">&gt;</span> - CLI delays <span class="token keyword">for</span> a certain number of seconds <span class="token punctuation">(</span>defaults to <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token parameter variable">-verbose</span> - Verbose mode

    Used with network.sh deployCC
    <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>channel name<span class="token operator">&gt;</span> - Name of channel to deploy chaincode to
    <span class="token parameter variable">-ccn</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> - Chaincode name.
    <span class="token parameter variable">-ccl</span> <span class="token operator">&lt;</span>language<span class="token operator">&gt;</span> - Programming language of the chaincode to deploy: go, java, javascript, typescript
    <span class="token parameter variable">-ccv</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span>  - Chaincode version. <span class="token number">1.0</span> <span class="token punctuation">(</span>default<span class="token punctuation">)</span>, v2, version3.x, etc
    <span class="token parameter variable">-ccs</span> <span class="token operator">&lt;</span>sequence<span class="token operator">&gt;</span>  - Chaincode definition sequence. Must be an integer, <span class="token number">1</span> <span class="token punctuation">(</span>default<span class="token punctuation">)</span>, <span class="token number">2</span>, <span class="token number">3</span>, etc
    <span class="token parameter variable">-ccp</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>  - File path to the chaincode.
    <span class="token parameter variable">-ccep</span> <span class="token operator">&lt;</span>policy<span class="token operator">&gt;</span>  - <span class="token punctuation">(</span>Optional<span class="token punctuation">)</span> Chaincode endorsement policy using signature policy syntax. The default policy requires an endorsement from Org1 and Org2
    <span class="token parameter variable">-cccg</span> <span class="token operator">&lt;</span>collection-config<span class="token operator">&gt;</span>  - <span class="token punctuation">(</span>Optional<span class="token punctuation">)</span> File path to private data collections configuration <span class="token function">file</span>
    <span class="token parameter variable">-cci</span> <span class="token operator">&lt;</span>fcn name<span class="token operator">&gt;</span>  - <span class="token punctuation">(</span>Optional<span class="token punctuation">)</span> Name of chaincode initialization function. When a <span class="token keyword">function</span> is provided, the execution of init will be requested and the <span class="token keyword">function</span> will be invoked.

    <span class="token parameter variable">-h</span> - Print this message

 Possible Mode and flag combinations
   up <span class="token parameter variable">-ca</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-verbose</span>
   up createChannel <span class="token parameter variable">-ca</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-verbose</span>
   createChannel <span class="token parameter variable">-c</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-verbose</span>
   deployCC <span class="token parameter variable">-ccn</span> <span class="token parameter variable">-ccl</span> <span class="token parameter variable">-ccv</span> <span class="token parameter variable">-ccs</span> <span class="token parameter variable">-ccp</span> <span class="token parameter variable">-cci</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-verbose</span>

 Examples:
   network.sh up createChannel <span class="token parameter variable">-ca</span> <span class="token parameter variable">-c</span> mychannel <span class="token parameter variable">-s</span> couchdb
   network.sh createChannel <span class="token parameter variable">-c</span> channelName
   network.sh deployCC <span class="token parameter variable">-ccn</span> basic <span class="token parameter variable">-ccp</span> <span class="token punctuation">..</span>/asset-transfer-basic/chaincode-javascript/ <span class="token parameter variable">-ccl</span> javascript
   network.sh deployCC <span class="token parameter variable">-ccn</span> mychaincode <span class="token parameter variable">-ccp</span> ./user/mychaincode <span class="token parameter variable">-ccv</span> <span class="token number">1</span> <span class="token parameter variable">-ccl</span> javascript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、启动测试网络" tabindex="-1"><a class="header-anchor" href="#二、启动测试网络" aria-hidden="true">#</a> 二、启动测试网络</h2><p>在<code>test-network</code>目录中，运行以下命令<strong>删除</strong>先前运行的所有容器或工程：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> fabric-samples/test-network <span class="token operator">&amp;&amp;</span> ./network.sh down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，您可以通过执行以下命令来<strong>启动</strong>网络：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./network.sh up

<span class="token comment"># 输出摘录</span>
<span class="token assign-left variable">LOCAL_VERSION</span><span class="token operator">=</span><span class="token number">2.3</span>.3
<span class="token assign-left variable">DOCKER_IMAGE_VERSION</span><span class="token operator">=</span><span class="token number">2.3</span>.3
/root/go/src/github.com/hyperledger/fabric/scripts/fabric-samples/test-network/<span class="token punctuation">..</span>/bin/cryptogen

Generating certificates using cryptogen tool
Creating Org1 Identities
<span class="token punctuation">..</span>.
Creating Org2 Identities
<span class="token punctuation">..</span>.
Creating Orderer Org Identities
<span class="token punctuation">..</span>.
Generating CCP files <span class="token keyword">for</span> Org1 and Org2
<span class="token punctuation">..</span>.
Creating peer0.org2.example.com <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating orderer.example.com    <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating peer0.org1.example.com <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating cli                    <span class="token punctuation">..</span>. <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用<code>Fabric CA</code>建立网络</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./network.sh up <span class="token parameter variable">-ca</span>

<span class="token comment"># 输出摘录</span>
<span class="token assign-left variable">LOCAL_VERSION</span><span class="token operator">=</span><span class="token number">2.3</span>.3
<span class="token assign-left variable">DOCKER_IMAGE_VERSION</span><span class="token operator">=</span><span class="token number">2.3</span>.3
<span class="token assign-left variable">CA_LOCAL_VERSION</span><span class="token operator">=</span><span class="token number">1.5</span>.2
<span class="token assign-left variable">CA_DOCKER_IMAGE_VERSION</span><span class="token operator">=</span><span class="token number">1.5</span>.2
Generating certificates using Fabric CA
Creating network <span class="token string">&quot;fabric_test&quot;</span> with the default driver
Creating ca_org1    <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating ca_org2    <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating ca_orderer <span class="token punctuation">..</span>. <span class="token keyword">done</span>

Creating Org1 Identities
Enrolling the CA admin
<span class="token punctuation">..</span>.
Registering peer0
<span class="token punctuation">..</span>.
Registering user
<span class="token punctuation">..</span>.
Registering the org admin
<span class="token punctuation">..</span>.
Generating the peer0 msp
<span class="token punctuation">..</span>.
Generating the peer0-tls certificates
<span class="token punctuation">..</span>.
Generating the user msp
<span class="token punctuation">..</span>.
Generating the org admin msp

Creating Org2 Identities
<span class="token punctuation">..</span>.
Enrolling the CA admin
<span class="token punctuation">..</span>.
Registering peer0
<span class="token punctuation">..</span>.
Registering user
<span class="token punctuation">..</span>.
Registering the org admin
<span class="token punctuation">..</span>.
Generating the peer0 msp
<span class="token punctuation">..</span>.
Generating the peer0-tls certificates
<span class="token punctuation">..</span>.
Generating the user msp
<span class="token punctuation">..</span>.
Generating the org admin msp

Creating Orderer Org Identities
Enrolling the CA admin
<span class="token punctuation">..</span>.
Registering orderer
<span class="token punctuation">..</span>.
Registering the orderer admin
<span class="token punctuation">..</span>.
Generating the orderer msp
<span class="token punctuation">..</span>.
Generating the orderer-tls certificates
<span class="token punctuation">..</span>.
Generating the admin msp

Generating CCP files <span class="token keyword">for</span> Org1 and Org2
<span class="token punctuation">..</span>.
Creating peer0.org2.example.com <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating orderer.example.com    <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating peer0.org1.example.com <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating cli                    <span class="token punctuation">..</span>. <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、创建一个通道" tabindex="-1"><a class="header-anchor" href="#三、创建一个通道" aria-hidden="true">#</a> 三、创建一个通道</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./network.sh createChannel

<span class="token comment"># 输出摘录</span>
Creating channel <span class="token string">&#39;mychannel&#39;</span><span class="token builtin class-name">.</span>
<span class="token punctuation">..</span>.
Generating channel genesis block <span class="token string">&#39;mychannel.block&#39;</span>
<span class="token punctuation">..</span>.
Creating channel mychannel
<span class="token punctuation">..</span>.
Status: <span class="token number">201</span>
<span class="token punctuation">{</span>
	<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mychannel&quot;</span>,
	<span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/participation/v1/channels/mychannel&quot;</span>,
	<span class="token string">&quot;consensusRelation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;consenter&quot;</span>,
	<span class="token string">&quot;status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;active&quot;</span>,
	<span class="token string">&quot;height&quot;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
Channel <span class="token string">&#39;mychannel&#39;</span> created


Joining org1 peer to the channel<span class="token punctuation">..</span>.
Using organization <span class="token number">1</span>
+ peer channel <span class="token function">join</span> <span class="token parameter variable">-b</span> ./channel-artifacts/mychannel.block
+ <span class="token assign-left variable">res</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token punctuation">..</span>.
Joining org2 peer to the channel<span class="token punctuation">..</span>.
Using organization <span class="token number">2</span>
+ peer channel <span class="token function">join</span> <span class="token parameter variable">-b</span> ./channel-artifacts/mychannel.block
+ <span class="token assign-left variable">res</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token punctuation">..</span>.


Setting anchor peer <span class="token keyword">for</span> org1<span class="token punctuation">..</span>.
Using organization <span class="token number">1</span>
Fetching channel config <span class="token keyword">for</span> channel mychannel
Using organization <span class="token number">1</span>
Fetching the <span class="token function">most</span> recent configuration block <span class="token keyword">for</span> the channel
<span class="token punctuation">..</span>.
Anchor peer <span class="token builtin class-name">set</span> <span class="token keyword">for</span> org <span class="token string">&#39;Org1MSP&#39;</span> on channel <span class="token string">&#39;mychannel&#39;</span>

Setting anchor peer <span class="token keyword">for</span> org2<span class="token punctuation">..</span>.
Using organization <span class="token number">2</span>
Fetching channel config <span class="token keyword">for</span> channel mychannel
Using organization <span class="token number">2</span>
Fetching the <span class="token function">most</span> recent configuration block <span class="token keyword">for</span> the channel
<span class="token punctuation">..</span>.
Anchor peer <span class="token builtin class-name">set</span> <span class="token keyword">for</span> org <span class="token string">&#39;Org2MSP&#39;</span> on channel <span class="token string">&#39;mychannel&#39;</span>

Channel <span class="token string">&#39;mychannel&#39;</span> joined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/11/05-154942.png" alt="image-20211105154940529" tabindex="0" loading="lazy"><figcaption>image-20211105154940529</figcaption></figure><h2 id="四、在通道启动一个链码" tabindex="-1"><a class="header-anchor" href="#四、在通道启动一个链码" aria-hidden="true">#</a> 四、在通道启动一个链码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./network.sh deployCC <span class="token parameter variable">-ccn</span> basic <span class="token parameter variable">-ccp</span> <span class="token punctuation">..</span>/asset-transfer-basic/chaincode-go <span class="token parameter variable">-ccl</span> go

<span class="token comment"># 结果摘录</span>
deploying chaincode on channel <span class="token string">&#39;mychannel&#39;</span>
executing with the following
- CHANNEL_NAME: mychannel
- CC_NAME: basic
- CC_SRC_PATH: <span class="token punctuation">..</span>/asset-transfer-basic/chaincode-go
- CC_SRC_LANGUAGE: go
- CC_VERSION: <span class="token number">1.0</span>
- CC_SEQUENCE: <span class="token number">1</span>
- CC_END_POLICY: NA
- CC_COLL_CONFIG: NA
- CC_INIT_FCN: NA
- DELAY: <span class="token number">3</span>
- MAX_RETRY: <span class="token number">5</span>
- VERBOSE: <span class="token boolean">false</span>

Vendoring Go dependencies at <span class="token punctuation">..</span>/asset-transfer-basic/chaincode-go
<span class="token punctuation">..</span>.
Finished vendoring Go dependencies
<span class="token punctuation">..</span>.
Chaincode is packaged

Installing chaincode on peer0.org1<span class="token punctuation">..</span>.
<span class="token punctuation">..</span>.
Chaincode is installed on peer0.org1

Install chaincode on peer0.org2<span class="token punctuation">..</span>.
<span class="token punctuation">..</span>.
Chaincode is installed on peer0.org2

Using organization <span class="token number">1</span>
+ peer lifecycle chaincode queryinstalled
+ <span class="token assign-left variable">res</span><span class="token operator">=</span><span class="token number">0</span>
Installed chaincodes on peer:
Package ID: basic_1.0:346b35825b660445a5d3da8b8902a4b20bbf10ee50832bdd81bb811bede62cda, Label: basic_1.0
Query installed successful on peer0.org1 on channel

<span class="token punctuation">..</span>.
Chaincode definition approved on peer0.org1 on channel <span class="token string">&#39;mychannel&#39;</span>
<span class="token punctuation">..</span>.
Chaincode definition approved on peer0.org2 on channel <span class="token string">&#39;mychannel&#39;</span>
<span class="token punctuation">..</span>.
Chaincode definition committed on channel <span class="token string">&#39;mychannel&#39;</span>
<span class="token punctuation">..</span>.
Query chaincode definition successful on peer0.org1 on channel <span class="token string">&#39;mychannel&#39;</span>
<span class="token punctuation">..</span>.
Query chaincode definition successful on peer0.org2 on channel <span class="token string">&#39;mychannel&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：<code>deployCC</code>的具体实现还是通过<code>peer lifecycle chaincode</code>来实现的</p><p>其<code>shell</code>脚本源码关键内容如下，具体请查看文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">source</span> scripts/utils.sh
<span class="token punctuation">..</span>.

<span class="token comment"># import utils</span>
<span class="token builtin class-name">.</span> scripts/envVar.sh

<span class="token function-name function">packageChaincode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  peer lifecycle chaincode package <span class="token variable">\${CC_NAME}</span>.tar.gz <span class="token parameter variable">--path</span> <span class="token variable">\${CC_SRC_PATH}</span> <span class="token parameter variable">--lang</span> <span class="token variable">\${CC_RUNTIME_LANGUAGE}</span> <span class="token parameter variable">--label</span> <span class="token variable">\${CC_NAME}</span>_<span class="token variable">\${CC_VERSION}</span> <span class="token operator">&gt;&amp;</span>log.txt
  <span class="token punctuation">..</span>
<span class="token punctuation">}</span>

<span class="token comment"># installChaincode PEER ORG</span>
<span class="token function-name function">installChaincode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  peer lifecycle chaincode <span class="token function">install</span> <span class="token variable">\${CC_NAME}</span>.tar.gz <span class="token operator">&gt;&amp;</span>log.txt
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

<span class="token comment"># queryInstalled PEER ORG</span>
<span class="token function-name function">queryInstalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  peer lifecycle chaincode queryinstalled <span class="token operator">&gt;&amp;</span>log.txt
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

<span class="token comment"># approveForMyOrg VERSION PEER ORG</span>
<span class="token function-name function">approveForMyOrg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  peer lifecycle chaincode approveformyorg <span class="token parameter variable">-o</span> localhost:7050 <span class="token parameter variable">--ordererTLSHostnameOverride</span> orderer.example.com <span class="token parameter variable">--tls</span> <span class="token parameter variable">--cafile</span> <span class="token string">&quot;<span class="token variable">$ORDERER_CA</span>&quot;</span> <span class="token parameter variable">--channelID</span> <span class="token variable">$CHANNEL_NAME</span> <span class="token parameter variable">--name</span> <span class="token variable">\${CC_NAME}</span> <span class="token parameter variable">--version</span> <span class="token variable">\${CC_VERSION}</span> --package-id <span class="token variable">\${PACKAGE_ID}</span> <span class="token parameter variable">--sequence</span> <span class="token variable">\${CC_SEQUENCE}</span> <span class="token variable">\${INIT_REQUIRED}</span> <span class="token variable">\${CC_END_POLICY}</span> <span class="token variable">\${CC_COLL_CONFIG}</span> <span class="token operator">&gt;&amp;</span>log.txt
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

<span class="token comment"># checkCommitReadiness VERSION PEER ORG</span>
<span class="token function-name function">checkCommitReadiness</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  peer lifecycle chaincode checkcommitreadiness <span class="token parameter variable">--channelID</span> <span class="token variable">$CHANNEL_NAME</span> <span class="token parameter variable">--name</span> <span class="token variable">\${CC_NAME}</span> <span class="token parameter variable">--version</span> <span class="token variable">\${CC_VERSION}</span> <span class="token parameter variable">--sequence</span> <span class="token variable">\${CC_SEQUENCE}</span> <span class="token variable">\${INIT_REQUIRED}</span> <span class="token variable">\${CC_END_POLICY}</span> <span class="token variable">\${CC_COLL_CONFIG}</span> <span class="token parameter variable">--output</span> json <span class="token operator">&gt;&amp;</span>log.txt
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

<span class="token comment"># commitChaincodeDefinition VERSION PEER ORG (PEER ORG)...</span>
<span class="token function-name function">commitChaincodeDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  peer lifecycle chaincode commit <span class="token parameter variable">-o</span> localhost:7050 <span class="token parameter variable">--ordererTLSHostnameOverride</span> orderer.example.com <span class="token parameter variable">--tls</span> <span class="token parameter variable">--cafile</span> <span class="token string">&quot;<span class="token variable">$ORDERER_CA</span>&quot;</span> <span class="token parameter variable">--channelID</span> <span class="token variable">$CHANNEL_NAME</span> <span class="token parameter variable">--name</span> <span class="token variable">\${CC_NAME}</span> <span class="token string">&quot;<span class="token variable">\${PEER_CONN_PARMS<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token parameter variable">--version</span> <span class="token variable">\${CC_VERSION}</span> <span class="token parameter variable">--sequence</span> <span class="token variable">\${CC_SEQUENCE}</span> <span class="token variable">\${INIT_REQUIRED}</span> <span class="token variable">\${CC_END_POLICY}</span> <span class="token variable">\${CC_COLL_CONFIG}</span> <span class="token operator">&gt;&amp;</span>log.txt
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

<span class="token comment"># queryCommitted ORG</span>
<span class="token function-name function">queryCommitted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  peer lifecycle chaincode querycommitted <span class="token parameter variable">--channelID</span> <span class="token variable">$CHANNEL_NAME</span> <span class="token parameter variable">--name</span> <span class="token variable">\${CC_NAME}</span> <span class="token operator">&gt;&amp;</span>log.txt
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

<span class="token function-name function">chaincodeInvokeInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  peer chaincode invoke <span class="token parameter variable">-o</span> localhost:7050 <span class="token parameter variable">--ordererTLSHostnameOverride</span> orderer.example.com <span class="token parameter variable">--tls</span> <span class="token parameter variable">--cafile</span> <span class="token string">&quot;<span class="token variable">$ORDERER_CA</span>&quot;</span> <span class="token parameter variable">-C</span> <span class="token variable">$CHANNEL_NAME</span> <span class="token parameter variable">-n</span> <span class="token variable">\${CC_NAME}</span> <span class="token string">&quot;<span class="token variable">\${PEER_CONN_PARMS<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token parameter variable">--isInit</span> <span class="token parameter variable">-c</span> <span class="token variable">\${fcn_call}</span> <span class="token operator">&gt;&amp;</span>log.txt
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

<span class="token function-name function">chaincodeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  peer chaincode query <span class="token parameter variable">-C</span> <span class="token variable">$CHANNEL_NAME</span> <span class="token parameter variable">-n</span> <span class="token variable">\${CC_NAME}</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;{&quot;Args&quot;:[&quot;queryAllCars&quot;]}&#39;</span> <span class="token operator">&gt;&amp;</span>log.txt
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

<span class="token comment">## package the chaincode</span>
packageChaincode

<span class="token comment">## Install chaincode on peer0.org1 and peer0.org2</span>
infoln <span class="token string">&quot;Installing chaincode on peer0.org1...&quot;</span>
installChaincode <span class="token number">1</span>
infoln <span class="token string">&quot;Install chaincode on peer0.org2...&quot;</span>
installChaincode <span class="token number">2</span>

<span class="token comment">## query whether the chaincode is installed</span>
queryInstalled <span class="token number">1</span>

<span class="token comment">## approve the definition for org1</span>
approveForMyOrg <span class="token number">1</span>

<span class="token comment">## check whether the chaincode definition is ready to be committed</span>
<span class="token comment">## expect org1 to have approved and org2 not to</span>
checkCommitReadiness <span class="token number">1</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>Org1MSP<span class="token entity" title="\\&quot;">\\&quot;</span>: true&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>Org2MSP<span class="token entity" title="\\&quot;">\\&quot;</span>: false&quot;</span>
checkCommitReadiness <span class="token number">2</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>Org1MSP<span class="token entity" title="\\&quot;">\\&quot;</span>: true&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>Org2MSP<span class="token entity" title="\\&quot;">\\&quot;</span>: false&quot;</span>

<span class="token comment">## now approve also for org2</span>
approveForMyOrg <span class="token number">2</span>

<span class="token comment">## check whether the chaincode definition is ready to be committed</span>
<span class="token comment">## expect them both to have approved</span>
checkCommitReadiness <span class="token number">1</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>Org1MSP<span class="token entity" title="\\&quot;">\\&quot;</span>: true&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>Org2MSP<span class="token entity" title="\\&quot;">\\&quot;</span>: true&quot;</span>
checkCommitReadiness <span class="token number">2</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>Org1MSP<span class="token entity" title="\\&quot;">\\&quot;</span>: true&quot;</span> <span class="token string">&quot;<span class="token entity" title="\\&quot;">\\&quot;</span>Org2MSP<span class="token entity" title="\\&quot;">\\&quot;</span>: true&quot;</span>

<span class="token comment">## now that we know for sure both orgs have approved, commit the definition</span>
commitChaincodeDefinition <span class="token number">1</span> <span class="token number">2</span>

<span class="token comment">## query on both orgs to see that the definition committed successfully</span>
queryCommitted <span class="token number">1</span>
queryCommitted <span class="token number">2</span>

<span class="token comment">## Invoke the chaincode - this does require that the chaincode have the &#39;initLedger&#39;</span>
<span class="token comment">## method defined</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$CC_INIT_FCN</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;NA&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  infoln <span class="token string">&quot;Chaincode initialization is not required&quot;</span>
<span class="token keyword">else</span>
  chaincodeInvokeInit <span class="token number">1</span> <span class="token number">2</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、与网络交互" tabindex="-1"><a class="header-anchor" href="#五、与网络交互" aria-hidden="true">#</a> 五、与网络交互</h2><blockquote><p>在您启用测试网络后，可以使用<code>peer</code>CLI与您的网络进行交互。<code>peer</code>CLI允许您调用已部署的智能合约，更新通道，或安装和部署新的智能合约。需要确保您正在从<code>test-network</code>目录进行操作，或者在<code>test-network</code>目录下使用<code>source</code><strong>重新加载对应的环境变量</strong></p></blockquote><p>使用以下命令将二进制文件添加到CLI路径，并将<code>fabric-samples</code>代码库中的<code>FABRIC_CFG_PATH</code>设置为指向其中的<code>core.yaml</code>文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PWD</span>}</span>/<span class="token punctuation">..</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">FABRIC_CFG_PATH</span><span class="token operator">=</span><span class="token environment constant">$PWD</span>/<span class="token punctuation">..</span>/config/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置环境变量（二选一，都加上的话后面覆盖前面），以允许您作为Org1/Org2操作<code>peer</code> CLI：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># CORE_PEER_TLS_ROOTCERT_FILE和CORE_PEER_MSPCONFIGPATH环境变量</span>
<span class="token comment"># 指向Org1的organizations文件夹中的的加密材料</span>

<span class="token comment"># Environment variables for Org1</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CORE_PEER_TLS_ENABLED</span><span class="token operator">=</span>true
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CORE_PEER_LOCALMSPID</span><span class="token operator">=</span><span class="token string">&quot;Org1MSP&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CORE_PEER_TLS_ROOTCERT_FILE</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PWD</span>}</span>/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CORE_PEER_MSPCONFIGPATH</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PWD</span>}</span>/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CORE_PEER_ADDRESS</span><span class="token operator">=</span>localhost:7051

<span class="token comment"># Environment variables for Org2</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CORE_PEER_TLS_ENABLED</span><span class="token operator">=</span>true
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CORE_PEER_LOCALMSPID</span><span class="token operator">=</span><span class="token string">&quot;Org2MSP&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CORE_PEER_TLS_ROOTCERT_FILE</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PWD</span>}</span>/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CORE_PEER_MSPCONFIGPATH</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PWD</span>}</span>/organizations/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CORE_PEER_ADDRESS</span><span class="token operator">=</span>localhost:9051
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行以下命令用一些资产来<strong>初始化账本</strong>：</p><blockquote><p>因为链码的背书策略需要交易同时被 Org1 和 Org2 签名，因此链码调用指令需要使用<code>--peerAddresses</code>标签来指向<code>peer0.org1.example.com</code>和<code>peer0.org2.example.com</code></p><p>因为网络的 TLS 被开启，因此指令也需要用 <code>--tlsRootCertFiles</code> 标签指向每个 <code>peer</code> 节点的 TLS 证书。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>peer chaincode invoke <span class="token parameter variable">-o</span> localhost:7050 <span class="token parameter variable">--ordererTLSHostnameOverride</span> orderer.example.com <span class="token parameter variable">--tls</span> <span class="token parameter variable">--cafile</span> <span class="token variable">\${<span class="token environment constant">PWD</span>}</span>/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem <span class="token parameter variable">-C</span> mychannel <span class="token parameter variable">-n</span> basic <span class="token parameter variable">--peerAddresses</span> localhost:7051 <span class="token parameter variable">--tlsRootCertFiles</span> <span class="token variable">\${<span class="token environment constant">PWD</span>}</span>/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt <span class="token parameter variable">--peerAddresses</span> localhost:9051 <span class="token parameter variable">--tlsRootCertFiles</span> <span class="token variable">\${<span class="token environment constant">PWD</span>}</span>/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt <span class="token parameter variable">-c</span> <span class="token string">&#39;{&quot;function&quot;:&quot;InitLedger&quot;,&quot;Args&quot;:[]}&#39;</span>

<span class="token comment"># 成功看到以下输出</span>
<span class="token punctuation">[</span>chaincodeCmd<span class="token punctuation">]</span> chaincodeInvokeOrQuery -<span class="token operator">&gt;</span> INFO 001 Chaincode invoke successful. result: status:200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 CLI 工具<strong>查询账本</strong>，运行以下指令来获取添加到通道账本的资产列表：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>peer chaincode query <span class="token parameter variable">-C</span> mychannel <span class="token parameter variable">-n</span> basic <span class="token parameter variable">-c</span> <span class="token string">&#39;{&quot;Args&quot;:[&quot;GetAllAssets&quot;]}&#39;</span>

<span class="token comment"># 成功看到以下输出</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;AppraisedValue&quot;</span>:300,<span class="token string">&quot;Color&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;blue&quot;</span>,<span class="token string">&quot;ID&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;asset1&quot;</span>,<span class="token string">&quot;Owner&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Tomoko&quot;</span>,<span class="token string">&quot;Size&quot;</span>:5<span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token string">&quot;AppraisedValue&quot;</span>:400,<span class="token string">&quot;Color&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;red&quot;</span>,<span class="token string">&quot;ID&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;asset2&quot;</span>,<span class="token string">&quot;Owner&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Brad&quot;</span>,<span class="token string">&quot;Size&quot;</span>:5<span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token string">&quot;AppraisedValue&quot;</span>:500,<span class="token string">&quot;Color&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;green&quot;</span>,<span class="token string">&quot;ID&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;asset3&quot;</span>,<span class="token string">&quot;Owner&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Jin Soo&quot;</span>,<span class="token string">&quot;Size&quot;</span>:10<span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token string">&quot;AppraisedValue&quot;</span>:600,<span class="token string">&quot;Color&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;yellow&quot;</span>,<span class="token string">&quot;ID&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;asset4&quot;</span>,<span class="token string">&quot;Owner&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Max&quot;</span>,<span class="token string">&quot;Size&quot;</span>:10<span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token string">&quot;AppraisedValue&quot;</span>:700,<span class="token string">&quot;Color&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;black&quot;</span>,<span class="token string">&quot;ID&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;asset5&quot;</span>,<span class="token string">&quot;Owner&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Adriana&quot;</span>,<span class="token string">&quot;Size&quot;</span>:15<span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token string">&quot;AppraisedValue&quot;</span>:800,<span class="token string">&quot;Color&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;white&quot;</span>,<span class="token string">&quot;ID&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;asset6&quot;</span>,<span class="token string">&quot;Owner&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Michel&quot;</span>,<span class="token string">&quot;Size&quot;</span>:15<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个网络成员希望在账本上转一些或者<strong>改变一些资产</strong>，链码会被调用，使用以下的指令来通过调用 <code>asset-transfer (basic)</code>链码改变账本上的资产所有者：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>peer chaincode invoke <span class="token parameter variable">-o</span> localhost:7050 <span class="token parameter variable">--ordererTLSHostnameOverride</span> orderer.example.com <span class="token parameter variable">--tls</span> <span class="token parameter variable">--cafile</span> <span class="token variable">\${<span class="token environment constant">PWD</span>}</span>/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem <span class="token parameter variable">-C</span> mychannel <span class="token parameter variable">-n</span> basic <span class="token parameter variable">--peerAddresses</span> localhost:7051 <span class="token parameter variable">--tlsRootCertFiles</span> <span class="token variable">\${<span class="token environment constant">PWD</span>}</span>/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt <span class="token parameter variable">--peerAddresses</span> localhost:9051 <span class="token parameter variable">--tlsRootCertFiles</span> <span class="token variable">\${<span class="token environment constant">PWD</span>}</span>/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt <span class="token parameter variable">-c</span> <span class="token string">&#39;{&quot;function&quot;:&quot;TransferAsset&quot;,&quot;Args&quot;:[&quot;asset6&quot;,&quot;Christopher&quot;]}&#39;</span>

<span class="token comment"># 成功看到以下输出</span>
<span class="token punctuation">[</span>chaincodeCmd<span class="token punctuation">]</span> chaincodeInvokeOrQuery -<span class="token operator">&gt;</span> INFO 001 Chaincode invoke successful. result: status:200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置环境变量操作 Org2，<strong>查询</strong>运行在<code>peer0.org2.example.com</code>上的 asset-transfer (basic) 链码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>peer chaincode query <span class="token parameter variable">-C</span> mychannel <span class="token parameter variable">-n</span> basic <span class="token parameter variable">-c</span> <span class="token string">&#39;{&quot;Args&quot;:[&quot;ReadAsset&quot;,&quot;asset6&quot;]}&#39;</span>

<span class="token comment"># 结果显示 &quot;asset6&quot; 转给了 Christopher:</span>
<span class="token punctuation">{</span><span class="token string">&quot;AppraisedValue&quot;</span>:800,<span class="token string">&quot;Color&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;white&quot;</span>,<span class="token string">&quot;ID&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;asset6&quot;</span>,<span class="token string">&quot;Owner&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Christopher&quot;</span>,<span class="token string">&quot;Size&quot;</span>:15<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、幕后发生了什么" tabindex="-1"><a class="header-anchor" href="#六、幕后发生了什么" aria-hidden="true">#</a> 六、幕后发生了什么</h2><p>如果有兴趣了解有关示例网络的更多信息，则可以调查<code>test-network</code>目录中的文件和脚本。 下面的步骤提供了有关在您发出<code>./network.sh up</code>命令时会发生什么情况的导览。</p>`,33),k=t("<li><code>./ network.sh</code>为两个对等组织和排序组织创建证书和密钥。 默认情况下，脚本利用cryptogen工具使用位于<code>organizations/cryptogen</code>文件夹中的配置文件。 如果使用<code>-ca</code>标志创建证书颁发机构，则脚本使用Fabric CA服务器配置文件和位于<code>organizations/fabric-ca</code>文件夹的<code>registerEnroll.sh</code>脚本。 cryptogen和Fabric CA均会在<code>organisations</code>文件夹创建所有三个组织中的加密资料和MSP文件夹。</li><li>该脚本使用configtxgen工具创建系统通道生成块。 Configtxgen使用了<code>TwoOrgsOrdererGenesis</code>通道配置文件中的<code>configtx/configtx.yaml</code>文件创建创世区块。 区块被存储在<code>system-genesis-block</code>文件夹中。</li>",2),b=n("code",null,"network.sh",-1),g=n("code",null,"docker",-1),h=n("code",null,"docker-compose-test-net.yaml",-1),q=n("code",null,"docker",-1),C=n("code",null,"docker-compose-e2e.yaml",-1),f={href:"https://github.com/hyperledger/fabric-sdk-node",target:"_blank",rel:"noopener noreferrer"},_=t("<li>如果您使用<code>createChannel</code>子命令，则<code>./ network.sh</code>使用提供的频道名称， 运行在<code>scripts</code>文件夹中的<code>createChannel.sh</code>脚本来创建通道。 该脚本使用<code>configtx.yaml</code>文件来创建通道创作事务，以及两个锚对等节点更新交易。 该脚本使用对等节点cli创建通道，加入<code>peer0.org1.example.com</code>和<code>peer0.org2.example.com</code> 到频道， 以及使两个对等节点都成为锚对等节点。</li><li>如果执行deployCC命令，./ network.sh会运行deployCC.sh脚本在两个 peer 节点上安装<code>asset-transfer (basic)</code>链码， 然后定义通道上的链码。 一旦将链码定义提交给通道，对等节点cli使用Init初始化链码并调用链码将初始数据放入账本。</li>",2),E=n("h2",{id:"七、参考文章",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#七、参考文章","aria-hidden":"true"},"#"),s(" 七、参考文章")],-1),y={href:"https://hyperledger-fabric.readthedocs.io/zh_CN/release-2.2/test_network.html",target:"_blank",rel:"noopener noreferrer"};function O(R,x){const a=l("ExternalLinkIcon");return o(),p("div",null,[r,n("h2",d,[u,s(" 一、"),n("a",v,[s("network.sh"),e(a)]),s(" 命令帮助")]),m,n("ul",null,[k,n("li",null,[s("一旦组织的加密资料和系统通道的创始块生成后，"),b,s("就可以启动网络的节点。 脚本使用"),g,s("文件夹中的"),h,s("文件创建对等节点和排序节点。 "),q,s("文件夹还包含 "),C,s("文件启动网络节点三个Fabric CA。 该文件旨在用于Fabric SDK 运行端到端测试。 请参阅"),n("a",f,[s("Node SDK"),e(a)]),s("代码库有关运行这些测试的详细信息。")]),_]),E,n("ul",null,[n("li",null,[n("a",y,[s("使用Fabric的测试网络"),e(a)])])])])}const I=i(c,[["render",O],["__file","2.demo_test_network.html.vue"]]);export{I as default};
