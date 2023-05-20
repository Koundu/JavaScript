// alert("Please Select Profession")

var array=[
    {
        id:1,
        name:"john",
        age:"18",
        profession:"developer"
    },
    {
        id:2,
        name:"jack",
        age:"20",
        profession:"developer"
    },
    {
        id:3,
        name:"karen",
        age:"19",
        profession:"admin"
    }
]

const addUser = document.getElementById('add-user')

addUser.addEventListener('click',() =>{
    array.push(array[1])
    array.push()
})

