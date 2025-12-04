var j = document.querySelector('body')
var p = document.querySelector('.allreels')



const posts = [
  { 
    ismuted: true,
    username: "@satya_pyne",
    likeCount: 1200,
    commentCount: 85,
    shareCount: 45,
    isLiked: false,
    caption: "kindness of the thief 🔥",
    video: "videoplayback.mp4",
    userProfileImage:"https://randomuser.me/api/portraits/men/29.jpg",
    isFollowed: false
  },
  {
    ismuted: true,
    username: "@travel_with_Satya",
    likeCount: 3400,
    commentCount: 210,
    shareCount: 130,
    isLiked: true,
    caption: "Sunset at Goa hits different 🌅✨",
    video: "jac.mp4",
    userProfileImage: "https://randomuser.me/api/portraits/women/68.jpg",
    isFollowed: false
  },
  {
    ismuted: true,
    username: "@satyapyne",
    likeCount: 980,
    commentCount: 40,
    shareCount: 25,
    isLiked: false,
    caption: "Trying Kolkata's iconic biryani today! 😍🍽️",
    video: "videoplayback.mp4",
    userProfileImage:"https://randomuser.me/api/portraits/men/75.jpg",
    isFollowed: true
  },
  {
    ismuted: false,
    username: "@gaming_satya",
    likeCount: 5200,
    commentCount: 330,
    shareCount: 180,
    isLiked: true,
    caption: "New GTA 6 trailer reaction! 🤯🔥",
    video: "jac.mp4",
    userProfileImage: "https://randomuser.me/api/portraits/women/12.jpg",
    isFollowed: false
  },
  { 
    ismuted: true,
    username: "@dance_with_satya",
    likeCount: 740,
    commentCount: 22,
    shareCount: 18,
    isLiked: false,
    caption: "Trying a new shuffle routine 🕺",
    video: "jac.mp4",
    userProfileImage: "https://example.com/users/dancer.jpg",
    isFollowed: true
  }
];
function adddata(){
sum = ''
posts.forEach(function(fac,idk){
  console.log(idk)
  sum = sum + `<div class="reel1">
                    <div id='${idk}' class="mute">${fac.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}</div>
                    <video src="${fac.video}" ${fac.ismuted?'muted':''} autoplay loop></video>
                     <div class="buton">
                        <img src="${fac.userProfileImage}" alt="">
                        <h3>${fac.username}</h3> 
                         <button> <h3 id='${idk}'>${fac.isFollowed?'unfollow':'follow'}</h3></button>
                         <br><h2>${fac.caption} #short</h2>
                        

                    </div>
                    <div class="new1">
                          <div id='${idk}' class="like">
                            ${fac.isLiked?'<i class="ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}
                           <h2>${fac.likeCount}</h4></div>
                        <div class="comment">
                            <h4 class="commentlogo"><i class="ri-chat-3-line"></i></h4>
                        <h2>${fac.commentCount}</h2></div>
                        <div class="share">
                            <h4><i id='${idk}' class="ri-share-forward-line"></i></h4>
                        <h2>${fac.shareCount}</h2></div>
                        <div class="menu"><i class="ri-more-2-line"></i></div>


                    </div>
                
                </div>`
})

p.innerHTML = `${sum}`
}
adddata()

var t = document.querySelector('.buton button h3')
var y = document.querySelector('.like-logo i ')
var h = document.querySelector('.reel1 .mute .ri-volume-mute-fill')

p.addEventListener('click',function(gh){
  console.log(gh)
 if(gh.target.innerHTML == 'follow'){
   posts[gh.target.id].isFollowed = true
 }
 else{
  posts[gh.target.id].isFollowed = false
 }
 if(gh.target.className == 'like'){
  if (posts[gh.target.id].isLiked == false){
      posts[gh.target.id].isLiked = true
      posts[gh.target.id].likeCount++
  }
  else{
    posts[gh.target.id].isLiked = false
    posts[gh.target.id].likeCount++

  }
 }
 if(gh.target.className == 'mute'){
    if(posts[gh.target.id].ismuted == false){
      posts[gh.target.id].ismuted = true
    }
    else{
       posts[gh.target.id].ismuted = false
    }
  
  }

   adddata()

})

//t.addEventListener('click',function(){
//  if()
//})
