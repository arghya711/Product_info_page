
let boolean = false;
const handleClick = () => {
    boolean = !boolean;
    if (boolean) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById('sun').classList.replace("fa-moon", "fa-sun");
        document.getElementById('sun').classList.replace("text-black", "text-black");

    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById('sun').classList.replace("fa-sun", "fa-moon");
        document.getElementById('sun').classList.replace("text-light", "text-black");
    }
}

function changeImage(color) {
    const productImage = document.getElementById('productImage');
    const newImageSrc = `image/product-${color}.png`;
    productImage.src = newImageSrc;

}

function celebrate() {
    const celeb = document.getElementById('celebrate');
    celeb.src = "image/gif.gif";

    function stop() {
        const celeb = document.getElementById('celebrate');
        celeb.src = "image/stop.png";
    }
    alert("Order placed Successfully!")
    setTimeout(stop, 2400);
}

const showMessage = () => {
    alert("Message sent successfully");
    window.location.href = "/index.html";
};
