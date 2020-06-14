<template>
	<span>
        <ul>
            <img :src="require('@/assets/images/Nlogs.png')" alt="NLogs">
            <li>
                <router-link to="/">Login</router-link>
            </li>

            <li>
                <router-link to="/home">Home</router-link>
            </li>
            
            <li>
                <router-link to="#">About</router-link>
            </li>
        </ul>
    </span>
</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';
    
    
	@Component
	export default class NavBar extends Vue {}
</script>

<style scoped>
    span {
        background-color: #011627;
        position: absolute;
        display: block;
        width: 100%;
        left: 0;
        top: 0;
        border-bottom: solid;
        border-bottom-color: white; 
    }
    span ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    span li {
        float: left;
    }
    
    span a {
        display: block;
        color: #FDFFFC;
        padding: 15px 15px;
        margin-left: 5px;
        text-decoration: none; 
    }
    
    span li a:hover {
        background-color: #023259;
    }
    
    .router-link-exact-active {
        font-weight: 300;
        color: #FF9F1C;
    }

    span img {
        margin-left: 10px;
        margin-bottom: 5px;

        height: 48px;
        width: 48px;
    }
</style>