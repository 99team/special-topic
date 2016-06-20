# fis-postprocessor-autoprefixer
CSS3 Autoprefix

## Usage

```
git clone https://github.com/millylee/fis-postprocessor-autoprefixer.git
cd fis-postprocessor-autoprefixer
npm i
```
## Fis2

```
fis.config.set('modules.postprocessor.css', 'autoprefixer');
fis.config.set('settings.postprocessor.autoprefixer', {
    "browsers": ['last 2 versions'],
    "flexboxfixer": true,
    "gradientfixer": true
});
```

## Fis3

```
fis.match('*.css',{
    postprocessor : fis.plugin("autoprefixer",{
        "browsers": ['last 2 versions'],
        "flexboxfixer": true,
        "gradientfixer": true
    })
})
```

具体浏览器参数请查看[Browserslist](https://github.com/ai/browserslist#queries)