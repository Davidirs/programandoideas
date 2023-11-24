export function numStars(num) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i<num) {
            stars += `<i class="fa-solid fa-star"></i>`
        }else{

            stars += `<i class="fa-regular fa-star"></i>`
        }
    }    
    return stars;
}