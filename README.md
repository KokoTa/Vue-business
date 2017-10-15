# Vue-business

> 利用Vue构建的一个模拟购物的网站

## 简介
技术关注点：
1. Vue组件复用，组件间的数据处理
2. Vue幻灯片，过渡的执行顺序
3. Vuex抽出公共数据

完结感想：  
 * 细节啊细节，细节不注意就会产生连锁的Boom~ Boom~ Boom~，几道吗！
 * Vue的组件是一个非常强大的功能
 * 还有许多东西需要学习
 * lodash是个好东西（虽然没用到0 0）

## 效果
![效果](./move.gif)

## 目录结构
```
│  App.vue                                    布局页(头部/内容/尾部)
│  main.js                                    主程序
│
├─components
│  │  myDialog.vue                            弹出层组件     
│  │  slider.vue                              幻灯片组件
│  │
│  └─base
│          about.vue                          弹出层内容(关于)
│          choiceNumber.vue                   数量选择组件
│          choicePlace.vue                    地区选择组件
│          choiceType.vue                     类型选择组件
│          datepicker.vue                     日期选择组件
│          logIn.vue                          弹出层内容(登录)
│          myTable.vue                        表格组件
│          signUp.vue                         弹出层内容(注册)
│
├─pages
│  │  detail.vue                              详情页
│  │  index.vue                               主页
│  │  result.vue                              结果页
│  │
│  └─detail                                   详情页内容
│          djsy.vue
│          mmqlz.vue
│          sq.vue
│          zewg.vue
│
├─router
│      index.js                               路由
│
└─store
        index.js                              状态
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
