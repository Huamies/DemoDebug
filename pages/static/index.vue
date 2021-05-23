<template>
	<view>
		
		<!-- 顶部文字 -->
		<view class="title" :class="topNavStyle.class" :style="topNavStyle.style">
			<view class="flex_col">
				<view class="box1"></view>
				<view class="flex_grow flex_col flex_center tab">
					<view v-for="(item,index) in topNavArr" :key="index"
					 :class="{ 'active':topNavIndex==index }" 
					 :data-index="index" @tap="changeTopNav">{{item}}</view>
				</view>
				<view class="box1 align_r">
					
				</view>
			</view>
		</view>
		
		<!-- 滑动页的图片 -->
		<card-swiper></card-swiper>
		
		<!-- 滑动页下部分文字 -->
		<view style="height: 233px;">
			<view style="padding-top: 50rpx;text-align: center;">向上滚动查看标题栏渐变效果</view>
		</view>
		<!-- 底部操作条 -->
		<view class="cu-bar tabbar margin-bottom-xl bg-white">
			<!-- 首页替换 -->
			<view class="action text-green" v-show="tap" @click="changeIcon(tap,'1')">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view class="action text-gray" v-show="!tap" @click="changeIcon(tap,'1')">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<!-- 分类替换 -->
			<view class="action text-green" v-show="fl" @click="changeIcon(fl,'2')">
				<view class="cuIcon-similar"></view> 分类
			</view>
			<view class="action text-gray" v-show="!fl" @click="changeIcon(fl,'2')">
				<view class="cuIcon-similar"></view> 分类
			</view>
			
			<view class="action text-gray add-action">
				<button class="cu-btn cuIcon-add bg-green shadow"></button>
				发布
			</view>
			
			<!-- 购物车替换 -->
			<view class="action text-green" v-show="gwc" @click="changeIcon(gwc,'3')">
				<view class="cuIcon-cart">
					<!-- <view class="cu-tag badge">99</view> -->
				</view>
				购物车
			</view>
			<view class="action text-gray" v-show="!gwc" @click="changeIcon(gwc,'3')">
				<view class="cuIcon-cart">
					<!-- <view class="cu-tag badge">99</view> -->
				</view>
				购物车
			</view>
			<!-- 我的替换 -->
			<view class="action text-green" v-show="me" @click="changeIcon(me,'4')">
				<view class="cuIcon-my">
					<!-- <view class="cu-tag badge"></view> -->
				</view>
				我的
			</view>
			<view class="action text-gray" v-show="!me" @click="changeIcon(me,'4')">
				<view class="cuIcon-my">
					<!-- <view class="cu-tag badge"></view> -->
				</view>
				我的
			</view>
		</view>
		
	</view>
</template>

<script>
	import cardSwiper from "@/pages/component/helang-cardSwiper/helang-cardSwiper.vue"
	export default {
		data() {
			return {
				topNavIndex:0,
				topNavArr:['推荐','热门','新作'],
				pageScrollTop:0,	// 页面滚动距离
				tap:true,
				fl:false,
				gwc:false,
				me:false,
				
			}
		},
		components:{
			cardSwiper
		},
		computed:{
			topNavStyle(){
				let r = this.pageScrollTop  / 100;
				return {
					"class":r>=0.85?'style2':'',
					"style":`background-color: rgba(66, 185, 131,${r>=1?1:r});`
				}
			}
		},
		onLoad() {
			
		},
		// 页面滚动监听
		onPageScroll(e){
			this.pageScrollTop = Math.floor(e.scrollTop);
		},
		methods: {
			// 顶部导航改变 
			changeTopNav(e){
				this.topNavIndex = e.currentTarget.dataset.index
			},
			// 去搜索
			toSearch(){
				uni.navigateTo({
					url:`/pages/search/search`  
				})
			},
			//判断点击底部栏的点击情况
			changeIcon(a,b){
				if(a == false){
					switch (b){
						case "1":{
							this.tap = !a;
							this.fl = false;
							this.gwc = false;
							this.me = false;
							break;
						}
						case "2":{
							this.fl = !a;
							this.tap = a;
							this.gwc = a;
							this.me = a;
							break;
						}
						case "3":{
							this.gwc = !a;
							this.fl = a;
							this.tap = a;
							this.me = a;
							break;
						}
						case "4":{
							this.me = !a;
							this.gwc = a;
							this.fl = a;
							this.tap = a;
							break;
						}
					}
				}
				
			}
		}
	}
</script>

<style lang="scss">
	@import "lib/global.scss";
	
	page{
		background-color: #fff;
	}
	/* 标题栏 */
	.title{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		padding-top: var(--status-bar-height);
		z-index: 10;
		background-color: rgba(66,185,131,0);
		color: rgba(255,255,255,0.8);
		
		&>view{
			height: 44px;
		}
		
		.box1{
			width: 60rpx;
			margin: 0 40rpx;
			font-size: 36rpx;
		}
		
		
		.tab{
			&>view{
				margin: 0 30rpx;
				line-height: 64rpx;
				font-size: 36rpx;
				position: relative;
				letter-spacing: 0;
				transition: transform 0.3s ease-in-out 0s;
				transform: scale(1,1);
				
				&.active{
					color: rgba(255,255,255,1);
					transform: scale(1.15,1.15);
				}
			}
		}
		
		&.style2{
			color: #FFF;
			background-color: rgba(66, 185, 131,1);
			
			.tab{
				&>view{
					&.active{
						color: #FFF;
					}
				}
			}
		}
	}

</style>