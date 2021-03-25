
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
					
					<view class="cu-form-group">
						<view class="title">输入框</view>
						<input placeholder="请输入用户名" v-model="inName" ></input>
					</view>
					
					<view class="cu-form-group">
						<view class="title">输入框</view>
						<input placeholder="请输入密码" v-model="inPwd" ></input>
					</view>
					
					<view class="cu-form-group margin-top">
						<view class="title">普通选择</view>
						<picker @change="PickerChange" :value="index" :range="picker">
							<view class="picker">
								{{index>-1?picker[index]:'请选择'}}
							</view>
						</picker>
					</view>
					
					<radio-group class="block" @change="RadioChange">
						<view class="cu-form-group margin-top">
							<view class="title">单选操作(radio)</view>
							<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
						</view>
						<!-- #ifndef MP-ALIPAY -->
						<view class="cu-form-group">
							<view class="title">定义样式</view>
							<radio class='radio' :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B"></radio>
						</view>
						<view class="cu-form-group">
							<view class="title">定义颜色</view>
							<view>
								<radio class='blue radio' :class="radio=='C'?'checked':''" :checked="radio=='C'?true:false" value="C">男</radio>
								<radio class='blue radio' :class="radio=='D'?'checked':''" :checked="radio=='D'?true:false" value="D">女</radio>
							</view>
						</view>
						<!-- #endif -->
					</radio-group>
				
					<view class="padding flex flex-direction">
						<button class="cu-btn bg-red margin-tb-sm lg" @click="OnLogin()">嫣红</button>
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
				uni.request({
					url:'http://localhost:80/queryUser',
					methods:'GET',
					dataType :'JSON',
					async: false,
					data: {
						userName: 'admin',
						userPwd:'123456'
					},
					success: res => {
						debugger
							console.log('返回', res.data);
					},
					fail:res =>{
						debugger
						//失败时候回调
					}
					
				})
				
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
