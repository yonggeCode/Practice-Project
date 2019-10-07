<template>
  <div>
    <div>
      <h3>基本用法</h3>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>
    <div>
        <h3>试一下</h3>
        <el-link href="https://baidu.com" 
                target="_blank"
                type="success"
                :underline="false"
                icon="el-icon-edit"
                >百度
                <i class="el-icon-view el-icon--right"></i></el-link>
    </div>
  </div>
</template>

