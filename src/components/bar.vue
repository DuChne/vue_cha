<template>
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" :to="{name:'home'}">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" :to="{name:'go'}">
            <span class="mui-icon mui-icon-email"></span>
            <span class="mui-tab-label">消息</span>
        </router-link>
        <router-link class="mui-tab-item" :to="{name:'cat'}">
            <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
            <span class="mui-tab-label">通讯录</span>
        </router-link>
        <router-link class="mui-tab-item" :to="{name:'about'}">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">设置</span>
        </router-link>
    </nav>
</template>