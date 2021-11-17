"use strict";(self.webpackChunkguide_front_web=self.webpackChunkguide_front_web||[]).push([[645],{9245:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i={key:"v-39f58a3c",path:"/norm/html/webapp.html",title:"WebApp Meta",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"WebApp Meta 标签设置(iOS)",slug:"webapp-meta-标签设置-ios",children:[{level:3,title:"Viewport Meta Tag",slug:"viewport-meta-tag",children:[]},{level:3,title:"Apple-Specific Meta Tag Keys",slug:"apple-specific-meta-tag-keys",children:[]}]}],filePathRelative:"norm/html/webapp.md",git:{updatedTime:1637130328e3,contributors:[{name:"Accompany831143",email:"Accompany_zhao@163.com",commits:1}]}}},4377:(e,a,t)=>{t.r(a),t.d(a,{default:()=>S});var i=t(6252);const n=(0,i.uE)('<h1 id="webapp-meta" tabindex="-1"><a class="header-anchor" href="#webapp-meta" aria-hidden="true">#</a> WebApp Meta</h1><h2 id="webapp-meta-标签设置-ios" tabindex="-1"><a class="header-anchor" href="#webapp-meta-标签设置-ios" aria-hidden="true">#</a> WebApp Meta 标签设置(iOS)</h2><blockquote><p>A web application is designed to look and behave in a way similar to a native application—for example, it is scaled to fit the entire screen on iOS. You can tailor your web application for Safari on iOS even further, by making it appear like a native application when the user adds it to the Home screen. You do this by using settings for iOS that are ignored by other platforms.</p></blockquote><p>WebApp目的在于使其界面和行为在某种程度上类似于原生APP应用。例如，WebApp 可以在 iOS 设备上通过缩放去适配设备屏幕。当用户将WebApp程序添加到主屏幕后，会使得它看上去像原生APP一样，以此，你可以进一步为 Safari 定制自己的 WebApp，而使用某些专为 iOS 平台设定的设置就可以做到。</p><p>WebApp可以通过设置 meta 标签来改变页面的一些表现，有些 meta 设置在 Safari 应用或原生 App 的内嵌网页中都可以生效，而有些设置侧需要将应用添加到主屏幕的时候才会生效。</p><h3 id="viewport-meta-tag" tabindex="-1"><a class="header-anchor" href="#viewport-meta-tag" aria-hidden="true">#</a> Viewport Meta Tag</h3><h4 id="通用类设置" tabindex="-1"><a class="header-anchor" href="#通用类设置" aria-hidden="true">#</a> 通用类设置</h4><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0, \nmaximum-scale=1.0, user-scalable=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>width -- viewport的宽度</li><li>height -- viewport的高度</li><li>initial-scale -- 初始的缩放比例</li><li>minimum-scale -- 允许用户缩放到的最小比例</li><li>maximum-scale -- 允许用户缩放到的最大比例</li><li>user-scalable -- 是否允许用户缩放</li></ul><h4 id="safari-on-ios-viewport" tabindex="-1"><a class="header-anchor" href="#safari-on-ios-viewport" aria-hidden="true">#</a> Safari on iOS viewport</h4><blockquote><p>The width of the viewport in pixels. The default is 980. The range is from 200 to 10,000.</p><p>The minimum-scale and maximum-scale properties also affect the behavior when changing orientations. The range of these property values is from &gt;0 to 10.0. The default value for minimum-scale is 0.25 and maximum-scale is 5.0</p></blockquote><blockquote><p>user-scalable -- The default is yes. Setting user-scalable to no also prevents a webpage from scrolling when entering text in an input field.</p></blockquote><ul><li>默认宽度是 980px，范围从 200px 到 10000px</li><li>initial-scale 缩放比例范围值是 从 &gt;0 到 10 之间</li><li>minimum-scale 默认值是 0.25</li><li>maximum-scale 默认值是 5</li><li>user-scalable -- 默认值是 yes，设置 no 还可以在文本框输入文本的时候阻止页面滚动</li></ul><p>更多关于 Safari on iOS viewport 的设置:</p>',14),l={href:"https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html#//apple_ref/doc/uid/TP40006509-SW19",target:"_blank",rel:"noopener noreferrer"},o=(0,i.Uk)("Configuring the Viewport"),p={href:"https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html",target:"_blank",rel:"noopener noreferrer"},s=(0,i.Uk)("Safari HTML Reference"),r=(0,i.uE)('<h3 id="apple-specific-meta-tag-keys" tabindex="-1"><a class="header-anchor" href="#apple-specific-meta-tag-keys" aria-hidden="true">#</a> Apple-Specific Meta Tag Keys</h3><h4 id="apple-mobile-web-app-capable" tabindex="-1"><a class="header-anchor" href="#apple-mobile-web-app-capable" aria-hidden="true">#</a> apple-mobile-web-app-capable</h4><p>设置 WebApp 是否进入全屏模式，该设置需要添加到主屏幕才生效</p><pre><code>&lt;meta name=&quot;apple-mobile-web-app-capable&quot; content=&quot;yes&quot;&gt;\n</code></pre><blockquote><p>If content is set to yes, the web application runs in full-screen mode;otherwise, it does not. The default behavior is to use Safari to display web content.You can determine whether a webpage is displayed in full-screen mode using the window.navigator.standalone read-only Boolean JavaScript property.</p></blockquote><ul><li>content设置 yes 进入全屏模式</li><li>默认会启动 Safari 应用，使用 Safari 应用浏览</li><li>通过检测 window.navigator.standalone 的 Boolean 值可以判断 web 应用是否处于全屏模式</li></ul><h4 id="apple-mobile-web-app-status-bar-style" tabindex="-1"><a class="header-anchor" href="#apple-mobile-web-app-status-bar-style" aria-hidden="true">#</a> apple-mobile-web-app-status-bar-style</h4><p>为 webapp 设置状态栏样式</p><pre><code>&lt;meta name=&quot;apple-mobile-web-app-status-bar-style&quot; content=&quot;black&quot;&gt;\n</code></pre><blockquote><p>This meta tag has no effect unless you first specify full-screen mode as described in apple-apple-mobile-web-app-capable.</p></blockquote><p>If content is set to default, the status bar appears normal. If set to black, the status bar has a black background. If set to black-translucent, the status bar is black and translucent. If set to default or black, the web content is displayed below the status bar. If set to black-translucent, the web content is displayed on the entire screen, partially obscured by the status bar. The default value is default.</p><ul><li>此 meta 设置只在全屏模式生效</li><li>默认值是 default</li><li>content=&quot;black&quot;，状态栏背景黑色，网页内容在状态栏下面</li><li>content=&quot;black-translucent&quot;，状态栏半透明，背景黑色，网页内容占满全屏</li></ul>',12),c=(0,i.Uk)("该设置在 iOS6 和 iOS7 表现还可以，但到了 iOS8 后会出现各种问题，而且在 iOS9 中并没有生效。参阅："),u={href:"http://stackoverflow.com/questions/25884806/ios-8-web-app-status-bar-position-and-resizing-problems",target:"_blank",rel:"noopener noreferrer"},d=(0,i.Uk)("iOS 8: web app status bar position and resizing problems"),h=(0,i._)("h4",{id:"format-detection",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#format-detection","aria-hidden":"true"},"#"),(0,i.Uk)(" format-detection")],-1),b=(0,i._)("p",null,"自动识别页面中有可能是电话格式的数字",-1),m=(0,i._)("pre",null,[(0,i._)("code",null,'<meta name="format-detection" content="telephone=no">\n')],-1),f=(0,i._)("blockquote",null,[(0,i._)("p",null,"By default, Safari on iOS detects any string formatted like a phone number and makes it a link that calls the number. Specifying telephone=no disables this feature.")],-1),g=(0,i._)("p",null,"iOS中的 Safari 会默认识别与电话格式相似的数字并生成一个可以拉起电话应用并将该数字作为电话号码拨打的链接。定义 telephone=no 可以屏蔽该功能",-1),w=(0,i.Uk)("更多 WebApp 设置参考 "),k={href:"https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4",target:"_blank",rel:"noopener noreferrer"},v=(0,i.Uk)("Configuring Web Applications"),y={},S=(0,t(3744).Z)(y,[["render",function(e,a){const t=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("p",null,[(0,i._)("a",l,[o,(0,i.Wm)(t)]),(0,i._)("a",p,[s,(0,i.Wm)(t)])]),r,(0,i._)("p",null,[(0,i._)("em",null,[c,(0,i._)("a",u,[d,(0,i.Wm)(t)])])]),h,b,m,f,g,(0,i._)("p",null,[w,(0,i._)("a",k,[v,(0,i.Wm)(t)])])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[e,i]of a)t[e]=i;return t}}}]);