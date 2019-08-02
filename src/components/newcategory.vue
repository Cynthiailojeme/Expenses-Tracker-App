<template>
    <div>
        <p>
            Create new category
            <router-link :to="{name: 'addcategoryform'}">
            <img src="../assets/plusicon.jpg"></router-link>
        </p>
    </div>
</template>

<style scoped>
    p {
        color: #ffffff;
        margin-left: 20px;
        font-size: 12px;
        font-weight: bold;
    }
    img {
        float: right;
        height: 16px;
        width: 14px;
        margin-right: 21px;
    }
</style>

