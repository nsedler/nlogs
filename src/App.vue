<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class App extends Vue {
}

</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap');
	body {
		font-family: 'Fira Code', monospace;
		background-color: #011627;
	}
</style>
