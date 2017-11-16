<template>
	<div class="headerWrapper">
		<div class="header">
			<div class="headerContainer">
				<h3>记事本</h3>
				<p>设置</p>
			</div>
		</div>
		<div class="aside">
			<ul>
				<li>切换主题</li>
				<li>下载数据</li>
				<li>导入数据</li>
				<li>编辑数据</li>
				<li>清空数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	div,
	p {
		margin: 0;
		padding: 0;
	}
	.headerWrapper{
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		.header {
			width: 100%;
			background: #00b0f0;
			height: 70px;
			padding-right: 25%;
			.headerContainer {
				width: 50%;
				margin: auto;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				color: #fff;
				h3 {
					line-height: 70px;
					margin: auto;
				}
				p {
					cursor: pointer;
				}
			}
		}
		.aside {
			background: #7f7f7f;
			width: 250px;
			/*flex: 1;*/
			ul{
				overflow:hidden;
				li{
					list-style: none;
					border: 1px solid #00b0f0;
    			background: #00b0f0;
    			width: 100px;
    			height: 40px;
			    line-height: 40px;
			    color: #fff;
			    transition: background .3s ease-in;
			    text-align: center;
			    border-radius: 4px;
			    box-sizing: border-box;
			    margin: 10px 50px;
			    cursor: pointer;
				}
			}
		}
	}
</style>