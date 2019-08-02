<template>
<form v-on:submit.prevent>
Expense:
<input v-model="expense" name="item" type="text" placeholder="e.g: bag">
Price:
<input v-model="price" name="stuffs" type="text" placeholder="in naira">
Category:
<select v-model="category" name="category" class="select">
<option value="Groceries">Groceries</option>
<option value="Utilities">Utilities</option>
<option value="Restaurants">Restaurants</option>
<option value="Entertainment">Entertainment</option>
</select>
<!-- <router-link :to="{name: 'home'}"> -->
<button input @click="submit" class="submit">SUBMIT</button>

<!-- </router-link> -->
<table>
<tr v-for="(item, key) in items" :key="key">
<td>{{item.expense}}</td>
<td>{{item.price}}</td>
<td>{{item.category}}</td>
</tr>

</table>
<div>
<p>Total: {{ total }}</p>
</div>
</form>
</template>

<style scoped>
form {
        margin: auto;
        padding: 20px;
        background: #4E4E4E;
        border-radius: 7px;
        box-shadow: 0px 1px  #4E4E4E;
        height: 410px;
        max-width: 250px;
        width:250px;
    }
    input {
        padding: 5px;
        margin: 10px;
        width: 200px;
        height: 40px;
        border-radius: 10px;
        box-shadow: 0px 1px  #4E4E4E;
        background: #3C3C3C;
        color: #ffffff;
    }
    .select {
        padding: 5px;
        margin: 10px;
        width: 200px;
        height: 40px;
        border-radius: 9px;
        box-shadow: 0px 1px  #4E4E4E;
        background: #3C3C3C;
        color: #ffffff;
    }
    .submit {
        padding: 5px;
        margin: 10px;
        width: 100px;
        height: 30px;
        border-radius: 9px;
        box-shadow: 0px 1px  #3C3C3C;
        background: #3C3C3C;
        color: #ffffff;
        text-align: center;
    }
.submit {
padding: 10px;
margin: 20px;
width: 100px;
height: 50px;
border-radius: 9px;
box-shadow: 0px 1px #3C3C3C;
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


</style>

<script>




export default {
data: function() {
return{
expense: '',
price: '',
category: '',
price:'',
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
"price": this.price,
}
this.items.push(result)
console.log("My Items: ",this.items);
this.total = parseFloat(this.total) + parseFloat(result.price);


}
}
}


</script>
