<template>
  <div id='app'>
    <input v-model='search' /><P></P>
      <p>目前{{searchData.length}}筆</p>
    <ul class="ul_title" v-for='item in searchData ' :key='item'>
      <li>{{item.name}} 價格:{{item.price}} {{item.category}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      total: '',
      products: [
        {
          name: '奶茶',
          price: 25,
          category: '飲料'
        },
        {
          name: 'Wolf',
          price: 1500000,
          category: '人'
        },
        {
          name: '香蕉',
          price: 65,
          category: '水果'
        },
        {
          name: '傻逼C',
          price: 2500,
          category: '中國'
        },
        {
          name: '賓士',
          price: 10025,
          category: '汽車'
        },
        {
          name: '柑橘',
          price: 15,
          category: '水果'
        },
        {
          name: '奧迪',
          price: 25,
          category: '汽車'
        },
        {
          name: 'K',
          price: 124,
          category: '慘'
        }
      ]
    }
  },
  computed: {
    searchData: function () {
      console.log('asd')
      var search = this.search
      if (search) {
        return this.products.filter(function (product) {
          return Object.keys(product).some(function (key) {
            return (
              String(product[key])
                .toLowerCase()
                .indexOf(search) > -1
            )
          })
        })
      }
      return this.products
    }
  }
}
</script>

<style>
.ul_title{
  list-style: none;
  width: 500px;
  margin: 10px auto;
  padding: 10px;
  background: white;
  border: 1px solid #0e0e0e;
  border-radius: 6px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
}
input{
   width: 500px;
   padding: 10px
}
</style>
