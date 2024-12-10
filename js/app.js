const wrapper = document.querySelector('.wrapper')
const modalForm = document.querySelector('.modal__cardform')
const fName = document.querySelector('.fname');
const lName = document.querySelector('.lname');
const occupEl = document.querySelector('.profession');
const uniEl = document.querySelector('.university');
const gender = document.querySelector('.gender');
const USERS = JSON.parse(localStorage.getItem('users')) || [
    {
        id: 1,
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s",
        name: "John Doe",
        occupasion: 'Musician',
        university: 'Harvard',
    },
]

const maleImages = [
    {adress: "https://flbgroup.com/images/users/user-john-doe-437x437.jpg"},
    {adress: "https://i.pinimg.com/280x280_RS/75/3b/cf/753bcfb53ae87ed8f793535b41d96433.jpg"},
    {adress: "https://experianta.com/wp-content/uploads/avatars/23/6094430656f31-bpfull.jpg"},
    {adress: "https://salondesmaires-ain.fr/wp-content/uploads/2014/10/speaker-3.jpg"},
    {adress: "https://decisionsystemsgroup.github.io/workshop-html/img/john-doe.jpg"},
    {adress: "https://www.perkosis.com/uploads/staffs/big/9.jpg"},
    {adress: "https://captiontools.com/wp-content/uploads/2017/03/testy3-1.png"},
    {adress: "https://www.tadpole.co.nz/wp-content/uploads/2021/02/team-1.jpg"},
    {adress: "https://nwestco.com/wp-content/uploads/2016/08/13.jpg"},
    {adress: "https://media.licdn.com/dms/image/v2/D4E03AQGj9oanyG5Ltw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1685552354563?e=2147483647&v=beta&t=KhgbHb08-ElYyWP6J0nx8sF-RX5YuImFUi0TEHX1-mA"},
]

function getMaleImage(){
    const randomImage = Math.ceil(Math.random() * maleImages.length)
    return maleImages[randomImage].adress
}

const femaleImages = [
    {adress: "https://arcadia.io/assets/_leadership500/32457/anna-basevich-c-800x800-1.webp"},
    {adress: "https://d2gjqh9j26unp0.cloudfront.net/profilepic/03784baf4aac453afe61d6192438a51c"},
    {adress: "https://media.nngroup.com/media/people/photos/20181001_Raleigh-106.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg"},
    {adress: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIw-T4AwsHxUEZRngh0H1h5P682Ze-rtptdX3V88eWBr-B8N0pQtBch7oPWMAX3PDbgk&usqp=CAU"},
    {adress: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNGZcrcVL1oRavLwH6k3bqYNHi52pLbQ_ZNoSQJYTcGPPuITOlmBeD3W2YIgki4jh6Xk&usqp=CAU"},
    {adress: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5U9VAqUrB0-nUEI3CZ-GOfosZjUGOQ6DIqvHERhNK5laPGL7bkiaB5NDwPUzucrDr_o&usqp=CAU"},
    {adress: "https://www.wpshealthsolutions.com/assets/img/sara-redford.jpg"},
    {adress: "https://d2gjqh9j26unp0.cloudfront.net/profilepic/5caf1e235fefdd822cb8df2334663fa9"},
    {adress: "https://health-equity-action.org/sites/default/files/styles/large/public/pictures/2022-11/Anna-Peare-300x300.jpg?itok=2ZRiVLMD"},
    {adress: "https://media.licdn.com/dms/image/sync/v2/D5627AQFQy5PXajRuiA/articleshare-shrink_800/articleshare-shrink_800/0/1722365599587?e=2147483647&v=beta&t=o7aSeZl_xRS3l1e-wGd3IPh4K2IXw6iht18DjUw6tRk"},
]

function getFemalImage(){
    const randomImage = Math.ceil(Math.random() * femaleImages.length)
    return femaleImages[randomImage].adress
}

const popUpWindow = document.querySelector('.modal')
const openModalBtn = document.querySelector('.navAddBtn')
const closeModalBtn = document.querySelector('.closeBtn')

openModalBtn.addEventListener('click', ()=> {
    popUpWindow.style.display = 'flex'
    document.body.style.overflow = 'hidden'
})

closeModalBtn.addEventListener('click', ()=> {
    popUpWindow.style.display = 'none'
    document.body.style.overflow = 'scroll'
}) 

function createNewUser(data){
    while(wrapper.firstElementChild){
        wrapper.firstElementChild.remove()
    }
    data.forEach(card => {
        const usercard = document.createElement('div')
        const userCardImage = document.createElement('div')
        const userImage = document.createElement('img');
        const userCardDesc = document.createElement('div')
        const userInfo = document.createElement('div')
        const socialLinks = document.createElement('div')
        const contactBtn = document.createElement('button')


        contactBtn.textContent = 'Contact'
        socialLinks.className = 'social__links'
        socialLinks.innerHTML = `
         <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
        `
        userInfo.className = 'user__info'
        userInfo.innerHTML = `
         <h3>${card.name}</h3>
                        <p>${card.occupasion}</p>
                        <p>${card.university}</p>
        `
        userCardDesc.className = 'usercard__desc'
        userImage.src = card.link
        userCardImage.className = 'usercard__image'
        usercard.className = 'usercard'

        userCardDesc.append(userInfo, socialLinks, contactBtn)
        userCardImage.append(userImage)
        usercard.append(userCardImage, userCardDesc)
        wrapper.appendChild(usercard)
    })
}

window.addEventListener('load', () => {
    createNewUser(USERS)
})

modalForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    if(!fName.value.trim() || !lName.value.trim() || !occupEl.value.trim() || !uniEl.value.trim() || !gender.value === ""){
    alert('Error: There must be at least one character in each input!')       
    }else{
        const newUser = {
            id: new Date().getTime(),
            link: `${gender.value === 'Male' ? getMaleImage() : getFemalImage()}`,
            name: `${fName.value} ${lName.value}`,
            occupasion: occupEl.value,
            university: uniEl.value
        }
    
        USERS.push(newUser)
        localStorage.setItem('users', JSON.stringify(USERS))
        createNewUser(USERS)

        fName.value = ""
        lName.value = ""
        occupEl.value = ""
        uniEl.value = ""
        gender.value = ""
        popUpWindow.style.display = 'none'
    document.body.style.overflow = 'scroll'
    }
})
