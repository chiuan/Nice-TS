# 环境

- node-v10.15.2 如果用高于此版本的node, protobufjs生成d.ts类型文件时会报错

安装node
```sh
npm install typescript
```

# 启动项目

- 使用VS Code打开 TsProj文件夹
bundle:dev 开发模式，可以调试 ;
bundle:publish 发布模式，发布最终代码;
运行上面的其中一种模式开始编译TS脚本。

然后一般开发时候启动dev即可在Unity中点击Play,开始运行框架。实时编辑ts刷新玩unity启动即是最新状态。

# Adressable资源管理使用方法 + 更新方式
(说明)[https://zhuanlan.zhihu.com/p/184846532]

# FGUI工程使用

- 需要导出资源到Assets/AssetsPackage/FairyGUI
- 需要生成代码到TsProj/data/ui

# protobufjs协议
(说明)[https://zhuanlan.zhihu.com/p/205342984]
