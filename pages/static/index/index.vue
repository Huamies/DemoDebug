<template>
	<view>
		<basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>
		<sy v-if="PageCur=='sy'"></sy>
		<me v-if="PageCur=='me'"></me>
		
		<view class="cu-bar tabbar bg-white shadow foot">
			
			<!-- tabbar 首页-->
			<view class="action" style="top: 8rpx;" @click="NavChange" data-cur="sy">
				<view :class="PageCur=='sy'?'cuIcon-homefill text-green':'cuIcon-homefill text-gray'"> <view class="margin-top-xs" style="font-size: 12px;">首页</view> </view>
			</view>
			
			<!-- tabbar 分类-->
			<view class="action" style="top: 8rpx;" @click="NavChange" data-cur="component">
				<view :class="PageCur=='component'?'cuIcon-sort text-green':'cuIcon-sort text-gray'"> <view class="margin-top-xs" style="font-size: 12px;">分类</view> </view>
			</view>
			
			<view class="action text-gray add-action">
				<button class="cu-btn cuIcon-add bg-green shadow"></button>
				发布
			</view>
			
			<!-- tabbar 其他-->
			<view class="action" style="top: 8rpx;" @click="NavChange" data-cur="plugin">
				<view :class="PageCur=='plugin'?'cuIcon-group text-green':'cuIcon-group text-gray'"> <view class="margin-top-xs" style="font-size: 12px;">其他</view> </view>
			</view>
			
			<!-- tabbar 我的-->
			<view class="action" style="top: 8rpx;" @click="NavChange" data-cur="me">
				<view :class="PageCur=='me'?'cuIcon-my text-green':'cuIcon-my text-gray'"> <view class="margin-top-xs" style="font-size: 12px;">我的</view> </view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'sy'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
