"use strict";(self.webpackChunkguide_front_web=self.webpackChunkguide_front_web||[]).push([[388],{163:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-2a5eed05",path:"/norm/css/sass.html",title:"SASS规范",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"语法选用",slug:"语法选用",children:[{level:3,title:"SCSS",slug:"scss",children:[]},{level:3,title:"Sass",slug:"sass",children:[]},{level:3,title:"团队约定",slug:"团队约定",children:[]}]},{level:2,title:"编码格式",slug:"编码格式",children:[{level:3,title:"团队约定",slug:"团队约定-1",children:[]}]},{level:2,title:"SASS注释规范",slug:"sass注释规范",children:[{level:3,title:"团队约定",slug:"团队约定-2",children:[]}]},{level:2,title:"嵌套规范",slug:"嵌套规范",children:[{level:3,title:"选择器嵌套",slug:"选择器嵌套",children:[]},{level:3,title:"属性嵌套",slug:"属性嵌套",children:[]}]},{level:2,title:"变量",slug:"变量",children:[]},{level:2,title:"混合(mixin)",slug:"混合-mixin",children:[]},{level:2,title:"占位选择器 %",slug:"占位选择器",children:[]},{level:2,title:"extend 继承",slug:"extend-继承",children:[]},{level:2,title:"for 循环",slug:"for-循环",children:[]},{level:2,title:"each 循环",slug:"each-循环",children:[]},{level:2,title:"function 函数",slug:"function-函数",children:[]},{level:2,title:"运算规范",slug:"运算规范",children:[]}],filePathRelative:"norm/css/sass.md",git:{updatedTime:1637130328e3}}},9410:(n,s,a)=>{a.r(s),a.d(s,{default:()=>x});var p=a(6252);const e=(0,p.uE)('<h1 id="sass规范" tabindex="-1"><a class="header-anchor" href="#sass规范" aria-hidden="true">#</a> SASS规范</h1><h2 id="语法选用" tabindex="-1"><a class="header-anchor" href="#语法选用" aria-hidden="true">#</a> 语法选用</h2><p>SASS有两种语法格式，一种是 SCSS (Sassy CSS)，另一种是缩进格式（Indented Syntax），有时称之为 Sass。</p><h3 id="scss" tabindex="-1"><a class="header-anchor" href="#scss" aria-hidden="true">#</a> SCSS</h3><p>SCSS语法基于 CSS 语法扩展，每一个有效的 CSS 文件都是一个有效的具有相同含义的 SCSS 文件，换种说法就是 SCSS 能识别大多数的 CSS hacks 写法和浏览器前缀写法以及早期的 IE 滤镜写法，这种格式以 .scss 作为扩展名。</p><h3 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> Sass</h3>',6),t=(0,p.Uk)("Sass 使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式，具体请查看 "),c={href:"http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("the indented syntax reference"),o=(0,p.Uk)("。这种格式以 .sass 作为拓展名。"),r=(0,p.Uk)("更详细的用法请阅读 SASS 官网文档："),u={href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html",target:"_blank",rel:"noopener noreferrer"},i=(0,p.Uk)("DOCUMENTATION"),b=(0,p.uE)('<h3 id="团队约定" tabindex="-1"><a class="header-anchor" href="#团队约定" aria-hidden="true">#</a> 团队约定</h3><p>考虑到 SCSS 语法对 CSS 语法友好的兼容性和扩展性，我们在使用 SASS 编写样式的时候，统一使用 SCSS 语法</p><h2 id="编码格式" tabindex="-1"><a class="header-anchor" href="#编码格式" aria-hidden="true">#</a> 编码格式</h2><blockquote><p>When running on Ruby 1.9 and later, Sass is aware of the character encoding of documents. Sass follows the CSS spec to determine the encoding of a stylesheet, and falls back to the Ruby string encoding. This means that it first checks the Unicode byte order mark, then the @charset declaration, then the Ruby string encoding. If none of these are set, it will assume the document is in UTF-8.</p></blockquote><p>当在 Ruby1.9或更新的版本运行的时候，SASS 能识辨文档的字符编码。SASS 遵循 CSS 规范去确定样式文件的编码，进而转回 Ruby 字符串编码。这意味着SASS编译的时候会首先检测 BOM，然后到 @charset 声明，再到 Ruby 字符串编码，如果以上都没有设置，SASS 会认为文档的编码为 UTF-8</p><h3 id="团队约定-1" tabindex="-1"><a class="header-anchor" href="#团队约定-1" aria-hidden="true">#</a> 团队约定</h3>',6),k=(0,p.Uk)("严格遵守上面 “CSS规范” 中的 "),d=(0,p.Uk)("“编码规范”"),m=(0,p.Uk)("更多关于 SASS 编码："),h={href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html",target:"_blank",rel:"noopener noreferrer"},S=(0,p.Uk)("SASS Encodings"),g=(0,p.uE)('<h2 id="sass注释规范" tabindex="-1"><a class="header-anchor" href="#sass注释规范" aria-hidden="true">#</a> SASS注释规范</h2><p>SASS支持 CSS 标准的多行注释 <code>/* */</code>，同时也支持单行注释 <code>//</code>。</p><ul><li>多行注释在使用非 Compressed 模式进行编译后的输出文件中会保留下来，单行注释 <code>//</code> 侧会被移除</li><li>多行注释和单行注释在 SASS 编译后输出的压缩 CSS 文件都会被移除</li><li>当多行注释内容第一个字符是感叹号 “!” 的时候，即 <code>/*! */</code>，SASS 无论用哪一种编译方式编译注释都会保留</li><li>注释内容可以加入 SASS 变量</li></ul><h3 id="团队约定-2" tabindex="-1"><a class="header-anchor" href="#团队约定-2" aria-hidden="true">#</a> 团队约定</h3><p>SCSS 文件内</p><ul><li>全部遵循 CSS 注释规范</li><li>不使用 <code>/*! */</code> 注释方式</li><li>注释内不放 SASS 变量</li></ul><p>标准的注释规范如下：</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">;</span></span>\n\n<span class="token comment">/**\n * @desc File Info\n * @author liqinuo\n * @date 2015-10-10\n */</span>\n\n<span class="token comment">/* Module A\n----------------------------------------------------------------*/</span>\n<span class="token selector">.mod_a</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">/* module A logo */</span>\n<span class="token selector">.mod_a_logo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">/* module A nav */</span>\n<span class="token selector">.mod_a_nav</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n\n<span class="token comment">/* Module B\n----------------------------------------------------------------*/</span>\n<span class="token selector">.mod_b</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">/* module B logo */</span>\n<span class="token selector">.mod_b_logo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">/* module B nav */</span>\n<span class="token selector">.mod_b_nav</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="嵌套规范" tabindex="-1"><a class="header-anchor" href="#嵌套规范" aria-hidden="true">#</a> 嵌套规范</h2><h3 id="选择器嵌套" tabindex="-1"><a class="header-anchor" href="#选择器嵌套" aria-hidden="true">#</a> 选择器嵌套</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">/* CSS */</span>\n<span class="token selector">.jdc </span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">body .jdc </span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">/* SCSS */</span>\n<span class="token selector">.jdc </span><span class="token punctuation">{</span>\n    <span class="token selector">body <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">/* CSS */</span>\n<span class="token selector">.jdc </span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.jdc_cover </span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.jdc_info </span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.jdc_info_name </span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">/* SCSS */</span>\n<span class="token selector">.jdc </span><span class="token punctuation">{</span>\n    <span class="token selector"><span class="token parent important">&amp;</span>_cover </span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token selector"><span class="token parent important">&amp;</span>_info </span><span class="token punctuation">{</span>\n        <span class="token selector"><span class="token parent important">&amp;</span>_name </span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="属性嵌套" tabindex="-1"><a class="header-anchor" href="#属性嵌套" aria-hidden="true">#</a> 属性嵌套</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">/* CSS */</span>\n<span class="token selector">.jdc </span><span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n    <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/img/icon.png<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">background-position</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* SCSS */</span>\n<span class="token selector">.jdc </span><span class="token punctuation">{</span>\n    <span class="token selector">background: </span><span class="token punctuation">{</span>\n        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n        <span class="token property">repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>\n        <span class="token property">image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/img/icon.png<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token property">position</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>可复用属性尽量抽离为页面变量，易于统一维护</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// CSS</span>\n<span class="token selector">.jdc </span><span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n    <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// SCSS</span>\n<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token selector">.jdc </span><span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>\n    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="混合-mixin" tabindex="-1"><a class="header-anchor" href="#混合-mixin" aria-hidden="true">#</a> 混合(mixin)</h2><p>根据功能定义模块，然后在需要使用的地方通过 <code>@include</code> 调用，避免编码时重复输入代码段</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// CSS</span>\n<span class="token selector">.jdc_1 </span><span class="token punctuation">{</span>\n    <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_2 </span><span class="token punctuation">{</span>\n    <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// SCSS</span>\n<span class="token keyword">@mixin</span> <span class="token function">radius</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$radius</span></span><span class="token punctuation">:</span>5px<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>\n    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_1 </span><span class="token punctuation">{</span>\n    <span class="token keyword">@include</span> radius<span class="token punctuation">;</span> <span class="token comment">//参数使用默认值</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_2 </span><span class="token punctuation">{</span>\n    <span class="token keyword">@include</span> <span class="token function">radius</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n\n<span class="token comment">// CSS</span>\n<span class="token selector">.jdc_1 </span><span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/img/icon.png<span class="token punctuation">)</span> no-repeat -10px 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_2 </span><span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/img/icon.png<span class="token punctuation">)</span> no-repeat -20px 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// SCSS</span>\n<span class="token keyword">@mixin</span> <span class="token function">icon</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$x</span></span><span class="token punctuation">:</span>0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$y</span></span><span class="token punctuation">:</span>0<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/img/icon.png<span class="token punctuation">)</span> no-repeat <span class="token variable">$x</span><span class="token punctuation">,</span> <span class="token variable">$y</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_1 </span><span class="token punctuation">{</span>\n    <span class="token keyword">@include</span> <span class="token function">icon</span><span class="token punctuation">(</span>-10px<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_2 </span><span class="token punctuation">{</span>\n    <span class="token keyword">@include</span> <span class="token function">icon</span><span class="token punctuation">(</span>-20px<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="占位选择器" tabindex="-1"><a class="header-anchor" href="#占位选择器" aria-hidden="true">#</a> 占位选择器 %</h2><p>如果不调用则不会有任何多余的 css 文件，占位选择器以 <code>%</code> 标识定义，通过 <code>@extend</code> 调用</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">//scss</span>\n<span class="token selector"><span class="token placeholder">%borderbox</span> </span><span class="token punctuation">{</span>\n    <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc </span><span class="token punctuation">{</span>\n    <span class="token keyword">@extend</span> <span class="token placeholder selector">%borderbox</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="extend-继承" tabindex="-1"><a class="header-anchor" href="#extend-继承" aria-hidden="true">#</a> extend 继承</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// CSS</span>\n<span class="token selector">.jdc_1 </span><span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_2 </span><span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// SCSS</span>\n<span class="token selector">.jdc_1 </span><span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_2 </span><span class="token punctuation">{</span>\n    <span class="token keyword">@extend</span> .jdc_1<span class="token punctuation">;</span>\n    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 或者</span>\n<span class="token selector"><span class="token placeholder">%font_red</span> </span><span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_1 </span><span class="token punctuation">{</span>\n    <span class="token keyword">@extend</span> <span class="token placeholder selector">%font_red</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_2 </span><span class="token punctuation">{</span>\n    <span class="token keyword">@extend</span> <span class="token placeholder selector">%font_red</span><span class="token punctuation">;</span>\n    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// CSS</span>\n<span class="token selector">.jdc_1 </span><span class="token punctuation">{</span><span class="token property">background-position</span><span class="token punctuation">:</span> 0 -20px<span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token selector">.jdc_2 </span><span class="token punctuation">{</span><span class="token property">background-position</span><span class="token punctuation">:</span> 0 -40px<span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token selector">.jdc_3 </span><span class="token punctuation">{</span><span class="token property">background-position</span><span class="token punctuation">:</span> 0 -60px<span class="token punctuation">;</span><span class="token punctuation">}</span>\n\n<span class="token comment">// SCSS</span>\n<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">3 </span><span class="token punctuation">{</span>\n    <span class="token selector">.jdc_<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>\n        <span class="token property">background-position</span><span class="token punctuation">:</span> 0 <span class="token punctuation">(</span>-20px<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>注意：<code>#{}</code> 是连接符，变量连接使用时需要依赖</p><h2 id="each-循环" tabindex="-1"><a class="header-anchor" href="#each-循环" aria-hidden="true">#</a> each 循环</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// CSS</span>\n<span class="token selector">.jdc_list </span><span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/img/jdc_list.png<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_detail </span><span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/img/jdc_detail.png<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// SCSS</span>\n<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$name</span> in list, detail </span><span class="token punctuation">{</span>\n    <span class="token selector">.jdc_<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span>\n        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/img/jdc_<span class="token variable">#{$name}</span>.png<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token comment">// CSS</span>\n<span class="token selector">.jdc_list </span><span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/img/jdc_list.png<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc_detail </span><span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/img/jdc_detail.png<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// SCSS</span>\n<span class="token keyword">@each</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$color</span> in <span class="token punctuation">(</span>list<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>detail<span class="token punctuation">,</span> blue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token selector">.jdc_<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span>\n        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/img/jdc_<span class="token variable">#{$name}</span>.png<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="function-函数" tabindex="-1"><a class="header-anchor" href="#function-函数" aria-hidden="true">#</a> function 函数</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">pxToRem</span><span class="token punctuation">(</span><span class="token variable">$px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">@return</span> <span class="token variable">$px</span> <span class="token operator">/</span> 10px <span class="token operator">*</span> 1rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.jdc </span><span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">pxToRem</span><span class="token punctuation">(</span>12px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="运算规范" tabindex="-1"><a class="header-anchor" href="#运算规范" aria-hidden="true">#</a> 运算规范</h2><p>运算符之间空出一个空格</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.jdc </span><span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px <span class="token operator">-</span> 50px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 30px <span class="token operator">/</span> 5<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>注意运算单位，单位同时参与运算，所以 10px 不等于 10，乘除运算时需要特别注意</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// 正确的运算格式</span>\n<span class="token selector">.jdc </span><span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px <span class="token operator">-</span> 50px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px <span class="token operator">+</span> 50px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px <span class="token operator">*</span> 2<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px <span class="token operator">/</span> 2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',37),v={},x=(0,a(3744).Z)(v,[["render",function(n,s){const a=(0,p.up)("OutboundLink"),v=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,(0,p._)("p",null,[t,(0,p._)("a",c,[l,(0,p.Wm)(a)]),o]),(0,p._)("p",null,[r,(0,p._)("a",u,[i,(0,p.Wm)(a)])]),b,(0,p._)("p",null,[k,(0,p.Wm)(v,{to:"/norm/css/code.html"},{default:(0,p.w5)((()=>[d])),_:1})]),(0,p._)("p",null,[m,(0,p._)("a",h,[S,(0,p.Wm)(a)])]),g],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);