const e=JSON.parse(`{"key":"v-6afd0f4b","path":"/Blockchain/Ethereum/4.transaction.html","title":"以太坊中的交易模型","lang":"zh-CN","frontmatter":{"title":"以太坊中的交易模型","shortTitle":"交易模型","description":"本文介绍了以太坊交易的本质及数据结构，交易中的nonce、gas、value和data，最后是创建合约这种特殊的交易。","category":["Ethereum"],"tag":["Blockchain","Ethereum"],"date":"2021-11-29T00:00:00.000Z","order":4,"head":[["meta",{"property":"og:url","content":"https://blog.xin127.me/Blockchain/Ethereum/4.transaction.html"}],["meta",{"property":"og:site_name","content":"Joker Xin's Blog"}],["meta",{"property":"og:title","content":"以太坊中的交易模型"}],["meta",{"property":"og:description","content":"本文介绍了以太坊交易的本质及数据结构，交易中的nonce、gas、value和data，最后是创建合约这种特殊的交易。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Joker Xin"}],["meta",{"property":"article:tag","content":"Blockchain"}],["meta",{"property":"article:tag","content":"Ethereum"}],["meta",{"property":"article:published_time","content":"2021-11-29T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"以太坊中的交易模型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-29T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Joker Xin\\",\\"url\\":\\"https://blog.xin127.me\\"}]}"]]},"headers":[{"level":2,"title":"一、交易的本质","slug":"一、交易的本质","link":"#一、交易的本质","children":[]},{"level":2,"title":"二、交易数据结构","slug":"二、交易数据结构","link":"#二、交易数据结构","children":[]},{"level":2,"title":"三、交易中的nonce","slug":"三、交易中的nonce","link":"#三、交易中的nonce","children":[]},{"level":2,"title":"四、交易中的gas","slug":"四、交易中的gas","link":"#四、交易中的gas","children":[]},{"level":2,"title":"五、交易的接收者（to）","slug":"五、交易的接收者-to","link":"#五、交易的接收者-to","children":[]},{"level":2,"title":"六、交易的 value 和 data","slug":"六、交易的-value-和-data","link":"#六、交易的-value-和-data","children":[]},{"level":2,"title":"七、向 EOA 或合约传递 data","slug":"七、向-eoa-或合约传递-data","link":"#七、向-eoa-或合约传递-data","children":[]},{"level":2,"title":"八、特殊交易：创建（部署）合约","slug":"八、特殊交易-创建-部署-合约","link":"#八、特殊交易-创建-部署-合约","children":[]}],"readingTime":{"minutes":5.54,"words":1662},"filePathRelative":"Blockchain/Ethereum/4.transaction.md","localizedDate":"2021年11月29日","excerpt":"<h1> 以太坊交易</h1>\\n<h2> 一、交易的本质</h2>\\n<ul>\\n<li>交易是由外部拥有的账户发起的签名消息，由以太坊网络传输，并被<strong>序列化</strong>后记录在以太坊区块链上。</li>\\n<li>交易是<strong>唯一</strong>可以触发状态更改或导致合约在EVM中执行的事物。</li>\\n<li>以太坊是一个<strong>全局单例状态机</strong>，交易是唯一可以改变其状态的东西。</li>\\n<li>合约不是自己运行的，以太坊也不会“在后台”运行。以太坊上的<strong>一切变化都始于交易</strong>。</li>\\n</ul>\\n<h2> 二、交易数据结构</h2>"}`);export{e as data};
