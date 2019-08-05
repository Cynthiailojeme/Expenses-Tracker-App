<template>
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
</template>

<script>
// import router from '../router.js';
// export default {
//     name: 'total',
//     props: ["item"],
//     components: {

//     },
//     created() {
//     this.total = this.$route.params.total;
//     },
//     data () {
//     return {
//     total: this.total
//     }
// }
// }
// </script>


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
</style>
