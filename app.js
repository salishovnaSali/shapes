const API = "https://dummyjson.com/users"

let user =document.querySelector(".user")


async function getuser () {
    try {
        const res = await fetch(API)
        const data = await res.json ()
        console.log (data);

        user.innerHTML = data.users.map((item) =>{
            return`
            <div class="container">
            ${item.firstName}
            <br>${item.lastName}
                </div>
            <div class="img">
               <img src =" ${item.image}" />
                </div>`
           
        }).join ("")
    } catch (error){
// console.log(error)
    }
}  
getuser()