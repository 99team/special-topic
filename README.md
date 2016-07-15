## 一、Markdown

### 1.语法说明

[Markdown 语法说明](https://segmentfault.com/markdown)


### 2.工具推荐

Windows 下推荐使用 `Typora`，使用 Electron 构建，界面简洁，支持快捷键。

![image](http://note.youdao.com/yws/public/resource/b33b0c4c45bbe9de8b3f5dd2ee2e18cd/8FBFFF82074D4E1299EFD9A1349F3BA4)

Sublime Text 3 推荐安装 `Markdown Editing`

![image](http://note.youdao.com/yws/public/resource/b33b0c4c45bbe9de8b3f5dd2ee2e18cd/A9D5200687314660B765098A416E20EC)

## 二、Hexo

### 1.Hexo 简介

Hexo 是一个能将 markdown 文档转换成 html 文件的静态博客生成工具。之所以将它称为静态博客生成工具而非 markdown 转换工具在于通过插件可以扩展它的功能。比如生成栏目、标签、RSS、站点地图等。

### 2.Hexo 使用

首先本地先装好node环境，由于国内环境，所以最好更换下npm源，这里使用的是淘宝的源。

```bash
npm config set registry https://registry.npm.taobao.org/
```

更换源后全局安装下 hexo。

```bash
npm i hexo-cli -g
```

然后可以复制下专题的 hexo theme，进入到目录安装下依赖，过程几分钟到十几分钟不等。

``` bash
git clone https://github.com/millylee/hexo-scaffold-topic.git
cd hexo-scaffold-topic
npm i
```

运行后访问`http://localhost:4000/`即可实时查看效果，如果没有更新可以使用`Ctrl + C`终止，然后再重新运行。

``` bash
hexo s
```

确定文章都完成后使用以下命令会在当前目录生成`/public`文件夹，该目录即为最终可用静态资源文件。

``` bash
hexo g
```

### 3.Hexo 目录结构

#### 主目录结构

![专题](http://note.youdao.com/yws/public/resource/b33b0c4c45bbe9de8b3f5dd2ee2e18cd/FF4ABCBE1CCA41D7B190F9883CC22D6A)

```
hexo-scaffold-topic/
|-- scaffolds/ //hexo new <postname> 时的脚手架模板
|-- source/   //资源文件夹
|-- themes/   //主题文件夹
|-- _config.yml //站点配置
```

以上为`hexo 文件结构`，其它文件则为使用过程中产生的，并非必需。如果发布的域名不是根目录，则必需在站点配置中更改两个字段。以下假设发布到的是`public`目录下。

```
url: http://f2e.tming.net.cn/public
root: /public/
```

#### 资源文件夹

```
source/
|-- _posts/ //hexo new 生成的 markdown 文件
|-- downloads/
    |-- code/ //用来 include 进页面进行着色的代码文件
|-- images/ //图片文件夹
```

#### 主题文件夹

```
topic/
|-- languages/ //国际化文件夹
    |-- zh-cn.yml //语言配置
|-- layouts/   //布局文件
|-- scripts/   //启动时会被自动载入，正常会放辅助函数
|-- source/   //用来存入主题用到的css/js/img
|-- _config.yml //主题配置
```

## 三、写文章

在专题根目录中使用命令行工具执行 `hexo new <postname>`，其中 `<postname>` 替换为文章名，后期会生成 html 页面。

![专题](http://note.youdao.com/yws/public/resource/b33b0c4c45bbe9de8b3f5dd2ee2e18cd/A4156693D2C54FA9AD63F1EB3D1D75FC)

执行完该命令后会发现，`_posts` 会增加一个类似 `2016-07-15-postname.md` 格式的文件，这个是在站点配置的，请勿更改格式，打开该文件需要做的就是添加文章分类，这个也是用来区别专题，比如我们要做一个**规范**专题，这里就可以将分类定为 `guide`。

![文章](http://note.youdao.com/yws/public/resource/b33b0c4c45bbe9de8b3f5dd2ee2e18cd/271130B8920B4705998A82077C2E4822)

如果站点设置为根目录，那么就可以这样访问 `http://localhost:4000/category/postname.html`。

如果专题中有多篇文章，那么就需要在主题配置中添加对应菜单。

```
# /theme/topic/_config.yml
menu:
  guide:
    html: guide/html.html
    css: guide/css.html
    js: guide/js.html
```

接着在语言配置中添加导航对应的中文名称。

```
# /theme/topic/languages/zh-cn.yml
menu:
  guide: 前端规范
    html: HTML 规范
    css: CSS 规范
    js: JS 规范
```