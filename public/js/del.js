$('document').ready(function(){
    $('.del-post').on("click",function(e){
        $target=$(e.target);
        const id=$target.attr('data-id');
        $.ajax({
            type:'DELETE',
            url:'/home/'+id,
            success:function(response){
                alert('Article Deleted');

                window.location.href('/');
            }
        })
    });
    $('.add-follower').on("click",function(e){
        $target=$(e.target);
        const id=$target.attr('data-id');
        $.ajax({
            type:'GET',
            url:'/users/follow/'+id,
            success:function(response){
                alert('USer followed');

                //window.location.reload();
            }
        })
    });
});