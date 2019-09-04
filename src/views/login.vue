<template>
    <div>
        <div @click="gologin">登录</div>
        <div @click="submit">Vuex登录</div>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';

    export default {
        data(){
            return {

            }
        },
        methods: {
            gologin(){
                console.log('登录')
                localStorage.setItem('Token',123456)
                this.rout_p()
            },
            rout_p(){
                let redirec=decodeURIComponent(this.$route.query.redirect || '/');//因为query会自动把fullpath编码，这里需要解码
                const info = { name: 'hou', age: 24, id: '001' };
                localStorage.setItem('hou', JSON.stringify(info));
                this.$router.push({//跳转到个人页
                    path:redirec
                })
            },
            submit(){
                console.log(this.$store.state.isLogin)
                // 请求判断登录（将后台返回的token传入）
                // this.$http.get('http://localhost:3000/users?username='+this.us.uname+'&password='+this.us.upwd).then((response) => { 
                //         //这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
                //         //注意这里是个难点，Vuex与Vue-Resource结合使用。 
                //         if(response.body != null & response.body.length > 0){ 
                //             console.log(response.body[0])
                //             this.$store.commit('user_signin',response.body[0]);
                //             this.name=''
                //             this.pwd= ''
                //             this.$router.push({ path: 'index' }) 
                //         }else{
                //             alert('请输入正确的用户名和密码！！！');
                //             this.name=''
                //             this.pwd= ''
                //         }
                        
                //     }).then((error)=> this.error = error)
                let redirec=decodeURIComponent(this.$route.query.redirect || '/');//因为query会自动把fullpath编码，这里需要解码
                this.$store.commit('user_l',13751324427);//发送参数
                console.log(redirec)
                this.$router.push({//跳转到个人页
                    path:redirec
                })
                // console.log(store.state.user)
            }
        },
        created () {
            // console.log(decodeURIComponent(this.$route.query.redirect));
            // 路由进入返回路径（跳转到个人页面）
           this.rout_p()
           this.submit()
        }
    }
</script>