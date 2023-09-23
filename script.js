const pastors = [
    {
        name: 'Chris Rouse',
        age: 52,
        picture: 'All Pictures/Our Staff - Chris Rouse.jpg',
        title: 'Lead Pastor',
        email: 'chris@faithchurchgallatin.org',
        email_img: 'All Pictures/Email Chris.png',
        bio: "Born into a Southern Baptist pastor’s home, honored to be the husband to Angela, and the father of Alayna (and husband, Beau), Caleb, and Ava. Most recently and joyfully, he serves as “Chief” to his granddaughters, Addie and Emmie. Pastor Chris loves all sports and is a die-hard Kentucky Wildcat and Dallas Cowboy fan. He loves to read, watch movies, and play outside with the grandkids."
    },
    {
        name: 'Billy Fuqua',
        age: 44,
        picture: 'All Pictures/Our Staff - Billy Fuqua.jpg',
        title: 'Discipleship Pastor',
        email: 'billy@faithchurchgallatin.org',
        email_img: 'All Pictures/Email Billy.png',
        bio: "Billy is born and raised in Gallatin, TN. His is a dramatic story of God is faithful and persistent pursuing of us as lost children. He is known and well respected by the work of Jesus in his life. His love for God, his family and his community is evident in the way he lives, works, and plays. He is married to Marsha and they have three children, Erin (and husband Chris), Ashlyn, and Cooper. "
    },
    {
        name: 'Steve Oldham',
        age: 42,
        picture: 'All Pictures/Our Staff - Steve Oldham.jpg',
        title: 'Family Pastor',
        email: 'steve@faithchurchgallatin.org',
        email_img: 'All Pictures/Email Steve.png',
        bio: 'Steven was born and raised in Gallatin and in the church. He is a gifted worship leader, and preacher. However, the passion of his heart is families. Steven is married to Niki and they have three children; Callie Beth, Carsen, and Camden. His hobbies are any and all sports, reading, and listening to music'
    }
];


// JavaScript
pastors.forEach((pastor, index) => {
    let cardFlip = document.createElement('div');
    cardFlip.className = 'card-flip';
    cardFlip.id = pastor.name.toLowerCase().replace(' ', '-'); // "chris-rouse", "billy-fuqua", "steve-oldham", "marlin-stroop"
    cardFlip.innerHTML = `
    <div class="staff-card">
        <div class="card-front">
            <img src="${pastor.picture}" class="card-img-top" alt="Picture of ${pastor.name}">
            <div class="card-body">
                <h5 class="card-title">${pastor.name}</h5>
                <h5 class="card-text">${pastor.title}</h5>
                <a class='email-link' href='mailto:${pastor.email}'>
                    <img class=' figure figure-img' src="${pastor.email_img}" style= width:113px ; height:30px ;>
                </a>
                <img src="All Pictures/Hamburger Bio Button.png" class="bio-button" alt="See Bio" onclick="this.parentNode.parentNode.parentNode.classList.toggle('is-flipped');">
            </div>
        </div>
        <div class="card-back">
            <div class="card-body">
                <p>${pastor.bio}</p>
                <img src="All Pictures/Hamburger Bio Button.png" class="bio-button" alt="See Bio" onclick="this.parentNode.parentNode.parentNode.classList.toggle('is-flipped');">
            </div>
        </div>
    </div>
`;



    staffCards.appendChild(cardFlip);

    let bioButtons = cardFlip.querySelectorAll('.bio-button');
bioButtons.forEach((button) => {
    button.addEventListener('click', () => {
        cardFlip.classList.toggle('is-flipped');
    });
});

});
//new staff needs to be added to the grid
const staff = [{
    name: 'Dave McBrdide',
    picture: 'All Pictures/Dave Headshot.png',
    title: 'Financial Advisor'
},
{
    name:'Jennifer Clark',
    picture: 'All Pictures/Jennifer Headshot.png',
    title: 'PDO Director'
},
{
    name:'Shana Wirt',
    picture: 'All Pictures/Shana Headshot 1.png',
    title: "Childrens Director"
},
{
    name: 'Ashley Sadler',
    picture: 'All Pictures/Ashley Headshot.png',
    title: 'Administrative Assistant'
}
];

staff.forEach((staffMember, index) => {
    let cardFlip = document.createElement('div');
    cardFlip.className = 'cardFlip';
    cardFlip.id = staffMember.name.toLowerCase().replace(' ', '-'); 
    cardFlip.innerHTML = `
        <div class="card-flip">
            <div class="card-front">
                <img src="${staffMember.picture}" class="card-img-top" alt="Picture of ${staffMember.name}">
                <div class="card-body">
                    <h5 class="card-title">${staffMember.name}</h5>
                    <h5 class="card-text">${staffMember.title}</h5>
                </div>
            </div>
        </div>
    `;
    staff_card.appendChild(cardFlip);
    // append cardFlip to a container element in your HTML, for instance:
    // document.querySelector('.container').appendChild(cardFlip);
});

