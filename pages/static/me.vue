<template>
	<view class="bg-gradual-blue">
		<!-- 多条件三目运算 -->
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':modalName=='viewModa2'?'show':''">
			
			<!-- 顶部信息栏 -->
			<!-- <cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block>
				<block slot="content">个人信息</block>
			</cu-custom> -->	
				
			<!-- 头像 用户名-->	
			<view class='padding margin text-center'>
				<view class="padding">
					<view class="cu-avatar xl round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></view>
				</view>
				
				<text class="text-grey">用户名</text>
			</view>
			
			<!-- 选择操作栏 -->
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				
				<view class="cu-item arrow" @tap="showModal" data-target="viewModal" >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">图标 + 标题</text>
					</view>
				</view>
				
				<view class="cu-item arrow" @tap="showModal" data-target="viewModa2">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">图标 + 标题</text>
					</view>
				</view>
				
				<view class="cu-item arrow" >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">图标 + 标题</text>
					</view>
				</view>
				
			</view>
			
			<view class='padding margin text-center'>
				<view class='cu-btn bg-green lg block shadow radius margin-xl' @tap="showModal" data-target="viewModal">
					打开抽屉
				</view>
			</view>
			
		</scroll-view>
		
		<view class="DrawerClose" :class="modalName=='viewModal'?'show':modalName=='viewModa2'?'show':''" @tap="hideModal">
			<text class="cuIcon-pullright"></text>
		</view>
		
		<!-- 弹出的抽屉——1 -->
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				
				<form>
					<view class="cu-form-group margin-top">
						<view class="title text-black">邮件：</view>
						<input placeholder="两字短标题" name="input"></input>
					</view>
				</form>
				
			</view>
		</scroll-view>
		
		<!-- 弹出的抽屉——2 -->
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModa2'?'show':''">
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				
				<form>
					<view class="cu-form-group margin-top">
						<view class="title text-black">姓名：</view>
						<input placeholder="两字短标题" name="input"></input>
					</view>
				</form>
				
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName:null
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		},
	}
</script>

<style>
	page {
		background-image: var(--gradualBlue);
		width: 100vw;
		overflow: hidden;
	}

	.DrawerPage {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.4s;
	}

	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}

	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
	}

	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}

	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
	}

	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}

	.DrawerPage .cu-bar.tabbar .action button.cuIcon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}

	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}

	.DrawerPage .nav {
		flex: 1;
	}

	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}

	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}

	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
	}
</style>
