<template>
    <form>
        Name Of Category:
        <select name="category" class="select">
            <option value="car">Car</option>
            <option value="sport">Sport</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
        </select>
        Budget:
        <input name="item" type="text">
        Month and Year:
        <input type="month" name="date">
        <router-link :to="{name: 'home'}">
        <center><input type="submit" class="submit"></center>
        </router-link>
</form>
</template>

<style scoped>
    form {
        margin: auto;
        padding: 20px;
        background: #4E4E4E;
        border-radius: 7px;
        box-shadow: 0px 1px  #4E4E4E;
        height: 400px;
        max-width: 250px;
        width:250px;
    }
    input {
        padding: 10px;
        margin: 15px;
        width: 200px;
        height: 40px;
        border-radius: 10px;
        box-shadow: 0px 1px  #4E4E4E;
        background: #3C3C3C;
        color: #ffffff;
    }
    .select {
        padding: 10px;
        margin: 15px;
        width: 200px;
        height: 40px;
        border-radius: 9px;
        box-shadow: 0px 1px  #4E4E4E;
        background: #3C3C3C;
        color: #ffffff;
    }
    .submit {
        padding: 10px;
        margin: 15px;
        width: 100px;
        height: 40px;
        border-radius: 9px;
        box-shadow: 0px 1px  #3C3C3C;
        background: #3C3C3C;
        color: #ffffff;
        text-align: center;
    }
</style>
