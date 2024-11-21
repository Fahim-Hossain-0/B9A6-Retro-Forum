const loadPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    allPost(data.posts)

}
loadPost()
const allPost = (posts) =>{
    const allPostContainer = document.getElementById('all-post')
    posts.forEach(post => {
        const showPostDiv = document.createElement('div')
        showPostDiv.innerHTML = `<div class="mb-6 flex justify-center gap-5 bg-[#797DFC1A] border border-[#797DFC] rounded-3xl p-10">
                        <div>
                            <div class="badge bg-[#10B981] badge-xs"></div>
                        </div>
                        <div>
                            <div class="flex items-center gap-5 inter-font font-medium text-sm text-[#12132DCC]">
                                <span># Music</span>
                                <span>Author : Awlad Hossain</span>
                            </div>
                            <p class="text-[20px] font-bold mulish-font text-[#12132D] mt-3">
                                10 Kids Unaware of Their Halloween Costume
                            </p>
                            <p class="text-base font-normal leading-[26px] inter-font text-[#12132D99] mt-4">
                                It’s one thing to subject yourself to ha Halloween costume
                                mishap because, <br />
                                hey that’s your prerogative
                            </p>
                            <hr class="bored-[#12132D40] border-dashed w-[596px] h-[1.9px] mt-5" />
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-start mt-6">
                                    <p class="inline-flex"><img class="mr-[12px]" src="images/Vector.svg" alt="">000
                                    </p>
                                    <p class="inline-flex px-6"><img class="mr-[12px]" src="images/tabler-icon-eye.svg" alt="">000
                                    </p>
                                    <p class="inline-flex"><img class="mr-[12px]" src="images/tabler-icon-clock-hour-9.svg" alt="">000
                                    </p>
                                </div>
                                   <div class="mt-4">
                                    <img class="" src="images/email 1.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>`
        allPostContainer.appendChild(showPostDiv);
    });
 
}

// allPost()
