
const loadLatest = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const information = await res.json();
    const latest = information;

    // console.log(latest);
    displayLatest(latest);
}

const displayLatest = details => {
    details.forEach(detail => {

        // console.log(detail);
        const latestContainer = document.getElementById('latest-container')
        const latestCard = document.createElement('div');
        latestCard.classList = `card card-compact w-96 bg-base-100 shadow-xl mb-4`;
        latestCard.innerHTML = `
        <figure class="px-5 pt-5"><img class="rounded-lg" src="${detail.cover_image}" alt="Shoes" /></figure>
                        <div class="card-body">
                            <div class="flex gap-3">
                            <img class="h-6 w-6" src="images/icons8-calender-64.png" alt="">
                            <h3 class="text-16px text-[#12132D99]">${detail?.author?.posted_date ||' No Publish Date'}</h3>
                            </div>
                            <h2 class="card-title text-[18px] text-black font-bold">${detail.title}</h2>
                            <p class="text-[#12132D99] text-16px">${detail.description}</p>
                            <div class="card-actions mt-3 ">
                            <div>
                                <img class="h-11 w-11 rounded-full" src="${detail.profile_image}" alt="">
                            </div>
                            <div>
                                <h3 class="text-[16px] text-black font-bold">${detail.author.name}</h3>
                                <h3 class="text-[14px] text-[#12132D99]">${detail?.author?.designation || 'Unknown'}</h3>
                            </div>
                            </div>
                        </div>
        
        `;

        latestContainer.appendChild(latestCard);
    })
  

    // console.log(details);
}

loadLatest();

