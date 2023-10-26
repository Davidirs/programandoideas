import { addPost } from '../add-post.js'
const postForm = document.querySelector('#post-form');
for (let i = 0; i < 4; i++) {
    $("#image-picker" + i).change(function (event) {
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $("#image-preview" + i).attr("src", e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
}
postForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = postForm["post-name"].value;
    const description = postForm["post-description"].value;
    const type = postForm["post-type"].value;
    const infodeveloper = postForm["post-infodeveloper"].value;
    const img1 = postForm["image-picker0"].files[0] ? postForm["image-picker0"].files[0].name : "";
    const img2 = postForm["image-picker1"].files[0] ? postForm["image-picker1"].files[0].name : "";
    const img3 = postForm["image-picker2"].files[0] ? postForm["image-picker2"].files[0].name : "";
    const img4 = postForm["image-picker3"].files[0] ? postForm["image-picker3"].files[0].name : "";
    const infoinvestor = postForm["post-infoinvestor"].value;
    const minamount = postForm["post-minamount"].value;
    const maxamount = postForm["post-maxamount"].value;

    var res = new Date();
    const dateposted = res.toLocaleDateString()
    res.setDate(res.getDate() + 30);
    const datelimit = res.toLocaleDateString();

    const post = {
        "name": name,
        "description": description,
        "type": type,
        "infodeveloper": infodeveloper,
        "img1": img1,
        "img2": img2,
        "img3": img3,
        "img4": img4,
        "infoinvestor": infoinvestor,
        "minamount": minamount,
        "maxamount": maxamount,
        "dateposted": dateposted,
        "datelimit": datelimit,
    }
    addPost(post)
})