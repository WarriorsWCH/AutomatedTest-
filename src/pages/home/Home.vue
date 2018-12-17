
<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="user" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem class="logo" name="logo">
            <img
              src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png"
            >
          </MenuItem>
          <MenuItem v-for="(item,index) in menues" :key="index" :name="item.name">
            <Icon :type="item.icon"/>
            <span>{{item.text}}</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
          <Breadcrumb class="nav">
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </Header>
        <Content :style="{margin: '20px', background: '#fff'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      isCollapsed: false,
      menues: [
        { text: "用户管理", name: "user", icon: "md-person-add" },
        { text: "项目管理", name: "project", icon: "md-list-box" },
        { text: "测试脚本管理", name: "code", icon: "md-code" },
        { text: "测试任务管理", name: "task", icon: "md-hammer" }
      ]
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>

<style scoped>
.layout,
.ivu-layout {
  height: 100%;
}
.logo {
  height: 84px;
  padding: 0;
  text-align: center;
}
.logo img {
  height: 60px;
  width: 50px;
  border: 100%;
}
.nav {
  display: inline-block;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
  cursor: pointer;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
