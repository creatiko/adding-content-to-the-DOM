const restyleOtter = async () => {
    // Write your code here
    const parentElement = document.querySelector('body');
    const titleDiv = parentElement.firstElementChild;
    titleDiv.classList.add('title');
    const parentSection = parentElement.lastElementChild;
    parentSection.id = 'cardContainer';
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
    const userInfoTextH2 = document.createElement('h2');
    userInfoTextH2.textContent = `Whiskers McOtter`;
    const userInfoTextP = document.createElement('p');
    userInfoTextP.textContent = `Hi! My name is Whiskers McOtter and I'm from Seattle, Washington. Some of my favorite things are Frappuccinos and fish.`;
    userInfoTextDiv.append(userInfoTextH2, userInfoTextP);
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
    parentSection.append(documentFragment)

    userInfoButton.addEventListener('click', function () {
        userInfoButton.classList.toggle('active');
        if (userInfoButton.classList.contains('active')) {
            userInfoButton.textContent = 'I am Online now, howdy!';
        } else {
            userInfoButton.textContent = 'Offline, click to call me!';
        }
    });
};

restyleOtter();

