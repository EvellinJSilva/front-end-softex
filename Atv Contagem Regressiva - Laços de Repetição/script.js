document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("iniciarContagem");

    btn.addEventListener("click", () => {
        for (let i=10; i>=1; i--) {
            alert(i);
        }
    });
});