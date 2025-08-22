const restyleOtter = async () => {
    // Write your code here
    const title = document.querySelector('body').firstElementChild;
    title.classList.add('title');

    const cardContainerSection = document.createElement('section');
    cardContainerSection.id = 'cardContainer';
    const profileCardDiv = document.createElement('div');
    profileCardDiv.classList.add('profileCard');
    const picFrameDiv = document.createElement('div');
    picFrameDiv.classList.add('picFrame');
    const picFrameDivImg = document.createElement('img');
    picFrameDivImg.setAttribute('src', './images/otter_profile.webp'); // Set the src
    picFrameDivImg.setAttribute('alt', 'profilePic'); // Set the alt text
    picFrameDiv.append(picFrameDivImg); //
    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('userInfo');
    const userInfoTextDiv = document.createElement('div');
    const userInfoTextH2 = document.createElement('h2');
    userInfoTextH2.textContent = `Whiskers McOtter`;
    const userInfoTextP = document.createElement('p');
    userInfoTextP.textContent = `Hi! My name is Whiskers McOtter and I'm from Seattle, Washington. Some of my favorite things are Frappuccinos and fish.`;
    userInfoTextDiv.append(userInfoTextH2, userInfoTextP);
    const userInfoButtonDiv = document.createElement('div');
    const userInfoButton = document.createElement('button');
    userInfoButton.classList.add('active');
    userInfoButtonDiv.append(userInfoButton);

    userInfoDiv.append(userInfoTextDiv, userInfoButtonDiv);
    
    profileCardDiv.append(picFrameDiv, userInfoDiv); // <div class="profileCard"><div class="picFrame"></div><div class="userInfo"></div></div>


    const parentSection = document.querySelector('section#cardContainer')
    parentSection.append(profileCardDiv);



    const documentFragment = document.createDocumentFragment();
    documentFragment.append(parentSection);
    parentElement.append(documentFragment)


    

    btn.addEventListener('click', function () {
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
            btn.textContent = 'I am Online now, howdy!';
        } else {
            btn.textContent = 'Offline, click to call me!';
        }
    });
}

rebuildOtter();

