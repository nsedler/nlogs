<template>
	<div id="login">
		<div id="logo">
			<img :src="require('@/assets/images/Nlogs.png')" alt="NLogs">
		</div>
		<div id="form">
			<p v-if="incorrect">Incorrect username/password</p>
			<input 
				type="text" 
				v-model="username" 
				placeholder="username" 
				@keyup.enter="login"/> <br>
			<input 
				type="password" 
				v-model="password" 
				placeholder="password" 
				@keyup.enter="login"> <br>
			<button v-on:click="login">Login</button>
		</div>
	</div>
</template>

<script lang="ts">

	import { Component, Vue } from 'vue-property-decorator';

	require('dotenv').config()

	@Component
	export default class Login extends Vue {
		
		username = '';
		password = '';
		incorrect = false; 
		
		login(): void {
			if(this.username == process.env.VUE_APP_USER && this.password == process.env.VUE_APP_PASSWORD) {
				this.$router.push('home');
			} else {
				this.incorrect = true;
			}
		}
	}
</script>

<style scoped>
	#login #form {
		position: absolute;
		border-radius: 25px;
		color: white;
		width: 600;
		height: 600;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	#login #form p {
		color: #E71D36;
	}

	#login #form input {
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
	}

	#login #form input:focus {
		outline: solid;
		outline-color: #FDFFFC;
	}

	#login #form button {
		border: none;
		background-color: #FDFFFC;
		text-decoration: none;
		padding: 8px 16px;
	}
	
	#login #form button:focus {
		outline: none;
	}

	#login #logo {
		color: #E71D36;
		position:absolute;
		left: 50%;
		top: 5%;
		transform: translate(-50%, 0%);
		font-size: 4vw;
	}

	#login #logo img {
		height: 256px;
		width: 256px;
	}
</style>