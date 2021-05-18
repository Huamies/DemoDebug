
<template>
	<view>
	
			
		<view class="bg-img bg-mask flex align-center" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');">
			<view :style="'height:'+ screenHeight +'px !important;'">
				<view class="padding-xl text-white" >
					<view class="padding-xs text-xxl text-bold">
						钢铁之翼
					</view>
					<view class="padding-xs text-lg">
						Only the guilty need fear me.
					</view>
				</view>
				
				
				<form>
					<view class="padding flex flex-direction">
					
						<view class="cu-form-group" style="margin-bottom: 5%;">
							<view class="title">账	户：</view>
							<input placeholder="请输入用户名" v-model="inName" ></input>
						</view>
						
						<view class="cu-form-group">
							<view class="title">密	码：</view>
							<input placeholder="请输入密码" v-model="inPwd" ></input>
						</view>
						
						<view class="padding flex flex-direction">
							<button class="cu-btn bg-blue lg" @click="OnLogin()">登入</button>
							<button class="cu-btn bg-red margin-tb-sm lg">取消</button>
						</view>
				
				
					</view>
				</form>
				
			</view>
		</view>

	
	</view>
</template>

<script>
	
    export default {
        data() {
            return {
                screenHeight: '',
				inName:'',
				inPwd:'',
				index:-1,
				picker: ['1', '2', '3'],
            }
        },
        methods: {
            OnLogin(){
				
				//不可信任信息筛选
				if(this.inName == "" || this.inPwd == ""){
					
					uni.showToast({
						title: '输入项请勿留空',
						icon:'none',
						duration: 1000
					});
					
				}else{
				
					uni.request({
						url:'http://localhost:80/queryUser',
						methods:'GET',
						dataType :'JSON',
						async: false,
						data: {
							userName: this.inName,
							userPwd: this.inPwd
						},
						success: res => {
							debugger
							if(res.data == "" || res.data == "[]"){
								uni.showToast({
									title: '账户或者密码错误，请重试！',
									duration: 1000
								});
							}else{
								console.log('返回', res.data);
								uni.reLaunch({
									url:'index'
								})
							}
							
							
								
						},
						fail:res =>{
							debugger
							//失败时候回调
							uni.showToast({
								title: '系统错误，请联系管理员',
								icon:'none',
								duration: 1000
							});
						}
						
					})
				}
				
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
        },
        onLoad() {
            this.screenHeight = uni.getSystemInfoSync().windowHeight;
        }
		
    }
	
</script>

<style>

    page{
        width: 100%;
        height: 100%;
    }
    .container{
        width: 100%;
        min-height: 100%;
    }

</style>
