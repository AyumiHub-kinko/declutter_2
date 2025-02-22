let countdown;

function startCountdown() {
    let timeLeft = 120;  // 2分（120秒）
    const timerElement = document.getElementById("timer");
    const messageElement = document.getElementById("message");
    const imageContainer = document.getElementById("image-container");

    if (countdown) {
        clearInterval(countdown);
    }

    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
    ];

    // ランダムに1枚選択
    const selectedImage = images[Math.floor(Math.random() * images.length)];
    const baseName = selectedImage.split(".")[0]; // "image1" のように拡張子を除去
    imageContainer.innerHTML = `<img src="/static/images1/${selectedImage}" alt="ランダム画像">`;

    // 最初のメッセージ
    messageElement.textContent = "やってみよう！";

    countdown = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft === 60) {
            // 残り1分で画像＆メッセージ変更
            imageContainer.innerHTML = `<img src="/static/images2/${baseName}_2.jpg" alt="変更画像">`;
            messageElement.textContent = "がんばって！もう少し！";
        }

        if (timeLeft === 0) {
            clearInterval(countdown);
            timerElement.textContent = "00:00";
            messageElement.textContent = "終了しました！お疲れ様でした！";
            imageContainer.innerHTML = `<img src="/static/images3/${baseName}_3.jpg" alt="完了画像">`;
        } else {
            timeLeft--;
        }
    }, 1000);
}
