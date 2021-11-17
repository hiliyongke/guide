"use strict";(self.webpackChunkguide_front_web=self.webpackChunkguide_front_web||[]).push([[982],{2435:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-500f0fe0",path:"/norm/name/classname.html",title:"ClassName命名",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"命名原则",slug:"命名原则",children:[]},{level:2,title:"模块命名",slug:"模块命名",children:[]},{level:2,title:"常用命名推荐",slug:"常用命名推荐",children:[{level:3,title:"推荐使用",slug:"推荐使用",children:[]}]}],filePathRelative:"norm/name/classname.md",git:{updatedTime:1637130328e3,contributors:[{name:"Accompany831143",email:"Accompany_zhao@163.com",commits:1}]}}},4152:(a,n,s)=>{s.r(n),s.d(n,{default:()=>e});const t=(0,s(6252).uE)('<h1 id="classname命名" tabindex="-1"><a class="header-anchor" href="#classname命名" aria-hidden="true">#</a> ClassName命名</h1><p>ClassName的命名应该尽量精短、明确，必须以<strong>字母开头命名</strong>，且<strong>全部字母为小写</strong>，单词之间<strong>统一使用下划线</strong> “_” 连接</p><h2 id="命名原则" tabindex="-1"><a class="header-anchor" href="#命名原则" aria-hidden="true">#</a> 命名原则</h2><p>基于姓氏命名法（继承 + 外来）</p><p>祖先模块不能出现下划线，除了是全站公用模块，如 <code>mod_</code> 系列的命名：</p><p><strong>推荐：</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t\t...\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t\n<span class="token comment">&lt;!-- 这个是全站公用模块，祖先模块允许直接出现下划线 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mod_info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mod_info_son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mod_info_son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t...\t\t\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>不推荐：</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info_son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info_son<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t...\t\t\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\t\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_cover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>当子孙模块超过4级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块</p><p><strong>推荐：</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_cover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    \t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info_user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    \t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info_user_img<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    \t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    \t\t\t<span class="token comment">&lt;!-- 这个时候 miui 为 modulename_info_user_img 首字母缩写--&gt;</span>\n    \t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>miui_tit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    \t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>miui_txt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    \t\t\t...\n    \t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    \t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    \t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info_list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>不推荐：</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_cover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    \t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info_user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    \t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info_user_img<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    \t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    \t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info_user_img_tit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    \t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info_user_img_txt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    \t\t\t...\n    \t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    \t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    \t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modulename_info_list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="模块命名" tabindex="-1"><a class="header-anchor" href="#模块命名" aria-hidden="true">#</a> 模块命名</h2><p>全站公共模块：以 <code>mod_</code> 开头</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mod_yours<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>业务公共模块：以 <code>业务名_mod_</code> 开头</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paipai_mod_yours<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="常用命名推荐" tabindex="-1"><a class="header-anchor" href="#常用命名推荐" aria-hidden="true">#</a> 常用命名推荐</h2><p><strong>注意</strong>：ad、banner、gg、guanggao 等有机会和广告挂勾的字眠不建议直接用来做ClassName，因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名，因此</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ad<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这种广告的英文或拼音类名不应该出现</p><p>另外，<strong>敏感不和谐字眼</strong>也不应该出现，如：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fuck<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gcd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ass<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>KMT<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> \n...\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="推荐使用" tabindex="-1"><a class="header-anchor" href="#推荐使用" aria-hidden="true">#</a> 推荐使用</h3><table><thead><tr><th>ClassName</th><th>含义</th></tr></thead><tbody><tr><td>about</td><td>关于</td></tr><tr><td>account</td><td>账户</td></tr><tr><td>arrow</td><td>箭头图标</td></tr><tr><td>article</td><td>文章</td></tr><tr><td>aside</td><td>边栏</td></tr><tr><td>audio</td><td>音频</td></tr><tr><td>avatar</td><td>头像</td></tr><tr><td>bg,background</td><td>背景</td></tr><tr><td>bar</td><td>栏（工具类）</td></tr><tr><td>branding</td><td>品牌化</td></tr><tr><td>crumb,breadcrumbs</td><td>面包屑</td></tr><tr><td>btn,button</td><td>按钮</td></tr><tr><td>caption</td><td>标题，说明</td></tr><tr><td>category</td><td>分类</td></tr><tr><td>chart</td><td>图表</td></tr><tr><td>clearfix</td><td>清除浮动</td></tr><tr><td>close</td><td>关闭</td></tr><tr><td>col,column</td><td>列</td></tr><tr><td>comment</td><td>评论</td></tr><tr><td>community</td><td>社区</td></tr><tr><td>container</td><td>容器</td></tr><tr><td>content</td><td>内容</td></tr><tr><td>copyright</td><td>版权</td></tr><tr><td>current</td><td>当前态，选中态</td></tr><tr><td>default</td><td>默认</td></tr><tr><td>description</td><td>描述</td></tr><tr><td>details</td><td>细节</td></tr><tr><td>disabled</td><td>不可用</td></tr><tr><td>entry</td><td>文章，博文</td></tr><tr><td>error</td><td>错误</td></tr><tr><td>even</td><td>偶数，常用于多行列表或表格中</td></tr><tr><td>fail</td><td>失败（提示）</td></tr><tr><td>feature</td><td>专题</td></tr><tr><td>fewer</td><td>收起</td></tr><tr><td>field</td><td>用于表单的输入区域</td></tr><tr><td>figure</td><td>图</td></tr><tr><td>filter</td><td>筛选</td></tr><tr><td>first</td><td>第一个，常用于列表中</td></tr><tr><td>footer</td><td>页脚</td></tr><tr><td>forum</td><td>论坛</td></tr><tr><td>gallery</td><td>画廊</td></tr><tr><td>group</td><td>模块，清除浮动</td></tr><tr><td>header</td><td>页头</td></tr><tr><td>help</td><td>帮助</td></tr><tr><td>hide</td><td>隐藏</td></tr><tr><td>hightlight</td><td>高亮</td></tr><tr><td>home</td><td>主页</td></tr><tr><td>icon</td><td>图标</td></tr><tr><td>info,information</td><td>信息</td></tr><tr><td>last</td><td>最后一个，常用于列表中</td></tr><tr><td>links</td><td>链接</td></tr><tr><td>login</td><td>登录</td></tr><tr><td>logout</td><td>退出</td></tr><tr><td>logo</td><td>标志</td></tr><tr><td>main</td><td>主体</td></tr><tr><td>menu</td><td>菜单</td></tr><tr><td>meta</td><td>作者、更新时间等信息栏，一般位于标题之下</td></tr><tr><td>module</td><td>模块</td></tr><tr><td>more</td><td>更多（展开）</td></tr><tr><td>msg,message</td><td>消息</td></tr><tr><td>nav,navigation</td><td>导航</td></tr><tr><td>next</td><td>下一页</td></tr><tr><td>nub</td><td>小块</td></tr><tr><td>odd</td><td>奇数，常用于多行列表或表格中</td></tr><tr><td>off</td><td>鼠标离开</td></tr><tr><td>on</td><td>鼠标移过</td></tr><tr><td>output</td><td>输出</td></tr><tr><td>pagination</td><td>分页</td></tr><tr><td>pop,popup</td><td>弹窗</td></tr><tr><td>preview</td><td>预览</td></tr><tr><td>previous</td><td>上一页</td></tr><tr><td>primary</td><td>主要</td></tr><tr><td>progress</td><td>进度条</td></tr><tr><td>promotion</td><td>促销</td></tr><tr><td>rcommd,recommendations</td><td>推荐</td></tr><tr><td>reg,register</td><td>注册</td></tr><tr><td>save</td><td>保存</td></tr><tr><td>search</td><td>搜索</td></tr><tr><td>secondary</td><td>次要</td></tr><tr><td>section</td><td>区块</td></tr><tr><td>selected</td><td>已选</td></tr><tr><td>share</td><td>分享</td></tr><tr><td>show</td><td>显示</td></tr><tr><td>sidebar</td><td>边栏，侧栏</td></tr><tr><td>slide</td><td>幻灯片，图片切换</td></tr><tr><td>sort</td><td>排序</td></tr><tr><td>sub</td><td>次级的，子级的</td></tr><tr><td>submit</td><td>提交</td></tr><tr><td>subscribe</td><td>订阅</td></tr><tr><td>subtitle</td><td>副标题</td></tr><tr><td>success</td><td>成功（提示）</td></tr><tr><td>summary</td><td>摘要</td></tr><tr><td>tab</td><td>标签页</td></tr><tr><td>table</td><td>表格</td></tr><tr><td>txt,text</td><td>文本</td></tr><tr><td>thumbnail</td><td>缩略图</td></tr><tr><td>time</td><td>时间</td></tr><tr><td>tips</td><td>提示</td></tr><tr><td>title</td><td>标题</td></tr><tr><td>video</td><td>视频</td></tr><tr><td>wrap</td><td>容器，包，一般用于最外层</td></tr><tr><td>wrapper</td><td>容器，包，一般用于最外层</td></tr></tbody></table>',29),p={},e=(0,s(3744).Z)(p,[["render",function(a,n){return t}]])},3744:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,t]of n)s[a]=t;return s}}}]);