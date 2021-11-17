/*
 * @Date: 2021-11-17 10:00:08
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-17 14:34:04
 * @FilePath: \guide_front_web\docs\.vuepress\config.js
 */
module.exports = {
    lang: 'zh-CN',
    title: '前端开发规范',
    description: '前端工程师开发规范',
    base:"/guide/",
    themeConfig: {
        logo: null,
        lastUpdatedText:"最近更新",
        contributors:false,
        navbar: [
            {
                text: '文档',
                link: '/norm/',
            },
            {
                text: '更新日志',
                link: '/log/',
            },

        ],
        sidebar: [
            {
              text: '概述',
              link: '/norm/',
              children:[
                {
                    text: 'HTML规范',
                    children:[
                        {
                            text: '代码规范',
                            link: '/norm/html/code.md',
                        },
                        {
                            text: '注释规范',
                            link: '/norm/html/note.md',
                        },
                        {
                            text: '文件模板',
                            link: '/norm/html/template.md',
                        },
                        {
                            text: 'WebApp Meta',
                            link: '/norm/html/webapp.md',
                        },
                    ],
                },
                {
                    text: 'CSS规范',
                    children:[
                        {
                            text: '代码规范',
                            link: '/norm/css/code.md',
                        },
                        {
                            text: '注释规范',
                            link: '/norm/css/note.md',
                        },
                        {
                            text: 'SASS规范',
                            link: '/norm/css/sass.md',
                        },
                        {
                            text: '重置样式',
                            link: '/norm/css/reset.md',
                        },
                        {
                            text: '媒体查询',
                            link: '/norm/css/query.md',
                        },
                        {
                            text: '移动端常用私有属性',
                            link: '/norm/css/webkit.md',
                        },
                    ]
                },
                {
                    text: '图片规范',
                    children:[
                        {
                            text: '图片格式',
                            link: '/norm/image/format.md',
                        },
                        {
                            text: '图片大小',
                            link: '/norm/image/size.md',
                        },
                        {
                            text: '图片质量',
                            link: '/norm/image/quality.md',
                        },
                        {
                            text: '图片引入',
                            link: '/norm/image/import.md',
                        },
                    ]
                },
                {
                    text: '命名规范',
                    children:[
                        {
                            text: '目录命名',
                            link: '/norm/name/dir.md',
                        },
                        {
                            text: '图片命名',
                            link: '/norm/name/image.md',
                        },
                        {
                            text: 'HTML/CSS',
                            link: '/norm/name/htmlcss.md',
                        },
                        {
                            text: 'ClassName',
                            link: '/norm/name/classname.md',
                        },
                    ]
                },
                {
                    text: 'JS规范',
                    children:[
                        {
                            text: '语言规范',
                            link: '/norm/js/language.md',
                        },
                        {
                            text: '代码规范',
                            link: '/norm/js/code.md',
                        },
                        {
                            text: 'React&JSX书写规范',
                            link: '/norm/js/react.md',
                        },
                    ]
                },
              ],
            },
          ],
    },
}