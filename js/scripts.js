const rebuildOtter = async () => {
    // Write your code here
    const parentElement = document.querySelector('body');
    const titleDiv = parentElement.firstElementChild;
    titleDiv.classList.add('title');
    const cardSection = parentElement.lastElementChild;
    cardSection.id = 'cardContainer';
    // Now we create the missing elements.
    const profileCardDiv = document.createElement('div');
    profileCardDiv.classList.add('profileCard'); // creates <div id="profileCard"></div>
    const picFrameDiv = document.createElement('div');
    picFrameDiv.classList.add('picFrame'); // creates <div class="picFrame"></div>
    const picFrameDivImg = document.createElement('img');
    picFrameDivImg.setAttribute('src', './images/otter_profile.webp'); // Set the src
    picFrameDivImg.setAttribute('alt', 'profilePic'); // Set the alt text
    picFrameDiv.append(picFrameDivImg);
    /* creates 
        <div class="picFrame">
            <img src="./images/otter_profile.webp" alt="'profilePic">
        </div>
    */
    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('userInfo'); // creates <div class="userInfo"></div>
    const userInfoTextDiv = document.createElement('div');
    const userName = document.createElement('h2');
    userName.textContent = `Whiskers McOtter`;
    const userBio = document.createElement('p');
    userBio.textContent = `Hi! My name is Whiskers McOtter and I'm from Seattle, Washington. Some of my favorite things are Frappuccinos and fish.`;
    userInfoTextDiv.append(userName, userBio);
    /* creates 
        <div>
            <h2>Whiskers McOtter</h2>
            <p>Hi! My name is Whiskers McOtter and I'm from Seattle, Washington. Some of my favorite things are Frappuccinos and fish.</p>
        </div>
    */
    const userInfoButtonDiv = document.createElement('div');
    const userInfoButton = document.createElement('button');
    userInfoButton.classList.add('active');
    userInfoButton.textContent = `I am Online now, howdy!`;
    userInfoButtonDiv.append(userInfoButton);
    /* creates 
        <div>
            <button class="active">Online now!</button>
        </div>
    */
    userInfoDiv.append(userInfoTextDiv, userInfoButtonDiv);
    /* creates 
        <div class="userInfo">
            <div>
                <h2>Whiskers McOtter</h2>
                <p>Hi! My name is Whiskers McOtter and I'm from Seattle, Washington. Some of my favorite things are Frappuccinos and fish.</p>
            </div>
            <div>
                <button class="active">Online now!</button>
            </div>
        </div>
    */
    profileCardDiv.append(picFrameDiv, userInfoDiv);
    /* creates 
        <div class="profileCard">
            <div class="picFrame">
                <img src="./images/otter_profile.webp" alt="'profilePic">
            </div>
            <div class="userInfo">
                <div>
                    <h2>Whiskers McOtter</h2>
                    <p>Hi! My name is Whiskers McOtter and I'm from Seattle, Washington. Some of my favorite things are
                        Frappuccinos and fish.</p>
                </div>
                <div>
                    <button class="active">Online now!</button>
                </div>
            </div>
        </div>
    */

    // We make the document fragment to insert to the DOM
    const documentFragment = document.createDocumentFragment();
    documentFragment.append(profileCardDiv);
    /* creates 
        <section id="cardContainer">
            <div class="profileCard">
                <div class="picFrame">
                    <img src="./images/otter_profile.webp" alt="'profilePic">
                </div>
                <div class="userInfo">
                    <div>
                        <h2>Whiskers McOtter</h2>
                        <p>Hi! My name is Whiskers McOtter and I'm from Seattle, Washington. Some of my favorite things are
                            Frappuccinos and fish.</p>
                    </div>
                    <div>
                        <button class="active">Online now!</button>
                    </div>
                </div>
            </div>
        </section>
    */
    // Now we insert to the DOM
    cardSection.append(documentFragment)

    userInfoButton.addEventListener('click', function () {
        userInfoButton.classList.toggle('active');
        if (userInfoButton.classList.contains('active')) {
            userInfoButton.textContent = 'I am Online now, howdy!';
        } else {
            userInfoButton.textContent = 'Offline, click to call me!';
        }
    });
};

rebuildOtter();

const rebuildOtterSolution = async () => {
    //add class to title element
    const titleDiv = document.querySelector('body').firstElementChild;
    titleDiv.classList.add('title');

    // add id to card section
    const cardSection = document.querySelector('section')
    cardSection.id = 'cardContainer'

    // create docucment fragment
    const documentFragment = document.createDocumentFragment()

    //create profile card
    const profileCardDiv = document.createElement('div')
    profileCardDiv.classList.add('profileCard')

    //create div for profile pic
    const pictureDiv = document.createElement('div')
    pictureDiv.classList.add('picFrame')
    // create picture for profile pic div
    const picture = document.createElement('img')
    picture.src = './images/otter_profile.webp'
    picture.alt = 'profilePic'

    // append profile picture to picture div and then to profile card
    pictureDiv.append(picture)
    profileCardDiv.append(pictureDiv)

    // create div for profile text
    const profileDiv = document.createElement('div')
    profileDiv.classList.add('userInfo')

    // create userInfo div
    const userInfoDiv = document.createElement('div')
    const userName = document.createElement('h2')
    userName.textContent = 'Whiskers McOtter'
    const userBio = document.createElement('p')
    userBio.textContent = `Hi! My name is Whiskers McOtter and I'm from Seattle, Washington. Some of my favorite things are Frappuccinos and fish.`

    //append text into user info divs and profile div
    userInfoDiv.append(userName, userBio)
    profileDiv.append(userInfoDiv)

    // create div for button
    const buttonDiv = document.createElement('div')
    const onlineButton = document.createElement('button')
    onlineButton.classList.add('active')
    onlineButton.textContent = 'Online now!'

    // append button and then to profile div
    buttonDiv.append(onlineButton)
    profileDiv.append(buttonDiv)

    // append to profilecard
    profileCardDiv.append(profileDiv)

    // append to the document fragment
    documentFragment.append(profileCardDiv)

    //append the fragment to the DOM
    cardSection.append(documentFragment)

}