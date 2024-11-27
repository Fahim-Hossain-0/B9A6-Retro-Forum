let globalUpdates = [];

const loadPost = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
  const data = await res.json();
  globalUpdates = data.posts;
  allPost(data.posts);
};
loadPost();
const allPost = posts => {
  const allPostContainer = document.getElementById("all-post");
  posts.forEach((post, index) => {
    const showPostDiv = document.createElement("div");
    showPostDiv.innerHTML = `
      <div class="mb-6 flex justify-center gap-5 bg-[#797DFC1A] border border-[#797DFC] rounded-3xl p-10">
        <div>
          <div class="badge bg-[#10B981] badge-xs"></div>
        </div>
        <div>
          <div class="flex items-center gap-5 inter-font font-medium text-sm text-[#12132DCC]">
            <span># Music</span>
            <span>Author : ${post.author.name}</span>
          </div>
          <p class="text-[20px] font-bold mulish-font text-[#12132D] mt-3">
            ${post.title}
          </p>
          <p class="text-base font-normal leading-[26px] inter-font text-[#12132D99] mt-4">
            ${post.description}
          </p>
          <hr class="bored-[#12132D40] border-dashed w-[596px] h-[1.9px] mt-5" />
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start mt-6">
              <p class="inline-flex"><img class="mr-[12px]" src="images/Vector.svg" alt="">${post.comment_count}</p>
              <p class="inline-flex px-6"><img class="mr-[8px]" src="images/tabler-icon-eye.svg" alt="">${post.view_count}</p>
              <p class="inline-flex"><img class="mr-[8px]" src="images/tabler-icon-clock-hour-9.svg" alt="">${post.posted_time
      }</p>
            </div>
            <div class="mt-4">
              <button id='email-button' onclick="email(${index})"><img src="images/email 1.svg" alt=""></button>
            </div>
          </div>
        </div>
      </div>`;
    allPostContainer.appendChild(showPostDiv);
  });
};
let count = 0;
const email = (postIndex) => {
  count = 1
  const markAsRead = document.getElementById('mark-as-read');

  let readCount = parseInt(markAsRead.innerText) || 0;

  readCount += count;

  markAsRead.innerText = readCount;

  const titleUpdate = document.getElementById("title-update");
  const post = globalUpdates[postIndex]
  const titleUpdateDiv = document.createElement("div");
  titleUpdateDiv.innerHTML = `<div class="w-full flex items-center justify-between gap-12 p-6 my-3 rounded-2xl bg-[#12132D0D]">
                                <p class="text-[#12132D] mulish-font w-3/5">${post.title}</p>
                                <p class="text-[#12132D99] inter-font"><img class="inline" src="images/tabler-icon-eye.svg"
                                        alt="">${post.view_count}</p>
                            </div>`;
  titleUpdate.appendChild(titleUpdateDiv);

};
