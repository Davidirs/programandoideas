import { addPost } from '../post/addPost.js'
import { saveImage } from '../storage/saveImage.js'
import { auth } from "../firebase.js";
import { imageList } from '../storage/imageList.js';

const postForm = document.querySelector('#post-form');
var imgList = [{}, {}, {}, {}]

for (let i = 0; i < 4; i++) {
    $("#image-picker" + i).change(function (event) {
        console.log(this);
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = async function (e) {
                console.log("funcionando")
                $("#image-preview" + i).attr("src", e.target.result);
                const newName = input.files[0].lastModified + "-" + input.files[0].name;

                imgList[i] = {
                    "name": newName,
                    "data": e.target.result,
                    "url": "",
                }
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
}
postForm.addEventListener('submit', async e => {
    e.preventDefault();
    const user = auth.currentUser.email;
    for (let i = 0; i < imgList.length; i++) {
        if (imgList[i].name) {
            imgList[i].url = await saveImage(user, imgList[i].name, imgList[i].data);
        }
    }
    console.log("**Una vez subida las imagenes**********")
    const name = postForm["post-name"].value;
    const description = postForm["post-description"].value;
    const type = postForm["post-type"].value;
    const infodeveloper = postForm["post-infodeveloper"].value;


    const img1 = imgList[0].url; //postForm["image-picker0"].files[0] ? postForm["image-picker0"].files[0].name : "";
    const img2 = imgList[1].url; //postForm["image-picker1"].files[0] ? postForm["image-picker1"].files[0].name : "";
    const img3 = imgList[2].url; //postForm["image-picker2"].files[0] ? postForm["image-picker2"].files[0].name : "";
    const img4 = imgList[3].url; //postForm["image-picker3"].files[0] ? postForm["image-picker3"].files[0].name : "";
    const infoinvestor = postForm["post-infoinvestor"].value;
    const minamount = postForm["post-minamount"].value;
    const maxamount = postForm["post-maxamount"].value;

    var res = new Date();
    const dateposted = res.toLocaleDateString()
    res.setDate(res.getDate() + 30);
    const datelimit = res.toLocaleDateString();

    const post = {
        "user": user,
        "name": name,
        "description": description,
        "type": type,
        "infodeveloper": infodeveloper,
        "img1": img1,// await saveImage(user, imgList[0].name, imgList[0].data),
        "img2": img2,
        "img3": img3,
        "img4": img4,
        "infoinvestor": infoinvestor,
        "minamount": minamount,
        "maxamount": maxamount,
        "dateposted": dateposted,
        "datelimit": datelimit,
    }
    console.log(post)
    //console.log(imgList);
    addPost(post)
})