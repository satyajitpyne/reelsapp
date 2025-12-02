var j = document.querySelector('body')
var p = document.querySelector('.allreels')



const posts = [
  {
    username: "@satya_pyne",
    likeCount: 1200,
    commentCount: 85,
    shareCount: 45,
    isLiked: false,
    caption: "Learning React Native every single day! 🔥",
    video: "bro.mp4",
    userProfileImage:"https://randomuser.me/api/portraits/men/29.jpg",
    isFollowed: false
  },
  {
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
    username: "@satyapyne",
    likeCount: 980,
    commentCount: 40,
    shareCount: 25,
    isLiked: false,
    caption: "Trying Kolkata's iconic biryani today! 😍🍽️",
    video: "bro.mp4",
    userProfileImage:"https://randomuser.me/api/portraits/men/75.jpg",
    isFollowed: true
  },
  {
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
  sum = sum + ` <div class="reel1">
                    <video src="${fac.video}" autoplay loop></video>
                     <div class="buton">
                        <img src="${fac.userProfileImage}" alt="">
                        <h3>${fac.username}</h3> 
                         <button> <h3 id='${idk}'>${fac.isFollowed?'unfollow':'follow'}</h3></button>
                         <br><h2>${fac.caption} #short</h2>
                        

                    </div>
                    <div class="new1">
                          <div id='${idk}' class="like">
                            <h4 class="likelogo"><i id='${idk}' class="ri-heart-line"></i></h4>
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

p.addEventListener('click',function(gh){
  
 if(gh.target.innerHTML == 'follow'){
   posts[gh.target.id].isFollowed = true
 }
 posts[gh.target.id].likeCount++
 
   adddata()

})
//t.addEventListener('click',function(){
//  if()
//})
