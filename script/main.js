const latestPost = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await res.json();
     allLatestPost(data)
}
latestPost()
const allLatestPost = data =>{
    // console.log(data)
    const letestPostCard = document.getElementById('letest-post-card')
    data.forEach(post => {
        // console.log(post)
        const postCard = document.createElement('div')
        postCard.classList = `card bg-base-100 w-96 shadow-xl border-[#12132D26] border-[1px]`
        postCard.innerHTML =`<figure>
                        <img src="${post.cover_image}"
                            alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <div>
                            <p class="flex items-center mulish-font font-normal text-base text-[#12132D99]"><img
                                    class="inline mr-2" src="images/Frame.svg" alt="">${post?.author?.posted_date? post.author.posted_date: "Not available"}</p>
                        </div>
                        <p class="mulish-font text-lg font-extrabold text-[#12132D] leading-7 mt-[14px] mb-1">${post.title}</p>
                        <p class="mulish-font text-base font-normal text-[#12132D99] leading-6 mb-3">${post.description}</p>
                        <div class="flex">
                            <img class="w-[44px] h-[44px] rounded-[44px]" src="${post.profile_image}" alt="">
                            <div class="ml-4">
                                <p class="font-bold text-[16px] mulish-font">${post.author.name}</p>
                                <p class="text-[14px] mulish-font text-[#12132D99]">${post?.author?.designation? post.author.designation:'unknown'}</p>
                            </div>
                        </div>
                    </div>`
                    letestPostCard.appendChild(postCard)
    });

    
}