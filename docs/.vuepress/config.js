/*
 * @Date: 2021-11-17 10:00:08
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-17 12:43:44
 * @FilePath: \guide_front_web\docs\.vuepress\config.js
 */
module.exports = {
    lang: 'zh-CN',
    title: '前端开发规范',
    description: '前端工程师开发规范',

    themeConfig: {
        logo: null,
        navbar: [
            {
                text: '文档',
                link: '/guide/',
            },
            {
                text: '更新日志',
                link: '/log/',
            },

        ],
        sidebar: [
            {
              text: '概述',
              link: '/guide/',
              children:[
                {
                    text: 'HTML规范',
                    children:[
                        {
                            text: '代码规范',
                            link: '/guide/html/code.md',
                        },
                        {
                            text: '注释规范',
                            link: '/guide/html/note.md',
                        },
                        {
                            text: '文件模板',
                            link: '/guide/html/template.md',
                        },
                        {
                            text: 'WebApp Meta',
                            link: '/guide/html/webapp.md',
                        },
                    ],
                },
                {
                    text: 'CSS规范',
                    children:[
                        {
                            text: '代码规范',
                            link: '/guide/css/code.md',
                        },
                        {
                            text: '注释规范',
                            link: '/guide/css/note.md',
                        },
                        {
                            text: 'SASS规范',
                            link: '/guide/css/sass.md',
                        },
                        {
                            text: '重置样式',
                            link: '/guide/css/reset.md',
                        },
                        {
                            text: '媒体查询',
                            link: '/guide/css/query.md',
                        },
                        {
                            text: '移动端常用私有属性',
                            link: '/guide/css/webkit.md',
                        },
                    ]
                },
                {
                    text: '图片规范',
                    children:[
                        {
                            text: '图片格式',
                            link: '/guide/image/format.md',
                        },
                        {
                            text: '图片大小',
                            link: '/guide/image/size.md',
                        },
                        {
                            text: '图片质量',
                            link: '/guide/image/quality.md',
                        },
                        {
                            text: '图片引入',
                            link: '/guide/image/import.md',
                        },
                    ]
                },
                {
                    text: '命名规范',
                    children:[
                        {
                            text: '目录命名',
                            link: '/guide/name/dir.md',
                        },
                        {
                            text: '图片命名',
                            link: '/guide/name/image.md',
                        },
                        {
                            text: 'HTML/CSS',
                            link: '/guide/name/htmlcss.md',
                        },
                        {
                            text: 'ClassName',
                            link: '/guide/name/classname.md',
                        },
                    ]
                },
                {
                    text: 'JS规范',
                    children:[
                        {
                            text: '语言规范',
                            link: '/guide/js/language.md',
                        },
                        {
                            text: '代码规范',
                            link: '/guide/js/code.md',
                        },
                        {
                            text: 'React&JSX书写规范',
                            link: '/guide/js/react.md',
                        },
                    ]
                },
              ],
            },
          ],
    },
}