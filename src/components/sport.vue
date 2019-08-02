<template>
    <div>
        <router-link :to="{name: 'sportitems'}" class="name">
        <p>Sport</p>
        </router-link>
        <p class="amount">-$1,000
            <router-link :to="{name: 'sportitemsform'}">
            <img src="../assets/plusicon.jpg"></router-link>
        </p>
    </div>
</template>

<style scoped>
div {
    margin: 10px 10px 5px 10px;
    width: 280px;
    max-width: 280px;
    height: 50px;
    font-size: 14px;
    background: #4E4E4E;
    border-radius: 7px;
    box-shadow: 0px 1px  #4E4E4E;
    display: flex;
    color: #ffffff;
    justify-content: space-between;
}
.name {
    margin-left: 10px;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
}
img {
        height: 16px;
        width: 14px;
        margin-left: 30px;
        margin-right: 10px;
    }
</style>
