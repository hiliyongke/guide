"use strict";(self.webpackChunkguide_front_web=self.webpackChunkguide_front_web||[]).push([[618],{2117:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-59a85ddd",path:"/norm/html/note.html",title:"注释规范",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"遵循标准",slug:"遵循标准",children:[]},{level:2,title:"团队约定",slug:"团队约定",children:[{level:3,title:"单行注释",slug:"单行注释",children:[]},{level:3,title:"模块注释",slug:"模块注释",children:[]},{level:3,title:"嵌套模块注释",slug:"嵌套模块注释",children:[]}]}],filePathRelative:"norm/html/note.md",git:{updatedTime:1637130328e3,contributors:[{name:"Accompany831143",email:"Accompany_zhao@163.com",commits:1}]}}},4405:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(6252);const e=(0,t.uE)('<h1 id="注释规范" tabindex="-1"><a class="header-anchor" href="#注释规范" aria-hidden="true">#</a> 注释规范</h1><h2 id="遵循标准" tabindex="-1"><a class="header-anchor" href="#遵循标准" aria-hidden="true">#</a> 遵循标准</h2><p>HTML注释规范写法应该遵循以下标准：</p><blockquote><p>Comments must start with the four character sequence U+003C LESS-THAN SIGN, U+0021 EXCLAMATION MARK, U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS (&lt;!--). Following this sequence, the comment may have text, with the additional restriction that the text must not start with a single &quot;&gt;&quot; (U+003E) character, nor start with a U+002D HYPHEN-MINUS character (-) followed by a &quot;&gt;&quot; (U+003E) character, nor contain two consecutive U+002D HYPHEN-MINUS characters (--), nor end with a U+002D HYPHEN-MINUS character (-). Finally, the comment must be ended by the three character sequence U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN (--&gt;).</p></blockquote><ul><li>必须以4个有序字符开始：编码为 U+003C LESS-THAN SIGN 的小于号, 编码为 U+0021 EXCLAMATION MARK 的感叹号, 编码为 U+002D HYPHEN-MINUS 横线, 编码为 U+002D HYPHEN-MINUS横线 ，即 “&lt;!--”</li><li>在此之后是注释内容，注释的内容有以下限制： <ul><li>不能以单个 &quot;&gt;&quot; (U+003E) 字符开始</li><li>不能以由 “-“（U+002D HYPHEN-MINUS）和 ”&gt;” (U+003E) 组合的字符开始，即 “-&gt;”</li><li>不能包含两个连续的 U+002D HYPHEN-MINUS 字符，即 “--”</li><li>不能以一个 U+002D HYPHEN-MINUS 字符结束，即 “-”</li></ul></li><li>必须以3个有序字符结束：U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN，即 “--&gt;”</li></ul><p>标准写法：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!--Comment Text--&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>错误的写法：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!--&gt;The Wrong Comment Text--&gt;</span>\n\n<span class="token comment">&lt;!---&gt;The Wrong Comment Text--&gt;</span>\n\n<span class="token comment">&lt;!--The--Wrong--Comment Text--&gt;</span>\n\n<span class="token comment">&lt;!--The Wrong Comment Text---&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',9),p=(0,t.Uk)("参考 www.w3.org "),l={href:"http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#comments",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("#Comments"),o=(0,t.uE)('<h2 id="团队约定" tabindex="-1"><a class="header-anchor" href="#团队约定" aria-hidden="true">#</a> 团队约定</h2><h3 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释" aria-hidden="true">#</a> 单行注释</h3><p>一般用于简单的描述，如某些状态描述、属性描述等</p><p>注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行</p><p><em>推荐：</em></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Comment Text --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><em>不推荐：</em></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- Comment Text --&gt;</span>\t\n\t\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- Comment Text --&gt;</span>\n    ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="模块注释" tabindex="-1"><a class="header-anchor" href="#模块注释" aria-hidden="true">#</a> 模块注释</h3><p>一般用于描述模块的名称以及模块开始与结束的位置</p><p>注释内容前后各一个空格字符，<code>&lt;!-- Start Comment Text --&gt;</code> 表示模块开始，<code>&lt;!-- End Comment Text --&gt;</code> 表示模块结束，模块与模块之间相隔一行</p><p><em>推荐写法：</em></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Start Comment Text A --&gt;</span>\t\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mod_a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- End Comment Text A --&gt;</span>\n\t\n<span class="token comment">&lt;!-- Start Comment Text B --&gt;</span>\t\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mod_b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- End Comment Text B --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><em>不推荐写法：</em></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Start Comment Text A --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mod_a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- End Comment Text A --&gt;</span>\n<span class="token comment">&lt;!-- Start Comment Text B --&gt;</span>\t\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mod_b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- End Comment Text B --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="嵌套模块注释" tabindex="-1"><a class="header-anchor" href="#嵌套模块注释" aria-hidden="true">#</a> 嵌套模块注释</h3><p>当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Start Comment Text --&gt;</span>\n<span class="token comment">&lt;!-- End Comment Text --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>而改用</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- /Comment Text --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>注释写在模块结尾标签底部，单独一行。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Start Comment Text A --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mod_a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t\t\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mod_b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        ...\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- /mod_b --&gt;</span>\n    \t\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mod_c<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    \t...\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- /mod_c --&gt;</span>\n\t\t\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- End Comment Text A --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',22),u={},i=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("p",null,[p,(0,t._)("a",l,[c,(0,t.Wm)(a)])]),o],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);