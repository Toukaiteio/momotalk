# momotalk
对《蔚蓝档案》中momotalk的复刻，绝赞开发中。

## [查看DEMO](http://81.68.195.96:8787/)

> 在创建消息时共有三种 **“主要类型”**，分别为：
> + target (对方的消息)
> + self (自己的消息)
> + statetext (表示状态的消息)
> 
> 对于这三种 **“主要类型”** 的target和self拥有一个 **“次级类型”**:
> + image (图片类型的消息)
> 
> **注意:image必须依存于target或self存在**
> 
> 对于image，有三种不同的 **“填充方式”**:
> + fill
> + fit
> + cover
> 
> **注意:三种“填充方式”必须依存于image存在**
> 
> 具体区别可自行测试
> 
> 例如 在创建对话的类型中填入 target image cover 就会创建一个对方的图片消息，且图片以cover的方式填充,填入self就会创建一个自己的消息。
>
> **注意:如果使用图片url作为内容，请确保该url允许被跨域访问，否则将无法被导出图片。导入的图片会存入localStorage，当图片被导入时会自动生成一个图片ID，按以下格式，例如:**

> + #461520_image/png
> + #10086_image/gif_2
>
> 接下来如果想要复用这张图片可以
> + 在image类型的消息的内容中填入图片ID
> + 重新导入图片(会自动在localStorage中检测是否已有重复图片)
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
