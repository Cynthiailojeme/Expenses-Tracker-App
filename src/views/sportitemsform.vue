<template>
<div>
    <div>
    <nav>
        <p class="time">17:52</p> 
        <p class="icons">
            <!-- <img src="../assets/wifi.png"> -->
            <img src="../assets/battery.png">
            <img src="../assets/signal.png">
        </p>
    </nav>
            <br>
            <br>
        <div>
            <a href="#" class="left">May 2019</a>
            <a href="#" class="calendar">June 2019</a>
            <a href="#" class="right">July 2019</a>
        </div>

        <div class="total">
            <p class="toggle">Total</p>
            <p class="none">$ {{ total }}</p>

        </div>
</div>
    
    <form v-on:submit.prevent>
        Item:
            <input v-model="expense" name="item" type="text" placeholder="E.g: Tickets">
        Price:
            <input v-model="price" name="stuffs" type="text" placeholder="In Dollar">
        Category:
            <select v-model="category" name="category" class="select">
                <option value="Car">Car</option>
                <option value="Sport">Sport</option>
                <option value="Food">Food</option>
                <option value="Home">Home</option>
            </select>

    <div>
        <!-- <router-link :to="{ name: 'caritems', params: { total: total,expense: expense,price: price} }"> -->
            <center><button input @click="submit" class="submit">Submit</button></center>
        <!-- </router-link> -->
    </div>

    <table>
        <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Category</th>
        </tr>

        <tr v-for="(item, key) in items" :key="key">
            <td>{{item.expense}}</td>
            <td>$ {{item.price}}</td>
            <td>{{item.category}}</td>
        </tr>
    </table>
</form>


</div>
    
</template>

<script>
import router from '../router.js';

export default {
    data: function() {
    return{
        expense: '',
        price: '',
        category: '',
        items: [],
        total: 0,
    }
    },
    methods: {
        submit(){
        const result = {
        "expense": this.expense,
        "price": `${this.price}`,
        "category": this.category,
        }
        this.items.push(result)
        console.log("My Items: ",this.items);
        this.total = parseFloat(this.total) + parseFloat(result.price);
    }
    }
}
</script>


<style scoped>
nav {
    align-content: center;
}
.time {
    float: left;
    font-size: 12px;
    color: #ffffff;
    margin-left: 10px;
    margin-top: -1px;
}
.icons img {
    float: right;
    color: #ffffff;
    margin-right: 10px;
    width: 15px;
    height: 15px;

}
.calendar {
    align-self: auto;
    text-decoration: none;
    font-size: 13px;
    color: #ffffff;
    margin-left: 60px;
}
.left {
    /* margin-top: 10px; */
    text-decoration: none;
    color: #4E4E4E;
    font-size: 13px;
    /* float: left; */
    margin-left: 10px;
}
.right {
    /* margin-top: 10px; */
    text-decoration: none;
    color: #4E4E4E;
    font-size: 13px;
    float: right;
    margin-right: 10px;
}
.total {
    margin: 10px;
    width: 290px;
    max-width: 290px;
    height: 40px;
    font-size: 16px;
    background: #4E4E4E;
    border-radius: 30px;
    box-shadow: 0px 1px  #4E4E4E;
    display: inline-block;
    color: #ffffff;
}
.toggle {
    float: left;
    margin-left: 20px;
}
.none {
    float: right;
    margin-right: 20px;
}
form {
        margin: auto;
        padding: 20px;
        font-size: 12px;
        background: #4E4E4E;
        border-radius: 7px;
        box-shadow: 0px 1px  #4E4E4E;
        height: 440px;
        max-width: 250px;
        width:250px;
    }
    input {
        padding: 5px;
        margin: 10px;
        width: 200px;
        height: 25px;
        border-radius: 6px;
        box-shadow: 0px 1px  #4E4E4E;
        background: #3C3C3C;
        color: #ffffff;
    }
    .select {
        padding: 5px;
        margin: 10px;
        width: 200px;
        height: 25px;
        border-radius: 6px;
        box-shadow: 0px 1px  #4E4E4E;
        background: #3C3C3C;
        color: #ffffff;
    }
    .submit {
        padding: 5px;
        margin: 10px;
        width: 100px;
        height: 25px;
        border-radius: 6px;
        box-shadow: 0px 1px  #3C3C3C;
        background: #3C3C3C;
        color: #ffffff;
        text-align: center;
    }
    .calendar {
        padding: 15px;
        margin: 20px;
        width: 400px;
        height: 40px;
        border-radius: 5px;
        box-shadow: 0px 1px #4E4E4E;
        background: #3C3C3C;
        color: #ffffff;
    }
    table, th, td {
        border-collapse: collapse;
        border: none; 
        overflow: hidden;
        }
    th {
        padding: 7px;
    }
    td {
        padding: 7px;
    }
    

</style>