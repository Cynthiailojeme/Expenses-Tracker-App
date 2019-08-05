<template>
    <div>
        <table style="width:100%">
                <tr>
                    <th style="float:left; margin-left: 20px;">Car</th>
                    <!-- <td style="float:left; margin-left: 20px;">{{ expense }}</td>
                    <td style="right:10px;"></td> -->
                </tr>
                <!-- <tr v-for="(item, key) in items" :key="key">
                    <td>{{ item.expense }}</td>
                    <td>{{ item.price }}</td>
                </tr> -->

                <tr>
                    <td>{{ expense }}</td>
                    <td>{{ price }}</td>
                </tr>
                <!-- <tr>
                    <td>Fuel<br>22-07-19</td>
                    <td>$200</td>
                </tr>
                <tr>
                    <td>Gas<br>22-07-19</td>
                    <td>$100</td>
                </tr> -->
                <!-- <tr>
                    <td>Door handle<br>22-07-19</td>
                    <td>$200</td>
                </tr>
                <tr>
                    <td>Tyres<br>22-07-19</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Gas<br>22-07-19</td>
                    <td>$200</td>
                </tr>
                <tr>
                    <td>Fuel<br>22-07-19</td>
                    <td>$100</td>
                </tr> -->
            </table>
    </div>
</template>

<script>
import router from '../router.js';
export default {
    name: 'caritems',
    props: ["item"],
    components: {

    },
    created() {
    this.expense = this.$route.params.expense;
    this.price = this.$route.params.price;
     },
    data () {
    return {
    expense: this.expense,
    price: this.price
    }
}
}
</script>


<style scoped>
div{
    margin: auto;
    padding-top: 20px;
    height: 430px;
    max-width: 300px;
    width:300px;
    font-size: 14px;
    background: #4E4E4E;
    border-radius: 8px;
    box-shadow: 0px 1px  #4E4E4E;
    }
    table, th, td {
        border-collapse: collapse;
        border: none;
        overflow: hidden;
        }
    td {
        padding: 12px;
    }
</style>
