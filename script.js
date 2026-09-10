// ==============================================
// REGISTRO DO SERVICE WORKER
// ==============================================
if ("serviceWorker" in navigator) {
    window.addEventListener("Load", () => {
        navigator.serviceWorker
        .register("sw.js")
        .then( () => {
            console.log("Service Worker registrado com sucesso!");
        })
        .catch((erro) => {
            console.log("Erro ao registrar o Service Worker: ", erro);
        });
    });
}