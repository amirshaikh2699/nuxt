<template>
  <div>
    <p v-for="(number, index) of formattedNumbers" :key="index" >{{number}} </p>
    <input v-model="numInp" type="text">
    <button @click="add">push</button>
  </div>
</template>

<script>
import TestComp from '~/components/TestComp'
export default {
  layout: 'default',
  components: {
    TestComp
  },
  data() {
    return {
      numInp: '',
      page: 0,
      numbers: [
        '123.1',
        '123.3',
        '123.1',
        '123.3',
        '123.4',
        '123.5',
      ],
      users: [
        "Aaran",
        "Aaren",
        "Aarez",
        "Aarman",
        "Aaron",
        "Aaron-James",
        "Aarron",
        "Aaryan",
        "Aaryn",
        "Aayan",
        "Aazaan",
        "Abaan",
        "Abbas",
        "Abdallah",
        "Abdalroof",
        "Abdihakim",
        "Abdirahman",
        "Abdisalam",
        "Abdul",
        "Abdul-Aziz",
      ]
    };
  },
  methods: { 
    add() {
      this.numbers.push(this.numInp)
      this.numInp = '';
    },
    calc() {
      console.log(this.formattedNumbers)
    }
  },
  computed: {
    formattedNumbers() {
      return this.numbers.map(number=>{
        return 'Value is '+parseInt(number);
      })
    },
    formattedData() {
      // return this.users.map(user=>{
      //   return 'Mr.'+user;
      // })
      // let data = [];
      // for (let i = this.page; i < (this.page+5); i++) {
      //   data.push(this.users[i])
      // }
      // return data;
    },
  },
};
</script>
