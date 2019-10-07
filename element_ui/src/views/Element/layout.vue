<template>
  <div class="el-layout">
    <div>
      <h3>基础布局</h3>
      <el-row class="el-row">
        <el-col :span="24">
          <div class="dark content"></div>
        </el-col>
      </el-row>
      <el-row class="el-row">
        <el-col :span="6" :offset="2">
          <div class="dark content"></div>
        </el-col>
        <el-col :span="6" :pull="0">
          <div class="light content"></div>
        </el-col>
      </el-row>
    </div>
    <div>
      <h3>分栏间隔</h3>
      <el-row :gutter="25">
        <el-col :span="6">
          <div class="content dark"></div>
        </el-col>
        <el-col :span="6">
          <div class="content dark"></div>
        </el-col>
        <el-col :span="6">
          <div class="content dark"></div>
        </el-col>
        <el-col :span="6">
          <div class="content dark"></div>
        </el-col>
      </el-row>
    </div>
    <div>
      <h3>flex</h3>
      <el-row
        :type="'flex'"
        :justify="'center'"
        :gutter="20"
        :align="'middle'"
        style="border:1px solid black;height:100px"
      >
        <el-col :span="6">
          <div class="content dark"></div>
        </el-col>
        <el-col :span="6">
          <div class="content dark"></div>
        </el-col>
        <el-col :span="6">
          <div class="content dark"></div>
        </el-col>
      </el-row>
    </div>
    <div>
      <h3>offset/push/pull</h3>
      <el-row :gutter="20">
        <el-col :span="6" :offset="1" :pull="1">
          <div class="content dark"></div>
        </el-col>
        <el-col :span="6" :offset="1" :push="1">
          <div class="content dark"></div>
        </el-col>
      </el-row>
    </div>
    <div>
      <h3>响应式布局</h3>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="content dark"></div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="content dark-light"></div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="content dark"></div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="content dark-light"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import it from "@/until/introduce";
import ct from "@/until/content";
export default {
  components: {
    it,
    ct
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.content {
  border-radius: 4px;
  min-height: 36px;
}
.dark {
  background: #99a9bf;
}
.light {
  background: #e5e9f2;
}
</style>
