const {isLike,addStar,removeStar}=require('../database/qeures')

const checkStar=(req)=>{
  const {user_id,post_id}=req.body
  if(req.user.id===user_id){
    isLike(user_id,post_id).then(({rows})=>{
      if(!rows[0]){
        addStar(user_id,post_id)
      }else{
        let a=rows[0].id
        removeStar(a)
      }
    })
  }
  
}
module.exports=checkStar