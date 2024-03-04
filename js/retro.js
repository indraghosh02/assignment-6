const loadPost = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const post = data.posts;
    // console.log(post);
    displayPost(post);
}

const displayPost = post =>{
    const postContainer = document.getElementById('post-container')
    // console.log(post)
    post.forEach(info =>
        {
        console.log(info);
        //2 create a div 
        const postCard = document.createElement('div');
        postCard.classList = `flex h-[270px] w-[772px] bg-[#797DFC1A] rounded-2xl p-10 gap-5 mb-5`;
        //set inner html
        postCard.innerHTML = 
        `
                <div class="indicator">
                                    
                <span class="indicator-item badge badge-secondary"></span>
                <div class="grid h-[72px] w-[72px] bg-base-300 place-items-center rounded-2xl"><img src="${info.image}" alt=""></div>
            </div>
            <div>
                <div class="flex gap-5">
                    <h3 class="text-[14px] text-black font-semibold">#${info.category}</h3>
                    <h3 class="text-[14px] text-black font-semibold">Author: ${info.author.name} </h3>

                </div>
                <h3 class="text-[20px] font-extrabold">${info.title}</h3>
                <p class="text-[16px] text-[#12132D99] font-semibold pt-4">${info.description}</p>
                <hr class="border-dashed my-4">
                <div class="flex justify-between">
                    <div class="flex gap-8">
                        <div class="flex gap-4">
                            <img class="h-[21px] w-[21px]" src="images/icons8-comment-50.png" alt="" srcset="">
                            <h3 class="text-[16px] text-[#12132D99]">${info.comment_count}</h3>
                        </div>
                        <div class="flex gap-4">
                            <img class="h-[21px] w-[21px]" src="images/icons8-eye-24.png" alt="" srcset="">
                            <h3 class="text-[16px] text-[#12132D99]">${info.view_count}</h3>
                        </div>
                        <div class="flex gap-4">
                            <img class="h-[21px] w-[21px]" src="images/icons8-clock-50.png" alt="" srcset="">
                            <h3 class="text-[16px] text-[#12132D99]">${info.posted_time} min</h3>
                        </div>
                    </div>
                    <div>
                        <button class="btn  rounded-full bg-green-600"> <img class="h-[26px] w-[26px] " src="images/icons8-open-envelope-64.png" alt=""></button>
                    </div>
                </div>
                
            </div>
        `

        //4 append
        postContainer.appendChild(postCard);
        
    })
}

loadPost();